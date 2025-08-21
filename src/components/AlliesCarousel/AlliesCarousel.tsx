"use client";
import React, { memo } from "react";
import { Handshake } from "lucide-react";
import styles from "./AlliesCarousel.module.css";

const aliados = [
  { nombre: "Notarías", descripcion: "Red de notarías especializadas" },
  { nombre: "Municipalidades", descripcion: "Convenios municipales activos" },
  { nombre: "SUNARP", descripcion: "Gestión registral eficiente" },
  { nombre: "Empresas", descripcion: "Alianzas estratégicas corporativas" },
];

// Memoizamos el componente para evitar re-renders innecesarios
const AliadoItem = memo(
  ({ aliado }: { aliado: { nombre: string; descripcion: string } }) => (
    <div className="inline-flex items-center gap-3 text-slate-700 mx-4 flex-shrink-0">
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

AliadoItem.displayName = "AliadoItem";

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
          <AliadoItem key={`${aliado.nombre}-${index}`} aliado={aliado} />
        ))}
      </div>
    </div>
  );
});

AlliesCarousel.displayName = "AlliesCarousel";

export default AlliesCarousel;
