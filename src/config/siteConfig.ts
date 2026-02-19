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
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-freshly-baked-bread-2321-large.mp4",
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
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
        text: "Ingredientes Puros: Solo agua, harina y sal.",
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
        text: "Tiempo y Cuidado: 24 horas de reposo natural.",
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1608198093002-ed4e0036ece1?w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    },
    {
      id: "baguette",
      name: "Baguette",
      nameEs: "Baguette Tradicional",
      description: "Corteza crujiente y miga aireada. La auténtica baguette francesa horneada a diario.",
      price: 65,
      currency: "MXN",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
    },
    {
      id: "focaccia",
      name: "Focaccia",
      nameEs: "Focaccia Artesanal",
      description: "Aceite de oliva extra virgen, sal marina y hierbas frescas. Un viaje a Italia en cada bocado.",
      price: 95,
      currency: "MXN",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    },
  ],
  bakery: {
    name: "PanMas Bakery",
    address: "Calle de la Levadura #45, CDMX",
    phone: "55-9876-5432",
  },
};

