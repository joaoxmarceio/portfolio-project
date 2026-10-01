'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Signature from './Signature';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Lang = 'pt' | 'en';

// Faixa gigante correndo atrás do retrato, com a assinatura se desenhando por cima.
export default function IntroMarquee({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLElement>(null);
  const pt = lang === 'pt';
  const top = pt ? 'Designer gráfico' : 'Graphic designer';
  const bottom = pt ? 'Diretor criativo' : 'Creative director';

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const st = { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 0.4 };
        gsap.fromTo('.im-row.is-top .im-track', { xPercent: 0 }, { xPercent: -28, ease: 'none', scrollTrigger: st });
        gsap.fromTo('.im-row.is-bottom .im-track', { xPercent: -28 }, { xPercent: 0, ease: 'none', scrollTrigger: st });
        gsap.fromTo('.im-card', { yPercent: 18, rotate: 4 }, { yPercent: -18, rotate: -3, ease: 'none', scrollTrigger: st });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="im" data-surface="dark" aria-label={`${top}, ${bottom}`}>
      <div className="im-row is-top f-serif" aria-hidden="true">
        <div className="im-track">{Array.from({ length: 4 }, (_, i) => <span key={i}>{top}&nbsp;·&nbsp;</span>)}</div>
      </div>
      <div className="im-row is-bottom f-sans" aria-hidden="true">
        <div className="im-track">{Array.from({ length: 4 }, (_, i) => <span key={i}>{bottom}&nbsp;·&nbsp;</span>)}</div>
      </div>

      <figure className="im-card">
        <img src="/joaomarcelo-recorte.webp" alt="João Marcelo" width={819} height={1024} loading="lazy" />
        <Signature className="im-signature" trigger="scrub" />
      </figure>
    </section>
  );
}
