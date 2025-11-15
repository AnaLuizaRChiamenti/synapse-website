"use client"

import { NavigationController } from "@/components/NavigationController"
import {
  Brain,
  Activity,
  ClipboardList,
  FileSearch,
  Play,
  CheckCircle2,
} from "lucide-react"
import { useState } from "react"

export default function AtividadesPage() {
  const [escalaSelecionada, setEscalaSelecionada] = useState<null>(null)
  const [mostrarFluxograma, setMostrarFluxograma] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <NavigationController />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E3F0E2] via-[#F0F5EF] to-white pt-32 pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto mt-32">
          <div className="flex items-center gap-2 text-[#6B8E23] mb-4">
            <Activity className="w-5 h-5" />
            <span
              className="text-sm font-medium tracking-wide uppercase"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Avaliação Neurofuncional
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-[#1f2923] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Review — Atividades
          </h1>

          <p
            className="text-lg sm:text-xl text-[#445345] max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Exercícios de revisão e materiais interativos para fixar os
            principais conceitos de semiologia neurológica.
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-20 right-10 opacity-10">
          <Brain className="w-64 h-64 text-[#6B8E23]" strokeWidth={0.5} />
        </div>
      </section>

      {/* Exercícios de revisão */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Exercícios de revisão
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Bloco 20 perguntas */}
            <div className="bg-gradient-to-br from-[#6B8E23]/5 to-transparent p-8 rounded-2xl border-2 border-[#6B8E23]/20">
              <h3
                className="text-1xl sm:text-3xl font-bold text-[#6B8E23] mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Quiz de 20 perguntas
              </h3>
              <p
                className="text-[#445345] text-base sm:text-lg leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Teste seus conhecimentos com questões objetivas sobre reflexos,
                equilíbrio e semiotécnica.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#quiz"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6B8E23] text-white hover:brightness-110 transition-all"
                >
                  <Play className="w-4 h-4" /> Iniciar quiz
                </a>
                <a
                  href="#gabarito"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#6B8E23]/30 text-[#1f2923]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#6B8E23]" /> Ver
                  gabarito
                </a>
              </div>
            </div>

            {/* Bloco progresso */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h4
                className="text-xl font-semibold text-[#1f2923] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Seu progresso
              </h4>
              <p
                className="text-[#445345] mb-4"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Acompanhe o desempenho ao longo dos módulos.
              </p>
              <div className="w-full bg-[#6B8E23]/10 rounded-full h-3 mb-2 overflow-hidden">
                <div className="h-3 bg-[#6B8E23] w-[45%]" />
              </div>
              <span className="text-sm text-[#445345]">
                45% concluído (exemplo estático)
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
