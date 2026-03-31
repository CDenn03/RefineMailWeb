'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )
    reveals.forEach(el => {
      const rect = (el as HTMLElement).getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        el.classList.add('visible')
      } else {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return null
}
