import { PrismaClient } from "@prisma/client";
import { randomBytes, scryptSync } from "crypto";

const prisma = new PrismaClient();

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hashed = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hashed}`;
}

async function main() {
  await prisma.role.createMany({
    data: [{ name: "Doctor" }, { name: "Admin" }, { name: "Enfermera" }],
    skipDuplicates: true,
  });

  const roleDoctor = await prisma.role.findFirst({ where: { name: "Doctor" } });
  const roleAdmin = await prisma.role.findFirst({ where: { name: "Admin" } });
  const roleEnfermera = await prisma.role.findFirst({
    where: { name: "Enfermera" },
  });

  await prisma.user.createMany({
    data: [
      {
        username: "Dr. Martinez",
        password: hashPassword("22032002"),
        email: "dmartinez@sanitosv.com",
        roleId: roleDoctor!.id,
      },
      {
        username: "David Cruz",
        password: hashPassword("22032002"),
        email: "dcruz@sanitosv.com",
        roleId: roleAdmin!.id,
      },
      {
        username: "Henry Cruz",
        password: hashPassword("14052000"),
        email: "hcruz@sanitosv.com",
        roleId: roleEnfermera!.id,
      },
    ],
    skipDuplicates: true,
  });

  console.log("Seeder ejecutado con éxito");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
