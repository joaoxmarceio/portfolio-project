'use client';

import { useEffect, useRef } from "react";
import { Skiper30 } from "../components/ui/skiper30";
import ProjectsShowcase from "../components/ProjectsShowcase";
import ShinyText from "../components/ShinyText";

const socialLinks = [
  {
    className: "portfolio-social-behance",
    icons: ["/figma-behance.svg"],
    href: "#contact",
    label: "Behance",
  },
  {
    className: "portfolio-social-instagram",
    href: "#contact",
    icons: [
      "/figma-social-3.svg",
      "/figma-social-4.svg",
      "/figma-social-5.svg",
    ],
    label: "Instagram",
  },
  {
    className: "portfolio-social-linkedin",
    href: "#contact",
    icons: ["/figma-social-2.svg"],
    label: "LinkedIn",
  },
  {
    className: "portfolio-social-whatsapp",
    href: "#contact",
    icons: ["/figma-social-1.svg"],
    label: "WhatsApp",
  },
];

const footerNavLinks = [
  { href: "#home", label: "Home" },
  { href: "#identidade-visual", label: "Identidade visual" },
  { href: "#ux-ui", label: "UX/UI" },
  { href: "#decks", label: "Decks" },
  { href: "#midias-sociais-e-flyers", label: "Mídias sociais e flyers" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);

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
            Designer gráfico
            <br />
            Diretor criativo
          </p>
          <a className="portfolio-signature" href="/">
            <span>©</span>JoãoMarcelo
          </a>
          <p>2026</p>
        </header>

        <p aria-hidden="true" className="portfolio-copyright">
          ©
        </p>

        <div ref={characterRef} aria-hidden="true" className="portfolio-character-wrap">
          <img alt="" className="portfolio-character" src="/figma-3dman-transparent.png" />
        </div>

        <div className="portfolio-title-group">
          <h1>
            <span>Expandindo</span>
            <span>Horizontes</span>
            <span>Criativos</span>
          </h1>
          <p>
            <ShinyText text="Desde 2020" speed={4} color="rgba(255, 255, 255, 0.4)" shineColor="#ffffff" />
          </p>
        </div>

        <div className="portfolio-intro">
          <p>
            Me chamo João Marcelo e venho inovando no campo criativo em que
            atuo há mais de 6 anos. Esse website compila alguns dos meus
            melhores trabalhos e seus estudos de caso e um pouco da minha
            jornada como designer, além de expressar minha visão criativa acerca
            do mundo que eu vivo, enxergo e ouço.
          </p>

          <div className="portfolio-actions">
            <a aria-label="Ir para projetos" className="portfolio-arrow" href="#work">
              <img alt="" src="/figma-arrow.svg" />
            </a>

            <nav aria-label="Redes sociais" className="portfolio-socials">
              {socialLinks.map((link) => (
                <a
                  aria-label={link.label}
                  className={`portfolio-social-link ${link.className}`}
                  href={link.href}
                  key={link.label}
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
        <Skiper30 />
      </section>

      <section className="relative w-full min-h-screen bg-[#121212] overflow-hidden">
        <ProjectsShowcase />
      </section>

      <footer className="portfolio-footer" id="contact">
        <nav aria-label="Navegação do rodapé" className="portfolio-footer-nav">
          {footerNavLinks.map((link) => (
            <a href={link.href} key={link.href}>
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
            >
              {link.icons.map((icon) => (
                <img alt="" key={icon} src={icon} />
              ))}
            </a>
          ))}
        </nav>

        <p className="portfolio-footer-copy">
          © 2026 JoãoMarcelo. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
