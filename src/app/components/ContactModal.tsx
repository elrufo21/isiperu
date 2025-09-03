"use client";
import { useRef, useEffect, useState } from "react";
import { X, Calendar } from "lucide-react";
import toast from "react-hot-toast";

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Agendar consulta",
    message: "",
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      toast.success("¡Solicitud enviada! Te contactaremos pronto.");
      console.log("✅ Enviado:", result);
    } catch (err) {
      console.error("❌ Error al enviar:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md relative animate-fadeIn border border-gray-100"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header con ícono */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
            <Calendar className="w-7 h-7 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900">
            Agenda tu consulta
          </h2>
          <p className="text-gray-600 text-center mt-2 text-sm">
            Completa el formulario y selecciona la fecha de tu cita.
          </p>
        </div>

        {/* Formulario */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none transition text-gray-900"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none transition text-gray-900"
            required
          />
          <input
            type="phone"
            name="phone"
            placeholder="Número de teléfono"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none transition text-gray-900"
            required
          />
          <textarea
            name="message"
            placeholder="Escribe tu mensaje..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none transition resize-none text-gray-900"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Enviar solicitud
          </button>
        </form>
      </div>
    </div>
  );
}
