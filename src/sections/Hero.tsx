import { useEffect, useState } from 'react'
import { content } from '../content'
import styles from './Hero.module.css'

export default function Hero() {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={`${styles.hero} ${entered ? styles.entered : ''}`} id="hero">
      <div className={styles.bgMotif} aria-hidden="true">
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <img src="/logo.svg" className={styles.bgLogoLeft} aria-hidden="true" />
      </div>

      {/* Portrait — outside container so it bleeds to viewport edge */}
      <div className={`${styles.portraitWrap} ${styles.anim5}`} aria-hidden="true">
        <img
          src="/hero-portrait.png"
          alt="Mohamed El Yamri"
          className={styles.portrait}
        />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left — text */}
        <div className={styles.content}>
          <p className={`${styles.preTitle} ${styles.anim1}`}>
            Rabat, Morocco
          </p>

          <h1 className={`${styles.name} ${styles.anim2}`}>
            Mohamed<br />
            El Yamri
          </h1>

          <p className={`${styles.tagline} ${styles.anim3}`}>
            {content.tagline}
          </p>

          <div className={`${styles.ctas} ${styles.anim4}`}>
            <button
              className="glass-btn"
              onClick={() => scrollToSection('work')}
            >
              <IconArrow />
              View Work
            </button>
            <button
              className={`glass-btn ${styles.ctaSecondary}`}
              onClick={() => scrollToSection('contact')}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`${styles.scrollHint} ${styles.anim6}`} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>scroll</span>
      </div>
    </section>
  )
}

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
