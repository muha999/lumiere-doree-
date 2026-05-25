import { useEffect } from 'react'

/**
 * Reproduit l’IntersectionObserver du prototype HTML
 * (classe .animate-scroll → .visible au défilement).
 */
export function useScrollAnimation(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-scroll')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      { threshold: 0.05 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, deps)
}
