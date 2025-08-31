import AreaLayout from "../../components/AreaLayout";

const DerechoAdministrativoPage = () => {
  const areaData = {
    title: "Derecho Administrativo",
    subtitle: "Agilizamos trámitas y defensores tus derechos frente al Estado.",

    heroDescription:
      "Te representamos y asesoramos en asuntos legales relacionados con la administración pública, procesos contencioso-administrativos. Nos enfocamos en la protección de los derechos de los ciudadanos frente a la administración, garantizando la legalidad en su actuar y regulando la prestación de servicios públicos. ",
    services: [
      "Obtención de autorizaciones, licencias y permisos ante las entidades publicas",
      "Representación ante los procedimientos administrativos",
      "Procedimientos sancionadores y fiscalizadores ante diversas entidades.",
      "Consultoría general",
      "Análisis de admisibilidad y procedencia de denuncias",
    ],
    images: [
      {
        src: "https://i.ytimg.com/vi/W4SBP4WZiCY/maxresdefault.jpg",
        alt: "Derecho Administrativo 1",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Diagnóstico y análisis",
        description:
          "Revisamos tu expediente, analizamos la normativa aplicable y evaluamos las opciones legales disponibles.",
      },
      {
        step: 2,
        title: "Estrategia legal",
        description:
          "Diseñamos una estrategia personalizada que puede incluir subsanaciones, recursos administrativos o defensa técnica.",
      },
      {
        step: 3,
        title: "Gestión y representación",
        description:
          "Te representamos ante la entidad, presentamos documentación, asistimos a audiencias y damos seguimiento.",
      },
      {
        step: 4,
        title: "Cierre y seguimiento",
        description:
          "Obtenemos la resolución favorable, te entregamos constancias y establecemos un plan de cumplimiento.",
      },
    ],
    faqs: [
      {
        question:
          "¿Qué tipos de autorizaciones, licencias o permisos pueden gestionar?",
        answer:
          "Gestionamos todo tipo de autorizaciones, licencias y permisos ante entidades públicas, incluyendo trámites municipales, sectoriales y administrativos.",
      },
      {
        question:
          "¿Cómo me representan en procedimientos administrativos ante entidades públicas?",
        answer:
          "Nuestros abogados lo representan ante cualquier procedimiento administrativo, asegurando que sus derechos sean defendidos y sus trámites sean gestionados correctamente.",
      },
      {
        question:
          "¿Qué implican los procedimientos sancionadores y fiscalizadores?",
        answer:
          "Le ayudamos a enfrentar procedimientos sancionadores y fiscalizadores, asegurando que cumpla con la normativa y defendiendo sus intereses ante las entidades correspondientes.",
      },
      {
        question:
          "¿Ofrecen consultoría para cualquier tipo de trámite administrativo?",
        answer:
          "Sí, brindamos consultoría integral para cualquier trámite o procedimiento administrativo, resolviendo dudas y optimizando procesos.",
      },
      {
        question:
          "¿Pueden analizar la procedencia de denuncias o quejas en mi contra?",
        answer:
          "Analizamos detalladamente la admisibilidad y procedencia de denuncias, brindándole una estrategia legal adecuada según cada caso.",
      },
    ],
  };

  return <AreaLayout {...areaData}></AreaLayout>;
};

export default DerechoAdministrativoPage;
