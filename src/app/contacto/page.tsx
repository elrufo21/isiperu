import type { Metadata } from "next";

import ContactoForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto | ISI Perú",
  description:
    "Comunícate con ISI Perú: celular, correo y direcciones en Pangoa y Mazamari.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <div className="min-h-[784px] bg-green-diagonal">
      <ContactoForm />
    </div>
  );
}
