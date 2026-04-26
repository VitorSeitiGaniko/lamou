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
  StudioVertentes14,
  StudioVertentes15,
  StudioVertentes16,
  StudioVertentes17,
  StudioVertentes18,
  StudioVertentes19,
  StudioVertentes20,
  StudioVertentes21,
  StudioVertentes22,
  StudioVertentes23,
  StudioVertentes24,
  StudioVertentes25,
  StudioVertentes26,
  StudioVertentes27,
  ResidencialElisabeteIPlanta02,
  ResidencialElisabeteIPlanta01,
  ResidencialElisabeteI01,
  ResidencialElisabeteI02,
  ResidencialElisabeteI03,
  ResidencialElisabeteI04,
  ResidencialElisabeteI05,
  ResidencialElisabeteI06,
  ResidencialElisabeteI07,
  ResidencialElisabeteII01,
  ResidencialElisabeteII02,
  ResidencialVistaAlegreIII,
  ResidencialVistaAlegreIII01,
  ResidencialVistaAlegreIII02,
  ResidencialVistaAlegreIII03,
  ResidencialVistaAlegreIIIPlanta01,
  ResidencialVistaAlegreIIIPlanta02,
  ResidencialGardenias01,
  ResidencialGardenias02,
  ResidencialGardenias03,
  ResidencialGardenias04,
  ResidencialGardenias05,
  ResidencialGardenias06,
  ResidencialGardenias07,
  ResidencialGardenias08,
  ResidencialGardeniasPlanta01,
  ResidencialGardeniasPlanta02,
  ResidencialJasmins01,
  ResidencialJasmins02,
  ResidencialJasmins03,
  ResidencialJasmins04,
  ResidencialJasmins05,
  ResidencialMariaRosa01,
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
  {
    image: ResidencialVistaAlegreII,
    name: 'Residencial Vista Alegre II',
    address: 'R​​​​ua Alberto Correa Francfort, ​44 - ​Embu das Artes - São Paulo, SP',
    area: '50m² e 52m²',
    rooms: 0,
    bathrooms: 0,
    bedrooms: 0,
    parkingSpaces: 0,
    status: 'ready',
  },
  {
    image: ResidencialVistaAlegreIII,
    name: 'Residencial Vista Alegre III',
    address: 'R​​​​ua Alberto Correa Francfort, ​59 - ​Embu das Artes - São Paulo, SP',
    area: '50m²',
    rooms: 3,
    bathrooms: 1,
    bedrooms: 2,
    parkingSpaces: 1,
    status: 'ready',
  },
  {
    image: ResidencialElisabeteI,
    name: 'Residencial Elizabete I',
    address: 'Rua Manoel Maria Fernandes, 330',
    area: '47m² e 48m²',
    rooms: 0,
    bathrooms: 0,
    bedrooms: 0,
    parkingSpaces: 0,
    status: 'ready',
  },
  {
    image: ResidencialElisabeteII01,
    name: 'Residencial Elizabete II',
    address: 'Rua Manoel Maria Fernandes, 330',
    area: '50m²',
    rooms: 3,
    bathrooms: 1,
    bedrooms: 2,
    parkingSpaces: 1,
    status: 'ready',
  },
  {
    image: GranjaResidencial,
    name: 'Granja Residencial',
    address: 'Estrada da Aldeia, 7509 - Granja Viana - SP',
    area: '57m² e 61m²',
    rooms: 0,
    bathrooms: 0,
    bedrooms: 0,
    parkingSpaces: 0,
    status: 'ready',
  },
  {
    image: ResidencialGardenias01,
    name: 'Residencial Gardenias',
    address: 'R. Gardenias',
    area: 'Xm²',
    rooms: 1,
    bathrooms: 1,
    bedrooms: 1,
    parkingSpaces: '0 (a parte)',
    status: 'ready',
  },
  {
    image: StudioVertentes17,
    name: 'Studio Vertentes',
    address: 'R. Benedito Branco de Abreu, 12',
    area: '24m²',
    rooms: 1,
    bathrooms: 1,
    bedrooms: 1,
    parkingSpaces: '0 (a parte)',
    status: 'ready',
  },
];

const underConstructionProperties = [
  {
    image: ResidencialJasmins01,
    name: 'Residencial Jasmins',
    address: 'R. Jasmins',
    area: 'Xm²',
    rooms: 1,
    bathrooms: 1,
    bedrooms: 1,
    parkingSpaces: '0 (a parte)',
    status: 'under_construction',
  },
  {
    image: ResidencialMariaRosa01,
    name: 'Residencial Maria Rosa',
    address: 'R. Maria Rosa',
    area: 'Xm²',
    rooms: 1,
    bathrooms: 1,
    bedrooms: 1,
    parkingSpaces: '0 (a parte)',
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

const residencial_vista_alegre_iii = {
  banner: {
    image: ResidencialVistaAlegreIII,
    name: 'Residencial Vista Alegre III',
    description:
      'Viva a poucos passos do metrô em um projeto que une design moderno, lazer completo e a conveniência de ter tudo por perto.',
    localization: 'Embu das Artes',
    status: 'Pronto para morar',
  },

  about: [
    'O lugar ideal para começar a sua nova vida.',
    'Unidades disponíveis em Embu das Artes.',
    'O  Condomínio Residencial Vista Alegre III oferece tudo o que você precisa para viver com conforto, segurança e tranquilidade.',
    `<ul class="my-5">
      <li>✔ Condomínio fechado</li>
      <li>✔ Portaria 24 horas</li>
      <li>✔ Segurança para sua família</li>
      <li>✔ Piscina</li>
      <li>✔ Salão de festas com churrasqueira</li>
      <li>✔ Brinquedoteca</li>
      <li>✔ Academia</li>
      <li>✔ Salão de jogos</li>
    </ul>
    `,
    'Aqui seus filhos brincam com segurança e você vive com mais tranquilidade.',
    'Financiamento pela CAIXA',
    `<ul class="my-5">
      <li>* Use seu FGTS</li>
      <li>* Entrada facilitada</li>
      <li>* Parcelas que cabem no seu bolso</li>
    </ul>
    `,
    'Chegou a hora de transformar o aluguel em conquista.',
    'Visite o apartamento decorado e venha conhecer o seu novo lar.',
  ],

  tags: {
    area: '50m²',
    bathroom: '1',
    bedrooms: '2',
    garage: '1',
    kitchen: '1',
    living_room: '1',
    lote: '50m²',
    orientation: 'Sul',
    rooms: '3',
    type: 'Apartamento',
  },

  images: [
    ResidencialVistaAlegreIII,
    ResidencialVistaAlegreIII01,
    ResidencialVistaAlegreIII02,
    ResidencialVistaAlegreIII03,
  ],

  plant: [ResidencialVistaAlegreIIIPlanta01, ResidencialVistaAlegreIIIPlanta02],

  benefities: [
    'Condomínio fechado',
    'Portaria 24 horas',
    'Segurança para sua família',
    'Piscina',
    'Salão de festas com churrasqueira',
    'Brinquedoteca',
    'Academia',
    'Salão de jogos',
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

  benefities: ['Churrasqueira', 'Fitness', 'Jardim', 'Playground', 'Salão de Festas'],

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
    image: ResidencialElisabeteII01,
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
    area: '50m²',
    bathroom: '1',
    bedrooms: '2',
    garage: '1',
    kitchen: '1',
    living_room: '1',
    lote: '50m²',
    orientation: 'Sul',
    rooms: '3',
    type: 'Apartamento',
  },

  images: [
    ResidencialElisabeteII01,
    ResidencialElisabeteII02,
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
    image: StudioVertentes17,
    name: 'Studio Vertentes',
    description: 'Invista ou more em uma das regiões que mais crescem na Zona Oeste de São Paulo.',
    localization: 'Butantã',
    status: 'Pronto para morar',
  },

  about: [
    'Studios modernos com 20m², pensados para quem busca praticidade, mobilidade e alta valorização.',
    'Ideal para:',
    `<ul class="my-5">
      <li>✔ Moradia</li>
      <li>✔ Renda com locação de curta temporada (Airbnb)</li>
      <li>✔ Locação tradicional</li>
      <li>✔ Investimento imobiliário</li>
    </ul>`,
    'Localização Estratégica',
    `<ul class="my-5">
      <li>* Próximo ao Metrô Vila Sônia</li>
      <li>* Fácil acesso às Marginais</li>
      <li>* Ao lado da Rodovia Raposo Tavares</li>
      <li>* Região em constante valorização</li>
    </ul>
    `,
    'Mobilidade que faz a diferença no dia a dia.',
    'Estrutura Completa de Condomínio',
    `<ul class="my-5">
      <li>✔ Portaria eletrônica 24 horas</li>
      <li>✔ Monitoramento por câmeras</li>
      <li>✔ Garagem</li>
      <li>✔ Minimercado self service</li>
      <li>✔ Piscina</li>
      <li>✔ Lavanderia automatizada OMO</li>
      <li>✔ Espaço coworking</li>
      <li>✔ Bicicletário</li>
      <li>✔ Churrasqueira</li>
      <li>✔ Espaço fitness</li>
      <li>✔ Pilates</li>
      <li>✔ Salão de jogos</li>
    </ul>`,
    'Tudo isso em um condomínio moderno, seguro e inteligente. Diferenciais das Unidades',
    `<ul class="my-5">
      <li>✔ Studios com 20m² bem distribuídos</li>
      <li>✔ Ar-condicionado instalado</li>
      <li>✔ Infraestrutura para internet</li>
      <li>✔ Baixo custo de manutenção</li>
      <li>✔ Alto potencial de rentabilidade</li>
    </ul>`,
    'Unidades à venda',
    'Para morar ou investir.',
    'Studios Vertentes é a combinação perfeita entre localização, praticidade e retorno financeiro.',
    'Agende sua visita e conheça de perto essa oportunidade.',
  ],

  tags: {
    area: '24m²',
    bathroom: '1',
    bedrooms: '1',
    garage: '0 (a parte)',
    kitchen: '1',
    living_room: '1',
    lote: '24m²',
    orientation: 'Sul',
    rooms: '1',
    type: 'Studio',
  },

  images: [
    StudioVertentes17,
    StudioVertentes,
    StudioVertentes14,
    StudioVertentes24,
    StudioVertentes15,
    StudioVertentes25,
    StudioVertentes16,
    StudioVertentes18,
    StudioVertentes26,
    StudioVertentes19,
    StudioVertentes20,
    StudioVertentes27,
    StudioVertentes21,
    StudioVertentes22,
    StudioVertentes23,
  ],

  plant: [StudioVertentesPlanta01, StudioVertentesPlanta02],

  benefities: [
    'Coworking',
    'Lavanderia OMO automatica',
    'Cozinha compartilhado',
    'Salão de festas',
    'Academia',
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

const residencial_gardenias = {
  banner: {
    image: ResidencialGardenias01,
    name: 'Residencial Gardenias',
    description: 'Residencial Gardenias',
    localization: 'Residencial Gardenias',
    status: 'Pronto para morar',
  },

  about: ['Residencial Gardenias'],

  tags: {
    area: '24m²',
    bathroom: '1',
    bedrooms: '1',
    garage: '0 (a parte)',
    kitchen: '1',
    living_room: '1',
    lote: '24m²',
    orientation: 'Sul',
    rooms: '1',
    type: 'Studio',
  },

  images: [
    ResidencialGardenias01,
    ResidencialGardenias02,
    ResidencialGardenias03,
    ResidencialGardenias04,
    ResidencialGardenias05,
    ResidencialGardenias06,
    ResidencialGardenias07,
    ResidencialGardenias08,
  ],

  plant: [ResidencialGardeniasPlanta01, ResidencialGardeniasPlanta02],

  benefities: [
    'Coworking',
    'Lavanderia OMO automatica',
    'Cozinha compartilhado',
    'Salão de festas',
    'Academia',
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

const residencial_jasmins = {
  banner: {
    image: ResidencialJasmins01,
    name: 'Residencial Jasmins',
    description: 'Residencial Jasmins',
    localization: 'Residencial Jasmins',
    status: 'Em construção',
  },

  about: ['Residencial Jasmins'],

  tags: {
    area: '24m²',
    bathroom: '1',
    bedrooms: '1',
    garage: '0 (a parte)',
    kitchen: '1',
    living_room: '1',
    lote: '24m²',
    orientation: 'Sul',
    rooms: '1',
    type: 'Studio',
  },

  images: [
    ResidencialJasmins01,
    ResidencialJasmins02,
    ResidencialJasmins03,
    ResidencialJasmins04,
    ResidencialJasmins05,
  ],

  plant: [],

  benefities: [
    'Coworking',
    'Lavanderia OMO automatica',
    'Cozinha compartilhado',
    'Salão de festas',
    'Academia',
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

const residencial_maria_rosa = {
  banner: {
    image: ResidencialMariaRosa01,
    name: 'Residencial Maria Rosa',
    description: 'Residencial Maria Rosa',
    localization: 'Residencial Maria Rosa',
    status: 'Em construção',
  },

  about: ['Residencial Maria Rosa'],

  tags: {
    area: '24m²',
    bathroom: '1',
    bedrooms: '1',
    garage: '0 (a parte)',
    kitchen: '1',
    living_room: '1',
    lote: '24m²',
    orientation: 'Sul',
    rooms: '1',
    type: 'Studio',
  },

  images: [ResidencialMariaRosa01],

  plant: [],

  benefities: [
    'Coworking',
    'Lavanderia OMO automatica',
    'Cozinha compartilhado',
    'Salão de festas',
    'Academia',
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
  residencial_vista_alegre_iii: residencial_vista_alegre_iii,
  residencial_gardenias: residencial_gardenias,
  residencial_jasmins: residencial_jasmins,
  residencial_maria_rosa: residencial_maria_rosa,
};

export { readyProperties, underConstructionProperties, details };
