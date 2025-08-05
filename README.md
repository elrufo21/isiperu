# ISI Perú - Inmobiliaria

Una aplicación web moderna desarrollada con **Next.js 15** y **TypeScript** para la empresa inmobiliaria ISI Perú, implementando las mejores prácticas de desarrollo y SEO.

## ✨ Características Principales

- 🏠 **Hero Section Profesional** con búsqueda rápida de propiedades
- 🔍 **Servicios Inmobiliarios** (Venta, Alquiler, Tasaciones, Asesoría)
- 📱 **Diseño Completamente Responsive** (mobile-first)
- 🎨 **Animaciones CSS** suaves y profesionales
- 🚀 **SEO Optimizado** con metadata completa
- ⚡ **Performance Optimizada** con Next.js 15
- 🎯 **Paleta de Colores** slate-800 y verde #20B266

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript para type safety
- **Estilos**: Tailwind CSS v4 con diseño personalizado
- **Iconos**: Lucide React
- **Fuentes**: Geist Sans y Geist Mono
- **Herramientas**: ESLint para calidad de código

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+
- npm o yarn

### Instalación

1. **Clonar el repositorio**

   ```bash
   git clone [url-del-repositorio]
   cd isiperu
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run dev:clean    # Limpiar caché y ejecutar desarrollo
npm run build        # Construir para producción
npm run start        # Ejecutar versión de producción
npm run preview      # Preview de producción en puerto 3001
npm run lint         # Verificar código con ESLint
npm run clean        # Limpiar caché de Next.js
```

## 📁 Estructura del Proyecto

```
isiperu/
├── src/
│   ├── app/                    # App Router de Next.js 15
│   │   ├── page.tsx           # Página principal
│   │   ├── layout.tsx         # Layout raíz con metadata
│   │   ├── globals.css        # Estilos globales y animaciones
│   │   ├── sitemap.ts         # Sitemap automático
│   │   ├── robots.ts          # Robots.txt
│   │   ├── viewport.ts        # Configuración de viewport
│   │   └── components/        # Componentes reutilizables
│   │       ├── Header.tsx     # Navegación principal
│   │       ├── Footer.tsx     # Pie de página
│   │       └── GoogleAnalytics.tsx # Analytics
├── public/                    # Archivos estáticos
│   ├── site.webmanifest      # PWA manifest
│   └── favicon.ico          # Favicon
└── config files             # Configuración del proyecto
```

## 🎨 Paleta de Colores

- **Slate-800** (#1e293b) - Header y secciones principales
- **#20B266** - Color principal (verde)
- **#1a9a5a** - Verde hover
- **Blancos y grises** - Contraste y legibilidad

## 🎭 Animaciones CSS

- `fadeIn` - Entrada suave de elementos
- `slideIn` - Deslizamiento lateral
- `slideInRight` - Deslizamiento desde la derecha
- `scaleIn` - Escalado de componentes
- `float` - Efecto flotante
- Transiciones hover personalizadas

## 🔧 SEO Implementado

### Metadata Completa

- Título optimizado para búsquedas
- Descripción detallada con keywords
- OpenGraph para redes sociales
- Twitter Cards
- Canonical URLs

### Archivos Automáticos

- **Sitemap**: `/sitemap.xml`
- **Robots**: `/robots.txt`
- **Viewport**: Configuración responsive

### Performance

- **Lazy loading** de componentes
- **Optimización de imágenes** con Next.js
- **CSS optimizado** con Tailwind
- **Build estático** para mejor velocidad

## 📱 Responsive Design

### Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Desktop Grande**: 1440px+

### Características

- **Mobile-first** approach
- **Navegación responsive** con menú hamburguesa
- **Grid system** adaptativo
- **Tipografía responsive**

## 🚀 Optimizaciones Implementadas

### Performance

- ✅ **Next.js 15** con App Router
- ✅ **TypeScript** para type safety
- ✅ **Tailwind CSS** optimizado
- ✅ **Lazy loading** de componentes
- ✅ **Build estático** para mejor SEO

### SEO

- ✅ **Metadata completa** en cada página
- ✅ **Sitemap automático** generado
- ✅ **Robots.txt** configurado
- ✅ **OpenGraph** y Twitter Cards
- ✅ **Estructura semántica** HTML

### UX/UI

- ✅ **Diseño responsive** mobile-first
- ✅ **Animaciones suaves** y profesionales
- ✅ **Navegación intuitiva** con breadcrumbs
- ✅ **Formularios optimizados** con validación
- ✅ **Estados de loading** y feedback visual

## 🔧 Configuración Avanzada

### Path Mapping

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

### Variables CSS Personalizadas

```css
:root {
  --color-primary: #20b266;
  --color-primary-dark: #1a9a5a;
  --color-secondary: #64748b;
}
```

## 📊 Analytics y Tracking

### Google Analytics

- Configurado para cargar solo en producción
- Tracking de páginas automático
- Eventos personalizados listos

### PWA Ready

- Manifest configurado
- Service Worker listo para implementar
- Iconos para diferentes dispositivos

## 🚀 Próximos Pasos Sugeridos

### Inmediatos

1. **Personalizar contenido**: Actualizar textos y datos reales
2. **Agregar imágenes**: Reemplazar placeholders con fotos reales
3. **Configurar Google Analytics**: Reemplazar `GA_MEASUREMENT_ID` con tu ID real

### Funcionalidades Avanzadas

1. **Integración de Base de Datos**: PostgreSQL + Prisma
2. **Autenticación**: NextAuth.js para login de agentes
3. **Mapas**: Google Maps API para ubicaciones
4. **Chat en vivo**: Integración con WhatsApp Business
5. **Sistema de favoritos**: Para usuarios registrados

### Optimizaciones

1. **CDN para imágenes**: Cloudinary o similar
2. **Caché con Redis**: Para mejor performance
3. **Testing**: Jest + Cypress para E2E
4. **CI/CD**: GitHub Actions para deployment automático

## 🐛 Solución de Problemas

### Errores Comunes

**Error de routes-manifest.json**

```bash
# Limpiar caché de Next.js
Remove-Item -Recurse -Force .next
npm run dev
```

**Error de TypeScript**

```bash
# Verificar tipos
npm run build
```

**Error de ESLint**

```bash
# Corregir formato
npm run lint
```

## 📄 Licencia

Este proyecto está desarrollado para ISI Perú y sigue las mejores prácticas de la industria.

---

**Desarrollado con ❤️ usando Next.js 15, TypeScript y Tailwind CSS**

### 🌟 Estado Actual

✅ **Build exitoso** sin errores críticos  
✅ **SEO optimizado** con metadata completa  
✅ **Responsive design** implementado  
✅ **Animaciones CSS** funcionando  
✅ **Performance optimizada** con Next.js 15

¡Tu aplicación está lista para producción! 🚀
