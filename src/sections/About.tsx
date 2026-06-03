export default function About() {
  return (
    <section id="sobre-mi" className="py-20 border-t border-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
        Sobre Mí
      </h2>
      
      <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-xl border border-gray-800 shadow-lg">
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Soy estudiante de Ingeniería Informática en la Universidad Adventista de Chile (UnACh), con base en el sector de Chillán. Me apasiona la tecnología en todas sus capas: desde la creación de interfaces fluidas y bases de datos robustas, hasta el diagnóstico y reparación de hardware a bajo nivel.
        </p>
        
        <p className="text-gray-300 text-lg leading-relaxed">
          Disfruto construyendo herramientas que optimizan procesos reales, como la gestión logística de comunidades universitarias. Cuando no estoy programando (o estudiando para ramos como Ondas y Ópticas), me dedico a explorar la generación de imágenes con Inteligencia Artificial y a trastear con componentes de hardware.
        </p>
      </div>
    </section>
  );
}