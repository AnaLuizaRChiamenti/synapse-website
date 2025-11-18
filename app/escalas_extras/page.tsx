"use client"

import { ReactNode } from "react"
import { NavigationController } from "@/components/NavigationController"
import {
  Brain,
  Activity,
  Gauge,
  ClipboardList,
  GitBranch,
  Scale as ScaleIcon,
  Heart,
  Target,
  Smile,
} from "lucide-react"

type ScaleItem = {
  title: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
  bgIcon: string
  iconColor: string
  description: string
  content: ReactNode
}

// Conteúdo estruturado das escalas para garantir a padronização e o detalhamento
const scaleData: ScaleItem[] = [
  {
    title: "Escala Visual Analógica (EVA)",
    subtitle: "Intensidade da Dor",
    icon: Smile,
    bgIcon: "bg-red-100",
    iconColor: "text-red-500",
    description:
      "Avalia a dor percebida pelo paciente em uma escala de 0 (sem dor) a 10 (pior dor imaginável).",
    content: (
      <div className="flex flex-col space-y-2 mt-4 text-sm">
        <div className="p-2 rounded-lg bg-green-100 border-l-4 border-green-500">
          <span className="font-bold">0 - 3 (Leve):</span> Dor discreta, geralmente não limitante. O
          paciente pode ignorá-la.
        </div>
        <div className="p-2 rounded-lg bg-yellow-100 border-l-4 border-yellow-500">
          <span className="font-bold">4 - 7 (Moderada):</span> Dor que interfere em atividades
          cotidianas, requerendo medicação.
        </div>
        <div className="p-2 rounded-lg bg-red-100 border-l-4 border-red-500">
          <span className="font-bold">8 - 10 (Intensa/Máxima):</span> Dor incapacitante que impede a
          realização de atividades. Necessidade de intervenção imediata.
        </div>
      </div>
    ),
  },
  {
    title: "Escala de Borg (RPE - CR10)",
    subtitle: "Esforço Percebido",
    icon: Heart,
    bgIcon: "bg-blue-100",
    iconColor: "text-blue-600",
    description:
      "Mede o nível de esforço e exaustão durante a atividade física, utilizando a versão simplificada de 1 a 10 (CR10).",
    content: (
      <div className="flex flex-col space-y-2 mt-4 text-sm">
        <p className="font-bold text-lg text-gray-800 mb-1">Graus de Esforço (CR10):</p>

        <div className="p-2 rounded-lg bg-red-100 border-l-4 border-red-600">
          <span className="font-bold text-red-600">10 / Máximo Esforço:</span> É quase impossível
          continuar. Completamente sem fôlego, incapaz de falar. Não é possível manter por mais
          tempo.
        </div>
        <div className="p-2 rounded-lg bg-red-100 border-l-4 border-red-500">
          <span className="font-bold text-red-500">9 / Muito Difícil:</span> Muito difícil manter a
          intensidade do exercício. Mal consigo respirar e falar apenas algumas palavras.
        </div>
        <div className="p-2 rounded-lg bg-yellow-100 border-l-4 border-yellow-600">
          <span className="font-bold text-yellow-600">7-8 / Vigorosa:</span> No limite do
          desconfortável. Falta de ar, consigo falar uma frase.
        </div>
        <div className="p-2 rounded-lg bg-green-100 border-l-4 border-green-600">
          <span className="font-bold text-green-600">4-6 / Moderada:</span> Respirar profundo, posso
          manter uma conversa curta. Ainda um pouco confortável, mas cada vez mais desafiador.
        </div>
        <div className="p-2 rounded-lg bg-blue-100 border-l-4 border-blue-600">
          <span className="font-bold text-blue-600">2-3 / Leve:</span> Parece que podemos manter
          durante horas. Fácil de respirar e manter uma conversa.
        </div>
        <div className="p-2 rounded-lg bg-indigo-100 border-l-4 border-indigo-600">
          <span className="font-bold text-indigo-600">1 / Muito Leve:</span> Quase nenhum esforço,
          mas mais do que dormir, ver TV, etc.
        </div>

        <p className="mt-3 text-xs text-gray-500 border-t pt-2">
          Nota: A escala original de Borg vai de 6 a 20. Esta é a versão simplificada de 1 a 10
          (CR10).
        </p>
      </div>
    ),
  },
  {
    title: "Escala de Equilíbrio de Berg",
    subtitle: "Avaliação da Funcionalidade do Equilíbrio",
    icon: ScaleIcon,
    bgIcon: "bg-teal-100",
    iconColor: "text-teal-600",
    description:
      "Avalia o desempenho do equilíbrio e o risco de queda através de 14 tarefas funcionais, pontuadas de 0 a 4.",
    content: (
      <div className="flex flex-col space-y-3 mt-4 text-sm">
        <p className="font-bold text-lg text-teal-700">Pontuação Total: 0 a 56</p>

        <div className="p-3 rounded-lg bg-teal-50 border-l-4 border-teal-500">
          <p className="font-bold text-teal-700 mb-2">
            Critérios de Pontuação por Item (Exemplo - Sentado para Em Pé):
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>
              <span className="font-semibold">4:</span> Capaz de levantar-se sem usar as mãos e
              estabilizar-se de forma independente.
            </li>
            <li>
              <span className="font-semibold">3:</span> Capaz de levantar-se independentemente, mas
              usa as mãos.
            </li>
            <li>
              <span className="font-semibold">2:</span> Capaz de levantar-se usando as mãos após
              tentativas.
            </li>
            <li>
              <span className="font-semibold">1:</span> Necessita de ajuda mínima para levantar-se
              ou estabilizar-se.
            </li>
            <li>
              <span className="font-semibold">0:</span> Necessita de ajuda moderada ou máxima para
              levantar-se.
            </li>
          </ul>
        </div>

        <div className="p-3 rounded-lg bg-gray-50 border-l-4 border-gray-300">
          <p className="font-bold text-gray-700 mb-2">Significado da Pontuação Total:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>
              <span className="font-semibold">45 - 56:</span> Baixo risco de queda.
            </li>
            <li>
              <span className="font-semibold">21 - 44:</span> Risco de queda moderado
              (assistência/supervisão pode ser necessária).
            </li>
            <li>
              <span className="font-semibold">0 - 20:</span> Alto risco de queda.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Medical Research Council (MRC)",
    subtitle: "Avaliação da Força Muscular",
    icon: Target,
    bgIcon: "bg-indigo-100",
    iconColor: "text-indigo-600",
    description:
      "Avalia a força muscular de 6 grupos musculares em uma escala ordinal de 0 a 5. Uma pontuação total de 60 indica força normal.",
    content: (
      <div className="flex flex-col space-y-3 mt-4 text-sm">
        <div className="p-3 rounded-lg bg-indigo-50 border-l-4 border-indigo-600">
          <p className="font-bold text-indigo-700 mb-2">
            Grupos Musculares Avaliados (6 Movimentos):
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Abdução do Ombro (C5-C6)</li>
            <li>Flexão do Cotovelo (C5-C6)</li>
            <li>Extensão do Punho (C6-C7)</li>
            <li>Flexão do Quadril (L2-L3)</li>
            <li>Extensão do Joelho (L3-L4)</li>
            <li>Dorsiflexão do Tornozelo (L4-L5)</li>
          </ul>
        </div>

        <p className="font-bold text-indigo-700 mb-1 mt-4">
          Graus de Força (0-5) - [Tabela 1 - MRC]:
        </p>
        <div className="space-y-1 ml-2">
          <div className="flex items-center">
            <span className="w-4 font-bold">0:</span> Nenhuma contração visível.
          </div>
          <div className="flex items-center">
            <span className="w-4 font-bold">1:</span> Contração visível (ou palpação), sem
            movimento do segmento.
          </div>
          <div className="flex items-center">
            <span className="w-4 font-bold">2:</span> Movimento ativo completo com eliminação da
            gravidade.
          </div>
          <div className="flex items-center">
            <span className="w-4 font-bold">3:</span> Movimento ativo completo contra a gravidade.
          </div>
          <div className="flex items-center">
            <span className="w-4 font-bold">4:</span> Movimento ativo completo contra a gravidade e
            resistência (submáxima).
          </div>
          <div className="flex items-center">
            <span className="w-4 font-bold">5:</span> Força normal (Movimento completo contra a
            gravidade e resistência total).
          </div>
        </div>

        <p className="mt-3 text-xs text-gray-500 border-t pt-2">
          O MRC-sumscore varia de 0 a 60 e avalia a força muscular global. (Turan et al., 2020)
        </p>
      </div>
    ),
  },
]

// Componente Card genérico para padronização
type ScaleCardProps = {
  title: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
  bgIcon: string
  iconColor: string
  description: string
  content: ReactNode
}

const ScaleCard = ({
  title,
  subtitle,
  icon: Icon,
  bgIcon,
  iconColor,
  description,
  content,
}: ScaleCardProps) => (
  <div className="flex flex-col bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition duration-300 hover:shadow-xl">
    {/* Header */}
    <div className="flex items-center justify-between gap-3 mb-4">
      <div className={`p-2 rounded-full ${bgIcon}`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <div className="flex-1">
        <h3
          className="text-lg sm:text-xl font-extrabold text-gray-800"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
      </div>
    </div>

    {/* Body */}
    <div className="flex-1 flex flex-col justify-between h-full">
      <p className="text-gray-600 mb-4 text-sm sm:text-base">{description}</p>
      {content}
    </div>
  </div>
)

export default function EscalasExtrasPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationController />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E3F0E2] via-[#F0F5EF] to-white pt-32 pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto md:mt-14 lg:mt-32">
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
              className="text-base sm:text-lg text-[#445345] leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Fluxograma de diagnóstico
              <br />
              Escalas (Eva, Berg, Borg, MRC)
            </p>

            <div className="mt-6 w-full rounded-xl border border-dashed border-[#6B8E23]/40 p-6 text-sm text-[#445345] bg-[#E3F0E2] overflow-x-auto">
              <div className="min-w-[800px] flex items-center justify-between text-center">
                {/* Passo 1 */}
                <div className="flex flex-col items-center">
                  <div className="bg-[#6B8E23] text-white px-4 py-2 rounded-xl font-bold">
                    1. AVALIAÇÃO INICIAL
                  </div>
                  <div className="w-0.5 h-6 bg-[#6B8E23]" />
                  <div className="bg-white px-4 py-3 rounded-xl border border-[#6B8E23] shadow-md">
                    Dor?
                    <br />
                    <span className="font-semibold text-red-500">Escala EVA</span>
                  </div>
                  <div className="w-0.5 h-6 bg-[#6B8E23]" />
                </div>

                <GitBranch className="w-12 h-6 text-[#6B8E23] rotate-90" />

                {/* Passo 2 */}
                <div className="flex flex-col items-center">
                  <div className="bg-[#6B8E23] text-white px-4 py-2 rounded-xl font-bold">
                    2. STATUS NEUROMUSCULAR
                  </div>
                  <div className="w-0.5 h-6 bg-[#6B8E23]" />
                  <div className="bg-white px-4 py-3 rounded-xl border border-[#6B8E23] shadow-md">
                    Força Muscular?
                    <br />
                    <span className="font-semibold text-indigo-600">Escala MRC</span>
                  </div>
                  <div className="w-0.5 h-6 bg-[#6B8E23]" />
                </div>

                <GitBranch className="w-12 h-6 text-[#6B8E23] rotate-90" />

                {/* Passo 3 */}
                <div className="flex flex-col items-center">
                  <div className="bg-[#6B8E23] text-white px-4 py-2 rounded-xl font-bold">
                    3. AVALIAÇÃO FUNCIONAL
                  </div>
                  <div className="w-0.5 h-6 bg-[#6B8E23]" />
                  <div className="bg-white px-4 py-3 rounded-xl border border-[#6B8E23] shadow-md">
                    Equilíbrio/Queda?
                    <br />
                    <span className="font-semibold text-teal-500">Escala BERG</span>
                  </div>
                  <div className="w-0.5 h-6 bg-[#6B8E23]" />
                </div>

                <GitBranch className="w-12 h-6 text-[#6B8E23] rotate-90" />

                {/* Passo 4 */}
                <div className="flex flex-col items-center">
                  <div className="bg-[#6B8E23] text-white px-4 py-2 rounded-xl font-bold">
                    4. REAÇÃO AO ESFORÇO
                  </div>
                  <div className="w-0.5 h-6 bg-[#6B8E23]" />
                  <div className="bg-white px-4 py-3 rounded-xl border border-[#6B8E23] shadow-md">
                    Esforço Cardiorrespiratório?
                    <br />
                    <span className="font-semibold text-blue-500">Escala BORG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Escalas em código (sem imagens) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Gauge className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Escalas (EVA, Berg, Borg, MRC) - Detalhes
            </h2>
          </div>

          {/* Grid de Escalas Detalhadas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {scaleData.map((scale, index) => (
              <ScaleCard
                key={index}
                title={scale.title}
                subtitle={scale.subtitle}
                icon={scale.icon}
                bgIcon={scale.bgIcon}
                iconColor={scale.iconColor}
                description={scale.description}
                content={scale.content}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Marcha Funcional e Coordenação Motora – textos fiéis */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Marcha Funcional */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-[#6B8E23]" />
              </div>
              <h2
                className="text-1xl sm:text-2xl font-bold text-[#1f2923]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Marcha Funcional
              </h2>
            </div>

            <div
              className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-4"
              style={{ fontFamily: "var(--font-poppins)", color: "#445345" }}
            >
              <p>O que é? </p>
              <p>
                Marcha Funcional é o padrão de locomoção humana realizado ao caminhar. Ela envolve uma sequência
                coordenada de movimentos dos membros inferiores, tronco e pelve, permitindo que a pessoa se desloque de
                um ponto ao outro de forma eficiente, segura e funcional.
              </p>
              <p>
                Os objetivos da avaliação instrumental da marcha são: identificar alterações, compensações e limitações
                que influenciam na funcionalidade, compreender os mecanismos subjacentes e a etiologia dos distúrbios,
                obter parâmetros quantitativos e qualitativos da marcha, para assim, definir métodos terapêuticos
                adequados e acompanhar a evolução da doença.
              </p>
              <p>
                Para facilitar a avaliação, a marcha foi fragmentada em fases, o que revela como o paciente caminha e
                quais estruturas estão contribuindo ou prejudicando esse padrão.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>1- Contato Inicial: Apoio do calcanhar; Flexão de quadril; Extensão do joelho; Dorsiflexão</li>
                <li>2- Resposta a carga: Flexão de quadril e joelho; Plantiflexão</li>
                <li>3- Apoio médio: Quadril neutro; Extensão de joelho; Dorsiflexão</li>
                <li>4- Apoio final: Extensão de joelho e quadril; Plantiflexão</li>
                <li>5- Pré-balanço: Flexão de quadril; flexão de joelho (40°); Plantiflexão</li>
                <li>6- Balanço inicial: Flexão de quadril; flexão de joelho (60°); Plantiflexão</li>
                <li>7- Balanço médio: Flexão de quadril; flexão de joelho; tornozelo neutro</li>
                <li>8- Balanço final: Flexão de quadril; extensão de joelho; tornozelo neutro</li>
              </ul>
            </div>
          </div>

          {/* Coordenação Motora */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-[#6B8E23]" />
              </div>
              <h2
                className="text-1xl sm:text-2xl font-bold text-[#1f2923]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Coordenação Motora
              </h2>
            </div>

            <div
              className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-4"
              style={{ fontFamily: "var(--font-poppins)", color: "#445345" }}
            >
              <p>O que é?</p>
              <p>
                Coordenação motora é a capacidade do corpo de realizar movimentos com precisão e harmonia, através da
                integração entre o cérebro, músculos e articulações. Ela é dividida em dois tipos principais: a grossa,
                que envolve movimentos amplos com músculos maiores (como correr e pular), e a fina, que utiliza músculos
                menores para tarefas delicadas (como escrever e abotoar).
              </p>
              <p>
                A avaliação da coordenação motora na fisioterapia envolve observar a capacidade do paciente de realizar
                movimentos precisos, controlados, rítmicos e organizados, analisando a integração entre os sistemas
                neurológico, sensorial e motor. Durante o exame, o fisioterapeuta verifica a qualidade dos movimentos, a
                presença de tremores e de movimentos involuntários, além de possíveis sinergias anormais. Também são
                avaliadas a velocidade, a fluidez e a habilidade do paciente para iniciar ou interromper um movimento de
                forma adequada.
              </p>
              <p>
                O profissional observa ainda sinais de alterações específicas, como dismetria (erro na precisão do
                movimento), disdiadococinesia (dificuldade em alternar movimentos rápidos), tremor intencional, ataxia,
                atraso na execução das ações e decomposição do movimento em etapas menores, indicativos de prejuízo na
                coordenação.
              </p>

              <p className="font-semibold mt-4">TESTES:</p>

              {/* 1. Índex-Índex */}
              <div className="space-y-1 p-3 rounded-lg border border-gray-100 bg-gray-50">
                <p className="font-bold">1. Índex-Índex</p>
                <p>
                  Com os dois ombros abduzidos à 90º, paciente é instruído a trazer as mãos em direção à linha média e
                  aproximar os dedos indicadores, realizando repetidas vezes e o mais rápido possível.
                </p>
                <p>O objetivo é avaliar a precisão, velocidade, tremor intencional e dismetria.</p>
                <p>
                  Alterações comuns: erro ao alcançar o alvo, tremor ao se aproximar do dedo do terapeuta ou movimentos
                  descoordenados.
                </p>
              </div>

              {/* 2. Índex-Terapeuta */}
              <div className="space-y-1 mt-4 p-3 rounded-lg border border-gray-100 bg-gray-50">
                <p className="font-bold">2. Índex-Terapeuta (Índex-Índex do examinador)</p>
                <p>
                  O terapeuta posiciona o dedo indicador à frente do paciente, variando o local algumas vezes. O
                  paciente deve tocar a ponta do dedo do terapeuta repetidamente.
                </p>
                <p>
                  Esse teste observa coordenação olho-mão, ajuste do movimento ao alvo, fluidez e capacidade de corrigir
                  trajetórias.
                </p>
                <p>Alterações: atraso na resposta, desvio do trajeto, decomposição do movimento e tremor.</p>
              </div>

              {/* 3. Índex-Nariz */}
              <div className="space-y-1 mt-4 p-3 rounded-lg border border-gray-100 bg-gray-50">
                <p className="font-bold">3. Índex-Nariz</p>
                <p>
                  O paciente é instruído a tocar a ponta do próprio nariz com o dedo indicado repetidas vezes e o mais
                  rápido que conseguir.
                </p>
                <p>Avalia tremor intencional, dismetria e regularidade do movimento.</p>
                <p>
                  Alterações: dificuldade para encontrar o nariz, tremores ao se aproximar do alvo, lentidão ou falta de
                  ritmo.
                </p>
              </div>

              {/* 4. Prono-supinação */}
              <div className="space-y-1 mt-4 p-3 rounded-lg border border-gray-100 bg-gray-50">
                <p className="font-bold">4. Prono-supinação</p>
                <p>
                  O paciente realiza movimentos rápidos de alternância entre pronação e supinação da mão (girar a mão
                  para baixo e para cima) sobre uma superfície ou no ar.
                </p>
                <p>É usado para avaliar movimentos alternados rápidos (MAR), investigando disdiadococinesia.</p>
                <p>
                  Alterações: lentidão, perda de ritmo, dificuldade para alternar os movimentos ou amplitude reduzida.
                </p>
              </div>

              {/* 5. Calcanhar-Joelho */}
              <div className="space-y-1 mt-4 p-3 rounded-lg border border-gray-100 bg-gray-50">
                <p className="font-bold">5. Calcanhar-Joelho</p>
                <p>
                  Em decúbito dorsal, o paciente posiciona o calcanhar de um pé sobre o joelho da perna contrária e
                  desliza o calcanhar pela canela até o tornozelo.
                </p>
                <p>
                  O teste avalia a coordenação dos membros inferiores, trajetória, controle postural e presença de
                  ataxia.
                </p>
                <p>
                  Alterações: dificuldade para manter o calcanhar sobre a canela, trajeto irregular, movimentos trêmulos
                  ou perda do controle durante a descida.
                </p>
              </div>

              {/* 6. Pinça Fina */}
              <div className="space-y-1 mt-4 p-3 rounded-lg border border-gray-100 bg-gray-50">
                <p className="font-bold">6. Pinça Fina</p>
                <p>
                  A pinça fina envolve movimentos precisos entre o polegar e o indicador (podendo incluir o médio),
                  sendo fundamental para tarefas como abotoar, escrever e manipular objetos pequenos.
                </p>
                <p>Como é avaliada:</p>
                <p>
                  O paciente é orientado a pegar grãos de feijão (ou outros objetos bem pequenos) usando apenas a ponta
                  dos dedos.
                </p>
                <p>Pode-se solicitar que ele:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Pegue um feijão por vez;</li>
                  <li>Transfira os feijões de um recipiente para outro;</li>
                  <li>Organize ou alinhe os grãos em uma superfície.</li>
                </ul>
                <p>
                  Avalia-se: Precisão do movimento; Controle e força da pinça; Presença de tremores; Lentidão ou
                  dificuldade em iniciar o movimento; Compensações, como uso de toda a mão em vez da pinça.
                </p>
              </div>

              {/* 7. Pinça Grossa */}
              <div className="space-y-1 mt-4 p-3 rounded-lg border border-gray-100 bg-gray-50">
                <p className="font-bold">7. Pinça Grossa</p>
                <p>
                  A pinça grossa utiliza movimentos mais amplos e envolve toda a mão, incluindo a participação dos
                  músculos intrínsecos e extrínsecos, sendo usada para segurar objetos maiores.
                </p>
                <p>Como é avaliada:</p>
                <p>
                  O paciente manipula uma bola pequena ou média, realizando movimentos como: apertar a bola (força de
                  preensão); pegar e soltar repetidamente; transferir a bola de uma mão para a outra; manter a bola com
                  firmeza usando toda a mão.
                </p>
                <p>
                  Avalia-se: Força de preensão; Estabilidade do punho; Coordenação entre dedos e palma; Controle do
                  movimento ao pegar e soltar; Presença de dor, tremor ou fadiga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
