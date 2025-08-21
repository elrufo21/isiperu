import React from "react";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";

interface HeroAnimatedCounterProps {
  end: number | string;
  label: string;
  duration?: number;
  delay?: number;
}

export const HeroAnimatedCounter: React.FC<HeroAnimatedCounterProps> = ({
  end,
  label,
  duration = 2000,
  delay = 0,
}) => {
  // Si el valor termina con '+', extraemos el número para la animación
  const isPlus = typeof end === "string" && end.includes("+");
  const numericEnd =
    typeof end === "string" ? parseInt(end.replace("+", "")) : end;

  const { count, elementRef } = useAnimatedCounter({
    end: numericEnd,
    duration,
    delay,
    start: 0,
  });

  // Formateamos el valor final para mostrar
  const displayValue = isPlus ? `${count}+` : count;

  return (
    <div ref={elementRef} className="text-center group">
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
        {displayValue}
      </div>
      <div className="text-sm text-slate-400 font-medium">{label}</div>
    </div>
  );
};
