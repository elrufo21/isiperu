import Link from "next/link";
import {
  Building2,
  Key,
  Calculator,
  Users,
  Star,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Search,
  Filter,
  ChevronRight,
  Award,
  Shield,
  TrendingUp,
  Briefcase,
  Heart,
  Eye,
  Share2,
  Calendar,
  DollarSign,
  Bath,
  Car,
  Wifi,
  Play,
} from "lucide-react";

export default function Home() {
  // Estadísticas para mostrar en el hero (se usan inline en el JSX)
  const estadisticas = [
    { numero: "500+", label: "Propiedades Vendidas" },
    { numero: "10+", label: "Años de Experiencia" },
    { numero: "1000+", label: "Clientes Satisfechos" },
  ];

  const servicios = [
    {
      icono: Building2,
      titulo: "Venta de Propiedades",
      descripcion:
        "Estrategias personalizadas para vender tu propiedad al mejor precio del mercado con tecnología avanzada.",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      features: [
        "Marketing Digital",
        "Fotografía Profesional",
        "Tours Virtuales",
      ],
    },
    {
      icono: Key,
      titulo: "Alquiler Premium",
      descripcion:
        "Encuentra el hogar perfecto con nuestro sistema de matching inteligente y gestión completa.",
      color: "from-emerald-500 to-emerald-600",
      hoverColor: "hover:from-emerald-600 hover:to-emerald-700",
      features: ["Matching Inteligente", "Gestión Completa", "Soporte 24/7"],
    },
    {
      icono: Calculator,
      titulo: "Tasaciones Expertas",
      descripcion:
        "Valoración precisa con IA y análisis de mercado en tiempo real para maximizar tu inversión.",
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
      features: [
        "IA Avanzada",
        "Análisis en Tiempo Real",
        "Reportes Detallados",
      ],
    },
    {
      icono: Users,
      titulo: "Asesoría VIP",
      descripcion:
        "Consultoría inmobiliaria de élite con acceso exclusivo a oportunidades de inversión premium.",
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:from-orange-600 hover:to-orange-700",
      features: [
        "Oportunidades Exclusivas",
        "Asesoría Personal",
        "Red de Contactos",
      ],
    },
  ];

  const propiedadesDestacadas = [
    {
      id: "1",
      titulo: "Residencial San Isidro Premium",
      ubicacion: "San Isidro, Lima",
      precio: "$2,800,000",
      precioAnterior: "$3,200,000",
      tipo: "Venta",
      imagen: "/api/placeholder/600/400",
      caracteristicas: [
        "4 dormitorios",
        "5 baños",
        "450m²",
        "Piscina",
        "Gimnasio",
      ],
      amenities: [Wifi, Bath, Car, Shield],
      destacado: true,
      tiempoEnMercado: "2 días",
      vistas: "1,247",
    },
    {
      id: "2",
      titulo: "Penthouse Miraflores Ocean View",
      ubicacion: "Miraflores, Lima",
      precio: "$1,200/mes",
      tipo: "Alquiler",
      imagen: "/api/placeholder/600/400",
      caracteristicas: [
        "3 dormitorios",
        "3 baños",
        "280m²",
        "Vista al mar",
        "Terraza",
      ],
      amenities: [Wifi, Bath, Shield],
      destacado: false,
      tiempoEnMercado: "1 semana",
      vistas: "892",
    },
    {
      id: "3",
      titulo: "Oficina Corporativa La Molina",
      ubicacion: "La Molina, Lima",
      precio: "$4,500/mes",
      tipo: "Alquiler",
      imagen: "/api/placeholder/600/400",
      caracteristicas: [
        "200m²",
        "Aire acondicionado",
        "Estacionamiento",
        "Recepción",
      ],
      amenities: [Wifi, Shield],
      destacado: false,
      tiempoEnMercado: "3 días",
      vistas: "456",
    },
  ];

  const testimonios = [
    {
      nombre: "María González",
      cargo: "CEO, TechStart Perú",
      comentario:
        "ISI Perú transformó completamente mi experiencia inmobiliaria. Vendí mi propiedad en solo 2 semanas y al 15% sobre el precio de mercado. Su tecnología y profesionalismo son incomparables.",
      calificacion: 5,
      imagen: "/api/placeholder/80/80",
      propiedad: "Casa en San Isidro",
      tiempo: "2 semanas",
    },
    {
      nombre: "Carlos Ruiz",
      cargo: "Inversionista Inmobiliario",
      comentario:
        "Como inversionista, necesito confianza y resultados. ISI Perú me ha ayudado a construir una cartera de $5M en solo 2 años. Su asesoría es invaluable.",
      calificacion: 5,
      imagen: "/api/placeholder/80/80",
      propiedad: "Portafolio de 8 propiedades",
      tiempo: "2 años",
    },
    {
      nombre: "Ana Torres",
      cargo: "Directora de Marketing",
      comentario:
        "La tecnología que usa ISI Perú es revolucionaria. Los tours virtuales y la presentación de mi propiedad fueron clave para vender en tiempo récord.",
      calificacion: 5,
      imagen: "/api/placeholder/80/80",
      propiedad: "Departamento en Miraflores",
      tiempo: "1 semana",
    },
  ];

  const ventajas = [
    {
      icono: Award,
      titulo: "Premio a la Excelencia",
      descripcion: "Reconocidos como la mejor inmobiliaria de Perú 2024",
    },
    {
      icono: Shield,
      titulo: "Garantía Total",
      descripcion: "100% de satisfacción garantizada o te devolvemos tu dinero",
    },
    {
      icono: TrendingUp,
      titulo: "Tecnología Avanzada",
      descripcion: "IA y machine learning para maximizar tu inversión",
    },
    {
      icono: Users,
      titulo: "Red Exclusiva",
      descripcion: "Acceso a compradores e inversionistas premium",
    },
  ];

  const estadisticasEmpresa = [
    { numero: "$2.5B+", label: "En Transacciones", icon: DollarSign },
    { numero: "15,000+", label: "Familias Felices", icon: Heart },
    { numero: "98.7%", label: "Satisfacción", icon: Star },
    { numero: "24/7", label: "Soporte", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section Premium */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              animation: "float 20s ease-in-out infinite",
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#20B266]/20 to-emerald-500/20 text-[#20B266] rounded-full text-sm font-semibold border border-[#20B266]/30 backdrop-blur-sm">
                  <Award className="w-5 h-5 mr-2" />
                  Líder del Mercado Inmobiliario 2024
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                  Encuentra tu{" "}
                  <span className="bg-gradient-to-r from-[#20B266] to-emerald-400 bg-clip-text text-transparent">
                    hogar de ensueño
                  </span>{" "}
                  en Perú
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  Más de una década transformando sueños en realidad. Tecnología
                  de vanguardia, asesoría de élite y resultados excepcionales.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/propiedades"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#20B266] to-emerald-500 hover:from-[#1a9a5a] hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#20B266]/25"
                >
                  Explorar Propiedades
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contacto"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white hover:text-slate-800 font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm hover:border-white"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver Video
                </Link>
              </div>

              {/* Premium Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {estadisticas.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#20B266] to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                      {stat.numero}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Search Form */}
            <div className="relative animate-slide-in">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Búsqueda Inteligente
                    </h3>
                    <p className="text-gray-300">
                      Encuentra tu propiedad ideal en segundos
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select className="w-full p-4 pl-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 backdrop-blur-sm focus:ring-2 focus:ring-[#20B266] focus:border-transparent transition-all">
                        <option value="">Tipo de Propiedad</option>
                        <option value="casa">Casa</option>
                        <option value="departamento">Departamento</option>
                        <option value="oficina">Oficina</option>
                        <option value="local">Local Comercial</option>
                      </select>
                    </div>

                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select className="w-full p-4 pl-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 backdrop-blur-sm focus:ring-2 focus:ring-[#20B266] focus:border-transparent transition-all">
                        <option value="">Ubicación</option>
                        <option value="san-isidro">San Isidro</option>
                        <option value="miraflores">Miraflores</option>
                        <option value="la-molina">La Molina</option>
                        <option value="barranco">Barranco</option>
                      </select>
                    </div>

                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select className="w-full p-4 pl-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 backdrop-blur-sm focus:ring-2 focus:ring-[#20B266] focus:border-transparent transition-all">
                        <option value="">Rango de Precio</option>
                        <option value="0-500000">Hasta $500,000</option>
                        <option value="500000-1000000">
                          $500,000 - $1,000,000
                        </option>
                        <option value="1000000-2000000">
                          $1,000,000 - $2,000,000
                        </option>
                        <option value="2000000+">Más de $2,000,000</option>
                      </select>
                    </div>

                    <button className="w-full p-4 bg-gradient-to-r from-[#20B266] to-emerald-500 hover:from-[#1a9a5a] hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <Search className="w-5 h-5 inline mr-2" />
                      Buscar Propiedades
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#20B266]/10 to-emerald-500/10 text-[#20B266] rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Servicios Premium
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Experiencia Inmobiliaria de Élite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Combinamos tecnología de vanguardia con asesoría personalizada
              para ofrecerte la experiencia inmobiliaria más avanzada del
              mercado.
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
                        <CheckCircle className="w-4 h-4 text-[#20B266] mr-2 flex-shrink-0" />
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

      {/* Premium Properties Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#20B266]/10 to-emerald-500/10 text-[#20B266] rounded-full text-sm font-semibold mb-4">
                <Star className="w-4 h-4 mr-2" />
                Propiedades Destacadas
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Oportunidades Exclusivas
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Descubre las propiedades más codiciadas del mercado con acceso
                VIP
              </p>
            </div>
            <Link
              href="/propiedades"
              className="group inline-flex items-center text-[#20B266] hover:text-emerald-600 font-semibold transition-colors"
            >
              Ver todas las propiedades
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propiedadesDestacadas.map((propiedad) => (
              <div
                key={propiedad.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  {propiedad.destacado && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                        ¡Destacado!
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        propiedad.tipo === "Venta"
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                          : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                      }`}
                    >
                      {propiedad.tipo}
                    </span>
                  </div>

                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <Building2 className="w-20 h-20 text-gray-500" />
                  </div>

                  {/* Property Stats */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-white">
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {propiedad.vistas} vistas
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {propiedad.tiempoEnMercado}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#20B266] transition-colors">
                    {propiedad.titulo}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    {propiedad.ubicacion}
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="text-2xl font-bold text-[#20B266]">
                      {propiedad.precio}
                    </div>
                    {propiedad.precioAnterior && (
                      <div className="ml-2 text-sm text-gray-500 line-through">
                        {propiedad.precioAnterior}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {propiedad.caracteristicas.map((caracteristica, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {caracteristica}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {propiedad.amenities.map((Amenity, idx) => (
                        <Amenity key={idx} className="w-5 h-5 text-gray-400" />
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-[#20B266] transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-[#20B266] transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Advantages Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#20B266]/20 to-emerald-500/20 text-[#20B266] rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4 mr-2" />
                ¿Por qué elegir ISI Perú?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                La Excelencia es Nuestro Estándar
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Somos tu socio estratégico en bienes raíces, comprometidos con
                tu éxito inmobiliario y con resultados que superan las
                expectativas.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {ventajas.map((ventaja, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#20B266] to-emerald-500 rounded-xl flex items-center justify-center">
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

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">
                Información de Contacto VIP
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#20B266] to-emerald-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Línea Directa</p>
                    <p className="font-semibold">+51 999 123 456</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#20B266] to-emerald-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email VIP</p>
                    <p className="font-semibold">vip@isiperu.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#20B266] to-emerald-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Oficina Principal</p>
                    <p className="font-semibold">San Isidro, Lima</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#20B266] to-emerald-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Horario VIP</p>
                    <p className="font-semibold">24/7 Disponible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#20B266]/10 to-emerald-500/10 text-[#20B266] rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Testimonios VIP
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Lo que dicen nuestros clientes de élite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Miles de familias y empresarios confían en nosotros para sus
              proyectos inmobiliarios más importantes
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
                      <Building2 className="w-4 h-4 inline mr-1" />
                      {testimonio.propiedad}
                    </span>
                    <span className="text-[#20B266] font-semibold">
                      {testimonio.tiempo}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Números que Hablan por Sí Solos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Más de una década de excelencia y resultados excepcionales
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estadisticasEmpresa.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#20B266] to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#20B266] to-emerald-400 bg-clip-text text-transparent mb-2">
                  {stat.numero}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#20B266] to-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para tu Próxima Inversión?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Únete a miles de familias e inversionistas que ya han transformado
            sus sueños en realidad con ISI Perú
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/propiedades"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#20B266] hover:bg-gray-100 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explorar Propiedades Premium
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#20B266] font-semibold rounded-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hablar con un Asesor VIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
