export let dbMarket = [
  {
    userName: 'admin',
    address: 'Calle 123',
    birthDate: '19/08/2000',
    country: 'Colombia',
    department: 'Antioquia',
    city: 'Medellin',
    email: 'adminuser@gmail.com',
    password: '123.Abc',
    name: 'Santiago',
    lastName: 'Castaño Moreno',
    products: [
      //Vehicles
      {
        id: 1,
        img: 'https://http2.mlstatic.com/D_NQ_NP_633883-MLU77488828943_072024-O.webp',
        name: 'Dunlop Arrowmax Cubierta 110/70-17 Gt 601 Fz Ns 200 New Twister Gaona',
        description:
          'Lo que tienes que saber de este productoCantidad de llantas: 1Índice de carga: 54Posición: DelanteraTipo de montaje: Sin cámaraEl ancho de sección es de 110mm.Tiene un diámetro de 17".La relación entre alto y ancho es de 70.Para moto deportiva.Fabricada en Japón.Diseñada para lograr la firmeza que necesitas al conducir.No incluye rin.Apta para motos Sport.',
        features: ['Marca: Dunlop', 'Línea: Arrowmax', 'Tamaño: 110/70-17'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
          {
            id: 2,
            user: 'Usuario 2',
            question: 'Pregunta 2',
            answer: 'Respuesta 2',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            score: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 2',
            score: 5,
          },
        ],
        price: 250000, // Precio actualizado
        category: 'Vehiculos',
        offer: {
          isOffer: true,
          discount: 20,
          priceInOffer: 200000, // Precio en oferta actualizado
        },
        status: 'No disponible',
      },
      {
        id: 2,
        img: 'https://http2.mlstatic.com/D_NQ_NP_662540-MCO69340205934_052023-O.webp',
        name: 'Batería Moto Magna Akt 125 Sl Mf Tt 125 Akt 150 Nkd Yb6.5lb',
        description:
          'Lo que tienes que saber de este productoCantidad de llantas: 1Índice de carga: 54Posición: DelanteraTipo de montaje: Sin cámaraEl ancho de sección es de 110mm.Tiene un diámetro de 17".La relación entre alto y ancho es de 70.Para moto deportiva.Fabricada en Japón.Diseñada para lograr la firmeza que necesitas al conducir.No incluye rin.Apta para motos Sport.',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 120000, // Precio actualizado
        category: 'Vehiculos',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 3,
        img: 'https://http2.mlstatic.com/D_Q_NP_882772-MCO70175166128_062023-P.webp',
        name: 'Maletero Spartan 45lt Espaldar Tipo Shad Givi No Aluminio',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 180000, // Precio actualizado
        category: 'Vehiculos',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 4,
        img: 'https://http2.mlstatic.com/D_NQ_NP_633883-MLU77488828943_072024-O.webp',
        name: 'Llanta Compasal Blazer HP 215/65R16 98 H',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 220000, // Precio actualizado
        category: 'Vehiculos',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 5,
        img: 'https://http2.mlstatic.com/D_NQ_NP_666005-MLU78588134485_082024-O.webp',
        name: 'Intercomunicador Bluetooth T-com Vb 800mts Radiofm Freedconn',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 150000, // Precio actualizado
        category: 'Vehiculos',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },

      {
        id: 6,
        img: 'https://http2.mlstatic.com/D_Q_NP_700058-MLU78449018987_082024-P.webp',
        name: 'Cámara de seguridad Tapo link C200 Ip Wifi Robótica, Full Hd / Audio, Tapo C200 Color Blanco',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 150000, // Precio actualizado
        category: 'Hogar',
        offer: {
          isOffer: true,
          discount: 20,
          priceInOffer: 120000, // Precio en oferta actualizado
        },
        status: 'Disponible',
      },
      {
        id: 7,
        img: 'https://http2.mlstatic.com/D_NQ_NP_649426-MLU74140626571_012024-O.webp',
        name: 'Silla Escritorio Ergonomica Sillon Oficina Giratoria Ejecutiva Secretarial Pc Computador Femmto',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 250000, // Precio actualizado
        category: 'Hogar',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 8,
        img: 'https://http2.mlstatic.com/D_NQ_NP_815957-MLU78300742283_082024-O.webp',
        name: 'Colchón Emma Hybrid Lite Doble | Comodidad y Ergonomía | Espumas y Resortes',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 1200000, // Precio actualizado
        category: 'Hogar',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 9,
        img: 'https://http2.mlstatic.com/D_NQ_NP_628333-MLU75458098246_042024-O.webp',
        name: 'Sofacama Sion En Tela Patas En Pino Color Gris',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 800000, // Precio actualizado
        category: 'Hogar',
        offer: {
          isOffer: true,
          discount: 20,
          priceInOffer: 640000, // Precio en oferta actualizado
        },
        status: 'Disponible',
      },
      {
        id: 10,
        img: 'https://http2.mlstatic.com/D_NQ_NP_761235-MLU76398041626_052024-O.webp',
        name: 'Escritorio Tu Home Office 120 Wengue Y Ceniza',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 300000, // Precio actualizado
        category: 'Hogar',
        offer: {
          isOffer: true,
          discount: 20,
          priceInOffer: 240000, // Precio en oferta actualizado
        },
        status: 'Disponible',
      },

      {
        id: 11,
        img: 'https://http2.mlstatic.com/D_NQ_NP_812184-CBT75862801784_042024-O.webp',
        name: 'Kit De Dentista Para Muñecas Epoch Sylvanian Families',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 60000,
        category: 'Juegos',
        offer: {
          isOffer: true,
          discount: 20,
          priceInOffer: 48000,
        },
        status: 'Disponible',
      },
      {
        id: 12,
        img: 'https://http2.mlstatic.com/D_NQ_NP_790306-MCO72903944557_112023-O.webp',
        name: 'Mini Brands Paquete De 2 De Zuru Mini Coleccionables',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 60000,
        category: 'Juegos',
        offer: {
          isOffer: true,
          discount: 20,
          priceInOffer: 48000,
        },
        status: 'Disponible',
      },
      {
        id: 13,
        img: 'https://http2.mlstatic.com/D_NQ_NP_692700-MLA75289105449_032024-O.webp',
        name: 'Juego De Mesa Monopoly Knockout Hasbro F8995',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 60000,
        category: 'Juegos',
        offer: {
          isOffer: true,
          discount: 20,
          priceInOffer: 48000,
        },
        status: 'Disponible',
      },
      {
        id: 14,
        img: 'https://http2.mlstatic.com/D_NQ_NP_767785-MCO72808206833_112023-O.webp',
        name: 'Camioneta Todoterreno Électrica Montable Niños Niñas Campero',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 60000,
        category: 'Juegos',
        offer: {
          isOffer: true,
          discount: 20,
          priceInOffer: 48000,
        },
        status: 'Disponible',
      },
      {
        id: 15,
        img: 'https://http2.mlstatic.com/D_NQ_NP_800021-MCO72368297969_102023-O.webp',
        name: 'Carro Control Remoto Convierte En Robot Transformers Recarga',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 60000,
        category: 'Juegos',
        offer: {
          isOffer: true,
          discount: 20,
          priceInOffer: 48000,
        },
        status: 'Disponible',
      },

      {
        id: 16,
        img: 'https://http2.mlstatic.com/D_NQ_NP_863506-MLA52222751173_102022-O.webp',
        name: 'Cubierta Empotrable De Inducción 4 Zonas Electrolux Etii60f7 Color Negro 220V',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 120000,
        category: 'Electrodomesticos',
        offer: {
          isOffer: true,
          discount: 20,
          priceInOffer: 96000,
        },
        status: 'Disponible',
      },
      {
        id: 17,
        img: 'https://http2.mlstatic.com/D_NQ_NP_839008-MLU75359062909_032024-O.webp',
        name: 'Parrilla a gas Haceb COCINETA AR GAS-2 GP negro',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 150000,
        category: 'Electrodomesticos',
        offer: {
          isOffer: true,
          discount: 20,
          priceInOffer: 120000,
        },
        status: 'Disponible',
      },
      {
        id: 18,
        img: 'https://http2.mlstatic.com/D_NQ_NP_631329-MLU78321682798_082024-O.webp',
        name: 'Extensión Luces-bombillas Para Espejo Tocador Hollywood',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 30000,
        category: 'Electrodomesticos',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 19,
        img: 'https://http2.mlstatic.com/D_NQ_NP_748339-MLA31116968106_062019-O.webp',
        name: 'Lampara Led High Power 20w E-27 6500k Luz Fria',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 25000,
        category: 'Electrodomesticos',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 20,
        img: 'https://http2.mlstatic.com/D_NQ_NP_673020-MCO71609922999_092023-O.webp',
        name: 'Interruptor 5 Botones, 3vel Para Campana Extractora Mabe',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 40000,
        category: 'Electrodomesticos',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },

      {
        id: 21,
        img: 'https://http2.mlstatic.com/D_NQ_NP_733270-MLA79307609394_092024-O.webp',
        name: 'Xiaomi Redmi Note 13 4G Dual SIM 256 GB negro 8 GB RAM',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 1200000,
        category: 'Celulares',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 22,
        img: 'https://http2.mlstatic.com/D_NQ_NP_737369-MLU78214933176_082024-O.webp',
        name: 'Xiaomi Redmi 13C Dual SIM 128 GB navy blue 4 GB RAM',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 800000,
        category: 'Celulares',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 23,
        img: 'https://http2.mlstatic.com/D_NQ_NP_737369-MLU78214933176_082024-O.webp',
        name: 'Nokia 8 V 5g Uw Ta-1257 6gb 64gb',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 900000,
        category: 'Celulares',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 24,
        img: 'https://http2.mlstatic.com/D_NQ_NP_783850-MCO77820091241_072024-O.webp',
        name: 'Celular Tigers Flip 80 4g Tapita Doble Pantalla Camara Mp3',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 200000,
        category: 'Celulares',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 25,
        img: 'https://http2.mlstatic.com/D_NQ_NP_979076-MLA44155944144_112020-O.webp',
        name: 'ZTE Blade L130 Dual SIM 8 GB negro 512 MB RAM',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 150000,
        category: 'Celulares',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },

      {
        id: 26,
        img: 'https://http2.mlstatic.com/D_NQ_NP_891591-MCO78620566430_082024-O.webp',
        name: 'Torre Cpu Gamer Ryzen 7 5700g Vega 8 1tb 32gb Led 22 Pc',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 2500000,
        category: 'Computacion',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 27,
        img: 'https://http2.mlstatic.com/D_NQ_NP_715593-MCO45728605208_042021-O.webp',
        name: 'Pc Torre Gamer Ryzen 3 3200g A320m Ssd 240gb Ram 8gb Mon 22',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 1500000,
        category: 'Computacion',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 28,
        img: 'https://http2.mlstatic.com/D_NQ_NP_795169-MCO72740689094_112023-O.webp',
        name: 'Computador Gamer Lenovo Ryzen 16g 240g Monitor 19 Video 2gb (Reacondicionado)',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 1200000,
        category: 'Computacion',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 29,
        img: 'https://http2.mlstatic.com/D_NQ_NP_967540-MCO70486713639_072023-O.webp',
        name: 'Torre Cpu Dell Optiplex 7050 Micro Core I5 7ma Gen 8gb 500gb (Reacondicionado)',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 900000,
        category: 'Computacion',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
      {
        id: 30,
        img: 'https://http2.mlstatic.com/D_NQ_NP_967540-MCO70486713639_072023-O.webp',
        name: 'Computador Hp Amd A6 4gb Ssd 180gb + Monitor Usado 19 (Reacondicionado)',
        description: 'Lo que tienes que saber de este producto',
        features: ['Marca: Magna'],
        paymentAccepted: ['Débito', 'Crédito', 'Efecty', 'PSE'],
        questions: [
          {
            id: 1,
            user: 'Usuario 1',
            question: 'Pregunta 1',
          },
          {
            id: 2,
            user: 'Usuario 1',
            question: 'Pregunta 1',
            answer: 'Respuesta 1',
          },
        ],
        comments: [
          {
            id: 1,
            user: 'Usuario 1',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus',
            rating: 5,
          },
          {
            id: 2,
            user: 'Usuario 2',
            comment: 'Comentario 1',
            rating: 5,
          },
        ],
        price: 500000,
        category: 'Computacion',
        offer: {
          isOffer: false,
          discount: 0,
          priceInOffer: 0,
        },
        status: 'Disponible',
      },
    ],
    purchases: [],
    clientPurchases: [],
    favoriteProducts: [],
  },
];
