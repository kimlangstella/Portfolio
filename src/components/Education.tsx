'use client';

import Image from 'next/image';

export type EducationItem = {
  school: string;
  degree: string;          
  field?: string;          
  location?: string;       
  start: string;           
  end: string;             
  note?: string;           
  courses?: string[];      
  logo?: string;           
  link?: string;          
};

type Props = {
  heading?: string;
  items: EducationItem[];
  id?: string;            
};

export default function Education({ heading = 'Education', items, id = 'education' }: Props) {
  return (
    <section id={id} className="edu" aria-labelledby="edu-heading">
      <h2 id="edu-heading" className="heading">{heading}</h2>

      <ol className="timeline">
        {items.map((it, idx) => (
          <li key={it.school + it.degree + idx} className="row">
            <div className="node" aria-hidden>
              <span className="dot" />

              {idx !== items.length - 1 && <span className="line" />}
            </div>

            <article className="card">
              <header className="top">
                <div className="logoWrap" aria-hidden={!it.logo}>
                  {it.logo && (
                    <Image
                      src={it.logo}
                      alt=""
                      width={40}
                      height={40}
                      className="logo"
                    />
                  )}
                </div>

                <div className="titleBlock">
                  <h3 className="degree">
                    {it.degree}
                    {it.field ? <span className="field"> — {it.field}</span> : null}
                  </h3>
                  <p className="school">
                    {it.link ? <a href={it.link} target="_blank" rel="noreferrer">{it.school}</a> : it.school}
                    {it.location ? <> • <span className="muted">{it.location}</span></> : null}
                  </p>
                </div>

                <time className="dates" dateTime={`${it.start}/${it.end}`}>
                  {it.start} — {it.end}
                </time>
              </header>

              {it.note && <p className="note">{it.note}</p>}

              {(it.courses?.length ?? 0) > 0 && (
                <div className="chips" aria-label="Key courses or skills">
                  {it.courses!.map((c) => (
                    <span key={c} className="chip">{c}</span>
                  ))}
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>

      <style jsx>{`
        :global(:root) {
          --bg: #1f2330;
          --ink: #ffffff;
          --muted: #c9ced8;
          --card: #252a39;
          --border: rgba(255,255,255,0.08);
          --accent: #b084f5;            /* soft purple; change if you prefer */
          --accent-2: #7a5a45;          /* alt accent (brown) if you want */
          --chip: rgba(255,255,255,0.08);
        }

        .edu {
          background: var(--bg);
         
          padding: clamp(2rem, 5vw, 4rem);
         
        }

        .heading {
          color: var(--ink);
          font-size: clamp(1.8rem, 4.8vw, 2.4rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 1.25rem;
        }

        .timeline {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 1.2rem;
        }

        .row {
          position: relative;
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 1rem;
        }

        .node {
          position: relative;
          display: grid;
          place-items: start center;
        }

        .dot {
          width: 14px;
          height: 14px;
          border-radius: 999px;
          background: radial-gradient(circle at 30% 30%, #ffffff, var(--accent) 45%, transparent 65%);
          border: 2px solid var(--accent);
          margin-top: 6px;
          box-shadow: 0 0 0 4px rgba(176,132,245,0.15);
        }

        .line {
          position: absolute;
          top: 26px;
          left: 50%;
          width: 2px;
          height: calc(100% - 14px);
          transform: translateX(-50%);
          background: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
        }

        .card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1rem;
        }

        .top {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 0.8rem 1rem;
          align-items: center;
        }

        .logoWrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          display: grid;
          place-items: center;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .logo { object-fit: cover; }

        .titleBlock {
          min-width: 0;
        }

        .degree {
          color: var(--ink);
          font-size: 1.05rem;
          margin: 0;
          line-height: 1.2;
        }
        .field {
          font-weight: 600;
          color: var(--ink);
          opacity: 0.95;
        }

        .school {
          margin: 0.2rem 0 0;
          color: var(--muted);
        }
        .school a {
          color: var(--ink);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.25);
        }
        .school a:hover { border-color: var(--ink); }
        .muted { color: var(--muted); }

        .dates {
          color: var(--ink);
          font-weight: 600;
          white-space: nowrap;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border);
          padding: 0.35rem 0.55rem;
          border-radius: 999px;
        }

        .note {
          color: var(--muted);
          margin: 0.75rem 0 0.5rem;
          line-height: 1.6;
        }

        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: 0.35rem;
        }
        .chip {
          font-size: 0.78rem;
          padding: 0.28rem 0.55rem;
          border-radius: 999px;
          background: var(--chip);
          color: var(--ink);
          border: 1px solid var(--border);
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .top { grid-template-columns: 1fr; }
          .dates { justify-self: start; }
        }
      `}</style>
    </section>
  );
}
