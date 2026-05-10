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
      properties
        .filter((p) =>
          province === "Todas"
            ? true
            : p.province === province
        )
        .map((p) => p.city)
    ),
  ];

  const filtered = properties.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase()) ||
      p.province.toLowerCase().includes(search.toLowerCase());

    const matchProvince =
      province === "Todas" ||
      p.province === province;

    const matchCity =
      city === "Todas" ||
      p.city === city;

    const matchOperation =
      operation === "Todas" ||
      p.operation === operation;

    const matchType =
      propertyType === "Todas" ||
      p.propertyType === propertyType;

    const matchBedrooms =
      Number(bedrooms) === 0 ||
      p.bedrooms >= Number(bedrooms);

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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white">

          <h1 className="text-xl font-semibold tracking-[0.2em]">
            SERGIO ULLUA
          </h1>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">

            <a href="/">Inicio</a>

            <a href="/propiedades">
              Propiedades
            </a>

            <a href="/nosotros">
              Nosotros
            </a>

            <a href="/contacto">
              Contacto
            </a>

          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-black text-white pt-44 pb-32 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gray-300">
              Propiedades
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Encontrá tu próxima propiedad
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Explorá propiedades premium en toda Argentina
            </p>

          </div>

          {/* BUSCADOR */}
          <div className="mt-14 rounded-[36px] bg-white p-6 shadow-2xl">

            {/* TEXTO NUEVO */}
            <div className="mb-6">

              <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                Empezá tu búsqueda
              </p>

              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-black">
                ¿Qué tipo de operación estás buscando?
              </h2>

            </div>

            {/* OPERACIONES */}
            <div className="flex flex-wrap gap-4 mb-6">

              <button
                onClick={() => setOperation("Venta")}
                className={`rounded-full px-8 py-3 text-sm font-medium transition ${
                  operation === "Venta"
                    ? "bg-black text-white shadow-lg"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                Comprar
              </button>

              <button
                onClick={() => setOperation("Alquiler")}
                className={`rounded-full px-8 py-3 text-sm font-medium transition ${
                  operation === "Alquiler"
                    ? "bg-black text-white shadow-lg"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                Alquilar
              </button>

              <button
                onClick={() => setOperation("Todas")}
                className={`rounded-full px-8 py-3 text-sm font-medium transition ${
                  operation === "Todas"
                    ? "bg-black text-white shadow-lg"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                Todas
              </button>

            </div>

            {/* FILTROS */}
            <div className="grid gap-4 md:grid-cols-6">

              <input
                type="text"
                placeholder="Buscar ubicación o propiedad..."
                className="rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-black text-black placeholder:text-gray-400"
                onChange={(e) => setSearch(e.target.value)}
              />

              <select
                className="rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-black text-black bg-white"
                value={province}
                onChange={(e) => {
                  setProvince(e.target.value);
                  setCity("Todas");
                }}
              >
                {provinces.map((p) => (
                  <option
                    key={p}
                    value={p}
                    className="text-black"
                  >
                    {p}
                  </option>
                ))}
              </select>

              <select
                className="rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-black text-black bg-white"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {cities.map((c) => (
                  <option
                    key={c}
                    value={c}
                    className="text-black"
                  >
                    {c}
                  </option>
                ))}
              </select>

              <select
                className="rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-black text-black bg-white"
                value={propertyType}
                onChange={(e) =>
                  setPropertyType(e.target.value)
                }
              >
                <option className="text-black">
                  Todas
                </option>

                <option className="text-black">
                  Casa
                </option>

                <option className="text-black">
                  Departamento
                </option>

                <option className="text-black">
                  Campo
                </option>

                <option className="text-black">
                  Lote
                </option>

              </select>

              <select
                className="rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-black text-black bg-white"
                value={bedrooms}
                onChange={(e) =>
                  setBedrooms(e.target.value)
                }
              >
                <option value="0" className="text-black">
                  Dormitorios
                </option>

                <option value="1" className="text-black">
                  1+
                </option>

                <option value="2" className="text-black">
                  2+
                </option>

                <option value="3" className="text-black">
                  3+
                </option>

                <option value="4" className="text-black">
                  4+
                </option>

              </select>

              <button className="rounded-2xl bg-black px-6 py-4 text-white font-medium transition hover:bg-gray-800">
                Buscar
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* RESULTADOS */}
      <section className="px-6 py-20">

        <div className="mx-auto mb-12 max-w-7xl">

          <h2 className="text-4xl font-bold">
            Resultados
          </h2>

          <p className="mt-3 text-gray-500">
            {filtered.length} propiedades encontradas
          </p>

        </div>

        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3">

          {filtered.map((p) => (
            <Link
              key={p.id}
              href={`/propiedades/${p.id}`}
              className="overflow-hidden rounded-[28px] bg-white shadow-xl transition hover:-translate-y-1"
            >

              <img
                src={p.images?.[0]}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <p className="text-sm uppercase tracking-widest text-gray-400">
                  {p.city} · {p.province}
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  {p.title}
                </h2>

                <p className="mt-4 text-gray-500">
                  {p.bedrooms} dorm · {p.bathrooms} baños · {p.size} m²
                </p>

                <p className="mt-6 text-2xl font-semibold">
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