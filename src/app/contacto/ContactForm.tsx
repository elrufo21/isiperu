"use client";

import {
  AtSign,
  CheckCircle,
  DollarSign,
  Mail,
  MapPin,
  Phone,
  Share2,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

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
        "Forma parte de nuestra red y accede a beneficios exclusivos.",
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
        "Invierte en nuestro crecimiento y participa en decisiones estratégicas.",
      beneficios: ["Dividendos anuales", "Voz y voto", "Acceso prioritario"],
      icono: TrendingUp,
    },
    {
      titulo: "Inversionista",
      descripcion:
        "Participa en proyectos específicos con retornos atractivos.",
      beneficios: [
        "ROI competitivo",
        "Diversificación",
        "Asesoría especializada",
      ],
      icono: DollarSign,
    },
  ];
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicaciones",
      details: [
        "Calle 3 de Noviembre s/n - Pangoa",
        "Av. Victor Andrés Bélaunde 420 - Mazamari",
      ],
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["900 460 040"],
    },
    {
      icon: AtSign,
      title: "Email",
      details: ["isiperu25@gmail.com"],
    },
    {
      icon: Share2,
      title: "Redes Sociales",
      details: ["ISI PERU"],
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-legal-pattern-with-scales-of-justice-OVrDzq3nKkOncpQyU9RoMhnEqp10Hx.png')] opacity-5"></div>
      <div className="container mx-auto  relative z-10 text-center mb-12">
        <h2 className="text-4xl  md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Únete a <span className="text-emerald-600">ISI Perú</span>
        </h2>
      </div>
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Información */}
          <div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {modalidadesIntegracion.map((modalidad, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-transform transform hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <modalidad.icono className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {modalidad.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {modalidad.descripcion}
                  </p>
                  <ul className="space-y-1.5">
                    {modalidad.beneficios.map((beneficio, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Nueva Sección: Información de Contacto */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-600" />
                Información de Contacto
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {item.title}
                      </h4>
                      {item.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-sm text-gray-600 leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Formulario */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 h-fit">
            <div className="mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                Contáctanos
              </h3>
              <p className="text-sm lg:text-base text-gray-600">
                Completa el formulario y nuestro equipo se pondrá en contacto
                contigo.
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 lg:p-4 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm lg:text-base"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 lg:p-4 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm lg:text-base"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 lg:p-4 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm lg:text-base"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full p-3 lg:p-4 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm lg:text-base"
              >
                <option value="">Servicio de interés</option>
                <option value="derecho-administrativo">
                  Derecho Administrativo
                </option>
                <option value="derecho-corporativo">Derecho Corporativo</option>
                <option value="derecho-civil">Derecho Civil</option>
                <option value="derecho-penal">Derecho Penal</option>
                <option value="derecho-laboral">Derecho Laboral</option>
                <option value="saneamiento-predios-titulacion">
                  Saneamiento de Predios
                </option>
                <option value="derecho-de-familia">Derecho de Familia</option>
                <option value="derecho-inmobiliario">
                  Derecho Inmobiliario
                </option>
                <option value="proyectos-infraestructura">
                  Proyectos e Infraestructura
                </option>
                <option value="investigacion-y-pericia">
                  Investigación y Pericia
                </option>
              </select>
              <textarea
                name="message"
                placeholder="Mensaje"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 lg:p-4 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none text-sm lg:text-base"
              ></textarea>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 p-3 lg:p-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base"
              >
                <Mail className="w-4 h-4 lg:w-5 lg:h-5" />
                Enviar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
