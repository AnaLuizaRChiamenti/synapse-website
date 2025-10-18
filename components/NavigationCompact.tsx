"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function NavigationCompact() {
  const [isOpen, setIsOpen] = useState(false)

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
    <nav className="bg-white/95 backdrop-blur-md shadow-md transition-all duration-700 ease-out">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={() => handleClick("#home")}
          className="font-bold text-[#1f2923] hover:text-[#6B8E23] transition-all duration-700"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "3rem",
          }}
        >
          Synapse
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleClick(item.href)}
              className="relative font-medium text-[#000000] group transition-colors duration-300 hover:text-[#4f6c19]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6B8E23] group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#6B8E23] hover:text-[#4f6c19] transition-all"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
