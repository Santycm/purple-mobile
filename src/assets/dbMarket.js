export let dbMarket = [
  {
    userName: 'admin',
    addres: 'Calle 123',
    birthDate: '19/08/2000',
    country: 'Colombia',
    department: 'Antioquia',
    city: 'Medellin',
    email: 'adminuser@gmail.com',
    password: '123.Abc',
    name: 'Santiago',
    lastName: 'Castaño Moreno',
    products: [
      {
        id: 1,
        img: require('../assets/provImgProduct/product4.webp'),
        name: 'Dunlop Arrowmax Cubierta 110/70-17 Gt 601 Fz Ns 200 New Twister Gaona',
        description:
          'Lo que tienes que saber de este productoCantidad de llantas: 1Índice de carga: 54Posición: DelanteraTipo de montaje: Sin cámaraEl ancho de sección es de 110mm.Tiene un diámetro de 17".La relación entre alto y ancho es de 70.Para moto deportiva.Fabricada en Japón.Diseñada para lograr la firmeza que necesitas al conducir.No incluye rin.Apta para motos Sport.',
        characteristics: [
          'Marca: Dunlop',
          'Línea: Arrowmax',
          'Tamaño: 110/70-17',
        ],
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
        id: 2,
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
    ],
    purchases: [
      {
        id: 1,
        product:
          'Dunlop Arrowmax Cubierta 110/70-17 Gt 601 Fz Ns 200 New Twister Gaona',
        date: '2021-09-01',
        price: 700000,
        paymentMethod: 'Tarjeta',
      },
    ],
  },
  {
    userName: 'admin2',
    addres: 'Calle 123',
    birthDate: '19/08/2000',
    country: 'Colombia',
    department: 'Antioquia',
    city: 'Medellin',
    email: 'adminuser2@gmail.com',
    password: '123.Abc',
    name: 'Alex',
    lastName: 'Munera',
    products: [
      {
        id: 3,
        img: require('../assets/provImgProduct/charol.webp'),
        name: 'Sartén Farberware Eco Advantage 25cm Antiadherente',
        description:
          'Cocina con amor, cocina con Farberware Y ayuda al planeta, preparando comidas deliciosas y saludables con esta conveniente Sartén Antiadherente Cerámico 25cm Farberware Eco Advantage.',
        characteristics: [
          'Marca: Farberware',
          'Línea: EcoAdvantage',
          'Tamaño: 29 cm x 45.72 cm',
        ],
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
        price: 67400,
        category: 'Hogar',
        offer: {
          isOffer: true,
          discount: 20,
        },
      },
      {
        id: 4,
        img: require('../assets/provImgProduct/silla.webp'),
        name: 'Silla Escritorio Ergonomica Magnux MX2015',
        description:
          'Lo que tienes que saber de este producto Unidades por pack: 1Material del tapizado: MeshConfortable y duradera.Cómodos apoyabrazos.Con ruedas.Giratoria.Material del relleno: espuma.',
        characteristics: ['Marca: Magnux', 'Línea: Secretarial'],
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
        price: 67400,
        category: 'Hogar',
        offer: {
          isOffer: false,
          discount: 0,
        },
      },
    ],
    purchases: [
      {
        id: 1,
        product:
          'Dunlop Arrowmax Cubierta 110/70-17 Gt 601 Fz Ns 200 New Twister Gaona',
        date: '2021-09-01',
        price: 700000,
        paymentMethod: 'Tarjeta',
      },
    ],
  },
];

