'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react'; // 1. Import useState and useMemo

type AboutMeProps = {
  name: string;
  role?: string;
  mainPhoto: string;
  secondaryPhoto: string;
  skills?: string[];
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
  // Removed 'skills' as a primary prop for simplicity since we are focusing on 'skillsByCategory'
  skillsByCategory,
  bio,
}: AboutMeProps) {
  const defaultBio = `
I enjoy exploring challenges and transforming them into opportunities for improvement. Whether designing interfaces or coding systems, I focus on creating solutions that are user-friendly, scalable, and meaningful for real-world needs.
  `.trim();

  // 2. Get the category names from the skillsByCategory object
  const categories = useMemo(
    () => (skillsByCategory ? Object.keys(skillsByCategory) : []),
    [skillsByCategory],
  );

  // 3. State for the active tab (category)
  // Default to the first category if available
  const [activeCategory, setActiveCategory] = useState(
    categories[0] || '',
  );

  // 4. Determine the skills for the active category
  const activeSkills =
    skillsByCategory && activeCategory
      ? skillsByCategory[activeCategory]
      : [];

  // A basic check to ensure we only render the new tabbed structure if skillsByCategory is provided
  if (!skillsByCategory || categories.length === 0) {
    // Fallback or simpler rendering if no categorized skills are provided
    return (
      <section className="about" id={id} aria-labelledby="about-heading">
        {/* ... (rest of the component structure, excluding the skills section) */}
        {/* You'd need to handle the simple 'skills' array rendering here if you kept it */}
        <div className="textCol">
          <h2 id="about-heading" className="heading">About Me</h2>
          <p className="lead">
            Hello! I’m <strong>{name}</strong>, focused on <strong>{role}</strong>.
          </p>
          <p className="body">{bio ?? defaultBio}</p>
          {/* Simple skills list if needed */}
        </div>
        {/* ... (mediaCol and styles remain the same) */}
      </section>
    );
  }

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

          {/* Skills - Now a Tabbed Interface */}
          <div className="skillsWrap" aria-label="Skills by Category">
            {/* Tab Header: Category Buttons */}
            <div className="tabHeader" role="tablist">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`tabButton ${
                    category === activeCategory ? 'active' : ''
                  }`}
                  onClick={() => setActiveCategory(category)}
                  role="tab"
                  aria-selected={category === activeCategory}
                  aria-controls={`panel-${category.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Tab Panel: Skills Chips for the Active Category */}
            <div
              className="tabPanel"
              role="tabpanel"
              id={`panel-${activeCategory.toLowerCase().replace(/\s/g, '-')}`}
              aria-labelledby={`tab-${activeCategory.toLowerCase().replace(/\s/g, '-')}`}
            >
              <h3 className="skillsTitle">{activeCategory}</h3>
              <div className="chips">
                {activeSkills.map((skill) => (
                  <span key={skill} className="skillChip">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="mediaCol">
          {/* ... (Image components remain the same) */}
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

      {/* 5. Updated Styles */}
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
          --button-bg-color: #E0BBE4; /* Added for the button background */
          --button-text-color: #333333; /* A dark color for contrast */
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

        /* --- Skills Styling (New/Modified) --- */

        .skillsWrap {
          margin-top: 1rem;
          /* Removed grid to accommodate the new tab structure */
        }

        .tabHeader {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem; /* Gap between tabs */
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15); /* Separator */
          padding-bottom: 0.5rem;
        }

        .tabButton {
          background: transparent;
          border: none;
          color: var(--muted);
          font-size: 1rem;
          font-weight: 600;
          padding: 0.5rem 0.75rem;
          cursor: pointer;
          position: relative;
          transition: color 0.2s;
        }

        .tabButton:hover {
          color: var(--ink);
        }

        .tabButton.active {
          color: var(--ink);
        }

        .tabButton.active::after {
          content: '';
          position: absolute;
          bottom: -0.5rem; /* Align with the bottom border */
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--accent);
          border-radius: 2px;
        }
        
        .tabPanel {
            /* Now holds the content for the active tab */
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 14px;
            padding: 1rem;
        }

        .skillsTitle {
          color: var(--ink);
          font-weight: 700;
          font-size: 1rem;
          margin: 0 0 0.6rem;
          letter-spacing: -0.01em;
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
          border: 1px solid rgba(255, 255, 255, 0.12);
          white-space: nowrap;
          backdrop-filter: blur(2px);
        }

        /* --- Media and Decorational Styling (Original) --- */

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