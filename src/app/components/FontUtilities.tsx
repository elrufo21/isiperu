import React from "react";

interface FontUtilitiesProps {
  children?: React.ReactNode;
}

// Componente para mostrar ejemplos de uso de las fuentes Montserrat
export const FontUtilities: React.FC<FontUtilitiesProps> = ({ children }) => {
  return (
    <div className="font-utilities-demo">
      {/* Ejemplo de Montserrat HEAVY - Para logotipo y texto con mayor importancia */}
      <h1 className="font-montserrat font-heavy text-4xl text-primary mb-4">
        Título Principal con Montserrat HEAVY
      </h1>

      {/* Ejemplo de Montserrat REGULAR - Para texto con menor importancia */}
      <p className="font-montserrat font-regular text-lg text-foreground mb-6">
        Este es un ejemplo de texto usando Montserrat REGULAR para contenido
        secundario. Perfecto para descripciones, párrafos y texto con menor
        importancia visual.
      </p>

      {/* Ejemplo de jerarquía de fuentes */}
      <div className="font-hierarchy-demo">
        <h2 className="font-montserrat font-heavy text-2xl text-primary mb-3">
          Subtítulo con Montserrat HEAVY
        </h2>
        <p className="font-montserrat font-regular text-base text-secondary">
          Texto secundario con Montserrat REGULAR para mantener la jerarquía
          visual.
        </p>
      </div>

      {children}
    </div>
  );
};

// Clases CSS personalizadas para usar en cualquier componente
export const fontClasses = {
  // Montserrat HEAVY - Para logotipo y texto con mayor importancia
  heavy: "font-montserrat font-heavy",

  // Montserrat REGULAR - Para texto con menor importancia
  regular: "font-montserrat font-regular",

  // Combinaciones comunes
  title: "font-montserrat font-heavy text-2xl text-primary",
  subtitle: "font-montserrat font-heavy text-xl text-foreground",
  body: "font-montserrat font-regular text-base text-foreground",
  caption: "font-montserrat font-regular text-sm text-secondary",
};

export default FontUtilities;
