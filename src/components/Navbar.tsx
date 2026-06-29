import { useEffect, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { content } from '../content'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(['work', 'services', 'about', 'contact'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Mohamed El Yamri — Home">
          <img src="/logo.svg" alt="Mohamed El Yamri logo" className={styles.logoImg} />
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${styles.navLink} ${active === link.href.replace('#', '') ? styles.navLinkActive : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={styles.mobileLink}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
