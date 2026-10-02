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
  logo?: string;
  invertLogo?: boolean;
  logoHeight?: string;
  gridImages?: string[];
}

const projects: Project[] = [
  // IDENTIDADE VISUAL
  {
    id: 29,
    title: 'BALUARTE®',
    logo: '/PROJECT LOGOS/LOGO BALUARTE.png',
    subTitle: 'Manual de identidade BALUARTE',
    img: '/PROJECTS/branding_guidelines/baluarte/01.jpg',
    desc1: 'Identidade visual da BALUARTE, produtora criativa de vídeo, imagem e motion. O conceito vem da arquitetura defensiva: o símbolo são dois blocos separados por uma seteira cortada a 45 graus, só com retas.',
    desc2: 'O manual traz paleta, tipografia (Benzin e Monopack), aplicações em cartão, crachá, cartaz, telão e celular, e peças em motion.',
    behanceUrl: 'https://www.behance.net/gallery/255491763/BALUARTE',
    category: 'BRANDING',
    isLandscape: false,
    objectPosition: 'top',
    imageScale: 1.06,
    galleryImages: [
      '/PROJECTS/branding_guidelines/baluarte/01.jpg',
      '/PROJECTS/branding_guidelines/baluarte/02.jpg',
      '/PROJECTS/branding_guidelines/baluarte/03.mp4',
      '/PROJECTS/branding_guidelines/baluarte/04.jpg',
      '/PROJECTS/branding_guidelines/baluarte/05.jpg',
      '/PROJECTS/branding_guidelines/baluarte/06.mp4',
      '/PROJECTS/branding_guidelines/baluarte/07.jpg',
      '/PROJECTS/branding_guidelines/baluarte/08.mp4',
      '/PROJECTS/branding_guidelines/baluarte/09.jpg',
      '/PROJECTS/branding_guidelines/baluarte/10.jpg',
      '/PROJECTS/branding_guidelines/baluarte/11.jpg',
      '/PROJECTS/branding_guidelines/baluarte/12.jpg',
      '/PROJECTS/branding_guidelines/baluarte/13.jpg',
      '/PROJECTS/branding_guidelines/baluarte/14.jpg',
      '/PROJECTS/branding_guidelines/baluarte/15.mp4',
      '/PROJECTS/branding_guidelines/baluarte/16.jpg',
      '/PROJECTS/branding_guidelines/baluarte/17.jpg',
      '/PROJECTS/branding_guidelines/baluarte/18.jpg',
      '/PROJECTS/branding_guidelines/baluarte/19.jpg',
    ],
  },
  {
    id: 8,
    title: 'ZETTA',
    logo: '/PROJECT LOGOS/LOGO ZETTA.webp',
    invertLogo: true,
    subTitle: 'Manual de identidade Zetta',
    img: '/PROJECTS/branding_guidelines/zetta_brand_kit/1.jpg',
    desc1: 'Identidade visual da Zetta, marca de motos e scooters elétricas de Franca: logotipo, paleta, tipografia (Zalando e Space Grotesk) e grafismos.',
    desc2: 'O manual mostra a marca aplicada em uniforme, loja, redes sociais e campanha.',
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
    subTitle: 'Manual de identidade LOUD',
    img: '/PROJECTS/branding_guidelines/loud_brand_guidelines/1.jpg',
    desc1: 'Manual visual da LOUD, organização brasileira de e-sports: cores (Vivid Green e White Pearl), tipografia Space Grotesk e peças para redes sociais.',
    desc2: 'Inclui artes de vitória, apresentação de jogadores e anúncio de drop de roupas.',
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
    title: 'Ecofunding™',
    logo: '/PROJECT LOGOS/LOGO ECOFUNDING.webp',
    logoHeight: 'h-20 md:h-28',
    subTitle: 'Manual de identidade Ecofunding',
    img: '/PROJECTS/branding_guidelines/eco_funding_branding_kit/1.jpg',
    desc1: 'Identidade visual da Ecofunding, plataforma de investimento em projetos com critérios ESG: símbolo, versões do logotipo, paleta verde e cinza e tipografia (Lexend e DM Sans).',
    desc2: 'Aplicações em app, redes sociais, papelaria, jaqueta e painéis urbanos.',
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
    subTitle: 'Manual de identidade Moirarte',
    img: '/PROJECTS/branding_guidelines/MOIRARTE/1.jpg',
    desc1: 'Manual de identidade da Moirarte, marca de string art. O nome junta o moiré, efeito de tramas sobrepostas, com as Moiras gregas, que tecem o fio da vida.',
    desc2: 'Inclui símbolo inspirado em busto clássico, paleta, tipografia, grafismos, embalagem e um guia de direção fotográfica.',
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
    subTitle: 'Manual de identidade Sucorama',
    img: '/PROJECTS/branding_guidelines/sucorama_brand_identity/manual_de_identidade_sucorama_1.jpg',
    desc1: 'Manual de identidade da Sucorama, marca de suco de laranja natural: logotipo, paleta, tipografia (Lemonilla e Kodchasan) e posts para Instagram.',
    desc2: 'Aplicações em garrafa, caixa de transporte, outdoor, ponto de ônibus e caminhão de entrega.',
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
    subTitle: 'Estudo de caso Esportsbet.io',
    img: '/PROJECTS/case_study/esb_case_study/1.jpg',
    desc1: 'Case feito na GGEZ Media para a Esportsbet.io, plataforma de apostas em e-sports com cripto: perfis nas redes, thumbnails, artes de promoção e sorteios e telas de live.',
    desc2: 'Inclui infográficos de palpites para campeonatos como LCS, LCK, ESL Pro League e PGL Major.',
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
    subTitle: 'Manual de identidade NEXT',
    img: '/PROJECTS/branding_guidelines/manual_next/cover.jpg',
    desc1: 'Manual de identidade da NEXT Planejamento e Gestão, consultoria de gestão empresarial: logotipo, símbolo em X, paleta laranja e azul e tipografia Neue Haas Grotesk.',
    desc2: 'Aplicações em papelaria, relógio, telão e materiais digitais.',
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
    subTitle: 'Manual de identidade Altitude 1100',
    img: '/PROJECTS/branding_guidelines/manual_de_identidade_cafe_altitude1100/1.jpg',
    desc1: 'Manual de identidade do Café Altitude 1100, marca de café especial: símbolo de montanha, ilustrações de grãos e folhas, paleta e tipografia (Degular e Syne).',
    desc2: 'Aplicações em copo, sacola, embalagem de grãos, papelaria e outdoor.',
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
    subTitle: 'Manual de identidade Agiliza',
    img: '/PROJECTS/branding_guidelines/AGILIZA/1.jpg',
    desc1: 'Manual de identidade da Agiliza, empresa de soluções empresariais: logotipo, versões sobre fundos de cor, paleta (laranja-tropical, vermelho-marfim e azul-coral) e tipografia (Inter Tight e Tektur).',
    desc2: 'Mostra a marca aplicada em site e peças digitais.',
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
    subTitle: 'Manual de identidade Inowave',
    img: '/PROJECTS/branding_guidelines/inowave_brand_guidelines/capa.jpg',
    desc1: 'Manual de identidade da Inowave, agência de branding e marketing, de 2023. Design e lettering do logotipo por João Marcelo, ícone por Guilherme Poppi Pavão.',
    desc2: 'Inclui paleta de quatro cores, tipografia Stretch Pro e aplicações em cartaz, outdoor, bottons e ecobag.',
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
    subTitle: 'Landing page WANDR Media',
    img: '/PROJECTS/ux_ui/wandrmedia_landing_page.jpg',
    desc1: 'Landing page da WANDR Media, agência de marketing em redes sociais para a cena de música eletrônica e festivais.',
    desc2: 'A página apresenta a rede de influenciadores, os serviços e os vídeos curtos da agência.',
    behanceUrl: 'https://www.behance.net',
    category: 'UX_UI',
    isLandscape: true,
    objectPosition: 'top',
    galleryImages: ['/PROJECTS/ux_ui/wandrmedia_landing_page.jpg'],
  },
  {
    id: 10,
    title: 'Ecofunding™ Tokens',
    logo: '/PROJECT LOGOS/LOGO ECOFUNDING.webp',
    logoHeight: 'h-20 md:h-28',
    subTitle: 'Projeto Genesis e tokens',
    img: '/PROJECTS/case_study/ecofunding_tokens/documento_tokens_1.jpg',
    desc1: 'Direção de arte do Projeto Genesis, da Ecofunding: a moeda NFT Ecofounder e os tokens Ecoland, Ecoland Slice e Ecocarbon.',
    desc2: 'Renders 3D feitos no Blender, com variações de ângulo e versões para o site.',
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
    subTitle: 'Site da GGEZ Media',
    img: '/PROJECTS/ux_ui/ggez_website.jpg',
    desc1: 'Site da GGEZ Media, produtora americana de vídeo e design: serviços, trabalhos recentes, notícias e contato.',
    desc2: 'Layout escuro com fotos recortadas de talentos e uma faixa com marcas atendidas, como BET, Blizzard e Roku.',
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
    subTitle: 'Site Digitus Promotora',
    img: '/PROJECTS/ux_ui/digitus_website.jpg',
    desc1: 'Site da Digitus Promotora, promotora de crédito, com área do parceiro, formulário de cadastro e seções de missão, visão e valores.',
    desc2: 'Os textos ainda são provisórios (lorem ipsum).',
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
    subTitle: 'Conceito de site fintech',
    img: '/PROJECTS/ux_ui/website_fintech_corban.jpg',
    desc1: 'Conceito de site para a Fintech Corban, correspondente bancário: serviços, área do parceiro e versão para celular.',
    desc2: 'Os textos ainda são provisórios (lorem ipsum).',
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
    subTitle: 'Conceito de site Flying Studio',
    img: '/PROJECTS/ux_ui/flying_studio.jpg',
    desc1: 'Conceito de site para o Flying Studio, estúdio de visualização 3D para o mercado imobiliário: tour 360°, realidade virtual, imagens e filmes 3D.',
    desc2: 'Tem galeria de empreendimentos e marcas atendidas. Os textos ainda são provisórios.',
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
    subTitle: 'Kit para stream na Twitch',
    img: '/PROJECTS/ux_ui/sova/sova.jpg',
    desc1: 'Kit para um canal de Valorant na Twitch, com o agente Sova como tema: telas de abertura, online e offline, moldura de webcam e painéis.',
    desc2: 'Painéis para doação, loja, specs do PC, sobre mim, subs e Twitter.',
    behanceUrl: 'https://www.behance.net',
    category: 'UX_UI',
    isLandscape: true,
    galleryImages: [
      '/PROJECTS/ux_ui/sova/sova.jpg',
      '/PROJECTS/ux_ui/sova/onlinesova.jpg',
      '/PROJECTS/ux_ui/sova/offlinesova.jpg',
      '/PROJECTS/ux_ui/sova/facecam.png',
      '/PROJECTS/ux_ui/sova/pannelswebcam.jpg',
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
    subTitle: 'Conceito de site Mepo',
    img: '/PROJECTS/ux_ui/website_mepo.jpg',
    desc1: 'Conceito de site para a Mepo, agência de eventos corporativos e marketing: serviços, clientes, cases, depoimentos e contato.',
    desc2: 'Os textos ainda são provisórios (lorem ipsum).',
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
    subTitle: 'Apresentação da agência Arcnova',
    img: '/PROJECTS/decks/arcnova_deck/1.jpg',
    desc1: 'Apresentação da Arcnova, agência criada em 2025, com valores, serviços e equipe.',
    desc2: 'Paleta laranja e preto, com títulos grandes em caixa alta.',
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
    subTitle: 'Pitch deck para a Twitch',
    img: '/PROJECTS/decks/khleo_thomas_pitch_deck/1.jpg',
    desc1: 'Pitch deck de formatos para a Twitch apresentados por Khleo Thomas, ator e criador de conteúdo americano.',
    desc2: 'Cada formato tem premissa e regras, como o game show ao vivo Chat Chaos.',
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
    logo: '/PROJECT LOGOS/LOGO APRESENTAÇÃO EMASFI.png',
    subTitle: 'Slides para evento',
    img: '/PROJECTS/decks/emasfi_deck/emasfi_page_1.jpg',
    desc1: 'Slides de telão para a festa de 25 anos do EMASFI Group: abertura, apresentação do CEO, depoimentos e a entrega da Moeda de Mérito aos funcionários.',
    desc2: 'Azul e laranja da marca em todas as telas, com o símbolo da EMASFI como base dos grafismos.',
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
    subTitle: 'Portfólio em slides',
    img: '/PROJECTS/decks/portfolio_beatriz_evangelista/1.jpg',
    desc1: 'Portfólio em slides para Beatriz Evangelista, social media e estrategista de conteúdo, com a trajetória dela na Carmen Steffens e no Joel Jota.',
    desc2: 'Inclui coberturas de eventos e cases com prints de resultados.',
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
    subTitle: 'Deck para a Nex Playground',
    img: '/PROJECTS/decks/nex_playground_deck/1.jpg',
    desc1: 'Deck que apresenta Khleo Thomas à Nex Playground, console de jogos por movimento, com a proposta de uma série de desafios com celebridades.',
    desc2: 'Mostra objetivo, convidados e como a marca aparece no YouTube e no Instagram.',
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
    title: 'Ecofunding™ Pitch Deck',
    logo: '/PROJECT LOGOS/LOGO ECOFUNDING.webp',
    logoHeight: 'h-20 md:h-28',
    subTitle: 'Pitch deck para investidores',
    img: '/PROJECTS/decks/ecofounding_pitch_deck/ecofunding_deck_page_1.jpg',
    desc1: 'Pitch deck da Ecofunding para investidores: problema, proposta de valor, tecnologia, modelo de receita e tamanho de mercado.',
    desc2: 'Fecha com tabela de concorrentes e roadmap, na mesma identidade verde da marca.',
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
    subTitle: 'Slides para evento',
    img: '/PROJECTS/decks/acelerador_apresentacao/1.jpg',
    desc1: 'Slides de telão para o jantar de 20 anos da Acelerador Racing: abertura, vídeos institucionais, apresentação de palestrantes e um talk show empresarial.',
    desc2: 'A linguagem visual vem do automobilismo, com a bandeira quadriculada e o laranja da marca.',
    behanceUrl: 'https://www.behance.net',
    category: 'DECKS',
    isLandscape: true,
    galleryImages: [
      '/PROJECTS/decks/acelerador_apresentacao/1.jpg',
      '/PROJECTS/decks/acelerador_apresentacao/2.png',
      '/PROJECTS/decks/acelerador_apresentacao/3.jpg',
      '/PROJECTS/decks/acelerador_apresentacao/4.jpg',
      '/PROJECTS/decks/acelerador_apresentacao/5.jpg',
      '/PROJECTS/decks/acelerador_apresentacao/6-1.png',
      '/PROJECTS/decks/acelerador_apresentacao/6.png',
      '/PROJECTS/decks/acelerador_apresentacao/7.jpg',
      '/PROJECTS/decks/acelerador_apresentacao/8.jpg',
      '/PROJECTS/decks/acelerador_apresentacao/9.png',
      '/PROJECTS/decks/acelerador_apresentacao/10.jpg',
    ],
  },

  // MÍDIAS SOCIAIS E FLYERS
  {
    id: 24,
    title: 'Rafael Edison | Workshop',
    subTitle: 'Workshop de audiovisual',
    img: '/PROJECTS/workshop/rafael_edison/feed.jpg',
    desc1: 'Peças para o workshop do Rafael Edison em São Paulo, em julho de 2025: feed, story e banners.',
    desc2: 'Colagem em vermelho com o Rafael no centro e equipe de filmagem ao fundo.',
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
    subTitle: 'Proposta de pôster',
    img: '/PROJECTS/workshop/tarricone_workshop.jpg',
    desc1: 'Proposta de pôster para o workshop de Henrique Tarricone em São Paulo.',
    desc2: 'A data e as chamadas ainda são provisórias.',
    behanceUrl: 'https://www.behance.net',
    category: 'FLYERS',
    isLandscape: true,
    thumbnailRatio: 'portrait',
    galleryImages: ['/PROJECTS/workshop/tarricone_workshop.jpg'],
  },
  {
    id: 16,
    title: 'HB Entertainment',
    subTitle: 'Flyers de festas',
    img: '/PROJECTS/event_flyers/hb_entertainment_event_flyers/get_loud.jpg',
    desc1: 'Flyers para festas da HB Entertainment na Califórnia, como a Nostalgia (hip-hop e R&B dos anos 2000) e a getLOUD!!!.',
    desc2: 'Cada flyer muda de estética conforme o tema, do grafite ao rosa anos 2000.',
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
    id: 'identidade-visual',
    name: 'IDENTIDADE VISUAL',
    projects: projects.filter((p) => p.category === 'BRANDING'),
  },
  {
    id: 'ux-ui',
    name: 'UX/UI',
    projects: projects.filter((p) => p.category === 'UX_UI'),
  },
  {
    id: 'decks',
    name: 'DECKS',
    projects: projects.filter((p) => p.category === 'DECKS'),
  },
  {
    id: 'midias-sociais-e-flyers',
    name: 'MÍDIAS SOCIAIS E FLYERS',
    projects: projects.filter((p) => p.category === 'FLYERS'),
  },
];

interface Category {
  id: string;
  name: string;
  projects: Project[];
}

export default function ProjectsShowcase({ lang = 'pt' }: { lang?: 'pt' | 'en' }) {
  return (
    <div className="w-full bg-[#121212] flex flex-col">
      {categoriesData.map((category, idx) => (
        <CategoryShowcaseBlock
          key={category.name}
          categoryName={category.name}
          projects={category.projects}
          isLeft={idx % 2 !== 0} // Interleave sections (0 is right, 1 is left, 2 is right, etc.)
          categoryId={category.id}
          lang={lang}
        />
      ))}
    </div>
  );
}

const categoryTranslationMap: Record<string, { pt: string; en: string }> = {
  'IDENTIDADE VISUAL': { pt: 'IDENTIDADE VISUAL', en: 'VISUAL IDENTITY' },
  'UX/UI': { pt: 'UX/UI', en: 'UX/UI' },
  'DECKS': { pt: 'DECKS', en: 'PITCH DECKS' },
  'MÍDIAS SOCIAIS E FLYERS': { pt: 'MÍDIAS SOCIAIS E FLYERS', en: 'SOCIAL MEDIA & FLYERS' }
};

const projectTranslations: Record<number, {
  subTitle: { pt: string; en: string };
  desc1: { pt: string; en: string };
  desc2: { pt: string; en: string };
}> = {
  29: {
    subTitle: { pt: 'Manual de identidade BALUARTE', en: 'BALUARTE identity manual' },
    desc1: { pt: 'Identidade visual da BALUARTE, produtora criativa de vídeo, imagem e motion. O conceito vem da arquitetura defensiva: o símbolo são dois blocos separados por uma seteira cortada a 45 graus, só com retas.', en: 'Visual identity for BALUARTE, a creative production studio for video, image and motion. The concept comes from defensive architecture: the symbol is two blocks split by an arrow slit cut at 45 degrees, using only straight lines.' },
    desc2: { pt: 'O manual traz paleta, tipografia (Benzin e Monopack), aplicações em cartão, crachá, cartaz, telão e celular, e peças em motion.', en: 'The manual covers the palette, typography (Benzin and Monopack), applications on business cards, badges, posters, screens and phones, plus motion pieces.' }
  },
  8: {
    subTitle: { pt: 'Manual de identidade Zetta', en: 'Zetta identity manual' },
    desc1: { pt: 'Identidade visual da Zetta, marca de motos e scooters elétricas de Franca: logotipo, paleta, tipografia (Zalando e Space Grotesk) e grafismos.', en: 'Visual identity for Zetta, an electric motorbike and scooter brand from Franca: logo, palette, typography (Zalando and Space Grotesk) and graphic elements.' },
    desc2: { pt: 'O manual mostra a marca aplicada em uniforme, loja, redes sociais e campanha.', en: 'The manual shows the brand on uniforms, the store, social media and campaign imagery.' }
  },
  26: {
    subTitle: { pt: 'Manual de identidade LOUD', en: 'LOUD identity manual' },
    desc1: { pt: 'Manual visual da LOUD, organização brasileira de e-sports: cores (Vivid Green e White Pearl), tipografia Space Grotesk e peças para redes sociais.', en: 'Visual guidelines for LOUD, the Brazilian esports organization: colors (Vivid Green and White Pearl), Space Grotesk typography and social media pieces.' },
    desc2: { pt: 'Inclui artes de vitória, apresentação de jogadores e anúncio de drop de roupas.', en: 'Includes match win graphics, player announcements and a merch drop post.' }
  },
  5: {
    subTitle: { pt: 'Manual de identidade Ecofunding', en: 'Ecofunding identity manual' },
    desc1: { pt: 'Identidade visual da Ecofunding, plataforma de investimento em projetos com critérios ESG: símbolo, versões do logotipo, paleta verde e cinza e tipografia (Lexend e DM Sans).', en: 'Visual identity for Ecofunding, an investment platform for ESG-rated projects: symbol, logo versions, green and gray palette, and typography (Lexend and DM Sans).' },
    desc2: { pt: 'Aplicações em app, redes sociais, papelaria, jaqueta e painéis urbanos.', en: 'Applied to an app, social media, stationery, a jacket and outdoor panels.' }
  },
  4: {
    subTitle: { pt: 'Manual de identidade Moirarte', en: 'Moirarte identity manual' },
    desc1: { pt: 'Manual de identidade da Moirarte, marca de string art. O nome junta o moiré, efeito de tramas sobrepostas, com as Moiras gregas, que tecem o fio da vida.', en: 'Identity manual for Moirarte, a string art brand. The name combines moiré, the effect of overlapping weaves, with the Greek Moirai, who spin the thread of life.' },
    desc2: { pt: 'Inclui símbolo inspirado em busto clássico, paleta, tipografia, grafismos, embalagem e um guia de direção fotográfica.', en: 'Includes a symbol based on a classical bust, palette, typography, graphic elements, packaging and a photo direction guide.' }
  },
  7: {
    subTitle: { pt: 'Manual de identidade Sucorama', en: 'Sucorama identity manual' },
    desc1: { pt: 'Manual de identidade da Sucorama, marca de suco de laranja natural: logotipo, paleta, tipografia (Lemonilla e Kodchasan) e posts para Instagram.', en: 'Identity manual for Sucorama, a natural orange juice brand: logo, palette, typography (Lemonilla and Kodchasan) and Instagram posts.' },
    desc2: { pt: 'Aplicações em garrafa, caixa de transporte, outdoor, ponto de ônibus e caminhão de entrega.', en: 'Applied to the bottle, shipping box, billboard, bus shelter and delivery truck.' }
  },
  9: {
    subTitle: { pt: 'Estudo de caso Esportsbet.io', en: 'Esportsbet.io case study' },
    desc1: { pt: 'Case feito na GGEZ Media para a Esportsbet.io, plataforma de apostas em e-sports com cripto: perfis nas redes, thumbnails, artes de promoção e sorteios e telas de live.', en: 'Case study from GGEZ Media for Esportsbet.io, a crypto esports betting platform: social profiles, thumbnails, promo and giveaway graphics, and stream screens.' },
    desc2: { pt: 'Inclui infográficos de palpites para campeonatos como LCS, LCK, ESL Pro League e PGL Major.', en: 'Also includes prediction infographics for tournaments like LCS, LCK, ESL Pro League and the PGL Major.' }
  },
  3: {
    subTitle: { pt: 'Manual de identidade NEXT', en: 'NEXT identity manual' },
    desc1: { pt: 'Manual de identidade da NEXT Planejamento e Gestão, consultoria de gestão empresarial: logotipo, símbolo em X, paleta laranja e azul e tipografia Neue Haas Grotesk.', en: 'Identity manual for NEXT Planejamento e Gestão, a business management consultancy: logo, X symbol, orange and blue palette and Neue Haas Grotesk typography.' },
    desc2: { pt: 'Aplicações em papelaria, relógio, telão e materiais digitais.', en: 'Applied to stationery, a smartwatch, a screen and digital materials.' }
  },
  6: {
    subTitle: { pt: 'Manual de identidade Altitude 1100', en: 'Altitude 1100 identity manual' },
    desc1: { pt: 'Manual de identidade do Café Altitude 1100, marca de café especial: símbolo de montanha, ilustrações de grãos e folhas, paleta e tipografia (Degular e Syne).', en: 'Identity manual for Café Altitude 1100, a specialty coffee brand: mountain symbol, bean and leaf illustrations, palette and typography (Degular and Syne).' },
    desc2: { pt: 'Aplicações em copo, sacola, embalagem de grãos, papelaria e outdoor.', en: 'Applied to cups, bags, coffee packaging, stationery and a billboard.' }
  },
  2: {
    subTitle: { pt: 'Manual de identidade Agiliza', en: 'Agiliza identity manual' },
    desc1: { pt: 'Manual de identidade da Agiliza, empresa de soluções empresariais: logotipo, versões sobre fundos de cor, paleta (laranja-tropical, vermelho-marfim e azul-coral) e tipografia (Inter Tight e Tektur).', en: 'Identity manual for Agiliza, a business services company: logo, versions on color backgrounds, palette (tropical orange, ivory red and coral blue) and typography (Inter Tight and Tektur).' },
    desc2: { pt: 'Mostra a marca aplicada em site e peças digitais.', en: 'Shows the brand on a website and digital pieces.' }
  },
  1: {
    subTitle: { pt: 'Manual de identidade Inowave', en: 'Inowave identity manual' },
    desc1: { pt: 'Manual de identidade da Inowave, agência de branding e marketing, de 2023. Design e lettering do logotipo por João Marcelo, ícone por Guilherme Poppi Pavão.', en: 'Identity manual for Inowave, a branding and marketing agency, from 2023. Logo design and lettering by João Marcelo, icon by Guilherme Poppi Pavão.' },
    desc2: { pt: 'Inclui paleta de quatro cores, tipografia Stretch Pro e aplicações em cartaz, outdoor, bottons e ecobag.', en: 'Includes a four-color palette, Stretch Pro typography and applications on posters, billboards, pins and tote bags.' }
  },
  20: {
    subTitle: { pt: 'Landing page WANDR Media', en: 'WANDR Media landing page' },
    desc1: { pt: 'Landing page da WANDR Media, agência de marketing em redes sociais para a cena de música eletrônica e festivais.', en: 'Landing page for WANDR Media, a social media marketing agency for the electronic music and festival scene.' },
    desc2: { pt: 'A página apresenta a rede de influenciadores, os serviços e os vídeos curtos da agência.', en: 'The page presents the agency’s influencer network, services and short-form videos.' }
  },
  10: {
    subTitle: { pt: 'Projeto Genesis e tokens', en: 'Genesis Project and tokens' },
    desc1: { pt: 'Direção de arte do Projeto Genesis, da Ecofunding: a moeda NFT Ecofounder e os tokens Ecoland, Ecoland Slice e Ecocarbon.', en: 'Art direction for Ecofunding’s Genesis Project: the Ecofounder NFT coin and the Ecoland, Ecoland Slice and Ecocarbon tokens.' },
    desc2: { pt: 'Renders 3D feitos no Blender, com variações de ângulo e versões para o site.', en: '3D renders made in Blender, with angle variations and versions for the website.' }
  },
  19: {
    subTitle: { pt: 'Site da GGEZ Media', en: 'GGEZ Media website' },
    desc1: { pt: 'Site da GGEZ Media, produtora americana de vídeo e design: serviços, trabalhos recentes, notícias e contato.', en: 'Website for GGEZ Media, a US video and design studio: services, recent work, news and contact.' },
    desc2: { pt: 'Layout escuro com fotos recortadas de talentos e uma faixa com marcas atendidas, como BET, Blizzard e Roku.', en: 'Dark layout with cut-out talent photos and a strip of clients such as BET, Blizzard and Roku.' }
  },
  17: {
    subTitle: { pt: 'Site Digitus Promotora', en: 'Digitus Promotora website' },
    desc1: { pt: 'Site da Digitus Promotora, promotora de crédito, com área do parceiro, formulário de cadastro e seções de missão, visão e valores.', en: 'Website for Digitus Promotora, a credit services company, with a partner area, sign-up form and mission, vision and values sections.' },
    desc2: { pt: 'Os textos ainda são provisórios (lorem ipsum).', en: 'The copy is still placeholder text (lorem ipsum).' }
  },
  21: {
    subTitle: { pt: 'Conceito de site fintech', en: 'Fintech website concept' },
    desc1: { pt: 'Conceito de site para a Fintech Corban, correspondente bancário: serviços, área do parceiro e versão para celular.', en: 'Website concept for Fintech Corban, a banking correspondent: services, partner area and a mobile version.' },
    desc2: { pt: 'Os textos ainda são provisórios (lorem ipsum).', en: 'The copy is still placeholder text (lorem ipsum).' }
  },
  18: {
    subTitle: { pt: 'Conceito de site Flying Studio', en: 'Flying Studio website concept' },
    desc1: { pt: 'Conceito de site para o Flying Studio, estúdio de visualização 3D para o mercado imobiliário: tour 360°, realidade virtual, imagens e filmes 3D.', en: 'Website concept for Flying Studio, a 3D visualization studio for real estate: 360° tours, virtual reality, 3D images and films.' },
    desc2: { pt: 'Tem galeria de empreendimentos e marcas atendidas. Os textos ainda são provisórios.', en: 'Includes a gallery of developments and clients. The copy is still placeholder text.' }
  },
  23: {
    subTitle: { pt: 'Kit para stream na Twitch', en: 'Twitch stream kit' },
    desc1: { pt: 'Kit para um canal de Valorant na Twitch, com o agente Sova como tema: telas de abertura, online e offline, moldura de webcam e painéis.', en: 'Kit for a Valorant channel on Twitch, themed around the agent Sova: intro, online and offline screens, webcam frame and panels.' },
    desc2: { pt: 'Painéis para doação, loja, specs do PC, sobre mim, subs e Twitter.', en: 'Panels for donations, shop, PC specs, about me, subs and Twitter.' }
  },
  22: {
    subTitle: { pt: 'Conceito de site Mepo', en: 'Mepo website concept' },
    desc1: { pt: 'Conceito de site para a Mepo, agência de eventos corporativos e marketing: serviços, clientes, cases, depoimentos e contato.', en: 'Website concept for Mepo, a corporate events and marketing agency: services, clients, cases, testimonials and contact.' },
    desc2: { pt: 'Os textos ainda são provisórios (lorem ipsum).', en: 'The copy is still placeholder text (lorem ipsum).' }
  },
  12: {
    subTitle: { pt: 'Apresentação da agência Arcnova', en: 'Arcnova agency presentation' },
    desc1: { pt: 'Apresentação da Arcnova, agência criada em 2025, com valores, serviços e equipe.', en: 'Presentation for Arcnova, an agency founded in 2025, covering its values, services and team.' },
    desc2: { pt: 'Paleta laranja e preto, com títulos grandes em caixa alta.', en: 'Orange and black palette with large all-caps headlines.' }
  },
  14: {
    subTitle: { pt: 'Pitch deck para a Twitch', en: 'Twitch pitch deck' },
    desc1: { pt: 'Pitch deck de formatos para a Twitch apresentados por Khleo Thomas, ator e criador de conteúdo americano.', en: 'Pitch deck of Twitch show formats hosted by Khleo Thomas, an American actor and content creator.' },
    desc2: { pt: 'Cada formato tem premissa e regras, como o game show ao vivo Chat Chaos.', en: 'Each format has a premise and rules, like the live game show Chat Chaos.' }
  },
  27: {
    subTitle: { pt: 'Slides para evento', en: 'Event slides' },
    desc1: { pt: 'Slides de telão para a festa de 25 anos do EMASFI Group: abertura, apresentação do CEO, depoimentos e a entrega da Moeda de Mérito aos funcionários.', en: 'Stage screen slides for EMASFI Group’s 25th anniversary celebration: opening, CEO introduction, testimonials and the Merit Coin awards for employees.' },
    desc2: { pt: 'Azul e laranja da marca em todas as telas, com o símbolo da EMASFI como base dos grafismos.', en: 'Every screen uses the brand’s blue and orange, with the EMASFI symbol as the base for the graphics.' }
  },
  13: {
    subTitle: { pt: 'Portfólio em slides', en: 'Slide portfolio' },
    desc1: { pt: 'Portfólio em slides para Beatriz Evangelista, social media e estrategista de conteúdo, com a trajetória dela na Carmen Steffens e no Joel Jota.', en: 'Slide portfolio for Beatriz Evangelista, a social media manager and content strategist, covering her work at Carmen Steffens and Joel Jota.' },
    desc2: { pt: 'Inclui coberturas de eventos e cases com prints de resultados.', en: 'Also includes event coverage and case studies with results screenshots.' }
  },
  15: {
    subTitle: { pt: 'Deck para a Nex Playground', en: 'Nex Playground deck' },
    desc1: { pt: 'Deck que apresenta Khleo Thomas à Nex Playground, console de jogos por movimento, com a proposta de uma série de desafios com celebridades.', en: 'Deck introducing Khleo Thomas to Nex Playground, a motion gaming console, with a proposal for a celebrity challenge series.' },
    desc2: { pt: 'Mostra objetivo, convidados e como a marca aparece no YouTube e no Instagram.', en: 'Covers the goal, guests and how the brand shows up on YouTube and Instagram.' }
  },
  28: {
    subTitle: { pt: 'Pitch deck para investidores', en: 'Investor pitch deck' },
    desc1: { pt: 'Pitch deck da Ecofunding para investidores: problema, proposta de valor, tecnologia, modelo de receita e tamanho de mercado.', en: 'Ecofunding’s investor pitch deck: problem, value proposition, technology, revenue model and market size.' },
    desc2: { pt: 'Fecha com tabela de concorrentes e roadmap, na mesma identidade verde da marca.', en: 'It ends with a competitor table and roadmap, in the brand’s green identity.' }
  },
  11: {
    subTitle: { pt: 'Slides para evento', en: 'Event slides' },
    desc1: { pt: 'Slides de telão para o jantar de 20 anos da Acelerador Racing: abertura, vídeos institucionais, apresentação de palestrantes e um talk show empresarial.', en: 'Stage screen slides for Acelerador Racing’s 20th anniversary dinner: opening, brand videos, speaker intros and a business talk show.' },
    desc2: { pt: 'A linguagem visual vem do automobilismo, com a bandeira quadriculada e o laranja da marca.', en: 'The visual language comes from motorsport, with checkered flag shapes and the brand’s orange.' }
  },
  24: {
    subTitle: { pt: 'Workshop de audiovisual', en: 'Audiovisual workshop' },
    desc1: { pt: 'Peças para o workshop do Rafael Edison em São Paulo, em julho de 2025: feed, story e banners.', en: 'Pieces for Rafael Edison’s workshop in São Paulo, July 2025: feed post, story and banners.' },
    desc2: { pt: 'Colagem em vermelho com o Rafael no centro e equipe de filmagem ao fundo.', en: 'A red collage with Rafael in the center and a film crew behind him.' }
  },
  25: {
    subTitle: { pt: 'Proposta de pôster', en: 'Poster proposal' },
    desc1: { pt: 'Proposta de pôster para o workshop de Henrique Tarricone em São Paulo.', en: 'Poster proposal for Henrique Tarricone’s workshop in São Paulo.' },
    desc2: { pt: 'A data e as chamadas ainda são provisórias.', en: 'The date and headlines are still placeholders.' }
  },
  16: {
    subTitle: { pt: 'Flyers de festas', en: 'Party flyers' },
    desc1: { pt: 'Flyers para festas da HB Entertainment na Califórnia, como a Nostalgia (hip-hop e R&B dos anos 2000) e a getLOUD!!!.', en: 'Flyers for HB Entertainment parties in California, such as Nostalgia (2000s hip-hop and R&B) and getLOUD!!!.' },
    desc2: { pt: 'Cada flyer muda de estética conforme o tema, do grafite ao rosa anos 2000.', en: 'Each flyer changes style with the theme, from graffiti to 2000s pink.' }
  }
};

interface CategoryBlockProps {
  categoryName: string;
  projects: Project[];
  isLeft: boolean;
  categoryId: string;
  lang: 'pt' | 'en';
}

function CategoryShowcaseBlock({ categoryName, projects: catProjects, isLeft, categoryId, lang }: CategoryBlockProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveProject(null);
    }, 1200);
  };

  React.useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const currentProject = catProjects.find((p) => p.id === activeProject);

  const lastProjectRef = useRef<Project | null>(null);
  if (currentProject) {
    lastProjectRef.current = currentProject;
  }
  const displayProject = currentProject || lastProjectRef.current;

  const trans = displayProject ? projectTranslations[displayProject.id] : null;
  const projectSubTitle = trans ? trans.subTitle[lang] : displayProject?.subTitle;
  const projectDesc1 = trans ? trans.desc1[lang] : displayProject?.desc1;
  const projectDesc2 = trans ? trans.desc2[lang] : displayProject?.desc2;

  const isEn = lang === 'en';
  const labelClose = isEn ? 'CLOSE' : 'FECHAR';
  const labelBackToTop = isEn ? 'BACK TO TOP' : 'VOLTE PARA CIMA';

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
          ? 'py-20 md:py-24 min-h-screen items-start'
          : 'py-12 md:py-16 lg:h-[70vh] lg:min-h-[490px] items-center overflow-hidden'
      }`}
    >
      <AnimatePresence mode="wait">
        {activeProject === null ? (
          <div className={`w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 relative lg:min-h-[350px] ${
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
                  <span>{categoryTranslationMap[categoryName]?.[lang] || categoryName}</span>
                  <span className="bg-white/20 h-[1px] flex-1" />
                </li>

                {catProjects.map((proj, idx) => (
                  <motion.li
                     key={proj.id}
                     layoutId={`text-header-${proj.id}`}
                     style={{ opacity: safeActiveIdx === idx ? 1 : 0.5 }}
                     className={`relative flex w-full cursor-pointer items-center text-[15px] md:text-[17px] font-normal leading-tight text-white py-0.5 whitespace-normal lg:whitespace-nowrap ${
                       isLeft ? 'justify-start text-left' : 'justify-end text-right'
                     }`}
                     onMouseEnter={() => setActiveIdx(idx)}
                     onClick={() => {
                       setActiveIdx(idx);
                       setActiveProject(proj.id);
                     }}
                  >
                    {proj.title}
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
                <X className="size-4" /> {labelClose}
              </button>

              {/* Title Section */}
              <div className="relative h-28 md:h-36 flex items-end">
                {displayProject?.logo ? (
                  <motion.div
                    layoutId={`text-header-${displayProject.id}`}
                    className="absolute bottom-0 left-0 flex items-end"
                    style={{ height: '100%' }}
                  >
                    <img
                      src={displayProject.logo}
                      alt={displayProject.title}
                      className={`${displayProject.logoHeight || 'h-14 md:h-20'} w-auto object-contain`}
                      style={displayProject.invertLogo ? { filter: 'brightness(0) invert(1)' } : undefined}
                    />
                  </motion.div>
                ) : (
                  <motion.h1
                    className="absolute text-5xl md:text-[64px] font-normal tracking-[-0.03em] text-white"
                    layoutId={`text-header-${displayProject?.id}`}
                  >
                    {displayProject?.title}
                  </motion.h1>
                )}
              </div>

              {/* Sub Title & Text Below */}
              <div className="w-full flex flex-col gap-4 mt-2">
                <div className="w-full flex items-center gap-2">
                  <h2 className="text-white text-xl md:text-2xl font-light tracking-tight">
                    {projectSubTitle}
                  </h2>
                  <div className="bg-white/20 h-[1px] flex-1 rounded-full" />
                </div>

                <div className="text-white/60 flex flex-col gap-3 text-sm leading-relaxed">
                  <p>{projectDesc1}</p>
                  <p>{projectDesc2}</p>
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

                  if (/\.(mp4|webm)$/i.test(imgUrl)) {
                    return (
                      <motion.video
                        key={imgUrl}
                        style={{ width: '100%', height: 'auto', display: 'block', ...borderRadiusStyle }}
                        src={imgUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={`${displayProject?.title} Video ${i + 1}`}
                        className={`w-full object-cover transition-all duration-300 ${borderClass}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i + 0.2 }}
                      />
                    );
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

              {/* Grid Images (Contêiner para painéis menores com tamanho controlado) */}
              {displayProject?.gridImages && (
                <div className="w-full mt-8">
                  <h4 className="text-[10px] font-medium uppercase tracking-widest text-white/40 mb-4 text-left">
                    {lang === 'pt' ? 'Painéis da Twitch' : 'Twitch Panels'}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                    {displayProject.gridImages.map((imgUrl, idx) => (
                      <motion.div
                        key={imgUrl}
                        className="relative overflow-hidden rounded-lg border border-white/5 bg-[#1c1c1c]/40 backdrop-blur-md p-4 flex items-center justify-center cursor-default"
                        whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.1)' }}
                        transition={{ type: "spring", stiffness: 60, damping: 10 }}
                      >
                        <motion.img
                          src={imgUrl}
                          alt={`${displayProject?.title} Panel ${idx + 1}`}
                          className="max-h-[60px] w-auto object-contain pointer-events-none"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * idx + 0.1 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

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
                  <ArrowUp className="size-4" /> {labelBackToTop}
                </button>
                <button
                  onClick={() => setActiveProject(null)}
                  className="flex items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="size-4" /> {labelClose}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
