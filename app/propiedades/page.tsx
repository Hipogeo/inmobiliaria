"use client";

import { useState } from "react";
import Link from "next/link";
import { properties } from "@/data/properties";

export default function PropiedadesPage() {
  const [search, setSearch] = useState("");
  const [province, setProvince] = useState("Todas");
  const [city, setCity] = useState("Todas");
  const [operation, setOperation] = useState("Todas");
  const [propertyType, setPropertyType] = useState("Todas");
  const [bedrooms, setBedrooms] = useState("0");

  const provinces = [
    "Todas",
    ...new Set(properties.map((p) => p.province)),
  ];

  const cities = [
    "Todas",
    ...new Set(
      properties.filter((p) =>
        province === "Todas" ? true : p.province === province
      ).map((p) => p.city)
    ),
  ];

  const filtered = properties.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase()) ||
      p.province.toLowerCase().includes(search.toLowerCase());

    const matchProvince =
      province === "Todas" || p.province === province;

    const matchCity =
      city === "Todas" || p.city === city;

    const matchOperation =
      operation === "Todas" || p.operation === operation;

    const matchType =
      propertyType === "Todas" || p.propertyType === propertyType;

    const matchBedrooms =
      Number(bedrooms) === 0 || p.bedrooms >= Number(bedrooms);

    return (
      matchSearch &&
      matchProvince &&
      matchCity &&
      matchOperation &&
      matchType &&
      matchBedrooms
    );
  });

  return (
    <main className="min-h-screen bg-white text-black">

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

      {/* HERO (AJUSTADO MÁS ARRIBA Y MÁS LIVIANO) */}
      <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-gray-300">
              Propiedades
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Encontrá tu próxima propiedad
            </h1>

            <p className="mt-4 text-base text-gray-300">
              Explorá propiedades premium en toda Argentina
            </p>

          </div>

          {/* BUSCADOR (MÁS COMPACTO) */}
          <div className="mt-10 rounded-[30px] bg-white p-5 shadow-2xl">

            <div className="mb-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                Empezá tu búsqueda
              </p>

              <h2 className="mt-1 text-xl md:text-2xl font-bold text-black">
                ¿Qué estás buscando?
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 mb-5">

              <button
                onClick={() => setOperation("Venta")}
                className={`rounded-full px-6 py-2 text-xs font-medium transition ${
                  operation === "Venta"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                Comprar
              </button>

              <button
                onClick={() => setOperation("Alquiler")}
                className={`rounded-full px-6 py-2 text-xs font-medium transition ${
                  operation === "Alquiler"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                Alquilar
              </button>

              <button
                onClick={() => setOperation("Todas")}
                className={`rounded-full px-6 py-2 text-xs font-medium transition ${
                  operation === "Todas"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                Todas
              </button>

            </div>

            <div className="grid gap-3 md:grid-cols-6">

              <input
                type="text"
                placeholder="Buscar..."
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none text-black"
                onChange={(e) => setSearch(e.target.value)}
              />

              <select
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-black bg-white"
                value={province}
                onChange={(e) => {
                  setProvince(e.target.value);
                  setCity("Todas");
                }}
              >
                {provinces.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>

              <select
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-black bg-white"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <select
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-black bg-white"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option>Todas</option>
                <option>Casa</option>
                <option>Departamento</option>
                <option>Campo</option>
                <option>Lote</option>
              </select>

              <select
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-black bg-white"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              >
                <option value="0">Dorm</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>

              <button className="rounded-xl bg-black px-4 py-3 text-white text-xs font-medium">
                Buscar
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* RESULTADOS */}
      <section className="px-6 py-16">

        <div className="mx-auto mb-10 max-w-7xl">
          <h2 className="text-3xl font-bold">Resultados</h2>
          <p className="mt-2 text-gray-500 text-sm">
            {filtered.length} propiedades encontradas
          </p>
        </div>

        <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-3">

          {filtered.map((p) => (
            <Link
              key={p.id}
              href={`/propiedades/${p.id}`}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1"
            >
              <img
                src={p.images?.[0]}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  {p.city} · {p.province}
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  {p.title}
                </h2>

                <p className="mt-3 text-sm text-gray-500">
                  {p.bedrooms} dorm · {p.bathrooms} baños · {p.size} m²
                </p>

                <p className="mt-4 text-xl font-semibold">
                  USD {p.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 px-6 py-10 text-center text-sm text-gray-500">
        © 2026 Sergio Ullua Inmobiliaria · San Pedro · Buenos Aires
      </footer>

    </main>
  );
}