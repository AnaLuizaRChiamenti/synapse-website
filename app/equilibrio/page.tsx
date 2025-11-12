"use client"

import { useState } from "react"
import { NavigationController } from "@/components/NavigationController"
import { Brain, Zap, Activity, Target, ClipboardCheck, ChevronRight, Play } from "lucide-react"

type TesteEquilibrio = {
  titulo: string
  descricao: string
  referencia: string
  equipamento: string
  video: string
}

export default function EquilibrioPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const testesEquilibrio: TesteEquilibrio[] = [
    {
      titulo: "Teste de Romberg",
      descricao:
        "O avaliado permanece de pé, descalço, com pés juntos e braços cruzados ou ao lado do corpo. Mantém-se com olhos abertos por ~30 s e depois fechados por 30–60 s. Positivo quando há perda de equilíbrio ao fechar os olhos.",
      referencia: "SILVEIRA et al., 2024",
      equipamento: "Superfície plana segura; cronômetro opcional; apoio do examinador.",
      video: "/videos/video-teste-de-romberg.mp4",
    },
    {
      titulo: "Teste de Fukuda",
      descricao:
        "Com olhos fechados e braços estendidos, o paciente marcha no lugar por ~50 passos. Positivo se girar >45° para um lado ou deslocar-se >1 m.",
      referencia: "MARTINS et al., 2017",
      equipamento: "Espaço livre e silencioso; marcação no chão opcional; cronômetro.",
      video: "/videos/video-teste-de-fukuda.mp4",
    },
    {
      titulo: "Teste de Reação de Equilíbrio",
      descricao:
        "Observa respostas automáticas a perturbações posturais leves e moderadas, avaliando ajustes de tornozelo, quadril e passos de proteção.",
      referencia: "SILVEIRA et al., 2024",
      equipamento: "Ambiente seguro e examinador treinado para provocar perturbações controladas.",
      video: "/videos/video-teste-de-reacao-de-equilibrio.mp4",
    },
    {
      titulo: "Teste de Marcha Tandem",
      descricao:
        "Caminhar em linha por ~10 m colocando um pé imediatamente à frente do outro, calcanhar-toe. Cronometrar e considerar o melhor de 3 tentativas.",
      referencia: "SILVEIRA et al., 2024",
      equipamento: "Fita para demarcar linha/metros; cronômetro.",
      video: "/videos/video-teste-de-marcha-tandem.mp4",
    },
    {
      titulo: "Teste TUG (Timed Up and Go)",
      descricao:
        "Levantar de cadeira com braços, caminhar 3 m, virar 180°, retornar e sentar. Cronometrar o tempo total.",
      referencia: "SILVEIRA et al., 2024",
      equipamento: "Cadeira com braços (sem rodinhas), marcação a 3 m, cronômetro.",
      video: "/videos/video-teste-de-tug.mp4",
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
            <span className="text-sm font-medium tracking-wide uppercase" style={{ fontFamily: "var(--font-poppins)" }}>
              Avaliação Neurofuncional
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1f2923] mb-6 leading-tight"
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

      {/* O que é? */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f2923]" style={{ fontFamily: "var(--font-playfair)" }}>
              O que é?
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-[#445345] text-base sm:text-lg leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
              Do ponto de vista mecânico (1ª Lei de Newton), o equilíbrio ocorre quando a resultante das forças e dos
              momentos sobre um corpo é nula. Em humanos, a manutenção do equilíbrio depende da relação entre o centro
              de massa, a linha de gravidade e a base de apoio.
            </p>
          </div>
        </div>
      </section>

      {/* Estabilidade */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f2923]" style={{ fontFamily: "var(--font-playfair)" }}>
              Estabilidade
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm space-y-6">
            <p className="text-[#445345] text-base sm:text-lg leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
              A estabilidade aumenta quando a base de apoio é maior, o centro de gravidade é mais baixo/centralizado e a
              linha de gravidade permanece dentro da base.
            </p>
          </div>
        </div>
      </section>

      {/* Testes de Equilíbrio */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f2923]" style={{ fontFamily: "var(--font-playfair)" }}>
              Testes de equilíbrio
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {testesEquilibrio.map((t, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#6B8E23]/5 to-transparent p-8 rounded-2xl border-2 border-[#6B8E23]/20"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#6B8E23] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  {t.titulo}
                </h3>

                <p className="text-[#445345] text-base sm:text-lg leading-relaxed mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                  {t.descricao}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#6B8E23]/30">
                    <ClipboardCheck className="w-4 h-4 text-[#6B8E23]" />
                    <span className="text-[#1f2923]" style={{ fontFamily: "var(--font-poppins)" }}>
                      Equipamento: {t.equipamento}
                    </span>
                  </span>

                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#5a4b1a] border border-[#D4AF37]/30">
                    Referência: {t.referencia}
                  </span>

                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B8E23] text-white hover:brightness-110 transition-all"
                  >
                    <Play className="w-4 h-4" />
                    {openIndex === i ? "Fechar vídeo" : "Como avaliar (vídeo)"}
                  </button>
                </div>

                {openIndex === i && (
                  <div className="mt-4">
                    <video
                      className="w-full rounded-lg shadow border border-[#6B8E23]/20"
                      controls
                      preload="metadata"
                      src={t.video}
                    >
                      <track kind="captions" />
                      Seu navegador não suporta vídeo HTML5.
                    </video>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-[#1f2923] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Precisa de uma avaliação de equilíbrio?
          </h3>
          <p className="text-lg text-[#445345] mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-poppins)" }}>
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
