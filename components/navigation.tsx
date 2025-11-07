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

  // Transições suaves do scroll (mantidas)
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
      aria-label="Barra de navegação"
    >
      {/* Gradiente topo */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 bg-gradient-to-b from-black/60 via-black/30 to-transparent md:from-black/40 md:via-black/20"
        style={{ opacity: 1 - scrollProgress }}
      />

      {/* Container responsivo */}
      <div className="relative mx-auto w-full max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
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
              gap: scrollProgress > 0.3 ? "0" : "1.25rem",
            }}
          >
            {/* ===== LOGO ===== */}
            <a
              href="#home"
              onClick={() => handleClick("#home")}
              className="font-bold transition-all ease-[cubic-bezier(0.33,1,0.68,1)] hover:text-[#6B8E23] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B8E23]/60 rounded"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: `${logoSize}rem`,
                color:
                  scrollProgress > 0.5
                    ? "#1f2923"
                    : `rgba(255, 255, 255, ${textOpacity})`,
                transform: logoVisible ? "translateY(0)" : "translateY(-150%)",
                opacity: logoVisible ? 1 : 0,
                transition:
                  "transform 1s cubic-bezier(0.22, 1, 0.36, 1), opacity 1s ease",
              }}
            >
              Synapse
            </a>

            {/* ===== LINKS DESKTOP/TABLET ===== */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className="text-[#1f2923] relative font-medium group transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B8E23]/60 rounded"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "clamp(0.95rem, 0.9rem + 0.2vw, 1.05rem)",
                  }}
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#6B8E23] group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              ))}
            </div>

            {/* ===== MENU MOBILE BUTTON ===== */}
            <button
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 transition-all duration-700 hover:text-[#6B8E23] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B8E23]/60 rounded"
              style={{ color: scrollProgress > 0.5 ? "#6B8E23" : "#ffffff" }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== MENU MOBILE ===== */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-white/95 backdrop-blur-sm shadow-sm">
          <div className="px-4 sm:px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className="block text-[#244017] hover:text-[#4f6c19] font-medium relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B8E23]/60 rounded"
                style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem" }}
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
