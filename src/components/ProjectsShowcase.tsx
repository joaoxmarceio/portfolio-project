'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ArrowUp } from 'lucide-react';

type ProjectCategory = 'BRANDING' | 'UX_UI' | 'DECKS' | 'FLYERS';

interface Project {
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
  imageStyle?: React.CSSProperties;
}

const projects: Project[] = [
  // IDENTIDADE VISUAL
  {
    id: 8,
    title: 'ZETTA',
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
    title: 'EcoFunding™',
    subTitle: 'Manual de Identidade Visual',
    img: '/PROJECTS/branding_guidelines/eco_funding_branding_kit/1.jpg',
    desc1: 'Manual de Identidade Visual completo desenvolvido para o projeto Eco Funding.',
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
    subTitle: 'Manual de Marca',
    img: '/PROJECTS/branding_guidelines/moirarte/1.jpg',
    desc1: 'Projeto de branding para a Moirarte, apresentando as inspirações do logotipo, variações cromáticas e regras de assinatura visual.',
    desc2: 'Alinha estética refinada com solidez corporativa para destacar a atuação artística da marca.',
    behanceUrl: 'https://www.behance.net',
    category: 'BRANDING',
    isLandscape: false,
    objectPosition: 'top',
    imageScale: 1.06,
    galleryImages: [
      '/PROJECTS/branding_guidelines/moirarte/1.jpg',
      '/PROJECTS/branding_guidelines/moirarte/2.jpg',
      '/PROJECTS/branding_guidelines/moirarte/3.jpg',
      '/PROJECTS/branding_guidelines/moirarte/4.jpg',
      '/PROJECTS/branding_guidelines/moirarte/5.jpg',
      '/PROJECTS/branding_guidelines/moirarte/6.jpg',
    ],
  },
  {
    id: 7,
    title: 'Sucorama',
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
    img: '/PROJECTS/branding_guidelines/agiliza/1.jpg',
    desc1: 'Manual de aplicação de marca desenvolvido para a Agiliza, detalhando a paleta cromática, área de proteção e aplicação em diferentes fundos.',
    desc2: 'Foco na versatilidade da marca para garantir legibilidade e impacto visual em todas as mídias.',
    behanceUrl: 'https://www.behance.net',
    category: 'BRANDING',
    isLandscape: false,
    objectPosition: 'top',
    imageScale: 1.06,
    galleryImages: [
      '/PROJECTS/branding_guidelines/agiliza/1.jpg',
      '/PROJECTS/branding_guidelines/agiliza/2.jpg',
      '/PROJECTS/branding_guidelines/agiliza/3.jpg',
      '/PROJECTS/branding_guidelines/agiliza/4.jpg',
      '/PROJECTS/branding_guidelines/agiliza/5.jpg',
    ],
  },
  {
    id: 1,
    title: 'INOWAVE®',
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
    title: 'EcoFunding™ Tokens',
    subTitle: 'Estudo de Tokens do Projeto',
    img: '/PROJECTS/case_study/ecofunding_tokens/render.jpg',
    desc1: 'Concepção criativa de NFTs e Tokens utilitários para a plataforma EcoFunding, incluindo renders em 3D e telas desktop.',
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
      '/PROJECTS/ux_ui/sova/paineldonate.png',
      '/PROJECTS/ux_ui/sova/painellojinha.png',
      '/PROJECTS/ux_ui/sova/painelpcspecs.png',
      '/PROJECTS/ux_ui/sova/painelsobremim.png',
      '/PROJECTS/ux_ui/sova/painelsubs.png',
      '/PROJECTS/ux_ui/sova/paineltwitter.png',
      '/PROJECTS/ux_ui/sova/pannelswebcam.png',
    ],
  },
  {
    id: 22,
    title: 'Mepo Website',
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
    title: 'EcoFunding™ Pitch Deck',
    subTitle: 'Investor Deck Presentation',
    img: '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_1.jpg',
    desc1: 'Deck de apresentação estruturado para investidores da plataforma EcoFunding.',
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

const categoriesData: Category[] = [
  {
    name: 'IDENTIDADE VISUAL',
    projects: projects.filter((p) => p.category === 'BRANDING'),
  },
  {
    name: 'UX/UI',
    projects: projects.filter((p) => p.category === 'UX_UI'),
  },
  {
    name: 'DECKS',
    projects: projects.filter((p) => p.category === 'DECKS'),
  },
  {
    name: 'MÍDIAS SOCIAIS E FLYERS',
    projects: projects.filter((p) => p.category === 'FLYERS'),
  },
];

interface Category {
  name: string;
  projects: Project[];
}

export default function ProjectsShowcase() {
  return (
    <div className="w-full bg-[#121212] flex flex-col">
      {categoriesData.map((category, idx) => (
        <CategoryShowcaseBlock
          key={category.name}
          categoryName={category.name}
          projects={category.projects}
          isLeft={idx % 2 !== 0} // Interleave sections (0 is right, 1 is left, 2 is right, etc.)
          categoryId={`category-block-${idx}`}
        />
      ))}
    </div>
  );
}

interface CategoryBlockProps {
  categoryName: string;
  projects: Project[];
  isLeft: boolean;
  categoryId: string;
}

function CategoryShowcaseBlock({ categoryName, projects: catProjects, isLeft, categoryId }: CategoryBlockProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const currentProject = catProjects.find((p) => p.id === activeProject);

  const lastProjectRef = useRef<Project | null>(null);
  if (currentProject) {
    lastProjectRef.current = currentProject;
  }
  const displayProject = currentProject || lastProjectRef.current;

  const safeActiveIdx = activeIdx >= 0 && activeIdx < catProjects.length ? activeIdx : 0;

  const activeProj = catProjects[safeActiveIdx];
  const activeScale = activeProj?.imageScale || 1.0;

  const getThumbnailClasses = (project?: Project) => {
    const ratio = project?.thumbnailRatio || 'landscape';
    if (ratio === 'portrait') {
      return {
        desktop: 'w-[248px] h-[330px] aspect-[3/4]',
        mobile: 'w-[225px] h-[300px] aspect-[3/4] mx-auto',
      };
    }
    if (ratio === 'square') {
      return {
        desktop: 'w-[330px] h-[330px] aspect-square',
        mobile: 'w-[300px] h-[300px] aspect-square mx-auto',
      };
    }
    return {
      desktop: 'w-[588px] h-[330px] aspect-video',
      mobile: 'w-full aspect-video max-w-lg mx-auto',
    };
  };

  // Reset zoom and sync activeIdx when closing or changing projects
  React.useEffect(() => {
    if (activeProject === null) {
      setIsZoomed(false);
    } else {
      const idx = catProjects.findIndex((p) => p.id === activeProject);
      if (idx !== -1) {
        setActiveIdx(idx);
      }
    }
  }, [activeProject, catProjects]);

  // Handle escape key to zoom out or close details view
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeProject !== null) {
          if (isZoomed) {
            setIsZoomed(false);
          } else {
            setActiveProject(null);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, isZoomed]);

  return (
    <div
      id={categoryId}
      ref={constraintsRef}
      className={`relative w-full bg-[#121212] border-b border-white/5 flex justify-center px-6 lg:px-16 select-none transition-all duration-300 ${
        activeProject !== null
          ? 'py-24 min-h-screen items-start'
          : 'py-16 h-[70vh] min-h-[490px] items-center overflow-hidden'
      }`}
    >
      <AnimatePresence mode="wait">
        {activeProject === null ? (
          <div className={`w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-16 relative min-h-[350px] ${
            isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}>
            {/* Desktop Active Image (Flex side-by-side layout) */}
            <div className="hidden lg:flex w-1/2 items-center justify-center relative">
              {catProjects.length > 0 && (
                <motion.div 
                  className={`${getThumbnailClasses(catProjects[safeActiveIdx]).desktop} overflow-hidden relative border border-white/10 shadow-soft cursor-grab active:cursor-grabbing`}
                  style={{ borderRadius: '5px' }}
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0.15}
                  dragMomentum={false}
                  whileHover={{ scale: 1.02 }}
                  whileDrag={{ scale: 1.05 }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      transform: activeScale !== 1.0 ? `scale(${activeScale})` : 'none',
                      transformOrigin: 'top center',
                    }}
                  >
                    <img
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '5px',
                        objectPosition: catProjects[safeActiveIdx]?.objectPosition || 'center',
                      }}
                      className="w-full h-full object-cover z-10 pointer-events-none"
                      src={catProjects[safeActiveIdx]?.img}
                      alt={catProjects[safeActiveIdx]?.title}
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Static Image View (Mobile Top) */}
            <div className="block lg:hidden w-full max-w-lg">
              {catProjects.length > 0 && (
                <div 
                  className={`${getThumbnailClasses(catProjects[safeActiveIdx]).mobile} overflow-hidden relative border border-white/10 shadow-soft`}
                  style={{ borderRadius: '5px' }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      transform: activeScale !== 1.0 ? `scale(${activeScale})` : 'none',
                      transformOrigin: 'top center',
                    }}
                  >
                    <motion.img
                      key={`desktop-thumb-${categoryName}-${safeActiveIdx}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '5px',
                        objectPosition: catProjects[safeActiveIdx]?.objectPosition || 'center',
                      }}
                      className="w-full h-full object-cover"
                      src={catProjects[safeActiveIdx]?.img}
                      alt={catProjects[safeActiveIdx]?.title}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Projects List Wrapper */}
            <div className={`w-full lg:w-1/2 flex flex-col justify-center ${
              isLeft ? 'items-start' : 'items-end'
            }`}>
              <ul className={`flex flex-col gap-1.5 w-full max-w-[220px] sm:max-w-[300px] lg:max-w-[420px] ${
                isLeft ? 'items-start text-left' : 'items-end text-right'
              }`}>
                {/* Category Header Title */}
                <li className={`flex w-full items-center gap-2 text-[8px] font-mono uppercase tracking-widest text-white/40 mb-2 ${
                  isLeft ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <span>{categoryName}</span>
                  <span className="bg-white/20 h-[1px] flex-1" />
                </li>

                {catProjects.map((proj, idx) => (
                  <motion.li
                     key={proj.id}
                     layoutId={`text-header-${proj.id}`}
                     style={{ opacity: safeActiveIdx === idx ? 1 : 0.5 }}
                     className={`relative flex w-full cursor-pointer items-center text-[17px] font-normal tracking-[-0.03em] leading-tight text-white py-0.5 whitespace-nowrap ${
                       isLeft ? 'justify-start text-left' : 'justify-end text-right'
                     }`}
                     onMouseEnter={() => setActiveIdx(idx)}
                     onClick={() => {
                       setActiveIdx(idx);
                       setActiveProject(proj.id);
                     }}
                  >
                    {proj.title}
                    {safeActiveIdx === idx && (
                      <motion.div
                        layoutId={`dot-indicator-${categoryName}`}
                        transition={{ duration: 0.2 }}
                        className="bg-white absolute rounded-full size-1"
                        style={{
                          left: isLeft ? '-12px' : 'auto',
                          right: isLeft ? 'auto' : '-12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                        }}
                      />
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          /* Detailed Expanded View - Behance Style Layout within the Category Section */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => setActiveProject(null)}
            onMouseLeave={() => setActiveProject(null)}
            className={`w-full mx-auto cursor-pointer py-12 transition-all duration-500 ease-in-out ${
              isZoomed ? 'max-w-6xl' : 'max-w-3xl'
            }`}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col gap-8 w-full cursor-default"
            >
              {/* Back / Close button */}
              <button
                onClick={() => setActiveProject(null)}
                className="self-end flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                <X className="size-4" /> FECHAR
              </button>

              {/* Title Section */}
              <div className="relative h-20 md:h-24 flex items-end">
                <motion.h1
                  className="absolute text-5xl md:text-[64px] font-normal tracking-[-0.03em] text-white"
                  layoutId={`text-header-${displayProject?.id}`}
                >
                  {displayProject?.title}
                </motion.h1>
              </div>

              {/* Sub Title & Text Below */}
              <div className="w-full flex flex-col gap-4 mt-2">
                <div className="w-full flex items-center gap-2">
                  <h2 className="text-white text-xl md:text-2xl font-light tracking-tight">
                    {displayProject?.subTitle}
                  </h2>
                  <div className="bg-white/20 h-[1px] flex-1 rounded-full" />
                </div>

                <div className="text-white/60 flex flex-col gap-3 text-sm leading-relaxed">
                  <p>{displayProject?.desc1}</p>
                  <p>{displayProject?.desc2}</p>
                </div>
              </div>



              {/* Project Overview (Vertical Stack of Images representing case study pages/posters) */}
              <div
                onClick={() => setIsZoomed(!isZoomed)}
                className={`flex flex-col w-full ${displayProject?.isLandscape ? 'gap-4' : 'gap-0'} ${
                  isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                } ${!displayProject?.isLandscape ? 'shadow-soft' : ''}`}
              >
                {displayProject?.galleryImages && displayProject.galleryImages.map((imgUrl, i) => {
                  const isLandscape = !!displayProject.isLandscape;
                  const total = displayProject.galleryImages.length;
                  
                  // Style & border radius configurations
                  let borderRadiusStyle: React.CSSProperties = {};
                  if (isLandscape) {
                    borderRadiusStyle = { borderRadius: '5px' };
                  } else {
                    if (total === 1) {
                      borderRadiusStyle = { borderRadius: '5px' };
                    } else if (i === 0) {
                      borderRadiusStyle = { borderTopLeftRadius: '5px', borderTopRightRadius: '5px' };
                    } else if (i === total - 1) {
                      borderRadiusStyle = { borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' };
                    } else {
                      borderRadiusStyle = { borderRadius: '0px' };
                    }
                  }

                  // Border styling configurations to eliminate gaps/seams between contiguous slides
                  let borderClass = '';
                  if (isLandscape) {
                    borderClass = 'border border-white/5 shadow-soft';
                  } else {
                    if (total === 1) {
                      borderClass = 'border border-white/5';
                    } else if (i === 0) {
                      borderClass = 'border-t border-x border-white/5';
                    } else if (i === total - 1) {
                      borderClass = 'border-b border-x border-white/5';
                    } else {
                      borderClass = 'border-x border-white/5';
                    }
                  }

                  return (
                    <motion.img
                      key={imgUrl}
                      style={{
                        width: '100%',
                        height: 'auto',
                        ...borderRadiusStyle
                      }}
                      src={imgUrl}
                      alt={`${displayProject?.title} Overview ${i + 1}`}
                      className={`w-full object-cover transition-all duration-300 ${borderClass}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i + 0.2 }}
                    />
                  );
                })}
              </div>

              {/* Project Details / Metadata Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8 mt-12 mb-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-white/40">Cliente</span>
                  <span className="text-sm font-light text-white">{displayProject?.title}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-white/40">Função</span>
                  <span className="text-sm font-light text-white">Design & Direção</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-white/40">Ano</span>
                  <span className="text-sm font-light text-white">2026</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-white/40">Ferramentas</span>
                  <span className="text-sm font-light text-white">Photoshop, Illustrator</span>
                </div>
              </div>

              {/* Bottom Navigation: Volte para cima & Fechar */}
              <div className="flex justify-between items-center border-t border-white/10 pt-8 mt-4 text-xs font-medium uppercase tracking-widest">
                <button
                  onClick={() => {
                    const el = document.getElementById(categoryId);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowUp className="size-4" /> VOLTE PARA CIMA
                </button>
                <button
                  onClick={() => setActiveProject(null)}
                  className="flex items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="size-4" /> FECHAR
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
