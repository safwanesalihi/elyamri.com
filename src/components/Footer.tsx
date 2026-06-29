import { content } from '../content'
import styles from './Footer.module.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <hr className="hairline" />
      <div className={`container ${styles.inner}`}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} {content.name}. All rights reserved.
        </span>

        <button className={styles.backTop} onClick={scrollTop} aria-label="Back to top">
          ↑ Back to top
        </button>
      </div>
    </footer>
  )
}
