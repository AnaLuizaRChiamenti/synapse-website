"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function NavigationHero() {
  const [isOpen, setIsOpen] = useState(false)
  const [logoVisible, setLogoVisible] = useState(false)

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
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav
      className="group relative transition-all duration-700 
      bg-gradient-to-b from-black/50 via-black/30 to-transparent 
      backdrop-blur-[3px] hover:from-[#f3f4ef]/85 hover:via-[#f3f4ef]/85 hover:to-[#f3f4ef]/85 hover:backdrop-blur-[5px]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-center text-center">
        {/* Logo centralizado */}
        <a
          href="#home"
          onClick={() => handleClick("#home")}
          className="font-bold text-white group-hover:text-[#1f2923] hover:text-[#6B8E23] transition-all ease-[cubic-bezier(0.33,1,0.68,1)] drop-shadow-[0_3px_8px_rgba(0,0,0,0.4)]"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "6.5rem", // mesmo impacto visual da Swarovski
            letterSpacing: "2px",
            transform: logoVisible ? "translateY(0)" : "translateY(-150%)",
            opacity: logoVisible ? 1 : 0,
            transition:
              "transform 1s cubic-bezier(0.22,1,0.36,1), opacity 1s, color 0.4s ease",
          }}
        >
          Synapse
        </a>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center justify-center gap-10 mt-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleClick(item.href)}
              className="relative font-medium px-2 py-1 transition-all duration-300 
                         text-white group-hover:text-[#1f2923] hover:text-[#6B8E23] group/item text-[1rem] tracking-wide"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6B8E23] group-hover/item:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden mt-5 p-2 text-white group-hover:text-[#1f2923] hover:text-[#6B8E23] transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm border-t border-gray-200">
          <div className="px-6 py-4 space-y-4 text-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className="block text-[#6B8E23] hover:text-[#4f6c19] font-medium relative group text-[1rem]"
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
