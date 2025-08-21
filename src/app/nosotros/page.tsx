import { Badge } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | ISI Perú - Líderes en Desarrollo Inmobiliario",
  description:
    "Conoce ISI Perú: 14+ años transformando la Selva Central con desarrollos inmobiliarios sostenibles. Historia, misión, visión y proyectos exitosos.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros | ISI Perú",
    description:
      "Líderes en desarrollo inmobiliario sostenible en la Selva Central del Perú",
    type: "website",
  },
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        {/* Background with optimized loading */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{
              backgroundImage: "url(/nosotros.jpeg)",
              willChange: "transform",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/75 to-emerald-900/85" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700 text-white border-0 px-4 py-2 text-sm font-medium">
                Sobre Nosotros
              </Badge>

              <h1 className="font-montserrat font-heavy text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-[1.1] text-white">
                Transformando la
                <span className="block text-transparent bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text">
                  Selva Central
                </span>
              </h1>

              <p className="font-montserrat font-regular text-xl sm:text-2xl text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Con más de 14 años de experiencia, ISI Perú lidera el desarrollo
                inmobiliario sostenible, integrando comunidades y transformando
                territorios.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Activos desde 2010
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    6 Proyectos Exitosos
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Column */}
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/20 shadow-2xl">
                  <h3 className="text-lg font-semibold text-white mb-6 text-center">
                    Nuestros Números
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:bg-white/20 transition-all duration-300">
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                        14+
                      </div>
                      <div className="text-sm text-gray-300">
                        Años de Experiencia
                      </div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:bg-white/20 transition-all duration-300">
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                        6
                      </div>
                      <div className="text-sm text-gray-300">
                        Proyectos Realizados
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-600/30 to-emerald-500/30 backdrop-blur-sm rounded-xl p-4 text-center border border-emerald-400/30">
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                      90%
                    </div>
                    <div className="text-sm text-gray-300">
                      del sector es informal
                    </div>
                    <div className="text-xs text-gray-400 mt-1">según CCL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden  bg-green-diagonal-alt">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-emerald-100/50" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quiénes Somos
            </h2>
            <p className="text-lg text-gray-600  mx-auto leading-relaxed">
              Integración Social Inmobiliaria (I.S.I. Perú) es una empresa
              innovadora que se dedica a conectar personas naturales y jurídicas
              en el sector inmobiliario. Nos especializamos en brindar
              soluciones completas y especializadas en consultoría, asistencia,
              compraventa y desarrollo de proyectos inmobiliarios, asegurando
              procesos transparentes y eficientes. Nuestro enfoque está en
              fortalecer a nuestros clientes con herramientas y conocimientos
              para transformar sus aspiraciones inmobiliarias en realidades
              sólidas y rentables.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Nuestro Contexto",
                content:
                  "Según la CCL, más del 90% del crecimiento del sector inmobiliario es informal, generando desconfianza y afectando la seguridad jurídica. Trabajamos en todos los procesos para beneficiar directa e indirectamente al sector en la Selva Central.",
                icon: "📊",
              },
              {
                title: "Misión",
                content:
                  "Integrar a personas y organizaciones del sector inmobiliario, brindando soluciones integrales con un equipo calificado, para asegurar efectividad, competitividad y desarrollo sostenible.",
                icon: "🎯",
              },
              {
                title: "Visión",
                content:
                  "Ser la organización líder del país, con alianzas estratégicas que destaquen por calidad e innovación, generando valor para nuestros grupos de interés.",
                icon: "🌟",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.emerald.500)_0%,transparent_70%)]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  ISI nace a partir de Prodevidas y es liderada por
                  <span className="text-emerald-400 font-semibold">
                    {" "}
                    Mario Félix Mendoza Aguirre
                  </span>
                  .
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Desde 2010 impulsamos habilitaciones urbanas y colocación de
                  lotes en la Selva Central del Perú, transformando territorios
                  y creando oportunidades para las comunidades locales.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-8 text-center text-white">
                Proyectos Realizados
              </h3>

              <div className="space-y-4">
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
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white">
                          {proyecto.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {proyecto.location}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
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
      <section className="py-16 lg:py-24 bg-gray-50 bg-green-diagonal-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cómo Trabajamos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos múltiples formas de integración y un conjunto completo
              de servicios para el desarrollo inmobiliario sostenible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Objetivos Estratégicos
                </h3>
                <ul className="space-y-4">
                  {[
                    "Integrar organizaciones y dotar de conocimientos, servicios y materiales.",
                    "Fortalecer al emprendedor en su proyección empresarial inmobiliaria.",
                    "Impulsar asociaciones y empresas para proyectos de gran envergadura.",
                    "Ser reconocidos por nuestra trayectoria en el rubro inmobiliario.",
                    "Lograr acreditaciones y avalar a los integrados a la ISI.",
                  ].map((objetivo, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {objetivo}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Modalidades de Integración
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {["Afiliado", "Accionista", "Inversionista"].map(
                    (modalidad) => (
                      <div
                        key={modalidad}
                        className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-100"
                      >
                        <div className="text-lg font-semibold text-emerald-800 mb-1">
                          {modalidad}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Nuestras Ventajas
                </h3>
                <ul className="space-y-4">
                  {[
                    "Equipo de profesionales altamente capacitados.",
                    "Respaldo económico y participación de personas naturales y jurídicas.",
                    "Oficina central con condiciones acordes a la demanda.",
                    "Realización de negocios cruzados.",
                    "Adopción de mecanismos de inteligencia artificial.",
                    "Respaldo institucional sólido.",
                  ].map((ventaja, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {ventaja}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Áreas de Trabajo
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Ventas y Servicios",
                    "Consolidación Empresarial",
                    "Marketing",
                    "Asesoría Legal y Saneamiento de Predios",
                  ].map((area) => (
                    <div
                      key={area}
                      className="p-4 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl border border-gray-200 text-center"
                    >
                      <div className="font-semibold text-gray-800">{area}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 lg:py-24 bg-white bg-green-diagonal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Aliados Estratégicos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trabajamos en colaboración con instituciones clave para garantizar
              el éxito de nuestros proyectos.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
              {[
                { name: "Notarías", icon: "📋" },
                { name: "Municipalidades", icon: "🏛️" },
                { name: "SUNARP", icon: "🏢" },
                { name: "Empresas", icon: "🤝" },
              ].map((aliado) => (
                <div
                  key={aliado.name}
                  className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{aliado.icon}</div>
                  <div className="font-semibold text-gray-900">
                    {aliado.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
