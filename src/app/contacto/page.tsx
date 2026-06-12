import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con Benjamín Rivera para proyectos, colaboraciones o consultas.",
};

export default function ContactoPage() {
  return (
    <main className="container" style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>

      {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
      <div style={{ marginBottom: "3.5rem", borderBottom: "var(--rule)", paddingBottom: "2rem" }}>
        <span className="t-section-label" style={{ display: "block", marginBottom: "1rem" }}>
          Hablemos
        </span>
        <h1
          className="t-page-title"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          Contacto
        </h1>
      </div>

      {/* ── TWO COLUMN ──────────────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "6rem",
          alignItems: "start",
          marginBottom: "4rem",
        }}
      >
        {/* Left — CTA text */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              marginBottom: "1.75rem",
            }}
          >
            ¿Trabajamos<br />
            <span style={{ WebkitTextStroke: "2px var(--burgundy)", color: "transparent" }}>
              juntos?
            </span>
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--smoke)",
              lineHeight: 1.7,
              maxWidth: "42ch",
            }}
          >
            Abierto a proyectos, colaboraciones o simplemente a hablar sobre
            tecnología, desarrollo web y hardware. No dudes en escribirme.
          </p>
        </div>

        {/* Right — availability info */}
        <div style={{ borderLeft: "var(--rule)", paddingLeft: "3rem", paddingTop: "0.25rem" }}>
          <p className="t-section-label" style={{ marginBottom: "1rem" }}>
            Disponibilidad actual
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", display: "inline-block" }} className="availability-dot" />
            <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>Disponible</span>
          </div>
          <p style={{ fontSize: "0.82rem", color: "var(--smoke)", lineHeight: 1.6 }}>
            Tiempo de respuesta habitual: 24–48 horas.
            <br />
            Prefiero contacto por correo electrónico.
          </p>
        </div>
      </div>

      {/* ── TYPOGRAPHIC LINK LIST ────────────────────────────────────── */}
      <div style={{ borderTop: "var(--rule)" }}>
        <a href="mailto:benjaminrivera.dev@gmail.com" className="contact-link">
          Contacto Correo
        </a>
        <a
          href="https://github.com/devbenjaminrivera"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          GitHub
        </a>
        <a
          href="/cv-benjamin-rivera.pdf"
          download="CV_Benjamin_Rivera.pdf"
          className="contact-link"
        >
          Descargar CV
        </a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          main > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          main > div > div[style*="border-left"] {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: var(--rule-sm) !important;
            padding-top: 1.5rem !important;
          }
        }
      `}</style>
    </main>
  );
}