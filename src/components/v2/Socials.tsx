'use client';

import posters from '@/data/posters.json';

type Lang = 'pt' | 'en';

const FAN = ['star-chosen', 'y2k', 'stussy', 'dream', 'jnco-jeans'];

// Cartões em leque levando ao Instagram.
export default function Socials({ lang, instagram }: { lang: Lang; instagram: string }) {
  const pt = lang === 'pt';
  const cards = FAN.map((slug) => posters.find((p) => p.slug === slug)).filter(Boolean) as typeof posters;

  return (
    <section className="socials" data-surface="light" aria-labelledby="socials-title">
      <p className="socials-mark" aria-hidden="true">©</p>
      <h2 id="socials-title" className="v2-title is-center">
        <span className="f-sans">{pt ? 'Mais no' : 'More on'}</span>
        <br />
        <span className="f-serif">Instagram</span>
      </h2>
      <p className="socials-handle">@joaomarceio</p>
      <a className="socials-fan" href={instagram} target="_blank" rel="noopener noreferrer" aria-label={pt ? 'Abrir o Instagram @joaomarceio' : 'Open Instagram @joaomarceio'}>
        {cards.map((p, i) => (
          <span key={p.slug} className="socials-card" style={{ '--i': i - (cards.length - 1) / 2, '--a': Math.abs(i - (cards.length - 1) / 2) } as React.CSSProperties}>
            <img src={`/wall/${p.slug}.webp`} alt="" loading="lazy" />
          </span>
        ))}
      </a>
    </section>
  );
}
