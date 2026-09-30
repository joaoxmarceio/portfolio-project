'use client';

import { useCallback, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  categoryLabels,
  projects,
  projectTranslations,
  workOrder,
  type Project,
  type ProjectCategory,
} from '@/data/projects';
import covers from '@/data/covers.json';
import ProjectViewer from './ProjectViewer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Lang = 'pt' | 'en';
type Cover = { src: string; width: number; height: number };

const coverFor = (id: number) => (covers as Record<string, Cover>)[id];

export const orderedProjects: Project[] = workOrder
  .map((id) => projects.find((p) => p.id === id))
  .filter((p): p is Project => Boolean(p));

// Posições da grade solta (12 colunas). O ciclo se repete a cada 8 projetos.
// shift = deslocamento vertical em vh, para quebrar o alinhamento das linhas.
const SLOTS = [
  { col: '1 / 8', shift: 0 },
  { col: '9 / 13', shift: 22 },
  { col: '3 / 7', shift: 0 },
  { col: '8 / 13', shift: 14 },
  { col: '1 / 6', shift: 8 },
  { col: '7 / 13', shift: 0 },
  { col: '2 / 6', shift: 12 },
  { col: '7 / 12', shift: 0 },
];

const categoryOrder: ProjectCategory[] = ['BRANDING', 'UX_UI', 'DECKS', 'FLYERS'];

export default function WorkGrid({ lang }: { lang: Lang }) {
  const rootRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const items = gsap.utils.toArray<HTMLElement>('.work-item');
        gsap.set(items, { autoAlpha: 0, y: 48 });
        gsap.set('.work-media', { clipPath: 'inset(0 0 100% 0)' });

        ScrollTrigger.batch(items, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              stagger: 0.08,
            });
            gsap.to(
              batch.map((el) => el.querySelector('.work-media')),
              {
                clipPath: 'inset(0 0 0% 0)',
                duration: 1.1,
                ease: 'power3.inOut',
                stagger: 0.08,
              },
            );
          },
        });
      });
      return () => mm.revert();
    },
    { scope: rootRef },
  );

  const open = useCallback((index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setOpenIndex(index);
  }, []);

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  const counts = categoryOrder.map((c) => ({
    key: c,
    label: categoryLabels[c][lang],
    total: projects.filter((p) => p.category === c).length,
  }));

  return (
    <section ref={rootRef} className="work" id="work" aria-labelledby="work-title">
      <header className="work-head">
        <h2 id="work-title" className="work-title">
          {lang === 'pt' ? 'Projetos' : 'Work'}
          <sup>{orderedProjects.length}</sup>
        </h2>
        <ul className="work-counts" aria-label={lang === 'pt' ? 'Projetos por categoria' : 'Work by category'}>
          {counts.map((c) => (
            <li key={c.key}>
              {c.label} <span>{c.total}</span>
            </li>
          ))}
        </ul>
      </header>

      <ol className="work-grid">
        {orderedProjects.map((project, i) => {
          const slot = SLOTS[i % SLOTS.length];
          const cover = coverFor(project.id);
          const subtitle = projectTranslations[project.id]?.subTitle[lang] ?? project.subTitle;
          return (
            <li
              key={project.id}
              className="work-item"
              style={{ '--col': slot.col, '--shift': slot.shift } as React.CSSProperties}
            >
              <button
                type="button"
                className="work-card"
                onClick={(e) => open(i, e.currentTarget)}
                aria-haspopup="dialog"
              >
                <span className="work-media">
                  <img
                    src={cover.src}
                    width={cover.width}
                    height={cover.height}
                    alt=""
                    loading={i < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </span>
                <span className="work-caption">
                  <span className="work-meta">
                    <span className="work-index">{String(i + 1).padStart(2, '0')}</span>
                    <span>{categoryLabels[project.category][lang]}</span>
                  </span>
                  <span className="work-name">{project.title}</span>
                  <span className="work-sub">{subtitle}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {openIndex !== null && (
        <ProjectViewer
          lang={lang}
          index={openIndex}
          total={orderedProjects.length}
          project={orderedProjects[openIndex]}
          onClose={close}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
