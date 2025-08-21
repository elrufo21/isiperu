import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import ContactoForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto | ISI Perú",
  description:
    "Comunícate con ISI Perú: celular, correo y direcciones en Pangoa y Mazamari.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-sm font-medium backdrop-blur-sm mb-6">
              <Send className="w-4 h-4 mr-2" />
              Contáctanos
            </div>
            <h1 className="font-montserrat font-heavy text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Inicia tu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                Proyecto Inmobiliario
              </span>
            </h1>
            <p className="font-montserrat font-regular text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Te responderemos a la brevedad para brindarte la mejor asesoría en
              desarrollo inmobiliario en la Selva Central del Perú.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white relative bg-green-diagonal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="mb-8">
                <h2 className="font-montserrat font-heavy text-3xl text-slate-900 mb-4">
                  Información de Contacto
                </h2>
                <p className="font-montserrat font-regular text-lg text-slate-600">
                  Estamos aquí para ayudarte con todas tus necesidades
                  inmobiliarias. Contáctanos por cualquiera de estos medios.
                </p>
              </div>

              {/* Phone */}
              <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-emerald-600 mb-1">
                      Celular
                    </div>
                    <a
                      href="tel:900460040"
                      className="text-xl font-bold text-slate-900 hover:text-emerald-600 transition-colors duration-300"
                    >
                      900 460 040
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Disponible de lunes a viernes
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-emerald-600 mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:isiperu25@gmail.com"
                      className="text-xl font-bold text-slate-900 hover:text-emerald-600 transition-colors duration-300"
                    >
                      isiperu25@gmail.com
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Respuesta en 24 horas
                    </p>
                  </div>
                </div>
              </div>

              {/* Addresses */}
              <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-emerald-600 mb-3">
                      Nuestras Oficinas
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/60 rounded-xl p-4 border border-emerald-200/50">
                        <div className="font-bold text-slate-900 mb-1">
                          Oficina Pangoa
                        </div>
                        <div className="text-slate-600">
                          Calle 3 de Noviembre s/n - Pangoa
                        </div>
                      </div>
                      <div className="bg-white/60 rounded-xl p-4 border border-emerald-200/50">
                        <div className="font-bold text-slate-900 mb-1">
                          Oficina Mazamari
                        </div>
                        <div className="text-slate-600">
                          Av. Victor Andrés Bélaunde 420 - Mazamari
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horario */}
              <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-6 border border-emerald-100 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-emerald-600 mb-1">
                      Horario de Atención
                    </div>
                    <div className="text-xl font-bold text-slate-900 mb-2">
                      Lun - Vie: 8:00 AM - 6:00 PM
                    </div>
                    <div className="text-slate-600">Sáb: 8:00 AM - 1:00 PM</div>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para comenzar tu proyecto inmobiliario?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está esperando para ayudarte a hacer
            realidad tus sueños inmobiliarios en la Selva Central.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:900460040"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </a>
            <a
              href="mailto:isiperu25@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Enviar Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
