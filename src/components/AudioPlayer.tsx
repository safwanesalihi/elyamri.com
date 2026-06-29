import { useRef, useState } from 'react'
import styles from './AudioPlayer.module.css'

interface AudioPlayerProps {
  label?: string
}

export default function AudioPlayer({ label = 'Voice Sample' }: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    // Placeholder — no real audio yet
    setPlaying(!playing)
    if (!playing) {
      setTimeout(() => setPlaying(false), 3000)
    }
  }

  return (
    <div className={styles.player}>
      <button
        className={`${styles.playBtn} glass-btn`}
        onClick={toggle}
        aria-label={playing ? 'Pause audio' : 'Play audio sample'}
      >
        {playing ? <IconPause /> : <IconPlay />}
      </button>

      <div className={styles.waveform} aria-hidden="true">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className={`${styles.bar} ${playing ? styles.barActive : ''}`}
            style={{ '--delay': `${(i % 7) * 80}ms`, '--h': `${30 + Math.sin(i * 0.8) * 20 + Math.random() * 20}%` } as React.CSSProperties}
          />
        ))}
      </div>

      <span className={styles.label}>{label}</span>
    </div>
  )
}

function IconPlay() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <polygon points="3,1 13,7 3,13" fill="currentColor" />
    </svg>
  )
}

function IconPause() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="2" y="1" width="4" height="12" rx="1" fill="currentColor" />
      <rect x="8" y="1" width="4" height="12" rx="1" fill="currentColor" />
    </svg>
  )
}
