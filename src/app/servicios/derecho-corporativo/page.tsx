import AreaLayout from "../../components/AreaLayout";

const DerechoCorporativoPage = () => {
  const areaData = {
    title: "Derecho Corporativo",
    subtitle:
      "Estructuras legales sólidas para empresas que quieren hacer crecer.",
    heroDescription:
      "Brindamos asesorías en estas áreas operativas, jurídica y financiera de la empresa, logrando tu tranquilidad y estabilidad necesaria para el buen funcionamiento de tu empresa, para que permanezcas y puedas crecer en el mercado competitivo. Tenemos soluciones para cada operación e incorporamos profesionales de otras áreas especializadas (laboral, tributario, regulatorio, entre otras)",
    heroReverse: true,
    images: [
      {
        src: "https://blog.lemontech.com/hubfs/Imported_Blog_Media/derecho-corporativo-peru-pdf-1024x683-1.jpg",
        alt: "Derecho Corporativo",
      },
    ],
    services: [
      "Constitución de empresas y acuerdos de accionistas",
      "Relaciones entre accionistas y responsabilidad de directores",
      "Actas, poderes, aumentos y reducciones de capital",
      "Elaboración y revisión de contratos comerciales",
      "Protocolos familiares y gobierno corporativo",
      "Reorganizaciones corporativas y empresariales",
      "Due diligence y auditorías legales",
      "Fusiones, escisiones y transformaciones",
    ],
    processSteps: [
      {
        step: 1,
        title: "Diagnóstico societario",
        description:
          "Analizamos la estructura actual de tu empresa, identificamos riesgos y oportunidades de mejora.",
      },
      {
        step: 2,
        title: "Diseño de estructura",
        description:
          "Proponemos la estructura societaria óptima, pactos entre socios y gobierno corporativo.",
      },
      {
        step: 3,
        title: "Documentación y formalización",
        description:
          "Elaboramos todos los documentos necesarios y los formalizamos en notaría y SUNARP.",
      },
      {
        step: 4,
        title: "Implementación y seguimiento",
        description:
          "Te acompañamos en la implementación y damos seguimiento para asegurar el cumplimiento.",
      },
    ],
    faqs: [
      {
        question:
          "¿Qué servicios incluyen la constitución y organización de empresas?",
        answer:
          "Asesoramos en la creación de empresas, definición de estatutos, distribución de acciones y estructuración corporativa para proteger sus intereses.",
      },
      {
        question:
          "¿Pueden ayudar en la elaboración de acuerdos entre accionistas?",
        answer:
          "Sí, elaboramos y revisamos acuerdos entre accionistas, asegurando que sus derechos y obligaciones estén claramente definidos.",
      },
      {
        question:
          "¿Qué tipo de contratos y protocolos familiares revisan o elaboran?",
        answer:
          "Revisamos y redactamos contratos societarios, protocolos familiares, contratos de propiedad y cualquier documento legal necesario para proteger su patrimonio.",
      },
      {
        question: "¿Asesoran en reorganizaciones corporativas y visuales?",
        answer:
          "Sí, ofrecemos consultoría en reorganizaciones corporativas, fusiones, adquisiciones y cambios de estructura para optimizar el funcionamiento de su empresa.",
      },
      {
        question:
          "¿Cómo protegen los derechos y responsabilidades de los directores o accionistas?",
        answer:
          "Brindamos asesoría legal para definir responsabilidades, proteger derechos y garantizar el cumplimiento de obligaciones dentro de la empresa.",
      },
    ],
  };

  return <AreaLayout {...areaData}></AreaLayout>;
};

export default DerechoCorporativoPage;
