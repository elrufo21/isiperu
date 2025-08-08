import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
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
              Integración Social Inmobiliaria (ISI) Perú integra a personas
              naturales y jurídicas en el sector inmobiliario. Más de 14 años
              liderando habilitaciones urbanas en la Selva Central.
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
            <h4 className="text-lg font-semibold text-white">
              Áreas de Trabajo
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#areas/ventas"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Ventas y Servicios
              </Link>
              <Link
                href="#areas/consolidacion"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Consolidación Empresarial
              </Link>
              <Link
                href="#areas/marketing"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Marketing
              </Link>
              <Link
                href="#areas/asesoria-legal"
                className="text-gray-400 hover:text-[#20B266] transition-colors duration-200 text-sm"
              >
                Asesoría Legal y Saneamiento de Predios
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
                  <p>Calle 3 de Noviembre s/n - Pangoa</p>
                  <p>Av. Victor Andrés Bélaunde 420 - Mazamari</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#20B266] flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>900460040</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#20B266] flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>isiperu25@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Facebook
                  size={18}
                  className="text-[#20B266] mt-0.5 flex-shrink-0"
                />
                <div className="text-sm text-gray-400">
                  <p>Redes Sociales: ISI PERU</p>
                </div>
              </div>
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
