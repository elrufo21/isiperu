# Sistema de Menú Multi-Opciones para ISI Perú

## Descripción

Este sistema implementa un menú de navegación flexible que permite crear diferentes tipos de menús desplegables:

- **Menús simples**: Sin submenús (como "Inicio" y "Contacto")
- **Menús de una columna**: Para organizar información relacionada
- **Menús de múltiples columnas**: Para categorías complejas (2, 3, 4 columnas)
- **Menús responsivos**: Se adaptan automáticamente a dispositivos móviles

## Archivos del Sistema

### 1. Tipos (`src/types/menu.ts`)

Define las interfaces TypeScript para la estructura del menú:

- `MenuItem`: Elemento individual del menú
- `MenuColumn`: Columna con elementos
- `MenuSection`: Sección del menú con columnas
- `NavigationItem`: Elemento de navegación principal
- `MenuLayout`: Tipos de layout disponibles

### 2. Configuración (`src/data/navigation.ts`)

Archivo principal donde se define la estructura del menú. Cada elemento puede configurarse con:

- `hasSubmenu`: Boolean para activar/desactivar submenús
- `columns`: Número de columnas (1, 2, 3, 4)
- `submenu`: Array de secciones con columnas y elementos

### 3. Componentes

- **`DropdownMenu.tsx`**: Menú desplegable para escritorio
- **`MobileMenu.tsx`**: Menú móvil con navegación expandible
- **`Header.tsx`**: Header principal que integra todo el sistema

## Cómo Usar

### 1. Configurar un Menú Simple

```typescript
{
  href: "/contacto",
  label: "Contacto",
  match: (p: string) => p.startsWith("/contacto"),
  hasSubmenu: false
}
```

### 2. Configurar un Menú con Submenú

```typescript
{
  href: "/propiedades",
  label: "Propiedades",
  match: (p: string) => p.startsWith("/propiedades"),
  hasSubmenu: true,
  columns: 3, // 1, 2, 3, o 4 columnas
  submenu: [
    {
      columns: [
        {
          items: [
            { href: "/propiedades/casas", label: "Casas", description: "Casas unifamiliares" },
            { href: "/propiedades/departamentos", label: "Departamentos", description: "Apartamentos" }
          ]
        }
        // ... más columnas
      ]
    }
  ]
}
```

### 3. Agregar Enlaces Externos

```typescript
{
  href: "https://www.ejemplo.com",
  label: "Enlace Externo",
  description: "Descripción del enlace",
  external: true
}
```

## Personalización

### Colores y Estilos

Los colores y estilos se mantienen consistentes con el tema de ISI Perú:

- Color principal: `#20B266` (verde)
- Color de fondo: `white` con transparencia
- Sombras y bordes sutiles
- Transiciones suaves de 200ms

### Responsive Design

- **Escritorio**: Menús desplegables con hover
- **Móvil**: Menús expandibles con botones
- **Breakpoint**: `lg:` (1024px)

### Centrado Automático

- **1 columna**: Se alinea a la izquierda del botón
- **2+ columnas**: Se centra automáticamente con respecto al botón padre
- **Padding**: Se agrega espacio lateral para menús centrados

### Accesibilidad

- Navegación por teclado
- Indicadores visuales claros
- Textos descriptivos para lectores de pantalla
- Enlaces externos marcados apropiadamente

## Ejemplos de Uso

### Menú de Propiedades (3 columnas) - Centrado

```
        [Propiedades]
           ↓
    ┌─ Menú Centrado ─┐
    │ Casas | Locales | Terrenos Agrícolas │
    │ Departamentos | Oficinas | Proyectos │
    │ Terrenos | Bodegas |                │
    └─────────────────────────────────────┘
```

### Menú de Servicios (2 columnas) - Centrado

```
        [Servicios]
           ↓
      ┌─ Menú Centrado ─┐
      │ Venta | Tasación │
      │ Alquiler | Trámites Legales │
      │ Asesoría |                  │
      └─────────────────────────────┘
```

### Menú de Nosotros (1 columna)

```
Conoce ISI Perú
├── Historia
├── Misión y Visión
├── Equipo
└── Valores
```

## Mantenimiento

### Agregar Nuevos Elementos

1. Editar `src/data/navigation.ts`
2. Seguir la estructura de interfaces definidas
3. Probar en diferentes dispositivos

### Modificar Estilos

1. Editar los componentes `DropdownMenu.tsx` y `MobileMenu.tsx`
2. Mantener consistencia con el tema de ISI Perú
3. Verificar responsividad

### Agregar Funcionalidades

1. Extender las interfaces en `src/types/menu.ts`
2. Actualizar los componentes correspondientes
3. Mantener la compatibilidad hacia atrás

## Ventajas del Sistema

✅ **Flexible**: Soporta múltiples configuraciones
✅ **Responsivo**: Se adapta a todos los dispositivos
✅ **Mantenible**: Código limpio y bien estructurado
✅ **Escalable**: Fácil de extender y modificar
✅ **Consistente**: Mantiene el diseño visual de ISI Perú
✅ **Accesible**: Cumple estándares de accesibilidad web
