"use client"

import { ReactNode } from "react"
import { NavigationController } from "@/components/NavigationController"
import { Brain, Activity, Footprints, ChevronRight, GitBranch, Target, Zap } from 'lucide-react'

type GaitPhaseItem = {
  number: number
  title: string
  bgColor: string
  textColor: string
  borderColor: string
  movements: string[]
}

const gaitPhasesData: GaitPhaseItem[] = [
  {
    number: 1,
    title: "Contato Inicial",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-300",
    movements: [
      "Apoio do calcanhar",
      "Flexão de quadril",
      "Extensão do joelho",
      "Dorsiflexão",
    ],
  },
  {
    number: 2,
    title: "Resposta à Carga",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    borderColor: "border-green-300",
    movements: [
      "Flexão de quadril e joelho",
      "Plantiflexão",
    ],
  },
  {
    number: 3,
    title: "Apoio Médio",
    bgColor: "bg-teal-50",
    textColor: "text-teal-700",
    borderColor: "border-teal-300",
    movements: [
      "Quadril neutro",
      "Extensão de joelho",
      "Dorsiflexão",
    ],
  },
  {
    number: 4,
    title: "Apoio Final",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-300",
    movements: [
      "Extensão de joelho e quadril",
      "Plantiflexão",
    ],
  },
  {
    number: 5,
    title: "Pré-balanço",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    borderColor: "border-orange-300",
    movements: [
      "Flexão de quadril",
      "Flexão de joelho (40°)",
      "Plantiflexão",
    ],
  },
  {
    number: 6,
    title: "Balanço Inicial",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-300",
    movements: [
      "Flexão de quadril",
      "Flexão de joelho (60°)",
      "Plantiflexão",
    ],
  },
  {
    number: 7,
    title: "Balanço Médio",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-300",
    movements: [
      "Flexão de quadril",
      "Flexão de joelho",
      "Tornozelo neutro",
    ],
  },
  {
    number: 8,
    title: "Balanço Final",
    bgColor: "bg-pink-50",
    textColor: "text-pink-700",
    borderColor: "border-pink-300",
    movements: [
      "Flexão de quadril",
      "Extensão de joelho",
      "Tornozelo neutro",
    ],
  },
]

type GaitPhaseCardProps = {
  number: number
  title: string
  bgColor: string
  textColor: string
  borderColor: string
  movements: string[]
}

const GaitPhaseCard = ({
  number,
  title,
  bgColor,
  textColor,
  borderColor,
  movements,
}: GaitPhaseCardProps) => (
  <div className={`flex flex-col ${bgColor} rounded-xl shadow-md border-2 ${borderColor} p-6 transition duration-300 hover:shadow-lg`}>
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-12 h-12 rounded-full bg-white border-2 ${borderColor} flex items-center justify-center`}>
        <span className={`text-2xl font-bold ${textColor}`}>{number}</span>
      </div>
      <div className="flex-1">
        <h3 className={`text-xl font-bold ${textColor}`}>
          {title}
        </h3>
        <p className="text-xs text-gray-600 mt-1">Fase {number} de 8</p>
      </div>
    </div>

    <div className="bg-white/70 rounded-lg p-4 border border-gray-200">
      <ul className="space-y-2">
        {movements.map((movement, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
            <ChevronRight className="w-4 h-4 text-[#6B8E23] mt-0.5 flex-shrink-0" />
            <span>{movement}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default function MarchaFuncionalPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationController />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E3F0E2] via-[#F0F5EF] to-white pt-32 pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto md:mt-14 lg:mt-32">
          <div className="flex items-center gap-2 text-[#6B8E23] mb-4">
            <Footprints className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Avaliação Neurofuncional
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2923] mb-6 leading-tight">
            Marcha Funcional
          </h1>
        </div>

        <div className="absolute top-20 right-10 opacity-10">
          <Brain className="w-64 h-64 text-[#6B8E23]" strokeWidth={0.5} />
        </div>
      </section>

       {/* O que é? */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]" style={{ fontFamily: "var(--font-playfair)" }}>
              O que é?
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-[#445345] text-base sm:text-lg leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
              Marcha Funcional é o padrão de locomoção humana realizado ao caminhar. Ela envolve uma sequência coordenada de movimentos dos membros inferiores, tronco e pelve, permitindo que a pessoa se desloque de um ponto ao outro de forma eficiente, segura e funcional.
              <br /><br />
              Os objetivos da avaliação instrumental da marcha são: identificar alterações, compensações e limitações que influenciam na funcionalidade, compreender os mecanismos subjacentes e a etiologia dos distúrbios, obter parâmetros quantitativos e qualitativos da marcha, para assim, definir métodos terapêuticos adequados e acompanhar a evolução da doença.             
              <br /><br />
              Para facilitar a avaliação, a marcha foi fragmentada em fases, o que revela como o paciente caminha e quais estruturas estão contribuindo ou prejudicando esse padrão.
            </p>
          </div>
        </div>
      </section>

      {/* Fragmentação em Fases */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]">
              Fases do Ciclo da Marcha
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#E3F0E2] to-[#F0F5EF] p-8 sm:p-10 rounded-2xl border-2 border-[#6B8E23]/20 shadow-sm mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Para facilitar a avaliação, a marcha foi fragmentada em fases, o que revela como o 
              paciente caminha e quais estruturas estão contribuindo ou prejudicando esse padrão.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/80 p-4 rounded-lg border border-[#6B8E23]/20">
                <p className="font-bold text-[#6B8E23] mb-1">Fase de Apoio</p>
                <p className="text-sm text-gray-600">Fases 1-5 (aproximadamente 60% do ciclo)</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg border border-[#6B8E23]/20">
                <p className="font-bold text-[#6B8E23] mb-1">Fase de Balanço</p>
                <p className="text-sm text-gray-600">Fases 6-8 (aproximadamente 40% do ciclo)</p>
              </div>
            </div>
          </div>

          {/* Grid das 8 Fases */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {gaitPhasesData.map((phase) => (
              <GaitPhaseCard
                key={phase.number}
                number={phase.number}
                title={phase.title}
                bgColor={phase.bgColor}
                textColor={phase.textColor}
                borderColor={phase.borderColor}
                movements={phase.movements}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ADIÇÃO: literatura */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-[#445345] text-base sm:text-lg leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
              A literatura demonstra de forma consistente que a marcha é sensível a diferentes doenças, apresentando padrões específicos que podem auxiliar no diagnóstico, monitoramento e tratamento. A análise quantitativa da marcha é uma ferramenta valiosa para diferenciar condições clínicas e orientar intervenções personalizadas.
            </p>
          </div>
        </div>
      </section>

      {/* ADIÇÃO: tabela de doenças/condições */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]" style={{ fontFamily: "var(--font-playfair)" }}>
              Doença/Condição
            </h2>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
            <table className="min-w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Doença/Condição
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Alterações Características da Marcha
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-5 text-[#1f2923] font-medium">
                    Parkinson
                  </td>
                  <td className="px-6 py-5 text-[#445345]">
                    Marcha lenta, passos curtos, arrastados, redução do balanço dos braços, congelando
                    <div className="mt-2 text-sm text-blue-700 break-all">
                      <a
                        href="https://www.mdpi.com/1424-8220/25/2/338"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:opacity-80"
                      >
                        https://www.mdpi.com/1424-8220/25/2/338
                      </a>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5 text-[#1f2923] font-medium">
                    Hemiplegia (pós-AVC)
                  </td>
                  <td className="px-6 py-5 text-[#445345]">
                    Assimetria, diminuição da flexão do joelho/tornozelo no lado afetado, apoio prolongado no lado sadio
                    <div className="mt-2 text-sm text-blue-700 break-all">
                      <a
                        href="https://linkinghub.elsevier.com/retrieve/pii/S0003999319307427"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:opacity-80"
                      >
                        https://linkinghub.elsevier.com/retrieve/pii/S0003999319307427
                      </a>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5 text-[#1f2923] font-medium">
                    Ataxia cerebelar
                  </td>
                  <td className="px-6 py-5 text-[#445345]">
                    Marchar
                    <div className="mt-2 text-sm text-blue-700 break-all">
                      <a
                        href="https://pn.bmj.com/content/24/1/11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:opacity-80"
                      >
                        https://pn.bmj.com/content/24/1/11
                      </a>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5 text-[#1f2923] font-medium">
                    Doença de Huntington
                  </td>
                  <td className="px-6 py-5 text-[#445345]">
                    Movimentos involuntários, passos ir
                    <div className="mt-2 text-sm text-blue-700 break-all">
                      <a
                        href="https://ieeexplore.ieee.org/document/9376702"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:opacity-80"
                      >
                        https://ieeexplore.ieee.org/document/9376702
                      </a>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5 text-[#1f2923] font-medium">
                    Esclerose Múltipla
                  </td>
                  <td className="px-6 py-5 text-[#445345]">
                    Redução da velocidade, aumento do tempo de duplo apoio, assimetria, variabilidade
                    <div className="mt-2 text-sm text-blue-700 break-all">
                      <a
                        href="https://linkinghub.elsevier.com/retrieve/pii/S2211034817300123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:opacity-80"
                      >
                        https://linkinghub.elsevier.com/retrieve/pii/S2211034817300123
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
