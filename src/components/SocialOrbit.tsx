import type { CSSProperties, ReactNode } from 'react';
import './SocialOrbit.css';

type Item = {
  name: string;
  href: string;
  logo: ReactNode;
  ring: 'inner' | 'mid' | 'outer';
  angle: number;
};

const phoneIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="orbit-phone">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const img = (file: string, alt: string) => (
  <img src={`/socials/${file}`} alt={alt} className="orbit-logo" />
);

// Order per request: Reddit, X, Instagram, Contra, Upwork, Fiverr, LinkedIn, Gmail, Contact(phone)
const items: Item[] = [
  { name: 'Reddit', href: 'https://reddit.com', logo: img('reddit.ico', 'Reddit'), ring: 'inner', angle: 0 },
  { name: 'X', href: 'https://x.com', logo: img('x.ico', 'X'), ring: 'inner', angle: 120 },
  { name: 'Instagram', href: 'https://instagram.com', logo: img('instagram.ico', 'Instagram'), ring: 'inner', angle: 240 },
  { name: 'Contra', href: 'https://contra.com', logo: img('contra.ico', 'Contra'), ring: 'mid', angle: 60 },
  { name: 'Upwork', href: 'https://upwork.com', logo: img('upwork.ico', 'Upwork'), ring: 'mid', angle: 180 },
  { name: 'Fiverr', href: 'https://fiverr.com', logo: img('fiverr.ico', 'Fiverr'), ring: 'mid', angle: 300 },
  { name: 'LinkedIn', href: 'https://linkedin.com', logo: img('linkedin.ico', 'LinkedIn'), ring: 'outer', angle: 0 },
  { name: 'GitHub', href: 'https://github.com', logo: img('github.ico', 'GitHub'), ring: 'outer', angle: 90 },
  {
    name: 'Gmail',
    href: 'mailto:velcora.ai@gmail.com',
    logo: (
      <svg viewBox="0 0 24 24" fill="#EA4335" aria-hidden="true" className="orbit-logo">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
    ring: 'outer',
    angle: 180,
  },
  { name: 'Contact', href: 'tel:+919138278584', logo: phoneIcon, ring: 'outer', angle: 270 },
];

const rings: Item['ring'][] = ['inner', 'mid', 'outer'];

export default function SocialOrbit() {
  return (
    <div className="social-orbit" aria-label="Our Socials">
      <div className="orbit-center">
        <span>
          Our
          <br />
          Socials
        </span>
      </div>

      {rings.map((ring) => (
        <div key={ring} className={`orbit orbit-${ring}`}>
          {items
            .filter((s) => s.ring === ring)
            .map((s) => (
              <div
                key={s.name}
                className="orbit-node"
                style={{ '--a': `${s.angle}deg` } as CSSProperties}
              >
                <a
                  className="orbit-icon"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                >
                  <span className="orbit-logo-wrap">{s.logo}</span>
                </a>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
