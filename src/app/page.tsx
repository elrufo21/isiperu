"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImageCarousel from "./components/ImageCarousel";
import SimpleVerticalCarousel from "./components/SimpleVerticalCarousel";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { HeroAnimatedCounter } from "../components/ui/HeroAnimatedCounter";
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
import AlliesCarousel from "@/components/AlliesCarousel/AlliesCarousel";

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
      color: "from-emerald-500 to-emerald-600",
      hoverColor: "hover:from-emerald-600 hover:to-emerald-700",
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
      color: "from-emerald-500 to-emerald-600",
      hoverColor: "hover:from-emerald-600 hover:to-emerald-700",
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
      color: "from-emerald-500 to-emerald-600",
      hoverColor: "hover:from-emerald-600 hover:to-emerald-700",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[800px] bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] overflow-hidden ">
        <div className="relative container mx-auto px-4 py-3 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center ]">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="font-montserrat font-heavy text-5xl md:text-7xl leading-tight text-white">
                  Integración Social{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                    Inmobiliaria
                  </span>{" "}
                  Perú
                </h1>
                <p className="font-montserrat font-regular text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
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
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25"
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
                  <HeroAnimatedCounter
                    key={index}
                    end={stat.numero}
                    label={stat.label}
                    duration={2000}
                    delay={index * 150} // Cada contador se anima con un pequeño delay
                  />
                ))}
              </div>
            </div>

            {/* Hero Image Carousel */}
            <div className="relative">
              <ImageCarousel
                images={[
                  {
                    src: "/hori1.webp",
                    alt: "Hori1 - Proyecto Residencial",
                  },
                  {
                    src: "/hori2.webp",
                    alt: "Hori2 - Proyecto Residencial",
                  },
                  {
                    src: "/hori3.webp",
                    alt: "Hori3 - Proyecto Residencial",
                  },
                  {
                    src: "/SanIsidro.jpg",
                    alt: "San Isidro - Proyecto Residencial",
                  },
                  {
                    src: "/ecovida.jpg",
                    alt: "Eco Vida - Desarrollo Sostenible",
                  },
                  {
                    src: "/espDeVida.jpg",
                    alt: "Espacio de Vida - Comunidad Integrada",
                  },
                  {
                    src: "/VillaFlavia.jpg",
                    alt: "Villa Flavia - Residencial Exclusivo",
                  },
                  { src: "/lamolina.webp", alt: "La Molina - Zona Premium" },
                  {
                    src: "/vallesagrado.jpg",
                    alt: "Valle Sagrado - Naturaleza y Confort",
                  },
                ]}
                interval={5000}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 bg-white bg-green-diagonal relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-montserrat font-heavy text-4xl md:text-5xl text-slate-800 mb-6">
              Servicios Especializados
            </h2>
            <p className="font-montserrat font-regular text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                  <h3 className="font-montserrat font-heavy text-xl text-slate-800 mb-4">
                    {servicio.titulo}
                  </h3>
                  <p className="font-montserrat font-regular text-gray-600 leading-relaxed mb-6">
                    {servicio.descripcion}
                  </p>
                  <div className="space-y-2">
                    {servicio.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
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
        className="py-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] text-white relative overflow-hidden"
      >
        {/* Background overlay for better readability */}
        <div className="absolute inset-0 "></div>
        {/* Textura esmeralda tenue */}

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-6">
            <div>
              <h2 className="font-montserrat font-heavy text-4xl md:text-5xl text-white mb-4">
                Nuestras Realizaciones
              </h2>
              <p className="font-montserrat font-regular text-xl text-slate-300 max-w-2xl">
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
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
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
      {/* Advantages Section */}
      <section className="py-16 bg-white bg-green-diagonal text-slate-900 relative overflow-hidden">
        {/* Background overlay */}

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                ¿Por qué elegir ISI Perú?
              </h2>
              <p className="text-xl text-slate-700 mb-12 leading-relaxed">
                Nuestro objetivo es integrar a las organizaciones y dotar de
                conocimientos, servicios y materiales a quienes lo soliciten,
                fortaleciendo el sector inmobiliario.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {ventajas.map((ventaja, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl flex items-center justify-center">
                      <ventaja.icono className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {ventaja.titulo}
                      </h3>
                      <p className="text-slate-700">{ventaja.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <SimpleVerticalCarousel />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] overflow-hidden">
        {/* Textura ligera tipo plano (rejilla) */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="h-full flex flex-col">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold mb-6 border border-emerald-200">
                  <Target className="w-4 h-4 mr-2" />
                  Nuestra Misión
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-400  mb-6">
                  Integramos el Sector Inmobiliario
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  Somos una organización dedicada a integrar a personas
                  naturales y jurídicas en el sector inmobiliario. Estamos
                  especializados en brindar soluciones integrales en proyectos
                  inmobiliarios con un equipo de trabajo calificado. Buscamos
                  asegurar la efectividad, competitividad y el desarrollo
                  sostenible en nuestra sociedad.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-stretch mt-auto">
                <div className="p-6  bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between min-h-[200px]">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                  <h4 className="font-semibold text-white ">
                    Soluciones Integrales
                  </h4>
                  <p className="text-white text-sm">
                    Servicios completos para el sector inmobiliario
                  </p>
                </div>
                <div className="p-6  bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between min-h-[200px]">
                  <Users className="w-8 h-8 text-emerald-600" />
                  <h4 className="font-semibold text-white ">
                    Equipo Calificado
                  </h4>
                  <p className="text-white text-sm">
                    Profesionales especializados en cada <br /> área
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
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-400  mb-6">
                  Líderes del País
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  Ser la organización líder en el país, con alianzas
                  estratégicas para negocios del sector inmobiliario. Queremos
                  resaltar por nuestra calidad e innovación, generando valor
                  para nuestros inversionistas, accionistas, clientes,
                  colaboradores y la sociedad.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-stretch mt-auto">
                <div className="p-6  bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between min-h-[200px]">
                  <Award className="w-8 h-8 text-emerald-600" />
                  <h4 className="font-semibold text-white ">
                    Calidad e Innovación
                  </h4>
                  <p className="text-white text-sm">
                    Estándares de excelencia en todos nuestros proyectos
                  </p>
                </div>
                <div className="p-6  bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between min-h-[200px]">
                  <Handshake className="w-8 h-8 text-emerald-600" />
                  <h4 className="font-semibold text-white ">
                    Alianzas Estratégicas
                  </h4>
                  <p className="text-white text-sm">
                    Red de socios para maximizar oportunidades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16  bg-white bg-green-diagonal-alt relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Textura esmeralda tenue */}

          <div className="text-center mb-16">
            <h2 className="font-montserrat font-heavy text-4xl md:text-5xl mb-6">
              Números que Respaldan Nuestra Experiencia
            </h2>
            <p className="font-montserrat font-regular text-xl text-slate-700 max-w-3xl mx-auto">
              Más de una década transformando la Selva Central con proyectos
              exitosos y familias satisfechas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estadisticasEmpresa.map((stat, index) => (
              <AnimatedCounter
                key={index}
                end={stat.numero}
                label={stat.label}
                icon={stat.icon}
                duration={2000}
                delay={index * 200} // Cada contador se anima con un pequeño delay
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 md:mt-16 ">
          <div className="rounded-2xl bg-white py-4 px-2 border border-emerald-200 shadow-lg">
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="text-sm font-semibold text-emerald-700">
                Aliados
              </span>
            </div>

            <AlliesCarousel />
          </div>
        </div>
      </section>
      {/* Integration Modalities Section */}
      <section className="py-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]  overflow-hidden ">
        {/* Textura ligera tipo plano (rejilla) */}

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Left: heading + cards */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
                  Únete a ISI Perú
                </h2>
                <p className="text-lg md:text-xl text-white max-w-3xl leading-relaxed">
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
      {/* Aliados Section (tira) */}
    </div>
  );
}
