export default function AcademicsSection({ academics, experience }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
      <div className="md:bg-white rounded-2xl md:shadow-2xl md:border border-blue-100 p-8">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Education</h3>
        {academics.map((item, idx) => (
          <div key={idx} className="mt-3 pb-4 border-b border-blue-100 last:border-b-0 last:pb-0">
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <div className="font-semibold text-blue-800">{item.title}</div>
              <div className="text-sm text-blue-400 ">{item.period}</div>
            </div>
            <div className="flex flex-wrap gap-1 items-center justify-between">
              <div className="text-gray-600">{item.institution}</div>
              {item.cgpa && <div className="text-sm text-blue-700">{item.cgpa} CGPA</div>}
              {item.percentage && <div className="text-sm text-blue-700 ">{item.percentage}</div>}
            </div>
            <div className="text-gray-500 text-sm text-justify mt-2">{item.description}</div>
          </div>
        ))}
      </div>
      <div className="md:bg-white rounded-2xl md:shadow-2xl md:border border-blue-100 p-8">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Experience</h3>
        {experience.map((item, idx) => (
          <div key={idx} className="mb-6 pb-4 border-b border-blue-100 last:border-b-0 last:pb-0">
            <div className="flex flex-wrap gap-1 items-center justify-between">
              <div className="font-semibold text-blue-800">{item.title}</div>
              <div className="text-sm text-blue-400">{item.period}</div>
            </div>
            <div className="flex gap-1 flex-wrap items-center justify-between">
              <div className="text-gray-600">{item.company}</div>
              {item.certificate && <a href={item.certificate} className="text-blue-600 hover:underline text-sm " target="_blank" rel="noopener noreferrer">CERTIFICATE</a>}
            </div>
            <ul className="text-gray-500 text-sm text-justify mt-2 list-disc ml-4">
              {item.description.map((desc, descIdx) => <li key={`${idx}-${descIdx}`}>{desc}</li>)}
            </ul>
            <div className="flex gap-2 mt-3 flex-wrap">
              {
                item.technologies.map((tech, idx) => <div key={idx} className="text-blue-700 text-xs p-1 bg-[#1d4ed815] rounded-lg px-2">{tech}</div>)
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 