# Ejemplos de Configuración de Menú Multi-Opciones

## 1. Menú Simple (Sin Submenú)

```typescript
{
  href: "/contacto",
  label: "Contacto",
  match: (p: string) => p.startsWith("/contacto"),
  hasSubmenu: false
}
```

## 2. Menú de Una Columna

```typescript
{
  href: "/nosotros",
  label: "Nosotros",
  match: (p: string) => p.startsWith("/nosotros"),
  hasSubmenu: true,
  columns: 1,
  submenu: [
    {
      columns: [
        {
          items: [
            { href: "/nosotros/historia", label: "Historia", description: "Nuestra trayectoria" },
            { href: "/nosotros/mision", label: "Misión y Visión", description: "Nuestros objetivos" },
            { href: "/nosotros/equipo", label: "Equipo", description: "Profesionales expertos" }
          ]
        }
      ]
    }
  ]
}
```

## 3. Menú de Dos Columnas

```typescript
{
  href: "/servicios",
  label: "Servicios",
  match: (p: string) => p.startsWith("/servicios"),
  hasSubmenu: true,
  columns: 2,
  submenu: [
    {
      columns: [
        {
          items: [
            { href: "/servicios/venta", label: "Venta", description: "Compra y venta" },
            { href: "/servicios/alquiler", label: "Alquiler", description: "Arrendamiento" }
          ]
        },
        {
          items: [
            { href: "/servicios/tasacion", label: "Tasación", description: "Valoración" },
            { href: "/servicios/legal", label: "Trámites Legales", description: "Asesoría jurídica" }
          ]
        }
      ]
    }
  ]
}
```

## 4. Menú de Tres o Más Columnas

```typescript
{
  href: "/propiedades",
  label: "Propiedades",
  match: (p: string) => p.startsWith("/propiedades"),
  hasSubmenu: true,
  columns: 3,
  submenu: [
    {
      columns: [
        {
          items: [
            { href: "/propiedades/casas", label: "Casas", description: "Casas unifamiliares" },
            { href: "/propiedades/departamentos", label: "Departamentos", description: "Apartamentos" }
          ]
        },
        {
          items: [
            { href: "/propiedades/locales", label: "Locales", description: "Espacios comerciales" },
            { href: "/propiedades/oficinas", label: "Oficinas", description: "Espacios de trabajo" }
          ]
        },
        {
          items: [
            { href: "/propiedades/terrenos-agricolas", label: "Terrenos Agrícolas", description: "Para cultivo" },
            { href: "/propiedades/proyectos", label: "Proyectos", description: "Desarrollos inmobiliarios" }
          ]
        }
      ]
    }
  ]
}
```

## 5. Menú con Enlaces Externos

```typescript
{
  href: "/recursos",
  label: "Recursos",
  match: (p: string) => p.startsWith("/recursos"),
  hasSubmenu: true,
  columns: 2,
  submenu: [
    {
      columns: [
        {
          items: [
            { href: "/recursos/guia-compra", label: "Guía de Compra", description: "Pasos para comprar" },
            { href: "https://www.sunarp.gob.pe", label: "SUNARP", description: "Registro de Propiedades", external: true }
          ]
        },
        {
          items: [
            { href: "/recursos/calculadora", label: "Calculadora", description: "Calcular cuotas" },
            { href: "https://www.inei.gob.pe", label: "INEI", description: "Estadísticas", external: true }
          ]
        }
      ]
    }
  ]
}
```

## Características del Sistema

- **Responsive**: Se adapta automáticamente a dispositivos móviles
- **Flexible**: Soporta desde 1 hasta 4 columnas
- **Accesible**: Incluye navegación por teclado y lectores de pantalla
- **Personalizable**: Cada elemento puede tener título, descripción e iconos
- **Enlaces externos**: Soporta enlaces que se abren en nueva pestaña
- **Animaciones suaves**: Transiciones y efectos visuales elegantes
- **Tema consistente**: Mantiene el diseño visual de ISI Perú
