import type { CSSProperties } from 'react';

export type ProjectCategory = 'BRANDING' | 'UX_UI' | 'DECKS' | 'FLYERS';

export interface Project {
  id: number;
  title: string;
  subTitle: string;
  img: string;
  desc1: string;
  desc2: string;
  behanceUrl: string;
  galleryImages: string[];
  category: ProjectCategory;
  isLandscape?: boolean;
  thumbnailRatio?: 'landscape' | 'portrait' | 'square';
  objectPosition?: string;
  imageScale?: number;
  imageStyle?: CSSProperties;
  logo?: string;
  invertLogo?: boolean;
  logoHeight?: string;
  gridImages?: string[];
}

export const projects: Project[] = [
  // IDENTIDADE VISUAL
  {
    id: 8,
    title: 'ZETTA',
    logo: '/PROJECT LOGOS/LOGO ZETTA.webp',
    invertLogo: true,
    subTitle: 'Manual de Identidade Zetta',
    img: '/PROJECTS/branding_guidelines/zetta_brand_kit/1.jpg',
    desc1: 'Manual técnico e diretrizes visuais criadas para a marca Zetta.',
    desc2: 'Explora o conceito futurista corporativo em grids estritos para mídias impressas e digitais.',
    behanceUrl: 'https://www.behance.net',
    category: 'BRANDING',
    isLandscape: false,
    objectPosition: 'top',
    imageScale: 1.15,
    galleryImages: [
      '/PROJECTS/branding_guidelines/zetta_brand_kit/1.jpg',
      '/PROJECTS/branding_guidelines/zetta_brand_kit/2.jpg',
      '/PROJECTS/branding_guidelines/zetta_brand_kit/3.jpg',
      '/PROJECTS/branding_guidelines/zetta_brand_kit/4.jpg',
      '/PROJECTS/branding_guidelines/zetta_brand_kit/5.jpg',
      '/PROJECTS/branding_guidelines/zetta_brand_kit/6.jpg',
      '/PROJECTS/branding_guidelines/zetta_brand_kit/7.jpg',
    ],
  },
  {
    id: 26,
    title: 'LOUD®',
    logo: '/PROJECT LOGOS/LOGO LOUD.webp',
    logoHeight: 'h-20 md:h-28',
    subTitle: 'Identity Manual',
    img: '/PROJECTS/branding_guidelines/loud_brand_guidelines/1.jpg',
    desc1: 'Manual de identidade visual desenvolvido para a LOUD®.',
    desc2: 'Foco em alinhar a comunicação estética e regras de branding da organização esports.',
    behanceUrl: 'https://www.behance.net',
    category: 'BRANDING',
    isLandscape: false,
    objectPosition: 'top',
    imageScale: 1.06,
    galleryImages: [
      '/PROJECTS/branding_guidelines/loud_brand_guidelines/1.jpg',
      '/PROJECTS/branding_guidelines/loud_brand_guidelines/2.jpg',
    ],
  },
  {
    id: 5,
    title: 'Ecofuding™',
    logo: '/PROJECT LOGOS/LOGO ECOFUNDING.webp',
    logoHeight: 'h-20 md:h-28',
    subTitle: 'Manual de Identidade Visual',
    img: '/PROJECTS/branding_guidelines/eco_funding_branding_kit/1.jpg',
    desc1: 'Manual de Identidade Visual completo desenvolvido para o projeto Ecofuding.',
    desc2: 'Apresenta a consolidação dos grids, tipografias, grafismos secundários e renders promocionais.',
    behanceUrl: 'https://www.behance.net',
    category: 'BRANDING',
    isLandscape: false,
    objectPosition: 'top',
    imageScale: 1.06,
    galleryImages: [
      '/PROJECTS/branding_guidelines/eco_funding_branding_kit/1.jpg',
      '/PROJECTS/branding_guidelines/eco_funding_branding_kit/2.jpg',
      '/PROJECTS/branding_guidelines/eco_funding_branding_kit/3.jpg',
      '/PROJECTS/branding_guidelines/eco_funding_branding_kit/4.jpg',
      '/PROJECTS/branding_guidelines/eco_funding_branding_kit/5.jpg',
      '/PROJECTS/branding_guidelines/eco_funding_branding_kit/6.jpg',
      '/PROJECTS/branding_guidelines/eco_funding_branding_kit/7.jpg',
    ],
  },
  {
    id: 4,
    title: 'Moirarte®',
    logo: '/PROJECT LOGOS/LOGO MOIRARTE.webp',
    subTitle: 'Manual de Marca',
    img: '/PROJECTS/branding_guidelines/MOIRARTE/1.jpg',
    desc1: 'Projeto de branding para a Moirarte, apresentando as inspirações do logotipo, variações cromáticas e regras de assinatura visual.',
    desc2: 'Alinha estética refinada com solidez corporativa para destacar a atuação artística da marca.',
    behanceUrl: 'https://www.behance.net',
    category: 'BRANDING',
    isLandscape: false,
    objectPosition: 'top',
    imageScale: 1.06,
    galleryImages: [
      '/PROJECTS/branding_guidelines/MOIRARTE/1.jpg',
      '/PROJECTS/branding_guidelines/MOIRARTE/2.jpg',
      '/PROJECTS/branding_guidelines/MOIRARTE/3.jpg',
      '/PROJECTS/branding_guidelines/MOIRARTE/4.jpg',
      '/PROJECTS/branding_guidelines/MOIRARTE/5.jpg',
      '/PROJECTS/branding_guidelines/MOIRARTE/6.jpg',
    ],
  },
  {
    id: 7,
    title: 'Sucorama',
    logo: '/PROJECT LOGOS/LOGO SUCORAMA.webp',
    subTitle: 'Manual de Identidade Sucorama',
    img: '/PROJECTS/branding_guidelines/sucorama_brand_identity/manual_de_identidade_sucorama_1.jpg',
    desc1: 'Guia visual e manual prático desenvolvido para a identidade visual da Sucorama.',
    desc2: 'Estruturação conceitual focada em dar vida e cor para a marca de sucos saudáveis.',
    behanceUrl: 'https://www.behance.net',
    category: 'BRANDING',
    isLandscape: false,
    objectPosition: 'top',
    imageScale: 1.06,
    galleryImages: [
      '/PROJECTS/branding_guidelines/sucorama_brand_identity/manual_de_identidade_sucorama_1.jpg',
    ],
  },
  {
    id: 9,
    title: 'ESPORTSBET.IO',
    logo: '/PROJECT LOGOS/LOGO ESPORTSBET.IO.webp',
    subTitle: 'Estudo de Caso de Marca',
    img: '/PROJECTS/case_study/esb_case_study/1.jpg',
    desc1: 'Apresentação detalhada da reestruturação da marca ESB, cobrindo desde a pesquisa conceitual até as peças publicitárias finais.',
    desc2: 'Demonstra a aplicação prática da marca em papelaria, uniformes e fachadas físicas.',
    behanceUrl: 'https://www.behance.net',
    category: 'BRANDING',
    isLandscape: false,
    objectPosition: 'top',
    imageScale: 1.06,
    galleryImages: [
      '/PROJECTS/case_study/esb_case_study/1.jpg',
      '/PROJECTS/case_study/esb_case_study/2.jpg',
      '/PROJECTS/case_study/esb_case_study/3.jpg',
      '/PROJECTS/case_study/esb_case_study/4.jpg',
      '/PROJECTS/case_study/esb_case_study/5.jpg',
      '/PROJECTS/case_study/esb_case_study/6.jpg',
    ],
  },
  {
    id: 3,
    title: 'NEXT',
    logo: '/PROJECT LOGOS/LOGO NEXT.webp',
    subTitle: 'Brand Guidelines',
    img: '/PROJECTS/branding_guidelines/manual_next/cover.jpg',
    desc1: 'Diretrizes de marca para o ecossistema Next. Apresenta o grid construtivo do logotipo e o comportamento tipográfico oficial.',
    desc2: 'Estruturação focada em guiar designers e desenvolvedores na manutenção da consistência visual da marca.',
    behanceUrl: 'https://www.behance.net',
    category: 'BRANDING',
    isLandscape: false,
    objectPosition: '50% 12%',
    galleryImages: [
      '/PROJECTS/branding_guidelines/manual_next/cover.jpg',
      '/PROJECTS/branding_guidelines/manual_next/1.jpg',
      '/PROJECTS/branding_guidelines/manual_next/2.jpg',
      '/PROJECTS/branding_guidelines/manual_next/3.jpg',
    ],
  },
  {
    id: 6,
    title: 'Altitude 1100 Café',
    logo: '/PROJECT LOGOS/LOGO CAFE ALTITUDE.webp',
    subTitle: 'Manual de Identidade do Café',
    img: '/PROJECTS/branding_guidelines/manual_de_identidade_cafe_altitude1100/1.jpg',
    desc1: 'Manual de Identidade de marca criado para a marca de Café Altitude 1100.',
    desc2: 'Design visual integrado focado em expressar a tradição e aroma do café especial das montanhas.',
    behanceUrl: 'https://www.behance.net',
    category: 'BRANDING',
    isLandscape: false,
    objectPosition: 'top',
    imageScale: 1.06,
    galleryImages: [
      '/PROJECTS/branding_guidelines/manual_de_identidade_cafe_altitude1100/1.jpg',
    ],
  },
  {
    id: 2,
    title: 'Agiliza',
    subTitle: 'Identity Guidelines',
    img: '/PROJECTS/branding_guidelines/AGILIZA/1.jpg',
    desc1: 'Manual de aplicação de marca desenvolvido para a Agiliza, detalhando a paleta cromática, área de proteção e aplicação em diferentes fundos.',
    desc2: 'Foco na versatilidade da marca para garantir legibilidade e impacto visual em todas as mídias.',
    behanceUrl: 'https://www.behance.net',
    category: 'BRANDING',
    isLandscape: false,
    objectPosition: 'top',
    imageScale: 1.06,
    galleryImages: [
      '/PROJECTS/branding_guidelines/AGILIZA/1.jpg',
      '/PROJECTS/branding_guidelines/AGILIZA/2.jpg',
      '/PROJECTS/branding_guidelines/AGILIZA/3.jpg',
      '/PROJECTS/branding_guidelines/AGILIZA/4.jpg',
      '/PROJECTS/branding_guidelines/AGILIZA/5.jpg',
    ],
  },
  {
    id: 1,
    title: 'INOWAVE®',
    logo: '/PROJECT LOGOS/LOGO INOWAVE.webp',
    subTitle: 'Manual de Identidade Visual',
    img: '/PROJECTS/branding_guidelines/inowave_brand_guidelines/capa.jpg',
    desc1: 'Manual de identidade visual desenvolvido para a Inowave. O projeto aborda a construção da marca, paleta de cores institucional, regras de aplicação tipográfica e diagramação.',
    desc2: 'Design minimalista corporativo com alta consistência estética para aplicações físicas e digitais.',
    behanceUrl: 'https://www.behance.net',
    category: 'BRANDING',
    isLandscape: false,
    objectPosition: 'top',
    imageScale: 1.06,
    galleryImages: [
      '/PROJECTS/branding_guidelines/inowave_brand_guidelines/capa.jpg',
      '/PROJECTS/branding_guidelines/inowave_brand_guidelines/1.jpg',
      '/PROJECTS/branding_guidelines/inowave_brand_guidelines/2.jpg',
      '/PROJECTS/branding_guidelines/inowave_brand_guidelines/3.jpg',
      '/PROJECTS/branding_guidelines/inowave_brand_guidelines/4.jpg',
      '/PROJECTS/branding_guidelines/inowave_brand_guidelines/5.jpg',
      '/PROJECTS/branding_guidelines/inowave_brand_guidelines/6.jpg',
      '/PROJECTS/branding_guidelines/inowave_brand_guidelines/7.jpg',
    ],
  },

  // UX/UI
  {
    id: 20,
    title: 'WANDRMEDIA',
    logo: '/PROJECT LOGOS/LOGO WANDRMEDIA.png',
    subTitle: 'Marketing Landing Page Layout',
    img: '/PROJECTS/ux_ui/wandrmedia_landing_page.jpg',
    desc1: 'Landing page projetada para a agência WandrMedia, destacando depoimentos de clientes e portfólio visual.',
    desc2: 'Diagramação focada em leitura rápida e conversão de novos contatos de negócios.',
    behanceUrl: 'https://www.behance.net',
    category: 'UX_UI',
    isLandscape: true,
    objectPosition: 'top',
    galleryImages: ['/PROJECTS/ux_ui/wandrmedia_landing_page.jpg'],
  },
  {
    id: 10,
    title: 'Ecofuding™ Tokens',
    logo: '/PROJECT LOGOS/LOGO ECOFUNDING.webp',
    logoHeight: 'h-20 md:h-28',
    subTitle: 'Estudo de Tokens do Projeto',
    img: '/PROJECTS/case_study/ecofunding_tokens/documento_tokens_1.jpg',
    desc1: 'Concepção criativa de NFTs e Tokens utilitários para a plataforma Ecofuding, incluindo renders em 3D e telas desktop.',
    desc2: 'Layout de alta fidelidade integrando a linguagem de blockchain ao ecossistema verde do projeto.',
    behanceUrl: 'https://www.behance.net',
    category: 'UX_UI',
    isLandscape: true,
    galleryImages: [
      '/PROJECTS/case_study/ecofunding_tokens/ecofounder_genesis_1.jpg',
      '/PROJECTS/case_study/ecofunding_tokens/ecofounder_genesis_2.jpg',
      '/PROJECTS/case_study/ecofunding_tokens/ecofounder_genesis_3.jpg',
      '/PROJECTS/case_study/ecofunding_tokens/documento_tokens_1.jpg',
      '/PROJECTS/case_study/ecofunding_tokens/documento_tokens_2.jpg',
      '/PROJECTS/case_study/ecofunding_tokens/documento_tokens_3.jpg',
      '/PROJECTS/case_study/ecofunding_tokens/documento_tokens_4.jpg',
      '/PROJECTS/case_study/ecofunding_tokens/render.jpg',
      '/PROJECTS/case_study/ecofunding_tokens/ecl.jpg',
      '/PROJECTS/case_study/ecofunding_tokens/econ.jpg',
      '/PROJECTS/case_study/ecofunding_tokens/ecl_desktop.jpg',
      '/PROJECTS/case_study/ecofunding_tokens/econ_desktop.jpg',
      '/PROJECTS/case_study/ecofunding_tokens/nft_com_fundo.jpg',
      '/PROJECTS/case_study/ecofunding_tokens/nft_com_fundo_2.jpg',
    ],
  },
  {
    id: 19,
    title: 'GGEZ MEDIA™',
    logo: '/PROJECT LOGOS/LOGO GGEZ.png',
    logoHeight: 'h-24 md:h-32',
    subTitle: 'Gaming Portal UI Design',
    img: '/PROJECTS/ux_ui/ggez_website.jpg',
    desc1: 'Portal de notícias e campeonatos gamer GGEZ. Traz cores escuras de alto contraste e componentes dedicados à comunidade de e-sports.',
    desc2: 'Layout ágil e componentes responsivos pensados na melhor experiência de uso gamer.',
    behanceUrl: 'https://www.behance.net',
    category: 'UX_UI',
    isLandscape: true,
    objectPosition: 'top',
    galleryImages: ['/PROJECTS/ux_ui/ggez_website.jpg'],
  },
  {
    id: 17,
    title: 'Digitus',
    logo: '/PROJECT LOGOS/LOGO DIGITUS.webp',
    subTitle: 'Landing Page & Dashboard Design',
    img: '/PROJECTS/ux_ui/digitus_website.jpg',
    desc1: 'Concepção visual do website institucional Digitus. O layout traz foco em usabilidade, contraste elevado e visualização limpa de dados.',
    desc2: 'Interface otimizada para navegabilidade e conversão eficiente de leads.',
    behanceUrl: 'https://www.behance.net',
    category: 'UX_UI',
    isLandscape: true,
    objectPosition: 'top',
    galleryImages: ['/PROJECTS/ux_ui/digitus_website.jpg'],
  },
  {
    id: 21,
    title: 'Corban Fintech',
    logo: '/PROJECT LOGOS/FINTECH CORBAN.png',
    logoHeight: 'h-24 md:h-32',
    subTitle: 'Digital Banking UI Design',
    img: '/PROJECTS/ux_ui/website_fintech_corban.jpg',
    desc1: 'Portal corporativo para a Fintech Corban, aliando solidez de segurança bancária a uma linguagem visual limpa e amigável.',
    desc2: 'Integra fluxos claros de simulação de crédito e benefícios.',
    behanceUrl: 'https://www.behance.net',
    category: 'UX_UI',
    isLandscape: true,
    objectPosition: 'top',
    galleryImages: ['/PROJECTS/ux_ui/website_fintech_corban.jpg'],
  },
  {
    id: 18,
    title: 'Flying Studio',
    logo: '/PROJECT LOGOS/LOGO FLYING STUDIO.webp',
    logoHeight: 'h-24 md:h-32',
    subTitle: 'Corporate Website Concept',
    img: '/PROJECTS/ux_ui/flying_studio.jpg',
    desc1: 'Estudo de interface para o Flying Studio, integrando animações dinâmicas e grades geométricas no frontend.',
    desc2: 'Foco na expressão criativa através da tipografia fluida e navegação por gestos.',
    behanceUrl: 'https://www.behance.net',
    category: 'UX_UI',
    isLandscape: true,
    objectPosition: 'top',
    galleryImages: ['/PROJECTS/ux_ui/flying_studio.jpg'],
  },
  {
    id: 23,
    title: 'VALORANT® SOVA Twitch Layout',
    logo: '/PROJECT LOGOS/SOVA.png',
    logoHeight: 'h-24 md:h-32',
    subTitle: 'Overlays e Painéis da Twitch',
    img: '/PROJECTS/ux_ui/sova/sova.png',
    desc1: 'Kit completo de branding e identidade visual para streamers desenvolvido para o canal do Sova.',
    desc2: 'Inclui overlays de webcam, telas offline, painéis de spec do PC, redes sociais, sub e donate.',
    behanceUrl: 'https://www.behance.net',
    category: 'UX_UI',
    isLandscape: true,
    galleryImages: [
      '/PROJECTS/ux_ui/sova/sova.png',
      '/PROJECTS/ux_ui/sova/onlinesova.png',
      '/PROJECTS/ux_ui/sova/offlinesova.png',
      '/PROJECTS/ux_ui/sova/facecam.png',
      '/PROJECTS/ux_ui/sova/pannelswebcam.png',
    ],
    gridImages: [
      '/PROJECTS/ux_ui/sova/paineldonate.png',
      '/PROJECTS/ux_ui/sova/painellojinha.png',
      '/PROJECTS/ux_ui/sova/painelpcspecs.png',
      '/PROJECTS/ux_ui/sova/painelsobremim.png',
      '/PROJECTS/ux_ui/sova/painelsubs.png',
      '/PROJECTS/ux_ui/sova/paineltwitter.png',
    ],
  },
  {
    id: 22,
    title: 'Mepo Website',
    logo: '/PROJECT LOGOS/LOGO MEPO.webp',
    subTitle: 'E-commerce UI/UX Layout',
    img: '/PROJECTS/ux_ui/website_mepo.jpg',
    desc1: 'Interface minimalista para e-commerce de moda, focada na exibição das peças e facilidade no fluxo de checkout.',
    desc2: 'Estética clean que valoriza as cores e detalhes das fotografias de produto.',
    behanceUrl: 'https://www.behance.net',
    category: 'UX_UI',
    isLandscape: true,
    objectPosition: 'top',
    galleryImages: ['/PROJECTS/ux_ui/website_mepo.jpg'],
  },

  // DECKS
  {
    id: 12,
    title: 'Arcnova®',
    logo: '/PROJECT LOGOS/LOGO ARCNOVA.png',
    logoHeight: 'h-24 md:h-32',
    subTitle: 'Pitch Deck Corporativo',
    img: '/PROJECTS/decks/arcnova_deck/1.jpg',
    desc1: 'Lindo deck de slides estruturado para a Arcnova, apresentando metas, cases e soluções tecnológicas da marca.',
    desc2: 'Alinhamento visual rigoroso com a paleta de cores corporativa, tipografia bold e diagramação estrita.',
    behanceUrl: 'https://www.behance.net',
    category: 'DECKS',
    isLandscape: true,
    objectPosition: 'top',
    imageScale: 1.15,
    galleryImages: [
      '/PROJECTS/decks/arcnova_deck/1.jpg',
      '/PROJECTS/decks/arcnova_deck/2.jpg',
      '/PROJECTS/decks/arcnova_deck/3.jpg',
      '/PROJECTS/decks/arcnova_deck/4.jpg',
    ],
  },
  {
    id: 14,
    title: 'Twitch® Khleo Thomas',
    logo: '/PROJECT LOGOS/LOGO TWITCH KHLEO THOMAS.png',
    logoHeight: 'h-24 md:h-32',
    subTitle: 'Pitch Deck Comercial',
    img: '/PROJECTS/decks/khleo_thomas_pitch_deck/1.jpg',
    desc1: 'Pitch deck comercial criado para apresentação de projetos de entretenimento de Khleo Thomas.',
    desc2: 'Diagramação no padrão horizontal (16:9) focada no mercado americano de mídia.',
    behanceUrl: 'https://www.behance.net',
    category: 'DECKS',
    isLandscape: true,
    galleryImages: [
      '/PROJECTS/decks/khleo_thomas_pitch_deck/1.jpg',
      '/PROJECTS/decks/khleo_thomas_pitch_deck/2.jpg',
      '/PROJECTS/decks/khleo_thomas_pitch_deck/3.jpg',
      '/PROJECTS/decks/khleo_thomas_pitch_deck/4.jpg',
      '/PROJECTS/decks/khleo_thomas_pitch_deck/5.jpg',
      '/PROJECTS/decks/khleo_thomas_pitch_deck/6.jpg',
      '/PROJECTS/decks/khleo_thomas_pitch_deck/7.jpg',
      '/PROJECTS/decks/khleo_thomas_pitch_deck/8.jpg',
    ],
  },
  {
    id: 27,
    title: 'Apresentação EMASFI',
    logo: '/PROJECT LOGOS/LOGO APRESENTAÇÃO EMASFI.png',
    subTitle: 'Pitch Presentation',
    img: '/PROJECTS/decks/emasfi_deck/emasfi_page_1.jpg',
    desc1: 'Apresentação de slides comercial desenvolvida para a EMASFI.',
    desc2: 'Estilo moderno e corporativo focado em captar investimentos e apresentar indicadores chave.',
    behanceUrl: 'https://www.behance.net',
    category: 'DECKS',
    isLandscape: true,
    galleryImages: [
      '/PROJECTS/decks/emasfi_deck/emasfi_page_1.jpg',
      '/PROJECTS/decks/emasfi_deck/emasfi_page_2.jpg',
      '/PROJECTS/decks/emasfi_deck/emasfi_page_3.jpg',
      '/PROJECTS/decks/emasfi_deck/emasfi_page_4.jpg',
      '/PROJECTS/decks/emasfi_deck/emasfi_page_5.jpg',
      '/PROJECTS/decks/emasfi_deck/emasfi_page_6.jpg',
      '/PROJECTS/decks/emasfi_deck/emasfi_page_7.jpg',
      '/PROJECTS/decks/emasfi_deck/emasfi_page_8.jpg',
      '/PROJECTS/decks/emasfi_deck/emasfi_page_9.jpg',
      '/PROJECTS/decks/emasfi_deck/emasfi_page_10.jpg',
    ],
  },
  {
    id: 13,
    title: 'Beatriz Evangelista | Portfólio',
    logo: '/PROJECT LOGOS/LOGO BEATRIZ EVANGELISTA.png',
    logoHeight: 'h-24 md:h-32',
    subTitle: 'Apresentação de Portfólio',
    img: '/PROJECTS/decks/portfolio_beatriz_evangelista/1.jpg',
    desc1: 'Portfólio comercial diagramado em slides para apresentação de projetos de design de interiores e arquitetura.',
    desc2: 'Uso estratégico de espaços vazios e foco nas fotos dos projetos para destacar a qualidade técnica e refinamento estético.',
    behanceUrl: 'https://www.behance.net',
    category: 'DECKS',
    isLandscape: true,
    galleryImages: [
      '/PROJECTS/decks/portfolio_beatriz_evangelista/1.jpg',
      '/PROJECTS/decks/portfolio_beatriz_evangelista/2.jpg',
      '/PROJECTS/decks/portfolio_beatriz_evangelista/3.jpg',
      '/PROJECTS/decks/portfolio_beatriz_evangelista/4.jpg',
      '/PROJECTS/decks/portfolio_beatriz_evangelista/5.jpg',
      '/PROJECTS/decks/portfolio_beatriz_evangelista/6.jpg',
      '/PROJECTS/decks/portfolio_beatriz_evangelista/7.jpg',
      '/PROJECTS/decks/portfolio_beatriz_evangelista/8.jpg',
      '/PROJECTS/decks/portfolio_beatriz_evangelista/9.jpg',
      '/PROJECTS/decks/portfolio_beatriz_evangelista/10.jpg',
    ],
  },
  {
    id: 15,
    title: 'NEX Playground™ | Khleo Thomas',
    logo: '/PROJECT LOGOS/LOGO NEX PLAYGROUND.webp',
    logoHeight: 'h-24 md:h-32',
    subTitle: 'Playground Presentation Deck',
    img: '/PROJECTS/decks/nex_playground_deck/1.jpg',
    desc1: 'Deck de apresentação promocional para o ecossistema Nex Playground.',
    desc2: 'Design futurista e dinâmico, focado na melhor transmissão conceitual do ecossistema.',
    behanceUrl: 'https://www.behance.net',
    category: 'DECKS',
    isLandscape: true,
    galleryImages: [
      '/PROJECTS/decks/nex_playground_deck/1.jpg',
      '/PROJECTS/decks/nex_playground_deck/2.jpg',
      '/PROJECTS/decks/nex_playground_deck/3.jpg',
      '/PROJECTS/decks/nex_playground_deck/4.jpg',
      '/PROJECTS/decks/nex_playground_deck/5.jpg',
      '/PROJECTS/decks/nex_playground_deck/6.jpg',
    ],
  },
  {
    id: 28,
    title: 'Ecofuding™ Pitch Deck',
    logo: '/PROJECT LOGOS/LOGO ECOFUNDING.webp',
    logoHeight: 'h-20 md:h-28',
    subTitle: 'Investor Deck Presentation',
    img: '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_1.jpg',
    desc1: 'Deck de apresentação estruturado para investidores da plataforma Ecofuding.',
    desc2: 'Explica a visão, tecnologia, mercado e a distribuição de tokens do projeto.',
    behanceUrl: 'https://www.behance.net',
    category: 'DECKS',
    isLandscape: true,
    galleryImages: [
      '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_1.jpg',
      '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_2.jpg',
      '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_3.jpg',
      '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_4.jpg',
      '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_5.jpg',
      '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_6.jpg',
      '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_7.jpg',
      '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_8.jpg',
      '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_9.jpg',
      '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_10.jpg',
      '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_11.jpg',
      '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_12.jpg',
    ],
  },
  {
    id: 11,
    title: 'Acelerador Racing | Jantar de 20 Anos',
    logo: '/PROJECT LOGOS/LOGO ACELERADOR RACING.webp',
    logoHeight: 'h-24 md:h-32',
    subTitle: 'Pitch Deck de Negócios',
    img: '/PROJECTS/decks/acelerador_apresentacao/1.png',
    desc1: 'Apresentação institucional e comercial desenvolvida para captação e aceleração de startups.',
    desc2: 'Design limpo com gráficos minimalistas e infográficos intuitivos para retenção de atenção em pitch meetings.',
    behanceUrl: 'https://www.behance.net',
    category: 'DECKS',
    isLandscape: true,
    galleryImages: [
      '/PROJECTS/decks/acelerador_apresentacao/1.png',
      '/PROJECTS/decks/acelerador_apresentacao/2.png',
      '/PROJECTS/decks/acelerador_apresentacao/3.png',
      '/PROJECTS/decks/acelerador_apresentacao/4.png',
      '/PROJECTS/decks/acelerador_apresentacao/5.png',
      '/PROJECTS/decks/acelerador_apresentacao/6-1.png',
      '/PROJECTS/decks/acelerador_apresentacao/6.png',
      '/PROJECTS/decks/acelerador_apresentacao/7.png',
      '/PROJECTS/decks/acelerador_apresentacao/8.png',
      '/PROJECTS/decks/acelerador_apresentacao/9.png',
      '/PROJECTS/decks/acelerador_apresentacao/10.png',
    ],
  },

  // MÍDIAS SOCIAIS E FLYERS
  {
    id: 24,
    title: 'Rafael Edison | Workshop',
    subTitle: 'Workshop Social Media Pack',
    img: '/PROJECTS/workshop/rafael_edison/feed.jpg',
    desc1: 'Pacote de layouts promocionais criado para divulgação do Workshop do fotógrafo Rafael Edison nas redes sociais.',
    desc2: 'Consiste em banners institucionais, posts de feed e stories minimalistas com tipografia elegante.',
    behanceUrl: 'https://www.behance.net',
    category: 'FLYERS',
    isLandscape: true,
    thumbnailRatio: 'square',
    galleryImages: [
      '/PROJECTS/workshop/rafael_edison/feed.jpg',
      '/PROJECTS/workshop/rafael_edison/story.jpg',
      '/PROJECTS/workshop/rafael_edison/banner_1.jpg',
      '/PROJECTS/workshop/rafael_edison/banner_2.jpg',
    ],
  },
  {
    id: 25,
    title: 'Tarricone | Workshop',
    subTitle: 'Promotional Branding Poster',
    img: '/PROJECTS/workshop/tarricone_workshop.jpg',
    desc1: 'Peças publicitárias desenvolvidas para o Workshop Tarricone, focado em desenvolvimento de marca e marketing digital.',
    desc2: 'Criação de identidade visual temporária e posters de divulgação.',
    behanceUrl: 'https://www.behance.net',
    category: 'FLYERS',
    isLandscape: true,
    thumbnailRatio: 'portrait',
    galleryImages: ['/PROJECTS/workshop/tarricone_workshop.jpg'],
  },
  {
    id: 16,
    title: 'HB Entertainment',
    subTitle: 'Design de Flyers Promocionais',
    img: '/PROJECTS/event_flyers/hb_entertainment_event_flyers/get_loud.jpg',
    desc1: 'Série de flyers desenvolvidos para festas e eventos noturnos, explorando tipografia urbana, montagens dinâmicas e cores vibrantes.',
    desc2: 'Materiais publicitários projetados especificamente para alto engajamento em redes sociais e Stories.',
    behanceUrl: 'https://www.behance.net',
    category: 'FLYERS',
    isLandscape: true,
    thumbnailRatio: 'portrait',
    galleryImages: [
      '/PROJECTS/event_flyers/hb_entertainment_event_flyers/get_loud.jpg',
      '/PROJECTS/event_flyers/hb_entertainment_event_flyers/nostalgia_1.jpg',
      '/PROJECTS/event_flyers/hb_entertainment_event_flyers/nostalgia_2.jpg',
      '/PROJECTS/event_flyers/hb_entertainment_event_flyers/nostalgia_3.jpg',
      '/PROJECTS/event_flyers/hb_entertainment_event_flyers/nostalgia_4.jpg',
    ],
  },
];

export const categoryTranslationMap: Record<string, { pt: string; en: string }> = {
  'IDENTIDADE VISUAL': { pt: 'IDENTIDADE VISUAL', en: 'VISUAL IDENTITY' },
  'UX/UI': { pt: 'UX/UI', en: 'UX/UI' },
  'DECKS': { pt: 'DECKS', en: 'PITCH DECKS' },
  'MÍDIAS SOCIAIS E FLYERS': { pt: 'MÍDIAS SOCIAIS E FLYERS', en: 'SOCIAL MEDIA & FLYERS' }
};

export const projectTranslations: Record<number, {
  subTitle: { pt: string; en: string };
  desc1: { pt: string; en: string };
  desc2: { pt: string; en: string };
}> = {
  8: {
    subTitle: { pt: 'Manual de Identidade Zetta', en: 'Zetta Identity Manual' },
    desc1: { pt: 'Manual técnico e diretrizes visuais criadas para a marca Zetta.', en: 'Technical manual and visual guidelines created for the Zetta brand.' },
    desc2: { pt: 'O projeto foca no uso correto do logotipo, tipografia e comportamento cromático.', en: 'The project focuses on the correct use of the logo, typography, and chromatic behavior.' }
  },
  26: {
    subTitle: { pt: 'Manual de Identidade Visual LOUD', en: 'LOUD Identity Manual' },
    desc1: { pt: 'Manual de identidade visual desenvolvido para a LOUD®.', en: 'Visual identity manual developed for LOUD®.' },
    desc2: { pt: 'Define paleta cromática secundária, variações autorizadas de logotipo e aplicações físicas e digitais da marca.', en: 'Defines secondary color palette, authorized logo variations, and physical and digital applications of the brand.' }
  },
  5: {
    subTitle: { pt: 'Manual de Identidade Visual Ecofunding', en: 'Ecofunding Identity Manual' },
    desc1: { pt: 'Manual de Identidade Visual completo desenvolvido para o projeto Ecofunding.', en: 'Complete Visual Identity manual developed for the Ecofunding project.' },
    desc2: { pt: 'Foco na fusão conceitual de ativos ecológicos e tecnologia Web3.', en: 'Focus on the conceptual fusion of ecological assets and Web3 technology.' }
  },
  4: {
    subTitle: { pt: 'Estudo de Marca Moirarte', en: 'Moirarte Brand Study' },
    desc1: { pt: 'Projeto de branding para a Moirarte, apresentando as inspirações do logotipo, variações cromáticas e regras de assinatura visual.', en: 'Branding project for Moirarte, presenting the logo inspirations, chromatic variations, and visual signature rules.' },
    desc2: { pt: 'Garante o alinhamento estético sofisticado exigido pelo posicionamento de mercado da marca.', en: 'Ensures the sophisticated aesthetic alignment required by the brand\'s market positioning.' }
  },
  7: {
    subTitle: { pt: 'Guia Visual Sucorama', en: 'Sucorama Visual Guide' },
    desc1: { pt: 'Guia visual e manual prático desenvolvido para a identidade visual da Sucorama.', en: 'Visual guide and practical manual developed for the visual identity of Sucorama.' },
    desc2: { pt: 'Definições estéticas focadas em expressar naturalidade e energia saudável.', en: 'Aesthetic definitions focused on expressing naturalness and healthy energy.' }
  },
  9: {
    subTitle: { pt: 'Estudo de Marca ESB', en: 'ESB Brand Study' },
    desc1: { pt: 'Apresentação detalhada da reestruturação da marca ESB, cobrindo desde a pesquisa conceitual até as peças publicitárias finais.', en: 'Detailed presentation of the ESB brand restructuring, covering from conceptual research to the final advertising pieces.' },
    desc2: { pt: 'Estética alinhada com as melhores práticas de design de alto nível.', en: 'Aesthetics aligned with the best practices of high-level design.' }
  },
  3: {
    subTitle: { pt: 'Manual de Identidade Next', en: 'Next Identity Manual' },
    desc1: { pt: 'Diretrizes de marca para o ecossistema Next. Apresenta o grid construtivo do logotipo e o comportamento tipográfico oficial.', en: 'Brand guidelines for the Next ecosystem. It presents the logo constructive grid and the official typographic behavior.' },
    desc2: { pt: 'Design limpo e técnico orientado para tecnologia de ponta.', en: 'Clean and technical design oriented for cutting-edge technology.' }
  },
  6: {
    subTitle: { pt: 'Estudo de Marca Altitude 1100', en: 'Altitude 1100 Brand Study' },
    desc1: { pt: 'Manual de Identidade de marca criado para a marca de Café Altitude 1100.', en: 'Brand Identity manual created for the Altitude 1100 Coffee brand.' },
    desc2: { pt: 'Combinação clássica e rústica para traduzir a origem do grão selecionado.', en: 'Classic and rustic combination to translate the origin of the selected bean.' }
  },
  2: {
    subTitle: { pt: 'Estudo de Marca Agiliza', en: 'Agiliza Brand Study' },
    desc1: { pt: 'Manual de aplicação de marca desenvolvido para a Agiliza, detalhando a paleta cromática, área de proteção e aplicação em diferentes fundos.', en: 'Brand application manual developed for Agiliza, detailing the color palette, protection zone, and application on different backgrounds.' },
    desc2: { pt: 'Diretrizes focadas em usabilidade e forte apelo visual.', en: 'Guidelines focused on usability and strong visual appeal.' }
  },
  1: {
    subTitle: { pt: 'Manual de Identidade Inowave', en: 'Inowave Identity Manual' },
    desc1: { pt: 'Manual de identidade visual desenvolvido para a Inowave. O projeto aborda a construção da marca, paleta de cores institucional, regras de aplicação tipográfica e diagramação.', en: 'Visual identity manual developed for Inowave. The project covers brand construction, institutional color palette, typographic application rules, and layout.' },
    desc2: { pt: 'Desenvolvido para representar inovação tecnológica de forma minimalista.', en: 'Developed to represent technological innovation in a minimalist way.' }
  },
  20: {
    subTitle: { pt: 'Estudo de Caso de Landing Page', en: 'Landing Page Case Study' },
    desc1: { pt: 'Landing page projetada para a agência WandrMedia, destacando depoimentos de clientes e portfólio visual.', en: 'Landing page designed for the WandrMedia agency, highlighting client testimonials and a visual portfolio.' },
    desc2: { pt: 'Layout responsivo e moderno otimizado para conversões.', en: 'Responsive and modern layout optimized for conversions.' }
  },
  10: {
    subTitle: { pt: 'Estudo de Tokens do Projeto', en: 'Project Tokens Study' },
    desc1: { pt: 'Concepção criativa de NFTs e Tokens utilitários para a plataforma Ecofuding, incluindo renders em 3D e telas desktop.', en: 'Creative design of NFTs and utility Tokens for the Ecofuding platform, including 3D renders and desktop screens.' },
    desc2: { pt: 'Layout de alta fidelidade integrando a linguagem de blockchain ao ecossistema verde do projeto.', en: 'High-fidelity layout integrating blockchain language with the project\'s green ecosystem.' }
  },
  19: {
    subTitle: { pt: 'Portal Gamer de e-Sports', en: 'Gamer e-Sports Portal' },
    desc1: { pt: 'Portal de notícias e campeonatos gamer GGEZ. Traz cores escuras de alto contraste e componentes dedicados à comunidade de e-sports.', en: 'GGEZ gamer news and tournament portal. It features high-contrast dark colors and components dedicated to the e-sports community.' },
    desc2: { pt: 'Layout moderno e intuitivo ideal para leitura dinâmica de atualizações do ecossistema gamer.', en: 'Modern and intuitive layout ideal for dynamic reading of gaming ecosystem updates.' }
  },
  17: {
    subTitle: { pt: 'Estudo de Interface Corporativa', en: 'Corporate Interface Study' },
    desc1: { pt: 'Concepção visual do website institucional Digitus. O layout traz foco em usabilidade, contraste elevado e visualização limpa de dados.', en: 'Visual design of the Digitus institutional website. The layout focuses on usability, high contrast, and clean data visualization.' },
    desc2: { pt: 'Desenvolvido com foco no segmento corporativo e soluções B2B.', en: 'Developed with a focus on the corporate segment and B2B solutions.' }
  },
  21: {
    subTitle: { pt: 'Portal Financeiro Fintech', en: 'Fintech Financial Portal' },
    desc1: { pt: 'Portal corporativo para a Fintech Corban, aliando solidez de segurança bancária a uma linguagem visual limpa e amigável.', en: 'Corporate portal for Corban Fintech, combining the solidity of banking security with a clean and friendly visual language.' },
    desc2: { pt: 'Experiência focada no usuário final do setor financeiro moderno.', en: 'Experience focused on the end user of the modern financial sector.' }
  },
  18: {
    subTitle: { pt: 'Estudo de Interface Geométrica', en: 'Geometric Interface Study' },
    desc1: { pt: 'Estudo de interface para o Flying Studio, integrando animações dinâmicas e grades geométricas no frontend.', en: 'Interface study for Flying Studio, integrating dynamic animations and geometric grids in the frontend.' },
    desc2: { pt: 'Proposta estética que celebra a proporção e a composição de forma inovadora.', en: 'Aesthetic proposal celebrating proportion and composition in an innovative way.' }
  },
  23: {
    subTitle: { pt: 'Kit de Streamer e Redes Sociais', en: 'Streamer & Social Media Kit' },
    desc1: { pt: 'Kit completo de branding e identidade visual para streamers desenvolvido para o canal do Sova.', en: 'Complete branding and visual identity kit for streamers developed for Sova\'s channel.' },
    desc2: { pt: 'Desenvolvido para criar uma conexão profunda com o público gamer através de assets dinâmicos.', en: 'Developed to create a deep connection with the gaming audience through dynamic assets.' }
  },
  22: {
    subTitle: { pt: 'Estudo de Interface de E-commerce', en: 'E-commerce Interface Study' },
    desc1: { pt: 'Interface minimalista para e-commerce de moda, focada na exibição das peças e facilidade no fluxo de checkout.', en: 'Minimalist interface for fashion e-commerce, focused on displaying items and ease in the checkout flow.' },
    desc2: { pt: 'Projetado para maximizar a conversão com design limpo e navegação ágil.', en: 'Designed to maximize conversion with clean design and navigation.' }
  },
  12: {
    subTitle: { pt: 'Apresentação Institucional Arcnova', en: 'Arcnova Institutional Presentation' },
    desc1: { pt: 'Lindo deck de slides estruturado para a Arcnova, apresentando metas, cases e soluções tecnológicas da marca.', en: 'Beautiful slide deck structured for Arcnova, presenting goals, cases, and technological solutions of the brand.' },
    desc2: { pt: 'Estilo clean e tecnológico focado em investidores e clientes corporativos.', en: 'Clean and technological style focused on investors and corporate clients.' }
  },
  14: {
    subTitle: { pt: 'Pitch Deck Comercial', en: 'Commercial Pitch Deck' },
    desc1: { pt: 'Pitch deck comercial criado para apresentação de projetos de entretenimento de Khleo Thomas.', en: 'Commercial pitch deck created for the presentation of Khleo Thomas\' entertainment projects.' },
    desc2: { pt: 'Design corporativo e elegante elaborado para aproximar marcas de entretenimento.', en: 'Corporate and elegant design crafted to bring entertainment brands together.' }
  },
  27: {
    subTitle: { pt: 'Pitch Deck Comercial EMASFI', en: 'EMASFI Commercial Pitch Deck' },
    desc1: { pt: 'Apresentação de slides comercial desenvolvida para a EMASFI.', en: 'Commercial slide deck developed for EMASFI.' },
    desc2: { pt: 'Layout profissional com dados claros para prospecção de novos negócios.', en: 'Professional layout with clear data for prospecting new businesses.' }
  },
  13: {
    subTitle: { pt: 'Portfólio em Slides', en: 'Portfolio in Slides' },
    desc1: { pt: 'Portfólio comercial diagramado em slides para apresentação de projetos de design de interiores e arquitetura.', en: 'Commercial portfolio layed out in slides for presentation of interior design and architecture projects.' },
    desc2: { pt: 'Apresentação limpa valorizando renders de alta fidelidade e estudos volumétricos.', en: 'Clean presentation emphasizing high-fidelity renders and volumetric studies.' }
  },
  15: {
    subTitle: { pt: 'Pitch Deck Nex Playground', en: 'Nex Playground Pitch Deck' },
    desc1: { pt: 'Deck de apresentação promocional para o ecossistema Nex Playground.', en: 'Promotional presentation deck for the Nex Playground ecosystem.' },
    desc2: { pt: 'Estética voltada ao público gamer e casual de alta fidelidade gráfica.', en: 'Aesthetics geared towards gaming and casual audience of high graphic fidelity.' }
  },
  28: {
    subTitle: { pt: 'Pitch Deck para Investidores', en: 'Pitch Deck for Investors' },
    desc1: { pt: 'Deck de apresentação estruturado para investidores da plataforma Ecofuding.', en: 'Structured presentation deck for investors of the Ecofunding platform.' },
    desc2: { pt: 'Dados ambientais e modelos de tokenomics exibidos de maneira moderna e atraente.', en: 'Environmental data and tokenomics models displayed in a modern and attractive way.' }
  },
  11: {
    subTitle: { pt: 'Pitch Deck de Aceleração', en: 'Acceleration Pitch Deck' },
    desc1: { pt: 'Apresentação institucional e comercial desenvolvida para captação e aceleração de startups.', en: 'Institutional and commercial presentation developed for startup sourcing and acceleration.' },
    desc2: { pt: 'Design premium focado em prender a atenção e transmitir clareza em propostas de valor.', en: 'Premium design focused on capturing attention and conveying clarity in value propositions.' }
  },
  24: {
    subTitle: { pt: 'Workshop de Fotografia', en: 'Photography Workshop' },
    desc1: { pt: 'Pacote de layouts promocionais criado para divulgação do Workshop do fotógrafo Rafael Edison nas redes sociais.', en: 'Package of promotional layouts created for the promotion of photographer Rafael Edison\'s Workshop on social media.' },
    desc2: { pt: 'Flyers que exploram enquadramento fotográfico, luzes dramáticas e tipografia arrojada.', en: 'Flyers that explore photographic framing, dramatic lights, and bold typography.' }
  },
  25: {
    subTitle: { pt: 'Workshop de Marketing Digital', en: 'Digital Marketing Workshop' },
    desc1: { pt: 'Peças publicitárias desenvolvidas para o Workshop Tarricone, focado em desenvolvimento de marca e marketing digital.', en: 'Advertising pieces developed for the Tarricone Workshop, focused on brand development and digital marketing.' },
    desc2: { pt: 'Identidade vibrante desenvolvida para captação nas redes sociais.', en: 'Vibrant identity developed for user acquisition on social media.' }
  },
  16: {
    subTitle: { pt: 'Flyers de Eventos Noturnos', en: 'Nightlife Event Flyers' },
    desc1: { pt: 'Série de flyers desenvolvidos para festas e eventos noturnos, explorando tipografia urbana, montagens dinâmicas e cores vibrantes.', en: 'Series of flyers developed for parties and nightlife events, exploring urban typography, dynamic montages, and vibrant colors.' },
    desc2: { pt: 'Direção de arte focada no público jovem e na cultura noturna urbana.', en: 'Art direction focused on the youth audience and urban nightlife culture.' }
  }
};

export const categoryLabels: Record<ProjectCategory, { pt: string; en: string }> = {
  BRANDING: { pt: 'Identidade visual', en: 'Visual identity' },
  UX_UI: { pt: 'UX/UI', en: 'UX/UI' },
  DECKS: { pt: 'Deck', en: 'Pitch deck' },
  FLYERS: { pt: 'Mídias sociais', en: 'Social media' },
};

// Ordem da grade: os primeiros aparecem no topo. Provisória até o João definir.
export const workOrder: number[] = [
  8, 19, 26, 12, 23, 4, 16, 9, 10, 3, 14, 17, 5, 18,
  24, 1, 20, 15, 7, 21, 13, 6, 22, 28, 2, 27, 11, 25,
];

export const orderedProjects: Project[] = workOrder
  .map((id) => projects.find((p) => p.id === id))
  .filter((p): p is Project => Boolean(p));
