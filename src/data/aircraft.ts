import { Aircraft } from "../types";

export const aircraftData: Aircraft[] = [
  {
    id: "1",
    name: "Hercules",
    category: "Jatos Executivos",
    year: 2021,
    price: 65000000,
    image:
      "https://images.unsplash.com/photo-1676335558942-6cc578ee6289?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1726168166993-105add596831?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1726168167004-f472ce87eb81?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541316735011-8f6c9d6c4f30?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    manufacturer: "Gulfstream Aerospace",
    engine: "2x Rolls-Royce BR725",
    maxSpeed: "982 km/h (Mach 0.925)",
    range: "13.000 km",
    capacity: "8-19 passageiros",
    description:
      "O Gulfstream G650 é um dos jatos executivos mais rápidos e luxuosos do mundo. Com alcance intercontinental e cabine espaçosa, oferece o máximo em conforto e performance para viagens executivas de longa distância.",
  },
  {
    id: "2",
    name: "P-51 Mustang",
    category: "Segunda Guerra Mundial",
    year: 1944,
    price: 3500000,
    image:
      "https://images.unsplash.com/photo-1685327059006-d1061d198e7a?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1684795311185-47041ed930e5?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1663582108873-5b1f5da1977b?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    manufacturer: "North American Aviation",
    engine: "Rolls-Royce Merlin V-1650",
    maxSpeed: "703 km/h",
    range: "2.755 km",
    capacity: "1 piloto",
    history:
      "O P-51 Mustang foi um caça norte-americano icônico da Segunda Guerra Mundial, considerado um dos melhores caças da época. Famoso por sua velocidade, alcance e manobrabilidade, foi crucial nas operações de escolta de bombardeiros sobre a Europa.",
    description:
      "Exemplar autêntico completamente restaurado, com documentação histórica completa. Uma peça rara para colecionadores que valorizam a aviação histórica.",
  },
  {
    id: "3",
    name: "Cessna 172 Skyhawk",
    category: "Monomotores",
    year: 2020,
    price: 450000,
    image:
      "https://images.unsplash.com/photo-1593938346024-7ee982d8224b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://plus.unsplash.com/premium_photo-1661891586401-00ff0ed92817?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1593938345757-404e880d427d?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1730713065583-94022a2916ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1629233650020-aa014ed76f8d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    manufacturer: "Cessna Aircraft Company",
    engine: "Lycoming IO-360",
    maxSpeed: "302 km/h",
    range: "1.289 km",
    capacity: "4 pessoas",
    description:
      "O Cessna 172 é a aeronave mais produzida da história. Ideal para treinamento, viagens curtas e aviação recreativa. Confiável, econômico e fácil de pilotar.",
  },
  {
    id: "4",
    name: "Beechcraft Baron G58",
    category: "Bimotores",
    year: 2019,
    price: 1200000,
    image:
      "https://images.unsplash.com/photo-1734826460151-641b33dadf50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1558367261-52d073a519c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "",
    ],
    manufacturer: "Beechcraft",
    engine: "2x Continental IO-550-C",
    maxSpeed: "380 km/h",
    range: "1.900 km",
    capacity: "6 pessoas",
    description:
      "O Baron G58 combina performance bimotor com conforto e tecnologia moderna. Ideal para viagens executivas regionais, oferece segurança adicional e velocidade impressionante.",
  },
  {
    id: "5",
    name: "Douglas DC-3",
    category: "Clássicos Históricos",
    year: 1943,
    price: 2800000,
    image:
      "https://images.unsplash.com/photo-1718616259394-6f16f2a6be15?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1557309132-e26e521f0ba3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1636047380187-e8ae30594d72?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1718616259639-1ce744a39ab8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    manufacturer: "Douglas Aircraft Company",
    engine: "2x Pratt & Whitney R-1830",
    maxSpeed: "346 km/h",
    range: "2.400 km",
    capacity: "21-32 passageiros",
    history:
      "O DC-3 revolucionou o transporte aéreo comercial nas décadas de 1930 e 1940. Muitas unidades ainda voam hoje, testemunhando sua excepcional durabilidade e design atemporal.",
    description:
      "Exemplar totalmente restaurado e certificado. Uma lenda viva da aviação comercial, perfeita para eventos, museus voadores ou operações especiais.",
  },
  {
    id: "6",
    name: "Gripen",
    category: "Jatos Executivos",
    year: 2022,
    price: 75000000,
    image:
      "https://images.unsplash.com/photo-1686557068568-584d579ba46c?q=80&w=365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1694405761879-2f7db0bd0f4b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1758164280925-d43ad6f13c4d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1694405759811-bd81cedfa40c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    manufacturer: "SAAB",
    engine: "2x GE Passport",
    maxSpeed: "2100 km/h (Mach 0.925)",
    range: "25.260 km",
    capacity: "1 passageiro",
    description:
      "O jato executivo com maior alcance do mundo. Cabine incomparável com quatro áreas distintas, incluindo suite master com cama de casal. O máximo em luxo e tecnologia.",
  },
  {
    id: "7",
    name: "Spitfire Mk IX",
    category: "Segunda Guerra Mundial",
    year: 1943,
    price: 4200000,
    image:
      "https://images.unsplash.com/photo-1713196262950-bad41b24587c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1762354947388-2ae913ccabc2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1749745862466-86330b7cb5f3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1749745861193-74cf63a608d3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1689182226895-013f6288abdf?q=80&w=1009&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    manufacturer: "Supermarine",
    engine: "Rolls-Royce Merlin 61",
    maxSpeed: "656 km/h",
    range: "1.827 km",
    capacity: "1 piloto",
    history:
      "O icônico caça britânico que defendeu o Reino Unido durante a Batalha da Inglaterra. Símbolo de coragem e engenharia aeronáutica excepcional, o Spitfire é uma das aeronaves mais reverenciadas da história.",
    description:
      "Restauração impecável de um Mk IX autêntico. Mantém características originais e está em condições de voo. Documentação histórica detalhada incluída.",
  },
  {
    id: "8",
    name: "Cirrus SR22T",
    category: "Monomotores",
    year: 2021,
    price: 950000,
    image:
      "https://images.unsplash.com/photo-1633949837823-02a6d20518be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMHByb3BlbGxlciUyMGFpcnBsYW5lfGVufDF8fHx8MTc2NDAyNzg2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1756782619807-45007ae06740?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1646749701929-f271445c7990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
    ],
    manufacturer: "Cirrus Aircraft",
    engine: "Continental TSIO-550-K",
    maxSpeed: "396 km/h",
    range: "1.940 km",
    capacity: "5 pessoas",
    description:
      "O monomotor mais avançado do mundo. Equipado com paraquedas de célula completa (CAPS), aviônicos Garmin Perspective+ e interior luxuoso. Performance e segurança incomparáveis.",
  },
];
