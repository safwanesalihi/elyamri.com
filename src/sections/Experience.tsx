import { useScrollReveal } from '../hooks/useScrollReveal'
import { content } from '../content'
import styles from './Experience.module.css'

export default function Experience() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  return (
    <section className="section" id="experience" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <p className="section-label reveal">Career</p>
        <h2 className={`section-title reveal reveal-d1 ${styles.title}`}>
          Experience
        </h2>

        <hr className="hairline" style={{ marginBottom: '4rem' }} />

        <div className={styles.timeline}>
          {content.experience.map((item, i) => (
            <div key={i} className={`${styles.item} reveal reveal-d${Math.min(i + 1, 4)}`}>
              <div className={styles.dot} />
              <div className={styles.body}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.company}>{item.company}</h3>
                    <span className={styles.location}>{item.location}</span>
                  </div>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <p className={styles.role}>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
