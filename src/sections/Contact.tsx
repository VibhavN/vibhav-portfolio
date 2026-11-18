
import { ArrowUpRight, Mail } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-20">

        <p className="mb-5 text-sm font-medium tracking-widest text-lime-400 uppercase">
          05 / Contact
        </p>

        <h2 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-white md:text-6xl">
          Let's build something
          <span className="text-gray-500"> meaningful together.</span>
        </h2>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-400">
          I'm actively looking for Frontend Developer opportunities
          where I can contribute, learn, and grow as an engineer.
          I'd be happy to connect and discuss potential opportunities.
        </p>

        <a
          href="mailto:vibhavn.work@gmail.com"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-lime-400 px-7 py-4 font-semibold text-black transition hover:bg-lime-300"
        >
          <Mail size={19} />
          Email me
          <ArrowUpRight size={18} />
        </a>

        <div className="mt-24 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center">
          <p className="text-sm text-gray-500">
            © 2026 Vibhav. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <a
              href="https://github.com/VibhavN"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-lime-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/vibhavn/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-lime-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
