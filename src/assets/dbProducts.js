export let products = [
  {
    id: 1,
    img: require('../assets/provImgProduct/product1.webp'),
    name: 'Soongo Led Gaming Mouse Para Gamer Blanco',
    description:
      'Para trabajar desde casa con la computadora o aprovechar los momentos de ocio, necesitas comodidad y facilidad de movimiento. Con tu Soon Go 8541645613 encuentra eso que buscas en un solo aparato con la mejor tecnología. Apto para fácil traslado Navega rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.',
    characteristics: ['Marca: Soon Go', 'Color: Blanco', 'Tipo: Mouse'],
    paymentAccepted: ['Tarjeta', 'Efectivo'],
    questions: [
      {
        question: 'Pregunta 1',
        answer: 'Respuesta 1',
      },
      {
        question: 'Pregunta 2',
        answer: 'Respuesta 2',
      },
    ],
    comments: [
      {
        user: 'Usuario 1',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
        score: 5,
      },
      {
        user: 'Usuario 2',
        comment: 'Comentario 1',
        score: 5,
      },
    ],
    price: 1000000,
    category: 'Computacion',
    offer: {
      isOffer: false,
      discount: 0,
    },
  },
  {
    id: 2,
    img: require('../assets/provImgProduct/product4.webp'),
    name: 'Productos de IMCOVALLE',
    description:
      'Para trabajar desde casa con la computadora o aprovechar los momentos de ocio, necesitas comodidad y facilidad de movimiento. Con tu Soon Go 8541645613 encuentra eso que buscas en un solo aparato con la mejor tecnología. Apto para fácil traslado Navega rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.',
    characteristics: ['Marca: Dunlop', 'Línea: Arrowmax', 'Tamaño: 110/70-17'],
    paymentAccepted: ['Tarjeta', 'Efectivo'],
    questions: [
      {
        question: 'Pregunta 1',
        answer: 'Respuesta 1',
      },
      {
        question: 'Pregunta 2',
        answer: 'Respuesta 2',
      },
    ],
    comments: [
      {
        user: 'Usuario 1',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
        score: 5,
      },
      {
        user: 'Usuario 2',
        comment: 'Comentario 1',
        score: 5,
      },
    ],
    price: 700000,
    category: 'Vehiculos',
    offer: {
      isOffer: true,
      discount: 20,
    },
  },
];
