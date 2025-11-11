"use client"

import { NavigationController } from "@/components/NavigationController"
import {
  Brain,
  Activity,
  ClipboardList,
  Target,
  FileSearch,
  Gauge,
  Ruler,
  ChevronRight,
  Download,
  Play,
  CheckCircle2,
} from "lucide-react"

export default function ReviewPage() {
  const escalas = [
    {
      sigla: "EVA",
      titulo: "Escala Visual Analógica da Dor",
      descricao:
        "Escala de 0 a 10 para intensidade de dor percebida (0 = sem dor; 10 = pior dor).",
      link: "#eva",
    },
    {
      sigla: "BERG",
      titulo: "Escala de Equilíbrio de Berg",
      descricao:
        "14 itens que avaliam equilíbrio funcional estático e dinâmico (0–56 pontos).",
      link: "#berg",
    },
    {
      sigla: "BORG",
      titulo: "Escala de Esforço Percebido de Borg",
      descricao:
        "Mede percepção subjetiva de esforço (6–20 clássico ou 0–10 CR10).",
      link: "#borg",
    },
    {
      sigla: "MRC",
      titulo: "MRC – Força Muscular / Sumscore",
      descricao:
        "Força manual em 6 grupos musculares bilaterais; soma 0–60 (Turan et al., 2020).",
      link: "#mrc",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <NavigationController />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E3F0E2] via-[#F0F5EF] to-white pt-32 pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto mt-32">
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1f2923] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Review
          </h1>

          <p
            className="text-lg sm:text-xl text-[#445345] max-w-3xl leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Exercícios de revisão, fluxogramas de diagnóstico e escalas essenciais para a avaliação clínica.
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-20 right-10 opacity-10">
          <Brain className="w-64 h-64 text-[#6B8E23]" strokeWidth={0.5} />
        </div>
      </section>

      {/* Exercícios de revisão */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Exercícios de revisão
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Bloco 20 perguntas */}
            <div className="bg-gradient-to-br from-[#6B8E23]/5 to-transparent p-8 rounded-2xl border-2 border-[#6B8E23]/20">
              <h3
                className="text-2xl sm:text-3xl font-bold text-[#6B8E23] mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Quiz de 20 perguntas
              </h3>
              <p className="text-[#445345] text-base sm:text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
                Teste seus conhecimentos com questões objetivas sobre reflexos, equilíbrio e semiotécnica.
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
                  <CheckCircle2 className="w-4 h-4 text-[#6B8E23]" /> Ver gabarito
                </a>
              </div>
            </div>

            {/* Bloco progresso */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-semibold text-[#1f2923] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                Seu progresso
              </h4>
              <p className="text-[#445345] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                Acompanhe o desempenho ao longo dos módulos.
              </p>
              <div className="w-full bg-[#6B8E23]/10 rounded-full h-3 mb-2 overflow-hidden">
                <div className="h-3 bg-[#6B8E23] w-[45%]" />
              </div>
              <span className="text-sm text-[#445345]">45% concluído</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fluxograma de diagnóstico */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <FileSearch className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Fluxograma de diagnóstico
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm space-y-6">
            <p className="text-[#445345] text-base sm:text-lg leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
              Utilize um roteiro visual para conduzir a hipótese diagnóstica em neurologia funcional. Conecte sinais e sintomas às escalas e aos testes adequados.
            </p>
            {/* <div className="flex flex-wrap gap-3">
              <a href="#fluxograma" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6B8E23] text-white">
                <Target className="w-4 h-4" /> Abrir fluxograma
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#6B8E23]/30 text-[#1f2923]">
                <Download className="w-4 h-4 text-[#6B8E23]" /> Baixar PDF
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Escalas */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Gauge className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Escalas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {escalas.map((e, i) => (
              <div key={i} className="bg-gradient-to-br from-[#6B8E23]/5 to-transparent p-8 rounded-2xl border-2 border-[#6B8E23]/20">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#6B8E23]" style={{ fontFamily: "var(--font-playfair)" }}>
                    {e.sigla} — {e.titulo}
                  </h3>
                  <Ruler className="w-6 h-6 text-[#6B8E23]" />
                </div>
                <p className="text-[#445345] text-base sm:text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
                  {e.descricao}
                </p>
                {/* <div className="flex flex-wrap gap-3">
                  <a href={e.link} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6B8E23] text-white">
                    <ChevronRight className="w-4 h-4" /> Abrir escala
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#6B8E23]/30 text-[#1f2923]">
                    <Download className="w-4 h-4 text-[#6B8E23]" /> Baixar modelo
                  </a>
                </div> */}
              </div>
            ))}
          </div>

          {/* Observação específica MRC */}
          <div id="mrc" className="mt-12 bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[#1f2923] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              Observação – MRC Sumscore
            </h3>
            <p className="text-[#445345]" style={{ fontFamily: "var(--font-poppins)" }}>
              O MRC-sumscore avalia a força global a partir de 6 grupos musculares bilaterais (abdução do ombro, flexão do cotovelo, extensão do punho, flexão do quadril, extensão do joelho e dorsiflexão do tornozelo), somando 0 a 60 pontos (Turan et al., 2020).
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
