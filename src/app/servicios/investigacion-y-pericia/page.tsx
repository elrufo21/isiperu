import AreaLayout from "../../components/AreaLayout";

const InvestigacionPericiaPage = () => {
  const areaData = {
    title: "Investigación y Pericia",
    subtitle: "Porque mereces saber la verdad.",
    heroDescription:
      "Brindamos servicios especializados de investigación y pericia técnica, ofreciendo evidencia sólida y confiable para procesos judiciales, administrativos y empresariales. Nuestro equipo de peritos especializados utiliza metodologías científicas aceptadas internacionalmente para detectar falsificaciones, verificar autenticidad y aportar pruebas técnicas que fortalezcan tu caso.",
    services: [
      "Peritajes especializados en múltiples disciplinas",
      "Investigación de documentos falsos",
      "Grafotecnia y análisis de escritura",
      "Dactiloscopia y análisis de huellas",
      "Informes técnicos periciales",
      "Ratificación en juicio y audiencias",
      "Auditorías internas y cumplimiento",
      "Asesoría en cadena de custodia",
    ],
    images: [
      {
        src: "https://posgrado.uwiener.edu.pe/actividades/wp-content/uploads/2023/03/shutterstock_722659453.jpg",
        alt: "Investigación y Pericia",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Recolección y custodia",
        description:
          "Recopilamos la evidencia siguiendo protocolos estrictos de cadena de custodia.",
      },
      {
        step: 2,
        title: "Análisis pericial",
        description:
          "Realizamos análisis técnicos con metodologías científicas aceptadas internacionalmente.",
      },
      {
        step: 3,
        title: "Informe técnico",
        description:
          "Elaboramos un informe pericial detallado con conclusiones técnicas fundamentadas.",
      },
      {
        step: 4,
        title: "Ratificación y defensa",
        description:
          "Te acompañamos en audiencias y ratificamos el informe ante las autoridades.",
      },
    ],
    faqs: [
      {
        question: "¿El informe pericial es vinculante para el juez?",
        answer:
          "No es vinculante, pero tiene gran valor probatorio. El juez evalúa el informe junto con otras pruebas, pero un peritaje técnico sólido y bien fundamentado es muy persuasivo.",
      },
      {
        question: "¿Qué validez tiene una copia simple?",
        answer:
          "Las copias simples tienen validez limitada para peritajes. Es preferible trabajar con originales o copias certificadas. Si solo tienes copias simples, te asesoramos sobre las limitaciones.",
      },
      {
        question: "¿Se puede realizar pericia con documentos digitales?",
        answer:
          "Sí, realizamos peritajes en documentos digitales, incluyendo análisis de metadatos, detección de manipulación digital y verificación de autenticidad de archivos electrónicos.",
      },
      {
        question: "¿Qué pasa si no hay muestras comparativas?",
        answer:
          "Sin muestras comparativas, el análisis pericial tiene limitaciones. Te asesoramos sobre alternativas y estrategias para maximizar la evidencia disponible.",
      },
      {
        question: "¿Cuánto tiempo se preserva la evidencia?",
        answer:
          "Preservamos la evidencia por el tiempo que dure el proceso legal, siguiendo protocolos estrictos de cadena de custodia. Te asesoramos sobre la preservación a largo plazo si es necesario.",
      },
      {
        question: "¿Puedo solicitar una segunda opinión pericial?",
        answer:
          "Sí, es tu derecho solicitar una segunda opinión. De hecho, es recomendable en casos complejos o cuando hay discrepancias entre peritajes.",
      },
    ],
  };

  return <AreaLayout {...areaData}></AreaLayout>;
};

export default InvestigacionPericiaPage;
