
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Availability indicator */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-lime-400" />
          <span className="text-xs font-medium tracking-wide text-lime-400">
            OPEN TO WORK
          </span>
        </div>

        <p className="mb-6 flex items-center gap-3 text-sm font-medium tracking-widest text-lime-400 uppercase">
          <span className="h-px w-8 bg-lime-400" />
          Frontend Developer
        </p>

        <h1 className="max-w-4xl text-5xl leading-tight font-bold tracking-tight text-white md:text-7xl">
          Building digital
          <span className="text-gray-500"> experiences </span>
          that make an impact.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
          I'm Vibhav, a frontend developer focused on building responsive,
          intuitive, and scalable web applications using React, TypeScript,
          and modern frontend technologies.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">

          <a
            href="/resume.pdf"
            download="Vibhav_Nesarikar_FrontEndDev_Resume.pdf"
            className="flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-lime-400 hover:text-lime-400"
          >
            View my work
            <ArrowUpRight size={18} />
          </a>

        </div>

        <div className="mt-16 flex items-center gap-6 text-sm text-gray-400">
          <a
            href="YOUR_GITHUB_URL"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-lime-400"
          >
            GitHub ↗
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-lime-400"
          >
            LinkedIn ↗
          </a>
        </div>

        <a
          href="#about"
          className="mt-20 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-lime-400"
        >
          Scroll to explore
          <ArrowDown size={16} />
        </a>

      </div>
    </section>
  )
}

export default Hero
