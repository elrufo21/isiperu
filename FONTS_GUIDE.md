# Guía de Fuentes Montserrat - ISIPERU

## Descripción

Este proyecto utiliza la fuente **Montserrat** de Google Fonts con dos pesos específicos para mantener la jerarquía visual:

- **Montserrat HEAVY (900)**: Para logotipo y texto con mayor importancia
- **Montserrat REGULAR (400)**: Para texto con menor importancia

## Configuración Implementada

### 1. Importación de Fuentes

Las fuentes se importan automáticamente desde Google Fonts en `src/app/layout.tsx`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap"
  rel="stylesheet"
/>
```

### 2. Variables CSS

En `src/app/globals.css` se definen las variables:

```css
:root {
  --font-montserrat-heavy: "Montserrat", sans-serif;
  --font-montserrat-regular: "Montserrat", sans-serif;
}
```

### 3. Configuración de Tailwind CSS

En `tailwind.config.ts` se extienden las opciones:

```typescript
fontFamily: {
  'montserrat': ['Montserrat', 'sans-serif'],
  'montserrat-heavy': ['Montserrat', 'sans-serif'],
  'montserrat-regular': ['Montserrat', 'sans-serif'],
},
fontWeight: {
  'heavy': '900',
  'regular': '400',
}
```

## Uso en Componentes

### Clases CSS Directas

```css
/* Montserrat HEAVY - Para logotipo y texto importante */
.font-montserrat-heavy {
  font-family: var(--font-montserrat-heavy);
  font-weight: 900;
}

/* Montserrat REGULAR - Para texto secundario */
.font-montserrat-regular {
  font-family: var(--font-montserrat-regular);
  font-weight: 400;
}
```

### Clases de Tailwind CSS

```jsx
// Títulos principales con Montserrat HEAVY
<h1 className="font-montserrat font-heavy text-4xl text-primary">
  Título Principal
</h1>

// Texto del cuerpo con Montserrat REGULAR
<p className="font-montserrat font-regular text-base text-foreground">
  Contenido del párrafo
</p>

// Subtítulos con Montserrat HEAVY
<h2 className="font-montserrat font-heavy text-2xl text-foreground">
  Subtítulo
</h2>
```

### Clases Predefinidas

Utiliza las clases predefinidas del componente `FontUtilities`:

```jsx
import { fontClasses } from './components/FontUtilities';

// Aplicar clases predefinidas
<h1 className={fontClasses.title}>Título</h1>
<p className={fontClasses.body}>Texto del cuerpo</p>
<h2 className={fontClasses.subtitle}>Subtítulo</h2>
<span className={fontClasses.caption}>Texto pequeño</span>
```

## Aplicación Automática

### Elementos que usan Montserrat HEAVY automáticamente:

- `h1`, `h2`, `h3` (títulos)
- `.logo`, `.brand` (logotipos)
- `.hero-title` (títulos principales)

### Elementos que usan Montserrat REGULAR automáticamente:

- `p` (párrafos)
- `.body-text` (texto del cuerpo)
- `.description` (descripciones)
- `.secondary-text` (texto secundario)

## Ejemplos de Implementación

### Header/Logotipo

```jsx
<header className="bg-white shadow-sm">
  <div className="container mx-auto px-4 py-4">
    <h1 className="font-montserrat font-heavy text-2xl text-primary">
      ISIPERU
    </h1>
  </div>
</header>
```

### Títulos de Sección

```jsx
<section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="font-montserrat font-heavy text-3xl text-center text-primary mb-8">
      Nuestras Propiedades
    </h2>
    <p className="font-montserrat font-regular text-lg text-center text-secondary max-w-2xl mx-auto">
      Descubre las mejores opciones inmobiliarias en Lima, Perú
    </p>
  </div>
</section>
```

### Tarjetas de Propiedades

```jsx
<div className="bg-white rounded-lg shadow-md p-6">
  <h3 className="font-montserrat font-heavy text-xl text-primary mb-3">
    Casa en San Isidro
  </h3>
  <p className="font-montserrat font-regular text-base text-foreground mb-4">
    Hermosa casa familiar con acabados de lujo en una de las mejores zonas de
    Lima.
  </p>
  <span className="font-montserrat font-regular text-sm text-secondary">
    Precio: $450,000
  </span>
</div>
```

## Mejores Prácticas

1. **Consistencia**: Usa siempre Montserrat HEAVY para elementos importantes y Montserrat REGULAR para texto secundario
2. **Jerarquía**: Mantén la jerarquía visual clara entre títulos y contenido
3. **Legibilidad**: Asegúrate de que el contraste sea suficiente para una buena legibilidad
4. **Responsive**: Las fuentes se adaptan automáticamente a diferentes tamaños de pantalla

## Personalización

Si necesitas ajustar los pesos o agregar más variantes:

1. Modifica la importación en `layout.tsx`
2. Actualiza las variables CSS en `globals.css`
3. Ajusta la configuración de Tailwind en `tailwind.config.ts`

## Soporte de Navegadores

Las fuentes Montserrat de Google Fonts tienen excelente soporte en todos los navegadores modernos y se cargan de manera optimizada con `font-display: swap`.
