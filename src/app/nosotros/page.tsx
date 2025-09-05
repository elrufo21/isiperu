"use client";
import AlliesCarousel from "@/components/AlliesCarousel";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NosotrosPage() {
  const [activeTab, setActiveTab] = useState("objetivos");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-r from-[#111] via-[#1c1c1c] to-[#111]">
        {/* Fondo con imagen + overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom opacity-40"
            style={{ backgroundImage: "url(/nosotros.jpeg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
        </div>

        {/* Contenido */}
        <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Texto principal */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-center lg:text-left space-y-6"
            >
              {/* Título */}
              <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug tracking-tight text-white">
                Transformando la{" "}
                <span className="block text-transparent bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text">
                  Selva Central
                </span>
              </h1>

              {/* Descripción */}
              <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
                Con más de{" "}
                <span className="text-emerald-400 font-semibold">
                  14 años de experiencia
                </span>
                , ISI Perú lidera el desarrollo inmobiliario sostenible,
                integrando comunidades y transformando territorios.
              </p>

              {/* Badges inferiores */}
              <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                  <div className="h-2 w-2 bg-emerald-400 rounded-full animate-ping" />
                  Activos desde 2010
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                  <div className="h-2 w-2 bg-emerald-400 rounded-full animate-ping" />
                  6 Proyectos Exitosos
                </div>
              </div>

              {/* Botón de contacto */}
              <a
                href="https://wa.me/+51900460040?text=Hola,%20quiero%20más%20información%20sobre%20ISI%20Perú"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
              >
                Contáctanos
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white  text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-legal-pattern-with-scales-of-justice-OVrDzq3nKkOncpQyU9RoMhnEqp10Hx.png')] opacity-5 pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Cards Carousel */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-100 p-6 sm:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Nuestra Identidad
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Conoce los pilares que nos definen
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      title: "Nuestro Contexto",
                      content:
                        "Según la CCL, más del 90% del crecimiento del sector inmobiliario es informal, generando desconfianza y afectando la seguridad jurídica.",
                      icon: "📊",
                      color: "emerald",
                    },
                    {
                      title: "Misión",
                      content:
                        "Integrar a personas y organizaciones del sector inmobiliario, brindando soluciones integrales con un equipo calificado.",
                      icon: "🎯",
                      color: "blue",
                    },
                    {
                      title: "Visión",
                      content:
                        "Ser la organización líder del país, con alianzas estratégicas que destaquen por calidad e innovación.",
                      icon: "🌟",
                      color: "purple",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className={`p-4 sm:p-6 bg-${item.color}-50 rounded-xl sm:rounded-2xl border border-${item.color}-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                Quiénes Somos
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 mb-8 sm:mb-12 leading-relaxed">
                Integración Social Inmobiliaria (I.S.I. Perú) es una empresa
                innovadora que se dedica a conectar personas naturales y
                jurídicas en el sector inmobiliario. Nos especializamos en
                brindar soluciones completas y especializadas en consultoría,
                asistencia, compraventa y desarrollo de proyectos inmobiliarios.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">🏗️</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                      Desarrollo Sostenible
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700">
                      Transformamos territorios creando oportunidades para las
                      comunidades locales con un enfoque en la sostenibilidad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                      Integración Social
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700">
                      Conectamos personas y organizaciones para fortalecer el
                      sector inmobiliario de manera colaborativa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                      Innovación Constante
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700">
                      Adoptamos mecanismos de inteligencia artificial y
                      tecnologías avanzadas para optimizar nuestros procesos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-legal-pattern-with-scales-of-justice-OVrDzq3nKkOncpQyU9RoMhnEqp10Hx.png')] opacity-5 pointer-events-none"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  Nuestra Historia
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                    ISI nace a partir de Prodevidas y es liderada por
                    <span className="text-emerald-400 font-semibold">
                      {" "}
                      Mario Félix Mendoza Aguirre
                    </span>
                    .
                  </p>
                  <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                    Desde 2010 impulsamos habilitaciones urbanas y colocación de
                    lotes en la Selva Central del Perú, transformando
                    territorios y creando oportunidades para las comunidades
                    locales.
                  </p>
                </div>
              </div>

              {/* Timeline de hitos importantes */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-emerald-400 mb-3 sm:mb-4">
                  Hitos Importantes
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-emerald-300 font-semibold text-sm sm:text-base">
                        2010
                      </span>
                      <span className="text-gray-300 ml-2 text-sm sm:text-base">
                        Fundación de Prodevidas
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-emerald-300 font-semibold text-sm sm:text-base">
                        2015
                      </span>
                      <span className="text-gray-300 ml-2 text-sm sm:text-base">
                        Primer proyecto: Esperanza de Vida I
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-emerald-300 font-semibold text-sm sm:text-base">
                        2020
                      </span>
                      <span className="text-gray-300 ml-2 text-sm sm:text-base">
                        Expansión a Mazamari
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-emerald-300 font-semibold text-sm sm:text-base">
                        2024
                      </span>
                      <span className="text-gray-300 ml-2 text-sm sm:text-base">
                        Proyecto Ecovida en desarrollo
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-emerald-300 font-semibold text-sm sm:text-base">
                        2025
                      </span>
                      <span className="text-gray-300 ml-2 text-sm sm:text-base">
                        Fundacion de ISIPERÚ
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Valores y principios */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10">
                <h3 className="text-base sm:text-lg font-semibold text-emerald-400 mb-3 sm:mb-4">
                  Nuestros Principios
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-xs sm:text-sm text-gray-300">
                      Transparencia
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-xs sm:text-sm text-gray-300">
                      Sostenibilidad
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-xs sm:text-sm text-gray-300">
                      Innovación
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-xs sm:text-sm text-gray-300">
                      Comunidad
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-white">
                Proyectos Realizados
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    name: "Esperanza de Vida I Etapa",
                    location: "Pangoa",
                    status: "Completado",
                  },
                  {
                    name: "Valle Sagrado",
                    location: "Mazamari",
                    status: "Completado",
                  },
                  {
                    name: "Villa Flavia",
                    location: "Mazamari",
                    status: "Completado",
                  },
                  {
                    name: "Esperanza de Vida II Etapa",
                    location: "Pangoa",
                    status: "Completado",
                  },
                  {
                    name: "La Molina",
                    location: "Mazamari",
                    status: "Completado",
                  },
                  {
                    name: "Ecovida",
                    location: "Pangoa",
                    status: "En desarrollo",
                  },
                ].map((proyecto, index) => (
                  <div
                    key={proyecto.name}
                    className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white text-sm sm:text-base">
                          {proyecto.name}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400">
                          {proyecto.location}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full ${
                        proyecto.status === "Completado"
                          ? "bg-green-600/30 text-green-300 border border-green-500/30"
                          : "bg-blue-600/30 text-blue-300 border border-blue-500/30"
                      }`}
                    >
                      {proyecto.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Advantages */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white  text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-legal-pattern-with-scales-of-justice-OVrDzq3nKkOncpQyU9RoMhnEqp10Hx.png')] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Cómo Trabajamos
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos múltiples formas de integración y un conjunto completo
              de servicios para el desarrollo inmobiliario sostenible.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-lg border border-gray-200">
              <div className="flex space-x-1">
                {[
                  { id: "objetivos", label: "Objetivos", icon: "🎯" },
                  { id: "ventajas", label: "Ventajas", icon: "⭐" },
                  { id: "areas", label: "Áreas", icon: "🏗️" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                      activeTab === tab.id
                        ? "bg-emerald-500 text-white shadow-lg transform scale-105"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-base sm:text-lg">{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-100 overflow-hidden">
              {/* Objetivos Estratégicos Tab */}
              {activeTab === "objetivos" && (
                <div className="p-6 sm:p-8 min-h-[400px] sm:min-h-[500px] flex flex-col">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Objetivos Estratégicos
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Nuestra hoja de ruta hacia el éxito
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6 flex-1">
                    {[
                      "Integrar organizaciones y dotar de conocimientos, servicios y materiales.",
                      "Fortalecer al emprendedor en su proyección empresarial inmobiliaria.",
                      "Impulsar asociaciones y empresas para proyectos de gran envergadura.",
                      "Ser reconocidos por nuestra trayectoria en el rubro inmobiliario.",
                      "Lograr acreditaciones y avalar a los integrados a la ISI.",
                    ].map((objetivo, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 sm:p-4 bg-emerald-50 rounded-lg sm:rounded-xl border border-emerald-100"
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-xs sm:text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                          {objetivo}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Nuestras Ventajas Tab */}
              {activeTab === "ventajas" && (
                <div className="p-6 sm:p-8 min-h-[400px] sm:min-h-[500px] flex flex-col">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl">⭐</span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Nuestras Ventajas
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Lo que nos hace únicos
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6 flex-1">
                    {[
                      "Equipo de profesionales altamente capacitados.",
                      "Respaldo económico y participación de personas naturales y jurídicas.",
                      "Oficina central con condiciones acordes a la demanda.",
                      "Realización de negocios cruzados.",
                      "Adopción de mecanismos de inteligencia artificial.",
                      "Respaldo institucional sólido.",
                    ].map((ventaja, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 sm:p-4 bg-purple-50 rounded-lg sm:rounded-xl border border-purple-100"
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-xs sm:text-sm">
                            ✓
                          </span>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                          {ventaja}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Áreas de Trabajo Tab */}
              {activeTab === "areas" && (
                <div className="p-6 sm:p-8 min-h-[400px] sm:min-h-[500px] flex flex-col">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl">🏗️</span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Áreas de Trabajo
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Especialidades que dominamos
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6 flex-1">
                    {[
                      {
                        name: "Ventas y Servicios",
                        icon: "💼",
                        desc: "Comercialización integral de propiedades",
                      },
                      {
                        name: "Consolidación Empresarial",
                        icon: "🏢",
                        desc: "Fortalecimiento de emprendedores",
                      },
                      {
                        name: "Marketing",
                        icon: "📢",
                        desc: "Estrategias digitales y tradicionales",
                      },
                      {
                        name: "Asesoría Legal",
                        icon: "⚖️",
                        desc: "Saneamiento y titulación de predios",
                      },
                    ].map((area) => (
                      <div
                        key={area.name}
                        className="p-4 sm:p-6 bg-orange-50 rounded-xl sm:rounded-2xl border border-orange-200 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                          {area.icon}
                        </div>
                        <div className="font-bold text-gray-900 text-base sm:text-lg mb-2">
                          {area.name}
                        </div>
                        <div className="text-sm sm:text-base text-gray-600">
                          {area.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-legal-pattern-with-scales-of-justice-OVrDzq3nKkOncpQyU9RoMhnEqp10Hx.png')] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 mb-3 sm:mb-4">
              Nuestros Aliados Estratégicos
            </h2>
            <p className="text-base sm:text-lg text-white max-w-2xl mx-auto">
              Trabajamos en colaboración con instituciones clave para garantizar
              el éxito de nuestros proyectos.
            </p>
          </div>

          <div className="container mx-auto px-4 mt-8 sm:mt-12 md:mt-16">
            <div className="rounded-xl sm:rounded-2xl bg-white py-3 sm:py-4 px-2 border border-emerald-200 shadow-lg">
              <AlliesCarousel />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
