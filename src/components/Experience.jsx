const experiences = [
  {
    org: 'Hack4Impact',
    role: 'Software Engineer & Operations Member',
    period: '2024 – Present',
    location: 'University of Maryland',
    bullets: [
      'Architected a Python web scraper to centralize project and contributor data from 15+ university chapters.',
      'Built internal tooling to streamline onboarding and chapter operations.',
      'Collaborated on nonproft-facing web applications using React and Flask.',
    ],
    tags: ['Python', 'React', 'Flask', 'Web Scraping'],
  },
  {
    org: 'DoQuantum',
    role: 'Quantum Computing Researcher',
    period: 'Summer 2023',
    location: 'Remote',
    bullets: [
      'Researched quantum algorithms and their practical applications in optimization.',
      'Implemented quantum circuits using Qiskit and explored NISQ-era hardware constraints.',
      'Presented findings on variational quantum eigensolvers to a cohort of peers.',
    ],
    tags: ['Qiskit', 'Python', 'Quantum Algorithms'],
  },
  {
    org: 'Science Olympiad',
    role: 'Build Committee Member',
    period: '2022 – 2024',
    location: 'UMD Chapter',
    bullets: [
      'Designed and fabricated physical engineering devices for invitational competitions.',
      'Mentored high school teams on build strategy and technical documentation.',
      'Coordinated logistics for 200+ participant invitational tournaments.',
    ],
    tags: ['Engineering', 'Mentorship', 'Event Coordination'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="mb-12">
        <p className="text-violet-600 font-mono text-xs font-medium tracking-widest uppercase mb-3">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Where I've worked
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.org}
            className="group relative border border-slate-100 rounded-2xl p-6 md:p-8 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{exp.role}</h3>
                <p className="text-violet-600 font-medium text-sm">{exp.org}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm text-slate-400 font-mono">{exp.period}</p>
                <p className="text-xs text-slate-400">{exp.location}</p>
              </div>
            </div>

            <ul className="space-y-2 mb-5">
              {exp.bullets.map((b, i) => (
                <li key={i} className="text-slate-500 text-sm leading-relaxed flex gap-3">
                  <span className="text-violet-400 mt-1.5 shrink-0">▸</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-slate-50 text-slate-500 border border-slate-100 px-3 py-1 rounded-full"
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
