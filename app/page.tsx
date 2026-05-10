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
    el?.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      el?.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <main
      ref={containerRef}
      className="h-screen overflow-hidden bg-white text-black"
    >
      {/* NAVBAR */}
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
      <section
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        className="h-screen bg-black text-white relative overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-[1920px] mx-auto px-[3vw] pt-[18vh]">
          <div className="max-w-[900px]">
            <p className="mb-5 text-[clamp(12px,0.8vw,15px)] uppercase tracking-[0.35em] text-gray-300">
              Inmobiliaria — San Pedro (Buenos Aires)
            </p>
            <h1 className="text-[clamp(56px,5vw,110px)] font-bold leading-[0.95]">
              Propiedades extraordinarias
              <br />
              para nuevas etapas de vida.
            </h1>
          </div>
        </div>

        {/* BUSCADOR RAPIDO - CORREGIDO PARA VERCEL */}
        <div className="absolute bottom-[6vh] left-0 w-full z-20 px-[3vw]">
          <div className="mx-auto max-w-[1920px]">
            <div className="bg-white/95 backdrop-blur-xl rounded-[32px] shadow-[0_25px_80px_rgba(0,0,0,0.35)] p-5">
              
              {/* OPERACIONES */}
              <div className="flex flex-wrap gap-3 mb-5">
                {["Comprar", "Alquilar", "Emprendimientos"].map((op) => (
                  <button
                    key={op}
                    onClick={() => setActiveOperation(op)}
                    className={`px-5 py-2.5 rounded-full text-xs font-medium transition ${
                      activeOperation === op
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black hover:bg-gray-200"
                    }`}
                  >
                    {op}
                  </button>
                ))}
              </div>

              {/* FILTROS - Grid responsivo optimizado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                <select className="h-[56px] rounded-2xl border border-gray-200 bg-white px-4 text-[14px] text-black outline-none focus:border-black transition">
                  <option>Provincia</option>
                  <option>Buenos Aires</option>
                  <option>Córdoba</option>
                  <option>Santa Fe</option>
                  <option>Mendoza</option>
                </select>

                <select className="h-[56px] rounded-2xl border border-gray-200 bg-white px-4 text-[14px] text-black outline-none focus:border-black transition">
                  <option>Zona</option>
                  <option>San Pedro</option>
                  <option>Palermo</option>
                  <option>Rosario</option>
                </select>

                <select className="h-[56px] rounded-2xl border border-gray-200 bg-white px-4 text-[14px] text-black outline-none focus:border-black transition">
                  <option>Tipo</option>
                  <option>Casa</option>
                  <option>Departamento</option>
                  <option>Campo</option>
                  <option>Terreno</option>
                </select>

                <select className="h-[56px] rounded-2xl border border-gray-200 bg-white px-4 text-[14px] text-black outline-none focus:border-black transition">
                  <option>Dormitorios</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                </select>

                <input
                  type="text"
                  placeholder="Palabras clave"
                  className="h-[56px] rounded-2xl border border-gray-200 px-4 text-[14px] text-black outline-none focus:border-black transition placeholder:text-gray-400"
                />

                <a
                  href="/propiedades"
                  className="h-[56px] rounded-2xl bg-black text-white flex items-center justify-center text-xs font-medium uppercase tracking-[0.15em] transition hover:bg-gray-800"
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
        className="h-screen flex items-center px-[3vw] pt-20 relative"
      >
        <div className="mx-auto max-w-[1920px] w-full relative">
          <h2 className="text-[clamp(40px,3vw,70px)] font-bold mb-10">
            Propiedades seleccionadas
          </h2>
          <button
            onClick={scrollLeft}
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-20 bg-black text-white w-20 h-20 rounded-full text-5xl shadow-2xl hover:scale-110 transition hidden lg:flex items-center justify-center"
          >
            ‹
          </button>
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
          >
            {properties.map((p) => (
              <a
                key={p.id}
                href={`/propiedades/${p.id}`}
                className="min-w-[340px] bg-white shadow-xl rounded-[32px] overflow-hidden flex-shrink-0"
              >
                <img
                  src={p.images?.[0]}
                  className="h-[240px] w-full object-cover"
                  alt={p.title}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.city}</p>
                </div>
              </a>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-20 bg-black text-white w-20 h-20 rounded-full text-5xl shadow-2xl hover:scale-110 transition hidden lg:flex items-center justify-center"
          >
            ›
          </button>
        </div>
      </section>

      {/* NOSOTROS */}
      <section
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        className="h-screen flex items-center justify-center text-white relative overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Nosotros background"
        />
        <div className="absolute inset-0 bg-black/65" />
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
          className={`absolute left-[-120px] bottom-20 w-[340px] h-[460px] object-cover rounded-[32px] shadow-2xl transition-all duration-[2200ms] ease-out hidden xl:block ${
            nosotrosVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"
          }`}
          alt="Decor 1"
        />
        <img
          src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop"
          className={`absolute right-[-120px] top-24 w-[340px] h-[460px] object-cover rounded-[32px] shadow-2xl transition-all duration-[2800ms] delay-300 ease-out hidden xl:block ${
            nosotrosVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"
          }`}
          alt="Decor 2"
        />
        <div className="relative z-20 text-center max-w-4xl px-6">
          <h2 className="text-[clamp(40px,3vw,70px)] font-bold mb-6">Nosotros</h2>
          <p className="text-[clamp(16px,1vw,20px)] text-gray-200 leading-relaxed">
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
        className="h-screen flex items-center justify-center text-white relative px-[3vw]"
      >
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Contacto Background"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center max-w-4xl">
          <p className="mb-4 text-[clamp(12px,0.8vw,15px)] uppercase tracking-[0.3em] text-gray-300">
            Contacto
          </p>
          <h2 className="text-[clamp(44px,4vw,82px)] font-bold mb-6 leading-tight">
            Hablemos de tu próxima propiedad
          </h2>
          <p className="text-[clamp(16px,1vw,20px)] text-gray-300 mb-10">
            Te acompañamos en todo el proceso de compra, venta o inversión inmobiliaria
            con asesoramiento personalizado.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-black px-10 py-5 rounded-full font-medium uppercase tracking-widest hover:bg-gray-200 transition"
          >
            Contactar ahora
          </a>
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5491100000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-8 h-8"
        >
          <path d="M19.11 17.53c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.37-.83-.74-1.39-1.66-1.56-1.94-.17-.28-.02-.43.13-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5h-.54c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.03 2.82 1.17 3.01c.14.19 2.02 3.08 4.89 4.32.68.29 1.21.46 1.63.59.69.22 1.32.19 1.82.12.56-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.17-.53-.31z" />
          <path d="M16 3C9.37 3 4 8.37 4 15c0 2.64.86 5.08 2.3 7.07L4 29l7.16-2.23C13.1 27.58 14.52 28 16 28c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22c-1.36 0-2.68-.34-3.85-.98l-.27-.15-4.25 1.33 1.39-4.14-.18-.28A9.94 9.94 0 0 1 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
        </svg>
      </a>
    </main>
  );
}