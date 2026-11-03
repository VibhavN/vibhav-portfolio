
const skillGroups = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building responsive and interactive web applications.',
    skills: ['React', 'JavaScript', 'TypeScript', 'Angular', 'HTML5', 'CSS3'],
  },
  {
    number: '02',
    title: 'Styling & UI',
    description: 'Creating clean, consistent, and reusable interfaces.',
    skills: ['Tailwind CSS', 'Responsive Design', 'Reusable Components'],
  },
  {
    number: '03',
    title: 'Tools & Integration',
    description: 'Connecting interfaces with APIs and development tools.',
    skills: ['REST APIs', 'Git', 'Vite', 'Figma'],
  },
]

function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm font-medium tracking-widest text-lime-400 uppercase">
          02 / Skills
        </p>

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            My technical toolkit.
          </h2>

          <p className="max-w-sm text-sm leading-relaxed text-gray-400">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="rounded-2xl border border-white/10 bg-[#14171C] p-7 transition duration-300 hover:-translate-y-1 hover:border-lime-400/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-lime-400">
                  {group.number}
                </span>
                <span className="h-2 w-2 rounded-full bg-lime-400" />
              </div>

              <h3 className="mt-8 text-xl font-semibold text-white">
                {group.title}
              </h3>

              <p className="mt-3 min-h-12 text-sm leading-relaxed text-gray-400">
                {group.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-[#0B0D10] px-3 py-2 text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
