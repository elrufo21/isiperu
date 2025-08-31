import AreaLayout from "../../components/AreaLayout";

const SaneamientoPrediosPage = () => {
  const areaData = {
    title: "Saneamiento de Predios y Titulación",
    subtitle: "Formaliza tu propiedad y asegura tu inversión.",
    heroDescription:
      "Nuestro equipo multidisciplinario está preparado para tomar acciones y procesos legales que buscan regularizar la situación jurídica de un terreno o inmueble, asegurando su correcta inscripción en los registros públicos y la protección de los derechos de propiedad.",
    services: [
      "Soluciones prácticas e integrales y técnica en las transferencias de bienes inmuebles para empresas y personas naturales ",
      "Procesos legales y de gestión relacionados con predios; adquisición de terrenos, la obtención de licencias urbanísticas, y la resolución de conflictos legales relacionados con la propiedad y el uso del suelo",
      "Asesoramos en la elaboración y ejecución de estrategias orientadas al saneamiento de terrenos rústicos, eríazos y urbanos.",
      "Verificación de titularidad e inmatriculación y desmembración de tierras (estudio de títulos)",
      "Declaración de verdadero propietario",
      "Superposición total o parcial de propiedades",
      "Rectificación de linderos",
      "Prescripción adquisitiva de dominio",
      "Duplicidad de partidas",
      "Habilitaciones urbanas u otros.",
      "Elaboración de informe técnico sobre la situación de los terrenos y la existencia de defectos (superposiciones, rectificaciones, falta de incorporación en base gráfica, etc.).",
      "Acompañamiento en toda la gestión legal y notarial hasta la inscripción del predio en Registros Públicos y su entrega física.",
    ],
    images: [
      {
        src: "https://ilcj.edu.pe/wp-content/uploads/2022/06/El-saneamiento-fisico-legal-de-predios-en-Peru-definicion-y-ventajas-1024x538.jpg",
        alt: "Saneamiento físico-legal de predios en Perú",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Estudio de títulos",
        description:
          "Revisamos títulos, partidas registrales y verificamos la situación catastral del predio.",
      },
      {
        step: 2,
        title: "Estrategia de saneamiento",
        description:
          "Diseñamos la estrategia: rectificación, prescripción, saneamiento físico-legal o declaración de dominio.",
      },
      {
        step: 3,
        title: "Gestión técnica y legal",
        description:
          "Elaboramos planos, gestionamos peritajes, subsanamos observaciones y tramitamos ante notarías y municipalidades.",
      },
      {
        step: 4,
        title: "Inscripción y entrega",
        description:
          "Gestionamos la inscripción en SUNARP y te entregamos la partida registral actualizada.",
      },
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre saneamiento físico y legal?",
        answer:
          "El saneamiento físico corrige problemas de linderos, planos y mediciones. El saneamiento legal resuelve problemas de titularidad, sucesiones y derechos de propiedad. Ambos son necesarios para una propiedad completamente regularizada.",
      },
      {
        question: "¿Cuándo procede la prescripción adquisitiva?",
        answer:
          "La prescripción adquisitiva procede cuando has poseído un bien inmueble de manera pacífica, continua y pública por 10 años (con justo título) o 20 años (sin justo título). Te asesoramos sobre la viabilidad de tu caso.",
      },
      {
        question: "¿Qué hacer ante duplicidad de partidas?",
        answer:
          "La duplicidad de partidas es un problema grave que requiere investigación histórica y gestión ante SUNARP. Identificamos la partida correcta y gestionamos la cancelación de la duplicada.",
      },
      {
        question: "¿Qué entidad corrige los linderos?",
        answer:
          "Los linderos se corrigen ante la municipalidad provincial (gerencia de desarrollo urbano) o ante SUNARP, dependiendo de si es un problema catastral o registral. Te guiamos en el trámite correcto.",
      },
      {
        question: "¿Cuánto cuesta un saneamiento completo?",
        answer:
          "Los costos varían según la complejidad. Incluyen honorarios legales, costos técnicos (planos, peritajes) y tasas. Te damos un presupuesto detallado y opciones de pago flexibles.",
      },
      {
        question: "¿Puedo vender mi propiedad sin saneamiento?",
        answer:
          "Técnicamente sí, pero es muy riesgoso. El comprador puede rechazar la compra o exigir un descuento significativo. Es mejor sanearla antes para maximizar su valor comercial.",
      },
    ],
  };

  return <AreaLayout {...areaData}></AreaLayout>;
};

export default SaneamientoPrediosPage;
