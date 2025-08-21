import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactoForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto | ISI Perú",
  description:
    "Comunícate con ISI Perú: celular, correo y direcciones en Pangoa y Mazamari.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <div className="min-h-[784px] bg-gray-50">
      <section className=" min-h-[784px] py-8 bg-white relative bg-green-diagonal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="font-montserrat font-heavy text-2xl text-slate-900 mb-3">
                  Información de Contacto
                </h2>
                <p className="font-montserrat font-regular text-base text-slate-600">
                  Estamos aquí para ayudarte con todas tus necesidades
                  inmobiliarias. Contáctanos por cualquiera de estos medios.
                </p>
              </div>

              {/* Phone */}
              <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-4 border border-emerald-100 hover:shadow-md hover:shadow-emerald-100/50 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-emerald-600 mb-1">
                      Celular
                    </div>
                    <a
                      href="tel:900460040"
                      className="text-lg font-bold text-slate-900 hover:text-emerald-600 transition-colors duration-300"
                    >
                      900 460 040
                    </a>
                    <p className="text-xs text-slate-500">
                      Disponible de lunes a viernes
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-4 border border-emerald-100 hover:shadow-md hover:shadow-emerald-100/50 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-emerald-600 mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:isiperu25@gmail.com"
                      className="text-lg font-bold text-slate-900 hover:text-emerald-600 transition-colors duration-300"
                    >
                      isiperu25@gmail.com
                    </a>
                    <p className="text-xs text-slate-500">
                      Respuesta en 24 horas
                    </p>
                  </div>
                </div>
              </div>

              {/* Addresses */}
              <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-4 border border-emerald-100 hover:shadow-md hover:shadow-emerald-100/50 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-emerald-600 mb-2">
                      Nuestras Oficinas
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white/60 rounded-lg p-3 border border-emerald-200/50">
                        <div className="font-bold text-slate-900 text-sm mb-1">
                          Oficina Pangoa
                        </div>
                        <div className="text-slate-600 text-sm">
                          Calle 3 de Noviembre s/n - Pangoa
                        </div>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3 border border-emerald-200/50">
                        <div className="font-bold text-slate-900 text-sm mb-1">
                          Oficina Mazamari
                        </div>
                        <div className="text-slate-600 text-sm">
                          Av. Victor Andrés Bélaunde 420 - Mazamari
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horario */}
              <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-4 border border-emerald-100 hover:shadow-md hover:shadow-emerald-100/50 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-emerald-600 mb-1">
                      Horario de Atención
                    </div>
                    <div className="text-lg font-bold text-slate-900 mb-1">
                      Lun - Vie: 8:00 AM - 6:00 PM
                    </div>
                    <div className="text-slate-600 text-sm">
                      Sáb: 8:00 AM - 1:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:sticky lg:top-8">
              <ContactoForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
