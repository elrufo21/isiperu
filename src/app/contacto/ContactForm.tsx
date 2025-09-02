"use client";

import {
  CheckCircle,
  DollarSign,
  Mail,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import React, { useState } from "react";

export default function ContactoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const modalidadesIntegracion = [
    {
      titulo: "Afiliado",
      descripcion:
        "Forma parte de nuestra red como afiliado y accede a beneficios exclusivos",
      beneficios: [
        "Comisiones competitivas",
        "Capacitación continua",
        "Soporte técnico",
      ],
      icono: UserCheck,
    },
    {
      titulo: "Accionista",
      descripcion:
        "Invierte en nuestro crecimiento y participa en las decisiones estratégicas",
      beneficios: ["Dividendos anuales", "Voz y voto", "Acceso prioritario"],
      icono: TrendingUp,
    },
    {
      titulo: "Inversionista",
      descripcion: "Participa en proyectos específicos con retornos atractivos",
      beneficios: [
        "ROI competitivo",
        "Diversificación",
        "Asesoría especializada",
      ],
      icono: DollarSign,
    },
  ];
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí se manejaría el envío del formulario
    console.log("Formulario enviado:", formData);
    alert("¡Gracias por tu consulta! Te contactaremos pronto.");
  };
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-legal-pattern-with-scales-of-justice-OVrDzq3nKkOncpQyU9RoMhnEqp10Hx.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Únete a ISI Perú
              </h2>
              <p className="text-lg md:text-xl text-slate-900 max-w-3xl leading-relaxed">
                Ofrecemos diferentes modalidades para que puedas integrarte a
                nuestra organización según tus objetivos y capacidades de
                inversión.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {modalidadesIntegracion.map((modalidad, index) => (
                <div
                  key={index}
                  className="group h-full flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 p-5 md:p-6 lg:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 md:min-h-[300px] lg:min-h-[340px]"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-2xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                    <modalidad.icono className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {modalidad.titulo}
                  </h3>
                  <p className="text-white mb-3 leading-snug text-sm">
                    {modalidad.descripcion}
                  </p>
                  <div className="space-y-1.5 mt-auto">
                    {modalidad.beneficios.map((beneficio, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-[13px] md:text-sm text-white"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {beneficio}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 rounded-3xl p-8 border border-gray-200 shadow-2xl">
              <div className="space-y-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                    Contáctanos
                  </h3>
                  <p className="text-white">
                    Inicia tu proyecto inmobiliario hoy
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 text-slate-800 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 text-slate-800 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 text-slate-800 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 text-slate-800 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  >
                    <option value="">Servicio de interés</option>
                    <option value="ventas">Ventas y Servicios</option>
                    <option value="asesoria">Asesoría Legal</option>
                    <option value="consolidacion">
                      Consolidación Empresarial
                    </option>
                    <option value="marketing">Marketing</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Mensaje"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-xl bg-white border border-gray-300 text-slate-800 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full p-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                  >
                    <Mail className="w-5 h-5 inline mr-2" />
                    Enviar Consulta
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
