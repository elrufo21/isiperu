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
  title: "ISIPERU - Inmobiliaria en Lima, Perú",
  description:
    "Encuentra las mejores propiedades en Lima, Perú. Casas, departamentos y terrenos en las mejores ubicaciones. ISIPERU, tu socio inmobiliario de confianza.",
  keywords:
    "inmobiliaria, propiedades, casas, departamentos, Lima, Perú, ISIPERU",
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
  openGraph: {
    title: "ISIPERU - Inmobiliaria en Lima, Perú",
    description:
      "Encuentra las mejores propiedades en Lima, Perú. Casas, departamentos y terrenos en las mejores ubicaciones.",
    url: "https://isiperu.com",
    siteName: "ISIPERU",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "ISIPERU - Inmobiliaria en Lima, Perú",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISIPERU - Inmobiliaria en Lima, Perú",
    description:
      "Encuentra las mejores propiedades en Lima, Perú. Casas, departamentos y terrenos en las mejores ubicaciones.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
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
