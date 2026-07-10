import styles from './LogoMarquee.module.css'

// Logofolio marks — /public/logos/
const LOGOFOLIO: string[] = [
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

// Client logos — /public/clients/
const CLIENTS: string[] = [
  '/clients/client-1.svg',
  '/clients/client-2.svg',
  '/clients/client-3.svg',
  '/clients/client-4.svg',
  '/clients/client-5.svg',
  '/clients/client-6.svg',
  '/clients/client-7.svg',
]

interface LogoMarqueeProps {
  label?: string
  logos?: string[]
  duration?: number
}

export default function LogoMarquee({
  label = 'Logofolio',
  logos = LOGOFOLIO,
  duration = 80,
}: LogoMarqueeProps) {
  if (logos.length === 0) return null

  // Short lists get repeated so the loop track is long enough
  const repeated = logos.length < 12 ? [...logos, ...logos] : logos

  return (
    <section className={styles.marqueeSection} aria-label={label}>
      <p className={styles.label}>{label}</p>
      <div className={styles.marquee}>
        <div
          className={styles.track}
          style={{ animationDuration: `${duration}s` }}
        >
          {[...repeated, ...repeated].map((src, i) => (
            <div key={i} className={styles.item}>
              <img src={src} alt="" loading="lazy" draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { CLIENTS }
