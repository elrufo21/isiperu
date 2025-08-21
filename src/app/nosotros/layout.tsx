import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | ISI Perú - Líderes en Desarrollo Inmobiliario",
  description:
    "Conoce ISI Perú: 14+ años transformando la Selva Central con desarrollos inmobiliarios sostenibles. Historia, misión, visión y proyectos exitosos.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros | ISI Perú",
    description:
      "Líderes en desarrollo inmobiliario sostenible en la Selva Central del Perú",
    type: "website",
  },
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
