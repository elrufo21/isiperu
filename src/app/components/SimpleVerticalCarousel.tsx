"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SimpleVerticalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/Vertical1.webp", alt: "Imagen Vertical 1" },
    { src: "/Vertical2.webp", alt: "Imagen Vertical 2" },
    { src: "/Vertical3.webp", alt: "Imagen Vertical 3" },
    { src: "/Vertical4.webp", alt: "Imagen Vertical 4" },
    { src: "/Vertical5.webp", alt: "Imagen Vertical 5" },
    { src: "/Vertical6.webp", alt: "Imagen Vertical 6" },
    { src: "/Vertical7.webp", alt: "Imagen Vertical 7" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-[400px] h-[600px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl mx-auto">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Indicadores de posición */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/40 scale-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
