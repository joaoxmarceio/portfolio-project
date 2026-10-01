'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Lang = 'pt' | 'en';
type Seg = { t: string; serif?: boolean };

// PROVISÓRIO: frase montada a partir dos textos que já estão no site.
// Trocar pela frase do João quando ele enviar. serif = palavra em destaque (serifa, vermelho).
const PHRASE: Record<Lang, Seg[]> = {
  pt: [
    { t: 'Expandindo', serif: true },
    { t: 'horizontes' },
    { t: 'criativos', serif: true },
    { t: 'com identidades de forte impacto, direção de arte e pôsteres que' },
    { t: 'ficam.', serif: true },
  ],
  en: [
    { t: 'Expanding', serif: true },
    { t: 'creative' },
    { t: 'horizons', serif: true },
    { t: 'through high-impact identities, art direction and posters that' },
    { t: 'stay.', serif: true },
  ],
};

export default function Manifesto({ lang, since }: { lang: Lang; since: string }) {
  const ref = useRef<HTMLElement>(null);
  const words = PHRASE[lang].flatMap((seg) => seg.t.split(' ').map((w) => ({ w, serif: seg.serif })));

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.mf-word',
          { opacity: 0.14 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.1,
            scrollTrigger: { trigger: '.mf-text', start: 'top 80%', end: 'bottom 45%', scrub: 0.5 },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: ref, dependencies: [lang], revertOnUpdate: true },
  );

  return (
    <section ref={ref} className="mf" data-surface="dark" aria-label={PHRASE[lang].map((s) => s.t).join(' ')}>
      <p className="mf-label">
        <span className="mf-mark" aria-hidden="true">©</span>
        {since}
      </p>
      <p className="mf-text" aria-hidden="true" data-placeholder="frase">
        {words.map(({ w, serif }, i) => (
          <span key={i} className={`mf-word ${serif ? 'f-serif is-accent' : 'f-sans'}`}>
            {w}{' '}
          </span>
        ))}
      </p>
    </section>
  );
}
