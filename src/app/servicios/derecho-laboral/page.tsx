import AreaLayout from "../../components/AreaLayout";

const DerechoLaboralPage = () => {
  const areaData = {
    title: "Derecho Laboral",
    subtitle: "Equilibramos la justicia laboral entre trabajadores y empresas.",
    heroDescription:
      "Nuestro equipo de abogados se encarga que las relaciones laborales se desarrollen de manera justa y conforme a la ley, tanto para los trabajadores como para las empresas. ",
    services: [
      "Discriminación y acoso laboral",
      "Compensación al trabajador y accidentes",
      "Asesoría legal integral para empresas",
      "Despidos y liquidaciones",
      "Tercerización y subcontratación",
      "Inspecciones de SUNAFIL",
      "Implementación de documentos obligatorios",
      "Prevención de riesgos laborales",
    ],
    images: [
      {
        src: "https://cdn-djofm.nitrocdn.com/WjoXHXoHpfBdXZlvPuSfCAvVJQOBuCMC/assets/images/optimized/rev-ded94ac/abogadosconexperiencia.com/wp-content/uploads/AdobeStock_509838763-1260x839.jpeg",
        alt: "Derecho Laboral",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Diagnóstico laboral",
        description:
          "Analizamos tu relación laboral, revisamos documentación y evaluamos la viabilidad del caso.",
      },
      {
        step: 2,
        title: "Estrategia legal",
        description:
          "Diseñamos la mejor estrategia: reposición, indemnización, conciliación o demanda judicial.",
      },
      {
        step: 3,
        title: "Patrocinio y gestión",
        description:
          "Te representamos ante SUNAFIL, Poder Judicial o en procesos de conciliación.",
      },
      {
        step: 4,
        title: "Implementación preventiva",
        description:
          "Para empresas, implementamos sistemas de cumplimiento y prevención de contingencias.",
      },
    ],
    faqs: [
      {
        question: "¿Qué plazo tengo para demandar?",
        answer:
          "Tienes 1 año desde el cese de la relación laboral para demandar. Sin embargo, es recomendable actuar lo antes posible para preservar pruebas y evitar la prescripción de derechos.",
      },
      {
        question: "¿Qué documentos prueban el hostigamiento?",
        answer:
          "Correos electrónicos, mensajes, testigos, grabaciones (con autorización), reportes médicos por estrés laboral, y cualquier evidencia del trato hostil. Te ayudamos a recopilar las pruebas más sólidas.",
      },
      {
        question: "¿SUNAFIL puede multar a mi empresa?",
        answer:
          "Sí, SUNAFIL puede imponer multas desde 1 UIT hasta 100 UIT dependiendo de la infracción. También puede ordenar la reposición de trabajadores o el pago de beneficios adeudados.",
      },
      {
        question: "¿Cómo se calcula una indemnización?",
        answer:
          "La indemnización incluye: beneficios sociales (CTS, vacaciones, gratificaciones), indemnización por despido arbitrario (1.5 sueldos por año), y daños morales si aplica. Te damos un cálculo detallado.",
      },
      {
        question: "¿Puedo trabajar en otra empresa mientras litigo?",
        answer:
          "Sí, puedes trabajar en otra empresa mientras litigas. Esto no afecta tu derecho a la reposición o indemnización por el despido anterior.",
      },
      {
        question: "¿Qué documentos obligatorios debe tener mi empresa?",
        answer:
          "Reglamento interno de trabajo, plan de prevención de riesgos laborales, reglamento de seguridad y salud en el trabajo, y políticas contra el acoso y discriminación. Te ayudamos a implementarlos.",
      },
    ],
  };

  return <AreaLayout {...areaData}></AreaLayout>;
};

export default DerechoLaboralPage;
