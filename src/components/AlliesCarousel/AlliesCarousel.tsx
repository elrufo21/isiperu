"use client";
import React, { memo } from "react";
import Image from "next/image";
import { Handshake } from "lucide-react";
import styles from "./AlliesCarousel.module.css";

const aliados = [
  {
    nombre: "Notarías",
    descripcion: "Red de notarías especializadas",
    imagen: null,
  },
  {
    nombre: "Municipalidades",
    descripcion: "Convenios municipales activos",
    imagen: "/MusiPangoa.webp",
  },
  {
    nombre: "SUNARP",
    descripcion: "Gestión registral eficiente",
    imagen: "/Sunarplogo.webp",
  },
  {
    nombre: "Empresas",
    descripcion: "Alianzas estratégicas corporativas",
    imagen: null,
  },
  {
    nombre: "Gobierno",
    descripcion: "Relaciones institucionales",
    imagen: "/logoMaza.webp",
  },
];

// Componente para aliados con solo texto
const AliadoTexto = memo(
  ({ aliado }: { aliado: { nombre: string; descripcion: string } }) => (
    <div className="inline-flex items-center gap-3 text-slate-700 mx-6 flex-shrink-0">
      <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center">
        <Handshake className="w-5 h-5 text-emerald-600" />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold text-slate-800">
          {aliado.nombre}
        </div>
        <div className="text-xs text-slate-500">{aliado.descripcion}</div>
      </div>
    </div>
  )
);

// Componente para aliados con solo imagen
const AliadoImagen = memo(
  ({ aliado }: { aliado: { nombre: string; imagen: string } }) => (
    <div className="inline-flex items-center justify-center mx-4 flex-shrink-0">
      <div className="relative w-20 h-20 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-110  overflow-hidden">
        <Image
          src={aliado.imagen}
          alt={aliado.nombre}
          fill
          className="object-contain p-3"
          sizes="150px"
        />
      </div>
    </div>
  )
);

AliadoTexto.displayName = "AliadoTexto";
AliadoImagen.displayName = "AliadoImagen";

const AlliesCarousel = memo(() => {
  // Creamos solo 3 copias para optimizar el DOM
  const duplicatedAliados = [...aliados, ...aliados, ...aliados];

  return (
    <div className="relative overflow-hidden">
      {/* Gradientes para fade effect en los bordes */}
      <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Contenedor del ticker con animación CSS optimizada */}
      <div className={`flex ${styles["animate-scroll-aliados-optimized"]}`}>
        {duplicatedAliados.map((aliado, index) => (
          <div key={`${aliado.nombre}-${index}`}>
            {aliado.imagen ? (
              <AliadoImagen aliado={aliado} />
            ) : (
              <AliadoTexto aliado={aliado} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

AlliesCarousel.displayName = "AlliesCarousel";

export default AlliesCarousel;
