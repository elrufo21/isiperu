import { NavigationItem } from "../types/menu";

export const navigationConfig: NavigationItem[] = [
  {
    href: "/",
    label: "Inicio",
    match: (p: string) => p === "/",
    hasSubmenu: false,
  },
  /*
  {
    href: "/propiedades",
    label: "Propiedades",
    match: (p: string) => p.startsWith("/propiedades"),
    hasSubmenu: true,
    columns: 3,
    submenu: [
      {
        columns: [
          {
            items: [
              {
                href: "/propiedades/casas",
                label: "Casas",
                description: "Casas unifamiliares",
              },
              {
                href: "/propiedades/departamentos",
                label: "Departamentos",
                description: "Apartamentos modernos",
              },
              {
                href: "/propiedades/terrenos",
                label: "Terrenos",
                description: "Lotes para construcción",
              },
            ],
          },
          {
            items: [
              {
                href: "/propiedades/locales",
                label: "Locales",
                description: "Espacios comerciales",
              },
              {
                href: "/propiedades/oficinas",
                label: "Oficinas",
                description: "Espacios de trabajo",
              },
              {
                href: "/propiedades/bodegas",
                label: "Bodegas",
                description: "Almacenes y depósitos",
              },
            ],
          },
          {
            items: [
              {
                href: "/propiedades/terrenos-agricolas",
                label: "Terrenos Agrícolas",
                description: "Para cultivo y ganadería",
              },
              {
                href: "/propiedades/proyectos",
                label: "Proyectos",
                description: "Desarrollos inmobiliarios",
              },
            ],
          },
        ],
      },
    ],
  },
*/
  {
    href: "servicios",
    label: "Servicios",
    match: (p: string) => p.startsWith("/servicios"),
    hasSubmenu: true,
    columns: 4,
    submenu: [
      {
        columns: [
          {
            items: [
              {
                href: "/servicios/derecho-administrativo",
                label: "Derecho Administrativo",
              },
              {
                href: "/servicios/derecho-corporativo",
                label: "Derecho Corporativo",
              },
              {
                href: "/servicios/derecho-civil",
                label: "Derecho Civil",
              },
            ],
          },
          {
            items: [
              {
                href: "/servicios/derecho-penal",
                label: "Derecho Penal",
              },
              {
                href: "/servicios/derecho-laboral",
                label: "Derecho Laboral",
              },
              {
                href: "/servicios/saneamiento-predios-titulacion",
                label: "Saneamiento de Predios",
              },
            ],
          },
          {
            items: [
              {
                href: "/servicios/derecho-de-familia",
                label: "Derecho de Familia",
              },
              {
                href: "/servicios/derecho-inmobiliario",
                label: "Derecho Inmobiliario",
              },
              {
                href: "/servicios/proyectos-infraestructura",
                label: "Proyectos e Infraestructura",
              },
            ],
          },
          {
            items: [
              {
                href: "/servicios/investigacion-y-pericia",
                label: "Investigación y Pericia",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    href: "/nosotros",
    label: "Nosotros",
    match: (p: string) => p.startsWith("/nosotros"),
    hasSubmenu: true,
    columns: 1,
    submenu: [
      {
        columns: [
          {
            items: [
              {
                href: "/nosotros",
                label: "Historia",
                description: "Quienes somos",
              },
              {
                href: "/nosotros/equipo",
                label: "Equipo",
                description: "Profesionales expertos",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    href: "/contacto",
    label: "Contacto",
    match: (p: string) => p.startsWith("/contacto"),
    hasSubmenu: false,
  },
];
