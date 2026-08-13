import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { href: '#home-section', label: 'Home' },
  { href: '#about-section', label: 'About' },
  { href: '#services-section', label: 'Services' },
  { href: '#project-section', label: 'Projects' },
  { href: '#resume-section', label: 'Resume' },
  { href: '#contact-section', label: 'Contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home-section')

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.substring(1))

    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const scrollPosition = window.scrollY + 180
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const el = document.getElementById(id)
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border-c/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        <a href="#home-section" className="text-2xl font-black tracking-wider text-text shrink-0">
          Jai <span className="text-gradient-gold">Kishan</span>
        </a>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="text-text text-2xl"
            aria-controls="ftco-nav"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((o) => !o)}
          >
            <i className={`fa ${open ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
          </button>
        </div>

        <ul
          id="ftco-nav"
          className={`${
            open ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-bg md:bg-transparent border-t md:border-t-0 border-border-c/10 gap-2 md:gap-7 px-6 md:px-0 py-4 md:py-0 items-start md:items-center`}
        >
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block py-1 md:py-0 transition-all font-medium text-sm sm:text-base ${
                    isActive
                      ? 'text-gold border-b-2 border-gold pb-0.5 font-bold'
                      : 'text-text/75 hover:text-gold'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block shrink-0">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </nav>
  )
}
