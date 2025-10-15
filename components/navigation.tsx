"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#testes", label: "Semiologia Neurológica" },
    { href: "#videos", label: "Vídeos" },
    { href: "#review", label: "Review" },
    { href: "#contato", label: "Contato" },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] 
        ${isScrolled ? "shadow-md backdrop-blur-md" : ""}
        ${
          isHovered
            ? "bg-[#DCE8D2]/95" // 👈 verde pastel no hover
            : isScrolled
            ? "bg-white/90"
            : "bg-gradient-to-b from-black/60 via-black/30 to-transparent"
        }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 xl:px-40">
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isScrolled ? "h-16 pt-3.5" : "pt-8 pb-4"
          }`}
        >
          <div
            className={`flex items-center justify-center md:justify-between transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isScrolled ? "flex-row" : "flex-col gap-8"
            }`}
          >
            <a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className={`font-bold transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isScrolled
                  ? "text-[#1f2923] hover:text-[#6B8E23]"
                  : "text-white hover:text-[#6B8E23]"
              } ${isScrolled ? "text-4xl" : "text-8xl md:text-9xl"}`}
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Synapse
            </a>

            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="relative text-[#000000] hover:text-[#4f6c19] font-medium group transition-colors duration-300"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6B8E23] group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#6B8E23] hover:text-[#4f6c19] transition-all duration-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden border-t border-gray-200 transition-all duration-500 ease-in-out ${
            isScrolled ? "bg-white" : "bg-white/95 backdrop-blur-sm"
          }`}
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
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
