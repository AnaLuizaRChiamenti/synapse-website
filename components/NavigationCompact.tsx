"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from 'lucide-react'

export function NavigationCompact() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navItems = [
    { href: "/#home", label: "Home" },
    { href: "/#sobre", label: "Sobre Nós" },
    {
      label: "Semiologia Neurológica",
      subItems: [
        { href: "/reflexos", label: "Reflexo" },
        { href: "/equilibrio", label: "Equilíbrio" },
        { href: "/coordenacao", label: "Coordenação" },
        { href: "/marcha", label: "Marcha" },
      ],
    },
    {
      label: "Review",
      subItems: [
        { href: "/atividades", label: "Atividades" },
        { href: "/escalas_extras", label: "Escalas e Extras" },
      ],
    },
    { href: "/#contato", label: "Contato" },
  ]

  const handleClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.substring(2)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
    setOpenDropdown(null)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md transition-all duration-700 ease-out">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* LOGO - Responsive */}
        <Link
          href="/"
          className="font-bold text-[#1f2923] hover:text-[#6B8E23] transition-all duration-700 hover:scale-105 text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:mt-2 md:mt-4 lg:mt-4"
          style={{
            fontFamily: "var(--font-cinzel)",
            letterSpacing: "0.1em",
          }}
        >
          SYNAPSE
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10 relative">
          {navItems.map((item) =>
            item.subItems ? (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center gap-1 font-medium text-[#000000] hover:text-[#4f6c19] transition-all text-sm xl:text-base"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                {/* DROPDOWN DESKTOP */}
                <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => handleClick(sub.href)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f0db] hover:text-[#4f6c19]"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className="relative font-medium text-[#000000] group transition-colors duration-300 hover:text-[#4f6c19] text-sm xl:text-base"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6B8E23] group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            )
          )}
        </div>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#6B8E23] hover:text-[#4f6c19] transition-all touch-manipulation"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE - Optimized for small screens */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-3 sm:px-6 py-3 sm:py-4 space-y-3 sm:space-y-4">
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label
                      )
                    }
                    className="w-full flex justify-between items-center text-[#6B8E23] hover:text-[#4f6c19] font-medium touch-manipulation py-2 text-sm sm:text-base"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <div className="mt-2 ml-3 sm:ml-4 space-y-2 border-l-2 border-[#6B8E23]/30 pl-2 sm:pl-3">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => handleClick(sub.href)}
                          className="block text-xs sm:text-sm text-[#244017] hover:text-[#4f6c19] py-1 touch-manipulation"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className="block text-[#6B8E23] hover:text-[#4f6c19] font-medium relative group py-2 touch-manipulation text-sm sm:text-base"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6B8E23] group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
