"use client";
import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import { HeroAnimatedCounter } from "@/components/ui/HeroAnimatedCounter";
import ContactModal from "./ContactModal";

interface Stat {
  numero: number;
  label: string;
}

interface ImageItem {
  src: string;
  alt: string;
}

interface HeroButton {
  type: "link" | "button";
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: string;
  buttons?: HeroButton[];
  stats?: Stat[];
  images?: ImageItem[];
  carouselInterval?: number;
  className?: string;
  background?: string;
  overlay?: boolean;
  textGradient?: boolean;
  reverse?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  buttons = [],
  images = [],
  carouselInterval = 5000,
  className = "",
  background = "bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]",
  overlay = true,
  textGradient = false,
  reverse = false,
}: HeroSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className={`relative min-h-[500px] overflow-hidden ${background} ${className}`}
    >
      {/* Overlay */}
      {overlay && <div className="absolute inset-0 bg-black/50 z-10" />}
      <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-legal-pattern-with-scales-of-justice-OVrDzq3nKkOncpQyU9RoMhnEqp10Hx.png')] opacity-5 pointer-events-none"></div>

      <div className="relative z-20 container mx-auto px-4 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <div
            className={`space-y-6 lg:space-y-8 ${
              reverse ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <h1
              className={`font-montserrat font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight ${
                textGradient
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300"
                  : "text-white"
              }`}
            >
              {title}
            </h1>

            {subtitle && (
              <h2 className="text-xl md:text-3xl text-emerald-400 font-semibold">
                {subtitle}
              </h2>
            )}

            {description && (
              <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
                {description}
              </p>
            )}

            {/* Botones */}
            {buttons.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
                {buttons.map((btn, idx) =>
                  btn.type === "button" ? (
                    <button
                      key={idx}
                      onClick={
                        btn.text === "Agenda tu consulta"
                          ? () => setIsModalOpen(true) // 👈 abre el modal
                          : btn.onClick
                      }
                      className={`flex items-center justify-center px-6 py-3 md:px-8 md:py-4 font-semibold rounded-xl transition-transform duration-300 transform hover:scale-105 shadow-lg ${
                        btn.variant === "primary"
                          ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600"
                          : btn.variant === "secondary"
                          ? "border-2 border-white/30 text-white hover:bg-white hover:text-slate-800 backdrop-blur-sm"
                          : "text-white hover:text-emerald-400"
                      }`}
                    >
                      {btn.icon && <span className="mr-2">{btn.icon}</span>}
                      {btn.text}
                    </button>
                  ) : (
                    <a
                      key={idx}
                      href={btn.href}
                      className={`flex items-center justify-center px-6 py-3 md:px-8 md:py-4 font-semibold rounded-xl transition-transform duration-300 transform hover:scale-105 shadow-lg ${
                        btn.variant === "primary"
                          ? "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600"
                          : btn.variant === "secondary"
                          ? "border-2 border-white/30 text-white hover:bg-white hover:text-slate-800 backdrop-blur-sm"
                          : "text-white hover:text-emerald-400"
                      }`}
                    >
                      {btn.icon && <span className="mr-2">{btn.icon}</span>}
                      {btn.text}
                    </a>
                  )
                )}
              </div>
            )}
          </div>

          {/* Carrusel */}
          {images.length > 0 && (
            <div
              className={`relative w-full hidden sm:block h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl ${
                reverse ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <ImageCarousel images={images} interval={carouselInterval} />
            </div>
          )}
        </div>
      </div>

      {/* Modal de contacto */}
      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default HeroSection;
