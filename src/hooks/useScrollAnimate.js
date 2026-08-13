import { useEffect } from 'react'

/**
 * Any element with class "reveal" fades/slides up the first time it
 * scrolls into view (class "in-view" triggers the Tailwind animation
 * defined in src/styles/index.css), then keeps that class so it
 * doesn't replay on re-scroll.
 */
export default function useScrollAnimate(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in-view)')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target
            setTimeout(() => el.classList.add('in-view'), i * 50)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    )

    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, deps)
}
