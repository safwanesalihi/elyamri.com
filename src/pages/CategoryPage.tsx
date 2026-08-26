import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { content } from '../content'
import { CATEGORIES, categoryBySlug } from '../categories'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ProjectGrid from '../components/ProjectGrid'
import styles from './CategoryPage.module.css'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = categoryBySlug(slug)
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  useEffect(() => {
    if (category) document.title = `${category.title} — ${content.name}`
    return () => { document.title = `${content.name} — ${content.role}` }
  }, [category])

  if (!category) return <Navigate to="/" replace />

  const projects = content.projects.filter((p) => p.category === category.category)

  return (
    <section className="section" ref={sectionRef}>
      <div className="container">
        <Link to="/#work" className={`${styles.back} reveal`}>
          <span aria-hidden="true">←</span> Back to work
        </Link>

        <p className="section-label reveal">Selected Work</p>
        <h1 className={`section-title reveal reveal-d1 ${styles.title}`}>{category.title}</h1>
        <p className={`${styles.blurb} reveal reveal-d2`}>{category.blurb}</p>

        <nav className={`${styles.tabs} reveal reveal-d2`} aria-label="Project types">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to={`/work/${c.slug}`}
              className={`${styles.tab} ${c.slug === category.slug ? styles.tabActive : ''}`}
              aria-current={c.slug === category.slug ? 'page' : undefined}
            >
              {c.label}
            </Link>
          ))}
        </nav>

        <hr className="hairline" style={{ marginBottom: '2.5rem' }} />

        {projects.length > 0 ? (
          <ProjectGrid projects={projects} gallery={category.category === 'photography'} />
        ) : (
          <p className={styles.empty}>Nothing published here yet — check back soon.</p>
        )}
      </div>
    </section>
  )
}
