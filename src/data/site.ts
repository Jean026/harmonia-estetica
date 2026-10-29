/**
 * Todo o conteúdo editável do site fica aqui.
 * - Para trocar uma foto: coloque o arquivo em /public/images e preencha `image` (ex.: "/images/hero.jpg").
 *   Enquanto `image` for null, o site mostra um espaço reservado elegante.
 * - Para remover/adicionar tratamentos: edite o array `treatments`.
 */

export const clinic = {
  name: "Harmonia Estética Avançada",
  shortName: "Harmonia",
  tagline: "Beleza, cuidado e bem-estar em cada detalhe.",
  phoneDisplay: "(41) 99143-3113",
  phoneDigits: "5541991433113",
  instagramHandle: "@clinicaharmoniacuritiba",
  instagramUrl: "https://www.instagram.com/clinicaharmoniacuritiba/",
  bookingUrl: "https://gendo.app/gores/suabelezaemharmoni/",
  address: {
    street: "Via Veneto, 1421 — Sala 13, 2º andar",
    district: "Santa Felicidade",
    city: "Curitiba",
    state: "PR",
    zip: "82020-470",
  },
} as const;

export const whatsappLink = (message = "Olá! Gostaria de agendar uma avaliação na Harmonia Estética.") =>
  `https://wa.me/${clinic.phoneDigits}?text=${encodeURIComponent(message)}`;

const mapQuery = encodeURIComponent(
  "Via Veneto, 1421, Santa Felicidade, Curitiba - PR, 82020-470",
);
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

/** Imagens de cada seção. null = espaço reservado até chegar a foto definitiva. */
export const images = {
  // Primeiro quadro do vídeo do hero: a troca da foto para o vídeo fica imperceptível.
  hero: "/videos/hero-poster.jpg",
  about: "/images/sobre.jpg",
  differentials: "/images/diferenciais.jpg",
  testimonials: "/images/depoimentos.jpg",
  cta: "/images/agendamento.jpg",
  footer: "/images/rodape.jpg",
};

/** Vídeos curtos, mudos e em loop. null = a seção usa apenas a foto. */
export const videos = {
  hero: "/videos/hero.mp4",
};

/** Cada vídeo tem um poster (primeiro quadro) com o mesmo nome + "-poster.jpg". */
export const posterOf = (video: string) => video.replace(/\.mp4$/, "-poster.jpg");

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export type Treatment = {
  id: string;
  name: string;
  short: string;
  detail: string;
  image: string | null;
  imageHint: string;
  /** Vídeo: toca no cartão e abre inteiro (16:9) na janela "Saiba Mais". */
  video: string | null;
  /** Parte horizontal do vídeo que fica visível no cartão vertical (object-position). */
  videoPosition?: string;
};

/**
 * ATENÇÃO: sugestões baseadas na apresentação pública da clínica.
 * Validar com a proprietária antes de publicar (remover, trocar ou incluir procedimentos).
 */
export const treatments: Treatment[] = [
  {
    id: "limpeza-de-pele",
    name: "Limpeza de Pele",
    short:
      "Um cuidado essencial para a saúde e o equilíbrio da pele, proporcionando sensação de renovação e bem-estar.",
    detail:
      "A indicação, a frequência e as etapas do protocolo são definidas em avaliação individual, de acordo com o tipo e as necessidades da sua pele.",
    image: "/images/limpeza-de-pele.jpg",
    imageHint: "Limpeza facial profissional",
    video: "/videos/limpeza-de-pele.mp4",
    videoPosition: "48% center",
  },
  {
    id: "harmonizacao-facial",
    name: "Harmonização Facial",
    short:
      "Procedimentos personalizados que buscam valorizar os traços naturais e a harmonia do rosto.",
    detail:
      "Tudo começa por uma avaliação cuidadosa do seu rosto e dos seus objetivos. Os procedimentos indicados são sempre definidos individualmente, pela profissional responsável.",
    image: "/images/harmonizacao-facial.jpg",
    imageHint: "Avaliação estética facial",
    video: "/videos/harmonizacao-facial.mp4",
    videoPosition: "47% center",
  },
  {
    id: "estetica-corporal",
    name: "Estética Corporal",
    short:
      "Cuidados corporais planejados de acordo com as necessidades e objetivos individuais.",
    detail:
      "O plano de cuidados é montado a partir da sua avaliação, respeitando seus objetivos, seu ritmo e suas características.",
    image: "/images/estetica-corporal.jpg",
    imageHint: "Tratamento corporal",
    video: "/videos/estetica-corporal.mp4",
    videoPosition: "45% center",
  },
  {
    id: "cuidados-com-a-pele",
    name: "Cuidados com a Pele",
    short:
      "Protocolos estéticos que auxiliam no cuidado, na hidratação e na aparência da pele.",
    detail:
      "Protocolos pensados para o dia a dia da sua pele, com orientações de cuidado para manter os resultados em casa.",
    image: "/images/cuidados-com-a-pele.jpg",
    imageHint: "Skincare profissional",
    video: "/videos/cuidados-com-a-pele.mp4",
    videoPosition: "45% center",
  },
  {
    id: "peelings-esteticos",
    name: "Peelings Estéticos",
    short:
      "Tratamentos voltados à renovação e ao cuidado da aparência da pele, conforme avaliação profissional.",
    detail:
      "A escolha do peeling e a periodicidade dependem de avaliação profissional prévia. Converse conosco para saber se faz sentido para você.",
    image: "/images/peelings-esteticos.jpg",
    imageHint: "Atendimento facial",
    video: "/videos/peelings-esteticos.mp4",
    videoPosition: "45% center",
  },
  {
    id: "estetica-avancada",
    name: "Estética Avançada",
    short:
      "Tecnologias e técnicas de estética para cuidados personalizados, conforme indicação profissional.",
    detail:
      "Tecnologias e técnicas são indicadas caso a caso. Agende uma avaliação para entender as opções adequadas ao seu momento.",
    image: "/images/estetica-avancada.jpg",
    imageHint: "Equipamentos de estética",
    video: "/videos/estetica-avancada.mp4",
    videoPosition: "42% center",
  },
];

export const differentials = [
  {
    title: "Atendimento individualizado",
    text: "Cada pessoa possui características e necessidades únicas, que merecem atenção especial.",
    icon: "user",
  },
  {
    title: "Cuidado e acolhimento",
    text: "Um ambiente pensado para proporcionar tranquilidade e conforto durante o atendimento.",
    icon: "heart",
  },
  {
    title: "Estética com naturalidade",
    text: "Uma abordagem que valoriza a harmonia e as características individuais.",
    icon: "sparkles",
  },
  {
    title: "Atenção aos detalhes",
    text: "Uma experiência de atendimento cuidadosamente planejada do início ao fim.",
    icon: "gem",
  },
] as const;

export type GalleryItem = {
  id: string;
  image: string | null;
  caption: string;
  /** "ilustrativa" = imagem genérica. "real" = registro autorizado da clínica. */
  kind: "ilustrativa" | "real";
  span: string;
};

/** Só marque kind: "real" para fotos reais e autorizadas. Nunca use imagem gerada como antes/depois. */
export const gallery: GalleryItem[] = [
  { id: "g1", image: "/images/ambiente.jpg", caption: "Sala de atendimento", kind: "ilustrativa", span: "col-span-2 row-span-2" },
  { id: "g2", image: "/images/cuidados.jpg", caption: "Detalhes do cuidado", kind: "ilustrativa", span: "" },
  { id: "g3", image: "/images/tratamento.jpg", caption: "Cuidado facial", kind: "ilustrativa", span: "row-span-2" },
  { id: "g4", image: "/images/localizacao.jpg", caption: "Recepção e entrada", kind: "ilustrativa", span: "" },
];

/** Mostre a seção de depoimentos só quando houver textos reais autorizados. */
export const testimonialsConfig = {
  /** true = exibe a estrutura com cartões marcados como exemplo. false = oculta a seção. */
  show: true,
  isDemo: true,
};

export type Testimonial = {
  id: string;
  text: string;
  author: string;
  source?: string;
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    text: "Espaço reservado para o depoimento real de uma cliente, com autorização.",
    author: "Nome da cliente",
    source: "Origem da avaliação",
    rating: 5,
  },
  {
    id: "t2",
    text: "Espaço reservado para o depoimento real de uma cliente, com autorização.",
    author: "Nome da cliente",
    source: "Origem da avaliação",
    rating: 5,
  },
  {
    id: "t3",
    text: "Espaço reservado para o depoimento real de uma cliente, com autorização.",
    author: "Nome da cliente",
    source: "Origem da avaliação",
    rating: 5,
  },
];

/** Crédito discreto do desenvolvedor no rodapé. Deixe vazio para ocultar. */
export const developerCredit = {
  label: "",
  url: "",
};
