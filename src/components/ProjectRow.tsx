import Image from "next/image";

interface ProjectRowProps {
  title: string;
  description: string;
  tech: string[];
  status?: string;
  statusType?: "active" | "complete" | "wip";
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  imageBg?: string;
  imageStyle?: "logo" | "cover";
}

const STATUS_LABELS: Record<string, string> = {
  active:   "Activo",
  complete: "Completado",
  wip:      "En Desarrollo",
};

const STATUS_SYMBOLS: Record<string, string> = {
  active:   "●",
  complete: "○",
  wip:      "◐",
};

export default function ProjectRow({
  title,
  description,
  tech,
  statusType = "complete",
  githubUrl,
  liveUrl,
  imageUrl,
  imageBg = "#1c1c1c",
  imageStyle = "cover",
}: ProjectRowProps) {
  return (
    <article className="project-row" aria-label={`Proyecto: ${title}`}>

      {/* Hover image reveal — hidden on mobile via CSS */}
      <div
        className="project-image-reveal"
        aria-hidden="true"
        style={imageStyle === "logo" ? { background: "transparent" } : undefined}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Vista previa del proyecto ${title}`}
            fill
            style={{
              objectFit: imageStyle === "logo" ? "contain" : "cover",
              padding: imageStyle === "logo" ? "0.5rem" : "0",
            }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: imageBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "2.5rem",
                fontWeight: 900,
                color: "rgba(255,255,255,0.07)",
                letterSpacing: "-0.04em",
              }}
            >
              {title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Left — info */}
      <div style={{ minWidth: 0 }}>
        <p className="project-status t-section-label" style={{ marginBottom: "0.5rem", transition: "color 0.2s" }}>
          {STATUS_SYMBOLS[statusType]} {STATUS_LABELS[statusType]}
        </p>

        <h3
          className="project-title"
          style={{
            fontFamily: "var(--font-display), var(--font-inter), sans-serif",
            fontSize: "clamp(1.4rem, 3vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            transition: "color 0.2s",
            marginBottom: "0.75rem",
          }}
        >
          {title}
        </h3>

        <p
          className="project-desc"
          style={{
            fontSize: "0.88rem",
            lineHeight: 1.6,
            color: "var(--smoke)",
            maxWidth: "54ch",
            marginBottom: "0.75rem",
            transition: "color 0.2s",
          }}
        >
          {description}
        </p>

        <p className="project-tech t-section-label" style={{ transition: "color 0.2s" }}>
          {tech.join(" · ")}
        </p>
      </div>

      {/* Right — action buttons */}
      <div className="project-actions">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn-solid"
            aria-label={`Ver ${title} en vivo`}
          >
            <span aria-hidden="true">↗</span>
            Página en vivo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn-ghost"
            aria-label={`Ver código de ${title} en GitHub`}
          >
            <span aria-hidden="true">⌥</span>
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}