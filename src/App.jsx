import { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";

function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─── useInView hook ─────────────────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── Data ───────────────────────────────────────────────────────────── */
const experiences = [
  {
    org: "Hack4Impact",
    period: "Jan 2026 – Present",
    role: "National Committee Member + Bootcamp Student",
    bullets: [
      "Architected Python web scraper to centralize data from 15+ university chapters.",
      "Engineered data reconciliation pipeline mapping identities across Slack and GitHub.",
      "Mastering FERN stack through 12-week sprints building a nonprofit web app.",
    ],
  },
  {
    org: "Science Olympiad",
    period: "Jun 2025 – Present",
    role: "Build Committee Member",
    bullets: ["Directed logistics and safety for 30+ schools and 100+ students.", "Ensured equipment meets national competition standards."],
  },
  {
    org: "DoQuantum",
    period: "Aug 2025 – Jan 2026",
    role: "Applied Quantum Researcher",
    bullets: ["Formulated QUBO model to optimize plasma donor scheduling via quantum annealing.", "Authored technical proposals translating quantum concepts into supply chain solutions."],
  },
];

const smallProjects = [
  {
    name: "UMD Schedule Generator",
    tags: ["Python", "Gemini 2.5 Flash", "APIs"],
    description: "Course scheduler using Gemini 2.5 Flash to synthesize UMD and PlanetTerp API data with a prioritization algorithm.",
  },
  {
    name: "F1 Championship Simulator",
    tags: ["Python", "NumPy", "Monte Carlo"],
    description: "Monte Carlo simulation forecasting F1 championship outcomes via 1M+ race iterations across 5+ scenarios.",
  },
  {
    name: "FastF1 Full-Stack App",
    tags: ["Flask", "JavaScript", "HTML/CSS"],
    description: "Flask dashboard visualizing FastF1 telemetry for live Grand Prix events via a custom JSON pipeline.",
  },
];

const blogPosts = [
  {
    title: "What I learned building Docket in 48 hours",
    sub: "On shipping fast, using AI APIs, and Auth0 quirks.",
  },
  {
    title: "Quantum annealing, explained for CS freshmen",
    sub: "Breaking down my DoQuantum research without the jargon.",
  },
];

/* ─── Nav ────────────────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-[#171717]/85 border-b border-[#404040]" : ""}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-semibold text-lg tracking-tight">Yuvan</span>
        <ul className="hidden md:flex items-center gap-7 text-sm text-[#a3a3a3]">
          {["Experience", "Projects", "Skills", "Contact"].map((label) => (
            <li key={label}>
              <a href={`#${label.toLowerCase()}`} className="hover:text-white transition-colors">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="border border-[#3b82f6] text-[#3b82f6] text-sm px-4 py-1.5 rounded-lg hover:bg-[#3b82f6] hover:text-white transition-colors">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────── */
function Hero() {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="hero" ref={ref} className={`min-h-screen flex items-center px-6 transition-all duration-500 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-start justify-between gap-12 pt-[88px] pb-16">
        {/* Left */}
        <div className="flex-1 max-w-xl">
          <span className="inline-block bg-[#1e3a8a] text-[#bfdbfe] text-xs font-medium px-3 py-1.5 rounded-full mb-6">Open to Internships · Summer 2026</span>

          <h1 className="text-5xl font-medium text-white leading-tight mb-4">
            Hi, I'm <span className="text-[#3b82f6]">Yuvan Adarsh.</span>
          </h1>

          <p className="text-[#a3a3a3] text-base mb-6">CS @ UMD · Builder · Climate Advocate · Taekwondo Black Belt</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Java", "Python", "React", "Full-Stack", "AI/ML"].map((skill) => (
              <span key={skill} className="border border-[#404040] text-[#e5e5e5] rounded-full text-sm px-3 py-1">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a href="#projects" className="bg-[#3b82f6] text-white rounded-lg px-5 py-2 text-sm font-medium hover:bg-[#2563eb] transition-colors">
              View Projects
            </a>
            <a href="#" className="border border-[#404040] text-white rounded-lg px-5 py-2 text-sm font-medium hover:border-[#3b82f6] transition-colors">
              Resume ↓
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com/in/yuvanadarsh" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:yuvanadarshj@gmail.com" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right — avatar placeholder */}
        <div className="shrink-0 w-40 h-40 rounded-xl border-2 border-[#3b82f6] bg-[#262626] flex items-center justify-center mt-1">
          <span className="text-[#3b82f6] text-4xl font-medium select-none">YA</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Experience ─────────────────────────────────────────────────────── */
function Experience() {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-12">Experience</h2>
        <div ref={ref} className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[#404040]" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={exp.org}
                className={`relative transition-all duration-500 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Blue dot */}
                <div className="absolute -left-[1.65rem] top-6 w-3 h-3 rounded-full bg-[#3b82f6] border-2 border-[#171717]" />

                <div className="bg-[#262626] border border-[#404040] rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <span className="text-white font-medium">{exp.org}</span>
                    <span className="text-[#a3a3a3] text-sm font-mono shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-[#3b82f6] text-sm font-medium mb-4">{exp.role}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-[#a3a3a3] text-sm flex gap-2">
                        <span className="text-[#3b82f6] shrink-0 mt-0.5">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ───────────────────────────────────────────────────────── */
function Projects() {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-12">Featured Work</h2>

        {/* Docket — featured full-width */}
        <div
          ref={ref}
          className={`bg-[#262626] border border-[#404040] rounded-xl p-6 md:p-8 mb-6 transition-all duration-500 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left */}
            <div className="flex-1">
              <span className="inline-block bg-[#1e3a8a] text-[#bfdbfe] text-xs px-3 py-1 rounded-full mb-4">FEATURED PROJECT</span>
              <h3 className="text-xl font-semibold text-white mb-3">Docket</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed mb-5">
                Web app that connects to GitHub, visualizes branch and commit history using Mermaid.js, and uses the Claude API to generate AI summaries of what each commit changed. Developers can add
                freeform notes per commit stored in Supabase.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js", "Supabase", "Auth0", "Mermaid.js", "Claude API"].map((tag) => (
                  <span key={tag} className="border border-[#3b82f6] text-[#bfdbfe] text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="#" className="bg-[#3b82f6] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#2563eb] transition-colors">
                  View Live
                </a>
                <a href="#" className="border border-[#404040] text-[#e5e5e5] text-sm px-4 py-2 rounded-lg hover:border-[#3b82f6] transition-colors flex items-center gap-2">
                  <GithubIcon size={14} /> GitHub
                </a>
              </div>
            </div>
            {/* Right — mockup placeholder */}
            <div className="md:w-72 shrink-0">
              <div className="bg-[#0f172a] rounded-lg h-48 flex items-center justify-center border border-[#404040]">
                <span className="text-[#a3a3a3] text-sm">App preview</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {smallProjects.map((proj, i) => (
            <div
              key={proj.name}
              className={`bg-[#262626] border border-[#404040] rounded-xl p-6 transition-all duration-500 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <h3 className="text-white font-medium mb-2">{proj.name}</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span key={tag} className="border border-[#404040] text-[#a3a3a3] text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Skills ─────────────────────────────────────────────────────────── */
function Skills() {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-12">Skills</h2>

        <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 transition-all duration-500 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* Languages */}
          <div className="bg-[#262626] border border-[#404040] rounded-xl p-6">
            <p className="text-[#a3a3a3] text-xs uppercase tracking-widest font-medium mb-4">Languages</p>
            <div className="flex flex-wrap gap-2">
              {["Java", "Python", "JavaScript", "HTML/CSS", "SQL", "C", "Node.js"].map((s) => (
                <span key={s} className="border border-[#3b82f6] text-[#bfdbfe] rounded-full text-sm px-3 py-1">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div className="bg-[#262626] border border-[#404040] rounded-xl p-6">
            <p className="text-[#a3a3a3] text-xs uppercase tracking-widest font-medium mb-4">Tools & Frameworks</p>
            <div className="flex flex-wrap gap-2">
              {["React", "Flask", "Firebase", "Next.js", "Tailwind", "Gemini", "Git", "Postman", "Figma"].map((s) => (
                <span key={s} className="border border-[#404040] text-[#a3a3a3] rounded-full text-sm px-3 py-1">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Education & Volunteering ───────────────────────────────────────── */
function EducationVolunteering() {
  const [ref, inView] = useInView(0.1);
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-12">Education & Volunteering</h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-500 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="bg-[#262626] border border-[#404040] rounded-xl p-6">
            <p className="text-[#a3a3a3] text-xs uppercase tracking-widest font-medium mb-3">Education</p>
            <p className="text-white font-medium">University of Maryland</p>
            <p className="text-[#a3a3a3] text-sm mt-1">B.S. Computer Science · Business Analytics Minor</p>
            <p className="text-[#a3a3a3] text-sm">GPA 3.34 · Expected May 2028</p>
            <p className="text-[#a3a3a3] text-sm">BSE Scholar</p>
          </div>

          <div className="bg-[#262626] border border-[#404040] rounded-xl p-6">
            <p className="text-[#a3a3a3] text-xs uppercase tracking-widest font-medium mb-3">Volunteering</p>
            <p className="text-white font-medium">Happy Helpers for the Homeless</p>
            <p className="text-[#a3a3a3] text-sm mt-1">700+ Service Hours</p>
            <p className="text-[#a3a3a3] text-sm">Star Volunteer · 2023 – Present</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Blog ───────────────────────────────────────────────────────────── */
function Blog() {
  const [ref, inView] = useInView(0.1);
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-2xl font-semibold text-white">Blog</h2>
          <span className="bg-[#1e3a8a] text-[#bfdbfe] text-xs px-3 py-1 rounded-full">Coming Soon</span>
        </div>
        <p className="text-[#a3a3a3] text-sm mb-10">I write about things I'm building, breaking, and learning.</p>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogPosts.map((post, i) => (
            <div
              key={post.title}
              className={`border-l-4 border-[#3b82f6] bg-[#262626] rounded-r-xl p-5 transition-all duration-500 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="text-white font-medium text-sm mb-1">{post.title}</h3>
              <p className="text-[#a3a3a3] text-sm mb-3">{post.sub}</p>
              <span className="text-[#a3a3a3] text-xs">Coming soon</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────────────── */
function Contact() {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-3">
          Let's build something <span className="text-[#3b82f6]">extraordinary.</span>
        </h2>
        <p className="text-[#a3a3a3] text-sm leading-relaxed mb-10">
          I'm currently looking for internships for Summer 2026. Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        <form ref={ref} onSubmit={(e) => e.preventDefault()} className={`space-y-3 mb-8 transition-all duration-500 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {[
            { name: "name", placeholder: "Full Name", type: "text" },
            { name: "email", placeholder: "Email", type: "email" },
            { name: "subject", placeholder: "Subject", type: "text" },
          ].map((field, i) => (
            <input
              key={field.name}
              type={field.type}
              placeholder={field.placeholder}
              className="bg-[#262626] border border-[#404040] rounded-lg p-3 text-[#e5e5e5] placeholder-[#a3a3a3] w-full outline-none focus:border-[#3b82f6] transition-colors text-sm"
              style={{ transitionDelay: `${i * 80}ms` }}
            />
          ))}
          <textarea
            rows={4}
            placeholder="Message"
            className="bg-[#262626] border border-[#404040] rounded-lg p-3 text-[#e5e5e5] placeholder-[#a3a3a3] w-full outline-none focus:border-[#3b82f6] transition-colors text-sm resize-none"
          />
          <button type="submit" className="bg-[#3b82f6] text-white w-full rounded-lg py-3 text-sm font-medium hover:bg-[#2563eb] transition-colors">
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-5">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:yuvanadarshj@gmail.com" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-[#404040] py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white font-semibold">Yuvan</span>
        <span className="text-[#a3a3a3] text-sm text-center">© 2025 Yuvan Adarsh Jagannathan. Built with precision.</span>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors">
            <GithubIcon size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors">
            <LinkedinIcon size={18} />
          </a>
          <a href="mailto:yuvanadarshj@gmail.com" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#e5e5e5]">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <EducationVolunteering />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
