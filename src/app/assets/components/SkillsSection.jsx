export default function SkillsSection({ skills }) {
  return (
    <section className="bg-white rounded-2xl shadow-2xl border border-blue-100 p-8">
      <h3 className="text-xl font-bold text-blue-900 mb-6">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h4 className="text-blue-700 font-semibold mb-3 capitalize">{category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, idx) => (
                <span key={idx} className="bg-blue-50 rounded-lg px-3 py-1 text-blue-900 font-medium border border-blue-100 shadow-sm text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 