'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Palavra gigante que "estica" letra por letra ao entrar na tela.
// O tamanho é calculado pelo número de letras para a palavra ocupar a largura.
export function KineticWord({
  text,
  as: Tag = 'h2',
  className = '',
  fill = 1,
}: {
  text: string;
  as?: 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  fill?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const size = Math.min(26, (138 / Math.max(text.length, 3)) * fill);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(ref.current!.querySelectorAll('.kw-letter'), {
          scaleY: 0.05,
          yPercent: 12,
          stagger: { each: 0.035, from: 'random' },
          ease: 'expo.out',
          scrollTrigger: { trigger: ref.current, start: 'top 92%', end: 'top 45%', scrub: 0.8 },
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag
      ref={ref as never}
      className={`kw ${className}`}
      aria-label={text}
      style={{ fontSize: `${size}vw` }}
    >
      <span className="kw-skew" aria-hidden="true">
        {Array.from(text).map((ch, i) =>
          ch === ' ' ? (
            <span key={i} className="kw-space" />
          ) : (
            <span key={i} className="kw-letter">
              {ch}
            </span>
          ),
        )}
      </span>
    </Tag>
  );
}

// Faixas de texto que correm na horizontal conforme o scroll, em sentidos opostos.
export function KineticMarquee({ rows }: { rows: string[][] }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.mq-track').forEach((track, i) => {
          gsap.fromTo(
            track,
            { xPercent: i % 2 ? -30 : 0 },
            {
              xPercent: i % 2 ? 0 : -30,
              ease: 'none',
              scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 0.5 },
            },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="mq" aria-hidden="true">
      {rows.map((words, r) => (
        <div key={r} className={`mq-row ${r % 2 ? 'is-alt' : ''}`}>
          <div className="mq-track">
            {[...words, ...words, ...words].map((w, i) => (
              <span key={i} className="mq-item">
                {w}
                <img src="/figma-3dman-transparent.png" alt="" className="mq-man" />
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Inclina as palavras gigantes conforme a velocidade do scroll. Montar uma vez na página.
export function useScrollSkew() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const targets = gsap.utils.toArray<HTMLElement>('.kw-skew');
      const setters = targets.map((el) => gsap.quickTo(el, 'skewX', { duration: 0.5, ease: 'power3' }));
      const clamp = gsap.utils.clamp(-10, 10);
      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -300);
          setters.forEach((set) => set(skew));
        },
      });
      const settle = () => setters.forEach((set) => set(0));
      ScrollTrigger.addEventListener('scrollEnd', settle);
      return () => {
        st.kill();
        ScrollTrigger.removeEventListener('scrollEnd', settle);
      };
    });
    return () => mm.revert();
  });
}
