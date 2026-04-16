const skillGroups = [
  {
    label: 'Languages',
    skills: ['JavaScript', 'Python', 'Java', 'SQL', 'C', 'Node.js'],
  },
  {
    label: 'Frameworks & Tools',
    skills: ['React', 'Next.js', 'Flask', 'Tailwind CSS', 'Firebase', 'PostgreSQL'],
  },
  {
    label: 'AI & APIs',
    skills: ['Gemini API', 'Claude API', 'Qiskit', 'FastF1 API'],
  },
  {
    label: 'Dev Tools',
    skills: ['Git', 'GitHub', 'Vite', 'VS Code', 'Linux', 'REST APIs'],
  },
]

const extras = [
  { label: 'Taekwondo', detail: 'Black Belt' },
  { label: 'Volunteering', detail: '700+ hours — Happy Helpers for the Homeless' },
  { label: 'Leadership', detail: 'Hack4Impact Operations · Science Olympiad Build Committee' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="mb-12">
        <p className="text-violet-600 font-mono text-xs font-medium tracking-widest uppercase mb-3">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          What I work with
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {skillGroups.map((group) => (
          <div key={group.label} className="border border-slate-100 rounded-2xl p-6">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-slate-50 text-slate-700 border border-slate-100 px-3 py-1.5 rounded-lg font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border border-slate-100 rounded-2xl p-6">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-5">Beyond the keyboard</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {extras.map((item) => (
            <div key={item.label}>
              <p className="text-sm font-semibold text-slate-800 mb-0.5">{item.label}</p>
              <p className="text-sm text-slate-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
