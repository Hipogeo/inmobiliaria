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
      <section className="bg-black text-white px-6 py-32 pt-44 text-center">

        <h1 className="text-5xl font-bold">
          Propiedades
        </h1>

        <p className="mt-4 text-gray-300">
          Explorá propiedades en toda Argentina
        </p>

      </section>

      {/* FILTROS */}
      <section className="px-6 py-12 border-b">

        <div className="mx-auto max-w-7xl grid gap-4 md:grid-cols-6">

          <input
            type="text"
            placeholder="Buscar..."
            className="border rounded-full px-4 py-3"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border rounded-full px-4 py-3"
            value={province}
            onChange={(e) => {
              setProvince(e.target.value);
              setCity("Todas");
            }}
          >
            {provinces.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>

          <select
            className="border rounded-full px-4 py-3"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <select
            className="border rounded-full px-4 py-3"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option>Todas</option>
            <option>Venta</option>
            <option>Alquiler</option>
          </select>

          <select
            className="border rounded-full px-4 py-3"
            value={propertyType}
            onChange={(e) =>
              setPropertyType(e.target.value)
            }
          >
            <option>Todas</option>
            <option>Casa</option>
            <option>Departamento</option>
          </select>

          <select
            className="border rounded-full px-4 py-3"
            value={bedrooms}
            onChange={(e) =>
              setBedrooms(e.target.value)
            }
          >
            <option value="0">
              Dormitorios
            </option>

            <option value="1">
              1+
            </option>

            <option value="2">
              2+
            </option>

            <option value="3">
              3+
            </option>

            <option value="4">
              4+
            </option>

          </select>

        </div>

      </section>

      {/* RESULTADOS */}
      <section className="px-6 py-20">

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