import { useEffect, useState } from 'react'
import { navLinks } from '../data'

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return activeSection
}