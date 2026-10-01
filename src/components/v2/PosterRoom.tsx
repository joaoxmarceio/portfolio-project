'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';
import posters from '@/data/posters.json';

gsap.registerPlugin(Draggable, useGSAP);

type Lang = 'pt' | 'en';
type Poster = (typeof posters)[number];

// Gerador pseudoaleatório com semente fixa: a parede fica igual em toda visita.
function seeded(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

// Posições em % da parede: grade de 7 colunas com desvio, como pôsteres colados à mão.
const COLS = 7;
const rand = seeded(11);
const layout = posters.map((_, i) => {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  return {
    left: 2 + col * 13.6 + (rand() - 0.5) * 5,
    top: 4 + row * 24 + (col % 2) * 6 + (rand() - 0.5) * 6,
    rot: (rand() - 0.5) * 9,
  };
});

export default function PosterRoom({ lang }: { lang: Lang }) {
  const wallRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const [canDrag, setCanDrag] = useState(false);
  const pt = lang === 'pt';

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setCanDrag(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useGSAP(
    () => {
      if (!canDrag) return;
      let z = posters.length;
      const items = gsap.utils.toArray<HTMLElement>('.poster');
      const drags = Draggable.create(items, {
        type: 'x,y',
        bounds: wallRef.current,
        zIndexBoost: false,
        onPress() {
          (this.target as HTMLElement).style.zIndex = String(++z);
          gsap.to(this.target, { scale: 1.06, duration: 0.2, ease: 'power3.out' });
        },
        onRelease() {
          gsap.to(this.target, { scale: 1, duration: 0.35, ease: 'back.out(2)' });
        },
        onClick() {
          setOpen(Number((this.target as HTMLElement).dataset.index));
        },
      });
      return () => drags.forEach((d) => d.kill());
    },
    { scope: wallRef, dependencies: [canDrag], revertOnUpdate: true },
  );

  const close = useCallback(() => setOpen(null), []);

  return (
    <section className="room" id="posters" data-surface="dark" aria-labelledby="room-title">
      <div className="room-head">
        <h2 id="room-title" className="v2-title room-title">
          <span className="f-sans">{pt ? 'Pôsteres' : 'Personal'}</span>{' '}
          <span className="f-serif is-accent">{pt ? 'autorais' : 'posters'}</span>
          <sup>{posters.length}</sup>
        </h2>
        <p className="room-note">
          {canDrag
            ? pt ? 'Arraste para reorganizar a parede. Clique para ampliar.' : 'Drag to rearrange the wall. Click to enlarge.'
            : pt ? 'Deslize pela parede. Toque para ampliar.' : 'Swipe along the wall. Tap to enlarge.'}
        </p>
      </div>

      <div className="room-scroll">
        <div ref={wallRef} className="room-wall">
          {posters.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              className="poster"
              data-index={i}
              aria-label={`${p.title}. ${pt ? 'Ampliar pôster' : 'Enlarge poster'}`}
              style={{
                left: `${layout[i].left}%`,
                top: `${layout[i].top}%`,
                '--rot': `${layout[i].rot}deg`,
                aspectRatio: `${p.width} / ${p.height}`,
              } as React.CSSProperties}
              onClick={canDrag ? undefined : () => setOpen(i)}
            >
              <span className="tape" aria-hidden="true" />
              <img src={`/wall/${p.slug}.webp`} alt="" width={p.width} height={p.height} loading="lazy" decoding="async" draggable={false} />
            </button>
          ))}
          <div className="room-light" aria-hidden="true" />
        </div>
        <div className="room-led" aria-hidden="true" />
      </div>

      {open !== null && <PosterLightbox poster={posters[open]} lang={lang} onClose={close} onNavigate={(d) => setOpen((open + d + posters.length) % posters.length)} />}
    </section>
  );
}

function PosterLightbox({ poster, lang, onClose, onNavigate }: { poster: Poster; lang: Lang; onClose: () => void; onNavigate: (dir: 1 | -1) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const pt = lang === 'pt';

  useEffect(() => {
    closeRef.current?.focus();
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(1);
      if (e.key === 'ArrowLeft') onNavigate(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      html.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, onNavigate]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={poster.title} onClick={onClose}>
      <img key={poster.slug} src={`/wall/full/${poster.slug}.webp`} alt={poster.title} onClick={(e) => e.stopPropagation()} />
      <div className="lightbox-bar" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={() => onNavigate(-1)}>{pt ? 'Anterior' : 'Previous'}</button>
        <span>{poster.title}</span>
        <button type="button" onClick={() => onNavigate(1)}>{pt ? 'Próximo' : 'Next'}</button>
        <button ref={closeRef} type="button" onClick={onClose}>{pt ? 'Fechar' : 'Close'}</button>
      </div>
    </div>
  );
}
