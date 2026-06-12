import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inicio",
};

const MARQUEE_ITEMS = [
  "React", "×", "Next.js", "×", "Laravel", "×", "Supabase", "×",
  "Tailwind CSS", "×", "PostgreSQL", "×", "Git", "×", "Linux", "×",
  "TypeScript", "×", "Python", "×", "Vercel", "×", "Hardware IT", "×",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "calc(100vh - var(--nav-h))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "4rem",
          borderBottom: "var(--rule)",
        }}
        className="container"
      >
        {/* Status */}
        <div
          className="animate-in"
          style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "2.5rem" }}
        >
          <span style={{ width: "0.4rem", height: "0.4rem", borderRadius: "50%", display: "inline-block" }} className="availability-dot" />
          <span className="t-section-label">Disponible para proyectos — Chillán, Chile</span>
        </div>

        {/* Name */}
        <h1
          className="t-display animate-in delay-1"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          Benjamín
          <br />
          <span style={{ WebkitTextStroke: "2px var(--burgundy)", color: "transparent" }}>
            Rivera
          </span>
        </h1>

        {/* Descriptor row */}
        <div
          className="animate-in delay-2"
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "2rem",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)", fontWeight: 500, letterSpacing: "-0.02em", maxWidth: "38ch", lineHeight: 1.3 }}>
            Desarrollador Full-Stack & Estudiante de Ingeniería Civil Informática
          </p>
          <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem" }}>
            <span className="t-section-label">Stack principal</span>
            <span className="t-mono" style={{ fontSize: "0.8rem", color: "var(--ink)", fontWeight: 600 }}>
              Next.js / Laravel / Supabase
            </span>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className="animate-in delay-3"
          style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}
        >
          <Link href="/proyectos" className="project-btn-solid" style={{ fontSize: "0.85rem" }}>
            Ver Proyectos
          </Link>
          <Link href="/sobre-mi" className="project-btn-ghost" style={{ fontSize: "0.85rem" }}>
            Sobre Mí
          </Link>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────────────── */}
      <div
        className="full-bleed animate-in delay-4"
        style={{
          borderBottom: "var(--rule)",
          padding: "0.7rem 0",
          overflow: "hidden",
        }}
      >
        <div className="marquee-track t-section-label" style={{ gap: "4rem" }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} style={{ whiteSpace: "nowrap", paddingRight: "2rem" }}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── BRIEF ABOUT ───────────────────────────────────────────────── */}
      <section
        className="container"
        style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "var(--rule)" }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <span className="t-section-label" style={{ display: "block", marginBottom: "1.25rem" }}>
              Quién soy
            </span>
            <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)", lineHeight: 1.7, letterSpacing: "-0.01em", color: "var(--smoke)" }}>
              Estudiante de Ingeniería Civil Informática en la UnACh. Construyo aplicaciones web
              rápidas y escalables, y me interesa la tecnología desde la interfaz hasta el hardware.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", borderLeft: "var(--rule)", paddingLeft: "3rem" }}>
            {[
              { label: "Formación", val: "Ing. Civil Informática · UnACh" },
              { label: "Especialidad", val: "Full-Stack Web" },
              { label: "Ubicación", val: "Chillán, Chile" },
              { label: "Estado", val: "Disponible" },
            ].map(({ label, val }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.75rem", borderBottom: "var(--rule-sm)" }}>
                <span className="t-section-label">{label}</span>
                <span style={{ fontSize: "0.82rem", fontWeight: 600 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            section .grid-2 { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }
        `}</style>
      </section>
    </>
  );
}