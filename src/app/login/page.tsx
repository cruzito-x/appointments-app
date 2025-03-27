"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CiLock, CiUser } from "react-icons/ci";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (response?.error) {
      setError("Credenciales incorrectas");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 px-4">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex md:w-2/3 sm:w-full max-w-4xl flex-col md:flex-row">
          <div className="md:w-3/5 w-full p-5">
            <div className="text-left font-bold">
              Sanitos <span className="text-blue-900">SV</span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Iniciar Sesión
              </h2>
              <div className="border-2 border-blue-900 w-10 inline-block mb-3"></div>
              <p className="text-gray-400 my-3">
                Utiliza tu e-mail y contraseña para acceder a tu cuenta.
              </p>
              <form onSubmit={login} className="flex flex-col items-center">
                <div className="bg-gray-100 w-full max-w-xs p-2 flex items-center mb-3 rounded">
                  <CiUser className="text-gray-400 m-2" />
                  <input
                    className="bg-gray-100 outline-none text-sm flex-1 p-2"
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="bg-gray-100 w-full max-w-xs p-2 flex items-center mb-3 rounded">
                  <CiLock className="text-gray-400 m-2" />
                  <input
                    className="bg-gray-100 outline-none text-sm flex-1 p-2"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 border-2 border-blue-900 text-blue-900 rounded px-8 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-white transition duration-300"
                >
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
          <div className="md:w-2/5 w-full bg-blue-900 text-white rounded-tr-2xl md:rounded-br-2xl rounded-bl-2xl md:rounded-bl-none py-20 px-12 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-2">Sanitos SV</h2>
            <div className="border-2 w-10 border-white inline-block mb-3"></div>
            <p className="mt-5 mb-8 text-center">
              <span className="font-semibold">Eficiencia y Eficacia</span>{" "}
              <br /> a un clic de distancia.
            </p>
            <a
              className="mb-16 border-2 border-white rounded px-5 py-2 inline-block font-semibold hover:bg-white hover:text-blue-900 transition duration-300"
              href="#"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
