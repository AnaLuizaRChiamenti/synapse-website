"use client"

import { NavigationController } from "@/components/NavigationController"
import { Brain, Zap, Activity, Target, ClipboardCheck, ChevronRight, Play } from "lucide-react"

export default function EquilibrioPage() {
  const testesEquilibrio = [
    {
      titulo: "Teste de Romberg",
      descricao:
        "O avaliado permanece de pé, descalço, com pés juntos e braços cruzados ou ao lado do corpo. Mantém-se com olhos abertos por ~30 s e depois fechados por 30–60 s, enquanto o avaliador observa oscilações. Positivo quando há perda de equilíbrio ao fechar os olhos (propriocepção/vestibular). Negativo quando mantém-se estável, sugerindo ausência de ataxia.",
      referencia: "SILVEIRA et al., 2024",
      equipamento: "Superfície plana segura; cronômetro opcional; apoio do examinador para segurança.",
    },
    {
      titulo: "Teste de Fukuda",
      descricao:
        "Avalia alterações vestibulares. Com olhos fechados e braços estendidos à frente, o paciente marcha no lugar enquanto o examinador conta até 50. Positivo se girar >45° para um lado ou deslocar-se >1 m para frente (tendência de rotação/avanço).",
      referencia: "MARTINS et al., 2017",
      equipamento: "Espaço livre e silencioso; marcação no chão opcional; cronômetro.",
    },
    {
      titulo: "Teste de Tandem",
      descricao:
        "Avalia equilíbrio estático e dinâmica da marcha. Posições: pés juntos (10 s), semi-tandem (10 s) e tandem (10 s). Encerrar se não sustentar por 3 s. Marcha tandem: caminhar em linha por 10 m colocando um pé à frente do outro; cronometra-se e usa-se o melhor de 3 tentativas.",
      referencia: "SILVEIRA et al., 2024",
      equipamento: "Cronômetro; fita para demarcar linha/metros; registrar dispositivo de auxílio e calçado.",
    },
    {
      titulo: "Teste TUG (Timed Up and Go)",
      descricao:
        "Avalia mobilidade, equilíbrio e risco de quedas. A partir de cadeira com braços, em piso plano: levantar-se sem usar os apoios, caminhar 3 m, virar 180°, retornar e sentar. Cronometra-se o tempo total (tipicamente 20–30 s em populações idosas).",
      referencia: "SILVEIRA et al., 2024",
      equipamento: "Cadeira com braços (sem rodinhas), fita/marcação a 3 m, cronômetro.",
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
            Equilíbrio
          </h1>

          <p
            className="text-lg sm:text-xl text-[#445345] max-w-3xl leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Entenda o conceito físico e fisiológico do equilíbrio, seus mecanismos de estabilidade e os principais testes para avaliá-lo na prática clínica.
          </p>
        </div>

        {/* Decorative Element */}
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
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              O que é?
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <p
              className="text-[#445345] text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Do ponto de vista mecânico (1ª Lei de Newton), o equilíbrio ocorre quando a resultante das forças e dos momentos sobre um corpo é nula. Em humanos, a manutenção do equilíbrio depende da relação entre o centro de massa, a linha de gravidade e a base de apoio: quanto mais a linha de gravidade se mantém dentro da base, maior a estabilidade.
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
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Estabilidade
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm space-y-6">
            <p
              className="text-[#445345] text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              A estabilidade aumenta quando a base de apoio é maior, o centro de gravidade é mais baixo/centralizado e a linha de gravidade permanece dentro da base. Em termos práticos, é o quanto de perturbação postural um indivíduo suporta antes de perder o equilíbrio, ou quanta força externa é necessária para desequilibrá-lo.
            </p>
          </div>
        </div>
      </section>

      {/* Equilíbrio humano */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Brain className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Equilíbrio humano
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <p
              className="text-[#445345] text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Diferente de objetos inanimados, humanos dispõem de controle postural: sistemas sensoriais (visual, vestibular e somatossensorial) detectam ameaças à estabilidade e acionam respostas motoras para manter a projeção do centro de massa dentro da base de suporte.
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
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Testes de equilíbrio
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {testesEquilibrio.map((t, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#6B8E23]/5 to-transparent p-8 rounded-2xl border-2 border-[#6B8E23]/20"
              >
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#6B8E23] mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {t.titulo}
                </h3>
                <p
                  className="text-[#445345] text-base sm:text-lg leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
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
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B8E23] text-white hover:brightness-110 transition-all"
                  >
                    <Play className="w-4 h-4" /> Como avaliar (vídeo)
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dicas de aplicação (Semiotécnica) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-[#6B8E23] to-[#556B2F]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <ClipboardCheck className="w-6 h-6 text-white" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Como avaliar? (Semiotécnica)
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-2xl border border-white/20">
            <div className="space-y-6">
              {["Ambiente seguro e bem iluminado; permaneça próximo para suporte.", "Padronize instruções e tempo de execução para comparabilidade.", "Registre calçado e dispositivos de auxílio usados.", "Interrompa o teste em caso de risco, tontura ou mal-estar."].map((dica, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/10 p-6 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-white">
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <p className="text-white text-base leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
                    {dica}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto text-center">
          <h3
            className="text-3xl sm:text-4xl font-bold text-[#1f2923] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
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
