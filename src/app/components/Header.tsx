"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationConfig } from "../../data/navigation";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";
import { NavigationItem } from "../../types/menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const navItems: NavigationItem[] = navigationConfig;

  const isActivePath = (test: (p: string) => boolean) => test(pathname ?? "");
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
                <span className="font-montserrat font-regular">900460040</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="font-montserrat font-regular">
                  isiperu25@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="font-montserrat font-regular">
                  Pangoa y Mazamari, Junín
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs font-montserrat font-regular">
                Síguenos:
              </span>
              <div className="flex space-x-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61576922543152"
                  target="_blank"
                  className="hover:text-amber-300 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
                className={`ml-10 relative flex items-center justify-center transition-all duration-300 ${
                  isScrolled ? "w-[40px] h-[40px]" : "w-[48px] h-[48px]"
                }`}
              >
                <Image
                  src="/logo.svg"
                  alt="ISI Perú"
                  width={100}
                  height={100}
                  style={{ width: "100%", height: "100%" }}
                  className={`object-contain w-full h-full transform transition-transform duration-300 ${
                    isScrolled ? "scale-150" : "scale-200"
                  }`}
                />
                {/** <Image
                  src="/logo.png"
                  alt="ISI Perú"
                  width={20}
                  height={20}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1
                  className={`font-montserrat font-heavy text-gray-800 transition-all duration-300 ${
                    isScrolled ? "text-xl" : "text-2xl"
                  }`}
                >
                  ISI Perú
                </h1>
                <p
                  className={`font-montserrat font-regular text-gray-600 -mt-1 transition-all duration-300 ${
                    isScrolled ? "text-xs" : "text-sm"
                  }`}
                >
                  Integración Social Inmobiliaria
                </p> */}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = isActivePath(item.match);

              if (item.hasSubmenu) {
                return (
                  <DropdownMenu
                    key={item.href}
                    item={item}
                    isActive={active}
                    onClose={() => {}}
                  />
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-montserrat font-regular text-gray-700 transition-colors duration-200 relative group ${
                    active ? "text-[#20B266]" : "hover:text-[#20B266]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#20B266] transition-all duration-200 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
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
        <MobileMenu
          navItems={navItems}
          isOpen={isMenuOpen}
          onClose={closeMenu}
          isActivePath={isActivePath}
        />
      </div>
    </header>
  );
};

export default Header;
