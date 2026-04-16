const projects = [
  {
    name: 'Docket',
    description:
      'AI-powered personal management system that combines task tracking, calendar, and smart scheduling into one seamless interface. Built with Gemini AI for natural language task creation.',
    tags: ['Next.js', 'PostgreSQL', 'Gemini AI', 'Tailwind CSS'],
    highlight: true,
    link: '#',
    type: 'Full-Stack App',
  },
  {
    name: 'FastF1 Analytics',
    description:
      'Interactive Formula 1 telemetry dashboard that pulls live race data via the FastF1 API. Visualizes lap times, sector analysis, tire strategy, and driver comparisons.',
    tags: ['React', 'Flask', 'Python', 'FastF1 API', 'Chart.js'],
    highlight: false,
    link: '#',
    type: 'Data Dashboard',
  },
  {
    name: 'F1 Simulator',
    description:
      'Monte Carlo simulation engine forecasting F1 championship standings across 1M+ iterations. Models race incidents, qualifying randomness, and points distributions.',
    tags: ['Python', 'NumPy', 'Monte Carlo', 'Data Analysis'],
    highlight: false,
    link: '#',
    type: 'Simulation',
  },
  {
    name: 'UMD Schedule Generator',
    description:
      'Automated course combination tool for UMD students. Scrapes Testudo to generate optimal, conflict-free schedules based on user preferences and constraints.',
    tags: ['Python', 'Web Scraping', 'BeautifulSoup', 'Flask'],
    highlight: false,
    link: '#',
    type: 'Automation Tool',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="mb-12">
        <p className="text-violet-600 font-mono text-xs font-medium tracking-widest uppercase mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Things I've built
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`group relative rounded-2xl p-6 border transition-all duration-300 flex flex-col ${
              project.highlight
                ? 'border-violet-200 bg-violet-50/40 hover:shadow-lg hover:shadow-violet-100 md:col-span-2'
                : 'border-slate-100 hover:border-slate-200 hover:shadow-md'
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{project.type}</span>
                <h3
                  className={`font-bold tracking-tight mt-0.5 ${
                    project.highlight ? 'text-2xl text-slate-900' : 'text-xl text-slate-900'
                  }`}
                >
                  {project.name}
                </h3>
              </div>
              <a
                href={project.link}
                className="shrink-0 text-slate-300 hover:text-violet-500 transition-colors mt-1"
                aria-label={`Open ${project.name}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-3 py-1 rounded-full border font-medium ${
                    project.highlight
                      ? 'bg-violet-100 text-violet-700 border-violet-200'
                      : 'bg-slate-50 text-slate-500 border-slate-100'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
