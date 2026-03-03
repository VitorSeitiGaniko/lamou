import {
  GranjaResidencial,
  Paineiras,
  Park395,
  ResidencialAldeia,
  ResidencialPaisagem,
  ResidencialElisabeteI,
  ResidencialVistaAlegreII,
  StudioVertentes,
  GranjaResidencialPlanta02,
  GranjaResidencialPlanta01,
  GranjaResidencial01,
  GranjaResidencial08,
  GranjaResidencial07,
  GranjaResidencial06,
  GranjaResidencial05,
  GranjaResidencial04,
  GranjaResidencial03,
  GranjaResidencial02,
  StudioVertentesPlanta01,
  StudioVertentesPlanta02,
  StudioVertentes01,
  StudioVertentes02,
  StudioVertentes03,
  StudioVertentes04,
  StudioVertentes05,
  StudioVertentes06,
  StudioVertentes07,
  StudioVertentes08,
  StudioVertentes09,
  StudioVertentes10,
  StudioVertentes11,
  StudioVertentes12,
  StudioVertentes13,
  ResidencialElisabeteIPlanta02,
  ResidencialElisabeteIPlanta01,
  ResidencialElisabeteI01,
  ResidencialElisabeteI02,
  ResidencialElisabeteI03,
  ResidencialElisabeteI04,
  ResidencialElisabeteI05,
  ResidencialElisabeteI06,
  ResidencialElisabeteI07,
} from '../assets';

const readyProperties = [
  {
    image: ResidencialPaisagem,
    name: 'Residencial Paisagem',
    address: 'Av. Das Cruzadas, 170 - Cotia - SP',
    rooms: 0,
    bathrooms: 0,
    bedrooms: 0,
    parkingSpaces: 0,
    status: 'ready',
  },
  {
    image: Park395,
    name: 'Park 395',
    address: 'Rua das Gardênias 395 - Taboão da Serra - São Paulo, SP',
    area: '64m2 a 128m2',
    rooms: 0,
    bathrooms: 0,
    bedrooms: 0,
    parkingSpaces: 0,
    status: 'ready',
  },
  {
    image: Paineiras,
    name: 'Residencial Paineiras',
    address: 'R. São Francisco, 21 - Parque Jane - Embu das Artes - SP',
    area: '50m2',
    rooms: 0,
    bathrooms: 0,
    bedrooms: 0,
    parkingSpaces: 0,
    status: 'ready',
  },
  {
    image: ResidencialAldeia,
    name: 'Residencial Aldeia',
    address: 'Estrada da Aldeia, 1052 - Granja Viana - São Paulo, SP',
    area: '150m2',
    rooms: 0,
    bathrooms: 0,
    bedrooms: 0,
    parkingSpaces: 0,
    status: 'ready',
  },
];

const underConstructionProperties = [
  {
    image: ResidencialVistaAlegreII,
    name: 'Residencial Vista Alegre II',
    address: 'R​​​​ua Alberto Correa Francfort, ​44 - ​Embu das Artes - São Paulo, SP',
    area: '50m2 e 52m2',
    rooms: 0,
    bathrooms: 0,
    bedrooms: 0,
    parkingSpaces: 0,
    status: 'under_construction',
  },
  {
    image: ResidencialElisabeteI,
    name: 'Residencial Elizabete I',
    address: 'Rua Manoel Maria Fernandes, 330',
    area: '47m2 e 48m2',
    rooms: 0,
    bathrooms: 0,
    bedrooms: 0,
    parkingSpaces: 0,
    status: 'under_construction',
  },
  {
    image: ResidencialElisabeteI,
    name: 'Residencial Elizabete II',
    address: 'Rua Manoel Maria Fernandes, 330',
    area: '47m2 e 48m2',
    rooms: 0,
    bathrooms: 0,
    bedrooms: 0,
    parkingSpaces: 0,
    status: 'under_construction',
  },
  {
    image: GranjaResidencial,
    name: 'Granja Residencial',
    address: 'Estrada da Aldeia, 7509 - Granja Viana - SP',
    area: '57m2 e 61m2',
    rooms: 0,
    bathrooms: 0,
    bedrooms: 0,
    parkingSpaces: 0,
    status: 'under_construction',
  },
  {
    image: StudioVertentes,
    name: 'Studio Vertentes',
    address: 'R. Benedito Branco de Abreu, 12',
    area: '23m2',
    rooms: 0,
    bathrooms: 0,
    bedrooms: 0,
    parkingSpaces: 0,
    status: 'under_construction',
  },
];

const residencial_paisagem = {
  banner: {
    image: ResidencialPaisagem,
    name: 'Residencial Paisagem',
    description:
      'Viva a poucos passos do metrô em um projeto que une design moderno, lazer completo e a conveniência de ter tudo por perto.',
    localization: 'Cotia',
    status: 'Pronto para morar',
  },

  about: [
    'Morar perto da natureza é um privilégio que nem todos podem ter. Com o agito das cidades grandes, os benefícios de estar rodeado pelo verde acabam se perdendo. Se você busca essa tranquilidade, conheça a realização deste sonho com o lançamento do Residencial Paisagem, localizado em Paisagem Casa Grande, na cidade de Cotia.',
    'Com 2 dormitórios e 1 vaga de garagem, as plantas do Residencial Paisagem incluem uma opção de apartamento tipo com 46m² e uma de apartamento garden, ideal para quem deseja a segurança de um condomínio aliada a comodidade de uma casa com quintal. Aproveite também os itens de lazer, como salão de festas, churrasqueira, playground e praça de convivência, dando a família inteira alternativas de entretenimento, podendo ainda convidar os amigos para aproveitar junto a você esses momentos.',
    'Próximo a Rua das Cruzadas, você encontra centros religiosos, bares e mercearias, posto de saúde, farmácias e outros serviços, estando inclusive a 15min da Rodovia Raposo Tavares e 20min do Templo Zu Lai, um espetacular ponto turístico da região.',
  ],

  tags: {
    area: '46m²',
    bathroom: '1',
    bedrooms: '2',
    garage: '1',
    kitchen: '1',
    living_room: '1',
    lote: '46m²',
    orientation: 'Sul',
    rooms: '4',
    type: 'Apartamento',
  },

  images: [ResidencialPaisagem],

  plant: [],

  benefities: ['Churrasqueira Gourmet', 'Playground', 'Salão de Festas', 'Praça de Convivência'],

  map: `
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.097720964027!2d-46.95215328867362!3d-23.63667116427557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfa837edb12f8f%3A0x27bf2f927a92593d!2sAv.%20Das%20Cruzadas%2C%20170%20-%20Paisagem%20Casa%20Grande%2C%20Cotia%20-%20SP%2C%2006722-200!5e0!3m2!1spt-BR!2sbr!4v1772400068403!5m2!1spt-BR!2sbr'
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      style="width: 100%; height: 100%;"
    ></iframe>
  `,
};

const residencial_aldeia = {
  banner: {
    image: ResidencialAldeia,
    name: 'Residencial Aldeia',
    description:
      'Viva a poucos passos do metrô em um projeto que une design moderno, lazer completo e a conveniência de ter tudo por perto.',
    localization: 'Granja Viana',
    status: 'Pronto para morar',
  },

  about: [
    'Imagine morar no centro da Granja Viana, com tudo que você precisa a poucos minutos da sua casa: assim é o Residencial da Aldeia, que possui apartamentos de 50m² com 2 dormitórios e 1 vaga de garagem. Com sala ampla e armários na cozinha, o seu lar contará também com academia e churrasqueira disponíveis na área de lazer.',
    'Não precisa ir tão longe para chegar ao seu destino. Com acesso facilitado à Rodovia Raposo Tavares e ao Rodoanel, além de transporte público passando na porta do condomínio, você estará perto do Shopping Granja Viana, da padaria Dona Deôla,e de uma variedade de colégios e supermercados.',
  ],

  tags: {
    area: '46m²',
    bathroom: '1',
    bedrooms: '2',
    garage: '1',
    kitchen: '1',
    living_room: '1',
    lote: '46m²',
    orientation: 'Sul',
    rooms: '4',
    type: 'Apartamento',
  },

  images: [ResidencialAldeia],

  plant: [],

  benefities: ['Churrasqueira', 'Playground', 'Salão de Festas', 'Quadra', 'Piscina'],

  map: `
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14626.520511600633!2d-46.837479181886295!3d-23.581723996124207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfaaac9c882a23%3A0xc2e8ccd4bfc12454!2sEstrada%20da%20Aldeia%2C%201052%20-%20Granja%20Viana%2C%20Carapicu%C3%ADba%20-%20SP%2C%2006709-300!5e0!3m2!1spt-BR!2sbr!4v1772401078753!5m2!1spt-BR!2sbr'
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      style="width: 100%; height: 100%;"
    ></iframe>
  `,
};

const park_395 = {
  banner: {
    image: Park395,
    name: 'Park 395',
    description:
      'Viva a poucos passos do metrô em um projeto que une design moderno, lazer completo e a conveniência de ter tudo por perto.',
    localization: 'Taboão da Serra',
    status: 'Pronto para morar',
  },

  about: ['Em Breve você poderá ver aqui o projeto completo'],

  tags: {
    area: '46m²',
    bathroom: '1',
    bedrooms: '2',
    garage: '1',
    kitchen: '1',
    living_room: '1',
    lote: '46m²',
    orientation: 'Sul',
    rooms: '4',
    type: 'Apartamento',
  },

  images: [Park395],

  plant: [],

  benefities: [
    'Churrasqueira',
    'Churrasqueira Gourmet',
    'Escritório Coletivo',
    'Espaço Mulher',
    'Estacionamento',
    'Estacionamento para Visitantes',
    'Fitness',
    'Jardim',
    'Lava Carros',
    'Ponto Grill',
    'Playground',
    'Salão de Festas',
    'Praça de Convivência',
    'Piscina',
  ],

  map: `
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0395425546435!2d-46.76386555979292!3d-23.602914763209313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce543a3f3d66b5%3A0x877a6cd0d536e157!2sR.%20das%20Gard%C3%AAnias%2C%20395%20-%20Parque%20Assuncao%2C%20Tabo%C3%A3o%20da%20Serra%20-%20SP%2C%2006753-450!5e0!3m2!1spt-BR!2sbr!4v1772401491539!5m2!1spt-BR!2sbr'
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      style="width: 100%; height: 100%;"
    ></iframe>
  `,
};

const residencial_paineiras = {
  banner: {
    image: Paineiras,
    name: 'Residencial Paineiras',
    description:
      'Viva a poucos passos do metrô em um projeto que une design moderno, lazer completo e a conveniência de ter tudo por perto.',
    localization: 'Embu das Artes',
    status: 'Pronto para morar',
  },

  about: [
    'Se você está à procura de tranquilidade sem precisar sofrer com o caos da capital, o Residencial Paineiras é o lugar ideal para você. Localizado na divisa entre Taboão da Serra e Embu das Artes, você encontra apartamentos de 54m² a 500m da Rodovia Régis Bittencourt, facilitando o seu acesso aos principais pontos da cidade.',
    'Para tornar a sua vivência ainda melhor, o playground e o jardim dentro do condomínio te incentivam a passar mais tempo curtindo o que há de mais agradável: sua família e a natureza.',
  ],

  tags: {
    area: '46m²',
    bathroom: '1',
    bedrooms: '2',
    garage: '1',
    kitchen: '1',
    living_room: '1',
    lote: '46m²',
    orientation: 'Sul',
    rooms: '4',
    type: 'Apartamento',
  },

  images: [Paineiras],

  plant: [],

  benefities: ['Jardim', 'Playground'],

  map: `
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.272951438563!2d-46.82582875979204!3d-23.630394064221317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce54cafeaafb6d%3A0x1823eedc3435c830!2sR.%20S%C3%A3o%20Francisco%2C%2021%20-%20Parque%20Jane%2C%20Embu%20das%20Artes%20-%20SP%2C%2006807-280!5e0!3m2!1spt-BR!2sbr!4v1772401645095!5m2!1spt-BR!2sbr'
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      style="width: 100%; height: 100%;"
    ></iframe>
  `,
};

const residencial_vista_alegre_ii = {
  banner: {
    image: ResidencialVistaAlegreII,
    name: 'Residencial Vista Alegre II',
    description:
      'Viva a poucos passos do metrô em um projeto que une design moderno, lazer completo e a conveniência de ter tudo por perto.',
    localization: 'Embu das Artes',
    status: 'Pronto para morar',
  },

  about: [
    'A perfeita união entre qualidade de vida e conforto em Embu das Artes. Condomínio com lazer completo, fácil acesso ao Rodoanel e próximo ao Shopping Taboão.',
  ],

  tags: {
    area: '46m²',
    bathroom: '1',
    bedrooms: '2',
    garage: '1',
    kitchen: '1',
    living_room: '1',
    lote: '46m²',
    orientation: 'Sul',
    rooms: '4',
    type: 'Apartamento',
  },

  images: [ResidencialVistaAlegreII],

  plant: [],

  benefities: [
    'Churrasqueira',
    'Churrasqueira Gourmet',
    'Escritório Coletivo',
    'Espaço Mulher',
    'Estacionamento',
    'Estacionamento para Visitantes',
    'Fitness',
    'Jardim',
    'Lava Carros',
    'Ponto Grill',
    'Playground',
    'Salão de Festas',
    'Praça de Convivência',
    'Piscina',
  ],

  map: `
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.468067762195!2d-46.82477385979238!3d-23.62340276396376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce54cd9a10bea1%3A0x2a23bd13fa33105!2sRua%20Alberto%20Correia%20Francfort%2C%2044%20-%20Jardim%20Vista%20Alegre%2C%20Embu%20das%20Artes%20-%20SP%2C%2006807-461!5e0!3m2!1spt-BR!2sbr!4v1772401838943!5m2!1spt-BR!2sbr'
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      style="width: 100%; height: 100%;"
    ></iframe>
  `,
};

const residencial_elizabete_i = {
  banner: {
    image: ResidencialElisabeteI,
    name: 'Residencial Elizabete I',
    description:
      'Viva a poucos passos do metrô em um projeto que une design moderno, lazer completo e a conveniência de ter tudo por perto.',
    localization: 'Taboão da Serra',
    status: 'Pronto para morar',
  },

  about: [
    'Se você procura sempre o melhor para a sua família, o Residencial Elizabete I é perfeito para você! Condomínio com lazer completo e apartamentos de 2 dormitórios com varanda, 47 a 48m², com fácil acesso à Rodovia Régis Bittencourt, no melhor de Taboão da Serra.',
  ],

  tags: {
    area: '46m²',
    bathroom: '1',
    bedrooms: '2',
    garage: '1',
    kitchen: '1',
    living_room: '1',
    lote: '46m²',
    orientation: 'Sul',
    rooms: '4',
    type: 'Apartamento',
  },

  images: [
    ResidencialElisabeteI,
    ResidencialElisabeteI01,
    ResidencialElisabeteI02,
    ResidencialElisabeteI03,
    ResidencialElisabeteI04,
    ResidencialElisabeteI05,
    ResidencialElisabeteI06,
    ResidencialElisabeteI07,
  ],

  plant: [ResidencialElisabeteIPlanta01, ResidencialElisabeteIPlanta02],

  benefities: ['Churrasqueira', 'Fitness', 'Jardim', 'Playground', 'Salão de Festas', 'Piscina'],

  map: `
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.506368504506!2d-46.81102565979243!3d-23.622030163913234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce55a1cf5c9495%3A0x2d442029f4dab035!2sR.%20Manoel%20Maria%20Fernandes%2C%20330%20-%20Jardim%20Elizabete%2C%20Tabo%C3%A3o%20da%20Serra%20-%20SP%2C%2006786-300!5e0!3m2!1spt-BR!2sbr!4v1772402001353!5m2!1spt-BR!2sbr'
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      style="width: 100%; height: 100%;"
    ></iframe>
  `,
};

const residencial_elizabete_ii = {
  banner: {
    image: ResidencialElisabeteI,
    name: 'Residencial Elizabete II',
    description:
      'Viva a poucos passos do metrô em um projeto que une design moderno, lazer completo e a conveniência de ter tudo por perto.',
    localization: 'Taboão da Serra',
    status: 'Pronto para morar',
  },

  about: [
    'Se você procura sempre o melhor para a sua família, o Residencial Elizabete II é perfeito para você! Condomínio com lazer completo e apartamentos de 2 dormitórios com varanda, 47 a 48m², com fácil acesso à Rodovia Régis Bittencourt, no melhor de Taboão da Serra.',
  ],

  tags: {
    area: '46m²',
    bathroom: '1',
    bedrooms: '2',
    garage: '1',
    kitchen: '1',
    living_room: '1',
    lote: '46m²',
    orientation: 'Sul',
    rooms: '4',
    type: 'Apartamento',
  },

  images: [
    ResidencialElisabeteI,
    ResidencialElisabeteI01,
    ResidencialElisabeteI02,
    ResidencialElisabeteI03,
    ResidencialElisabeteI04,
    ResidencialElisabeteI05,
    ResidencialElisabeteI06,
    ResidencialElisabeteI07,
  ],

  plant: [ResidencialElisabeteIPlanta01, ResidencialElisabeteIPlanta02],

  benefities: ['Churrasqueira', 'Fitness', 'Jardim', 'Playground', 'Salão de Festas', 'Piscina'],

  map: `
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.506368504506!2d-46.81102565979243!3d-23.622030163913234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce55a1cf5c9495%3A0x2d442029f4dab035!2sR.%20Manoel%20Maria%20Fernandes%2C%20330%20-%20Jardim%20Elizabete%2C%20Tabo%C3%A3o%20da%20Serra%20-%20SP%2C%2006786-300!5e0!3m2!1spt-BR!2sbr!4v1772402001353!5m2!1spt-BR!2sbr'
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      style="width: 100%; height: 100%;"
    ></iframe>
  `,
};

const granja_residencial = {
  banner: {
    image: GranjaResidencial,
    name: 'Granja Residencial',
    description:
      'Viva a poucos passos do metrô em um projeto que une design moderno, lazer completo e a conveniência de ter tudo por perto.',
    localization: 'Granja Viana',
    status: 'Pronto para morar',
  },

  about: [
    'Para famílias que buscam excelente qualidade de vida, o Granja Residencial oferece uma ótima oportunidade, a um custo que irá surpreender na região da Granja Viana. O Empreendimento possui plantas de 2 e 3 dormitórios, sendo 1 suíte, com cômodos bem distribuídos e uma churrasqueira de verdade na varanda.',
    'As metragens vão de 57 a 61m² e servem como acomodações aconchegantes para a sua família, que terão ainda opções de lazer como brinquedoteca, salão de festas com espaço gourmet, academia e yoga, incluindo também um espaço dedicado às mulheres. Para proporcionar a você ainda mais qualidade de vida, o Granja Residencial possui a única piscina coberta da região, sem tirar a sua liberdade de frequentá-la qualquer que seja o clima.',
    'Com 1 ou 2 vagas, você estará a poucos minutos de carro das ótimas opções da região: os shoppings Granja Viana e Open Mall The Square, a deliciosa padaria Dona Deôla, os colégios Objetivo e Anglo, a faculdade Rio Branco, e o hipermercado Walmart. Tudo isso com acesso facilitado à Rodovia Raposo Tavares.',
  ],

  tags: {
    area: '46m²',
    bathroom: '1',
    bedrooms: '2',
    garage: '1',
    kitchen: '1',
    living_room: '1',
    lote: '46m²',
    orientation: 'Sul',
    rooms: '4',
    type: 'Apartamento',
  },

  images: [
    GranjaResidencial,
    GranjaResidencial01,
    GranjaResidencial02,
    GranjaResidencial03,
    GranjaResidencial04,
    GranjaResidencial05,
    GranjaResidencial06,
    GranjaResidencial07,
    GranjaResidencial08,
  ],

  plant: [GranjaResidencialPlanta01, GranjaResidencialPlanta02],

  benefities: [
    'Churrasqueira Gourmet',
    'Espaço Mulher',
    'Fitness',
    'Ponto Grill',
    'Salão de Festas',
    'Piscina',
  ],

  map: `
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7313.288882310682!2d-46.835942022290034!3d-23.581210199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfaaac9d3273e9%3A0xdd6457797ceb4f6f!2sCondom%C3%ADnio%20Residencial%20da%20Granja!5e0!3m2!1spt-BR!2sbr!4v1772402379477!5m2!1spt-BR!2sbr'
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      style="width: 100%; height: 100%;"
    ></iframe>
  `,
};

const studio_vertentes = {
  banner: {
    image: StudioVertentes,
    name: 'Studio Vertentes',
    description: 'Invista ou more em uma das regiões que mais crescem na Zona Oeste de São Paulo.',
    localization: 'Butantã',
    status: 'Pronto para morar',
  },

  about: [
    'O Residencial Jardim das Vertentes é uma ótima oportunidade para quem busca um investimento sólido e rentável na região do Butantã. Localizado há 800 metros da estação Vila Sônia do Metrô e com obras praticamente concluídas, o projeto conta com apartamentos compactos de 23m² com varanda e que serão entregues mobiliados!* O condomínio conta ainda com diversas áreas de convivência e lazer completo.',
  ],

  tags: {
    area: '46m²',
    bathroom: '1',
    bedrooms: '2',
    garage: '1',
    kitchen: '1',
    living_room: '1',
    lote: '46m²',
    orientation: 'Sul',
    rooms: '4',
    type: 'Apartamento',
  },

  images: [
    StudioVertentes,
    StudioVertentes01,
    StudioVertentes02,
    StudioVertentes03,
    StudioVertentes04,
    StudioVertentes05,
    StudioVertentes06,
    StudioVertentes07,
    StudioVertentes08,
    StudioVertentes09,
    StudioVertentes10,
    StudioVertentes11,
    StudioVertentes12,
    StudioVertentes13,
  ],

  plant: [StudioVertentesPlanta01, StudioVertentesPlanta02],

  benefities: [
    'Churrasqueira',
    'Churrasqueira Gourmet',
    'Escritório Coletivo',
    'Espaço Pilates',
    'Estacionamento',
    'Fitness',
    'Jardim',
    'Salão de Festas',
    'Praça de Convivência',
    'Piscina',
  ],

  map: `
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5291914988534!2d-46.74636135979369!3d-23.58534696256302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce567dff2d41ed%3A0xaa0ac51271456320!2sR.%20Benedito%20Branco%20de%20Abreu%2C%2012%20-%20Jardim%20das%20Vertentes%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005541-090!5e0!3m2!1spt-BR!2sbr!4v1772402608976!5m2!1spt-BR!2sbr'
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      style="width: 100%; height: 100%;"
    ></iframe>
  `,
};

const details = {
  residencial_paisagem: residencial_paisagem,
  residencial_aldeia: residencial_aldeia,
  park_395: park_395,
  residencial_paineiras: residencial_paineiras,
  residencial_vista_alegre_ii: residencial_vista_alegre_ii,
  residencial_elizabete_i: residencial_elizabete_i,
  residencial_elizabete_ii: residencial_elizabete_ii,
  granja_residencial: granja_residencial,
  studio_vertentes: studio_vertentes,
};

export { readyProperties, underConstructionProperties, details };
