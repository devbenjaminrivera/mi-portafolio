import type { Metadata } from "next";
import ProjectRow from "@/components/ProjectRow";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos destacados de Benjamín Rivera — Copa Cevi, Sistema de Permisos y S.A.M.",
};

const PROJECTS = [
  {
    title: "Copa Cevi",
    description:
      "Plataforma integral para la gestión de torneos de fútbol para la residencia de varones de la UnACh. Permite administrar brackets, equipos y resultados de forma dinámica.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    statusType: "active" as const,
    githubUrl: "https://github.com/tu-usuario/mi-copa-facil",
    liveUrl: "https://mi-copa-facil.vercel.app",
    imageUrl: "/images/copacevi.png",
    imageStyle: "logo" as const,
  },
  {
    title: "Calculadora de Promedios",
    description:
      "App web para estudiantes universitarios que automatiza el cálculo de promedios ponderados. Permite ingresar notas y su porcentaje correspondiente para obtener el promedio final de forma rápida y precisa.",
    tech: ["Desarrollo Web", "HTML/CSS", "JavaScript"],
    statusType: "complete" as const,
    liveUrl: "https://calcularpromedio.vercel.app",
    imageUrl: "/images/calc.png",
    imageStyle: "logo" as const,
  },
  {
    title: "S.A.M.",
    description:
      "Sistema Autónomo Móvil — automatiza interacciones con aplicaciones móviles y controla funciones del dispositivo de manera autónoma mediante lógica de IA.",
    tech: ["Automatización", "Lógica de IA", "Control Móvil"],
    statusType: "wip" as const,
    imageUrl: "/images/int.png",
    imageStyle: "logo" as const
  },
];

export default function ProyectosPage() {
  return (
    <main className="container" style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>

      {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
      <div style={{ marginBottom: "3.5rem", borderBottom: "var(--rule)", paddingBottom: "2rem" }}>
        <span className="t-section-label" style={{ display: "block", marginBottom: "1rem" }}>
          Trabajo seleccionado
        </span>
        <h1
          className="t-page-title"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          Proyectos
        </h1>
      </div>

      {/* ── PROJECT LIST ────────────────────────────────────────────── */}
      <div style={{ borderTop: "var(--rule)" }} role="list" aria-label="Lista de proyectos">
        {PROJECTS.map((project) => (
          <div key={project.title} role="listitem">
            <ProjectRow {...project} />
          </div>
        ))}
      </div>
    </main>
  );
}