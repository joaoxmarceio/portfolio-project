'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, useGSAP);

// PROVISÓRIO: traço genérico no lugar da assinatura do João.
// Trocar SIGNATURE_PATHS pelo vetor da assinatura real quando ele enviar.
export const SIGNATURE_VIEWBOX = '0 0 520 200';
export const SIGNATURE_PATHS = [
  'M18 150 C 46 60, 78 18, 92 52 S 74 168, 52 158 S 96 74, 136 82 S 154 136, 176 112 S 206 52, 226 86 S 236 140, 264 120 C 292 100, 300 46, 330 62 S 344 148, 372 128 S 420 50, 452 74 C 474 92, 486 70, 506 30',
  'M120 176 C 220 150, 360 146, 494 160',
];

export default function Signature({
  className = '',
  trigger = 'scroll',
  duration = 1.6,
}: {
  className?: string;
  trigger?: 'scroll' | 'scrub' | 'load';
  duration?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const paths = ref.current!.querySelectorAll('path');
        const base = { drawSVG: '0%' };
        if (trigger === 'load') {
          gsap.fromTo(paths, base, { drawSVG: '100%', duration, ease: 'power2.inOut', stagger: 0.3, delay: 0.4 });
        } else if (trigger === 'scrub') {
          gsap.fromTo(paths, base, {
            drawSVG: '100%',
            ease: 'none',
            stagger: 0.4,
            scrollTrigger: { trigger: ref.current, start: 'top 85%', end: 'bottom 35%', scrub: 0.6 },
          });
        } else {
          gsap.fromTo(paths, base, {
            drawSVG: '100%',
            duration,
            ease: 'power2.inOut',
            stagger: 0.3,
            scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
          });
        }
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <svg ref={ref} className={`signature ${className}`} viewBox={SIGNATURE_VIEWBOX} aria-hidden="true" data-placeholder="assinatura">
      {SIGNATURE_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
