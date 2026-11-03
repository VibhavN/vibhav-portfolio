
const experiences = [
  {
    role: 'Consultant – Software Developer',
    company: 'Deloitte',
    period: 'Dec 2024 – Jun 2026',
    description:
      'Contributed to frontend development for a government technology platform, building UI features, API-driven workflows, and reusable certificate-generation functionality.',
    technologies: ['Angular', 'TypeScript', 'REST APIs'],
  },
  {
    role: 'Software Developer',
    company: 'Merren.io',
    period: 'Mar 2022 – Mar 2024',
    description:
      'Worked on an AI-powered customer research platform, developing dashboards, data visualizations, reusable UI components, and third-party integrations.',
    technologies: ['Angular', 'TypeScript', 'REST APIs'],
  },
]

function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm font-medium tracking-widest text-lime-400 uppercase">
          03 / Experience
        </p>

        <h2 className="max-w-3xl text-3xl leading-tight font-semibold tracking-tight text-white md:text-5xl">
          Where I've made
          <span className="text-gray-500"> an impact.</span>
        </h2>

        <div className="mt-14">
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="grid grid-cols-1 gap-6 border-t border-white/10 py-10 md:grid-cols-[200px_1fr]"
            >
              <div>
                <p className="text-sm text-gray-500">
                  {experience.period}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  {experience.role}
                </h3>

                <p className="mt-1 text-lime-400">
                  {experience.company}
                </p>

                <p className="mt-5 max-w-2xl leading-relaxed text-gray-400">
                  {experience.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#14171C] px-3 py-1.5 text-xs text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
