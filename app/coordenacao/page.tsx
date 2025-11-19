"use client"

import { ReactNode } from "react"
import { NavigationController } from "@/components/NavigationController"
import { Brain, Activity, Hand, Target, GitBranch, Zap, Eye, RefreshCw } from 'lucide-react'

type TestItem = {
  number: number
  title: string
  icon: React.ComponentType<{ className?: string }>
  bgIcon: string
  iconColor: string
  description: string
  objective: string
  alterations: string[]
}

const coordinationTestsData: TestItem[] = [
  {
    number: 1,
    title: "Índex-Índex",
    icon: Hand,
    bgIcon: "bg-blue-100",
    iconColor: "text-blue-600",
    description:
      "Com os dois ombros abduzidos à 90º, paciente é instruído a trazer as mãos em direção à linha média e aproximar os dedos indicadores, realizando repetidas vezes e o mais rápido possível.",
    objective: "Avaliar a precisão, velocidade, tremor intencional e dismetria.",
    alterations: [
      "Erro ao alcançar o alvo",
      "Tremor ao se aproximar do dedo",
      "Movimentos descoordenados",
    ],
  },
  {
    number: 2,
    title: "Índex-Terapeuta (Índex-Índex do examinador)",
    icon: Target,
    bgIcon: "bg-green-100",
    iconColor: "text-green-600",
    description:
      "O terapeuta posiciona o dedo indicador à frente do paciente, variando o local algumas vezes. O paciente deve tocar a ponta do dedo do terapeuta repetidamente.",
    objective: "Observar coordenação olho-mão, ajuste do movimento ao alvo, fluidez e capacidade de corrigir trajetórias.",
    alterations: [
      "Atraso na resposta",
      "Desvio do trajeto",
      "Decomposição do movimento",
      "Tremor",
    ],
  },
  {
    number: 3,
    title: "Índex-Nariz",
    icon: Eye,
    bgIcon: "bg-teal-100",
    iconColor: "text-teal-600",
    description:
      "O paciente é instruído a tocar a ponta do próprio nariz com o dedo indicador repetidas vezes e o mais rápido que conseguir.",
    objective: "Avaliar tremor intencional, dismetria e regularidade do movimento.",
    alterations: [
      "Dificuldade para encontrar o nariz",
      "Tremores ao se aproximar do alvo",
      "Lentidão ou falta de ritmo",
    ],
  },
  {
    number: 4,
    title: "Prono-supinação",
    icon: RefreshCw,
    bgIcon: "bg-yellow-100",
    iconColor: "text-yellow-600",
    description:
      "O paciente realiza movimentos rápidos de alternância entre pronação e supinação da mão (girar a mão para baixo e para cima) sobre uma superfície ou no ar.",
    objective: "Avaliar movimentos alternados rápidos (MAR), investigando disdiadococinesia.",
    alterations: [
      "Lentidão",
      "Perda de ritmo",
      "Dificuldade para alternar os movimentos",
      "Amplitude reduzida",
    ],
  },
  {
    number: 5,
    title: "Calcanhar-Joelho",
    icon: Activity,
    bgIcon: "bg-purple-100",
    iconColor: "text-purple-600",
    description:
      "Em decúbito dorsal, o paciente posiciona o calcanhar de um pé sobre o joelho da perna contrária e desliza o calcanhar pela canela até o tornozelo.",
    objective: "Avaliar a coordenação dos membros inferiores, trajetória, controle postural e presença de ataxia.",
    alterations: [
      "Dificuldade para manter o calcanhar sobre a canela",
      "Trajeto irregular",
      "Movimentos trêmulos",
      "Perda do controle durante a descida",
    ],
  },
  {
    number: 6,
    title: "Pinça Fina",
    icon: Hand,
    bgIcon: "bg-indigo-100",
    iconColor: "text-indigo-600",
    description:
      "O paciente é orientado a pegar grãos de feijão (ou outros objetos bem pequenos) usando apenas a ponta dos dedos (polegar e indicador). Pode-se solicitar que pegue um feijão por vez, transfira os feijões de um recipiente para outro, ou organize/alinhe os grãos em uma superfície.",
    objective: "Avaliar movimentos precisos entre o polegar e o indicador, fundamentais para tarefas como abotoar, escrever e manipular objetos pequenos.",
    alterations: [
      "Falta de precisão do movimento",
      "Déficit de controle e força da pinça",
      "Presença de tremores",
      "Lentidão ou dificuldade em iniciar o movimento",
      "Compensações (uso de toda a mão em vez da pinça)",
    ],
  },
  {
    number: 7,
    title: "Pinça Grossa",
    icon: Zap,
    bgIcon: "bg-pink-100",
    iconColor: "text-pink-600",
    description:
      "O paciente manipula uma bola pequena ou média, realizando movimentos como: apertar a bola (força de preensão), pegar e soltar repetidamente, transferir a bola de uma mão para a outra, ou manter a bola com firmeza usando toda a mão.",
    objective: "Avaliar movimentos mais amplos que envolvem toda a mão, incluindo músculos intrínsecos e extrínsecos, usados para segurar objetos maiores.",
    alterations: [
      "Déficit de força de preensão",
      "Instabilidade do punho",
      "Falta de coordenação entre dedos e palma",
      "Déficit de controle ao pegar e soltar",
      "Presença de dor, tremor ou fadiga",
    ],
  },
]

type TestCardProps = {
  number: number
  title: string
  icon: React.ComponentType<{ className?: string }>
  bgIcon: string
  iconColor: string
  description: string
  objective: string
  alterations: string[]
}

const TestCard = ({
  number,
  title,
  icon: Icon,
  bgIcon,
  iconColor,
  description,
  objective,
  alterations,
}: TestCardProps) => (
  <div className="flex flex-col bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition duration-300 hover:shadow-xl">
    <div className="flex items-center gap-3 mb-4">
      <div className={`p-3 rounded-full ${bgIcon}`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className={`text-xl font-bold ${iconColor}`}>{number}.</span>
          <h3 className="text-lg sm:text-xl font-extrabold text-gray-800">
            {title}
          </h3>
        </div>
      </div>
    </div>

    <div className="flex-1 flex flex-col space-y-4">
      <div>
        <h4 className="font-bold text-gray-700 text-sm mb-2">Como é realizado:</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="bg-[#E3F0E2] rounded-lg p-4 border border-[#6B8E23]/20">
        <h4 className="font-bold text-[#6B8E23] text-sm mb-2">Objetivo:</h4>
        <p className="text-sm text-gray-700">{objective}</p>
      </div>

      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
        <h4 className="font-bold text-red-700 text-sm mb-2">Alterações comuns:</h4>
        <ul className="space-y-1">
          {alterations.map((alt, idx) => (
            <li key={idx} className="text-sm text-red-600 flex items-start gap-2">
              <span className="text-red-400 mt-1">•</span>
              <span>{alt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default function CoordenacaoMotoraPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationController />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E3F0E2] via-[#F0F5EF] to-white pt-32 pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto md:mt-14 lg:mt-32">
          <div className="flex items-center gap-2 text-[#6B8E23] mb-4">
            <Brain className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Avaliação Neurofuncional
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2923] mb-6 leading-tight">
            Coordenação Motora
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
              Coordenação motora é a capacidade do corpo de realizar movimentos com precisão e harmonia, através da integração entre o cérebro, músculos e articulações. Ela é dividida em dois tipos principais: a grossa, que envolve movimentos amplos com músculos maiores (como correr e pular), e a fina, que utiliza músculos menores para tarefas delicadas (como escrever e abotoar). 
              <br /><br />
              A avaliação da coordenação motora na fisioterapia envolve observar a capacidade do paciente de realizar movimentos precisos, controlados, rítmicos e organizados, analisando a integração entre os sistemas neurológico, sensorial e motor. Durante o exame, o fisioterapeuta verifica a qualidade dos movimentos, a presença de tremores e de movimentos involuntários, além de possíveis sinergias anormais. Também são avaliadas a velocidade, a fluidez e a habilidade do paciente para iniciar ou interromper um movimento de forma adequada.
              <br /><br />
              O profissional observa ainda sinais de alterações específicas, como dismetria (erro na precisão do movimento), disdiadococinesia (dificuldade em alternar movimentos rápidos), tremor intencional, ataxia, atraso na execução das ações e decomposição do movimento em etapas menores, indicativos de prejuízo na coordenação.
              <br /><br />
            </p>
          </div>
        </div>
      </section>

      {/* Avaliação na Fisioterapia */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-[#6B8E23]/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]">
              Avaliação na Fisioterapia
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-2xl border-2 border-[#6B8E23]/20 shadow-sm space-y-6">
            <p className="text-gray-700 leading-relaxed">
              A avaliação da coordenação motora na fisioterapia envolve observar a capacidade do paciente 
              de realizar movimentos precisos, controlados, rítmicos e organizados, analisando a integração 
              entre os sistemas neurológico, sensorial e motor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#E3F0E2] p-5 rounded-lg border border-[#6B8E23]/20">
                <h3 className="font-bold text-[#1f2923] mb-3">Durante o Exame:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6B8E23] mt-1">✓</span>
                    <span>Qualidade dos movimentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6B8E23] mt-1">✓</span>
                    <span>Presença de tremores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6B8E23] mt-1">✓</span>
                    <span>Movimentos involuntários</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6B8E23] mt-1">✓</span>
                    <span>Sinergias anormais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6B8E23] mt-1">✓</span>
                    <span>Velocidade e fluidez</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6B8E23] mt-1">✓</span>
                    <span>Habilidade de iniciar/interromper movimentos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h3 className="font-bold text-red-700 mb-3">Sinais de Alterações:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Dismetria:</strong> Erro na precisão do movimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Disdiadococinesia:</strong> Dificuldade em alternar movimentos rápidos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Tremor intencional:</strong> Tremor ao realizar movimento direcionado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Ataxia:</strong> Falta de coordenação muscular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Atraso na execução</strong> das ações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Decomposição do movimento</strong> em etapas menores</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testes de Coordenação */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]">
              Testes de Avaliação
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {coordinationTestsData.map((test) => (
              <TestCard
                key={test.number}
                number={test.number}
                title={test.title}
                icon={test.icon}
                bgIcon={test.bgIcon}
                iconColor={test.iconColor}
                description={test.description}
                objective={test.objective}
                alterations={test.alterations}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Nota Clínica */}
      {/* <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-[#6B8E23]/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border-2 border-[#6B8E23]/20 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-[#6B8E23]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1f2923] mb-3">
                  Importância Clínica
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A avaliação sistemática da coordenação motora através destes testes permite ao 
                  fisioterapeuta identificar déficits neurológicos, planejar intervenções específicas 
                  e monitorar a evolução do paciente. Os testes avaliam tanto a coordenação grossa 
                  quanto a fina, fornecendo informações essenciais sobre a integridade do sistema 
                  nervoso central e periférico, além de orientar estratégias terapêuticas para 
                  melhorar a funcionalidade e independência nas atividades de vida diária.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
