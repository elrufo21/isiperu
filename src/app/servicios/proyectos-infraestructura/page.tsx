import AreaLayout from "../../components/AreaLayout";

const ProyectosInfraestructuraPage = () => {
  const areaData = {
    title: "Proyectos e Infraestructura",
    subtitle:
      "Integramos lo técnico y lo legal para ejecutar proyectos con menos riesgos y mejores plazos.",
    heroDescription:
      "En esta área los estudios y desarrollo de los trabajos son en etapas según las exigencias del cliente, pueden ser sistemas de seguridad, contraincendios, sistema de electrificación entre otros.",
    services: [
      "Diseño y desarrollo de proyectos inmobiliarios",
      "Desarrollo completo de construcción, desde cero hasta su finalización",
      "Uso de tecnología avanzada y precisa para mejores resultados",
      "Servicio técnico con equipos de topografía, imagen dron, otros",
      "Elaboración de planos",
      "Acompañamiento legal integral en proyectos de infraestructura y servicios.",
      "Estudio de suelos y estructural.",
    ],
    images: [
      {
        src: "https://escueladerecho.pucp.edu.pe/wp-content/uploads/2024/02/Foto-Thumbnail-Derecho-Infraestructura-2025.png",
        alt: "",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Prefactibilidad y due diligence",
        description:
          "Evaluamos la viabilidad técnica, legal y económica del proyecto, identificando riesgos y oportunidades.",
      },
      {
        step: 2,
        title: "Ingeniería básica y tramitología",
        description:
          "Desarrollamos planos, especificaciones técnicas y gestionamos todas las licencias y permisos necesarios.",
      },
      {
        step: 3,
        title: "Ejecución y control de calidad",
        description:
          "Acompañamos la ejecución con supervisión técnica, control de calidad y gestión de contratistas.",
      },
      {
        step: 4,
        title: "Cierre y postventa",
        description:
          "Realizamos la recepción técnica, entregamos documentación final y damos seguimiento postventa.",
      },
    ],
    faqs: [
      {
        question: "¿Qué permisos necesito según el tipo de obra?",
        answer:
          "Depende del tipo y tamaño de la obra: licencia de edificación, licencia de habilitación urbana, autorización de defensa civil, autorizaciones sectoriales (agua, electricidad, gas) y permisos ambientales si aplica. Te asesoramos sobre todos los permisos necesarios.",
      },
      {
        question: "¿Cómo gestionan las inspecciones?",
        answer:
          "Coordinar las inspecciones técnicas con las autoridades competentes, preparamos la documentación necesaria, acompañamos durante las visitas y gestionamos la aprobación de cada fase del proyecto.",
      },
      {
        question: "¿Qué cobertura tiene el seguimiento post-entrega?",
        answer:
          "Ofrecemos seguimiento post-entrega por 6 meses, incluyendo revisión de garantías, resolución de problemas de funcionamiento y asesoría sobre mantenimiento preventivo.",
      },
      {
        question: "¿Cómo se manejan adendas y adicionales?",
        answer:
          "Evaluamos la necesidad de adendas y adicionales, preparamos la documentación técnica y legal, gestionamos su aprobación y actualizamos presupuestos y cronogramas.",
      },
      {
        question: "¿Qué estudios técnicos son obligatorios?",
        answer:
          "Estudios de suelos, estudios estructurales, planos de instalaciones, planos de seguridad y evacuación, y estudios de impacto ambiental para proyectos grandes. Te asesoramos sobre los estudios específicos para tu proyecto.",
      },
      {
        question: "¿Cómo aseguran el cumplimiento normativo?",
        answer:
          "Mantenemos actualizados con todas las normativas vigentes, revisamos la documentación técnica para asegurar el cumplimiento y gestionamos las aprobaciones ante las autoridades competentes.",
      },
    ],
  };

  return <AreaLayout {...areaData}></AreaLayout>;
};

export default ProyectosInfraestructuraPage;
