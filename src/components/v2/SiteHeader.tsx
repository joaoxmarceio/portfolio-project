'use client';

import { useEffect, useRef, useState } from 'react';

type Lang = 'pt' | 'en';
type Link = { href: string; label: string };

// Cabeçalho fixo que aparece depois da primeira tela, com menu em tela cheia.
export default function SiteHeader({
  lang,
  onLang,
  socials,
}: {
  lang: Lang;
  onLang: (l: Lang) => void;
  socials: Link[];
}) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [surface, setSurface] = useState<'dark' | 'light'>('dark');
  const menuBtn = useRef<HTMLButtonElement>(null);
  const pt = lang === 'pt';

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setVisible(!e.isIntersecting), { threshold: 0.08 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  // Troca a cor do cabeçalho conforme a superfície (clara ou escura) que está embaixo dele.
  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const hit = document
        .elementsFromPoint(40, 36)
        .map((el) => el.closest<HTMLElement>('[data-surface]'))
        .find(Boolean);
      setSurface(hit?.dataset.surface === 'light' ? 'light' : 'dark');
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    check();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const close = () => {
    setOpen(false);
    menuBtn.current?.focus();
  };

  const nav: Link[] = [
    { href: '#home', label: pt ? 'Início' : 'Home' },
    { href: '#work', label: pt ? 'Projetos' : 'Work' },
    { href: '#split', label: pt ? 'Clientes e autoral' : 'Clients and personal' },
    { href: '#posters', label: pt ? 'Pôsteres' : 'Posters' },
    { href: '#clients', label: pt ? 'Clientes' : 'Clients' },
    { href: '#contact', label: pt ? 'Contato' : 'Contact' },
  ];

  return (
    <>
      <header className={`v2-header is-${open ? 'dark' : surface} ${visible || open ? 'is-visible' : ''}`}>
        <a href="#home" className="v2-header-logo">
          <span>©</span>João Marcelo
        </a>
        <div className="v2-header-actions">
          <a href="#contact" className="v2-btn is-red">
            {pt ? 'Vamos conversar' : "Let's talk"}
          </a>
          <button
            ref={menuBtn}
            type="button"
            className={`v2-menu-btn ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="v2-menu"
            aria-label={open ? (pt ? 'Fechar menu' : 'Close menu') : pt ? 'Abrir menu' : 'Open menu'}
            onClick={() => (open ? close() : setOpen(true))}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="v2-menu" className={`v2-menu ${open ? 'is-open' : ''}`} aria-hidden={!open} inert={!open}>
        <nav className="v2-menu-nav" aria-label={pt ? 'Seções' : 'Sections'}>
          {nav.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ '--i': i } as React.CSSProperties}>
              <small>{String(i + 1).padStart(2, '0')}</small>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="v2-menu-side">
          <div className="v2-lang" role="group" aria-label={pt ? 'Idioma' : 'Language'}>
            {(['pt', 'en'] as Lang[]).map((l) => (
              <button key={l} type="button" aria-pressed={lang === l} onClick={() => onLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <ul>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target={s.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
