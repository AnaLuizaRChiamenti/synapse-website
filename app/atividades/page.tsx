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

type Alternativa = {
  letra: string
  texto: string
  correta: boolean
}

type Questao = {
  id: number
  texto: string
  alternativas: Alternativa[]
}

const baseQuestoes: Questao[] = [
  {
    id: 1,
    texto: "Durante a marcha, a coordenação motora é essencial para:",
    alternativas: [
      {
        letra: "a",
        texto: "Aumentar exclusivamente a força de membros inferiores.",
        correta: false,
      },
      {
        letra: "b",
        texto: "Sincronizar movimentos de braços e pernas, mantendo ritmo e estabilidade.",
        correta: true,
      },
      {
        letra: "c",
        texto: "Evitar qualquer movimento automático.",
        correta: false,
      },
      {
        letra: "d",
        texto: "Reduzir flexibilidade do quadril.",
        correta: false,
      },
    ],
  },
  {
    id: 2,
    texto: "Sobre o reflexo patelar, é correto afirmar:",
    alternativas: [
      {
        letra: "a",
        texto: "Avalia o nervo tibial e raízes S1–S2.",
        correta: false,
      },
      {
        letra: "b",
        texto: "A resposta esperada é a flexão do joelho.",
        correta: false,
      },
      {
        letra: "c",
        texto:
          "É desencadeado pela percussão do tendão patelar, resultando em extensão da perna.",
        correta: true,
      },
      {
        letra: "d",
        texto: "É um reflexo superficial.",
        correta: false,
      },
    ],
  },
  {
    id: 3,
    texto: "O teste de Romberg avalia:",
    alternativas: [
      {
        letra: "a",
        texto: "Equilíbrio estático e integridade da propriocepção.",
        correta: true,
      },
      {
        letra: "b",
        texto: "Coordenação dos membros superiores.",
        correta: false,
      },
      {
        letra: "c",
        texto: "Força muscular.",
        correta: false,
      },
      {
        letra: "d",
        texto: "Velocidade da marcha.",
        correta: false,
      },
    ],
  },
  {
    id: 4,
    texto: "A coordenação motora grossa está associada a:",
    alternativas: [
      {
        letra: "a",
        texto: "Movimentos pequenos e precisos das mãos.",
        correta: false,
      },
      {
        letra: "b",
        texto: "Controle da musculatura ocular.",
        correta: false,
      },
      {
        letra: "c",
        texto: "Movimentos amplos que envolvem grandes grupos musculares.",
        correta: true,
      },
      {
        letra: "d",
        texto: "Habilidades exclusivamente cognitivas.",
        correta: false,
      },
    ],
  },
  {
    id: 5,
    texto: "Qual alternativa descreve corretamente o sinal de Babinski?",
    alternativas: [
      {
        letra: "a",
        texto: "Flexão dos dedos do pé em adultos.",
        correta: false,
      },
      {
        letra: "b",
        texto:
          "Extensão do hálux e abertura em leque dos demais dedos, indicando lesão piramidal.",
        correta: true,
      },
      {
        letra: "c",
        texto: "Resposta normal em qualquer idade.",
        correta: false,
      },
      {
        letra: "d",
        texto:
          "Contração do quadríceps após percussão plantar.",
        correta: false,
      },
    ],
  },
  {
    id: 6,
    texto:
      "Uma pessoa que perde o equilíbrio ao fechar os olhos no Romberg provavelmente apresenta:",
    alternativas: [
      {
        letra: "a",
        texto: "Lesão cerebelar.",
        correta: false,
      },
      {
        letra: "b",
        texto: "Alteração na via proprioceptiva.",
        correta: true,
      },
      {
        letra: "c",
        texto: "Alteração vestibular.",
        correta: false,
      },
      {
        letra: "d",
        texto: "Hipotonia muscular.",
        correta: false,
      },
    ],
  },
  {
    id: 7,
    texto: "A hiporreflexia geralmente indica:",
    alternativas: [
      {
        letra: "a",
        texto: "Lesão de neurônio motor superior.",
        correta: false,
      },
      {
        letra: "b",
        texto: "Disfunção do trato piramidal.",
        correta: false,
      },
      {
        letra: "c",
        texto: "Lesão de neurônio motor inferior (arco reflexo).",
        correta: true,
      },
      {
        letra: "d",
        texto: "Estímulo excessivo de interneurônios Ia.",
        correta: false,
      },
    ],
  },
  {
    id: 8,
    texto:
      "Quais músculos são mais exigidos durante a fase de apoio da marcha?",
    alternativas: [
      {
        letra: "a",
        texto: "Bíceps braquial, deltóide, tríceps sural.",
        correta: false,
      },
      {
        letra: "b",
        texto:
          "Glúteo máximo, glúteo médio, quadríceps e tríceps sural.",
        correta: true,
      },
      {
        letra: "c",
        texto: "Tibial anterior, isquiotibiais, antebraço.",
        correta: false,
      },
      {
        letra: "d",
        texto: "Esternocleidomastoide, trapézio, gastrocnêmio.",
        correta: false,
      },
    ],
  },
  {
    id: 9,
    texto:
      "Qual dos testes abaixo manipula a entrada visual para avaliar equilíbrio?",
    alternativas: [
      {
        letra: "a",
        texto: "TUG.",
        correta: false,
      },
      {
        letra: "b",
        texto: "Marcha tandem.",
        correta: false,
      },
      {
        letra: "c",
        texto: "Romberg.",
        correta: true,
      },
      {
        letra: "d",
        texto: "Fukuda.",
        correta: false,
      },
    ],
  },
  {
    id: 10,
    texto:
      "O sistema responsável por detectar posição e movimento da cabeça é o:",
    alternativas: [
      {
        letra: "a",
        texto: "Sistema visual.",
        correta: false,
      },
      {
        letra: "b",
        texto: "Sistema vestibular.",
        correta: true,
      },
      {
        letra: "c",
        texto: "Sistema proprioceptivo.",
        correta: false,
      },
      {
        letra: "d",
        texto: "Sistema piramidal.",
        correta: false,
      },
    ],
  },
  {
    id: 11,
    texto:
      "As reações de proteção com os braços aparecem normalmente em:",
    alternativas: [
      {
        letra: "a",
        texto: "1 mês.",
        correta: false,
      },
      {
        letra: "b",
        texto: "3 meses.",
        correta: false,
      },
      {
        letra: "c",
        texto: "6 a 9 meses.",
        correta: true,
      },
      {
        letra: "d",
        texto: "12 meses.",
        correta: false,
      },
    ],
  },
  {
    id: 12,
    texto: "O equilíbrio dinâmico é melhor avaliado por:",
    alternativas: [
      {
        letra: "a",
        texto: "Romberg.",
        correta: false,
      },
      {
        letra: "b",
        texto: "Marcha em linha reta (Tandem gait).",
        correta: true,
      },
      {
        letra: "c",
        texto: "Sensibilidade profunda.",
        correta: false,
      },
      {
        letra: "d",
        texto: "Força isométrica.",
        correta: false,
      },
    ],
  },
  {
    id: 13,
    texto:
      "A ausência do reflexo com perda sensorial no mesmo território sugere:",
    alternativas: [
      {
        letra: "a",
        texto: "Lesão aferente do arco reflexo.",
        correta: true,
      },
      {
        letra: "b",
        texto: "Lesão exclusiva do motoneurônio alfa.",
        correta: false,
      },
      {
        letra: "c",
        texto: "Lesão cortical frontal.",
        correta: false,
      },
      {
        letra: "d",
        texto: "Lesão extrapiramidal.",
        correta: false,
      },
    ],
  },
  {
    id: 14,
    texto: "No TUG, ≥ 13,5 segundos está associado a:",
    alternativas: [
      {
        letra: "a",
        texto: "Baixa resistência.",
        correta: false,
      },
      {
        letra: "b",
        texto: "Aumento do risco de quedas.",
        correta: true,
      },
      {
        letra: "c",
        texto: "Déficit visual.",
        correta: false,
      },
      {
        letra: "d",
        texto: "Lesão vestibular central.",
        correta: false,
      },
    ],
  },
  {
    id: 15,
    texto:
      "Quais déficits motores e sensoriais mais afetam a marcha no AVC?",
    alternativas: [
      {
        letra: "a",
        texto:
          "Fraqueza, espasticidade, alterações de tônus e perda proprioceptiva.",
        correta: true,
      },
      {
        letra: "b",
        texto: "Diminuição de força apenas em membros superiores.",
        correta: false,
      },
      {
        letra: "c",
        texto: "Hipotensão postural.",
        correta: false,
      },
      {
        letra: "d",
        texto: "Aumento de flexibilidade.",
        correta: false,
      },
    ],
  },
  {
    id: 16,
    texto: "O que é coordenação motora?",
    alternativas: [
      {
        letra: "a",
        texto: "Força máxima gerada rapidamente.",
        correta: false,
      },
      {
        letra: "b",
        texto:
          "Capacidade de organizar e sincronizar movimentos de forma eficiente.",
        correta: true,
      },
      {
        letra: "c",
        texto: "Resistência muscular.",
        correta: false,
      },
      {
        letra: "d",
        texto: "Controle exclusivo dos músculos proximais.",
        correta: false,
      },
    ],
  },
  {
    id: 17,
    texto: "A coordenação motora fina está relacionada a:",
    alternativas: [
      {
        letra: "a",
        texto: "Movimentos amplos do tronco.",
        correta: false,
      },
      {
        letra: "b",
        texto: "Ações precisas, como escrever e abotoar.",
        correta: true,
      },
      {
        letra: "c",
        texto: "Movimentos automáticos de marcha.",
        correta: false,
      },
      {
        letra: "d",
        texto: "Ações de força máxima.",
        correta: false,
      },
    ],
  },
  {
    id: 18,
    texto: "Sobre o funcionamento do reflexo, é correto afirmar:",
    alternativas: [
      {
        letra: "a",
        texto: "Estímulo detectado pelo antagonista e enviado ao córtex.",
        correta: false,
      },
      {
        letra: "b",
        texto:
          "Receptor envia via aferente → SNC → resposta via eferente.",
        correta: true,
      },
      {
        letra: "c",
        texto: "Reflexo só ocorre com participação suprassegmentar.",
        correta: false,
      },
      {
        letra: "d",
        texto: "Depende de ativação voluntária.",
        correta: false,
      },
    ],
  },
  {
    id: 19,
    texto: "Qual medida faz parte da semiotécnica dos reflexos?",
    alternativas: [
      {
        letra: "a",
        texto: "Manter o músculo contraído.",
        correta: false,
      },
      {
        letra: "b",
        texto: "Usar objetos rígidos.",
        correta: false,
      },
      {
        letra: "c",
        texto:
          "Utilizar martelo adequado, região descoberta e paciente relaxado.",
        correta: true,
      },
      {
        letra: "d",
        texto: "Evitar conversar.",
        correta: false,
      },
    ],
  },
  {
    id: 20,
    texto:
      "Durante a avaliação de força muscular pelo teste de Kendall, um grau 3 (força moderada) significa que o paciente:",
    alternativas: [
      {
        letra: "a",
        texto: "Não realiza movimento nem sem gravidade.",
        correta: false,
      },
      {
        letra: "b",
        texto:
          "Realiza movimento completo contra resistência total.",
        correta: false,
      },
      {
        letra: "c",
        texto:
          "Realiza movimento completo contra a gravidade, mas sem suportar resistência.",
        correta: true,
      },
      {
        letra: "d",
        texto: "Realiza movimento parcial com eliminação da gravidade.",
        correta: false,
      },
    ],
  },
]

function embaralharQuestoes(questoes: Questao[]): Questao[] {
  const array = [...questoes]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default function AtividadesPage() {
  const [escalaSelecionada, setEscalaSelecionada] = useState<null>(null)
  const [mostrarFluxograma, setMostrarFluxograma] = useState(false)

  const [questoes, setQuestoes] = useState<Questao[]>(() =>
    embaralharQuestoes(baseQuestoes)
  )
  const [respostas, setRespostas] = useState<Record<number, string>>({})
  const [mostrarResultado, setMostrarResultado] = useState(false)

  const totalCorretas = questoes.reduce((acc, questao) => {
    const correta = questao.alternativas.find((alt) => alt.correta)?.letra
    if (respostas[questao.id] === correta) return acc + 1
    return acc
  }, 0)

  const handleSelecionar = (id: number, letra: string) => {
    setRespostas((prev) => ({
      ...prev,
      [id]: letra,
    }))
  }

  const handleReiniciar = () => {
    setQuestoes(embaralharQuestoes(baseQuestoes))
    setRespostas({})
    setMostrarResultado(false)
  }

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
          </div>
        </div>
      </section>

      {/* Quiz completo */}
      <section
        id="quiz"
        className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Play className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1f2923]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Quiz completo – 20 perguntas
              </h2>
              <p
                className="text-sm text-[#445345] mt-1"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                As questões são exibidas em ordem embaralhada a cada acesso.
              </p>
            </div>
          </div>

          {/* Resultado geral + botões */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p
                className="text-sm text-[#445345]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Questões respondidas:{" "}
                {Object.keys(respostas).length} / {questoes.length}
              </p>
              {mostrarResultado && (
                <p
                  className="text-base font-semibold text-[#1f2923] mt-1"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Você acertou{" "}
                  <span className="text-[#6B8E23]">
                    {totalCorretas} / {questoes.length}
                  </span>{" "}
                  questões.
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setMostrarResultado(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6B8E23] text-white text-sm sm:text-base hover:brightness-110 transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                Conferir resultado
              </button>
              <button
                type="button"
                onClick={handleReiniciar}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#6B8E23]/40 text-[#1f2923] text-sm sm:text-base hover:bg-[#6B8E23]/5 transition-all"
              >
                Reiniciar quiz
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {questoes.map((questao, index) => (
              <div
                key={questao.id}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3
                  className="text-base sm:text-lg font-semibold text-[#1f2923] mb-4"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {index + 1}. {questao.texto}
                </h3>

                <div className="space-y-3">
                  {questao.alternativas.map((alt) => {
                    const selecionada = respostas[questao.id] === alt.letra
                    const correta = alt.correta
                    const mostrarCorrecao = mostrarResultado

                    let borderClass = "border-gray-200"
                    let bgClass = "bg-white"
                    let textClass = "text-[#445345]"

                    if (!mostrarCorrecao && selecionada) {
                      borderClass = "border-[#6B8E23]"
                      bgClass = "bg-[#6B8E23]/5"
                    }

                    if (mostrarCorrecao && correta) {
                      borderClass = "border-emerald-500"
                      bgClass = "bg-emerald-50"
                      textClass = "text-emerald-900"
                    } else if (
                      mostrarCorrecao &&
                      selecionada &&
                      !correta
                    ) {
                      borderClass = "border-red-500"
                      bgClass = "bg-red-50"
                      textClass = "text-red-900"
                    }

                    return (
                      <button
                        key={alt.letra}
                        type="button"
                        onClick={() => handleSelecionar(questao.id, alt.letra)}
                        className={`w-full text-left border ${borderClass} ${bgClass} rounded-xl px-3 py-3 sm:px-4 sm:py-4 flex gap-3 hover:bg-[#6B8E23]/5 transition-colors`}
                      >
                        <span
                          className="flex-shrink-0 w-7 h-7 rounded-full border border-[#6B8E23]/50 flex items-center justify-center text-xs font-semibold text-[#1f2923] bg-white"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          {alt.letra.toUpperCase()}
                        </span>
                        <span
                          className={`text-sm sm:text-base ${textClass}`}
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          {alt.texto}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-7">
              <button
                type="button"
                onClick={() => setMostrarResultado(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6B8E23] text-white text-sm sm:text-base hover:brightness-110 transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                Conferir resultado
              </button>
              <button
                type="button"
                onClick={handleReiniciar}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#6B8E23]/40 text-[#1f2923] text-sm sm:text-base hover:bg-[#6B8E23]/5 transition-all"
              >
                Reiniciar quiz
              </button>
            </div>
        </div>
      </section>

      {/* Gabarito */}
{/*       <section
        id="gabarito"
        className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <FileSearch className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1f2923]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Gabarito
              </h2>
              <p
                className="text-sm text-[#445345] mt-1"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Visualize rapidamente as respostas corretas para cada questão.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-4">
            {baseQuestoes.map((questao, index) => {
              const correta = questao.alternativas.find((alt) => alt.correta)
              if (!correta) return null
              return (
                <div
                  key={questao.id}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 border-b border-gray-100 pb-3 last:border-b-0 last:pb-0"
                >
                  <span
                    className="text-sm font-semibold text-[#6B8E23] w-full sm:w-16"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {index + 1}.
                  </span>
                  <div className="flex-1">
                    <p
                      className="text-sm text-[#1f2923] font-medium"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {questao.texto}
                    </p>
                    <p
                      className="text-sm text-[#445345] mt-1"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      <span className="font-semibold text-[#6B8E23]">
                        Resposta correta:{" "}
                        {correta.letra.toUpperCase()}
                      </span>{" "}
                      — {correta.texto}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section> */}
    </div>
  )
}
