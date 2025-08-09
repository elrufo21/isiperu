"use client";

import React from "react";

type TabKey =
  | "introduccion"
  | "historia"
  | "misionvision"
  | "experiencia"
  | "objetivos"
  | "areas"
  | "modalidad"
  | "ventajas"
  | "aliados";

const TABS: { key: TabKey; label: string }[] = [
  { key: "introduccion", label: "Introducción" },
  { key: "historia", label: "Historia" },
  { key: "misionvision", label: "Misión y Visión" },
  { key: "experiencia", label: "Experiencia" },
  { key: "objetivos", label: "Objetivos" },
  { key: "areas", label: "Áreas" },
  { key: "modalidad", label: "Modalidad" },
  { key: "ventajas", label: "Ventajas" },
  { key: "aliados", label: "Aliados" },
];

export default function NosotrosContent() {
  const [activeTab, setActiveTab] = React.useState<TabKey>("introduccion");

  return (
    <section className="py-10">
      {/* Tabs */}
      <div className="w-full">
        <div className="border-b border-gray-200">
          <nav
            className="flex flex-wrap gap-2"
            aria-label="Secciones de Nosotros"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={
                    "px-4 py-2 text-sm font-medium rounded-t-md transition-colors " +
                    (isActive
                      ? "text-emerald-700 bg-emerald-50 border border-b-white border-emerald-200"
                      : "text-slate-600 hover:text-emerald-700 hover:bg-slate-50 border border-transparent")
                  }
                  aria-current={isActive ? "page" : undefined}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Panels */}
        <div className="bg-white border border-gray-200 rounded-b-xl rounded-tr-xl p-6 md:p-8">
          {activeTab === "introduccion" && <IntroduccionPanel />}
          {activeTab === "historia" && <HistoriaPanel />}
          {activeTab === "misionvision" && <MisionVisionPanel />}
          {activeTab === "experiencia" && <ExperienciaPanel />}
          {activeTab === "objetivos" && <ObjetivosPanel />}
          {activeTab === "areas" && <AreasPanel />}
          {activeTab === "modalidad" && <ModalidadPanel />}
          {activeTab === "ventajas" && <VentajasPanel />}
          {activeTab === "aliados" && <AliadosPanel />}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-slate-700 leading-relaxed">{children}</p>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside text-slate-700 space-y-1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function GridTwo({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

function IntroduccionPanel() {
  return (
    <div>
      <SectionTitle>Introducción</SectionTitle>
      <Paragraph>
        Según la CCL, más del 90% del crecimiento del sector inmobiliario es
        informal. Esto genera desconfianza entre inversionistas y compradores,
        afectando la seguridad jurídica. Nuestra institución trabaja en todos
        los procesos de la actividad inmobiliaria para beneficiar de manera
        directa e indirecta a quienes participan del rubro en la región de la
        Selva Central.
      </Paragraph>
    </div>
  );
}

function HistoriaPanel() {
  return (
    <div>
      <SectionTitle>Historia</SectionTitle>
      <Paragraph>
        ISI nace a partir de Prodevidas y es liderada por Mario Félix Mendoza
        Aguirre. Desde 2010, nos enfocamos en negocios inmobiliarios en la selva
        central del Perú, posicionándonos como impulsores de habilitaciones
        urbanas y colocación de lotes en la región.
      </Paragraph>
    </div>
  );
}

function MisionVisionPanel() {
  return (
    <GridTwo
      left={
        <div>
          <SectionTitle>Misión</SectionTitle>
          <Paragraph>
            Somos una organización dedicada a integrar a personas naturales y
            jurídicas en el sector inmobiliario. Brindamos soluciones integrales
            con un equipo calificado para asegurar la efectividad,
            competitividad y el desarrollo sostenible.
          </Paragraph>
        </div>
      }
      right={
        <div>
          <SectionTitle>Visión</SectionTitle>
          <Paragraph>
            Ser la organización líder en el país con alianzas estratégicas para
            negocios del sector inmobiliario, destacando por calidad e
            innovación y generando valor para inversionistas, accionistas,
            clientes, colaboradores y la sociedad.
          </Paragraph>
        </div>
      }
    />
  );
}

function ExperienciaPanel() {
  const items = [
    "Esperanza de Vida I Etapa - Pangoa",
    "Valle Sagrado - Mazamari",
    "Villa Flavia - Mazamari",
    "Esperanza de Vida II Etapa - Pangoa",
    "La Molina - Mazamari",
    "Ecovida - Pangoa",
  ];
  return (
    <div>
      <SectionTitle>Experiencia</SectionTitle>
      <List items={items} />
    </div>
  );
}

function ObjetivosPanel() {
  const items = [
    "Integrar organizaciones y dotar de conocimientos, servicios y materiales a quienes lo soliciten.",
    "Fortalecer al emprendedor en su proyección empresarial inmobiliaria.",
    "Impulsar asociaciones y empresas integradas para proyectos de gran envergadura.",
    "Ser reconocidos como empresarios competitivos de gran trayectoria en el rubro inmobiliario.",
    "Lograr acreditación por entidades públicas y privadas y avalar a los integrados a la ISI.",
  ];
  return (
    <div>
      <SectionTitle>Objetivos</SectionTitle>
      <List items={items} />
    </div>
  );
}

function AreasPanel() {
  const items = [
    "Ventas y Servicios",
    "Consolidación Empresarial",
    "Marketing",
    "Asesoría Legal y Saneamiento de Predios",
  ];
  return (
    <div>
      <SectionTitle>Áreas de Trabajo</SectionTitle>
      <List items={items} />
    </div>
  );
}

function ModalidadPanel() {
  const items = ["Afiliado", "Accionista", "Inversionista"];
  return (
    <div>
      <SectionTitle>Modalidad para Integrarse</SectionTitle>
      <List items={items} />
    </div>
  );
}

function VentajasPanel() {
  const items = [
    "Equipo de profesionales altamente capacitados.",
    "Respaldo económico y participación de personas naturales y jurídicas.",
    "Oficina central con las condiciones necesarias que exige la demanda.",
    "Realización de negocios cruzados.",
    "Adopción de mecanismos de inteligencia artificial.",
    "Respaldo institucional.",
  ];
  return (
    <div>
      <SectionTitle>Ventajas</SectionTitle>
      <List items={items} />
    </div>
  );
}

function AliadosPanel() {
  const items = ["Notarías", "Municipalidades", "SUNARP", "Empresas"];
  return (
    <div>
      <SectionTitle>Aliados</SectionTitle>
      <List items={items} />
    </div>
  );
}
