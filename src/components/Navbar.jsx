import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-slate-900 font-semibold tracking-tight text-lg hover:text-violet-600 transition-colors">
          YAJ
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:yuvanadarshj@gmail.com"
              className="text-sm bg-violet-600 text-white px-4 py-2 rounded-full font-medium hover:bg-violet-700 transition-colors"
            >
              Hire me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-700 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-slate-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:yuvanadarshj@gmail.com"
            className="text-sm bg-violet-600 text-white px-4 py-2 rounded-full font-medium text-center"
            onClick={() => setMenuOpen(false)}
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  )
}
