export default function ProjectsSection({ projects }) {
  return (
    <section className="bg-white rounded-2xl shadow-2xl border border-blue-100 p-8">
      <h3 className="text-xl font-bold text-blue-900 mb-6">Projects</h3>
      <div className="grid gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="p-4 rounded-xl border border-blue-100 shadow bg-blue-50">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-blue-800 text-lg">{project.title}</span>
              <span className="text-sm text-blue-500">{project.period}</span>
            </div>
            <div className="text-gray-700 mb-2 text-justify">{project.description}</div>
            <div className="flex gap-2 my-3 flex-wrap">
              {
                project.technologies.map((tech, techIdx) => <div key={`${idx}-${techIdx}`} className="text-blue-700 text-xs p-1 bg-[#1d4ed815] rounded-lg px-2">{tech}</div>)
              }
            </div>
            <div className="flex gap-4 mx-1 my-2 w-full">
              {project.links?.live && <a href={project.links.live} className="text-blue-600 underline font-medium" target="_blank" rel="noopener noreferrer">Live</a>}
              {project.links?.code && <a href={project.links.code} className="text-blue-600 underline font-medium" target="_blank" rel="noopener noreferrer">Code</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 