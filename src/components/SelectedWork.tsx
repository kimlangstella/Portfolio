// app/components/SelectedWork.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ImageAlbumModal from './ImageAlbumModal.';

export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  tags?: string[];
  gallery?: string[];
  demo?: string;
  github?: string;
};

type Props = {
  heading?: string;
  projects: Project[];
};

export default function SelectedWork({ heading = 'Selected Work', projects }: Props) {
  const [openAlbum, setOpenAlbum] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);

  return (
    <section className="work" aria-labelledby="work-heading" id="work">
      <h2 id="work-heading" className="heading">{heading}</h2>

      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            {/* Thumbnail */}
            <div
              className="thumb cursor-pointer"
              onClick={() => {
                if (p.gallery?.length) {
                  setCurrentGallery(p.gallery);
                } else {
                  setCurrentGallery([p.image]);
                }
                setOpenAlbum(true);
              }}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 900px) 92vw, 33vw"
              />
              <div className="thumb-overlay">
                <span>View Gallery</span>
              </div>
            </div>

            {/* Content */}
            <div className="content">
              <div className="header-meta">
                <h3 className="title">{p.title}</h3>
              </div>
              
              <p className="description">{p.description}</p>

              {(p.tags?.length ?? 0) > 0 && (
                <div className="tags">
                  {p.tags!.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              )}

              <div className="links">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="link-btn demo">
                    Live Demo
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="link-btn github">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Album Modal */}
      {openAlbum && (
        <ImageAlbumModal
          images={currentGallery}
          onClose={() => setOpenAlbum(false)}
        />
      )}

      <style jsx>{`
        :global(:root) {
          --bg: #1f2330;
          --ink: #ffffff;
          --muted: #c9ced8;
          --card: #252a39;
          --border: rgba(255,255,255,0.08);
          --accent: #7a5a45;
          --chip: rgba(255,255,255,0.08);
          --primary: #9461fb;
        }

        .work {
          padding: clamp(2rem, 5vw, 4rem);
          background: var(--bg);
        }

        .heading {
          color: var(--ink);
          font-size: clamp(1.8rem, 4.8vw, 2.4rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 2rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1.5rem, 4vw, 2rem);
        }

        .card {
          display: flex;
          flex-direction: column;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          border-color: rgba(148, 97, 251, 0.3);
        }

        .thumb {
          position: relative;
          aspect-ratio: 16 / 9;
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }
        .thumb :global(img) { 
          object-fit: cover; 
          transition: transform 500ms ease;
        }
        .card:hover .thumb :global(img) {
          transform: scale(1.05);
        }

        .thumb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 300ms ease;
          backdrop-filter: blur(4px);
        }
        .thumb:hover .thumb-overlay {
          opacity: 1;
        }
        .thumb-overlay span {
          color: #fff;
          font-weight: 600;
          padding: 8px 16px;
          border: 1px solid #fff;
          border-radius: 99px;
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          flex: 1;
        }

        .header-meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }

        .title {
          color: var(--ink);
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }

        .role-badge {
          font-size: 0.75rem;
          padding: 4px 10px;
          background: rgba(148, 97, 251, 0.15);
          color: #b084f5;
          border-radius: 6px;
          font-weight: 600;
          white-space: nowrap;
        }

        .description {
          color: var(--muted);
          line-height: 1.6;
          font-size: 0.95rem;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }
        .chip {
          font-size: 0.75rem;
          padding: 4px 10px;
          border-radius: 99px;
          background: var(--chip);
          color: var(--muted);
          border: 1px solid var(--border);
        }

        .links {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .link-btn {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          text-align: center;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 200ms ease;
        }
        .link-btn.demo {
          background: var(--primary);
          color: #fff;
        }
        .link-btn.demo:hover {
          filter: brightness(1.1);
          box-shadow: 0 4px 12px rgba(148, 97, 251, 0.3);
        }
        .link-btn.github {
          background: transparent;
          color: var(--ink);
          border: 1px solid var(--border);
        }
        .link-btn.github:hover {
          background: rgba(255,255,255,0.05);
          border-color: var(--muted);
        }

        @media (max-width: 1000px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
