'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Signature from './Signature';
import { LogoMarquee } from './Clients';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Lang = 'pt' | 'en';
type Link = { href: string; label: string };

export default function SiteFooter({ lang, socials }: { lang: Lang; socials: Link[] }) {
  const ref = useRef<HTMLElement>(null);
  const pt = lang === 'pt';
  const email = socials.find((s) => s.href.startsWith('mailto:'));

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo('.ft-man', { yPercent: 45 }, {
          yPercent: 0,
          ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', end: 'bottom bottom', scrub: 0.6 },
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  const pages: Link[] = [
    { href: '#home', label: pt ? 'Início' : 'Home' },
    { href: '#work', label: pt ? 'Projetos' : 'Work' },
    { href: '#posters', label: pt ? 'Pôsteres' : 'Posters' },
    { href: '#clients', label: pt ? 'Clientes' : 'Clients' },
  ];

  return (
    <footer ref={ref} id="contact" className="ft" data-surface="dark">
      <div className="ft-panel">
        <div className="ft-title-wrap">
          <Signature className="ft-signature" />
          <h2 className="v2-title is-center ft-title">
            <span className="f-sans">{pt ? 'Vamos' : "Let's"}</span>{' '}
            <span className="f-serif is-accent">{pt ? 'conversar' : 'talk'}</span>
          </h2>
        </div>

        <nav className="ft-col is-left" aria-label={pt ? 'Páginas' : 'Pages'}>
          <small>{pt ? 'Páginas' : 'Pages'}</small>
          {pages.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <nav className="ft-col is-right" aria-label={pt ? 'Redes' : 'Social'}>
          <small>{pt ? 'Redes' : 'Follow'}</small>
          {socials.map((l) => (
            <a key={l.label} href={l.href} target={l.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">
              {l.label}
            </a>
          ))}
        </nav>

        <img className="ft-man" src="/3d/boneco-render.webp" alt="" aria-hidden="true" />

        {email && (
          <a className="v2-btn is-red ft-mail" href={email.href}>
            {email.href.replace('mailto:', '')}
          </a>
        )}

        <LogoMarquee className="is-light" />

        <div className="ft-bottom">
          <span>© 2026 João Marcelo. {pt ? 'Todos os direitos reservados.' : 'All rights reserved.'}</span>
          <a href="#home">{pt ? 'Voltar ao topo' : 'Back to top'}</a>
        </div>
      </div>
    </footer>
  );
}
