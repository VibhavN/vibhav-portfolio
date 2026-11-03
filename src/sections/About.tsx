
function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm font-medium tracking-widest text-lime-400 uppercase">
          01 / About Me
        </p>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          <div>
            <h2 className="text-3xl leading-tight font-semibold tracking-tight text-white md:text-5xl">
              A little about
              <span className="text-gray-500"> what I do.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
              I'm Vibhav, a frontend developer with 3.5 years of
              experience building user-focused web applications.
              I enjoy solving problems through clean code,
              thoughtful UI design, and intuitive user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/10 bg-[#14171C] p-6">
              <p className="text-4xl font-bold text-lime-400">3.5+</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Years of professional experience
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#14171C] p-6">
              <p className="text-4xl font-bold text-lime-400">2</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Industry domains
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-white/10 bg-[#14171C] p-6">
              <p className="text-sm font-medium text-gray-400">
                CURRENT FOCUS
              </p>
              <p className="mt-3 text-lg font-medium leading-relaxed text-white">
                Building modern frontend applications with React
                and TypeScript.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
