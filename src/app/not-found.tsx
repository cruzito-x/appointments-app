import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto w-screen h-screen lg:py-16 lg:px-6 flex items-center">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-900">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
              Parece que estás pérdido
            </p>
            <p className="mb-4 text-lg font-light text-gray-500">
              Lo sentimos, la página que buscas no existe. Te invitamos a que
              accedas a alguna de las páginas disponibles para ti.
            </p>
            <Link
              href="/login"
              className="mt-3 border-2 border-blue-900 text-blue-900 rounded px-8 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-white transition duration-300"
            >
              Volver
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
