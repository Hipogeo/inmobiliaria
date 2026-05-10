export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAVBAR (IGUAL AL HOME) */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1920px] items-center justify-between px-[3vw] py-5 text-white">

          <h1 className="text-[clamp(18px,1vw,22px)] font-semibold tracking-[0.2em]">
            SERGIO ULLUA
          </h1>

          <nav className="hidden md:flex gap-[2vw] text-[clamp(12px,0.7vw,14px)] uppercase tracking-widest">
            <a href="/">Inicio</a>
            <a href="/propiedades">Propiedades</a>
            <a href="/nosotros">Nosotros</a>
            <a href="/contacto">Contacto</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="relative flex items-center justify-center bg-black px-6 py-32 pt-48 text-white">

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

            <div className="rounded-[32px] bg-white p-10 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold">Transparencia</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                Creemos en una comunicación clara y honesta en cada operación.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-10 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold">Cercanía</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                Acompañamos cada proceso de manera personalizada y humana.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-10 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold">Modernidad</h3>
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

      {/* WHATSAPP FLOAT (IGUAL AL HOME) */}
      <a
        href="https://wa.me/5491100000000"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-8 h-8"
        >
          <path d="M19.11 17.53c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.37-.83-.74-1.39-1.66-1.56-1.94-.17-.28-.02-.43.13-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5h-.54c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.03 2.82 1.17 3.01c.14.19 2.02 3.08 4.89 4.32.68.29 1.21.46 1.63.59.69.22 1.32.19 1.82.12.56-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.17-.53-.31z" />
        </svg>
      </a>

    </main>
  );
}