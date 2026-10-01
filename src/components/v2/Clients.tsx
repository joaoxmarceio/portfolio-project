'use client';

import { projects } from '@/data/projects';
import Signature from './Signature';

type Lang = 'pt' | 'en';

// Logos únicos dos projetos (mesmo cliente com vários projetos aparece uma vez).
export const clientLogos = Array.from(
  new Map(projects.filter((p) => p.logo).map((p) => [p.logo!, { src: p.logo!, name: p.title.split(/[|™®]/)[0].trim() }])).values(),
);

export function LogoMarquee({ className = '' }: { className?: string }) {
  return (
    <div className={`logo-mq ${className}`}>
      <div className="logo-mq-track">
        {[...clientLogos, ...clientLogos].map((l, i) => (
          <img key={i} src={l.src} alt={i < clientLogos.length ? l.name : ''} aria-hidden={i >= clientLogos.length} loading="lazy" />
        ))}
      </div>
    </div>
  );
}

export default function Clients({ lang }: { lang: Lang }) {
  const pt = lang === 'pt';
  return (
    <section id="clients" className="clients" data-surface="light" aria-labelledby="clients-title">
      <Signature className="clients-signature" trigger="scrub" />
      <div className="clients-head">
        <h2 id="clients-title" className="v2-title">
          <span className="f-sans">{pt ? 'Clientes' : 'Clients'}</span>
          <br />
          <span className="f-serif">{pt ? '& parcerias' : '& partners'}</span>
        </h2>
        <p className="clients-text">
          {pt
            ? `Marcas, estúdios e pessoas com quem já construí identidade, interface e apresentação. ${clientLogos.length} logos, todos de projetos que estão aqui no site.`
            : `Brands, studios and people I have built identity, interface and presentation with. ${clientLogos.length} logos, all from projects on this site.`}
        </p>
      </div>
      <LogoMarquee />
    </section>
  );
}
