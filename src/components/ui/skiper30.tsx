"use client";

import {
  AnimatePresence,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ─── Poster data ─────────────────────────────────────────────────── */
type PosterMeta = {
  logo: string | null;
  date: string;
  description: string;
};

type Poster = {
  src: string;
  meta: PosterMeta;
};

const posters: Poster[] = [
  {
    src: "/PARALLAX POSTERS/STUSSY.jpg",
    meta: {
      logo: "/POSTER LOGOS/STUSSY.png",
      date: "2023",
      description:
        "Inspired by decades of streetwear\nculture, celebrating the iconic Stüssy\nbrand and its enduring creative legacy.",
    },
  },
  {
    src: "/PARALLAX POSTERS/DREAM.jpg",
    meta: {
      logo: "/POSTER LOGOS/DREAM.png",
      date: "2023",
      description:
        "A surreal visual exploring ambition\nand the pursuit of creative dreams\nthrough bold graphic language.",
    },
  },
  {
    src: "/PARALLAX POSTERS/OLD SAYING.jpg",
    meta: {
      logo: "/POSTER LOGOS/OLD SAYING.png",
      date: "2022",
      description:
        "Typography-driven composition inspired\nby timeless phrases and the wisdom\nhidden in everyday expression.",
    },
  },
  {
    src: "/PARALLAX POSTERS/ASFALTOREC.jpg",
    meta: {
      logo: "/POSTER LOGOS/ASFALTOREC.png",
      date: "2023",
      description:
        "Raw street energy translated into\nbold visuals for Asfalto Records,\ncelebrating underground music culture.",
    },
  },
  {
    src: "/PARALLAX POSTERS/NEXA.jpg",
    meta: {
      logo: null,
      date: "2023",
      description:
        "Futuristic editorial design exploring\nthe intersection of technology and\nhuman connection through abstraction.",
    },
  },
  {
    src: "/PARALLAX POSTERS/PELUK.jpg",
    meta: {
      logo: "/POSTER LOGOS/PELUK.png",
      date: "2024",
      description:
        "A vibrant celebration of Latin culture,\nblending warmth and bold aesthetics\ninto a striking visual narrative.",
    },
  },
  {
    src: "/PARALLAX POSTERS/STUSSY X NIKE.jpg",
    meta: {
      logo: "/POSTER LOGOS/STUSSY X NIKE.png",
      date: "2023",
      description:
        "Tribute to the legendary collaboration\nbetween Stüssy and Nike, two icons\nshaping street culture for decades.",
    },
  },
  {
    src: "/PARALLAX POSTERS/STAR CHOSEN.jpg",
    meta: {
      logo: "/POSTER LOGOS/STARCHOSEN.png",
      date: "2025",
      description:
        "O ARQUÉTIPO DO \"TOLO\" É O COMPASSO\nCRIATIVO DESSA OBRA, QUE BRINCA COM O\nCONTRASTE DO CAMPO E A NARRATIVA COSMOLÓGICA",
    },
  },
  {
    src: "/PARALLAX POSTERS/Y2K.jpg",
    meta: {
      logo: "/POSTER LOGOS/Y2K.png",
      date: "2022",
      description:
        "Nostalgic Y2K aesthetics reimagined\nfor a new generation, capturing\nthe chaos and optimism of that era.",
    },
  },
  {
    src: "/PARALLAX POSTERS/DON'T YOU REALIZE.jpg",
    meta: {
      logo: "/POSTER LOGOS/DON'T YOU REALIZE.png",
      date: "2023",
      description:
        "An introspective composition questioning\nperception and awareness, using stark\ncontrast to provoke emotional response.",
    },
  },
  {
    src: "/PARALLAX POSTERS/FUTURE.jpg",
    meta: {
      logo: "/POSTER LOGOS/FUTURE.png",
      date: "2024",
      description:
        "Bold typographic statement about\nthe future and who holds the power\nto decide what comes next.",
    },
  },
  {
    src: "/PARALLAX POSTERS/JNCO JEANS.jpg",
    meta: {
      logo: "/POSTER LOGOS/JNCO JEANS.png",
      date: "2023",
      description:
        "Tribute to the iconic JNCO Jeans era,\na defining piece of 90s streetwear\nand youth counterculture identity.",
    },
  },
];

/* ─── Main component ──────────────────────────────────────────────── */
const Skiper30 = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [selected, setSelected] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y  = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

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

  return (
    <>
      {/* ── Gallery grid ── */}
      <main className="w-full bg-[#121212] text-white">
        <div
          ref={gallery}
          className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-[#121212] p-[2vw]"
        >
          <Column posters={posters.slice(0, 3)}  y={y}  offset={0}  onSelect={setSelected} />
          <Column posters={posters.slice(3, 6)}  y={y2} offset={3}  onSelect={setSelected} />
          <Column posters={posters.slice(6, 9)}  y={y3} offset={6}  onSelect={setSelected} />
          <Column posters={posters.slice(9, 12)} y={y4} offset={9}  onSelect={setSelected} />
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
                  {/* logo (only if available) */}
                  {posters[selected].meta.logo && (
                    <img
                      src={posters[selected].meta.logo!}
                      alt="poster logo"
                      style={{
                        maxWidth: "330px",
                        maxHeight: "165px",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)",
                      }}
                    />
                  )}

                  {/* date */}
                  <p style={infoStyle}>{posters[selected].meta.date}</p>

                  {/* copyright */}
                  <p style={infoStyle}>©JOÃOMARCELO</p>

                  {/* description */}
                  <p
                    style={{
                      ...infoStyle,
                      fontSize: "10px",
                      whiteSpace: "pre-line",
                      textAlign: "center",
                      lineHeight: 1.01,
                    }}
                  >
                    {posters[selected].meta.description}
                  </p>
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
};

const Column = ({ posters, y, offset, onSelect }: ColumnProps) => (
  <motion.div
    className="relative -top-[45%] flex w-1/4 min-w-[250px] flex-col gap-[2vw]
               first:top-[-45%] [&:nth-child(2)]:top-[-95%]
               [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
    style={{ y }}
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
