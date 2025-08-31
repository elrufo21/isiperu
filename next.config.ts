import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizaciones de performance
  experimental: {
    // optimizeCss: true, // Deshabilitado temporalmente por error con critters
    optimizePackageImports: ["lucide-react"],
  },

  // Compresión y minificación
  compress: true,
  reactStrictMode: true,

  // Optimizaciones de imágenes
  images: {
    formats: ["image/webp", "image/avif"],
    domains: [
      "ilcj.edu.pe",
      "i.ytimg.com",
      "blog.lemontech.com",
      "media.licdn.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "tirant.com",
      "www.tirant.com",
      "i0.wp.com",
      "www.esic.edu.pe",
      "www.esic.edu",
      "cdn-djofm.nitrocdn.com",
      "ilcj.edu.pe",
      "www.unir.net",
      "www.abogadosasociadosperu.com",
      "escueladerecho.pucp.edu.pe",
      "posgrado.uwiener.edu.pe",
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
  },

  // Headers de seguridad y cache
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Tree shaking más agresivo
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;

      // Split chunks más eficiente
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            priority: 10,
          },
          common: {
            name: "common",
            minChunks: 2,
            chunks: "all",
            priority: 5,
          },
        },
      };
    }

    return config;
  },
};

export default nextConfig;
