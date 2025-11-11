"use client"

import { NavigationController } from "@/components/NavigationController"
import { Brain, Target, Zap, Activity, ChevronRight, ClipboardCheck } from "lucide-react"

export default function ReflexosPage() {
  const reflexosProfundos = ["Patelar", "Aquileu", "Bicipital", "Tricipital"]
  const reflexosSuperficiais = ["Cutâneo-abdominal", "Cutâneo-plantar", "Reflexo de Babinski"]

  return (
    <div className="min-h-screen bg-white">
      <NavigationController />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E3F0E2] via-[#F0F5EF] to-white pt-32 pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto  mt-32">
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
            Reflexos
          </h1>

          <p
            className="text-lg sm:text-xl text-[#445345] max-w-3xl leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Entenda o funcionamento dos reflexos, sua importância clínica e como avaliá-los na prática fisioterapêutica.
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
              O reflexo é uma resposta involuntária a um estímulo sensorial. Quando um receptor sensorial é estimulado,
              ele envia impulsos nervosos aferentes ao sistema nervoso central (SNC), que processa a informação e envia
              impulsos eferentes para um órgão efetor, como um músculo ou uma glândula, gerando uma resposta. É dividido
              em componentes segmentar e suprassegmentar. O componente segmentar é formado por um centro reflexo local
              na medula espinal ou no tronco encefálico e suas conexões aferentes e eferentes. O componente
              suprassegmentar é constituído de vias centrais descendentes, que controlam, modulam e regulam a atividade
              segmentar. <span className="text-[#6B8E23] font-medium">(CAMPBELL, 2013, p.860)</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona? */}
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
              Como funciona?
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm space-y-6">
            <p
              className="text-[#445345] text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              O estímulo é recebido pelo receptor, que pode ser uma terminação sensorial na pele, nas mucosas, no
              músculo e no tendão. A estimulação do receptor inicia um impulso que segue pela via aferente até o sistema
              nervoso central (SNC), onde há sinapse em um centro reflexo que ativa o corpo celular do neurônio
              eferente. O neurônio sensorial fornece o componente aferente e consiste em um corpo celular que se
              encontra no gânglio da raiz dorsal (GRD) e inerva o músculo ou órgão tendinoso de Golgi associado ao
              músculo. O neurônio motor fornece o componente eferente e consiste em um motoneurônio alfa localizado no
              corno anterior da medula espinhal.
            </p>

            <p
              className="text-[#445345] text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              A via inicia no fuso muscular, um órgão proprioceptivo. O fuso muscular compreende fibras intrafusais
              envoltas por uma cápsula de tecido conjuntivo responsável por detectar o estiramento muscular. O fuso
              muscular está presente dentro do músculo entre as fibras extrafusais. O mecanismo de elicitação de um
              reflexo tendinoso profundo em um paciente envolve tendões, músculos e o arco reflexo. A percussão no
              tendão apropriado causa alongamento passivo do músculo associado. O alongamento da fibra muscular é
              detectado pelo fuso muscular localizado dentro das fibras musculares.
            </p>

            <p
              className="text-[#445345] text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              O fuso muscular é um proprioceptor sensorial responsável por identificar o comprimento das fibras
              musculares, composto por fibras intrafusais que não se contraem. As fibras sensoriais aferentes Ia nos
              fusos musculares produzem potenciais de ação em resposta ao alongamento. Essas fibras aferentes Ia vão
              para a medula espinhal na raiz dorsal e estimulam monossinapticamente o neurônio motor alfa que vai para
              as fibras extrafusais do músculo homônimo. O glutamato é o neurotransmissor na sinapse central. As fibras
              musculares extrafusais então geram uma contração para resistir a esse alongamento. Quando a contração
              muscular ocorre, o fuso muscular diminui a frequência de disparo do potencial de ação e o reflexo é
              extinto.
            </p>

            <p
              className="text-[#445345] text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              O músculo antagonista é inibido durante o reflexo, enquanto o músculo agonista se contrai. [8] Essa ação
              ocorre polissinapticamente por meio do interneurônio inibitório Ia, que inibe os neurônios motores alfa
              para o músculo antagonista. Por exemplo, durante o reflexo patelar, os músculos isquiotibiais são inibidos
              e relaxados, enquanto os músculos quadríceps são estimulados e se contraem. Dentro do fuso muscular, o
              neurônio motor gama causa o estreitamento ou relaxamento das fibras musculares intrafusais para regular a
              sensibilidade do fuso muscular e a resposta do reflexo. Isso é mediado pela acetilcolina.
            </p>

            <p
              className="text-[#445345] text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              O neurônio eferente transmite o impulso para o efetor: a célula, o músculo, a glândula ou o vaso
              sanguíneo, que então responde. Um distúrbio na função de uma parte do arco reflexo – receptor, via
              aferente, centro do reflexo, via eferente ou aparelho efetor – interrompe o arco reflexo, com consequente
              diminuição ou perda do reflexo.
            </p>
          </div>
        </div>
      </section>

      {/* Quais são os reflexos? */}
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
              Quais são os reflexos?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Profundos */}
            <div className="bg-gradient-to-br from-[#6B8E23]/5 to-transparent p-8 rounded-2xl border-2 border-[#6B8E23]/20">
              <h3
                className="text-2xl sm:text-3xl font-bold text-[#6B8E23] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Profundos
              </h3>

              <ul className="space-y-4">
                {reflexosProfundos.map((reflexo, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-[#6B8E23] group-hover:scale-125 transition-transform" />
                    <span className="text-[#445345] text-lg font-medium" style={{ fontFamily: "var(--font-poppins)" }}>
                      {reflexo}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Superficiais */}
            <div className="bg-gradient-to-br from-[#D4AF37]/5 to-transparent p-8 rounded-2xl border-2 border-[#D4AF37]/20">
              <h3
                className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Superficiais
              </h3>

              <ul className="space-y-4">
                {reflexosSuperficiais.map((reflexo, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
                    <span className="text-[#445345] text-lg font-medium" style={{ fontFamily: "var(--font-poppins)" }}>
                      {reflexo}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Como avaliar? */}
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
              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-white">
                  A
                </div>
                <div>
                  <p className="text-white text-base leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
                    Instrumental adequado, ou seja, use um dos vários tipos de martelo de reflexos disponíveis no
                    mercado (Babinski, Taylor, McGill, Buck), com borracha macia, para não causar dor à percussão.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-white">
                  B
                </div>
                <div>
                  <p className="text-white text-base leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
                    A região corporal que será examinada deve estar descoberta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-white">
                  C
                </div>
                <div>
                  <p className="text-white text-base leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
                    Observação da melhor posição de pesquisa para cada reflexo. Uma regra geral deve ser lembrada: a de
                    manter o efetor do R em leve estado de tensão, favorecedor da resposta reflexa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-white">
                  D
                </div>
                <div>
                  <p className="text-white text-base leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
                    Relaxamento adequado do paciente, pois a contratura excessiva bloqueia o reflexo. Converse, distraia
                    ou use situações que ajudem a relaxar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como o corpo reage? */}
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
              Como o corpo reage?
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <p
              className="text-[#445345] text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Quando o reflexo é ativado, o músculo agonista se contrai enquanto o antagonista é inibido. Esse mecanismo
              garante uma resposta rápida, coordenada e automática — essencial para o controle postural e a proteção
              corporal.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
