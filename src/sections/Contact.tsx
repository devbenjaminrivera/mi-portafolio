export default function Contact() {
  return (
    <section id="contacto" className="py-20 border-t border-gray-800 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        ¿Trabajamos juntos?
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mb-10">
        Actualmente estoy abierto a nuevas oportunidades, proyectos colaborativos o simplemente a tener una buena charla sobre tecnología, desarrollo o hardware. ¡Ponte en contacto!
      </p>
      
      <div className="flex gap-4 mb-20">
        <a 
          href="mailto:tu-correo@email.com" 
          className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
        >
          Enviar Correo
        </a>
        <a 
          href="https://github.com/tu-usuario" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-gray-600 text-white px-6 py-3 rounded-md font-semibold hover:border-gray-400 transition-colors"
        >
          Mi GitHub
        </a>
      </div>

      <footer className="text-gray-600 text-sm w-full pt-8 border-t border-gray-900">
        <p>© {new Date().getFullYear()} Benjamín Rivera. Construido con Next.js y Tailwind CSS.</p>
      </footer>
    </section>
  );
}