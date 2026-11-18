
import { ArrowUpRight } from 'lucide-react'


const projects = [
  {
    number: '01',
    title: 'CareerSwitch',
    category: 'Job Search Management Platform',
    description:
      'A personal job search management platform that helps users organise job applications, track application progress, and manage their job search through a centralised dashboard.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'TanStack Query',
    ],
    status: 'In Development',
    link: '#',
  },
  {
    number: '02',
    title: 'Developer Portfolio',
    category: 'Personal Project',
    description:
      'A minimal, responsive portfolio showcasing my professional experience, technical skills, and projects.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'In Development',
    link: '#',
  },
]


function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm font-medium tracking-widest text-lime-400 uppercase">
          04 / Projects
        </p>

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-white md:text-5xl">
            Selected work & 
            <span className="text-gray-500"> projects.</span>
          </h2>

          <p className="max-w-sm text-sm leading-relaxed text-gray-400">
            A collection of projects exploring frontend development,
            product thinking, and practical problem solving.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group rounded-2xl border border-white/10 bg-[#14171C] p-7 transition hover:border-lime-400/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {project.number}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                  {project.status}
                </span>
              </div>

              <p className="mt-10 text-sm text-lime-400">
                {project.category}
              </p>

              <div className="mt-2 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <a
                  href={project.link}
                  aria-label={`View ${project.title}`}
                  className="text-gray-400 transition group-hover:text-lime-400"
                >
                  <ArrowUpRight size={22} />
                </a>
              </div>

              <p className="mt-4 min-h-20 leading-relaxed text-gray-400">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-[#0B0D10] px-3 py-1.5 text-xs text-gray-400"
                  >
                    {technology}
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

export default Projects
