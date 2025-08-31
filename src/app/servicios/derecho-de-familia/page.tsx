import AreaLayout from "../../components/AreaLayout";

const DerechoFamiliaPage = () => {
  const areaData = {
    title: "Derecho de Familia",
    subtitle: "Un enfoque humano y legal en los momentos más delicados.",
    heroDescription:
      "Nuestro equipo profesional proporciona una representación integral y efectiva, buscando lograr los mejores resultados posibles para nuestros clientes y sus familias. Nuestro interés que tu seas el ganador",
    services: [
      "Divorcio y separación de cuerpos",
      "Custodia y regímenes de visitas",
      "Pensión de alimentos",
      "División y protección del patrimonio familiar",
      "Violencia familiar y medidas de protección",
    ],
    images: [
      {
        src: "https://www.abogadosasociadosperu.com/images/Casos-que-atiende-un-abogado-especializado-en-familia.jpg",
        alt: "Familia",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Entrevista y evaluación",
        description:
          "Realizamos una entrevista confidencial para entender tu situación y evaluar los riesgos.",
      },
      {
        step: 2,
        title: "Estrategia legal",
        description:
          "Diseñamos la mejor estrategia: conciliación, medidas urgentes o proceso judicial.",
      },
      {
        step: 3,
        title: "Representación y gestión",
        description:
          "Te representamos en audiencias, conciliaciones y gestiones ante el Poder Judicial.",
      },
      {
        step: 4,
        title: "Cumplimiento y seguimiento",
        description:
          "Damos seguimiento al cumplimiento de acuerdos y sentencias.",
      },
    ],
    faqs: [
      {
        question: "¿Es obligatoria la conciliación en familia?",
        answer:
          "Sí, la conciliación es obligatoria en la mayoría de casos de familia. Solo si no hay acuerdo o en casos de violencia familiar se puede proceder directamente al Poder Judicial.",
      },
      {
        question: "¿Cómo se fija el monto de alimentos?",
        answer:
          "El monto se fija considerando las necesidades del alimentista (hijos), la capacidad económica del alimentante y el número de hijos. Se actualiza anualmente según el Índice de Precios al Consumidor.",
      },
      {
        question: "¿Puedo viajar con mi hijo al extranjero?",
        answer:
          "Para viajar al extranjero con tu hijo necesitas autorización del otro progenitor o autorización judicial. Te ayudamos a obtener los permisos necesarios.",
      },
      {
        question: "¿Cómo se divide el patrimonio familiar?",
        answer:
          "En el divorcio, los bienes gananciales se dividen por mitades. Los bienes propios de cada cónyuge permanecen en su poder. Te asesoramos sobre la mejor estrategia de división.",
      },
      {
        question: "¿Qué son las medidas de protección?",
        answer:
          "Las medidas de protección son órdenes judiciales que protegen a víctimas de violencia familiar. Pueden incluir prohibición de acercamiento, desalojo del agresor y custodia temporal.",
      },
      {
        question: "¿Cuánto demora un divorcio?",
        answer:
          "Un divorcio por mutuo acuerdo puede resolverse en 1-2 meses. Un divorcio contencioso puede tomar 6 meses a 2 años dependiendo de la complejidad y el juzgado.",
      },
    ],
  };

  return <AreaLayout {...areaData}></AreaLayout>;
};

export default DerechoFamiliaPage;
