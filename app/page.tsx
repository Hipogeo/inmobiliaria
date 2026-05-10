"use client";

import { useEffect, useRef, useState } from "react";
import { properties } from "@/data/properties";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [activeOperation, setActiveOperation] = useState("Comprar");
  const [nosotrosVisible, setNosotrosVisible] = useState(false);

  useEffect(() => {
    // DESACTIVA SCROLL SNAP EN MOBILE
    if (window.innerWidth < 768) return;

    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;

      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;

      const sections = sectionsRef.current.filter(Boolean);

      const currentIndex = sections.findIndex((section) => {
        if (!section) return false;

        const rect = section.getBoundingClientRect();

        return rect.top >= -10 && rect.top < window.innerHeight / 2;
      });

      const nextIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        sections.length - 1
      );

      sections[nextIndex]?.scrollIntoView({
        behavior: "smooth",
      });
    };

    const handleScroll = () => {
      const nosotrosSection = sectionsRef.current[2];

      if (!nosotrosSection) return;

      const rect = nosotrosSection.getBoundingClientRect();

      const visible =
        rect.top < window.innerHeight * 0.4 &&
        rect.bottom > window.innerHeight * 0.6;

      setNosotrosVisible(visible);
    };

    const el = containerRef.current;

    el?.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      el?.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <main
      ref={containerRef}
      className="
        bg-white text-black
        selection:bg-black selection:text-white
        overflow-x-hidden
        md:h-screen md:overflow-hidden
      "
    >
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-8 py-4 text-white">
          <h1 className="text-sm md:text-lg font-semibold tracking-[0.2em] whitespace-nowrap">
            SERGIO ULLUA
          </h1>

          <nav className="flex gap-4 md:gap-8 text-[10px] md:text-[11px] uppercase tracking-widest opacity-80">
            <a
              href="/"
              className="hover:opacity-100 transition whitespace-nowrap"
            >
              Inicio
            </a>

            <a
              href="/propiedades"
              className="hover:opacity-100 transition whitespace-nowrap"
            >
              Propiedades
            </a>

            <a
              href="/nosotros"
              className="hover:opacity-100 transition whitespace-nowrap"
            >
              Nosotros
            </a>

            <a
              href="/contacto"
              className="hover:opacity-100 transition whitespace-nowrap"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        className="
          min-h-screen
          md:h-screen
          bg-black text-white relative overflow-hidden
          pb-20 md:pb-0
        "
      >
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="Hero"
        />

        <div className="absolute inset-0 bg-black/30" />

        {/* TEXTO */}
        <div
          className="
            relative z-10
            max-w-[1400px]
            mx-auto
            px-6 md:px-8
            pt-[14vh] md:pt-[15vh]
            md:transform md:scale-[0.85] md:origin-left
          "
        >
          <div className="max-w-[800px]">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400">
              Inmobiliaria — San Pedro (Buenos Aires)
            </p>

            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-7xl
                font-bold
                leading-[1.05]
                tracking-tight
              "
            >
              Propiedades extraordinarias
              <br />
              para nuevas etapas de vida.
            </h1>
          </div>
        </div>

        {/* BUSCADOR */}
        <div
          className="
            relative
            md:absolute
            mt-10 md:mt-0
            md:bottom-[8vh]
            left-0
            w-full
            z-20
            px-4
          "
        >
          <div
            className="
              mx-auto
              max-w-[95vw]
              md:transform md:scale-[0.85] md:origin-bottom
            "
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.4)] p-6">
              {/* OPERACIONES */}
              <div className="flex flex-wrap gap-3 mb-6">
                {["Comprar", "Alquilar", "Emprendimientos"].map((op) => (
                  <button
                    key={op}
                    onClick={() => setActiveOperation(op)}
                    className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition ${
                      activeOperation === op
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black hover:bg-gray-200"
                    }`}
                  >
                    {op}
                  </button>
                ))}
              </div>

              {/* FILTROS */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-6
                  gap-3
                "
              >
                <select className="h-14 rounded-2xl border border-gray-100 bg-white px-4 text-sm text-black outline-none appearance-none">
                  <option>Provincia</option>
                  <option>Buenos Aires</option>
                </select>

                <select className="h-14 rounded-2xl border border-gray-100 bg-white px-4 text-sm text-black outline-none appearance-none">
                  <option>Zona</option>
                  <option>San Pedro</option>
                </select>

                <select className="h-14 rounded-2xl border border-gray-100 bg-white px-4 text-sm text-black outline-none appearance-none">
                  <option>Tipo</option>
                  <option>Casa</option>
                </select>

                <select className="h-14 rounded-2xl border border-gray-100 bg-white px-4 text-sm text-black outline-none appearance-none">
                  <option>Dormitorios</option>
                  <option>1+</option>
                </select>

                <input
                  type="text"
                  placeholder="Palabras clave"
                  className="h-14 rounded-2xl border border-gray-100 px-4 text-sm outline-none placeholder:text-gray-400"
                />

                <a
                  href="/propiedades"
                  className="h-14 rounded-2xl bg-black text-white flex items-center justify-center text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 transition"
                >
                  Buscar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPIEDADES */}
      <section
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        className="min-h-screen md:h-screen flex items-center px-6 md:px-8 relative"
      >
        <div
          className="
            mx-auto
            max-w-[1400px]
            w-full
            py-24 md:py-0
            md:transform md:scale-[0.85]
          "
        >
          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              mb-10 md:mb-12
              tracking-tight
            "
          >
            Propiedades seleccionadas
          </h2>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-10 scroll-smooth no-scrollbar"
          >
            {properties.map((p) => (
              <a
                key={p.id}
                href={`/propiedades/${p.id}`}
                className="
                  min-w-[85vw]
                  sm:min-w-[380px]
                  md:min-w-[320px]
                  bg-white
                  shadow-2xl
                  rounded-[32px]
                  overflow-hidden
                  flex-shrink-0
                  hover:translate-y-[-10px]
                  transition-transform
                  duration-500
                "
              >
                <img
                  src={p.images?.[0]}
                  className="h-[220px] w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-xl font-bold mb-1">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {p.city}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        className="min-h-screen md:h-screen flex items-center justify-center text-white relative overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-20 text-center max-w-3xl px-6 md:transform md:scale-[0.85]">
          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
              mb-6 md:mb-8
            "
          >
            Nosotros
          </h2>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
            Inmobiliaria con más de 10 años de trayectoria en San Pedro y la región,
            especializada en propiedades residenciales, inversión y asesoramiento
            personalizado en cada operación inmobiliaria.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
        className="min-h-screen md:h-screen flex items-center justify-center text-white relative px-6 md:px-8"
      >
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative text-center max-w-3xl md:transform md:scale-[0.85]">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gray-400">
            Contacto
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-bold
              mb-8
              leading-tight
            "
          >
            Hablemos de tu próxima propiedad
          </h2>

          <a
            href="/contacto"
            className="inline-block bg-white text-black px-10 md:px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition shadow-xl"
          >
            Contactar ahora
          </a>
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5491100000000"
        target="_blank"
        className="
          fixed
          bottom-5 md:bottom-10
          right-5 md:right-10
          z-50
          bg-[#25D366]
          w-14 h-14
          rounded-full
          flex items-center justify-center
          shadow-2xl
          hover:scale-110
          transition-all
        "
      >
        <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7">
          <path d="M19.11 17.53c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.37-.83-.74-1.39-1.66-1.56-1.94-.17-.28-.02-.43.13-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5h-.54c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.03 2.82 1.17 3.01c.14.19 2.02 3.08 4.89 4.32.68.29 1.21.46 1.63.59.69.22 1.32.19 1.82.12.56-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.17-.53-.31z" />
          <path d="M16 3C9.37 3 4 8.37 4 15c0 2.64.86 5.08 2.3 7.07L4 29l7.16-2.23C13.1 27.58 14.52 28 16 28c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22c-1.36 0-2.68-.34-3.85-.98l-.27-.15-4.25 1.33 1.39-4.14-.18-.28A9.94 9.94 0 0 1 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
        </svg>
      </a>
    </main>
  );
}