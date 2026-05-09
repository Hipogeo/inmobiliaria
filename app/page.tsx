"use client";

import { useEffect, useRef } from "react";
import { properties } from "@/data/properties";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

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

      sections[nextIndex]?.scrollIntoView({ behavior: "smooth" });
    };

    const el = containerRef.current;
    el?.addEventListener("wheel", handleWheel, { passive: false });

    return () => el?.removeEventListener("wheel", handleWheel);
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <main ref={containerRef} className="h-screen overflow-hidden bg-white text-black">

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white">

          <h1 className="text-xl font-semibold tracking-[0.2em]">
            SERGIO ULLUA
          </h1>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <a href="/">Inicio</a>
            <a href="/propiedades">Propiedades</a>
            <a href="/nosotros">Nosotros</a>
            <a href="/contacto">Contacto</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="h-screen flex items-center justify-center bg-black text-white relative pt-20"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative text-center max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold">
            Propiedades extraordinarias para nuevas etapas de vida.
          </h1>
        </div>
      </section>

      {/* PROPIEDADES + FLECHAS */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="h-screen flex items-center px-6 pt-20 relative"
      >
        <div className="mx-auto max-w-7xl w-full">

          <h2 className="text-5xl font-bold mb-10">
            Propiedades seleccionadas
          </h2>

          <div className="relative">

            {/* LEFT ARROW */}
            <button
              onClick={scrollLeft}
              className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10
                         bg-black text-white w-14 h-14 rounded-full
                         items-center justify-center text-3xl shadow-xl
                         hover:scale-110 transition"
            >
              ‹
            </button>

            {/* SCROLL AREA */}
            <div
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto pb-4 scroll-smooth"
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
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="text-sm text-gray-600">{p.city}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={scrollRight}
              className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10
                         bg-black text-white w-14 h-14 rounded-full
                         items-center justify-center text-3xl shadow-xl
                         hover:scale-110 transition"
            >
              ›
            </button>

          </div>

        </div>
      </section>

      {/* NOSOTROS */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="h-screen flex items-center justify-center text-white relative"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center max-w-4xl px-6">
          <h2 className="text-5xl font-bold mb-6">Nosotros</h2>

          <p className="text-lg text-gray-200">
            Inmobiliaria con más de 10 años de trayectoria en San Pedro y la región,
            especializada en propiedades residenciales, inversión y asesoramiento
            personalizado en cada operación inmobiliaria.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="h-screen flex items-center justify-center text-white relative px-6"
      >
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center max-w-4xl">

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hablemos de tu próxima propiedad
          </h2>

          <a
            href="/contacto"
            className="inline-block bg-white text-black px-10 py-5 rounded-full"
          >
            Contactar ahora
          </a>

        </div>
      </section>

      {/* WHATSAPP */}
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
          <path d="M16 3C9.37 3 4 8.37 4 15c0 2.64.86 5.08 2.3 7.07L4 29l7.16-2.23C13.1 27.58 14.52 28 16 28c6.63 0 12-5.37 12-12S22.63 3 16 3z" />
        </svg>
      </a>

    </main>
  );
}