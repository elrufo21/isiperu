# 🚀 Guía de Despliegue en Vercel - ISI Perú

## 📋 Prerequisitos

- Cuenta en [Vercel](https://vercel.com)
- Repositorio en GitHub conectado a Vercel
- Node.js 18+ instalado localmente

## 🎯 Configuración Optimizada

### 1. **Configuración Automática**

El proyecto ya está configurado con:
- ✅ `vercel.json` optimizado
- ✅ `next.config.ts` con optimizaciones
- ✅ Headers de seguridad
- ✅ Compresión y minificación
- ✅ Optimización de imágenes

### 2. **Variables de Entorno**

En el dashboard de Vercel, configura estas variables:

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID

# Google Search Console
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=tu-codigo-google-verification

# URLs
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
NEXT_PUBLIC_SITE_NAME=ISI Perú

# Configuración
NEXT_PUBLIC_APP_ENV=production
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### 3. **Pasos de Despliegue**

#### Opción A: Despliegue Automático (Recomendado)

1. **Conectar Repositorio**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu repositorio de GitHub
   - Vercel detectará automáticamente Next.js

2. **Configurar Variables**
   - En el dashboard de Vercel
   - Ve a Settings > Environment Variables
   - Agrega las variables de entorno

3. **Desplegar**
   - Cada push a `main` desplegará automáticamente
   - Vercel creará previews para cada PR

#### Opción B: Despliegue Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Desplegar
vercel --prod
```

### 4. **Optimizaciones Implementadas**

#### 🚀 Performance
- **Compresión**: Gzip habilitado
- **Minificación**: SWC minifier
- **Imágenes**: WebP y AVIF automático
- **Caché**: Headers optimizados
- **Bundle**: Tree shaking automático

#### 🔒 Seguridad
- **Headers**: XSS, CSRF, Clickjacking protection
- **CSP**: Content Security Policy
- **HTTPS**: Forzado automático
- **HSTS**: HTTP Strict Transport Security

#### 📱 SEO
- **Sitemap**: Generado automáticamente
- **Robots.txt**: Configurado
- **Meta tags**: Optimizados
- **Open Graph**: Implementado

### 5. **Dominio Personalizado**

1. **Configurar DNS**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

2. **En Vercel Dashboard**
   - Settings > Domains
   - Agregar tu dominio
   - Verificar configuración

### 6. **Monitoreo y Analytics**

#### Google Analytics
1. Crear cuenta en [Google Analytics](https://analytics.google.com)
2. Obtener Measurement ID
3. Configurar en variables de entorno
4. El tracking se activará automáticamente

#### Vercel Analytics
- Habilitar en dashboard de Vercel
- Analytics automático sin configuración

### 7. **Comandos Útiles**

```bash
# Build local
npm run build

# Preview local
npm run preview

# Lint
npm run lint

# Limpiar caché
npm run clean
```

### 8. **Troubleshooting**

#### Error de Build
```bash
# Limpiar caché
npm run clean
rm -rf .next
npm install
npm run build
```

#### Error de Variables de Entorno
- Verificar que todas las variables estén en Vercel
- Reiniciar el deployment

#### Error de Dominio
- Verificar DNS settings
- Esperar propagación (hasta 24h)

### 9. **Post-Despliegue**

#### ✅ Checklist
- [ ] Sitio carga correctamente
- [ ] Imágenes se optimizan
- [ ] SEO meta tags funcionan
- [ ] Analytics tracking activo
- [ ] SSL certificado válido
- [ ] Performance score > 90

#### 🔧 Optimizaciones Adicionales

1. **CDN**: Vercel Edge Network automático
2. **Caché**: Configurado para assets estáticos
3. **Compresión**: Gzip automático
4. **Minificación**: CSS/JS optimizados

### 10. **Mantenimiento**

#### Actualizaciones
- Cada push a `main` = nuevo deployment
- Rollback automático si hay errores
- Preview deployments para testing

#### Monitoreo
- Vercel Analytics automático
- Performance monitoring
- Error tracking

---

## 🎉 ¡Listo para Producción!

Tu aplicación ISI Perú está optimizada para:
- ⚡ **Performance máxima**
- 🔒 **Seguridad robusta**
- 📱 **Responsive perfecto**
- 🔍 **SEO optimizado**
- 📊 **Analytics completo**

¡Tu sitio web premium está listo para conquistar el mercado inmobiliario! 🏆 