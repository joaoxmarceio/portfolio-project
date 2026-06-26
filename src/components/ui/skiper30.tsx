"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [
  "/PROJECTS/POSTERS 1ST PARALLAX/BOMBTRACK-POSTER.png",
  "/PROJECTS/POSTERS 1ST PARALLAX/AGUETONI.jpg",
  "/PROJECTS/POSTERS 1ST PARALLAX/OLD SAYING.jpg",
  "/PROJECTS/POSTERS 1ST PARALLAX/DON'T YOU REALIZE.jpg",
  "/PROJECTS/POSTERS 1ST PARALLAX/FUTURE.jpg",
  "/PROJECTS/POSTERS 1ST PARALLAX/Y2K.jpg",
  "/PROJECTS/POSTERS 1ST PARALLAX/BOMBTRACK-POSTER.png",
  "/PROJECTS/POSTERS 1ST PARALLAX/OLD SAYING.jpg",
  "/PROJECTS/POSTERS 1ST PARALLAX/AGUETONI.jpg",
  "/PROJECTS/POSTERS 1ST PARALLAX/DON'T YOU REALIZE.jpg",
  "/PROJECTS/POSTERS 1ST PARALLAX/FUTURE.jpg"
];

const Skiper30 = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    let lenis: any;
    let frameId: number;

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

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
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <main className="w-full bg-[#121212] text-white">
      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-[#121212] p-[2vw]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10]]} y={y4} />
      </div>
    </main>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative -top-[45%] flex w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-auto overflow-hidden rounded-2xl border border-white/5 shadow-soft">
          <img
            src={`${src}`}
            alt="poster"
            className="pointer-events-none w-full h-auto block"
          />
        </div>
      ))}
    </motion.div>
  );
};

export { Skiper30 };
