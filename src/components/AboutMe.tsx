'use client';

import Image from 'next/image';

type AboutMeProps = {
  name: string;
  role?: string;
  mainPhoto: string;
  secondaryPhoto: string;
  /** keep flat list for backward-compat, but not used when skillsByCategory is provided */
  skills?: string[];
  /** NEW: grouped skills */
  skillsByCategory?: Record<string, string[]>;
  bio?: string;
  id?: string;
};

export default function AboutMe({
  id = 'about',
  name,
  role = 'SEO & Web Development',
  mainPhoto,
  secondaryPhoto,
  skills = [],
  skillsByCategory,
  bio,
}: AboutMeProps) {
  const defaultBio = `
I’m a research-driven maker who reads a lot, experiments with new ideas,
and blends SEO strategy with clean, accessible web development. I like
turning questions into small tests, learning from the data, and shipping
improvements that make sites faster, more findable, and easier to use.
  `.trim();

  return (
    <section className="about" id={id} aria-labelledby="about-heading">
      <div className="dec dec1" aria-hidden />
      <div className="dec dec2" aria-hidden />

      <div className="grid">
        {/* Text */}
        <div className="textCol">
          <h2 id="about-heading" className="heading">About Me</h2>

          <p className="lead">
            Hello! I’m <strong>{name}</strong>, focused on <strong>{role}</strong>.
          </p>

          <p className="body">{bio ?? defaultBio}</p>

          {/* Skills */}
          <div className="skillsWrap" aria-label="Skills">
            {skillsByCategory ? (
              Object.entries(skillsByCategory).map(([category, items]) => (
                <div className="skillsGroup" key={category}>
                  <h3 className="skillsTitle">
                    {category} <span>Skills</span>
                  </h3>
                  <div className="chips">
                    {items.map((skill) => (
                      <span key={skill} className="skillChip">{skill}</span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              skills.map((s) => <span key={s} className="skillChip">{s}</span>)
            )}
          </div>
        </div>

        {/* Images */}
        <div className="mediaCol">
          <div className="circleLarge">
            <Image
              src={mainPhoto}
              alt="Working at the desk on design and development"
              fill
              priority
              sizes="(max-width: 900px) 80vw, 40vw"
            />
          </div>

          <div className="circleSmall">
            <Image
              src={secondaryPhoto}
              alt="Reading and researching—books and laptop"
              fill
              sizes="(max-width: 900px) 60vw, 20vw"
            />
          </div>

          <span className="dot dotA" aria-hidden />
          <span className="dot dotB" aria-hidden />
        </div>
      </div>

      <style jsx>{`
  :global(:root) {
    --bg: #1f2330;
    --ink: #ffffff;
    --muted: #c9ced8;
    --accent: #7a5a45;
    --chip-bg: rgba(255,255,255,0.08);
    --chip-ink: #ffffff;
    --card-bg: rgba(255,255,255,0.04);
    --card-border: rgba(255,255,255,0.10);
  }

  .about {
    position: relative;
    background: var(--bg);
    padding: clamp(2rem, 5vw, 4rem);
    overflow: hidden;
  }

  .grid {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: clamp(1.5rem, 4vw, 3rem);
    align-items: center;
  }

  .heading {
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 1.1;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin: 0 0 0.75rem;
  }

  .lead {
    color: var(--ink);
    font-size: clamp(1rem, 1.4vw, 1.1rem);
    margin: 0 0 0.6rem;
  }

  .body {
    color: var(--muted);
    max-width: 55ch;
    line-height: 1.65;
    margin: 0 0 1.1rem;
  }

  /* ===== grouped skills ===== */
  .skillsWrap {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 0.9rem;
    margin-top: 0.6rem;
  }

  .skillsGroup {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 14px;
    padding: 0.8rem;
  }

  .skillsTitle {
    color: var(--ink);
    font-weight: 700;
    font-size: 1rem;
    margin: 0 0 0.5rem;
    letter-spacing: -0.01em;
  }
  .skillsTitle span {
    color: var(--muted);
    font-weight: 600;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem 0.5rem;
  }

  .skillChip {
    display: inline-block;
    padding: 0.42rem 0.65rem;
    border-radius: 999px;
    background: var(--chip-bg);
    color: var(--chip-ink);
    font-size: 0.85rem;
    border: 1px solid rgba(255,255,255,0.12);
    white-space: nowrap;
    backdrop-filter: blur(2px);
  }

  /* Media (two circles with rings) */
  .mediaCol { position: relative; min-height: 420px; }
  .circleLarge, .circleSmall {
    position: absolute; border-radius: 50%; overflow: hidden; isolation: isolate;
  }
  .circleLarge {
    width: clamp(240px, 36vw, 380px);
    height: clamp(240px, 36vw, 380px);
    right: 0; top: 0; border: 14px solid var(--accent);
  }
  .circleSmall {
    width: clamp(160px, 28vw, 230px);
    height: clamp(160px, 28vw, 230px);
    left: 0; bottom: 0; border: 12px solid var(--accent);
  }
  .circleLarge :global(img), .circleSmall :global(img) { object-fit: cover; }

  .dot { position: absolute; width: 44px; height: 44px; background: rgba(199,178,166,0.4); border-radius: 12px; opacity: 0.95; }
  .dotA { left: -14px; top: -14px; }
  .dotB { right: -14px; bottom: -14px; }

  .dec { position: absolute; width: 180px; height: 180px; background: radial-gradient(ellipse at center, rgba(199,178,166,0.22), transparent 66%); border-radius: 50%; z-index: 0; }
  .dec1 { left: -40px; top: 30%; }
  .dec2 { right: -30px; bottom: 10%; }

  @media (max-width: 900px) {
    .grid { grid-template-columns: 1fr; }
    .mediaCol { min-height: 360px; }
    .circleLarge { right: 10%; top: 0; }
    .circleSmall { left: 6%; bottom: 0; }
  }
`}</style>
    </section>
  );
}
