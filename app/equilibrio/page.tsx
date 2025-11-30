"use client"

import { NavigationController } from "@/components/NavigationController"
import {
  Brain,
  Zap,
  Activity,
  Target,
  ClipboardCheck,
  ChevronRight,
  Users,
} from "lucide-react"

type TesteEquilibrio = {
  titulo: string
  descricao: string
  referencia: string
  video: string
}

function getYoutubeId(url: string) {
  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  const match = url.match(regExp)
  return match ? match[1] : null
}

function splitDescricao(descricao: string) {
  const labels = [
    "Como é realizado:",
    "Objetivo:",
    "Quando o teste é positivo:",
    "Quando o teste é negativo:",
    "Referência:",
  ]

  const result: { label: string; text: string }[] = []
  let working = descricao

  for (let i = 0; i < labels.length; i++) {
    const label = labels[i]
    const start = working.indexOf(label)
    if (start === -1) continue

    const nextLabel = labels.slice(i + 1).find(l => working.indexOf(l) !== -1)
    const end = nextLabel ? working.indexOf(nextLabel) : working.length

    const text = working.slice(start + label.length, end).trim()
    result.push({ label, text })

    working = working.slice(end)
  }

  return result
}


export default function EquilibrioPage() {
  const testesEquilibrio: TesteEquilibrio[] = [
    {
      titulo: "Teste de Romberg",
      descricao:
        "Como é realizado: O avaliado permanece em pé, descalço, com os pés juntos e os braços cruzados ou ao lado do corpo, sobre superfície plana. Mantém os olhos abertos por cerca de 30 segundos e depois fechados por 30 segundos a 1 minuto, enquanto o avaliador observa oscilações e garante segurança. Objetivo: Avaliar a integridade da propriocepção, do sistema vestibular e do controle postural em condições estáticas. Quando o teste é positivo: Perda de equilíbrio ao fechar os olhos: oscilação acentuada, abertura dos pés, passos compensatórios ou queda indicando alteração na propriocepção ou no sistema vestibular. Quando o teste é negativo:  O indivíduo mantém o equilíbrio com mínima oscilação, mesmo após fechar os olhos.",
      referencia: "SILVEIRA et al., 2024",
      video: "https://www.youtube.com/watch?v=5xUUVr8pwH4",
    },
    {
      titulo: "Teste de Fukuda",
      descricao:
        "Como é realizado: O teste de Fukuda avalia alterações no equilíbrio e no sistema vestibular. O paciente deve ficar com os olhos fechados e os braços estendidos à frente, marchando no mesmo lugar enquanto o examinador conta até 50. Objetivo: Avaliar assimetrias vestibulares e alterações no controle postural dinâmico. Quando o teste é positivo: Rotação do corpo maior que 45° para um lado ou deslocamento maior que 1 metro à frente.Caso ele gire a cabeça em direção ao lado afetado, pode apresentar tendência a cair para frente. Quando o teste é negativo:  Marcha praticamente no mesmo ponto, com pequena rotação e sem deslocamento significativo.",
      referencia: "MARTINS et al., 2017",
      video: "https://www.youtube.com/watch?v=KvvoyNwQvck",
    },
    {
      titulo: "Teste de Marcha Tandem",
      descricao:
        "Como é realizado: O indivíduo deve caminhar em linha reta por 10 metros, colocando um pé diretamente à frente do outro (calcanhar encostando nos dedos). O teste é repetido três vezes e registra-se o melhor tempo. Objetivo: Avaliar equilíbrio dinâmico, coordenação e estabilidade na marcha em linha reduzida. Quando o teste é positivo: Dificuldade para manter a linha, passos laterais, desequilíbrios, necessidade de apoio ou incapacidade de completar o trajeto. Quando o teste é negativo: Marcha contínua e alinhada, sem perda de equilíbrio ou desvios relevantes.",
      referencia: "SILVEIRA et al., 2024",
      video: "https://www.youtube.com/watch?v=WygoCl874Js",
    },
    {
      titulo: "Teste TUG (Timed Up and Go)",
      descricao:
        "Como é realizado: O paciente inicia sentado em uma cadeira com braços. Ao comando, deve levantar-se sem usar os apoios, caminhar 3 metros, virar 180°, retornar e sentar novamente. O tempo total é cronometrado. geralmente, varia entre 20 e 30 segundos. Objetivo: Avaliar mobilidade funcional, equilíbrio, velocidade da marcha e risco de quedas. Quando o teste é positivo: Tempo aumentado (geralmente > 12–13s), dificuldade para levantar, marcha instável, passos curtos ou inseguros, uso de compensações. Quando o teste é negativo: Realiza o trajeto de forma fluida, estável e dentro do tempo esperado, sem desequilíbrios.",
      referencia: "SILVEIRA et al., 2024",
      video: "https://www.youtube.com/watch?v=-i_-0biUi9w",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-justify leading-relaxed">
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
            Equilíbrio
          </h1>

          <p
            className="text-lg sm:text-xl text-[#445345] max-w-3xl leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Entenda o conceito físico e fisiológico do equilíbrio, seus mecanismos de estabilidade e os principais testes
            para avaliá-lo na prática clínica.
          </p>
        </div>

        <div className="absolute top-20 right-10 opacity-10">
          <Brain className="w-64 h-64 text-[#6B8E23]" strokeWidth={0.5} />
        </div>
      </section>

      {/* CONCEITO / IMPORTÂNCIA CLÍNICA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Importância Clínica da Avaliação do Equilíbrio
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-8">
            <p
              className="text-[#445345] text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              A avaliação do equilíbrio é um dos métodos clínicos mais sensíveis para detectar precocemente disfunções neurológicas, especialmente porque o equilíbrio depende da integração simultânea de três sistemas essenciais:
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#6B8E23]/20 shadow-sm">
                <h4
                  className="text-sm font-semibold uppercase tracking-wide text-[#6B8E23] mb-3"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Sistemas envolvidos
                </h4>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[#445345] text-sm sm:text-base">
                    <span className="text-[#6B8E23] mt-1.5">•</span>
                    <span>Sistema vestibular (detecção de movimento e posição da cabeça)</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#445345] text-sm sm:text-base">
                    <span className="text-[#6B8E23] mt-1.5">•</span>
                    <span>Sistema somatossensorial/proprioceptivo (informações do solo, articulações e músculos)</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#445345] text-sm sm:text-base">
                    <span className="text-[#6B8E23] mt-1.5">•</span>
                    <span>Sistema visual e Controle motor central, (incluindo cerebelo e córtices motores)</span>
                  </li>
                </ul>

                <div className="mt-4 inline-flex px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#5a4b1a] border border-[#D4AF37]/30 text-xs sm:text-sm font-medium">
                  (EDWARDS et al., 2023)
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#6B8E23]/5 p-6 sm:p-7 rounded-2xl border border-[#6B8E23]/15">
                <h4
                  className="text-sm font-semibold uppercase tracking-wide text-[#1f2923] mb-3"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Por que é tão importante?
                </h4>

                <p
                  className="text-[#445345] text-sm sm:text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Quando ocorre uma lesão em estruturas como cerebelo, vias somatossensoriais, núcleos vestibulares ou córtex, o cérebro perde parte dessa capacidade de integração — e o corpo oscila, perde alinhamento ou não consegue estabilizar o centro de massa.
                </p>

                <p
                  className="text-[#445345] text-sm sm:text-base leading-relaxed mt-4"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Por isso, pequenas alterações neurológicas já aparecem em testes simples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testes de Equilíbrio */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Testes de equilíbrio
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {testesEquilibrio.map((t, i) => (
              <div
                key={i}
                className="bg-[#F8F9FA] p-8 rounded-2xl border-2 border-[#6B8E23]/20 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3
                  className="text-1xl sm:text-2xl font-bold text-[#6B8E23] mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {t.titulo}
                </h3>

                {/* DESCRIÇÃO EM BLOCOS (SEM ALTERAR PALAVRAS) */}
                <div className="space-y-4 mb-5">
                  {splitDescricao(t.descricao).map((sec, idx) => (
                    <div
                      key={idx}
                      className="bg-white/70 rounded-xl p-4 border border-[#6B8E23]/15"
                    >
                      <h4
                        className="text-sm font-semibold uppercase tracking-wide text-[#6B8E23] mb-2"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {sec.label}
                      </h4>

                      <p
                        className="text-[#445345] text-sm sm:text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {sec.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm mb-6">

                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#5a4b1a] border border-[#D4AF37]/30">
                    {t.referencia}
                  </span>
                </div>

                {/* VÍDEO SEMPRE ABERTO */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow border border-[#6B8E23]/20">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${getYoutubeId(t.video)}`}
                    title={t.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reação de Equilíbrio */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Reação de Equilíbrio
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-[#F8F9FA] p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-8">

            {/* Texto dividido + barra lateral */}
            <div className="relative bg-white rounded-2xl p-6 sm:p-7 border border-[#6B8E23]/15 shadow-sm">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[#6B8E23]/70 rounded-l-2xl" />

              <div
                className="space-y-4 text-[#445345] text-base sm:text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <p>
                  O teste de reação de equilíbrio em sedestação funciona como uma forma de avaliar como o corpo responde automaticamente quando sofre pequenos desequilíbrios. O paciente senta-se na maca, sem se encostar, com os pés sem apoio fixo.
                </p>

                <p>
                  As mãos podem permanecer sobre as coxas, enquanto o fisioterapeuta gera instabilidade por meio de empurrões suaves e controlados no tronco, em diferentes direções.
                </p>
              </div>
            </div>

            {/* Box de destaque com a frase final (mesmas palavras) */}
            <div className="bg-[#6B8E23]/5 border border-[#6B8E23]/20 rounded-2xl p-6 sm:p-7">
              <h4
                className="text-sm font-semibold uppercase tracking-wide text-[#6B8E23] mb-3"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                O que o teste avalia
              </h4>

              <p
                className="text-[#445345] text-base sm:text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                O teste avalia as reações de proteção do paciente (apoio dos braços), reações de endireitamento (ajuste do tronco e da cabeça), controle postural e a integração vestibular/somatossensorial.
              </p>
            </div>

            {/* VÍDEO SEMPRE ABERTO */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow border border-[#6B8E23]/20">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${getYoutubeId(
                  "https://www.youtube.com/watch?v=wpbe8dsgKeA"
                )}`}
                title="Reação de Equilíbrio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como Avaliar? */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-[#6B8E23] to-[#556B2F]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <ClipboardCheck className="w-6 h-6 text-white" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Como avaliar?
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-2xl border border-white/20">
            <div className="space-y-6">
              {/* Item A */}
              <div className="flex flex-col sm:flex-row items-start gap-6 bg-white/10 p-6 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-white">
                  A
                </div>
                <div className="flex-1">
                  <p className="text-white text-base leading-relaxed mb-4">
                    Utilize apenas o instrumental básico exigido pelos testes de equilíbrio, como: cronômetro, cadeira com
                    braços e pés fixos, fita adesiva/fita métrica, espaço plano e seguro para marcha, superfície firme para
                    testes estáticos.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-evenly">
                    <img
                      src="/cronometro_equilibrio.jpg"
                      alt="Cronômetro para avaliação de equilíbrio"
                      className="rounded-lg shadow-md border border-white/20 w-[180px] h-[200px] object-fill"
                    />
                    <img
                      src="/cadeira_equilibrio.jpg"
                      alt="Cadeira com braços para teste TUG"
                      className="rounded-lg shadow-md border border-white/20 w-[180px] h-[200px] object-fill"
                    />
                    <img
                      src="/fita_equilibrio.jpg"
                      alt="Fita métrica para demarcação de testes"
                      className="rounded-lg shadow-md border border-white/20 w-[180px] h-[200px] object-fill"
                    />
                    <img
                      src="/fita_2_equilibrio.jpg"
                      alt="Fita métrica para demarcação de testes"
                      className="rounded-lg shadow-md border border-white/20 w-[180px] h-[200px] object-fill"
                    />
                  </div>
                </div>
              </div>

              {/* Item B */}
              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-white">
                  B
                </div>
                <p className="text-white text-base leading-relaxed">
                  O indivíduo deve estar com roupa confortável e, preferencialmente, descalço ou com calçado seguro.
                  Sempre explicar o teste antes de iniciar, garantindo que ele compreenda a tarefa.
                </p>
              </div>

              {/* Item C */}
              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-white">
                  C
                </div>
                <p className="text-white text-base leading-relaxed">
                  Manter-se próximo ao avaliado durante toda a execução, preparado para evitar quedas. Interromper caso
                  haja tontura, insegurança, instabilidade ou mal-estar.
                </p>
              </div>

              {/* Item D */}
              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-white">
                  D
                </div>
                <p className="text-white text-base leading-relaxed">
                  O avaliador deve observar sempre oscilações do corpo, deslocamentos inesperados, necessidade de apoio,
                  velocidade e qualidade da marcha, atrasos na execução. Esses elementos ajudam a identificar alterações
                  no equilíbrio, propriocepção ou controle postural.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
