import type { Metadata } from "next";

import ContactoForm from "./ContactForm";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Contacto | ISI Perú",
  description:
    "Comunícate con ISI Perú: celular, correo y direcciones en Pangoa y Mazamari.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <div className="min-h-[784px] ">
      <ContactoForm />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#20B266",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}
