import { Mail } from 'lucide-react'

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B0D10]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          V<span className="text-lime-400">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
          <a href="#about" className="transition hover:text-lime-400">
            About
          </a>
          <a href="#skills" className="transition hover:text-lime-400">
            Skills
          </a>
          <a href="#experience" className="transition hover:text-lime-400">
            Experience
          </a>
          <a href="#projects" className="transition hover:text-lime-400">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-lime-400">
            Contact
          </a>
        </div>

        <a
          href="mailto:vibhavn.work@gmail.com"
          className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-lime-400 hover:text-lime-400"
        >
          <Mail size={16} />
          Let's talk
        </a>
      </div>
    </nav>
  )
}

export default Navbar