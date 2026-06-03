export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white tracking-tighter">
          BR<span className="text-gray-500">.</span>
        </a>
        
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <li><a href="#sobre-mi" className="hover:text-white transition-colors">Sobre Mí</a></li>
          <li><a href="#habilidades" className="hover:text-white transition-colors">Habilidades</a></li>
          <li><a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a></li>
          <li><a href="#extras" className="hover:text-white transition-colors">Extras</a></li>
        </ul>
        
        <a 
          href="#contacto" 
          className="text-sm font-semibold border border-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}