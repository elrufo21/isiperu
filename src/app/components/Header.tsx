"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-white shadow-lg"
      }`}
    >
      {/* Top Bar - Información de contacto */}
      <div
        className={`bg-[#231F20] text-white py-2 hidden lg:block transition-all duration-300 ${
          isScrolled
            ? "max-h-0 overflow-hidden opacity-0"
            : "max-h-8 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+51 999 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@isiperu.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Lima, Perú</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs">Síguenos:</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-amber-300 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-amber-300 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L6.391 14.39c.687.687 1.625 1.111 2.663 1.111 2.069 0 3.748-1.679 3.748-3.748S11.123 7.005 9.054 7.005 5.306 8.684 5.306 10.753c0 1.038.424 1.976 1.111 2.663L5.152 14.69c-.807-.88-1.297-2.031-1.297-3.328 0-2.69 2.183-4.873 4.873-4.873s4.873 2.183 4.873 4.873-2.183 4.873-4.873 4.873z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`container mx-auto px-4 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div
                className={`relative flex items-center justify-center transition-all duration-300 ${
                  isScrolled ? "w-[40px] h-[40px]" : "w-[48px] h-[48px]"
                }`}
              >
                <Image
                  src="/logo.png"
                  alt="ISI Perú"
                  width={20}
                  height={20}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1
                  className={`font-bold text-gray-800 transition-all duration-300 ${
                    isScrolled ? "text-xl" : "text-2xl"
                  }`}
                >
                  ISI Perú
                </h1>
                <p
                  className={`text-gray-600 -mt-1 transition-all duration-300 ${
                    isScrolled ? "text-xs" : "text-sm"
                  }`}
                >
                  Integracion Social Inmobiliaria
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#20B266] font-medium transition-colors duration-200 relative group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#20B266] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/propiedades"
              className="text-gray-700 hover:text-[#20B266] font-medium transition-colors duration-200 relative group"
            >
              Propiedades
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#20B266] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/servicios"
              className="text-gray-700 hover:text-[#20B266] font-medium transition-colors duration-200 relative group"
            >
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#20B266] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/nosotros"
              className="text-gray-700 hover:text-[#20B266] font-medium transition-colors duration-200 relative group"
            >
              Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#20B266] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contacto"
              className="bg-[#20B266] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#20B266] hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="pt-4 pb-2 border-t border-gray-100 mt-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-gray-700 hover:text-[#20B266] font-medium py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Inicio
              </Link>
              <Link
                href="/propiedades"
                onClick={closeMenu}
                className="text-gray-700 hover:text-[#20B266] font-medium py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Propiedades
              </Link>
              <Link
                href="/servicios"
                onClick={closeMenu}
                className="text-gray-700 hover:text-[#20B266] font-medium py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Servicios
              </Link>
              <Link
                href="/nosotros"
                onClick={closeMenu}
                className="text-gray-700 hover:text-[#20B266] font-medium py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                onClick={closeMenu}
                className="bg-[#20B266] text-white font-medium py-2 px-3 rounded-md hover:bg-green-600 transition-colors duration-200 text-center"
              >
                Contacto
              </Link>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex flex-col space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+51 999 123 456</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>info@isiperu.com</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
