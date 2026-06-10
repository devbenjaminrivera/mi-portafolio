import Image from "next/image";

interface ProjectRowProps {
  title: string;
  description: string;
  tech: string[];
  status: string;
  /** "active" | "complete" | "wip" */
  statusType?: "active" | "complete" | "wip";
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  imageBg?: string;
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
}: ProjectRowProps) {
  return (
    <article className="project-row" aria-label={`Proyecto: ${title}`}>

      {/* Hover image reveal */}
      <div className="project-image-reveal" aria-hidden="true">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          
          <Image
            src={imageUrl}
            alt={`Vista previa del proyecto ${title}`}
            fill
            style={{ objectFit: "cover" }}
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
        {/* Status */}
        <p
          className="project-status t-section-label"
          style={{ marginBottom: "0.5rem", transition: "color 0.2s" }}
        >
          {STATUS_SYMBOLS[statusType]} {STATUS_LABELS[statusType]}
        </p>

        {/* Title */}
        <h3
          className="project-title"
          style={{
            fontFamily: "var(--font-display), var(--font-inter), sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            transition: "color 0.2s",
            marginBottom: "0.75rem",
          }}
        >
          {title}
        </h3>

        {/* Description */}
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

        {/* Tech */}
        <p
          className="project-tech t-section-label"
          style={{ transition: "color 0.2s" }}
        >
          {tech.join(" · ")}
        </p>
      </div>

      {/* Right — action buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
          alignSelf: "center",
          flexShrink: 0,
        }}
      >
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn-solid"
            aria-label={`Ver ${title} en vivo`}
          >
            {/* Arrow icon via character */}
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
            <span aria-hidden="true">{/* GitHub symbol */}⌥</span>
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
