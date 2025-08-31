import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import GoogleAnalytics from "./components/GoogleAnalytics";
import JsonLd from "./components/JsonLd";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title:
    "ISIPERU - Pioneros en asesoría integral de proyectos inmobiliarios en Perú",
  description:
    "En ISIPERU ofrecemos asesoría personalizada y soluciones integrales en proyectos inmobiliarios. Confía en nuestra experiencia para invertir con seguridad en la Selva Central y todo el Perú.",
  keywords:
    "inmobiliaria, propiedades, casas, departamentos, Selva Central, Perú, ISIPERU",
  authors: [{ name: "ISIPERU" }],
  creator: "ISIPERU",
  publisher: "ISIPERU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://isiperu.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#20B266" },
      {
        rel: "icon",
        url: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title:
      "ISIPERU - Pioneros en asesoría integral de proyectos inmobiliarios en Perú",
    description:
      "Encuentra las mejores propiedades en la Selva Central, Perú. Casas, departamentos y terrenos en las mejores ubicaciones.",
    url: "https://isiperu.com",
    siteName: "ISIPERU",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "ISIPERU - Pioneros en asesoría integral de proyectos inmobiliarios en Perú",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ISIPERU - Pioneros en asesoría integral de proyectos inmobiliarios en Perú",
    description:
      "Encuentra las mejores propiedades en la Selva Central, Perú. Casas, departamentos y terrenos en las mejores ubicaciones.",
    images: ["/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "msapplication-TileColor": "#20B266",
    "msapplication-TileImage": "/icon-512x512.png",
    "theme-color": "#20B266",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <GoogleAnalytics />
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
