export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-start pt-20">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white">
        Hola, soy <span className="text-gray-400">Benjamín Rivera.</span>
      </h1>
      
      <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
        Desarrollador Full-Stack & Estudiante de Ingeniería Informática.
      </h2>
      
      <p className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed">
        Construyo aplicaciones web rápidas, escalables y orientadas a solucionar problemas reales. Especializado en ecosistemas modernos como Next.js, React y Laravel.
      </p>
      
      <div className="flex gap-4">
        <a 
          href="#proyectos" 
          className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
        >
          Ver Proyectos
        </a>
        <a 
          href="/cv-benjamin-rivera.pdf" 
          download="CV_Benjamin_Rivera.pdf"
          className="border border-gray-600 text-white px-6 py-3 rounded-md font-semibold hover:border-gray-400 transition-colors"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
}