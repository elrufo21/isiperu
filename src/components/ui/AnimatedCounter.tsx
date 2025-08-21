import React from "react";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";

interface AnimatedCounterProps {
  end: number | string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  duration?: number;
  delay?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  label,
  icon: Icon,
  duration = 2000,
  delay = 0,
  className = "",
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
    <div ref={elementRef} className={`text-center group ${className}`}>
      <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-slate-700 mb-2">
        {displayValue}
      </div>
      <div className="text-slate-700 font-medium">{label}</div>
    </div>
  );
};
