export default function CertificationsSection({ certifications }) {
  return (
    <section className="bg-white rounded-2xl shadow-2xl border border-blue-100 p-8">
      <h3 className="text-xl font-bold text-blue-900 mb-6">Certifications</h3>
      <div className="grid gap-6">
        {certifications.map((cert, idx) => (
          <div key={idx} className="p-4 rounded-xl border border-blue-100 shadow bg-blue-50">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-blue-800 text-lg">{cert.title}</span>
              <span className="text-sm text-blue-500">{cert.period}</span>
            </div>
            <div className="text-gray-600">{cert.institution}</div>
            <div className="text-gray-700 mb-2 mt-2 text-justify">{cert.description}</div>
            {cert.certificate && <a href={cert.certificate} className="text-blue-600 underline font-medium" target="_blank" rel="noopener noreferrer">Certificate</a>}
          </div>
        ))}
      </div>
    </section>
  );
} 