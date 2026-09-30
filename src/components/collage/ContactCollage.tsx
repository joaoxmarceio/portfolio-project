'use client';

import { KineticWord } from './Kinetic';

type Lang = 'pt' | 'en';
type Link = { href: string; label: string };

export default function ContactCollage({ lang, links }: { lang: Lang; links: Link[] }) {
  const pt = lang === 'pt';
  const email = links.find((l) => l.href.startsWith('mailto:'));
  const rotations = [-4, 3, -2, 5, -3];

  return (
    <footer className="contact theme-red" id="contact">
      <KineticWord text={pt ? 'Vamos' : "Let's"} as="p" className="contact-word" fill={0.9} />
      <KineticWord text={pt ? 'conversar' : 'talk'} as="h2" className="contact-word is-offset" fill={0.9} />

      <img className="contact-man" src="/figma-3dman-transparent.png" alt="" aria-hidden="true" />

      {email && (
        <a className="contact-mail" href={email.href}>
          {email.href.replace('mailto:', '')}
        </a>
      )}

      <nav className="contact-links" aria-label={pt ? 'Redes sociais' : 'Social links'}>
        {links.map((l, i) => (
          <a
            key={l.label}
            className="sticker is-ink"
            href={l.href}
            target={l.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            style={{ rotate: `${rotations[i % rotations.length]}deg` }}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <p className="contact-copy">© 2026 João Marcelo. {pt ? 'Todos os direitos reservados.' : 'All rights reserved.'}</p>
    </footer>
  );
}
