export const siteConfig = {
  branding: {
    name: "PanMas",
    tagline: "El arte de la paciencia en cada hogaza",
    primaryColor: "#4A3728", // Deep Crust Brown
    accentColor: "#D4A373", // Golden Wheat
    backgroundColor: "#F9F7F2", // Creamy Flour
    typography: {
      heading: "'Playfair Display', serif",
      body: "'Inter', sans-serif",
    },
  },
  hero: {
    images: [
      "img/M1.jpeg",
      "img/M2.jpeg",
      "img/M3.jpeg",
      
    ],
    animatedTexts: [
      "El arte de la paciencia en cada hogaza.",
      "Fermentación natural de 24 horas.",
      "Tradición que puedes oler y saborear.",
    ],
  },
  about: {
    slides: [
      {
        id: 1,
        image: "img/M1.jpeg",
        text: "Ingredientes Puros: Solo agua, harina y sal.",
      },
      {
        id: 2,
        image: "img/M2.jpeg",
        text: "Tiempo y Cuidado: 24 horas de reposo natural.",
      },
      {
        id: 3,
        image: "img/M3.jpeg",
        text: "Sabor Ancestral: La corteza perfecta existe.",
      },
    ],
  },
  products: [
    {
      id: "sourdough-bread",
      name: "Sourdough Bread",
      nameEs: "Pan de Masa Madre",
      description: "Nuestro pan estrella. Fermentación natural de 24 horas con masa madre cultivada artesanalmente.",
      price: 85,
      currency: "MXN",
      image: "img/M4.jpeg",
    },
    {
      id: "baguette",
      name: "Baguette",
      nameEs: "Baguette Tradicional",
      description: "Corteza crujiente y miga aireada. La auténtica baguette francesa horneada a diario.",
      price: 65,
      currency: "MXN",
      image: "img/M5.jpeg",
    },
    {
      id: "focaccia",
      name: "Focaccia",
      nameEs: "Focaccia Artesanal",
      description: "Aceite de oliva extra virgen, sal marina y hierbas frescas. Un viaje a Italia en cada bocado.",
      price: 95,
      currency: "MXN",
      image: "img/M6.jpeg",
    },
  ],
  bakery: {
    name: "PanMas Bakery",
    address: "Calle de la Levadura #45, CDMX",
    phone: "55-9876-5432",
  },
};

