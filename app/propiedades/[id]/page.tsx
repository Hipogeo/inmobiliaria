"use client";

import { useParams } from "next/navigation";
import { properties } from "@/data/properties";
import { useState } from "react";

export default function PropertyDetail() {
  const params = useParams();
  const id = params?.id as string;

  const property = properties.find((p) => p.id === id);

  const [index, setIndex] = useState(0);

  if (!id) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Error</h1>
        <p>No se recibió ID desde la ruta</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Propiedad no encontrada</h1>
        <p>ID recibido: {id}</p>
      </div>
    );
  }

  const images = property.images ?? [];

  if (!images.length) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Sin imágenes</h1>
        <p>Esta propiedad no tiene imágenes cargadas.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">

      {/* CARRUSEL */}
      <div className="relative w-full h-[500px]">

        <img
          src={images[index]}
          className="w-full h-[500px] object-cover"
          alt={property.title}
        />

        <button
          onClick={() =>
            setIndex((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            )
          }
          className="absolute left-4 top-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={() =>
            setIndex((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-4 top-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
        >
          ›
        </button>

      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-3 mt-4 px-6 max-w-5xl mx-auto">

        {images.map((img: string, i: number) => (
          <img
            key={i}
            src={img}
            onClick={() => setIndex(i)}
            className={`h-20 w-28 object-cover rounded cursor-pointer transition ${
              i === index ? "ring-2 ring-black" : "opacity-60"
            }`}
          />
        ))}

      </div>

      {/* CONTENIDO */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold">{property.title}</h1>

        <p className="text-gray-500">{property.location}</p>

        <p className="mt-6 text-xl font-semibold">
          USD {property.price.toLocaleString()}
        </p>

        <p className="mt-6 text-gray-700">
          {property.description}
        </p>

        {/* SPECS */}
        <div className="grid grid-cols-3 mt-10 text-center border-y py-6">
          <div>{property.size} m²</div>
          <div>{property.bedrooms} dorm</div>
          <div>{property.bathrooms} baños</div>
        </div>

        {/* MAPA */}
        <div className="mt-10">
          <iframe
            width="100%"
            height="300"
            loading="lazy"
            className="rounded-xl"
            src={`https://www.google.com/maps?q=${property.lat},${property.lng}&z=15&output=embed`}
          />
        </div>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/5491126585125"
          className="mt-10 inline-block bg-black text-white px-8 py-4 rounded-full"
        >
          Consultar por WhatsApp
        </a>

      </div>

    </main>
  );
}