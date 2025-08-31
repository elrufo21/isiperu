import AreaLayout from "../../components/AreaLayout";

const DerechoPenalPage = () => {
  const areaData = {
    title: "Derecho Penal",
    subtitle: "Defensa estratégica para proteger tu libertad y reputación.",
    heroDescription:
      "En esta parte del derecho asumimos con empatía, nos encargamos de la asesoría legal, representación en juicio, negociación de acuerdos, investigación del caso, preparación de la estrategia, presentación de pruebas, apelación de sentencias y asistencia en la ejecución de órdenes judiciales.",
    images: [
      {
        src: "https://www.esic.edu/sites/default/files/styles/full/public/2024-05/derecho%20penal.jpeg?itok=PRDSq3QU",
        alt: "Defensa Penal Integral",
      },
    ],
    services: [
      "análisis, manejo y litigo de procesos e investigaciones penales ante la PNP, Ministerio Público y Poder Judicial",
      "diseño y ejecución de la mejor estrategia de defensa para los intereses del cliente",
    ],
    processSteps: [
      {
        step: 1,
        title: "Entrevista urgente",
        description:
          "Realizamos una entrevista inmediata para entender tu caso y evaluar la situación legal.",
      },
      {
        step: 2,
        title: "Análisis estratégico",
        description:
          "Analizamos las carpetas fiscales, evaluamos pruebas y diseñamos la mejor estrategia de defensa.",
      },
      {
        step: 3,
        title: "Patrocinio integral",
        description:
          "Te representamos en todas las diligencias, audiencias y gestiones ante la fiscalía y juzgados.",
      },
      {
        step: 4,
        title: "Control y seguimiento",
        description:
          "Controlamos plazos, presentamos recursos cuando sea necesario y damos seguimiento hasta la resolución.",
      },
    ],
    faqs: [
      {
        question: "¿Debo declarar sin abogado?",
        answer:
          "No es recomendable. Tienes derecho a un abogado defensor desde el inicio de la investigación. Declarar sin asesoría legal puede perjudicar tu caso. Te recomendamos ejercer tu derecho al silencio hasta contar con representación legal.",
      },
      {
        question: "¿Cuánto dura una investigación preliminar?",
        answer:
          "Las investigaciones preliminares típicamente duran entre 3-12 meses, dependiendo de la complejidad del caso. Si la fiscalía no puede probar tu responsabilidad en ese plazo, el caso puede archivarse.",
      },
      {
        question: "¿Qué pasa si incumplo reglas de conducta?",
        answer:
          "El incumplimiento de reglas de conducta puede resultar en la modificación de la medida cautelar, incluso la prisión preventiva. Es crucial cumplir estrictamente todas las condiciones impuestas.",
      },
      {
        question: "¿Puedo conciliar en materia penal?",
        answer:
          "Sí, en algunos delitos es posible la conciliación o terminación anticipada del proceso. Esto puede resultar en la suspensión de la pena o la reducción significativa de la sanción. Te asesoramos sobre las opciones disponibles.",
      },
      {
        question: "¿Qué es la prisión preventiva?",
        answer:
          "La prisión preventiva es una medida cautelar que puede imponerse cuando hay riesgo de fuga, obstaculización de la investigación o peligro para la sociedad. Te ayudamos a argumentar contra su imposición o solicitar su modificación.",
      },
      {
        question: "¿Puedo apelar una sentencia condenatoria?",
        answer:
          "Sí, tienes derecho a apelar una sentencia condenatoria. Los plazos son estrictos (5 días hábiles) y requieren argumentos técnicos sólidos. Te ayudamos a preparar y presentar el recurso de apelación.",
      },
    ],
  };

  return <AreaLayout {...areaData}></AreaLayout>;
};

export default DerechoPenalPage;
