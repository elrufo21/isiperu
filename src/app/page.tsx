"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Building2,
  Users,
  Scale,
  Star,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ChevronRight,
  Award,
  Shield,
  TrendingUp,
  Heart,
  Eye,
  Share2,
  DollarSign,
  UserCheck,
  Target,
  Home,
  TreePine,
  Handshake,
  Globe,
  Zap,
  ChevronLeft,
} from "lucide-react";

export default function ISIPeruHomepage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [currentSlide, setCurrentSlide] = useState(0);

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

  // Estadísticas reales de ISI
  const estadisticas = [
    { numero: "14+", label: "Años de Experiencia" },
    { numero: "6", label: "Proyectos Completados" },
    { numero: "1000+", label: "Familias Beneficiadas" },
  ];

  const servicios = [
    {
      icono: Home,
      titulo: "Ventas y Servicios",
      descripcion:
        "Comercialización integral de propiedades con estrategias personalizadas para maximizar el valor de tu inversión.",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      features: [
        "Estrategias de Venta",
        "Evaluación de Propiedades",
        "Gestión Comercial",
      ],
    },
    {
      icono: TrendingUp,
      titulo: "Consolidación Empresarial",
      descripcion:
        "Fortalecemos emprendedores en diferentes niveles de proyección empresarial inmobiliaria.",
      color: "from-emerald-500 to-emerald-600",
      hoverColor: "hover:from-emerald-600 hover:to-emerald-700",
      features: ["Desarrollo Empresarial", "Capacitación", "Mentoría"],
    },
    {
      icono: Globe,
      titulo: "Marketing",
      descripcion:
        "Estrategias de marketing digital y tradicional con adopción de mecanismos de inteligencia artificial.",
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
      features: [
        "Marketing Digital",
        "Inteligencia Artificial",
        "Campañas Personalizadas",
      ],
    },
    {
      icono: Scale,
      titulo: "Asesoría Legal y Saneamiento",
      descripcion:
        "Servicios legales especializados en saneamiento de predios y asesoría jurídica inmobiliaria.",
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:from-orange-600 hover:to-orange-700",
      features: [
        "Saneamiento Legal",
        "Titulación de Predios",
        "Asesoría Jurídica",
      ],
    },
  ];

  const proyectosCompletados = [
    {
      id: "1",
      titulo: "Esperanza de Vida I Etapa",
      ubicacion: "Pangoa, Junín",
      estado: "Completado",
      tipo: "Habilitación Urbana",
      imagen: "/espDeVida.jpg",
      caracteristicas: [
        "Habilitación completa",
        "Titulación finalizada",
        "Servicios básicos",
        "Áreas verdes",
      ],
      destacado: true,
    },
    {
      id: "2",
      titulo: "Valle Sagrado",
      ubicacion: "Mazamari, Junín",
      estado: "Completado",
      tipo: "Urbanización",
      imagen: "/vallesagrado.jpg",
      caracteristicas: [
        "Diseño moderno",
        "Infraestructura completa",
        "Zona residencial",
        "Acceso pavimentado",
      ],
      destacado: false,
    },
    {
      id: "3",
      titulo: "Villa Flavia",
      ubicacion: "Mazamari, Junín",
      estado: "Completado",
      tipo: "Proyecto Residencial",
      imagen: "/VillaFlavia.jpg",
      caracteristicas: [
        "Zona privilegiada",
        "Seguridad 24/7",
        "Áreas recreativas",
        "Cercanía a servicios",
      ],
      destacado: false,
    },
    {
      id: "4",
      titulo: "Esperanza de Vida II Etapa",
      ubicacion: "Pangoa, Junín",
      estado: "Completado",
      tipo: "Habilitación Urbana",
      imagen: "/espDeVida.jpg",
      caracteristicas: [
        "Expansión del proyecto original",
        "Titulación avanzada",
        "Servicios mejorados",
        "Áreas comunes",
      ],
      destacado: false,
    },
    {
      id: "5",
      titulo: "La Molina",
      ubicacion: "Mazamari, Junín",
      estado: "Completado",
      tipo: "Urbanización Residencial",
      imagen: "/lamolina.webp",
      caracteristicas: [
        "Zona exclusiva",
        "Seguridad privada",
        "Parques y jardines",
        "Acceso controlado",
      ],
      destacado: false,
    },
    {
      id: "6",
      titulo: "Ecovida",
      ubicacion: "Pangoa, Junín",
      estado: "Completado",
      tipo: "Proyecto Sostenible",
      imagen: "/ecovida.jpg",
      caracteristicas: [
        "Enfoque ecológico",
        "Energía renovable",
        "Espacios verdes",
        "Comunidad sostenible",
      ],
      destacado: false,
    },
  ];

  // Carousel logic (responsive)
  const [slidesPerView, setSlidesPerView] = useState(3);
  const totalSlides = Math.ceil(proyectosCompletados.length / slidesPerView);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 640) {
        setSlidesPerView(1); // sm-
      } else if (viewportWidth < 1024) {
        setSlidesPerView(2); // md
      } else {
        setSlidesPerView(3); // lg+
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    // Evita quedar fuera de rango cuando cambia el número de tarjetas por vista
    setCurrentSlide(0);
  }, [slidesPerView]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const testimonios = [
    {
      nombre: "Carlos Mendoza",
      cargo: "Empresario, Pangoa",
      comentario:
        "ISI Perú nos ayudó a obtener la titulación de nuestro predio de manera rápida y segura. Su experiencia en la Selva Central es incomparable.",
      calificacion: 5,
      proyecto: "Saneamiento Legal",
      tiempo: "3 meses",
    },
    {
      nombre: "María Torres",
      cargo: "Inversionista Inmobiliaria",
      comentario:
        "La consolidación empresarial que recibí me permitió estructurar mejor mi negocio inmobiliario. Ahora tengo una visión más clara de mis objetivos.",
      calificacion: 5,
      proyecto: "Asesoría Empresarial",
      tiempo: "6 meses",
    },
    {
      nombre: "Roberto Vásquez",
      cargo: "Propietario en Mazamari",
      comentario:
        "Adquirí mi lote en Valle Sagrado hace 3 años y ha sido la mejor inversión que he hecho. La ubicación y los servicios son excelentes.",
      calificacion: 5,
      proyecto: "Valle Sagrado",
      tiempo: "3 años",
    },
  ];

  const ventajas = [
    {
      icono: Users,
      titulo: "Equipo Profesional",
      descripcion:
        "Profesionales altamente capacitados para diferentes áreas y servicios especializados",
    },
    {
      icono: Shield,
      titulo: "Respaldo Económico",
      descripcion:
        "Sólido respaldo financiero en proyectos con participación de personas naturales y jurídicas",
    },
    {
      icono: Zap,
      titulo: "Tecnología IA",
      descripcion:
        "Adopción de mecanismos de inteligencia artificial en nuestros procesos",
    },
    {
      icono: Handshake,
      titulo: "Respaldo Institucional",
      descripcion:
        "Alianzas estratégicas con notarías, municipalidades, SUNARP y empresas",
    },
  ];

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

  const estadisticasEmpresa = [
    { numero: "6", label: "Proyectos Completados", icon: Building2 },
    { numero: "1000+", label: "Familias Beneficiadas", icon: Heart },
    { numero: "14", label: "Años de Experiencia", icon: Star },
    { numero: "24/7", label: "Atención al Cliente", icon: Clock },
  ];

  const aliados = [
    { nombre: "Notarías", descripcion: "Red de notarías especializadas" },
    { nombre: "Municipalidades", descripcion: "Convenios municipales activos" },
    { nombre: "SUNARP", descripcion: "Gestión registral eficiente" },
    { nombre: "Empresas", descripcion: "Alianzas estratégicas corporativas" },
  ];

  // Auto-scroll para aliados (sin controles)
  const aliadosRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = aliadosRef.current;
    if (!container) return;
    let rafId: number;
    let lastTs: number | null = null;
    const speed = 40; // px/seg
    const tick = (ts: number) => {
      if (lastTs == null) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll > 0) {
        container.scrollLeft += (speed * dt) / 1000;
        if (container.scrollLeft >= maxScroll - 1) container.scrollLeft = 0;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[800px] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden ">
        {/* Elegant Gradient Background */}
        <div className="absolute inset-0 min-h-[800px] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
          <div className="absolute inset-0  bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1718]/80 via-transparent to-[#2a2529]/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 via-transparent to-emerald-800/3"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 py-3 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center ]">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 rounded-full text-sm font-semibold border border-green-500/30 backdrop-blur-sm">
                  <Award className="w-5 h-5 mr-2" />
                  Líder en la Selva Central desde 2010
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                  Integración Social{" "}
                  <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                    Inmobiliaria
                  </span>{" "}
                  Perú
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  Más de 14 años especializados en habilitaciones urbanas y
                  desarrollo inmobiliario en la Selva Central del Perú.
                  Integramos a personas naturales y jurídicas del sector
                  inmobiliario.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() =>
                    document
                      ?.getElementById("proyectos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25"
                >
                  Ver Proyectos
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:900460040"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white hover:text-slate-800 font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm hover:border-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contactar
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {estadisticas.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                      {stat.numero}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white/5">
                <Image
                  src="/hero.png"
                  alt="ISI Perú"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  className="object-contain w-full h-auto"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 bg-white bg-green-diagonal relative overflow-hidden">
        {/* Textura ligera tipo plano (rejilla) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H40 M0 0V40' stroke='%23e5e7eb' stroke-width='1' stroke-opacity='1' /%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Servicios Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Brindamos soluciones integrales en proyectos inmobiliarios con un
              equipo de trabajo calificado, asegurando efectividad y desarrollo
              sostenible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${servicio.color} ${servicio.hoverColor} text-white rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 shadow-lg`}
                  >
                    <servicio.icono className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {servicio.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {servicio.descripcion}
                  </p>
                  <div className="space-y-2">
                    {servicio.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="proyectos"
        className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white relative overflow-hidden"
      >
        {/* Background overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#231F20]/90 via-transparent to-[#231F20]/90"></div>
        {/* Textura esmeralda tenue */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H40 M0 0V40' stroke='%2310b981' stroke-width='1' stroke-opacity='0.4' /%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-6">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 text-emerald-400 rounded-full text-sm font-semibold mb-4 border border-emerald-500/30">
                <Building2 className="w-4 h-4 mr-2" />
                Proyectos Exitosos
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Nuestras Realizaciones
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl">
                ISI ha realizado habilitaciones urbanas y titulación de
                urbanizaciones en Pangoa y Mazamari, posicionándose como líder
                en la región.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
              <button
                onClick={() => handlePrevSlide()}
                className="group w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
              <button
                onClick={() => handleNextSlide()}
                className="group w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
              </button>
            </div>

            {/* Custom Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                    <div
                      className={`grid gap-4 md:gap-6 ${
                        slidesPerView === 1
                          ? "grid-cols-1"
                          : slidesPerView === 2
                          ? "grid-cols-2"
                          : "grid-cols-3"
                      }`}
                    >
                      {proyectosCompletados
                        .slice(
                          slideIndex * slidesPerView,
                          (slideIndex + 1) * slidesPerView
                        )
                        .map((proyecto) => (
                          <div
                            key={proyecto.id}
                            className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 h-full"
                          >
                            <div className="relative h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 overflow-hidden">
                              <div className="absolute top-4 right-4 z-10">
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                  {proyecto.estado}
                                </span>
                              </div>

                              {proyecto.imagen ? (
                                <>
                                  <Image
                                    src={proyecto.imagen}
                                    alt={proyecto.titulo}
                                    fill
                                    className="object-cover"
                                    style={{ objectPosition: "center 40%" }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                                </>
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-emerald-200 to-emerald-300 flex items-center justify-center">
                                  <TreePine className="w-16 h-16 text-emerald-600" />
                                </div>
                              )}
                            </div>

                            <div className="p-3 md:p-4">
                              <h3 className="text-sm md:text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                                {proyecto.titulo}
                              </h3>
                              <div className="flex items-center text-slate-300 mb-2 md:mb-3">
                                <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 flex-shrink-0" />
                                <span className="text-xs md:text-sm truncate">
                                  {proyecto.ubicacion}
                                </span>
                              </div>

                              <div className="flex items-center mb-2 md:mb-3">
                                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full font-medium">
                                  {proyecto.tipo}
                                </span>
                              </div>

                              <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                                {proyecto.caracteristicas
                                  .slice(0, 1)
                                  .map((caracteristica, idx) => (
                                    <span
                                      key={idx}
                                      className="px-1 md:px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full font-medium border border-white/20"
                                    >
                                      {caracteristica}
                                    </span>
                                  ))}
                                {proyecto.caracteristicas.length > 1 && (
                                  <span className="px-1 md:px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full font-medium border border-white/20">
                                    +{proyecto.caracteristicas.length - 1} más
                                  </span>
                                )}
                              </div>

                              <div className="flex items-center justify-between">
                                <button className="text-emerald-400 hover:text-emerald-300 font-semibold text-xs transition-colors">
                                  Ver detalles
                                </button>
                                <div className="flex space-x-1">
                                  <button className="p-1 text-slate-400 hover:text-emerald-400 transition-colors">
                                    <Heart className="w-3 h-3 md:w-4 md:h-4" />
                                  </button>
                                  <button className="p-1 text-slate-400 hover:text-emerald-400 transition-colors">
                                    <Share2 className="w-3 h-3 md:w-4 md:h-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-emerald-500 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Integration Modalities Section */}
      <section className="py-16 bg-white bg-green-diagonal-alt relative overflow-hidden">
        {/* Textura ligera tipo plano (rejilla) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H40 M0 0V40' stroke='%23e5e7eb' stroke-width='1' stroke-opacity='1' /%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Left: heading + cards */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                  Únete a ISI Perú
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
                  Ofrecemos diferentes modalidades para que puedas integrarte a
                  nuestra organización según tus objetivos y capacidades de
                  inversión.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {modalidadesIntegracion.map((modalidad, index) => (
                  <div
                    key={index}
                    className="group h-full flex flex-col bg-gradient-to-br from-white to-gray-50 p-5 md:p-6 lg:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 md:min-h-[300px] lg:min-h-[340px]"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-2xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                      <modalidad.icono className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {modalidad.titulo}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-snug text-sm">
                      {modalidad.descripcion}
                    </p>
                    <div className="space-y-1.5 mt-auto">
                      {modalidad.beneficios.map((beneficio, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-[13px] md:text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
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
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl">
                <div className="space-y-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Contáctanos
                    </h3>
                    <p className="text-gray-600">
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
                      className="w-full p-4 rounded-xl bg-white border border-gray-300 text-slate-800 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Correo electrónico"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl bg-white border border-gray-300 text-slate-800 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Teléfono"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl bg-white border border-gray-300 text-slate-800 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl bg-white border border-gray-300 text-slate-800 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
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
                      className="w-full p-4 rounded-xl bg-white border border-gray-300 text-slate-800 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full p-4 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
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
      {/* Advantages Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white relative overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#231F20]/90 via-transparent to-[#231F20]/90"></div>
        {/* Textura esmeralda tenue */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H40 M0 0V40' stroke='%2310b981' stroke-width='1' stroke-opacity='0.4' /%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 text-emerald-400 rounded-full text-sm font-semibold mb-6 border border-emerald-500/30">
                <Award className="w-4 h-4 mr-2" />
                Nuestras Ventajas
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                ¿Por qué elegir ISI Perú?
              </h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Nuestro objetivo es integrar a las organizaciones y dotar de
                conocimientos, servicios y materiales a quienes lo soliciten,
                fortaleciendo el sector inmobiliario.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {ventajas.map((ventaja, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl flex items-center justify-center">
                      <ventaja.icono className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {ventaja.titulo}
                      </h3>
                      <p className="text-gray-300">{ventaja.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Celular</p>
                    <a
                      href="tel:900460040"
                      className="font-semibold hover:text-green-400 transition-colors"
                    >
                      900460040
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <a
                      href="mailto:isiperu25@gmail.com"
                      className="font-semibold hover:text-green-400 transition-colors"
                    >
                      isiperu25@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Oficinas</p>
                    <p className="font-semibold mb-1">
                      Calle 3 de Noviembre s/n - Pangoa
                    </p>
                    <p className="font-semibold">
                      Av. Victor Andrés Bélaunde 420 - Mazamari
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Redes Sociales</p>
                    <p className="font-semibold">ISI PERU</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section 
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600/10 to-emerald-500/10 text-green-600 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Testimonios
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 1000 familias han confiado en nosotros para sus proyectos
              inmobiliarios en la Selva Central del Perú
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex mb-6">
                  {[...Array(testimonio.calificacion)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  &ldquo;{testimonio.comentario}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mr-4 flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">
                        {testimonio.nombre}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonio.cargo}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      <Briefcase className="w-4 h-4 inline mr-1" />
                      {testimonio.proyecto}
                    </span>
                    <span className="text-green-600 font-semibold">
                      {testimonio.tiempo}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}
      {/* Mission & Vision Section */}
      <section className="py-16 bg-white bg-green-diagonal text-slate-900 relative overflow-hidden">
        {/* Textura ligera tipo plano (rejilla) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H40 M0 0V40' stroke='%23e5e7eb' stroke-width='1' stroke-opacity='1' /%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="h-full flex flex-col">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold mb-6 border border-emerald-200">
                  <Target className="w-4 h-4 mr-2" />
                  Nuestra Misión
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Integramos el Sector Inmobiliario
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Somos una organización dedicada a integrar a personas
                  naturales y jurídicas en el sector inmobiliario. Estamos
                  especializados en brindar soluciones integrales en proyectos
                  inmobiliarios con un equipo de trabajo calificado. Buscamos
                  asegurar la efectividad, competitividad y el desarrollo
                  sostenible en nuestra sociedad.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-stretch mt-auto">
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between min-h-[200px]">
                  <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Soluciones Integrales
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Servicios completos para el sector inmobiliario
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between min-h-[200px]">
                  <Users className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Equipo Calificado
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Profesionales especializados en cada área
                  </p>
                </div>
              </div>
            </div>

            <div className="h-full flex flex-col">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold mb-6 border border-emerald-200">
                  <Eye className="w-4 h-4 mr-2" />
                  Nuestra Visión
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Líderes del País
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Ser la organización líder en el país, con alianzas
                  estratégicas para negocios del sector inmobiliario. Queremos
                  resaltar por nuestra calidad e innovación, generando valor
                  para nuestros inversionistas, accionistas, clientes,
                  colaboradores y la sociedad.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-stretch mt-auto">
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between min-h-[200px]">
                  <Award className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Calidad e Innovación
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Estándares de excelencia en todos nuestros proyectos
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between min-h-[200px]">
                  <Handshake className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Alianzas Estratégicas
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Red de socios para maximizar oportunidades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Textura esmeralda tenue */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H40 M0 0V40' stroke='%2310b981' stroke-width='1' stroke-opacity='0.4' /%3E%3C/svg%3E\")",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Números que Respaldan Nuestra Experiencia
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Más de una década transformando la Selva Central con proyectos
              exitosos y familias satisfechas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estadisticasEmpresa.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {stat.numero}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 md:mt-16 ">
          <div className="rounded-2xl bg-white py-4 px-2 border border-emerald-100 shadow-lg">
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="text-sm font-semibold text-emerald-700">
                Aliados
              </span>
            </div>
            <div
              ref={aliadosRef}
              className="overflow-x-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            >
              <div className="inline-flex items-center gap-8 pr-8">
                {aliados.concat(aliados).map((a, i) => (
                  <div
                    key={`${a.nombre}-${i}`}
                    className="inline-flex items-center gap-3 text-slate-700"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      <Handshake className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm font-semibold text-slate-800">
                        {a.nombre}
                      </div>
                      <div className="text-xs text-slate-500">
                        {a.descripcion}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Aliados Section (tira) */}
    </div>
  );
}
