
import { Mail, Phone } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: "legal" | "inmobiliaria";
  image: string;
  email: string;
  phone: string;
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Amado Diaz Alcantara",
    position: "Socio Director",
    department: "legal",
    image: "",
    email: "rmendoza@isilegal.com",
    phone: "+51 999 123 456",
    specialties: [
      "Abogado",
    ],
  },
  {
    id: 2,
    name: "Juan branlee atao Mendoza",
    position: "Socia Senior",
    department: "legal",
    image: "",
    email: "cflores@isilegal.com",
    phone: "+51 999 123 457",
    specialties: ["Abogado"],
  },
  {
    id: 3,
    name: "Lisbeth B. Ninavilca Arana",
    position: "Director de Proyectos",
    department: "inmobiliaria",
    image: "",
    email: "mtorres@isilegal.com",
    phone: "+51 999 123 458",
    specialties: [
     
    ],
  },
  {
    id: 4,
    name: "Laura Antezana Palante",
    position: "Gerente de Ventas",
    department: "inmobiliaria",
    image: "",
    email: "avargas@isilegal.com",
    phone: "+51 999 123 459",
    specialties: [
    ],
  },
   {
    id: 5,
    name: "Marco Antonio Macuri Inga",
    position: "Gerente de Ventas",
    department: "inmobiliaria",
    image: "",
    email: "avargas@isilegal.com",
    phone: "+51 999 123 459",
    specialties: [
        "Abogado"
    ],
  },
   {
    id: 4,
    name: "Jorge Luis Ruiz Ubaldo",
    position: "Gerente de Ventas",
    department: "inmobiliaria",
    image: "",
    email: "avargas@isilegal.com",
    phone: "+51 999 123 459",
    specialties: [
        "Arquitecto"
    ],
  },
   {
    id: 4,
    name: "Mario F. Mendoza Aguirre",
    position: "Gerente de Ventas",
    department: "inmobiliaria",
    image: "",
    email: "avargas@isilegal.com",
    phone: "+51 999 123 459",
    specialties: [
        "Abogado"
    ],
  },
   {
    id: 4,
    name: "Jose Samuel Saavedra Pacotaipe",
    position: "Gerente de Ventas",
    department: "inmobiliaria",
    image: "",
    email: "avargas@isilegal.com",
    phone: "+51 999 123 459",
    specialties: [
    ],
  },
   {
    id: 4,
    name: "Marcia Andrid huamani hinostroza",
    position: "Gerente de Ventas",
    department: "inmobiliaria",
    image: "",
    email: "avargas@isilegal.com",
    phone: "+51 999 123 459",
    specialties: [
    ],
  },
   {
    id: 4,
    name: "Laura Antezana Palante",
    position: "Gerente de Ventas",
    department: "inmobiliaria",
    image: "",
    email: "avargas@isilegal.com",
    phone: "+51 999 123 459",
    specialties: [
    ],
  },
];

const TeamSection = () => {
  const TeamCard = ({ member }: { member: TeamMember }) => (
    <div className="group relative bg-white rounded-xl shadow-card hover:shadow-elegant transition-slow overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-slow"
        />
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-navy mb-2">
          {member.name}
        </h3>
        <p className="text-gold font-medium mb-3">{member.position}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Mail className="w-4 h-4 mr-2" />
            <a
              href={`mailto:${member.email}`}
              className="hover:text-navy transition-smooth"
            >
              {member.email}
            </a>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Phone className="w-4 h-4 mr-2" />
            <a
              href={`tel:${member.phone}`}
              className="hover:text-navy transition-smooth"
            >
              {member.phone}
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-navy mb-2">
            Especialidades:
          </h4>
          <div className="flex flex-wrap gap-1">
            {member.specialties.map((specialty, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Profesionales altamente calificados comprometidos con la excelencia
            y el éxito de nuestros clientes
          </p>
        </div>

        {/* All Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
