// app/components/SelectedWork.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ImageAlbumModal from './ImageAlbumModal.';

export type Project = {
  title: string;
  impact?: string;
  image: string;
  href: string;
  tags?: string[];
  gallery?: string[]; // optional album images
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
                  setCurrentGallery([p.image]); // fallback: just main image
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
            </div>

            {/* Content */}
            <div className="content">
              <h3 className="title">{p.title}</h3>

              {(p.tags?.length ?? 0) > 0 && (
                <div className="tags">
                  {p.tags!.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              )}

              
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
          margin: 0 0 1.25rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(1rem, 3vw, 1.5rem);
        }

        .card {
          display: flex;
          flex-direction: column;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          border-color: rgba(255,255,255,0.16);
        }

        .thumb {
          position: relative;
          aspect-ratio: 16 / 10;
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }
        .thumb :global(img) { object-fit: cover; }

        .content {
          display: grid;
          gap: 0.6rem;
          padding: 1rem;
        }

        .title {
          color: var(--ink);
          font-size: 1.1rem;
          margin: 0;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .chip {
          font-size: 0.8rem;
          padding: 0.3rem 0.55rem;
          border-radius: 999px;
          background: var(--chip);
          color: var(--ink);
          border: 1px solid var(--border);
          white-space: nowrap;
        }

        .meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.2rem;
        }
        .impact {
          color: var(--ink);
          font-weight: 600;
          opacity: 0.9;
        }
        .cta {
          color: var(--ink);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.35);
        }
        .cta:hover { border-color: var(--ink); }

        @media (max-width: 1000px) {
          .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 640px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
