"use client"

import { useEffect, useState } from "react"
import { NavigationHero } from "@/components/NavigationHero"
import { NavigationCompact } from "@/components/NavigationCompact"

export function NavigationController() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Checa tamanho da tela
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return // ignora scroll em mobile

    const handleScroll = () => {
      const scrollThreshold = 200
      const progress = Math.min(window.scrollY / scrollThreshold, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  // MOBILE → só NavigationCompact
  if (isMobile) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavigationCompact />
      </div>
    )
  }

  // DESKTOP → transição normal
  return (
    <>
      {/* Hero some aos poucos */}
      <div
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          opacity: 1 - scrollProgress,
          transform: `translateY(${scrollProgress * -10}px)`,
        }}
      >
        <NavigationHero />
      </div>

      {/* Compact entra suavemente */}
      <div
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          opacity: scrollProgress,
          transform: `translateY(${(1 - scrollProgress) * 10}px)`,
        }}
      >
        <NavigationCompact />
      </div>
    </>
  )
}
