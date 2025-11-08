"use client"

import { NavigationController } from "@/components/NavigationController"
import { Brain, Zap, Eye } from "lucide-react"

export default function ReflexoPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF7] relative overflow-hidden text-[#1f2923]">
      <NavigationController />

      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E9F4E6] via-[#F3F9F2] to-[#FFFFFF]" />
      <div className="absolute top-[-5rem] right-[-10rem] w-[40rem] h-[40rem] bg-[#A4C78D]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-5rem] left-[-10rem] w-[35rem] h-[35rem] bg-[#D4AF37]/10 rounded-full blur-3xl" />

      {/* Conteúdo principal */}
      <section className="relative z-10 px-6 md:px-16 lg:px-32 xl:px-48 py-24">
        {/* Cabeçalho */}
        <header className="text-center mb-20">
          <h1
            className="text-5xl md:text-6xl font-bold text-[#2c402c] mb-6"
            style={{ fontFamily: "var(--font-playfair)", marginTop: "10rem" }}
          >
            Reflexos
          </h1>
          <p
            className="text-lg text-[#445345]/90 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Entenda o funcionamento dos reflexos, sua importância clínica e como avaliá-los na prática fisioterapêutica.
          </p>
        </header>

        {/* Corpo */}
        <div className="space-y-20">
          {/* Seção 1 */}
          <section className="bg-white/90 border border-[#e1e7dd] shadow-lg rounded-3xl p-10 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-semibold text-[#4f6c19] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              O que é?
            </h2>
            <p className="text-justify leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
              O reflexo é uma resposta involuntária a um estímulo sensorial. Quando um receptor
              sensorial é estimulado, ele envia impulsos nervosos aferentes ao sistema nervoso central
              (SNC), que processa a informação e envia impulsos eferentes para um órgão efetor, como
              um músculo ou uma glândula, gerando uma resposta. É dividido em componentes
              segmentar e suprassegmentar. O componente segmentar é formado por um centro reflexo
              local na medula espinal ou no tronco encefálico e suas conexões aferentes e eferentes. O
              componente suprassegmentar é constituído de vias centrais descendentes, que controlam,
              modulam e regulam a atividade segmentar. (CAMPBELL, 2013, p.860).
            </p>
          </section>

          {/* Seção 2 */}
          <section className="bg-[#FAFCF9] border border-[#e1e7dd] shadow-md rounded-3xl p-10">
            <h2 className="text-3xl font-semibold text-[#4f6c19] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Como funciona?
            </h2>
            <p className="text-justify leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
              O estímulo é recebido pelo receptor, que pode ser uma terminação sensorial na pele, nas
              mucosas, no músculo e no tendão. A estimulação do receptor inicia um impulso que segue
              pela via aferente até o sistema nervoso central (SNC), onde há sinapse em um centro
              reflexo que ativa o corpo celular do neurônio eferente. O neurônio sensorial fornece o
              componente aferente e consiste em um corpo celular que se encontra no gânglio da raiz
              dorsal (GRD) e inerva o músculo ou órgão tendinoso de Golgi associado ao músculo. O
              neurônio motor fornece o componente eferente e consiste em um motoneurônio alfa
              localizado no corno anterior da medula espinhal. A via inicia no fuso muscular, um órgão
              proprioceptivo. O fuso muscular compreende fibras intrafusais envoltas por uma cápsula de
              tecido conjuntivo responsável por detectar o estiramento muscular. O fuso muscular está
              presente dentro do músculo entre as fibras extrafusais. O mecanismo de elicitação de um
              reflexo tendinoso profundo em um paciente envolve tendões, músculos e o arco reflexo. A
              percussão no tendão apropriado causa alongamento passivo do músculo associado. O
              alongamento da fibra muscular é detectado pelo fuso muscular localizado dentro das fibras
              musculares. O fuso muscular é um proprioceptor sensorial responsável por identificar o
              comprimento das fibras musculares, composto por fibras intrafusais que não se contraem. As
              fibras sensoriais aferentes Ia nos fusos musculares produzem potenciais de ação em resposta
              ao alongamento. Essas fibras aferentes Ia vão para a medula espinhal na raiz dorsal e
              estimulam monossinapticamente o neurônio motor alfa que vai para as fibras extrafusais do
              músculo homônimo. O glutamato é o neurotransmissor na sinapse central. As fibras
              musculares extrafusais então geram uma contração para resistir a esse alongamento. Quando
              a contração muscular ocorre, o fuso muscular diminui a frequência de disparo do potencial de
              ação e o reflexo é extinto.
              O músculo antagonista é inibido durante o reflexo, enquanto o músculo agonista se contrai.
              [8] Essa ação ocorre polissinapticamente por meio do interneurônio inibitório Ia, que inibe
              os neurônios motores alfa para o músculo antagonista. Por exemplo, durante o reflexo patelar,
              os músculos isquiotibiais são inibidos e relaxados, enquanto os músculos quadríceps são
              estimulados e se contraem. Dentro do fuso muscular, o neurônio motor gama causa o
              estreitamento ou relaxamento das fibras musculares intrafusais para regular a sensibilidade do
              fuso muscular e a resposta do reflexo. Isso é mediado pela acetilcolina.
              O neurônio eferente transmite o impulso para o efetor: a célula, o músculo, a glândula ou o
              vaso sanguíneo, que então responde. Um distúrbio na função de uma parte do arco reflexo
              – receptor, via aferente, centro do reflexo, via eferente ou aparelho efetor – interrompe o
              arco reflexo, com consequente diminuição ou perda do reflexo.
            </p>
          </section>

          {/* Seção 3 */}
          <section className="bg-white border border-[#e1e7dd] shadow-md rounded-3xl p-10">
            <h2 className="text-3xl font-semibold mb-4 text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
              Quais são os reflexos?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#F8FBF7] p-6 rounded-2xl border border-[#dfe4d8] hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-[#6B8E23] mb-2 flex items-center gap-2">
                  Profundos:
                </h3>
                <ul className="list-disc list-inside space-y-1" style={{ fontFamily: "var(--font-poppins)" }}>
                  <li>Patelar</li>
                  <li>Aquileu</li>
                  <li>Bicipital</li>
                  <li>Tricipital</li>
                </ul>
              </div>
              <div className="bg-[#F8FBF7] p-6 rounded-2xl border border-[#dfe4d8] hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-[#6B8E23] mb-2 flex items-center gap-2">
                  Superficiais:
                </h3>
                <ul className="list-disc list-inside space-y-1" style={{ fontFamily: "var(--font-poppins)" }}>
                  <li>Cutâneo-abdominal</li>
                  <li>Cutâneo-plantar</li>
                  <li>Reflexo de Babinski</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seção 4 */}
          <section className="bg-[#FAFCF9] border border-[#e1e7dd] shadow-md rounded-3xl p-10">
            <h2 className="text-3xl font-semibold mb-4 text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
              Como avaliar? (Semiotécnica)
            </h2>
            <ul className="list-inside space-y-2" style={{ fontFamily: "var(--font-poppins)" }}>
              <li>
                <strong>A)</strong> Instrumental adequado, ou seja, use um dos vários tipos de martelo de reflexos
                disponíveis no mercado (Babinski, Taylor, McGill, Buck), com borracha macia, para não causar dor à percussão
              </li>
              <li>
                <strong>B)</strong> A região corporal que será examinada deve estar descoberta
              </li>
              <li>
                <strong>C)</strong> Observação da melhor posição de pesquisa para cada reflexo. Uma regra geral deve ser
                lembrada: a de manter o efetor do R em leve estado de tensão, favorecedor da resposta reflexa.
              </li>
              <li>
                <strong>D)</strong> Relaxamento adequado do paciente, pois a contratura excessiva bloqueia o reflexo. Converse,
                distraia ou use situações que ajudem a relaxar.
              </li>
            </ul>
          </section>

          {/* Seção 5 */}
          <section className="bg-white/95 border border-[#e1e7dd] shadow-lg rounded-3xl p-10">
            <h2 className="text-3xl font-semibold mb-4 text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
              Como o corpo reage?
            </h2>
            <p className="text-justify leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
              Quando o reflexo é ativado, o músculo agonista se contrai enquanto o antagonista é inibido. Esse mecanismo
              garante uma resposta rápida, coordenada e automática — essencial para o controle postural e a proteção
              corporal.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
