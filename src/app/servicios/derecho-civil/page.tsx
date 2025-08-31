import AreaLayout from "../../components/AreaLayout";

const DerechoCivilPage = () => {
  const areaData = {
    title: "Derecho Civil",
    subtitle: "Seguridad y respiro jurídico para tu vida diaria.",
    heroDescription:
      "Profesionales especializados que se encargan de prestar asistencia en todas las prácticas de esta rama del derecho, protegemos tus derechos, con lealtad y la ética profesional que es de tu interés.",
    services: [
      "Propiedad y Derechos Reales sobre Bienes",
      "Contratos y Negocios Jurídicos",
      "Sucesiones y Herencias",
      "Obligaciones y Responsabilidad Contractual",
      "Actos Jurídicos y su Validez",
      "Responsabilidad Civil y Reparación de Daños",
      "Derechos Reales y Propiedad Registral",
      "Derecho de las Personas y Estado Civil",
      "Derecho Procesal Civil y Litigios Judiciales",
    ],
    images: [
      {
        src: "https://i0.wp.com/fc-abogados.com/wp-content/uploads/2020/08/unnamed.png",
        alt: "Descripción de la imagen 1",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Revisión y análisis",
        description:
          "Analizamos tu caso, revisamos documentación y evaluamos las opciones legales disponibles.",
      },
      {
        step: 2,
        title: "Estrategia legal",
        description:
          "Diseñamos la mejor estrategia: negociación, conciliación, mediación o demanda judicial.",
      },
      {
        step: 3,
        title: "Patrocinio y gestión",
        description:
          "Te representamos legalmente, gestionamos pruebas y te acompañamos en audiencias.",
      },
      {
        step: 4,
        title: "Resolución y seguimiento",
        description:
          "Obtenemos la resolución favorable y te ayudamos con la ejecución si es necesario.",
      },
    ],
    faqs: [
      {
        question: "¿Conviene conciliar antes de demandar?",
        answer:
          "Sí, la conciliación es obligatoria en la mayoría de casos civiles y puede resolver tu problema más rápido y económicamente. Solo si no hay acuerdo procedemos a la vía judicial.",
      },
      {
        question: "¿Qué pruebas son más relevantes en un juicio civil?",
        answer:
          "Las pruebas documentales (contratos, recibos, correspondencia) son fundamentales. También son importantes las declaraciones de testigos y peritajes cuando sea necesario. Te ayudamos a recopilar las pruebas más sólidas.",
      },
      {
        question: "¿Cuánto demora un proceso civil?",
        answer:
          "Un proceso civil típico toma entre 6 meses y 2 años, dependiendo de la complejidad, el juzgado y si hay apelaciones. Te damos cronogramas realistas para tu caso específico.",
      },
      {
        question: "¿Puedo asegurar bienes antes del juicio?",
        answer:
          "Sí, puedes solicitar medidas cautelares como embargos preventivos para asegurar que el demandado no disponga de sus bienes antes de la sentencia. Te asesoramos sobre las opciones disponibles.",
      },
      {
        question: "¿Qué pasa si el demandado no paga la sentencia?",
        answer:
          "Si el demandado no cumple voluntariamente, iniciamos un proceso de ejecución que puede incluir embargo de bienes, retención de sueldo o inscripción en centrales de riesgo. Te acompañamos en todo el proceso.",
      },
      {
        question: "¿Puedo demandar sin abogado?",
        answer:
          "En algunos casos simples puedes representarte personalmente, pero no es recomendable. Un abogado especializado aumenta significativamente tus posibilidades de éxito y puede ahorrarte tiempo y dinero.",
      },
    ],
  };

  return <AreaLayout {...areaData} />;
};

export default DerechoCivilPage;
