import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Route changes jump to the top, except when the URL carries a hash —
 * then we scroll to that section once it has mounted (e.g. "/#work").
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      // Wait a frame so the target section exists after a route swap.
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}
