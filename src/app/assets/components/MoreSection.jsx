export default function moreSection({ more }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
      <div className="md:bg-white rounded-2xl md:shadow-2xl md:border border-blue-100 p-8 pb-0 md:p-8">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Professional more</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {more.professional.map((goal, idx) => (
            <li key={idx}>{goal}</li>
          ))}
        </ul>
      </div>
      <div className="md:bg-white rounded-2xl md:shadow-2xl md:border border-blue-100 p-8">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Hobbies</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {more.hobbies.map((hobby, idx) => (
            <li key={idx}>{hobby}</li>
          ))}
        </ul>
      </div>
    </section>
  );
} 