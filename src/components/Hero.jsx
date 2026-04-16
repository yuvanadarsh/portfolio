export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-16 max-w-5xl mx-auto w-full"
    >
      <div className="max-w-2xl">
        <p className="text-violet-600 font-mono text-sm font-medium tracking-widest uppercase mb-6">
          Available · Summer 2026
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-6">
          Yuvan Adarsh
          <br />
          <span className="text-slate-400">Jagannathan</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-500 font-light mb-4 leading-relaxed">
          Building digital architectures.
        </p>

        <p className="text-slate-500 max-w-xl mb-10 leading-relaxed">
          CS student at the{' '}
          <span className="text-slate-700 font-medium">University of Maryland</span>{' '}
          (May 2028). Full-stack engineer focused on shipping fast — from web apps
          to data pipelines to quantum computing research.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-violet-600 text-white px-6 py-3 rounded-full font-medium hover:bg-violet-700 transition-colors text-sm"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-medium hover:border-slate-400 transition-colors text-sm"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
            UMD College Park · GPA 3.34
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block"></span>
            Hack4Impact · DoQuantum · Science Olympiad
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block"></span>
            700+ volunteer hours
          </span>
        </div>
      </div>
    </section>
  )
}
