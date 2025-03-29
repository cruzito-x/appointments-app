import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { scryptSync, timingSafeEqual } from "crypto";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Faltan credenciales");
        }

        // Buscar usuario en la base de datos
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("Usuario no encontrado");
        }

        // Separar salt y hash almacenado
        const [salt, storedHash] = user.password.split(":");

        // Hashear la contraseña ingresada con el mismo salt
        const hashedBuffer = scryptSync(credentials.password, salt, 64);

        // Convertir hash almacenado en buffer
        const storedBuffer = Buffer.from(storedHash, "hex");

        // Comparar de forma segura los hashes
        if (!timingSafeEqual(hashedBuffer, storedBuffer)) {
          throw new Error("Contraseña incorrecta");
        }

        return {
          id: `${user.id}`,
          name: user.username,
          email: user.email,
          role: user.roleId,
        };
      },
    }),
  ],
  pages: { signIn: "/login" },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
