"use client";
import { ReactNode } from "react";
import HeroSection from "./HeroSection";
import ProcessSteps from "./ProcessSteps";
import { Calendar, Check, MessageCircle, Phone } from "lucide-react";
import FAQSection from "./FAQSection";

interface AreaLayoutProps {
  title: string;
  subtitle: string;
  heroDescription: string;
  services: string[];
  processSteps: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  children?: ReactNode;
  images?: Array<{
    src: string;
    alt: string;
  }>;
  heroReverse?: boolean;
}

const AreaLayout = ({
  title,
  subtitle,
  heroDescription,
  services,
  processSteps,
  faqs,
  children,
  images,
  heroReverse = false,
}: AreaLayoutProps) => {
  const handleWhatsAppClick = () => {
    const message = `Hola, estoy interesado en sus servicios de ${title}.`;
    const phoneNumber = "+51900460040";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  const handleCallClick = () => {
    const phoneNumber = "+51900460040";
    window.open(`tel:${phoneNumber}`, "_blank");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <HeroSection
        title={title}
        subtitle={subtitle}
        description={heroDescription}
        buttons={[
          {
            type: "button",
            text: "Agenda tu consulta",
            variant: "primary",
            onClick: () => console.log("Abrir modal o acción personalizada"),
          },
          {
            type: "link",
            text: "Contáctanos",
            href: "tel:+51900460040",
            variant: "secondary",
          },
        ]}
        images={images || []}
        reverse={heroReverse}
      />

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-legal-pattern-with-scales-of-justice-OVrDzq3nKkOncpQyU9RoMhnEqp10Hx.png')] opacity-5 pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <ol className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {services.map((service, index) => (
              <li key={index} className="relative flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#20B266] text-white text-sm font-bold mr-3">
                  <Check />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Descripción breve del servicio para dar más contexto.
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProcessSteps steps={processSteps} />

      <FAQSection faqs={faqs} />

      {children}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-legal-pattern-with-scales-of-justice-OVrDzq3nKkOncpQyU9RoMhnEqp10Hx.png')] opacity-5 pointer-events-none"></div>

        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl text-black md:text-4xl lg:text-5xl font-bold mb-6">
              ¿Necesitas asesoría legal inmediata?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-slate-900 leading-relaxed">
              No esperes más. Nuestro equipo de expertos está listo para
              ayudarte a resolver tu situación legal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              {/* Botón Llamar */}
              <button
                onClick={handleCallClick}
                className="group flex items-center justify-center gap-2 min-w-[220px] px-6 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                  <Phone className="w-5 h-5" />
                </span>
                Llamar ahora
              </button>

              {/* Botón WhatsApp */}
              <button
                onClick={handleWhatsAppClick}
                className="group flex items-center justify-center gap-2 min-w-[220px] px-6 py-4 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </span>
                Enviar WhatsApp
              </button>
            </div>

            {/* Features 
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">Consulta inmediata</h3>
                <p className="text-white/80 text-sm">
                  Respuesta en menos de 24 horas
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">Disponibilidad 24/7</h3>
                <p className="text-white/80 text-sm">
                  Atención en casos de emergencia
                </p>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaLayout;
