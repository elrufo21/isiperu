import AreaLayout from "../../components/AreaLayout";

const DerechoInmobiliarioPage = () => {
  const areaData = {
    title: "Derecho Inmobiliario",
    subtitle: "Protegemos cada paso de tus inversiones inmobiliarias.",
    heroDescription:
      "Somos pioneros en impulsar el desarrollo inmobiliario en la selva central, y en el país, asimismo somos reconocidos por nuestra amplia experiencia en proyectos de habilitaciones urbanas y saneamiento integral.",
    services: [
      "Asesoría integral para el saneamiento físico-legal de inmuebles y otras diligencias de regularización registral y/o municipal",
      "Contratos inmobiliarios (compraventa, arrendamiento, comunidad, construcción, garantías inmobiliarias, entre otros)",
      "Asesoría y acompañamiento en construcción de proyectos",
      "Elaboración de estudios sobre la titulación y obtención de licencias de edificación.",
      "Estudios de diagnóstico y saneamiento técnico  legal de derechos prediales",
      "Experiencia en el desarrollo de operaciones inmobiliarias",
      "Marketing inmobiliario",
      "Diseño y desarrollo de proyectos inmobiliarios",
    ],
    images: [
      {
        src: "https://www.unir.net/wp-content/uploads/2020/04/inmo.jpg",
        alt: "",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Due diligence integral",
        description:
          "Realizamos un estudio completo de la propiedad: titularidad, cargas, licencias y situación legal.",
      },
      {
        step: 2,
        title: "Estructuración legal",
        description:
          "Diseñamos la estructura contractual, garantías y mecanismos de protección para tu operación.",
      },
      {
        step: 3,
        title: "Gestión administrativa",
        description:
          "Tramitamos licencias, regularizaciones y gestionamos ante municipalidades y SUNARP.",
      },
      {
        step: 4,
        title: "Cierre y seguimiento",
        description:
          "Cerramos la operación y damos seguimiento post-venta para asegurar el cumplimiento.",
      },
    ],
    faqs: [
      {
        question: "¿Qué revisar antes de comprar un inmueble?",
        answer:
          "Debes revisar: titularidad en SUNARP, cargas y gravámenes, licencias de construcción, planos catastrales, certificados municipales y situación de servicios básicos. Te ayudamos con una verificación integral.",
      },
      {
        question: "¿Cómo asegurar la entrega en obra?",
        answer:
          "Para asegurar la entrega en obra, el contrato debe incluir: especificaciones técnicas detalladas, cronograma con penalidades, garantías de cumplimiento y mecanismos de recepción. Te ayudamos a estructurar contratos robustos.",
      },
      {
        question: "¿Qué licencias necesito para construir?",
        answer:
          "Depende del tipo de obra: licencia de edificación, licencia de habilitación urbana, licencia de funcionamiento (si aplica) y autorizaciones sectoriales. Te asesoramos sobre todas las licencias necesarias.",
      },
      {
        question: "¿Cómo se constituyen garantías inmobiliarias?",
        answer:
          "Las garantías inmobiliarias se constituyen mediante escritura pública e inscripción en SUNARP. Pueden ser hipotecas, prendas o anticresis. Te ayudamos a elegir la garantía más adecuada para tu caso.",
      },
      {
        question: "¿Qué es el due diligence inmobiliario?",
        answer:
          "Es un estudio integral que evalúa todos los aspectos legales, técnicos y comerciales de una propiedad. Incluye verificación de titularidad, cargas, licencias, planos y situación legal. Te ofrecemos due diligence completo.",
      },
      {
        question: "¿Puedo vender una propiedad con observaciones?",
        answer:
          "Sí, pero es muy riesgoso. El comprador puede rechazar la compra o exigir un descuento significativo. Es mejor resolver las observaciones antes para maximizar el valor de la propiedad.",
      },
    ],
  };

  return <AreaLayout {...areaData}></AreaLayout>;
};

export default DerechoInmobiliarioPage;
