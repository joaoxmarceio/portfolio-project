"use client";

import { motion, AnimatePresence, MotionValue } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

interface PosterMeta {
  logo: string | null;
  date: string;
  description: string;
}

interface Poster {
  src: string;
  meta: PosterMeta;
}

const posters: Poster[] = [
  {
    src: "/PARALLAX%20POSTERS/STUSSY.jpg",
    meta: {
      logo: "/POSTER%20LOGOS/STUSSY.png",
      date: "2023",
      description:
        "Inspired by decades of streetwear\nculture, celebrating the iconic Stüssy\nbrand and its enduring creative legacy.",
    },
  },
  {
    src: "/PARALLAX%20POSTERS/DREAM.jpg",
    meta: {
      logo: "/POSTER%20LOGOS/DREAM.png",
      date: "2023",
      description:
        "A surreal visual exploring ambition\nand the pursuit of creative dreams\nthrough bold graphic language.",
    },
  },
  {
    src: "/PARALLAX%20POSTERS/OLD%20SAYING.jpg",
    meta: {
      logo: "/POSTER%20LOGOS/OLD%20SAYING.png",
      date: "2022",
      description:
        "Typography-driven composition inspired\nby timeless phrases and the wisdom\nhidden in everyday expression.",
    },
  },
  {
    src: "/PARALLAX%20POSTERS/ASFALTOREC.jpg",
    meta: {
      logo: "/POSTER%20LOGOS/ASFALTOREC.png",
      date: "2023",
      description:
        "Raw street energy translated into\nbold visuals for Asfalto Records,\ncelebrating underground music culture.",
    },
  },
  {
    src: "/PARALLAX%20POSTERS/NEXA.jpg",
    meta: {
      logo: null,
      date: "2023",
      description:
        "Futuristic editorial design exploring\nthe intersection of technology and\nhuman connection through abstraction.",
    },
  },
  {
    src: "/PARALLAX%20POSTERS/PELUK.jpg",
    meta: {
      logo: "/POSTER%20LOGOS/PELUK.png",
      date: "2024",
      description:
        "A vibrant celebration of Latin culture,\nblending warmth and bold aesthetics\ninto a striking visual narrative.",
    },
  },
  {
    src: "/PARALLAX%20POSTERS/STUSSY%20X%20NIKE.jpg",
    meta: {
      logo: "/POSTER%20LOGOS/STUSSY%20X%20NIKE.png",
      date: "2023",
      description:
        "Tribute to the legendary collaboration\nbetween Stüssy and Nike, two icons\nshaping street culture for decades.",
    },
  },
  {
    src: "/PARALLAX%20POSTERS/STAR%20CHOSEN.jpg",
    meta: {
      logo: "/POSTER%20LOGOS/STARCHOSEN.png",
      date: "2025",
      description:
        "O ARQUÉTIPO DO \"TOLO\" É O COMPASSO\nCRIATIVO DESSA OBRA, QUE BRINCA COM O\nCONTRASTE DO CAMPO E A NARRATIVA COSMOLÓGICA",
    },
  },
  {
    src: "/PARALLAX%20POSTERS/Y2K.jpg",
    meta: {
      logo: "/POSTER%20LOGOS/Y2K.png",
      date: "2022",
      description:
        "Nostalgic Y2K aesthetics reimagined\nfor a new generation, capturing\nthe chaos and optimism of that era.",
    },
  },
  {
    src: "/PARALLAX%20POSTERS/DON'T%20YOU%20REALIZE.jpg",
    meta: {
      logo: "/POSTER%20LOGOS/DON'T%20YOU%20REALIZE.png",
      date: "2023",
      description:
        "An introspective composition questioning\nperception and awareness, using stark\ncontrast to provoke emotional response.",
    },
  },
  {
    src: "/PARALLAX%20POSTERS/FUTURE.jpg",
    meta: {
      logo: "/POSTER%20LOGOS/FUTURE.png",
      date: "2024",
      description:
        "Bold typographic statement about\nthe future and who holds the power\nto decide what comes next.",
    },
  },
  {
    src: "/PARALLAX%20POSTERS/JNCO%20JEANS.jpg",
    meta: {
      logo: "/POSTER%20LOGOS/JNCO%20JEANS.png",
      date: "2023",
      description:
        "Tribute to the iconic JNCO Jeans era,\na defining piece of 90s streetwear\nand youth counterculture identity.",
    },
  },
];

/* ─── Main component ──────────────────────────────────────────────── */
const Skiper30 = ({ lang = 'pt' }: { lang?: 'pt' | 'en' }) => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [selected, setSelected] = useState<number | null>(null);
  const [logoError, setLogoError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const shouldParallax = dimension.width >= 1024;
  const y  = useTransform(scrollYProgress, [0, 1], [0, height * 0.2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 0.4]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.3]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 0.5]);

  /* resize + lenis */
  useEffect(() => {
    let lenis: any;
    let frameId: number;

    const resize = () =>
      setDimension({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", resize);
    resize();

    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis();
      const raf = (time: number) => {
        lenis.raf(time);
        frameId = requestAnimationFrame(raf);
      };
      frameId = requestAnimationFrame(raf);
    });

    return () => {
      window.removeEventListener("resize", resize);
      if (frameId) cancelAnimationFrame(frameId);
      if (lenis) lenis.destroy();
    };
  }, []);

  /* Escape key */
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
    <>
      {/* ── Gallery grid ── */}
      <main className="w-full bg-[#121212] text-white">
        <div
          ref={gallery}
          className="relative box-border grid grid-cols-2 gap-3 overflow-visible bg-[#121212] px-5 pt-5 pb-8 sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-12 md:grid-cols-4 lg:flex lg:h-[115vh] lg:gap-[2vw] lg:overflow-hidden lg:p-[2vw]"
        >
          <Column posters={posters.slice(0, 3)}  y={y}  offset={0}  onSelect={setSelected} isParallax={shouldParallax} />
          <Column posters={posters.slice(3, 6)}  y={y2} offset={3}  onSelect={setSelected} isParallax={shouldParallax} />
          <Column posters={posters.slice(6, 9)}  y={y3} offset={6}  onSelect={setSelected} isParallax={shouldParallax} />
          <Column posters={posters.slice(9, 12)} y={y4} offset={9}  onSelect={setSelected} isParallax={shouldParallax} />
        </div>
      </main>

      {/* ── Lightbox ── */}
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
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              backgroundColor: "rgba(0,0,0,0.88)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* poster card */}
            <motion.div
              key="card"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1,    opacity: 1 }}
              exit={{ scale: 0.92,    opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="group"
              style={{
                position: "relative",
                maxHeight: "85vh",
                maxWidth: "85vw",
                lineHeight: 0,
              }}
            >
              {/* image */}
              <img
                src={posters[selected].src}
                alt="poster"
                style={{
                  display: "block",
                  maxHeight: "85vh",
                  maxWidth: "85vw",
                  width: "auto",
                  height: "auto",
                  userSelect: "none",
                }}
              />

              {/* hover overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "rgba(0,0,0,0.70)" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {/* logo (only if available and has no load errors) */}
                  {posters[selected].meta.logo && !logoError && (
                    <img
                      src={posters[selected].meta.logo!}
                      alt="poster logo"
                      onError={() => setLogoError(true)}
                      style={{
                        maxWidth: "330px",
                        maxHeight: "165px",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                        marginBottom: "4px",
                      }}
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
    </>
  );
};

/* ─── Shared text style (matches .portfolio-header at 12px) ─────── */
const infoStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "12px",
  fontFamily: "var(--font-halenoir), sans-serif",
  color: "rgba(255,255,255,0.5)",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  lineHeight: 1.13,
};

/* ─── Column sub-component ───────────────────────────────────────── */
type ColumnProps = {
  posters: Poster[];
  y: MotionValue<number>;
  offset: number;
  onSelect: (index: number) => void;
  isParallax: boolean;
};

const Column = ({ posters, y, offset, onSelect, isParallax }: ColumnProps) => (
  <motion.div
    className={`relative flex min-w-0 flex-col gap-3 sm:gap-4 ${
      isParallax
        ? "-top-[45%] w-1/4 min-w-[250px] gap-[2vw] first:top-[-10%] [&:nth-child(2)]:top-[-20%] [&:nth-child(3)]:top-[-15%] [&:nth-child(4)]:top-[-25%]"
        : ""
    }`}
    style={isParallax ? { y } : undefined}
  >
    {posters.map((poster, i) => (
      <div
        key={i}
        className="relative w-full h-auto cursor-pointer"
        onClick={() => onSelect(offset + i)}
      >
        <img
          src={poster.src}
          alt="poster"
          className="pointer-events-none w-full h-auto block"
        />
      </div>
    ))}
  </motion.div>
);

export { Skiper30 };
