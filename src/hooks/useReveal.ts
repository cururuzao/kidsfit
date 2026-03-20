import { useEffect, useRef } from 'react'

export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )

    el.querySelectorAll('.reveal').forEach((child) => obs.observe(child))
    if (el.classList.contains('reveal')) obs.observe(el)

    return () => obs.disconnect()
  }, [])

  return ref
}
