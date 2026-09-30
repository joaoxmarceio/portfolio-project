'use client';

import { useCallback, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { categoryLabels, projects, projectTranslations, workOrder, type Project, type ProjectCategory } from '@/data/projects';
import covers from '@/data/covers.json';
import ProjectViewer from '@/components/work/ProjectViewer';
import { KineticWord } from './Kinetic';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Lang = 'pt' | 'en';
type Cover = { src: string; width: number; height: number };

const SPREADS: { category: ProjectCategory; theme: 'paper' | 'red' | 'ink'; word: { pt: string; en: string } }[] = [
  { category: 'BRANDING', theme: 'paper', word: { pt: 'Identidade', en: 'Identity' } },
  { category: 'UX_UI', theme: 'red', word: { pt: 'UX/UI', en: 'UX/UI' } },
  { category: 'DECKS', theme: 'ink', word: { pt: 'Decks', en: 'Decks' } },
  { category: 'FLYERS', theme: 'paper', word: { pt: 'Mídias', en: 'Social' } },
];

// Posição (coluna), rotação, deslocamento vertical (y) e horizontal (dx) de cada recorte, em vw.
// Ciclo de 6: duas linhas de três, a segunda puxada para cima para os recortes se sobreporem.
const CUTS = [
  { col: '1 / 5', rot: -3, y: 0, dx: 0 },
  { col: '5 / 9', rot: 2, y: 5, dx: -2 },
  { col: '9 / 13', rot: -1.5, y: -2, dx: -3 },
  { col: '2 / 6', rot: 2.5, y: -7, dx: 0 },
  { col: '6 / 10', rot: -2.5, y: -3, dx: -2 },
  { col: '10 / 13', rot: 3.5, y: -9, dx: -4 },
];

const byOrder = (a: Project, b: Project) => workOrder.indexOf(a.id) - workOrder.indexOf(b.id);
const groups = SPREADS.map((s) => ({ ...s, items: projects.filter((p) => p.category === s.category).sort(byOrder) }));
const flat = groups.flatMap((g) => g.items);

export default function ProjectsCollage({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const cuts = gsap.utils.toArray<HTMLElement>('.cut');
        gsap.set(cuts, { autoAlpha: 0, scale: 1.18, rotation: 9 });
        ScrollTrigger.batch(cuts, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              scale: 1,
              rotation: 0,
              duration: 0.55,
              ease: 'back.out(1.8)',
              stagger: 0.07,
            }),
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
    <div ref={ref} id="work">
      {groups.map((g) => (
        <section key={g.category} className={`spread theme-${g.theme}`} aria-label={categoryLabels[g.category][lang]}>
          <div className="spread-head">
            <KineticWord text={g.word[lang]} as="h2" className="spread-word" />
            <span className="sticker sticker-count" style={{ rotate: '-4deg' }}>
              {g.items.length} {lang === 'pt' ? 'projetos' : 'projects'} · {categoryLabels[g.category][lang]}
            </span>
          </div>

          <ul className="cuts">
            {g.items.map((p, i) => {
              const slot = CUTS[i % CUTS.length];
              const cover = (covers as Record<string, Cover>)[p.id];
              const idx = flat.indexOf(p);
              return (
                <li key={p.id} className="cuts-item" style={{ gridColumn: slot.col, marginTop: `${slot.y}vw`, translate: `${slot.dx}vw 0` }}>
                  <button
                    type="button"
                    className="cut"
                    style={{ '--rot': `${slot.rot}deg` } as React.CSSProperties}
                    aria-haspopup="dialog"
                    onClick={(e) => {
                      trigger.current = e.currentTarget;
                      setOpen(idx);
                    }}
                  >
                    <span className="tape" aria-hidden="true" />
                    <img src={cover.src} width={cover.width} height={cover.height} alt="" loading="lazy" decoding="async" />
                    <span className="cut-label">
                      <b>{p.title}</b>
                      <span>{projectTranslations[p.id]?.subTitle[lang] ?? p.subTitle}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      {open !== null && (
        <ProjectViewer lang={lang} index={open} total={flat.length} project={flat[open]} onClose={close} onNavigate={setOpen} />
      )}
    </div>
  );
}
