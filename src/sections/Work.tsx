import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { content } from '../content'
import AudioPlayer from '../components/AudioPlayer'
import styles from './Work.module.css'

type Filter = 'all' | 'design' | 'photography' | 'voiceover' | 'audiovisual'

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Branding', value: 'design' },
  { label: 'Photography', value: 'photography' },
  { label: 'Voice-Over', value: 'voiceover' },
  { label: 'Audiovisual', value: 'audiovisual' },
]

const PLACEHOLDER_COLORS: Record<string, string> = {
  design: 'linear-gradient(135deg, #0d4a40 0%, #051f1c 100%)',
  photography: 'linear-gradient(135deg, #1a3a30 0%, #051f1c 100%)',
  voiceover: 'linear-gradient(135deg, #0a2e28 0%, #051f1c 100%)',
  audiovisual: 'linear-gradient(135deg, #133d35 0%, #051f1c 100%)',
}

export default function Work() {
  const [filter, setFilter] = useState<Filter>('all')
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>

  // "All" shows max 3 projects per category; dedicated filters show everything
  const filtered = filter === 'all'
    ? (() => {
        const counts: Record<string, number> = {}
        return content.projects.filter((p) => {
          counts[p.category] = (counts[p.category] ?? 0) + 1
          return counts[p.category] <= 3
        })
      })()
    : content.projects.filter((p) => p.category === filter)

  return (
    <section className="section" id="work" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <p className="section-label reveal">Selected Work</p>
        <h2 className={`section-title reveal reveal-d1 ${styles.title}`}>
          Projects &amp; Collaborations
        </h2>

        <hr className="hairline" style={{ marginBottom: '2.5rem' }} />

        <div className={`${styles.filters} reveal reveal-d2`} role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`${styles.filterBtn} ${filter === f.value ? styles.filterActive : ''}`}
              onClick={() => setFilter(f.value)}
              aria-pressed={filter === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((project, i) => {
            const ytId = (project as any).youtubeId as string | undefined
            const igUrl = (project as any).instagramUrl as string | undefined
            const liUrl = (project as any).linkedinUrl as string | undefined
            const mediaType = (project as any).mediaType as 'video' | 'audio' | undefined
            const mediaSrc = (project as any).mediaSrc as string | undefined
            const localImage = (project as any).image as string | null
            const thumbUrl = ytId
              ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
              : null

            const imageWrap = (
              <div
                className={styles.imageWrap}
                style={!thumbUrl && !igUrl && !liUrl && !localImage ? { background: PLACEHOLDER_COLORS[project.category] } : undefined}
              >
                {mediaType === 'video' && mediaSrc ? (
                  <video
                    className={styles.videoPlayer}
                    src={mediaSrc}
                    poster={localImage ?? undefined}
                    controls
                    preload="none"
                    playsInline
                  />
                ) : localImage ? (
                  <img
                    src={localImage}
                    alt={project.title}
                    className={styles.ytThumb}
                    loading="lazy"
                  />
                ) : thumbUrl ? (
                  <img
                    src={thumbUrl}
                    alt={project.title}
                    className={styles.ytThumb}
                    loading="lazy"
                  />
                ) : igUrl ? (
                  <div className={styles.igPlaceholder}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="rgba(247,245,245,0.5)" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="5" stroke="rgba(247,245,245,0.5)" strokeWidth="1.5"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="rgba(247,245,245,0.5)"/>
                    </svg>
                    <span>View on Instagram</span>
                  </div>
                ) : liUrl ? (
                  <div className={styles.liPlaceholder}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="3" stroke="rgba(247,245,245,0.5)" strokeWidth="1.5"/>
                      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v1" stroke="rgba(247,245,245,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span>View on LinkedIn</span>
                  </div>
                ) : (
                  <div className={styles.placeholderLabel}>
                    <span>[[IMAGE PLACEHOLDER]]</span>
                    <span className={styles.placeholderSub}>Replace in /public/work/{project.id}.*</span>
                  </div>
                )}

                {mediaType !== 'video' && (
                  <div className={styles.overlay}>
                    {(ytId || igUrl || liUrl) && (
                      <div className={styles.playIcon} aria-hidden="true">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                          <circle cx="24" cy="24" r="23" stroke="rgba(247,245,245,0.6)" strokeWidth="1.5"/>
                          <path d="M20 16l14 8-14 8V16z" fill="rgba(247,245,245,0.9)"/>
                        </svg>
                      </div>
                    )}
                    <h3 className={styles.overlayTitle}>{project.title}</h3>
                    {project.titleAr && (
                      <p className={styles.overlayTitleAr}>{project.titleAr}</p>
                    )}
                    <p className={styles.overlayRole}>{project.role}</p>
                  </div>
                )}
              </div>
            )

            const externalUrl = ytId ? `https://youtu.be/${ytId}` : igUrl ?? liUrl

            return (
              <article key={project.id} className={`${styles.card} reveal reveal-d${Math.min(i % 4 + 1, 4)}`}>
                {externalUrl ? (
                  <a
                    href={externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ytLink}
                    aria-label={`View ${project.title}`}
                  >
                    {imageWrap}
                  </a>
                ) : imageWrap}

                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCategory}>{project.category}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  {mediaType === 'audio' && mediaSrc && (
                    <div className={styles.audioWrap}>
                      <AudioPlayer label={project.title} src={mediaSrc} />
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
