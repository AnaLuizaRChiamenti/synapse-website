"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [logoVisible, setLogoVisible] = useState(false) // 👈 controle da animação

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200
      const progress = Math.min(window.scrollY / scrollThreshold, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 👇 animação do logo ao carregar
  useEffect(() => {
    const timer = setTimeout(() => setLogoVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#testes", label: "Semiologia Neurológica" },
    { href: "#videos", label: "Vídeos" },
    { href: "#review", label: "Review" },
    { href: "#contato", label: "Contato" },
  ]

  const handleClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  // Transições suaves do scroll
  const logoSize = 8 - scrollProgress * 5
  const navPadding = 2.5 - scrollProgress * 1.5
  const bgOpacity = scrollProgress * 0.95
  const textOpacity = 1 - scrollProgress * 0.3
  const shadowOpacity = scrollProgress

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out overflow-hidden"
      style={{
        backgroundColor: isHovered
          ? "rgba(220, 232, 210, 0.95)" // 💚 hover verde pastel
          : `rgba(255, 255, 255, ${bgOpacity})`,
        backdropFilter: scrollProgress > 0.1 ? "blur(12px)" : "none",
        boxShadow: `0 4px 6px -1px rgba(0,0,0,${shadowOpacity * 0.1})`,
      }}
    >
      {/* Gradiente topo */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none transition-opacity duration-700"
        style={{ opacity: 1 - scrollProgress }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div
          className="transition-all duration-700 ease-out"
          style={{
            paddingTop: `${navPadding}rem`,
            paddingBottom: `${navPadding}rem`,
          }}
        >
          <div
            className="flex items-center justify-between transition-all duration-700 ease-out"
            style={{
              flexDirection: scrollProgress > 0.3 ? "row" : "column",
              gap: scrollProgress > 0.3 ? "0" : "1.5rem",
            }}
          >
            {/* ===== LOGO DESCENDO DO TOPO ===== */}
            <a
              href="#home"
              onClick={() => handleClick("#home")}
              className={`font-bold transition-all ease-[cubic-bezier(0.33,1,0.68,1)] hover:text-[#6B8E23]`}
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: `${logoSize}rem`,
                color:
                  scrollProgress > 0.5
                    ? "#1f2923"
                    : `rgba(255, 255, 255, ${textOpacity})`,
                transform: logoVisible
                  ? "translateY(0)" // posição final (centro)
                  : "translateY(-150%)", // começa acima da navbar
                opacity: logoVisible ? 1 : 0,
                transition:
                  "transform 1s cubic-bezier(0.22, 1, 0.36, 1), opacity 1s ease",
              }}
            >
              Synapse
            </a>

            {/* ===== LINKS ===== */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className="relative font-medium group transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    color: scrollProgress > 0.5 ? "#000000" : "#ffffff",
                  }}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6B8E23] group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              ))}
            </div>

            {/* ===== MENU MOBILE ===== */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 transition-all duration-700 hover:text-[#6B8E23]"
              style={{
                color: scrollProgress > 0.5 ? "#6B8E23" : "#ffffff",
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== MENU MOBILE ABERTO ===== */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className="block text-[#6B8E23] hover:text-[#4f6c19] font-medium relative group"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6B8E23] group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
