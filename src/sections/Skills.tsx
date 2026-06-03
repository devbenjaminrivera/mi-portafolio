import Badge from "../components/Badge";

export default function Skills() {
  const skillCategories = [
    { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
    { title: "Backend & DB", skills: ["Laravel", "C++", "Supabase", "SQL"] },
    { title: "Herramientas", skills: ["Git", "Vercel", "Linux", "VS Code"] },
    { title: "Hardware & IT", skills: ["Diagnóstico PC", "Reparación", "Soporte", "IA Prompting"] },
  ];

  return (
    <section id="habilidades" className="py-20 border-t border-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <Badge key={i} variant="solid">{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}