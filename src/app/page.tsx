'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Skiper30 } from "../components/ui/skiper30";
import { Skiper49 } from "../components/ui/skiper-ui/skiper49";
import ProjectsShowcase from "../components/ProjectsShowcase";
import ShinyText from "../components/ShinyText";

const socialLinks = [
  {
    className: "portfolio-social-behance",
    icons: ["/figma-behance.svg"],
    href: "https://www.behance.net/joaoxmarcelo",
    label: "Behance",
  },
  {
    className: "portfolio-social-instagram",
    href: "https://www.instagram.com/joaomarceio/",
    icons: [
      "/figma-social-3.svg",
      "/figma-social-4.svg",
      "/figma-social-5.svg",
    ],
    label: "Instagram",
  },
  {
    className: "portfolio-social-linkedin",
    href: "https://www.linkedin.com/in/jmsantospoli/",
    icons: ["/figma-social-2.svg"],
    label: "LinkedIn",
  },
  {
    className: "portfolio-social-whatsapp",
    href: "https://wa.me/5516991985132",
    icons: ["/figma-social-1.svg"],
    label: "WhatsApp",
  },
];

const contentTranslations = {
  pt: {
    role1: "Designer gráfico",
    role2: "Diretor criativo",
    heroTitle1: "Expandindo",
    heroTitle2: "Horizontes",
    heroTitle3: "Criativos",
    since: "Desde 2020",
    intro: "Me chamo João Marcelo e venho inovando no campo criativo em que atuo há mais de 6 anos. Esse website compila alguns dos meus melhores trabalhos e seus estudos de caso e um pouco da minha jornada como designer, além de expressar minha visão criativa acerca do mundo que eu vivo, enxergo e ouço.",
    navHome: "Home",
    navAbout: "Sobre mim",
    navVisual: "Identidade visual",
    navUxUi: "UX/UI",
    navDecks: "Decks",
    navFlyers: "Mídias sociais e flyers",
    allRightsReserved: "Todos os direitos reservados.",
    aboutTitle: "Sobre mim",
    aboutText: "Sou designer gráfico e diretor criativo focado em desenvolver identidades visuais de forte impacto e soluções de design inovadoras. Ao longo da minha carreira, busquei unir a excelência estética com a precisão conceitual, ajudando marcas a expressarem sua essência única por meio de narrativas visuais marcantes, autênticas e inesquecíveis.",
    aboutRoleLabel: "Atualmente atuando em:",
    aboutRoleVal: "Diretor criativo em GGEZ Media",
    aboutAvailabilityLabel: "Disponibilidade atual:",
    aboutAvailabilityVal: "Trabalhos remotos e presenciais",
    aboutLocationLabel: "Localizado em:",
    aboutLocationVal: "Franca | Brasil 🇧🇷"
  },
  en: {
    role1: "Graphic Designer",
    role2: "Creative Director",
    heroTitle1: "Expanding",
    heroTitle2: "Creative",
    heroTitle3: "Horizons",
    since: "Since 2020",
    intro: "My name is João Marcelo, and I have been innovating in the creative field for over 6 years. This website compiles some of my best works, case studies, and a bit of my journey as a designer, while expressing my creative vision of the world I live in, see, and hear.",
    navHome: "Home",
    navAbout: "About me",
    navVisual: "Visual Identity",
    navUxUi: "UX/UI",
    navDecks: "Pitch Decks",
    navFlyers: "Social Media & Flyers",
    allRightsReserved: "All rights reserved.",
    aboutTitle: "About me",
    aboutText: "I am a graphic designer and creative director focused on developing high-impact visual identities and innovative design solutions. Throughout my career, I have sought to unite aesthetic excellence with conceptual precision, helping brands express their unique essence through striking, authentic, and unforgettable visual narratives.",
    aboutRoleLabel: "Currently working as:",
    aboutRoleVal: "Creative Director at GGEZ Media",
    aboutAvailabilityLabel: "Current availability:",
    aboutAvailabilityVal: "Remote and on-site work",
    aboutLocationLabel: "Located in:",
    aboutLocationVal: "Franca | Brazil 🇧🇷"
  }
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState<'pt' | 'en'>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'pt' || saved === 'en') {
      setLang(saved);
    } else {
      const browserLang = navigator.language || '';
      if (!browserLang.toLowerCase().startsWith('pt')) {
        setLang('en');
      }
    }
  }, []);

  const changeLang = (newLang: 'pt' | 'en') => {
    setLang(newLang);
    localStorage.setItem('portfolio-lang', newLang);
  };

  const t = contentTranslations[lang];

  const footerNavLinks = [
    { href: "#home", label: t.navHome },
    { href: "#about", label: t.navAbout },
    { href: "#identidade-visual", label: t.navVisual },
    { href: "#ux-ui", label: t.navUxUi },
    { href: "#decks", label: t.navDecks },
    { href: "#midias-sociais-e-flyers", label: t.navFlyers },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const character = characterRef.current;
    if (!hero || !character) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const setPose = (x = 0, y = 0, rotateX = 0, rotateY = 0) => {
      character.style.setProperty("--character-x", `${x}px`);
      character.style.setProperty("--character-y", `${y}px`);
      character.style.setProperty("--character-rotate-x", `${rotateX}deg`);
      character.style.setProperty("--character-rotate-y", `${rotateY}deg`);
    };

    const resetPose = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setPose());
    };

    const handleHeroMove = (event: PointerEvent | MouseEvent) => {
      if (
        reducedMotion.matches ||
        ("pointerType" in event && event.pointerType === "touch")
      ) {
        return;
      }

      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, (event.clientX - rect.left - rect.width / 2) / (rect.width / 2)));
        const y = Math.max(-1, Math.min(1, (event.clientY - rect.top - rect.height / 2) / (rect.height / 2)));

        setPose(x * 24, y * 18, -y * 4, x * 6);
      });
    };

    hero.addEventListener("pointermove", handleHeroMove, { passive: true });
    hero.addEventListener("mousemove", handleHeroMove, { passive: true });
    hero.addEventListener("pointerleave", resetPose);
    hero.addEventListener("mouseleave", resetPose);
    window.addEventListener("blur", resetPose);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", handleHeroMove);
      hero.removeEventListener("mousemove", handleHeroMove);
      hero.removeEventListener("pointerleave", resetPose);
      hero.removeEventListener("mouseleave", resetPose);
      window.removeEventListener("blur", resetPose);
    };
  }, []);

  return (
    <main className="portfolio-shell">
      <section ref={heroRef} className="portfolio-hero" id="home">
        <header className="portfolio-header">
          <p>
            {t.role1}
            <br />
            {t.role2}
          </p>
          <a className="portfolio-signature" href="/">
            <span>©</span>João Marcelo
          </a>
          <div className="flex items-center justify-end gap-3 md:gap-4 select-none">
            <span>2026</span>
            <div className="flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-0.5 text-[9px] md:text-[10px] tracking-wider font-semibold">
              <button
                onClick={() => changeLang('pt')}
                className={`px-2 py-0.5 rounded-full transition-all duration-300 ${
                  lang === 'pt'
                    ? 'bg-white text-black font-bold'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => changeLang('en')}
                className={`px-2 py-0.5 rounded-full transition-all duration-300 ${
                  lang === 'en'
                    ? 'bg-white text-black font-bold'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </header>

        <p aria-hidden="true" className="portfolio-copyright">
          ©
        </p>

        <div ref={characterRef} aria-hidden="true" className="portfolio-character-wrap">
          <img alt="" className="portfolio-character" src="/figma-3dman-transparent.png" />
        </div>

        <div className={`portfolio-title-group ${lang === 'en' ? 'portfolio-title-en' : ''}`}>
          <h1>
            <span>{t.heroTitle1}</span>
            <span>{t.heroTitle2}</span>
            <span>{t.heroTitle3}</span>
          </h1>
          <p>
            <ShinyText text={t.since} speed={4} color="rgba(255, 255, 255, 0.4)" shineColor="#ffffff" />
          </p>
        </div>

        <div className="portfolio-intro">
          <p>{t.intro}</p>

          <div className="portfolio-actions">
            <a
              aria-label={lang === 'pt' ? "Ir para projetos" : "Go to projects"}
              className="portfolio-arrow"
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#work");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              <img alt="" src="/figma-arrow.svg" />
            </a>

            <nav aria-label="Redes sociais" className="portfolio-socials">
              {socialLinks.map((link) => (
                <a
                  aria-label={link.label}
                  className={`portfolio-social-link ${link.className}`}
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icons.map((icon) => (
                    <img alt="" key={icon} src={icon} />
                  ))}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="portfolio-sticky-scroll" id="work">
        <Skiper30 lang={lang} />
      </section>

      <section className="portfolio-about" id="about">
        <div className="portfolio-about-container">
          <motion.div
            className="portfolio-about-image-wrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          >
            <motion.img
              src="/joaomarcelo-profile.jpg?v=4"
              alt="João Marcelo"
              className="portfolio-about-image"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 60, damping: 10 }}
            />
          </motion.div>
          
          <motion.div
            className="portfolio-about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.1 }}
          >
            <h2 className="portfolio-about-title">{t.aboutTitle}</h2>
            <p className="portfolio-about-text">{t.aboutText}</p>
            
            <div className="portfolio-about-meta">
              <div className="portfolio-about-meta-item">
                <span className="portfolio-about-meta-label">{t.aboutRoleLabel}</span>
                <span className="portfolio-about-meta-value">{t.aboutRoleVal}</span>
              </div>
              <div className="portfolio-about-meta-item">
                <span className="portfolio-about-meta-label">{t.aboutAvailabilityLabel}</span>
                <span className="portfolio-about-meta-value">{t.aboutAvailabilityVal}</span>
              </div>
              <div className="portfolio-about-meta-item">
                <span className="portfolio-about-meta-label">{t.aboutLocationLabel}</span>
                <span className="portfolio-about-meta-value">{t.aboutLocationVal}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative w-full min-h-screen bg-[#121212] overflow-hidden">
        <ProjectsShowcase lang={lang} />
      </section>

      <section className="relative w-full bg-[#121212] py-20 overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
        <div className="w-full max-w-7xl px-6 md:px-12 mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
            {lang === 'pt' ? 'Mais Projetos' : 'More Projects'}
          </h2>
          <p className="text-sm font-light text-white/50 max-w-xl mx-auto">
            {lang === 'pt' 
              ? 'Uma visão geral de outros cases, identidades visuais e criações do meu acervo de design.' 
              : 'A general overview of other cases, visual identities, and creations from my design archive.'}
          </p>
        </div>
        <Skiper49 />
      </section>

      <footer className="portfolio-footer" id="contact">
        <nav aria-label="Navegação do rodapé" className="portfolio-footer-nav">
          {footerNavLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(link.href);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <nav aria-label="Redes sociais" className="portfolio-footer-socials">
          {socialLinks.map((link) => (
            <a
              aria-label={link.label}
              className={`portfolio-footer-social-link portfolio-footer-${link.label.toLowerCase()}`}
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icons.map((icon) => (
                <img alt="" key={icon} src={icon} />
              ))}
            </a>
          ))}
        </nav>

        <p className="portfolio-footer-copy">
          © 2026 João Marcelo. {t.allRightsReserved}
        </p>
      </footer>
    </main>
  );
}
