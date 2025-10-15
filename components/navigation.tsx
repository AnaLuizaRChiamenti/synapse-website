"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 xl:px-40">
        <div  
          className={`transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]  ${isScrolled ? "h-16 pt-3.5" : "pt-8 pb-4"}`}
        >
          <div
            className={`flex items-center transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isScrolled ? "flex-row justify-between" : "flex-col gap-8 justify-center"
            }`}
          >
            <a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className={`font-bold text-[#1f2923] transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#6B8E23] ${
                isScrolled ? "text-2xl" : "text-5xl md:text-7xl"
              }`}
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Synapse
            </a>

            <div
              className={`hidden md:flex items-center gap-10 transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]`}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="relative text-[#1f2923] transition-colors duration-300 font-medium group"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6B8E23] transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 text-[#1f2923] transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#6B8E23] ${
                isScrolled ? "relative" : "absolute top-8 right-6"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
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
                className="block text-[#333333] hover:text-[#6B8E23] transition-colors font-medium relative group"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6B8E23] transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
