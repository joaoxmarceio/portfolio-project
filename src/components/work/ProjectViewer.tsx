'use client';

import { useEffect, useRef } from 'react';
import { categoryLabels, projectTranslations, type Project } from '@/data/projects';

type Lang = 'pt' | 'en';

interface ProjectViewerProps {
  lang: Lang;
  index: number;
  total: number;
  project: Project;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ProjectViewer({ lang, index, total, project, onClose, onNavigate }: ProjectViewerProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const t = projectTranslations[project.id];
  const pt = lang === 'pt';

  useEffect(() => {
    const html = document.documentElement;
    const previous = html.style.overflow;
    html.style.overflow = 'hidden';
    return () => {
      html.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    closeRef.current?.focus();
    dialogRef.current?.scrollTo({ top: 0 });
  }, [project.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button, a[href]');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const prev = (index - 1 + total) % total;
  const next = (index + 1) % total;

  return (
    <div
      ref={dialogRef}
      className="viewer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="viewer-title"
    >
      <div className="viewer-bar">
        <span className="viewer-meta">
          <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
          <span>{categoryLabels[project.category][lang]}</span>
        </span>
        <button ref={closeRef} type="button" className="viewer-close" onClick={onClose}>
          {pt ? 'Fechar' : 'Close'}
        </button>
      </div>

      <article className="viewer-body" key={project.id}>
        <header className="viewer-head">
          <h2 id="viewer-title" className="viewer-title">{project.title}</h2>
          <p className="viewer-sub">{t?.subTitle[lang] ?? project.subTitle}</p>
          <div className="viewer-text">
            <p>{t?.desc1[lang] ?? project.desc1}</p>
            <p>{t?.desc2[lang] ?? project.desc2}</p>
          </div>
        </header>

        <div className={`viewer-gallery ${project.isLandscape ? 'is-spaced' : 'is-stacked'}`}>
          {project.galleryImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${project.title}, ${pt ? 'imagem' : 'image'} ${i + 1}`}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          ))}
        </div>

        {project.gridImages && (
          <div className="viewer-panels">
            {project.gridImages.map((src, i) => (
              <span key={src}>
                <img src={src} alt={`${project.title}, ${pt ? 'painel' : 'panel'} ${i + 1}`} loading="lazy" />
              </span>
            ))}
          </div>
        )}

        <nav className="viewer-nav" aria-label={pt ? 'Outros projetos' : 'Other projects'}>
          <button type="button" onClick={() => onNavigate(prev)}>
            <span>{pt ? 'Anterior' : 'Previous'}</span>
          </button>
          <button type="button" onClick={() => onNavigate(next)}>
            <span>{pt ? 'Próximo' : 'Next'}</span>
          </button>
        </nav>
      </article>
    </div>
  );
}
