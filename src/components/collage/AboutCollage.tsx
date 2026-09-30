'use client';

import { KineticWord } from './Kinetic';

type Lang = 'pt' | 'en';

interface AboutCopy {
  text: string;
  role: [string, string];
  availability: [string, string];
  location: [string, string];
  since: string;
}

export default function AboutCollage({ lang, copy }: { lang: Lang; copy: AboutCopy }) {
  const pt = lang === 'pt';
  return (
    <section className="about theme-paper" id="about" aria-labelledby="about-title">
      <h2 id="about-title" className="sr-only">{pt ? 'Sobre mim' : 'About me'}</h2>
      <div className="about-words">
        <KineticWord text={pt ? 'Designer' : 'Graphic'} as="p" className="about-word" fill={0.82} />
        <KineticWord text={pt ? 'gráfico &' : 'designer &'} as="p" className="about-word is-offset" fill={0.82} />
        <KineticWord text={pt ? 'Diretor' : 'Creative'} as="p" className="about-word" fill={0.82} />
        <KineticWord text={pt ? 'criativo' : 'director'} as="p" className="about-word is-offset is-red" fill={0.82} />
      </div>

      <figure className="about-photo" style={{ '--rot': '3deg' } as React.CSSProperties}>
        <span className="tape" aria-hidden="true" />
        <img src="/joaomarcelo-profile.jpg?v=4" alt="João Marcelo" loading="lazy" />
      </figure>

      <div className="about-body">
        <p className="about-text">{copy.text}</p>
        <ul className="about-stickers">
          <li className="sticker" style={{ rotate: '-3deg' }}><small>{copy.role[0]}</small>{copy.role[1]}</li>
          <li className="sticker is-red" style={{ rotate: '2deg' }}><small>{copy.location[0]}</small>{copy.location[1]}</li>
          <li className="sticker is-ink" style={{ rotate: '-1.5deg' }}><small>{copy.availability[0]}</small>{copy.availability[1]}</li>
          <li className="sticker" style={{ rotate: '4deg' }}>{copy.since}</li>
        </ul>
      </div>
    </section>
  );
}
