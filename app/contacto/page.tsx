"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Por ahora solo simulamos envío
    alert("Mensaje enviado. Nos pondremos en contacto pronto.");

    setForm({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    });
  };

  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-black px-6 py-32 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Contacto
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Hablemos sobre tu próxima propiedad
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Completá el formulario o escribinos directamente por WhatsApp.
          </p>

          <a
            href="https://wa.me/5491100000000"
            target="_blank"
            className="mt-8 inline-block rounded-full bg-green-500 px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition hover:bg-green-600"
          >
            WhatsApp directo
          </a>
        </div>
      </section>

      {/* FORM */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">

          <h2 className="mb-10 text-3xl font-bold">
            Envíanos un mensaje
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Nombre */}
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 py-3 outline-none focus:border-black"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 py-3 outline-none focus:border-black"
            />

            {/* Teléfono */}
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-3 outline-none focus:border-black"
            />

            {/* Mensaje */}
            <textarea
              name="mensaje"
              placeholder="Escribí tu mensaje..."
              value={form.mensaje}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border-b border-gray-300 py-3 outline-none focus:border-black"
            />

            {/* Botón */}
            <button
              type="submit"
              className="mt-6 rounded-full bg-black px-10 py-4 text-sm font-medium uppercase tracking-widest text-white transition hover:bg-gray-800"
            >
              Enviar mensaje
            </button>

          </form>

          {/* INFO EXTRA */}
          <div className="mt-16 border-t pt-10 text-sm text-gray-600">
            <p className="mb-2">
              📍 San Pedro, Buenos Aires
            </p>
            <p className="mb-2">
              📧 contacto@inmobiliaria.com
            </p>
            <p>
              📱 +54 9 11 0000-0000
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 px-6 py-10 text-center text-sm text-gray-500">
        © 2026 Inmobiliaria Sergio Ullua · San Pedro · Buenos Aires
      </footer>

    </main>
  );
}