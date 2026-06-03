export default function Extras() {
  return (
    <section id="extras" className="py-20 border-t border-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
        Más allá del código
      </h2>
      
      <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-xl border border-gray-800 relative overflow-hidden">
        {/* Un pequeño elemento visual de fondo */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gray-800 rounded-full opacity-20 blur-2xl"></div>
        
        <h3 className="text-2xl font-bold text-gray-200 mb-4 relative z-10">
          Experiencia Audiovisual
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed relative z-10">
          La resolución de problemas técnicos es mi foco principal, pero también valoro la creatividad y la expresión. En 2019 fui el actor protagonista del cortometraje <strong>"Benjamín Chamorro"</strong>, dirigido por Adrián Sobarzo en Concepción. Esta experiencia en el mundo audiovisual me aportó habilidades de comunicación, adaptabilidad y trabajo en equipo desde una perspectiva completamente diferente al mundo de la ingeniería.
        </p>
      </div>
    </section>
  );
}