'use client';

import { useCallback, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { categoryLabels, orderedProjects, projectTranslations } from '@/data/projects';
import covers from '@/data/covers.json';
import ProjectViewer from '@/components/work/ProjectViewer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Lang = 'pt' | 'en';
type Cover = { src: string; width: number; height: number };

// Largura (vw), altura na faixa (vh) e profundidade (velocidade extra) de cada projeto. Ciclo de 6.
const SLOTS = [
  { w: 36, top: 3, depth: 0.0 },
  { w: 24, top: 34, depth: 0.35 },
  { w: 30, top: 10, depth: 0.15 },
  { w: 22, top: 38, depth: 0.5 },
  { w: 32, top: 0, depth: 0.25 },
  { w: 26, top: 28, depth: 0.1 },
];

export default function WorkTrack({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const pt = lang === 'pt';

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
        const track = trackRef.current!;
        const distance = () => track.scrollWidth - window.innerWidth;
        const move = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: '.wt-pin',
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        gsap.utils.toArray<HTMLElement>('.wt-item').forEach((item) => {
          const depth = Number(item.dataset.depth);
          if (!depth) return;
          gsap.fromTo(
            item,
            { xPercent: depth * 60 },
            {
              xPercent: -depth * 60,
              ease: 'none',
              scrollTrigger: { trigger: item, containerAnimation: move, start: 'left right', end: 'right left', scrub: true },
            },
          );
        });

        gsap.to('.wt-progress span', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.wt-pin', start: 'top top', end: () => `+=${distance()}`, scrub: true },
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  const close = useCallback(() => {
    setOpen(null);
    trigger.current?.focus();
  }, []);

  return (
    <section ref={ref} id="work" className="wt" data-surface="light" aria-labelledby="wt-title">
      <div className="wt-pin">
        <header className="wt-head">
          <h2 id="wt-title" className="v2-title">
            <span className="f-sans">{pt ? 'Projetos' : 'Selected'}</span>{' '}
            <span className="f-serif is-accent">{pt ? 'selecionados' : 'work'}</span>
          </h2>
          <p className="wt-count">
            {orderedProjects.length} {pt ? 'projetos para clientes' : 'client projects'}
          </p>
        </header>

        <ol ref={trackRef} className="wt-track">
          {orderedProjects.map((p, i) => {
            const slot = SLOTS[i % SLOTS.length];
            const cover = (covers as Record<string, Cover>)[p.id];
            return (
              <li
                key={p.id}
                className="wt-item"
                data-depth={slot.depth}
                style={{ '--w': `${slot.w}vw`, '--top': `${slot.top}vh` } as React.CSSProperties}
              >
                <button
                  type="button"
                  className="wt-card"
                  aria-haspopup="dialog"
                  onClick={(e) => {
                    trigger.current = e.currentTarget;
                    setOpen(i);
                  }}
                >
                  <span className="wt-meta">
                    <span className="wt-index">{String(i + 1).padStart(2, '0')}</span>
                    {categoryLabels[p.category][lang]}
                  </span>
                  <span className="wt-media">
                    <img src={cover.src} width={cover.width} height={cover.height} alt="" loading="lazy" decoding="async" />
                  </span>
                  <span className="wt-name">{p.title}</span>
                  <span className="wt-sub">{projectTranslations[p.id]?.subTitle[lang] ?? p.subTitle}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="wt-progress" aria-hidden="true">
          <span />
        </div>
      </div>

      {open !== null && (
        <ProjectViewer
          lang={lang}
          index={open}
          total={orderedProjects.length}
          project={orderedProjects[open]}
          onClose={close}
          onNavigate={setOpen}
        />
      )}
    </section>
  );
}
