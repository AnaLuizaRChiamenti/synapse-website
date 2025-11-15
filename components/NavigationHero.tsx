"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from 'lucide-react'

export function NavigationHero() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [logoVisible, setLogoVisible] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLogoVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
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

  const closeAllMenus = () => {
    setIsOpen(false)
    setOpenDropdown(null)
  }

  const toggleMobileDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  return (
    <nav
      className="group relative transition-all duration-700 
      bg-gradient-to-b from-black/50 via-black/30 to-transparent 
      backdrop-blur-[3px] hover:from-[#f3f4ef]/85 hover:via-[#f3f4ef]/85 hover:to-[#f3f4ef]/85 hover:backdrop-blur-[5px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col items-center text-center">
        {/* LOGO - Added responsive font sizes */}
        <Link
          href="/"
          onClick={closeAllMenus}
          className="font-bold text-[#1f2923] hover:text-[#6B8E23] transition-all ease-[cubic-bezier(0.33,1,0.68,1)] drop-shadow-[0_3px_8px_rgba(0,0,0,0.4)]
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl sm:mt-8"
          style={{
            fontFamily: "var(--font-cinzel)",
            letterSpacing: "0.15em",
            transform: logoVisible ? "translateY(0)" : "translateY(-150%)",
            opacity: logoVisible ? 1 : 0,
            transition:
              "transform 1s cubic-bezier(0.22,1,0.36,1), opacity 1s, color 0.4s ease",
          }}
        >
          SYNAPSE
        </Link>

        {/* MENU DESKTOP - Responsive gap and breakpoint at lg */}
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-10 mt-2 sm:mt-3 relative flex-wrap">
          {navItems.map((item) =>
            item.subItems ? (
              <div
                key={item.label}
                className="relative group/item"
                onMouseEnter={() => {
                  if (dropdownTimeout) clearTimeout(dropdownTimeout)
                  setOpenDropdown(item.label)
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => setOpenDropdown(null), 150)
                  setDropdownTimeout(timeout)
                }}
              >
                <button
                  className="flex items-center gap-1 font-medium px-2 py-1 text-[#1f2923] hover:text-[#6B8E23] transition-all text-sm lg:text-base"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === item.label && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white shadow-xl rounded-lg border border-gray-200 p-3 z-50">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={closeAllMenus}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#e6f0db] hover:text-[#4f6c19] rounded-md transition-all"
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
                onClick={closeAllMenus}
                className="relative font-medium px-2 py-1 transition-all duration-300 
                           text-[#1f2923] hover:text-[#6B8E23] group/item text-sm lg:text-base tracking-wide"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#6B8E23] group-hover/item:w-full transition-all duration-300 ease-out" />
              </Link>
            )
          )}
        </div>

        {/* BOTÃO MOBILE - Shows at lg breakpoint instead of md */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden mt-3 sm:mt-5 p-2 text-white group-hover:text-[#1f2923] hover:text-[#6B8E23] transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] touch-manipulation"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MENU MOBILE - Added max-height, scroll, and touch optimization */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 max-h-[70vh] overflow-y-auto">
          <div className="px-4 sm:px-6 py-4 space-y-3 text-center">
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.label} className="touch-manipulation">
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="w-full flex justify-center items-center gap-2 text-[#6B8E23] font-medium hover:text-[#4f6c19] py-2 text-sm sm:text-base"
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
                    <div className="mt-2 space-y-2 pb-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={closeAllMenus}
                          className="block text-sm text-[#244017] hover:text-[#4f6c19] py-1 touch-manipulation"
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
                  onClick={closeAllMenus}
                  className="block text-[#6B8E23] hover:text-[#4f6c19] font-medium relative group py-2 text-sm sm:text-base touch-manipulation"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {item.label}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-[#6B8E23] group-hover:w-16 transition-all duration-300 ease-out" />
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
