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
    image: "Amado-Diaz.webp",
    email: "rmendoza@isilegal.com",
    phone: "+51 999 123 456",
    specialties: ["Abogado"],
  },
  {
    id: 2,
    name: "Juan branlee atao Mendoza",
    position: "Socia Senior",
    department: "legal",
    image: "Juan-branlee.webp",
    email: "cflores@isilegal.com",
    phone: "+51 999 123 457",
    specialties: ["Abogado"],
  },
  {
    id: 3,
    name: "Lisbeth B. Ninavilca Arana",
    position: "Director de Proyectos",
    department: "inmobiliaria",
    image: "Lisbeth-B.webp",
    email: "mtorres@isilegal.com",
    phone: "+51 999 123 458",
    specialties: [],
  },
  {
    id: 4,
    name: "Laura Antezana Palante",
    position: "Gerente de Ventas",
    department: "inmobiliaria",
    image: "Laura.webp",
    email: "avargas@isilegal.com",
    phone: "+51 999 123 459",
    specialties: [],
  },
  {
    id: 5,
    name: "Marco Antonio Macuri Inga",
    position: "Gerente de Ventas",
    department: "inmobiliaria",
    image: "Marco-Antonio.webp",
    email: "avargas@isilegal.com",
    phone: "+51 999 123 459",
    specialties: ["Abogado"],
  },
  {
    id: 6,
    name: "Jorge Luis Ruiz Ubaldo",
    position: "Gerente de Ventas",
    department: "inmobiliaria",
    image: "Jorge-Luis.webp",
    email: "avargas@isilegal.com",
    phone: "+51 999 123 459",
    specialties: ["Arquitecto"],
  },
  {
    id: 7,
    name: "Mario F. Mendoza Aguirre",
    position: "Gerente de Ventas",
    department: "inmobiliaria",
    image: "Mario-F.webp",
    email: "avargas@isilegal.com",
    phone: "+51 999 123 459",
    specialties: ["Abogado"],
  },
  {
    id: 8,
    name: "Jose Samuel Saavedra Pacotaipe",
    position: "Gerente de Ventas",
    department: "inmobiliaria",
    image: "Jose-Samuel.webp",
    email: "avargas@isilegal.com",
    phone: "+51 999 123 459",
    specialties: [],
  },
  {
    id: 9,
    name: "Marcia Andrid Huamani Hinostroza",
    position: "Gerente de Ventas",
    department: "inmobiliaria",
    image: "Marcia-.webp",
    email: "avargas@isilegal.com",
    phone: "+51 999 123 459",
    specialties: [],
  },
  {
    id: 10,
    name: "Oscar Armando Vertiz Carmona",
    position: "Gerente de Ventas",
    department: "inmobiliaria",
    image: "Oscar-Armando.webp",
    email: "avargas@isilegal.com",
    phone: "+51 999 123 459",
    specialties: ["Especialista en peritajes criminalisticos"],
  },
];

const TeamSection = () => {
  const TeamCard = ({ member }: { member: TeamMember }) => (
    <div className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={`/equipo/${member.image}`}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="font-bold text-xl text-white mb-1">{member.name}</h3>

        {member.specialties.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {member.specialties.map((specialty, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg font-medium border border-emerald-500/30"
              >
                {specialty}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#0f0f0f] via-[#1f1f1f] to-[#0f0f0f]">
      {/* Fondo patrón */}
      <div className="absolute inset-0 w-full h-full bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-legal-pattern-with-scales-of-justice-OVrDzq3nKkOncpQyU9RoMhnEqp10Hx.png')] bg-repeat bg-[120px] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-emerald-600 md:text-5xl font-bold mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed">
            Un grupo de profesionales altamente calificados, comprometidos con
            la excelencia y el éxito de nuestros clientes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
