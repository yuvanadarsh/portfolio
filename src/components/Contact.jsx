export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="rounded-3xl bg-slate-900 text-white p-10 md:p-16 text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl -translate-y-1/2" />
        </div>

        <div className="relative z-10">
          <p className="text-violet-400 font-mono text-xs font-medium tracking-widest uppercase mb-4">
            Let's work together
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Open for Summer 2026
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-10 text-base leading-relaxed">
            I'm actively seeking software engineering internships for Summer 2026. If you're building something interesting, I'd love to hear about it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:yuvanadarshj@gmail.com"
              className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-3.5 rounded-full font-medium transition-colors text-sm"
            >
              yuvanadarshj@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/yuvan-adarsh"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-700 hover:border-slate-500 text-slate-300 px-8 py-3.5 rounded-full font-medium transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yuvanadarshjagannathan"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-700 hover:border-slate-500 text-slate-300 px-8 py-3.5 rounded-full font-medium transition-colors text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-slate-400">
        <p>Built with React + Vite + Tailwind CSS</p>
      </div>
    </section>
  )
}
