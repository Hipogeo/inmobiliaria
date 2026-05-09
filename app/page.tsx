"use client";

import { useEffect, useRef } from "react";
import { properties } from "@/data/properties";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);

  const carouselRef = useRef<HTMLDivElement>(null);

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
      className="h-screen overflow-hidden bg-white text-black"
    >

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
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
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

      {/* PROPIEDADES */}
      <section
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        className="h-screen flex items-center px-6 pt-20 relative"
      >
        <div className="mx-auto max-w-7xl w-full relative">

          <h2 className="text-5xl font-bold mb-10">
            Propiedades seleccionadas
          </h2>

          {/* FLECHA IZQUIERDA */}
          <button
            onClick={scrollLeft}
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-20 bg-black text-white w-20 h-20 rounded-full text-5xl shadow-2xl hover:scale-110 transition"
          >
            ‹
          </button>

          {/* CARRUSEL */}
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
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.city}</p>
                </div>
              </a>
            ))}

          </div>

          {/* FLECHA DERECHA */}
          <button
            onClick={scrollRight}
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-20 bg-black text-white w-20 h-20 rounded-full text-5xl shadow-2xl hover:scale-110 transition"
          >
            ›
          </button>

        </div>
      </section>

      {/* BUSCADOR */}
      <section
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        className="h-screen flex items-center justify-center bg-[#f5f5f5] px-6"
      >
        <div className="mx-auto max-w-7xl w-full">

          <div className="text-center mb-14">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              Buscador inmobiliario
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Encontrá tu próxima propiedad
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explorá propiedades por ubicación, tipo de operación,
              categoría y rango de precios.
            </p>

          </div>

          <div className="bg-white rounded-[40px] shadow-2xl p-10 md:p-14">

            <div className="grid gap-6 md:grid-cols-4">

              <select className="border border-gray-200 rounded-2xl px-6 py-5 text-lg outline-none">
                <option>Operación</option>
                <option>Venta</option>
                <option>Alquiler</option>
              </select>

              <select className="border border-gray-200 rounded-2xl px-6 py-5 text-lg outline-none">
                <option>Tipo</option>
                <option>Casa</option>
                <option>Departamento</option>
                <option>Terreno</option>
              </select>

              <input
                type="text"
                placeholder="Ciudad o ubicación"
                className="border border-gray-200 rounded-2xl px-6 py-5 text-lg outline-none"
              />

              <input
                type="number"
                placeholder="Precio máximo"
                className="border border-gray-200 rounded-2xl px-6 py-5 text-lg outline-none"
              />

            </div>

            <div className="mt-10 text-center">

              <a
                href="/propiedades"
                className="inline-block bg-black text-white px-12 py-5 rounded-full font-medium uppercase tracking-widest hover:bg-gray-800 transition"
              >
                Buscar propiedades
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* NOSOTROS */}
      <section
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
        className="h-screen flex items-center justify-center text-white relative"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center max-w-4xl px-6">
          <h2 className="text-5xl font-bold mb-6">
            Nosotros
          </h2>

          <p className="text-lg text-gray-200">
            Inmobiliaria con más de 10 años de trayectoria en San Pedro y la región,
            especializada en propiedades residenciales, inversión y asesoramiento
            personalizado en cada operación inmobiliaria.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        ref={(el) => {
          sectionsRef.current[4] = el;
        }}
        className="h-screen flex items-center justify-center text-white relative px-6"
      >

        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center max-w-4xl">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-300">
            Contacto
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hablemos de tu próxima propiedad
          </h2>

          <p className="text-gray-300 mb-10 text-lg">
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

      {/* WHATSAPP FLOAT BUTTON */}
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
          <path d="M16 3C9.37 3 4 8.37 4 15c0 2.64.86 5.08 2.3 7.07L4 29l7.16-2.23C13.1 27.58 14.52 28 16 28c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22c-1.36 0-2.68-.34-3.85-.98l-.27-.15-4.25 1.33 1.39-4.14-.18-.28A9.94 9.94 0 0 1 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
        </svg>
      </a>

    </main>
  );
}