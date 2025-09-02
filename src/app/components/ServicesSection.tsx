import { Card } from "@/components/ui/card";
import {
  Scale,
  Building,
  Users,
  FileText,
  Home,
  Briefcase,
  Shield,
  Heart,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Derecho Administrativo",
    href: "/servicios/derecho-administrativo",
    description:
      "Procedimientos administrativos, contratos públicos, regulación.",
  },
  {
    icon: Briefcase,
    title: "Derecho Corporativo",
    href: "/servicios/derecho-corporativo",
    description: "Constitución de empresas, fusiones y adquisiciones.",
  },
  {
    icon: Scale,
    title: "Derecho Civil",
    href: "/servicios/derecho-civil",
    description: "Contratos, responsabilidad civil, obligaciones.",
  },
  {
    icon: Shield,
    title: "Derecho Penal",
    href: "/servicios/derecho-penal",
    description: "Defensa penal, amparos, procedimientos penales.",
  },
  {
    icon: Users,
    title: "Derecho Laboral",
    href: "/servicios/derecho-laboral",
    description: "Contratos laborales, despidos, relaciones obrero-patronales.",
  },
  {
    icon: FileText,
    title: "Saneamiento de Predios",
    href: "/servicios/saneamiento-predios-titulacion",
    description: "Titulación, regularización de propiedades.",
  },
  {
    icon: Heart,
    title: "Derecho de Familia",
    href: "/servicios/derecho-de-familia",
    description: "Divorcios, custodia, pensiones alimentarias, adopciones.",
  },
  {
    icon: Home,
    title: "Derecho Inmobiliario",
    href: "/servicios/derecho-inmobiliario",
    description: "Compraventa, arrendamiento, propiedad horizontal.",
  },
  {
    icon: Building,
    title: "Proyectos e Infraestructura",
    href: "/servicios/proyectos-infraestructura",
    description: "Desarrollo de proyectos, obra pública, infraestructura.",
  },
  {
    icon: Search,
    title: "Investigación y Pericia",
    href: "/servicios/investigacion-y-pericia",
    description: "Peritajes, investigaciones especializadas, dictámenes.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="servicios"
      className="py-8 relative min-h-[80vh] bg-gradient-to-r from-[#0f0f0f] via-[#1f1f1f] to-[#0f0f0f] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-legal-pattern-with-scales-of-justice-OVrDzq3nKkOncpQyU9RoMhnEqp10Hx.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Nuestras Áreas de Especialización
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contamos con especialistas en todas las ramas del derecho para
            brindarte la mejor asesoría legal adaptada a tus necesidades.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 cursor-pointer hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-accent-teal-light/20"
                onClick={() => {
                  window.location.href = service.href;
                }}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent-teal-light rounded-full flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-accent-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
