import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { content } from '../content'
import { CATEGORIES } from '../categories'
import ProjectGrid from '../components/ProjectGrid'
import styles from './Work.module.css'

/** Order the home preview runs in — voice-over first. */
const PREVIEW_ORDER = ['voiceover', 'audiovisual', 'design', 'photography']
const PREVIEW_PER_CATEGORY = 3

export default function Work() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  const counts: Record<string, number> = {}
  const preview = content.projects
    .filter((p) => {
      counts[p.category] = (counts[p.category] ?? 0) + 1
      return counts[p.category] <= PREVIEW_PER_CATEGORY
    })
    .sort((a, b) => PREVIEW_ORDER.indexOf(a.category) - PREVIEW_ORDER.indexOf(b.category))

  return (
    <section className="section" id="work" ref={sectionRef}>
      <div className="container">
        <p className="section-label reveal">Selected Work</p>
        <h2 className={`section-title reveal reveal-d1 ${styles.title}`}>
          Projects &amp; Collaborations
        </h2>

        <hr className="hairline" style={{ marginBottom: '2.5rem' }} />

        <nav className={`${styles.filters} reveal reveal-d2`} aria-label="Project types">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to={`/work/${c.slug}`} className={styles.filterBtn}>
              {c.label}
            </Link>
          ))}
        </nav>

        <ProjectGrid projects={preview} />
      </div>
    </section>
  )
}
