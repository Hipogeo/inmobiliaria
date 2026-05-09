export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white">

          <h1 className="text-xl font-semibold tracking-[0.2em]">
            SERGIO ULLUA
          </h1>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">

            <a href="/" className="hover:opacity-70 transition">
              Inicio
            </a>

            <a href="/propiedades" className="hover:opacity-70 transition">
              Propiedades
            </a>

            <a href="/nosotros" className="hover:opacity-70 transition">
              Nosotros
            </a>

            {/* ✅ CONTACTO LINK */}
            <a href="/contacto" className="hover:opacity-70 transition">
              Contacto
            </a>

          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury House"
            className="h-full w-full object-cover opacity-50"
          />

        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <p className="mb-6 text-sm uppercase tracking-[0.5em] text-gray-300">
            Inmobiliaria · San Pedro
          </p>

          <h2 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
            Propiedades extraordinarias para nuevas etapas de vida.
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
            Descubrí una nueva manera de comprar, vender e invertir en San Pedro.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="/propiedades"
              className="rounded-full bg-white px-8 py-4 text-sm font-medium uppercase tracking-widest text-black transition hover:bg-gray-200"
            >
              Ver propiedades
            </a>

            {/* ✅ CONTACTO BUTTON FIX */}
            <a
              href="/contacto"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-medium uppercase tracking-widest transition hover:bg-white hover:text-black"
            >
              Contactar
            </a>

          </div>

        </div>
      </section>

      {/* PROPIEDADES DESTACADAS */}
      <section className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 flex items-end justify-between">

            <div>

              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
                Destacadas
              </p>

              <h2 className="text-5xl font-bold">
                Propiedades seleccionadas
              </h2>

            </div>

            <a
              href="/propiedades"
              className="hidden text-sm uppercase tracking-widest text-gray-500 hover:text-black md:block"
            >
              Ver todas
            </a>

          </div>

          <div className="grid gap-10 md:grid-cols-3">

            {/* CARD 1 */}
            <div className="overflow-hidden rounded-[32px] bg-white shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
                alt="Casa"
                className="h-[320px] w-full object-cover"
              />

              <div className="p-8">

                <div className="mb-4 flex items-center justify-between">

                  <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                    San Pedro
                  </p>

                  <p className="text-sm text-gray-500">
                    Venta
                  </p>

                </div>

                <h3 className="mb-4 text-3xl font-bold">
                  Casa Moderna Minimalista
                </h3>

                <p className="mb-6 text-gray-600">
                  4 dormitorios · Piscina · Jardín · 420m²
                </p>

                <p className="text-2xl font-semibold">
                  USD 320.000
                </p>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="overflow-hidden rounded-[32px] bg-white shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1974&auto=format&fit=crop"
                alt="Departamento"
                className="h-[320px] w-full object-cover"
              />

              <div className="p-8">

                <div className="mb-4 flex items-center justify-between">

                  <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                    Centro
                  </p>

                  <p className="text-sm text-gray-500">
                    Venta
                  </p>

                </div>

                <h3 className="mb-4 text-3xl font-bold">
                  Departamento Premium
                </h3>

                <p className="mb-6 text-gray-600">
                  2 dormitorios · Terraza · Cochera
                </p>

                <p className="text-2xl font-semibold">
                  USD 185.000
                </p>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="overflow-hidden rounded-[32px] bg-white shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                alt="Casa"
                className="h-[320px] w-full object-cover"
              />

              <div className="p-8">

                <div className="mb-4 flex items-center justify-between">

                  <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                    Barrancas
                  </p>

                  <p className="text-sm text-gray-500">
                    Venta
                  </p>

                </div>

                <h3 className="mb-4 text-3xl font-bold">
                  Residencia Contemporánea
                </h3>

                <p className="mb-6 text-gray-600">
                  5 dormitorios · Vista abierta · Quincho
                </p>

                <p className="text-2xl font-semibold">
                  USD 450.000
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-6 py-32 text-white">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Contacto
          </p>

          <h2 className="mb-8 text-5xl font-bold leading-tight">
            Te ayudamos a encontrar tu próximo lugar.
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300">
            Comprá, vendé o invertí con una experiencia inmobiliaria moderna,
            cercana y profesional.
          </p>

          <a
            href="/contacto"
            className="inline-block rounded-full bg-white px-10 py-5 text-lg text-black transition hover:bg-gray-200"
          >
            Contactar ahora
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 px-6 py-10 text-center text-sm text-gray-500">
        © 2026 Sergio Ullua Inmobiliaria · San Pedro · Buenos Aires
      </footer>

    </main>
  );
}