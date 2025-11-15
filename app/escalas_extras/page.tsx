"use client"

import { useState } from "react"
import { NavigationController } from "@/components/NavigationController"
import { Brain, Activity, Gauge, Ruler, ClipboardList, X, GitBranch } from 'lucide-react'
import Image from "next/image"

type Escala = {
  sigla: string
  titulo: string
  descricao: string
  link: string
  imagem?: string
}

export default function EscalasExtrasPage() {
  const [escalaSelecionada, setEscalaSelecionada] = useState<Escala | null>(null)

  const escalas: Escala[] = [
    {
      sigla: "EVA",
      titulo: "Escala Visual Analógica da Dor",
      descricao:
        "Escala de 0 a 10 para intensidade de dor percebida (0 = sem dor; 10 = pior dor).",
      link: "#eva",
      imagem: "/escala_eva.jpg",
    },
    {
      sigla: "BERG",
      titulo: "Escala de Equilíbrio de Berg",
      descricao:
        "14 itens que avaliam equilíbrio funcional estático e dinâmico (0–56 pontos).",
      link: "#berg",
      imagem: "/escala_berg.jpg", // se não tiver imagem ainda, pode remover
    },
    {
      sigla: "BORG",
      titulo: "Escala de Esforço Percebido de Borg",
      descricao:
        "Mede percepção subjetiva de esforço (6–20 clássico ou 0–10 CR10).",
      link: "#borg",
      imagem: "/borg.jpg",
    },
    {
      sigla: "MRC",
      titulo: "MRC – Força Muscular / Sumscore",
      descricao:
        "O Medical Research Council (MRC)-sumscore avalia a força muscular global. A força manual de seis grupos musculares (abdução do ombro, flexão do cotovelo, extensão do punho, flexão do quadril, extensão do joelho e dorsiflexão do tornozelo) é avaliada em ambos os lados usando a escala MRC. A soma das pontuações fornece o MRC-sumscore, variando de 0 a 60.(Turan et al., 2020)",
      link: "#mrc",
      imagem: "/escala_mrc.jpg",
    },
  ]

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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2923] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Review — Escalas e Extras
          </h1>

          <p
            className="text-lg sm:text-xl text-[#445345] max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Escalas essenciais e materiais complementares para quantificar dor,
            equilíbrio, esforço e força muscular na prática clínica.
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-20 right-10 opacity-10">
          <Brain className="w-64 h-64 text-[#6B8E23]" strokeWidth={0.5} />
        </div>
      </section>

      {/* Fluxograma de Diagnóstico */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-[#6B8E23]/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Fluxograma de Diagnóstico
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-2xl border-2 border-[#6B8E23]/20 shadow-sm">
            <p
              className="text-base sm:text-lg text-[#445345] leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              O fluxograma de diagnóstico neurofuncional organiza a avaliação clínica de forma estruturada, 
              permitindo identificar déficits neurológicos e funcionais através de um processo lógico e sequencial.
            </p>

{/*             <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6B8E23] text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-[#1f2923] mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Avaliação Inicial
                  </h3>
                  <p
                    className="text-[#445345]"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Anamnese completa, identificação de queixas principais e histórico neurológico.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6B8E23] text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-[#1f2923] mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Testes Reflexos
                  </h3>
                  <p
                    className="text-[#445345]"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Avaliação de reflexos profundos e superficiais para identificar lesões no sistema nervoso.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6B8E23] text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-[#1f2923] mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Avaliação de Equilíbrio
                  </h3>
                  <p
                    className="text-[#445345]"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Testes estáticos e dinâmicos para avaliar controle postural e risco de quedas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6B8E23] text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-[#1f2923] mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Aplicação de Escalas
                  </h3>
                  <p
                    className="text-[#445345] mb-3"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Quantificação objetiva através de instrumentos validados:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6B8E23] font-bold">•</span>
                      <span className="text-[#445345]" style={{ fontFamily: "var(--font-poppins)" }}>
                        <strong>EVA:</strong> Intensidade da dor
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6B8E23] font-bold">•</span>
                      <span className="text-[#445345]" style={{ fontFamily: "var(--font-poppins)" }}>
                        <strong>BERG:</strong> Equilíbrio funcional
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6B8E23] font-bold">•</span>
                      <span className="text-[#445345]" style={{ fontFamily: "var(--font-poppins)" }}>
                        <strong>BORG:</strong> Percepção de esforço
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#6B8E23] font-bold">•</span>
                      <span className="text-[#445345]" style={{ fontFamily: "var(--font-poppins)" }}>
                        <strong>MRC:</strong> Força muscular global
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-[#1f2923] mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Diagnóstico e Conduta
                  </h3>
                  <p
                    className="text-[#445345]"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Síntese dos achados, estabelecimento de diagnóstico fisioterapêutico e definição do plano de tratamento.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#6B8E23]/5 rounded-xl border border-[#6B8E23]/20">
              <p
                className="text-sm text-[#445345] italic"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <strong>Importante:</strong> Este fluxograma é uma ferramenta orientativa. 
                A ordem e profundidade de cada etapa devem ser adaptadas conforme o quadro clínico do paciente.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Escalas */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Gauge className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Escalas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {escalas.map((e, i) => (
              <button
                key={i}
                type="button"
                onClick={() => e.imagem && setEscalaSelecionada(e)}
                className="text-left bg-gradient-to-br from-[#6B8E23]/5 to-transparent p-6 sm:p-8 rounded-2xl border-2 border-[#6B8E23]/20 hover:border-[#6B8E23]/50 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#6B8E23]/60"
              >
                {/* Miniatura: não precisa mostrar o texto da escala inteiro aqui */}
                {e.imagem && (
                  <div className="relative w-full h-40 sm:h-52 lg:h-64 mb-4 rounded-xl overflow-hidden bg-[#E5EEDC]">
                    <Image
                      src={e.imagem || "/placeholder.svg"}
                      alt={`Representação da escala ${e.sigla}`}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                )}

                <div className="flex items-start justify-between mb-2">
                  <h3
                    className="text-1xl sm:text-2xl font-bold text-[#6B8E23]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {e.sigla} — {e.titulo}
                  </h3>
                  <Ruler className="w-6 h-6 text-[#6B8E23]" />
                </div>

                <p
                  className="text-[#445345] text-base sm:text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {e.descricao}
                </p>

                <p
                  className="mt-3 text-sm text-[#6B8E23] underline"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Clique para ver a escala em tamanho maior
                </p>
              </button>
            ))}
          </div>

          {/* Observação específica MRC */}
          <div
            id="mrc"
            className="mt-12 bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-2xl border border-gray-100"
          >
            <h3
              className="text-1xl font-bold text-[#1f2923] mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Observação – MRC Sumscore
            </h3>
            <p
              className="text-[#445345]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              O MRC-sumscore avalia a força global a partir de 6 grupos
              musculares bilaterais (abdução do ombro, flexão do cotovelo,
              extensão do punho, flexão do quadril, extensão do joelho e
              dorsiflexão do tornozelo), somando 0 a 60 pontos (Turan et al.,
              2020).
            </p>
          </div>
        </div>
      </section>

      {/* Materiais extras */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-1xl sm:text-2xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Materiais extras
            </h2>
          </div>
          <p
            className="text-[#445345] max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Espaço reservado para anexar PDFs, modelos de ficha, roteiros de
            anamnese ou outros materiais complementares que você quiser
            adicionar.
          </p>
        </div>
      </section>

      {/* MODAL DA ESCALA */}
      {escalaSelecionada && escalaSelecionada.imagem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setEscalaSelecionada(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-3 right-3 z-10 rounded-full bg-black/60 hover:bg-black/80 p-1 text-white"
              onClick={() => setEscalaSelecionada(null)}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black">
              <Image
                src={escalaSelecionada.imagem || "/placeholder.svg"}
                alt={`Escala ${escalaSelecionada.sigla} completa`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <div className="p-4 sm:p-6">
              <h3
                className="text-xl sm:text-2xl font-bold text-[#1f2923] mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {escalaSelecionada.sigla} — {escalaSelecionada.titulo}
              </h3>
              <p
                className="text-sm sm:text-base text-[#445345]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {escalaSelecionada.descricao}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
