export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="relative flex items-center justify-center bg-black px-6 py-32 text-white">

        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
            alt="Inmobiliaria"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gray-300">
            Nosotros
          </p>

          <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
            Una nueva visión inmobiliaria en San Pedro.
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
            Combinamos experiencia, estética y cercanía para crear una
            experiencia inmobiliaria moderna, transparente y profesional.
          </p>

        </div>
      </section>

      {/* HISTORIA */}
      <section className="px-6 py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              Nuestra historia
            </p>

            <h2 className="mb-8 text-5xl font-bold leading-tight">
              Una inmobiliaria construida desde una nueva etapa.
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Nacemos con la idea de redefinir la manera de presentar y
              comercializar propiedades en San Pedro.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Apostamos por una comunicación clara, una imagen moderna y una
              atención verdaderamente personalizada para cada cliente.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              Entendemos que cada operación representa mucho más que una compra
              o una venta: representa proyectos, cambios y nuevas etapas de
              vida.
            </p>

          </div>

          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1974&auto=format&fit=crop"
            alt="Casa moderna"
            className="rounded-[40px] object-cover shadow-2xl"
          />

        </div>
      </section>

      {/* VALORES */}
      <section className="bg-gray-100 px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              Valores
            </p>

            <h2 className="text-5xl font-bold">
              Nuestra forma de trabajar
            </h2>

          </div>

          <div className="grid gap-10 md:grid-cols-3">

            {/* CARD 1 */}
            <div className="rounded-[32px] bg-white p-10 shadow-lg">

              <h3 className="mb-6 text-2xl font-bold">
                Transparencia
              </h3>

              <p className="text-lg leading-relaxed text-gray-600">
                Creemos en una comunicación clara y honesta en cada operación.
              </p>

            </div>

            {/* CARD 2 */}
            <div className="rounded-[32px] bg-white p-10 shadow-lg">

              <h3 className="mb-6 text-2xl font-bold">
                Cercanía
              </h3>

              <p className="text-lg leading-relaxed text-gray-600">
                Acompañamos cada proceso de manera personalizada y humana.
              </p>

            </div>

            {/* CARD 3 */}
            <div className="rounded-[32px] bg-white p-10 shadow-lg">

              <h3 className="mb-6 text-2xl font-bold">
                Modernidad
              </h3>

              <p className="text-lg leading-relaxed text-gray-600">
                Incorporamos herramientas y diseño contemporáneo para elevar la
                experiencia inmobiliaria.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32">

        <div className="mx-auto max-w-5xl rounded-[40px] bg-black px-10 py-20 text-center text-white">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Contacto
          </p>

          <h2 className="mb-8 text-5xl font-bold leading-tight">
            Estamos listos para ayudarte a encontrar tu próximo lugar.
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
            Ya sea para comprar, vender o invertir, queremos acompañarte en
            cada paso.
          </p>

          <button className="rounded-full bg-white px-10 py-5 text-lg text-black transition hover:bg-gray-200">
            Contactar ahora
          </button>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 px-6 py-10 text-center text-sm text-gray-500">
        © 2026 Sergio Ullua Inmobiliaria · San Pedro · Buenos Aires
      </footer>

    </main>
  );
}