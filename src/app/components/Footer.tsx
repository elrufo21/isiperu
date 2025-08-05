import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-[#20B266] p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">ISI Perú</h3>
                <p className="text-sm text-gray-400">Inmobiliaria</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tu socio confiable en bienes raíces. Más de 10 años ayudando a
              familias a encontrar su hogar ideal y a inversionistas a hacer
              crecer su patrimonio.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#20B266] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#20B266] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#20B266] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#20B266] transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Enlaces Rápidos
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Inicio
              </Link>
              <Link
                href="/propiedades"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Propiedades
              </Link>
              <Link
                href="/propiedades?tipo=venta"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Propiedades en Venta
              </Link>
              <Link
                href="/propiedades?tipo=alquiler"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Propiedades en Alquiler
              </Link>
              <Link
                href="/servicios"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Servicios
              </Link>
              <Link
                href="/nosotros"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Nosotros
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Servicios</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/servicios/venta"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Venta de Propiedades
              </Link>
              <Link
                href="/servicios/alquiler"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Alquiler de Propiedades
              </Link>
              <Link
                href="/servicios/asesoria"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Asesoría Inmobiliaria
              </Link>
              <Link
                href="/servicios/valuacion"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Valuación de Propiedades
              </Link>
              <Link
                href="/servicios/inversion"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Asesoría en Inversiones
              </Link>
              <Link
                href="/servicios/administracion"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Administración de Propiedades
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-[#20B266] mt-0.5 flex-shrink-0"
                />
                <div className="text-sm text-gray-400">
                  <p>Av. Javier Prado Este 1234</p>
                  <p>San Isidro, Lima 15036</p>
                  <p>Perú</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#20B266] flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>+51 999 123 456</p>
                  <p>+51 1 234 5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#20B266] flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>info@isiperu.com</p>
                  <p>ventas@isiperu.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock
                  size={18}
                  className="text-[#20B266] mt-0.5 flex-shrink-0"
                />
                <div className="text-sm text-gray-400">
                  <p>Lun - Vie: 9:00 AM - 7:00 PM</p>
                  <p>Sáb: 9:00 AM - 5:00 PM</p>
                  <p>Dom: Cita previa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h5 className="text-lg font-semibold text-white mb-2">
                Mantente Informado
              </h5>
              <p className="text-gray-400 text-sm">
                Recibe las mejores oportunidades inmobiliarias directamente en
                tu email
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#20B266] focus:bg-gray-600"
              />
              <button className="bg-[#20B266] text-white px-6 py-2 rounded-r-lg hover:bg-green-600 transition-colors duration-200 font-medium">
                Suscribir
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} ISI Perú Inmobiliaria. Todos los
              derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacidad"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200"
              >
                Términos de Uso
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
