import styles from './LogoMarquee.module.css'

// Logofolio marks — /public/logos/
const LOGOS: string[] = [
  '/logos/logo-1.svg',
  '/logos/logo-2.svg',
  '/logos/logo-4.svg',
  '/logos/logo-5.svg',
  '/logos/logo-6.svg',
  '/logos/logo-8.svg',
  '/logos/logo-9.svg',
  '/logos/logo-10.svg',
  '/logos/logo-11.svg',
  '/logos/logo-12.svg',
  '/logos/logo-13.svg',
  '/logos/logo-14.svg',
  '/logos/logo-15.svg',
  '/logos/logo-16.svg',
  '/logos/logo-17.svg',
  '/logos/logo-18.svg',
  '/logos/logo-19.svg',
  '/logos/logo-20.svg',
  '/logos/logo-21.svg',
  '/logos/logo-22.svg',
  '/logos/logo-24.svg',
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
