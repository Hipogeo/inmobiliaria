export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1974&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        {/* NAVBAR */}
        <header className="relative z-10 flex items-center justify-between px-10 py-6 text-white">
          <h1 className="text-2xl font-semibold tracking-wide">
            Sergio Ullua Inmobiliaria
          </h1>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <a href="#" className="hover:opacity-70 transition">
              Inicio
            </a>

            <a href="#" className="hover:opacity-70 transition">
              Propiedades
            </a>

            <a href="#" className="hover:opacity-70 transition">
              Nosotros
            </a>

            <a href="#" className="hover:opacity-70 transition">
              Contacto
            </a>
          </nav>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex h-[80vh] flex-col items-center justify-center px-6 text-center text-white">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-300">
            Nueva generación inmobiliaria
          </p>

          <h2 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Encontrá el lugar donde empieza tu próxima etapa.
          </h2>

          <p className="mt-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Propiedades seleccionadas en San Pedro con una experiencia moderna,
            clara y profesional.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-full bg-white px-8 py-4 text-black transition hover:bg-gray-200">
              Ver propiedades
            </button>

            <button className="rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black">
              Contactar
            </button>

          </div>
        </div>
      </section>

      {/* BUSCADOR */}
      <section className="-mt-20 relative z-20 px-6">

        <div className="mx-auto grid max-w-6xl gap-4 rounded-3xl bg-white p-6 shadow-2xl md:grid-cols-5">

          <select className="rounded-xl border border-gray-200 p-4 outline-none">
            <option>Operación</option>
            <option>Venta</option>
            <option>Alquiler</option>
          </select>

          <select className="rounded-xl border border-gray-200 p-4 outline-none">
            <option>Tipo</option>
            <option>Casa</option>
            <option>Departamento</option>
            <option>Lote</option>
          </select>

          <select className="rounded-xl border border-gray-200 p-4 outline-none">
            <option>Zona</option>
            <option>San Pedro Centro</option>
            <option>Vuelta de Obligado</option>
          </select>

          <input
            type="text"
            placeholder="Precio máximo"
            className="rounded-xl border border-gray-200 p-4 outline-none"
          />

          <button className="rounded-xl bg-black p-4 text-white transition hover:bg-gray-800">
            Buscar
          </button>

        </div>
      </section>

      {/* DESTACADAS */}
      <section className="px-6 py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 flex items-end justify-between">

            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-gray-500">
                Propiedades destacadas
              </p>

              <h3 className="text-4xl font-bold">
                Selección exclusiva
              </h3>
            </div>

            <button className="hidden rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white md:block">
              Ver todas
            </button>

          </div>

          <div className="grid gap-10 md:grid-cols-3">

            {/* CARD 1 */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1974&auto=format&fit=crop"
                alt="Casa"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <p className="mb-2 text-sm uppercase tracking-widest text-gray-500">
                  Casa · Venta
                </p>

                <h4 className="mb-3 text-2xl font-semibold">
                  Casa moderna con jardín
                </h4>

                <p className="mb-6 text-gray-600">
                  San Pedro Centro · 4 ambientes · Cochera · Pileta
                </p>

                <div className="flex items-center justify-between">

                  <span className="text-2xl font-bold">
                    USD 240.000
                  </span>

                  <button className="rounded-full bg-black px-5 py-2 text-white hover:bg-gray-800">
                    Ver más
                  </button>

                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1974&auto=format&fit=crop"
                alt="Departamento"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <p className="mb-2 text-sm uppercase tracking-widest text-gray-500">
                  Departamento · Venta
                </p>

                <h4 className="mb-3 text-2xl font-semibold">
                  Departamento premium
                </h4>

                <p className="mb-6 text-gray-600">
                  Vista al río · 3 ambientes · Balcón
                </p>

                <div className="flex items-center justify-between">

                  <span className="text-2xl font-bold">
                    USD 185.000
                  </span>

                  <button className="rounded-full bg-black px-5 py-2 text-white hover:bg-gray-800">
                    Ver más
                  </button>

                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1974&auto=format&fit=crop"
                alt="Lote"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <p className="mb-2 text-sm uppercase tracking-widest text-gray-500">
                  Lote · Venta
                </p>

                <h4 className="mb-3 text-2xl font-semibold">
                  Lote en barrio residencial
                </h4>

                <p className="mb-6 text-gray-600">
                  Excelente ubicación · 1200m²
                </p>

                <div className="flex items-center justify-between">

                  <span className="text-2xl font-bold">
                    USD 65.000
                  </span>

                  <button className="rounded-full bg-black px-5 py-2 text-white hover:bg-gray-800">
                    Ver más
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="bg-black px-6 py-32 text-white">

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Nosotros
            </p>

            <h3 className="mb-8 text-5xl font-bold leading-tight">
              Una inmobiliaria pensada para una nueva etapa.
            </h3>

            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              Combinamos experiencia, atención personalizada y una estética
              moderna para ofrecer una experiencia inmobiliaria diferente.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              Nuestro objetivo es acompañar cada operación con claridad,
              profesionalismo y cercanía.
            </p>

          </div>

          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
            alt="Inmobiliaria"
            className="rounded-3xl object-cover shadow-2xl"
          />

        </div>
      </section>

      {/* CONTACTO */}
      <section className="px-6 py-32">

        <div className="mx-auto max-w-4xl rounded-[40px] bg-gray-100 p-12 text-center">

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
            Contacto
          </p>

          <h3 className="mb-6 text-5xl font-bold">
            ¿Estás buscando propiedad?
          </h3>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
            Estamos listos para ayudarte a encontrar el espacio ideal para vos.
          </p>

          <button className="rounded-full bg-black px-10 py-5 text-lg text-white transition hover:bg-gray-800">
            Hablar por WhatsApp
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