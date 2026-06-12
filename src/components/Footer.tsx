import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer-inner">
        {/* Left — name + tagline */}
        <div>
          <span
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 900,
              fontSize: "0.95rem",
              letterSpacing: "-0.03em",
            }}
          >
            Benjamín Rivera Araneda
          </span>
          <span className="t-section-label" style={{ display: "block", marginTop: "0.2rem" }}>
            Desarrollador Full-Stack · Chillán, Chile
          </span>
        </div>

        {/* Center — links (hover handled via CSS class, no JS handlers) */}
        <nav aria-label="Links de footer">
          <ul
            style={{
              display: "flex",
              gap: "1.75rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
              flexWrap: "wrap",
            }}
          >
            <li>
              <a
                href="https://github.com/devbenjaminrivera"
                target="_blank"
                rel="noopener noreferrer"
                className="t-section-label footer-link"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:benjaminrivera.dev@gmail.com"
                className="t-section-label footer-link"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="/cv-benjamin-rivera.pdf"
                download="CV_Benjamin_Rivera.pdf"
                className="t-section-label footer-link"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>

        {/* Right — copyright */}
        <span className="t-section-label">© {year}</span>
      </div>
    </footer>
  );
}
