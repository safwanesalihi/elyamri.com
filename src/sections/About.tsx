import { useScrollReveal } from '../hooks/useScrollReveal'
import { content } from '../content'
import styles from './About.module.css'

export default function About() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section className="section" id="about" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <p className="section-label reveal">The Person</p>
        <h2 className={`section-title reveal reveal-d1 ${styles.title}`}>
          About Mohamed
        </h2>

        <hr className="hairline" style={{ marginBottom: '4rem' }} />

        <div className={styles.layout}>
          {/* Portrait */}
          <div className={`${styles.portrait} reveal`}>
            <div className={styles.portraitInner}>
              <img
                src="/about-portrait.png"
                alt="Mohamed El Yamri"
                className={styles.portraitImg}
                loading="lazy"
              />
            </div>
          </div>

          {/* Text side */}
          <div className={styles.text}>
            {content.bio.map((para, i) => (
              <p key={i} className={`${styles.bio} reveal reveal-d${i + 1}`}>{para}</p>
            ))}

            <div className={`${styles.languages} reveal reveal-d3`}>
              <p className={styles.langLabel}>Languages</p>
              {content.languages.map((lang) => (
                <div key={lang.name} className={styles.langRow}>
                  <div className={styles.langInfo}>
                    <span className={styles.langName}>{lang.name}</span>
                    <span className={styles.langLevel}>{lang.level}</span>
                  </div>
                  <div className={styles.langBar}>
                    <div className={styles.langFill} style={{ width: `${lang.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
