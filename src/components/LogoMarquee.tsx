import styles from './LogoMarquee.module.css'

// Drop logo files into /public/logos/ and list them here
const LOGOS: string[] = [
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
]

export default function LogoMarquee() {
  if (LOGOS.length === 0) return null

  return (
    <section className={styles.marqueeSection} aria-label="Logofolio">
      <p className={styles.label}>Logofolio</p>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...LOGOS, ...LOGOS].map((src, i) => (
            <div key={i} className={styles.item}>
              <img src={src} alt="" loading="lazy" draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
