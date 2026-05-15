"use client";

import { useEffect, useRef, useState } from "react";
import { properties } from "@/data/properties";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [activeOperation, setActiveOperation] = useState("Comprar");

  useEffect(() => {
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

    const el = containerRef.current;

    el?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el?.removeEventListener("wheel", handleWheel);
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
      className="bg-white text-black overflow-x-hidden md:h-screen md:overflow-hidden"
    >
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-8 py-4 text-white">

          {/* LOGO CHICO */}
          <img
            src="/logo chico.png"
            alt="Logo"
            className="h-8 md:h-10 object-contain"
          />

          <nav className="flex gap-4 md:gap-8 text-[10px] md:text-[11px] uppercase tracking-widest opacity-80">
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
        className="min-h-screen md:h-screen bg-black text-white relative overflow-hidden pb-20 md:pb-0"
      >
        <img
          src="/images/campo.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* LOGO GRANDE */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img
            src="/logo grande.png"
            className="w-[220px] md:w-[320px] opacity-90"
          />
        </div>

        {/* STUDIO NINE GLOW */}
        <div className="relative z-20 text-center pt-[18vh]">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]">
            Studio Nine
          </h1>

          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-gray-300">
            Inmobiliaria — San Pedro (Buenos Aires)
          </p>
        </div>

        {/* TEXTO PRINCIPAL */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 pt-[10vh] md:pt-[12vh]">
          <div className="max-w-[800px]">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Propiedades extraordinarias
              <br />
              para nuevas etapas de vida.
            </h2>
          </div>
        </div>
      </section>

      {/* PROPIEDADES */}
      <section
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        className="min-h-screen md:h-screen flex items-center px-6 md:px-8"
      >
        <div className="mx-auto max-w-[1400px] w-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            Propiedades seleccionadas
          </h2>

          <div ref={carouselRef} className="flex gap-6 overflow-x-auto pb-10">
            {properties.map((p) => (
              <a
                key={p.id}
                href={`/propiedades/${p.id}`}
                className="min-w-[320px] bg-white shadow-2xl rounded-[32px] overflow-hidden"
              >
                <img
                  src={p.images?.[0]}
                  className="h-[220px] w-full object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.city}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ESTÉTICA EXPERIMENTAL */}
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

        <div className="relative z-20 text-center max-w-3xl px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]">
            Estética Experimental
          </h2>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
            Inmobiliaria con más de 10 años de trayectoria en San Pedro y la región,
            especializada en propiedades residenciales e inversión.
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

        <div className="relative text-center max-w-3xl">
          <h2 className="text-4xl md:text-7xl font-bold mb-8">
            Hablemos de tu próxima propiedad
          </h2>

          <a
            href="/contacto"
            className="inline-block bg-white text-black px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest"
          >
            Contactar ahora
          </a>
        </div>
      </section>
    </main>
  );
}