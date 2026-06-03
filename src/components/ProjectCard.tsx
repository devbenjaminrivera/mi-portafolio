import Badge from "./Badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  status: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({ title, description, tech, status, githubUrl, liveUrl }: ProjectCardProps) {
  const isActive = status.toLowerCase().includes("activo") || status.toLowerCase().includes("completado");

  return (
    <div className="group bg-[#1a1a1a] p-6 md:p-8 rounded-xl border border-gray-800 hover:border-gray-500 transition-all duration-300 flex flex-col h-full relative">
      
      {/* Contenedor de iconos en la esquina superior derecha */}
      <div className="absolute top-6 right-6 flex gap-3 text-gray-400">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Ver código en GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Ver proyecto en vivo">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 pr-16">
        <div>
          <h3 className="text-2xl font-bold text-gray-100 group-hover:text-white transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
              {status}
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-400 text-base leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((item, i) => (
          <Badge key={i} variant="outline">{item}</Badge>
        ))}
      </div>
    </div>
  );
}