'use client';

type ExperienceItem = {
  company: string;
  role: string;
  start: string;        
  end: string;          
  location?: string;
  summary?: string;     
  bullets: string[];    
  skills?: string[];    
  link?: string;        
};

type Props = {
  id?: string;                 
  heading?: string;            
  items: ExperienceItem[];
  resumeHref?: string;         
};

export default function Experience({
  id = 'experience',
  heading = 'Experience',
  items,
  resumeHref,
}: Props) {
  return (
    <section id={id} className="xp" aria-labelledby="xp-heading">
      <header className="top">
        <h2 id="xp-heading" className="heading">{heading}</h2>
        {resumeHref && (
          <a className="btn" href={resumeHref} target="_blank" rel="noreferrer">
            Resume (PDF)
          </a>
        )}
      </header>

      <ol className="list">
        {items.map((it, i) => (
          <li key={it.company + it.role + i} className="row">
            <div className="dates">{it.start} — {it.end}</div>

            <article className="card">
              <h3 className="title">
                {it.role}{' '}
                <span className="company">
                  • {it.link ? (
                    <a href={it.link} target="_blank" rel="noreferrer">{it.company}</a>
                  ) : it.company}
                </span>
              </h3>

              {(it.location || it.summary) && (
                <p className="meta">
                  {it.location && <span>{it.location}</span>}
                  {it.location && it.summary && ' • '}
                  {it.summary}
                </p>
              )}

              <ul className="bullets">
                {it.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>

              {(it.skills?.length ?? 0) > 0 && (
                <div className="chips" aria-label="Key skills">
                  {it.skills!.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>

      <style jsx>{`
        :global(:root){
          --bg:#1f2330; --ink:#ffffff; --muted:#c9ced8;
          --card:#252a39; --border:rgba(255,255,255,0.08);
          --accent:#b084f5; --chip:rgba(255,255,255,0.08);
          --nav-h:80px; /* adjust to your sticky header height */
        }
        :global(html){ scroll-behavior:smooth; }

        .xp{
          background:var(--bg);
        
          padding:clamp(2rem,5vw,4rem);
         
          scroll-margin-top:var(--nav-h);
        }
        .top{display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap}
        .heading{color:var(--ink);font-size:clamp(1.8rem,4.8vw,2.4rem);font-weight:800;margin:0}

        .btn{
          color:#1b1b1b;background:#e8c8ff;border:1px solid #d8b5ff;
          padding:.55rem .9rem;border-radius:10px;text-decoration:none;font-weight:700;
        }
        .btn:hover{filter:brightness(1.05)}

        .list{list-style:none;margin:1.25rem 0 0;padding:0;display:grid;gap:1rem}
        .row{display:grid;grid-template-columns:150px 1fr;gap:1rem}
        .dates{color:var(--ink);opacity:.85;font-weight:600}

        .card{
          background:var(--card);
          border:1px solid var(--border);
          border-radius:16px;
          padding:1rem;
        }
        .title{margin:0;color:var(--ink);font-size:1.08rem;line-height:1.25}
        .company a{color:var(--ink);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.25)}
        .company a:hover{border-color:var(--ink)}

        .meta{margin:.35rem 0 .5rem;color:var(--muted)}
        .bullets{margin:.25rem 0 0 1.1rem;color:var(--muted);line-height:1.6}
        .bullets li{margin:.15rem 0}

        .chips{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.6rem}
        .chip{
          font-size:.78rem;padding:.28rem .55rem;border-radius:999px;
          background:var(--chip);color:var(--ink);border:1px solid var(--border);white-space:nowrap;
        }

        @media(max-width:700px){
          .row{grid-template-columns:1fr}
          .dates{order:-1}
        }
      `}</style>
    </section>
  );
}
