export let products = [
  {
    id: 2,
    img: require('../assets/provImgProduct/product4.webp'),
    name: 'Dunlop Arrowmax Cubierta 110/70-17 Gt 601 Fz Ns 200 New Twister Gaona',
    description:
      'Lo que tienes que saber de este productoCantidad de llantas: 1Índice de carga: 54Posición: DelanteraTipo de montaje: Sin cámaraEl ancho de sección es de 110mm.Tiene un diámetro de 17".La relación entre alto y ancho es de 70.Para moto deportiva.Fabricada en Japón.Diseñada para lograr la firmeza que necesitas al conducir.No incluye rin.Apta para motos Sport.',
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
  {
    id: 3,
    img: require('../assets/provImgProduct/product1.webp'),
    name: 'Batería Moto Magna Akt 125 Sl Mf Tt 125 Akt 150 Nkd Yb6.5lb',
    description:
      'Lo que tienes que saber de este productoCantidad de llantas: 1Índice de carga: 54Posición: DelanteraTipo de montaje: Sin cámaraEl ancho de sección es de 110mm.Tiene un diámetro de 17".La relación entre alto y ancho es de 70.Para moto deportiva.Fabricada en Japón.Diseñada para lograr la firmeza que necesitas al conducir.No incluye rin.Apta para motos Sport.',
    characteristics: ['Marca: Magna'],
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
    price: 60000,
    category: 'Vehiculos',
    offer: {
      isOffer: false,
      discount: 0,
    },
  },
];
