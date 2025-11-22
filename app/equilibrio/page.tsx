"use client"

import { useState } from "react"
import { NavigationController } from "@/components/NavigationController"
import { Brain, Zap, Activity, Target, ClipboardCheck, ChevronRight, Play, Users } from 'lucide-react'

type TesteEquilibrio = {
  titulo: string
  descricao: string
  referencia: string
  equipamento: string
  video: string
}

function getYoutubeId(url: string) {
  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  const match = url.match(regExp)
  return match ? match[1] : null
}


export default function EquilibrioPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const testesEquilibrio: TesteEquilibrio[] = [
    {
      titulo: "Teste de Romberg",
      descricao:
        "O teste de Romberg deve ser explicado antes da aplicação. O avaliado fica de pé, descalço, em superfície plana, com os pés juntos e os braços cruzados ou ao lado do corpo. Primeiro, mantém os olhos abertos por cerca de 30 segundos e depois os fecha por 30 segundos a 1 minuto, enquanto o avaliador observa possíveis desequilíbrios, permanecendo próximo para garantir segurança. O teste é considerado positivo quando há perda de equilíbrio ao fechar os olhos, com oscilação, movimentação dos pés ou queda, indicando alteração na propriocepção ou no sistema vestibular. Já o negativo ocorre quando o avaliado mantém o equilíbrio, com pouca ou nenhuma oscilação, sugerindo ausência de ataxia e bom funcionamento dos sistemas visual e proprioceptivo.",
      referencia: "SILVEIRA et al., 2024",
      equipamento: "Superfície plana segura; cronômetro opcional; apoio do examinador.",
      video: "https://www.youtube.com/watch?v=5xUUVr8pwH4",
    },
    {
      titulo: "Teste de Fukuda",
      descricao:
        "O teste de Fukuda avalia alterações no equilíbrio e no sistema vestibular. O paciente deve ficar com os olhos fechados e os braços estendidos à frente, marchando no mesmo lugar enquanto o examinador conta até 50. O teste é considerado positivo quando o paciente gira o corpo mais de 45° para um dos lados ou se desloca mais de 1 metro para frente. Caso ele gire a cabeça em direção ao lado afetado, pode apresentar tendência a cair para frente.",
      referencia: "MARTINS et al., 2017",
      equipamento: "Espaço livre e silencioso; marcação no chão opcional; cronômetro.",
      video: "https://www.youtube.com/watch?v=KvvoyNwQvck",
    },
    {
      titulo: "Teste de Marcha Tandem",
      descricao:
        "Como funciona? O teste de Tandem avalia o equilíbrio e a marcha do idoso: Na marcha tandem o idoso anda em linha reta por 10 m colocando um pé à frente do outro; o tempo é cronometrado, o teste é repetido três vezes e usa-se o melhor tempo (dispositivos de auxílio e tipo de calçado devem ser anotados).",
      referencia: "SILVEIRA et al., 2024",
      equipamento: "É necessário um cronômetro para registrar o tempo que o indivíduo vai necessitar tanto para o teste estático como para a caminhada tandem dentro de espaço com distância delimitada em metros.",
      video: "https://www.youtube.com/watch?v=WygoCl874Js",
    },
    {
      titulo: "Teste TUG (Timed Up and Go)",
      descricao:
        "Como funciona? O teste TUG (Timed Up and Go) é usado para avaliar a mobilidade, equilíbrio e risco de quedas. Ele é realizado com o idoso sentado em uma cadeira com apoio de braços, em um local plano. Ao comando do avaliador, o idoso deve levantar-se sem usar os apoios, caminhar 3 metros, virar-se a 180°, retornar até a cadeira e sentar-se novamente. O tempo total gasto nessa sequência é cronometrado e, geralmente, varia entre 20 e 30 segundos. O desempenho permite observar a coordenação, a estabilidade e a segurança do idoso durante o movimento.",
      referencia: "SILVEIRA et al., 2024",
      equipamento: "Cadeira com braços, de pés fixos ao chão (sem rodinhas), cronômetro; fita adesiva; trena ou barbante ou trena, ou fita com 3m (para demarcação da distância de 3m).",
      video: "https://www.youtube.com/watch?v=-i_-0biUi9w",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <NavigationController />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E3F0E2] via-[#F0F5EF] to-white pt-32 pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto md:mt-14 lg:mt-32">
          <div className="flex items-center gap-2 text-[#6B8E23] mb-4">
            <Activity className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide uppercase" style={{ fontFamily: "var(--font-poppins)" }}>
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

          <div className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <p
              className="text-[#445345] text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              A avaliação do equilíbrio é um dos métodos clínicos mais sensíveis para detectar precocemente
              disfunções neurológicas. Isso acontece porque o equilíbrio depende da integração simultânea de
              três sistemas essenciais, além do controle motor central.
              <span className="text-[#6B8E23] font-medium"> (EDWARDS et al., 2023)</span>
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-[#6B8E23]/20 shadow-sm">
                <h4
                  className="text-sm font-semibold uppercase tracking-wide text-[#6B8E23] mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Sistemas envolvidos
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-[#445345] text-sm sm:text-base">
                    <span className="text-[#6B8E23] mt-1">•</span>
                    <span>
                      <strong>Vestibular:</strong> detecta movimento e posição da cabeça.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#445345] text-sm sm:text-base">
                    <span className="text-[#6B8E23] mt-1">•</span>
                    <span>
                      <strong>Somatossensorial / proprioceptivo:</strong> recebe informações do solo, articulações e músculos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#445345] text-sm sm:text-base">
                    <span className="text-[#6B8E23] mt-1">•</span>
                    <span>
                      <strong>Visual / Controle motor central:</strong> incluindo cerebelo e córtices motores.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#6B8E23]/5 p-5 rounded-xl border border-[#6B8E23]/15">
                <h4
                  className="text-sm font-semibold uppercase tracking-wide text-[#1f2923] mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Por que é tão importante?
                </h4>
                <p
                  className="text-[#445345] text-sm sm:text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Quando há lesão em estruturas como cerebelo, vias somatossensoriais, núcleos vestibulares
                  ou córtex, o cérebro perde parte dessa integração. O resultado é oscilação corporal,
                  desalinhamento e dificuldade em estabilizar o centro de massa — por isso, pequenas alterações
                  neurológicas já aparecem em testes simples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que é? */}
      {/* <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]" style={{ fontFamily: "var(--font-playfair)" }}>
              O que é?
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-[#F8F9FA] p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-[#445345] text-base sm:text-lg leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
                O equilíbrio, segundo a mecânica (1ª Lei de Newton), ocorre quando as forças e momentos que atuam sobre um objeto são zero. A capacidade de manter o equilíbrio depende da posição do centro de massa e da área da base de apoio. O objeto permanece estável quando sua linha de gravidade se mantém dentro da base de apoio; se sair dessa área, ocorre o desequilíbrio e o objeto tende a cair. 
            </p>
          </div>
        </div>
      </section> */}

      {/* Estabilidade */}
{/*       <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]" style={{ fontFamily: "var(--font-playfair)" }}>
              Estabilidade
            </h2>
          </div>
          <div className="bg-gradient-to-br from-[#6B8E23]/5 to-transparent p-8 sm:p-10 md:p-12 rounded-2xl border-2 border-[#6B8E23]/20">
            <p className="text-[#445345] text-base sm:text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
              A estabilidade de um objeto aumenta quanto maior for o deslocamento da linha de gravidade que ele suporta antes de perder o equilíbrio ou quanto maior a força externa necessária para desequilibrá-lo. Assim, a estabilidade é maior quando a linha de gravidade permanece dentro da base de sustentação, e aumenta com uma base de sustentação maior, um centro de gravidade mais baixo e mais centralizado.
            </p>
          </div>
        </div>
      </section> */}

      {/* Equilíbrio Humano */}
{/*       <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]" style={{ fontFamily: "var(--font-playfair)" }}>
              Equilíbrio Humano
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-[#F8F9FA] p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-[#445345] text-base sm:text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
              Os princípios da mecânica de Newton sobre estabilidade, base de suporte (BoS), linha de gravidade e centro de gravidade (CoG) se aplicam tanto a objetos quanto a seres humanos. No corpo humano em posição ereta, o CoG é alto e a BoS é pequena, tornando a estabilidade mais difícil de manter.
            </p>
            <p className="text-[#445345] text-base sm:text-lg leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
              Em objetos inanimados, quando a linha de gravidade sai da BoS, a gravidade provoca a queda. Já nos humanos, quando isso ocorre, o corpo consegue perceber o risco de desequilíbrio e ativar músculos para compensar a ação da gravidade, evitando a queda. Portanto, o ser humano possui <strong className="text-[#6B8E23]">controle postural</strong>, enquanto objetos não. Esse controle é essencial para manter diferentes posturas e realizar atividades do dia a dia, e está relacionado a três grandes categorias de ações humanas.
            </p>
          </div>
        </div>
      </section> */}

      {/* Testes de Equilíbrio */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]" style={{ fontFamily: "var(--font-playfair)" }}>
              Testes de equilíbrio
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {testesEquilibrio.map((t, i) => (
              <div
                key={i}
                className="bg-[#F8F9FA] p-8 rounded-2xl border-2 border-[#6B8E23]/20 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-1xl sm:text-2xl font-bold text-[#6B8E23] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  {t.titulo}
                </h3>

                <p className="text-[#445345] text-base sm:text-lg leading-relaxed mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                  {t.descricao}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#6B8E23]/30 shadow-sm">
                    <ClipboardCheck className="w-6 h-6 text-[#6B8E23] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#6B8E23] mb-1"
                        style={{ fontFamily: "var(--font-poppins)" }}>
                        Equipamento
                      </p>
                      <p className="text-[#1f2923] text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-poppins)" }}>
                        {t.equipamento}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#5a4b1a] border border-[#D4AF37]/30">
                    {t.referencia}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6B8E23] text-white hover:brightness-110 transition-all"
                >
                  <Play className="w-4 h-4" />
                  {openIndex === i ? "Fechar vídeo" : "Como avaliar (vídeo)"}
                </button>

                {openIndex === i && (
                  <div className="mt-4">
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
                )}
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

          <div className="bg-gradient-to-br from-white to-[#F8F9FA] p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h3
              className="text-xl sm:text-2xl font-semibold text-[#6B8E23] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Quais são os testes?
            </h3>

            <p
              className="text-[#445345] text-base sm:text-lg leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              sentado na maca, não sei o nome ksks
            </p>

            {/* Vídeo junto ao conteúdo */}
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
                  <p
                    className="text-white text-base leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Utilize apenas o instrumental básico exigido pelos testes de equilíbrio, como: cronômetro, cadeira com 
                    braços e pés fixos, fita adesiva/fita métrica, espaço plano e seguro para marcha, superfície firme para 
                    testes estáticos.
                  </p>

                  {/* Galeria de imagens */}
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
                <p
                  className="text-white text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  O indivíduo deve estar com roupa confortável e, preferencialmente, descalço ou com calçado seguro. 
                  Sempre explicar o teste antes de iniciar, garantindo que ele compreenda a tarefa.
                </p>
              </div>

              {/* Item C */}
              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-white">
                  C
                </div>
                <p
                  className="text-white text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Manter-se próximo ao avaliado durante toda a execução, preparado para evitar quedas. Interromper caso 
                  haja tontura, insegurança, instabilidade ou mal-estar.
                </p>
              </div>

              {/* Item D */}
              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-white">
                  D
                </div>
                <p
                  className="text-white text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  O avaliador deve observar sempre oscilações do corpo, deslocamentos inesperados, necessidade de apoio, 
                  velocidade e qualidade da marcha, atrasos na execução. Esses elementos ajudam a identificar alterações 
                  no equilíbrio, propriocepção ou controle postural.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1f2923] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Precisa de uma avaliação de equilíbrio?
          </h3>
          <p className="text-lg text-[#445345] mb-8 max-w-1xl mx-auto" style={{ fontFamily: "var(--font-poppins)" }}>
            Nossa equipe está preparada para realizar uma avaliação completa com protocolos padronizados e seguros.
          </p>
          <a
            href="/#contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E23] text-white rounded-lg font-semibold hover:brightness-110 transition-all duration-300 shadow-lg"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Agendar Avaliação
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}
