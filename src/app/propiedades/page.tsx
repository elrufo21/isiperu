import type { Metadata } from "next";
import { MapPin, Calendar, Home, TreePine } from "lucide-react";

export const metadata: Metadata = {
  title: "Propiedades | ISI Perú",
  description:
    "Explora proyectos y propiedades de ISI Perú en la Selva Central: habilitaciones urbanas, urbanizaciones y proyectos sostenibles.",
  alternates: { canonical: "/propiedades" },
};

type Proyecto = {
  id: string;
  titulo: string;
  ubicacion: string;
  estado: string;
  tipo: string;
  caracteristicas: string[];
  destacado?: boolean;
  anioComplecion: string;
  lotes: string;
};

const proyectos: Proyecto[] = [
  {
    id: "1",
    titulo: "Esperanza de Vida I Etapa",
    ubicacion: "Pangoa, Junín",
    estado: "Completado",
    tipo: "Habilitación Urbana",
    caracteristicas: [
      "Habilitación completa",
      "Titulación finalizada",
      "Servicios básicos",
      "Áreas verdes",
    ],
    destacado: true,
    anioComplecion: "2018",
    lotes: "120+ lotes",
  },
  {
    id: "2",
    titulo: "Valle Sagrado",
    ubicacion: "Mazamari, Junín",
    estado: "Completado",
    tipo: "Urbanización",
    caracteristicas: [
      "Diseño moderno",
      "Infraestructura completa",
      "Zona residencial",
      "Acceso pavimentado",
    ],
    anioComplecion: "2019",
    lotes: "80+ lotes",
  },
  {
    id: "3",
    titulo: "Villa Flavia",
    ubicacion: "Mazamari, Junín",
    estado: "Completado",
    tipo: "Proyecto Residencial",
    caracteristicas: [
      "Zona privilegiada",
      "Seguridad 24/7",
      "Áreas recreativas",
      "Cercanía a servicios",
    ],
    anioComplecion: "2020",
    lotes: "60+ lotes",
  },
  {
    id: "4",
    titulo: "Esperanza de Vida II Etapa",
    ubicacion: "Pangoa, Junín",
    estado: "Completado",
    tipo: "Habilitación Urbana",
    caracteristicas: [
      "Expansión del proyecto original",
      "Titulación avanzada",
      "Servicios mejorados",
      "Áreas comunes",
    ],
    anioComplecion: "2021",
    lotes: "90+ lotes",
  },
  {
    id: "5",
    titulo: "La Molina",
    ubicacion: "Mazamari, Junín",
    estado: "Completado",
    tipo: "Urbanización Residencial",
    caracteristicas: [
      "Zona exclusiva",
      "Seguridad privada",
      "Parques y jardines",
      "Acceso controlado",
    ],
    anioComplecion: "2022",
    lotes: "70+ lotes",
  },
  {
    id: "6",
    titulo: "Ecovida",
    ubicacion: "Pangoa, Junín",
    estado: "Completado",
    tipo: "Proyecto Sostenible",
    caracteristicas: [
      "Enfoque ecológico",
      "Energía renovable",
      "Espacios verdes",
      "Comunidad sostenible",
    ],
    anioComplecion: "2023",
    lotes: "50+ lotes",
  },
];

export default function PropiedadesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#231F20] via-[#2a2529] to-[#1a1718] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-montserrat font-heavy text-4xl md:text-5xl">
            Propiedades
          </h1>
          <p className="font-montserrat font-regular text-slate-300 mt-4 max-w-3xl">
            Portafolio de proyectos y propiedades desarrolladas por ISI Perú en
            la Selva Central. Si deseas ofertar o conocer disponibilidad,
            contáctanos.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectos.map((p) => (
              <article
                key={p.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="relative h-44 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                  <TreePine className="w-14 h-14 text-emerald-600" />
                  <div className="absolute top-3 right-3 text-xs bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                    {p.estado}
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-slate-800">
                    {p.titulo}
                  </h2>
                  <div className="mt-1 text-sm text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" /> {p.ubicacion}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="px-2 py-1 text-xs bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                      {p.tipo}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-gray-700">
                    {p.caracteristicas.slice(0, 3).map((c) => (
                      <li key={c}>• {c}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />{" "}
                      {p.anioComplecion}
                    </span>
                    <span className="flex items-center">
                      <Home className="w-3.5 h-3.5 mr-1" /> {p.lotes}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
