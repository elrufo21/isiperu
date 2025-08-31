"use client";
import { useState, useEffect } from "react";

// Frases dinámicas para el hero
const heroFrases = [
  "Tu tranquilidad legal y tu inversión, en las mejores manos.",
  "Protegemos tus Derechos. Potenciamos tus Inversiones",
  "Todo lo que Necesitás, en un Solo Lugar: Legal e Inmobiliario",
  "Tu Defensa, Nuestra Prioridad",
  "Asesoramiento Legal Claro, Cercano y Confiable",
  "Resolvemos tus Problemas Legales, Cuidamos tu Paz",
  "Te Acompañamos en Cada Paso Legal",
  "Trámites, Contratos y Defensa: Todo con Profesionales",
  "Soluciones Inmobiliarias con Apoyo Legal Real",
  "Donde tu tranquilidad legal y tus inversiones inmobiliarias se hacen realidad.",
  "Asesoría legal e inmobiliaria en un solo lugar. Eficiencia, confianza y resultados.",
  "Resolvemos lo legal. Gestionamos lo inmobiliario. Te acompañamos siempre",
  "Defendemos tus derechos con compromiso y transparencia.",
  "Tu consulta legal, nuestra responsabilidad profesional.",
  "Soluciones jurídicas claras, rápidas y personalizadas.",
  "Atención cercana, ética profesional y compromiso real con cada cliente.",
  "Tu tranquilidad es nuestra prioridad.",
];
const DynamicHeroText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroFrases.length);
        setIsVisible(true);
      }, 300); // Tiempo para fade out
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-montserrat font-heavy text-5xl md:text-7xl leading-tight text-white min-h-[200px] md:min-h-[280px] flex items-center">
      <span className="relative">
        Integración Social{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
          Inmobiliaria
        </span>{" "}
        Perú
        <span
          className={`block mt-4 text-2xl md:text-3xl font-medium transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {heroFrases[currentIndex]}
        </span>
      </span>
    </h1>
  );
};

export default DynamicHeroText;
