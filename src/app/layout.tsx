import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import JsonLd from "./components/JsonLd";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISI Perú - Inmobiliaria en Perú | Venta y Alquiler de Propiedades",
  description:
    "Encuentra tu hogar ideal en Perú. ISI Perú te ofrece las mejores propiedades en venta y alquiler con asesoría profesional. Más de 10 años de experiencia en el mercado inmobiliario peruano.",
  keywords:
    "inmobiliaria, propiedades, venta, alquiler, casas, departamentos, Perú, Lima, ISI Perú, bienes raíces",
  authors: [{ name: "ISI Perú" }],
  creator: "ISI Perú",
  publisher: "ISI Perú",
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
    icon: [{ url: "/favicon.ico" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "ISI Perú - Inmobiliaria en Perú | Venta y Alquiler de Propiedades",
    description:
      "Encuentra tu hogar ideal en Perú. ISI Perú te ofrece las mejores propiedades en venta y alquiler con asesoría profesional.",
    url: "https://isiperu.com",
    siteName: "ISI Perú",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ISI Perú - Inmobiliaria en Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISI Perú - Inmobiliaria en Perú",
    description: "Encuentra tu hogar ideal en Perú con ISI Perú",
    images: ["/logo.png"],
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
    google: "Z-fQabJphFvmm3Axqu1pUpmQ_JjsJyssICfZIvtj_1o",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <JsonLd />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
