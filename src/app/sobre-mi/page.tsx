import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description: "Benjamín Rivera — Estudiante de Ingeniería Civil Informática y desarrollador Full-Stack.",
};

const STACK = [
  { category: "Frontend",       items: "React · Next.js · Tailwind CSS · TypeScript · HTML/CSS" },
  { category: "Backend & DB",   items: "Laravel · PHP · Supabase · MySQL · PostgreSQL" },
  { category: "Lenguajes",      items: "JavaScript · TypeScript · Python · PHP" },
  { category: "Herramientas",   items: "Git · Vercel · Supabase · VS Code" },
  { category: "Hardware & IT",  items: "Diagnóstico PC · Reparación · Soporte técnico" },
  { category: "IA & Misc",      items: "Integración de IA · Automatización" },
];

export default function SobreMiPage() {
  return (
    <main className="container" style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>

      {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
      <div style={{ marginBottom: "3.5rem", borderBottom: "var(--rule)", paddingBottom: "2rem" }}>
        <span className="t-section-label" style={{ display: "block", marginBottom: "1rem" }}>
          Perfil profesional
        </span>
        <h1 className="t-page-title" style={{ fontFamily: "var(--font-display), sans-serif" }}>
          Sobre Mí
        </h1>
      </div>

      {/* ── BIO SECTION ─────────────────────────────────────────────── */}
      <section className="grid-bio">

        {/* Left — identity block */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
            }}
          >
            Ing.<br />Info.
          </p>
          <p className="t-section-label" style={{ marginTop: "1.25rem" }}>
            UnACh — Chillán, Chile
          </p>

          <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              { label: "Foco",    val: "Full-Stack Web / Software" },
              { label: "Entorno", val: "Windows / Linux / VS Code" },
              { label: "Estado",  val: "Disponible" },
            ].map(({ label, val }) => (
              <div
                key={label}
                style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "var(--rule-sm)" }}
              >
                <span className="t-section-label">{label}</span>
                <span style={{ fontSize: "0.8rem", fontWeight: 600 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — bio text */}
        <div>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, letterSpacing: "-0.01em", color: "var(--smoke)", marginBottom: "1.5rem" }}>
            Soy estudiante de Ingeniería Civil Informática en la Universidad Adventista de Chile
            (UnACh). Me apasiona la tecnología en todas sus capas: desde crear interfaces fluidas
            y bases de datos robustas, hasta diagnosticar y reparar hardware a bajo nivel.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, letterSpacing: "-0.01em", color: "var(--smoke)" }}>
            Disfruto construyendo herramientas que optimizan procesos reales. Fuera del código
            exploro nuevas habilidades y experimento con componentes de hardware.
            Llevo casi 4 años programando, con un enfoque actual en desarrollo web full-stack. Mi objetivo es
            crecer profesionalmente, aportar a proyectos desafiantes y seguir aprendiendo en el camino.
          </p>
        </div>
      </section>

      {/* ── STACK TÉCNICO ───────────────────────────────────────────── */}
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            Stack técnico
          </h2>
          <span className="t-section-label">
            {STACK.reduce((acc, s) => acc + s.items.split("·").length, 0)} tecnologías
          </span>
        </div>

        {/* Table header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "11rem 1fr",
            gap: "2rem",
            paddingBottom: "0.6rem",
            borderBottom: "var(--rule)",
          }}
        >
          <span className="t-section-label">Área</span>
          <span className="t-section-label">Tecnologías</span>
        </div>

        <div role="table" aria-label="Stack técnico">
          {STACK.map(({ category, items }) => (
            <div key={category} className="skill-row" role="row">
              <span className="skill-category" role="cell">{category}</span>
              <span className="skill-items" role="cell">{items}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}