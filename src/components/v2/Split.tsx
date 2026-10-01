'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const Boneco3D = dynamic(() => import('./Boneco3D'), { ssr: false });

type Lang = 'pt' | 'en';

// Bifurcação do site: trabalho para clientes de um lado, trabalho autoral do outro.
export default function Split({ lang }: { lang: Lang }) {
  const [side, setSide] = useState<'left' | 'right' | null>(null);
  const pt = lang === 'pt';

  return (
    <section id="split" className="split" data-surface="light" data-side={side ?? undefined} aria-label={pt ? 'Para clientes e autoral' : 'Client and personal work'}>
      <Boneco3D className="split-3d" />
      <img className="split-photo" src="/joaomarcelo-recorte.webp" alt="" width={819} height={1024} loading="lazy" aria-hidden="true" />

      <div className="split-cols">
        <a href="#work" className="split-col is-left" onPointerEnter={() => setSide('left')} onPointerLeave={() => setSide(null)} onFocus={() => setSide('left')} onBlur={() => setSide(null)}>
          <span className="split-word">
            <span className="f-serif">{pt ? 'Para' : 'For'}</span>
            <span className="f-sans">{pt ? 'Clientes' : 'Clients'}</span>
          </span>
          <span className="split-desc">
            {pt ? 'Identidades visuais, UX/UI, decks e campanhas feitos para marcas.' : 'Visual identities, UX/UI, decks and campaigns made for brands.'}
          </span>
          <span className="v2-round" aria-hidden="true">↗</span>
        </a>
        <a href="#posters" className="split-col is-right" onPointerEnter={() => setSide('right')} onPointerLeave={() => setSide(null)} onFocus={() => setSide('right')} onBlur={() => setSide(null)}>
          <span className="split-word">
            <span className="f-serif">{pt ? 'Trabalho' : 'Personal'}</span>
            <span className="f-sans">{pt ? 'Autoral' : 'Work'}</span>
          </span>
          <span className="split-desc">
            {pt ? 'Pôsteres feitos por conta própria, sem briefing, só por vontade.' : 'Posters made on my own, no brief, just because.'}
          </span>
          <span className="v2-round" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
