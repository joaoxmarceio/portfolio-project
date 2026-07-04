"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

interface PosterMeta {
  logo: string | null;
  date: string;
  description: {
    pt: string;
    en: string;
  };
}

interface CarouselPoster {
  src: string;
  alt: string;
  meta: PosterMeta;
}

const carouselPosters: CarouselPoster[] = [
  {
    src: "/POSTERS%20CAROUSEL/EMBALO.jpg",
    alt: "Embalo Poster",
    meta: {
      logo: "/POSTERS%20CAROUSEL/LOGOS/EMBALO.png",
      date: "2024",
      description: {
        pt: "Composição tipográfica expressando ritmo e movimento para a cultura da música contemporânea.",
        en: "Typographic composition expressing rhythm and movement for contemporary music culture."
      }
    }
  },
  {
    src: "/POSTERS%20CAROUSEL/BEAUTIFUL.jpg",
    alt: "Beautiful Poster",
    meta: {
      logo: "/POSTERS%20CAROUSEL/LOGOS/BEAUTIFUL.png",
      date: "2023",
      description: {
        pt: "Estudo visual minimalista sobre contraste de formas, estética e equilíbrio editorial.",
        en: "Minimalist visual study on form contrast, aesthetics, and editorial balance."
      }
    }
  },
  {
    src: "/POSTERS%20CAROUSEL/BOTTEGA.jpg",
    alt: "Bottega Poster",
    meta: {
      logo: "/POSTERS%20CAROUSEL/LOGOS/BOTTEGA.png",
      date: "2024",
      description: {
        pt: "Design editorial inspirado no luxo e herança da marca artesanal italiana Bottega.",
        en: "Editorial design inspired by the luxury and heritage of the Italian artisan brand Bottega."
      }
    }
  },
  {
    src: "/POSTERS%20CAROUSEL/ADOPT%20A%20PUSS.jpg",
    alt: "Adopt a Puss Poster",
    meta: {
      logo: "/POSTERS%20CAROUSEL/LOGOS/ADOPT%20A%20PUSS.png",
      date: "2024",
      description: {
        pt: "Pôster ilustrativo e afetuoso criado para a conscientização sobre adoção de animais.",
        en: "Illustrative and warm poster designed for pet adoption awareness campaigns."
      }
    }
  },
  {
    src: "/POSTERS%20CAROUSEL/BE%20STELLAR.jpg",
    alt: "Be Stellar Poster",
    meta: {
      logo: "/POSTERS%20CAROUSEL/LOGOS/BE%20STELLAR.png",
      date: "2025",
      description: {
        pt: "Narrativa visual de ficção científica combinando grids limpos e estética retrô-futurista.",
        en: "Sci-fi visual narrative combining clean grids and retro-futuristic aesthetics."
      }
    }
  },
  {
    src: "/POSTERS%20CAROUSEL/CAPA%20LAST.jpg",
    alt: "Capa Last Poster",
    meta: {
      logo: "/POSTERS%20CAROUSEL/LOGOS/DITADO%20ANTIGO.png",
      date: "2023",
      description: {
        pt: "Experimento de design de pôster brincando com tipografia pesada e espaço negativo.",
        en: "Poster design experiment playing with heavy typography and negative space."
      }
    }
  },
  {
    src: "/POSTERS%20CAROUSEL/FASHION%20MATTERS.jpg",
    alt: "Fashion Matters Poster",
    meta: {
      logo: "/POSTERS%20CAROUSEL/LOGOS/FASHION%20MATTERS.png",
      date: "2023",
      description: {
        pt: "Estética de alta costura traduzida em diagramação e tipografia de revista de moda.",
        en: "High-fashion aesthetic translated into editorial typography and layout styles."
      }
    }
  },
  {
    src: "/POSTERS%20CAROUSEL/FXCKIT.jpg",
    alt: "Fxckit Poster",
    meta: {
      logo: "/POSTERS%20CAROUSEL/LOGOS/FXCKIT.png",
      date: "2024",
      description: {
        pt: "Design rebelde e de alto contraste explorando tipografia urbana experimental.",
        en: "Rebellious high-contrast design exploring experimental urban typography."
      }
    }
  },
  {
    src: "/POSTERS%20CAROUSEL/ILLUSION.jpg",
    alt: "Illusion Poster",
    meta: {
      logo: "/POSTERS%20CAROUSEL/LOGOS/ILLUSION.png",
      date: "2024",
      description: {
        pt: "Composição inspirada em ilusões de ótica e distorções gráficas contemporâneas.",
        en: "Composition inspired by optical illusions and contemporary graphic distortions."
      }
    }
  },
  {
    src: "/POSTERS%20CAROUSEL/LIVING%20MACHINE.jpg",
    alt: "Living Machine Poster",
    meta: {
      logo: "/POSTERS%20CAROUSEL/LOGOS/LIVING%20MACHINE.png",
      date: "2024",
      description: {
        pt: "Investigação gráfica sobre a relação entre arquitetura industrial e tecnologia.",
        en: "Graphic investigation on the relationship between industrial architecture and technology."
      }
    }
  },
  {
    src: "/POSTERS%20CAROUSEL/TOPS.jpg",
    alt: "Tops Poster",
    meta: {
      logo: "/POSTERS%20CAROUSEL/LOGOS/TOPS.png",
      date: "2023",
      description: {
        pt: "Pôster tipográfico minimalista explorando pesos de fonte e hierarquia de leitura.",
        en: "Minimalist typographic poster exploring font weights and reading hierarchy."
      }
    }
  },
  {
    src: "/POSTERS%20CAROUSEL/TRYOUT.jpg",
    alt: "Tryout Poster",
    meta: {
      logo: "/POSTERS%20CAROUSEL/LOGOS/TRYOUT.png",
      date: "2024",
      description: {
        pt: "Experimentação visual de texturas gráficas, grids distorcidos e composições livres.",
        en: "Visual experimentation of graphic textures, distorted grids, and free compositions."
      }
    }
  },
  {
    src: "/POSTERS%20CAROUSEL/oceanman.png",
    alt: "Ocean Man Poster",
    meta: {
      logo: "/POSTERS%20CAROUSEL/LOGOS/OCEAN%20MAN.png",
      date: "2024",
      description: {
        pt: "Homenagem à cultura do surf e exploração oceânica com tipografia personalizada.",
        en: "Tribute to surf culture and ocean exploration featuring custom typography."
      }
    }
  }
];

interface Skiper49Props {
  lang?: "pt" | "en";
}

const Skiper49 = ({ lang = "pt" }: Skiper49Props) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [logoError, setLogoError] = useState(false);

  // Escape key to close zoom modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Reset logo error on selecting a new poster
  useEffect(() => {
    setLogoError(false);
  }, [selected]);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-transparent">
      <Carousel_003 
        className="" 
        images={carouselPosters} 
        showPagination 
        showNavigation 
        loop 
        onSelectSlide={(index) => setSelected(index)}
      />

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {selected !== null && (
          /* backdrop */
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 cursor-zoom-out"
          >
            {/* poster card */}
            <motion.div
              key="card"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1,    opacity: 1 }}
              exit={{ scale: 0.92,    opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="group relative max-h-[85vh] max-w-[85vw] leading-none"
            >
              {/* image */}
              <img
                src={carouselPosters[selected].src}
                alt={carouselPosters[selected].alt}
                className="block max-h-[85vh] max-w-[85vw] w-auto h-auto select-none"
              />

              {/* hover overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none sm:pointer-events-auto"
                style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
              >
                <div className="flex flex-col items-center gap-2">
                  {/* logo (only if available and has no load errors) */}
                  {carouselPosters[selected].meta.logo && !logoError && (
                    <img
                      src={carouselPosters[selected].meta.logo!}
                      alt="poster logo"
                      onError={() => setLogoError(true)}
                      className="max-w-[280px] max-h-[140px] w-auto h-auto object-contain pointer-events-none mb-1"
                    />
                  )}

                  {/* copyright only */}
                  <p style={infoStyle}>©JOÃO MARCELO</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Skiper49 };

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 16,
  onSelectSlide,
}: {
  images: CarouselPoster[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
  onSelectSlide: (index: number) => void;
}) => {
  const css = `
  .Carousal_003 {
    width: 100%;
    height: 520px;
    padding-bottom: 60px !important;
  }
  
  .Carousal_003 .swiper-slide {
    height: 100%;
    width: auto;
    max-width: 85vw;
    background: transparent;
    cursor: zoom-in;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Carousal_003 .swiper-slide img {
    height: 100%;
    width: auto;
    object-fit: contain;
    display: block;
    user-select: none;
  }

  .swiper-pagination-bullet {
    background-color: #fff !important;
    opacity: 0.3;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    opacity: 1 !important;
    background-color: #fff !important;
  }

  .swiper-button-next, .swiper-button-prev {
    color: #fff !important;
    width: 44px !important;
    height: 44px !important;
    opacity: 0.4;
    transition: all 0.3s ease;
  }

  .swiper-button-next:hover, .swiper-button-prev:hover {
    opacity: 1;
  }

  .swiper-button-next::after, .swiper-button-prev::after {
    display: none !important;
  }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-7xl px-5", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 2000,
                  disableOnInteraction: true,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 15,
            stretch: -10,
            depth: 80,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} onClick={() => onSelectSlide(index)}>
              <img
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
              <div className="swiper-button-prev">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { Carousel_003 };

const infoStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "12px",
  fontFamily: "var(--font-halenoir), sans-serif",
  color: "rgba(255,255,255,0.5)",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  fontWeight: 400,
};
