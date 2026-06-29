import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const observe = (root: Element) => {
      root.querySelectorAll('.reveal:not(.visible)').forEach((t) => io.observe(t))
    }

    observe(el)

    // Re-observe whenever new .reveal elements are added (e.g. after filter change)
    const mo = new MutationObserver(() => observe(el))
    mo.observe(el, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return ref
}
