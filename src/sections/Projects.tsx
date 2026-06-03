import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Copa Cevi",
      description: "Plataforma integral para la gestión de torneos de fútbol para la residencia de varones de la UnACh. Permite la administración de brackets, equipos y resultados de manera dinámica.",
      tech: ["Next.js", "Supabase", "Tailwind CSS"],
      status: "Completado / Activo",
      githubUrl: "https://github.com/tu-usuario/mi-copa-facil",
      liveUrl: "https://mi-copa-facil.vercel.app" // Tu enlace real de Vercel
    },
    {
      title: "Sistema de Permisos para Residentes",
      description: "Aplicación web diseñada para digitalizar, automatizar y optimizar el flujo de solicitudes de permisos en el entorno universitario, mejorando la logística interna.",
      tech: ["Desarrollo Web", "Gestión de BD"],
      status: "Completado",
      githubUrl: "https://github.com/tu-usuario/sistema-permisos",
    },
    {
        title: "S.A.M. (Sistema Autónomo Móvil)",
        description: "Sistema avanzado en desarrollo diseñado para automatizar interacciones con aplicaciones móviles y controlar funciones del dispositivo de manera autónoma.",
        tech: ["Automatización", "Lógica de IA", "Control Móvil"],
        status: "En Desarrollo",
    }
  ];

  return (
    <section id="proyectos" className="py-20 border-t border-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            status={project.status}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
}