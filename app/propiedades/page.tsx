"use client";

import { useState } from "react";
import Link from "next/link";
import { properties } from "@/data/properties";

export default function PropiedadesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filtered = properties.filter((p) => {
    const matchText =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase());

    const matchType = filter === "Todos" || p.type === filter;

    const price = p.price;

    const matchMin = minPrice ? price >= Number(minPrice) : true;
    const matchMax = maxPrice ? price <= Number(maxPrice) : true;

    return matchText && matchType && matchMin && matchMax;
  });

  return (
    <main className="min-h-screen bg-white text-black">

      {/* HEADER */}
      <section className="bg-black text-white px-6 py-24 text-center">
        <h1 className="text-5xl font-bold">Propiedades</h1>
        <p className="mt-4 text-gray-300">
          Buscador inteligente de inmuebles
        </p>
      </section>

      {/* FILTERS */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl grid gap-4 md:grid-cols-4">

          <input
            type="text"
            placeholder="Buscar ciudad o propiedad..."
            className="border px-4 py-3 rounded-full"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border px-4 py-3 rounded-full"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>Todos</option>
            <option>Venta</option>
            <option>Alquiler</option>
          </select>

          <input
            type="number"
            placeholder="Precio mínimo"
            className="border px-4 py-3 rounded-full"
            onChange={(e) => setMinPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Precio máximo"
            className="border px-4 py-3 rounded-full"
            onChange={(e) => setMaxPrice(e.target.value)}
          />

        </div>
      </section>

      {/* RESULTS */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3">

          {filtered.map((p) => (
            <Link
              key={p.id}
              href={`/propiedades/${p.id}`}
              className="group overflow-hidden rounded-2xl border shadow hover:shadow-xl transition block"
            >

              <img
                src={p.images?.[0]}
                className="h-64 w-full object-cover group-hover:scale-105 transition"
              />

              <div className="p-5">

                <p className="text-sm text-gray-500">
                  {p.city} · {p.size} m²
                </p>

                <h2 className="text-xl font-bold mt-2">
                  {p.title}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {p.type}
                </p>

                <p className="mt-3 font-semibold">
                  USD {p.price.toLocaleString()}
                </p>

              </div>

            </Link>
          ))}

        </div>
      </section>

    </main>
  );
}