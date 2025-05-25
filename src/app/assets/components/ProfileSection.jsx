import Image from 'next/image';

export default function ProfileSection({ profile }) {
  return (
    <section className="bg-white rounded-2xl shadow-2xl border border-blue-100 p-6 md:p-10 flex-col flex gap-8">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
          <Image src="/profile.jpg" alt={profile.name} fill className="object-cover" priority />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-900 drop-shadow">{profile.name}</h2>
          <p className="text-lg text-blue-700 mb-1 font-semibold">{profile.title}</p>
          <div className="flex flex-wrap gap-2 md:gap-6 mt-4 md:mt-2 items-center justify-center">
            <a href={`mailto:${profile.contact.email}`} className="text-blue-700 hover:underline font-medium">{profile.contact.email}</a>
            <div className='flex gap-6'>
              <a href={profile.contact.github} className="text-blue-700 hover:underline font-medium">GitHub</a>
              <a href={profile.contact.linkedin} className="text-blue-700 hover:underline font-medium">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-gray-600 whitespace-pre-line indent-8 text-justify">{profile.bio}</p>
      </div>
    </section>
  );
} 