"use client"

import { useState } from "react"
import { NavigationController } from "@/components/NavigationController"
import {
  Brain,
  Target,
  Zap,
  Activity,
  ChevronRight,
  ClipboardCheck,
  BookOpen,
  Play,
} from "lucide-react"

function getYoutubeId(url: string) {
  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  const match = url.match(regExp)
  return match ? match[1] : null
}

export default function ReflexosPage() {
  // controla qual card de vídeo está aberto
  const [openVideoKey, setOpenVideoKey] = useState<string | null>(null)

  const reflexosProfundos = [
    {
      nome: "Aquileu",
      descricao:
        "É a resposta do pé quando o tendão de Aquiles (tendão calcâneo) é percutido, geralmente com o pé em flexão plantar.",
      respostaEsperada: "O pé se move levemente para cima (plantiflexão).",
      avalia: "Raízes nervosas S1 e S2, e do nervo isquiático.",
      comoEFeito:
        "Com o paciente sentado e os pés pendentes, o examinador apoia o pé em posição relaxada, colocando uma das mãos sob a planta do pé do paciente e realizando uma leve dorsiflexão e percuti o tendão de Aquiles logo acima do calcâneo",
      referencia: "(RODRÍGUEZ-BEATO; DE JESUS, 2023)",
      video: "https://www.youtube.com/watch?v=WHfIkbKqO2w", // <- troque pelo link certo
    },
    {
      nome: "Bicipital",
      descricao:
        "Reflexo profundo que avalia a integridade do arco reflexo do bíceps braquial.",
      respostaEsperada: "A flexão do antebraço e/ou a contração do músculo bíceps.",
      avalia: "Raízes nervosas C5 e C6, e o nervo musculocutâneo.",
      comoEFeito:
        "O examinador posiciona o antebraço do paciente levemente fletido e, o polegar do examinador deve estar firmemente posicionado sobre o tendão do bíceps e com um martelo de reflexos, percute o tendão do bíceps na fossa antecubital, acima do deo do examinador.",
      referencia: "(RODRÍGUEZ-BEATO; DE JESUS, 2023)",
      video: "https://www.youtube.com/watch?v=sy3HRMeZiNw", // <- troque pelo link certo
    },
    {
      nome: "Patelar",
      descricao:
        "É a extensão do joelho ao se bater no tendão patelar (localizado logo abaixo da patela), que estira o músculo quadríceps. ",
      respostaEsperada: "A perna se estende rapidamente.",
      avalia:
        "A integridade do nervo femoral e das raízes nervosas de L2, L3 e L4 da medula espinhal. ",
      comoEFeito:
        "Paciente sentado com pernas livres; percutir o tendão patelar com martelo de reflexo",
      referencia: "(RODRÍGUEZ-BEATO; DE JESUS, 2023)",
      video: "https://www.youtube.com/watch?v=2KIlDSI0-iQ", // <- troque pelo link certo
    },
    {
      nome: "Tricipital",
      descricao:
        "Reflexo profundo que avalia a integridade do arco reflexo do tríceps braquial.",
      respostaEsperada: "A extensão do antebraço sobre o braço.",
      avalia: "Raízes nervosas C6, C7 e C8.",
      comoEFeito:
        "O examinador segura o braço do paciente com o cotovelo a 90 graus, deixando-o pendular,  o polegar do examinador deve estar firmemente posicionado sobre o tendão do tríceps. Em seguida,  percute o dedo do examinador que está acima do tendão do tríceps, que fica na parte posterior do braço, logo acima do cotovelo.",
      referencia: "(RODRÍGUEZ-BEATO; DE JESUS, 2023)",
      video: "https://www.youtube.com/watch?v=DOf1FBOzQsk", // <- troque pelo link certo
    },
  ]

  const reflexosSuperficiais = [
     {
      nome: "Cutâneo-plantar em extensão:",
      descricao:
        "Um teste para avaliar o reflexo cutâneo plantar.",
      comoEFeito:
        "Estimulação com objeto (p. ex., haste do martelo) na borda lateral da planta do pé em direção à base do hálux.",
      respostaNormal:
        "Flexão dos dedos do pé( para baixo).",
      respostaPatologica:
        "A extensão do dedão do pé e a abertura dos outros dedos em leque, conhecida como sinal de Babinski.",
      avalia:
        "O que avalia: Lesão no trato piramidal, responsável pelo controle motor voluntário.",
      obs:
        "Em bebês com menos de 2 anos, é normal devido à imaturidade do sistema nervoso e desaparece com o desenvolvimento.",
      referencia: "(RODRÍGUEZ-BEATO; DE JESUS, 2023)",
      video: "https://www.youtube.com/watch?v=YpKJwcdZUoA",
    },
    {
      nome: "Cutâneo-abdominal:",
      descricao:
        "Reflexo superficial avalia integridade dos arcos nervosos toracoabdominais.",
      comoEFeito:
        "feito: O examinador estimula levemente a pele do abdômen com um objeto pontiagudo, mas não afiado, como o martelo de reflexos.",
      estimulo:
        "O estímulo é feito deslizando a pele em direção à linha média, em diferentes níveis:",
      niveis: [
        "Epigástrico: acima do umbigo (correspondendo aproximadamente aos níveis de T6-T8).",
        "Umbilical: ao redor do umbigo (T8-T10).",
        "Hipogástrico: abaixo do umbigo (T10-T12).",
      ],
      respostaNormal:
        "Resposta esperada: contração dos músculos abdominais do mesmo lado, causando um leve desvio do umbigo em direção ao estímulo.",
      referencia: "(RODRÍGUEZ-BEATO; DE JESUS, 2023)",
      video: "https://www.youtube.com/watch?v=U0vBWbuwSVU",
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
            <span
              className="text-sm font-medium tracking-wide uppercase"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Avaliação Neurofuncional
            </span>
          </div>

          <div className="mb-3">
            <span
              className="text-sm sm:text-base font-semibold text-[#445345] uppercase tracking-wide"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Semiologia Neurológica
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2923] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Reflexos
          </h1>

          <p
            className="text-lg sm:text-xl text-[#445345] max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Entenda o funcionamento dos reflexos, sua importância clínica e como avaliá-los na prática fisioterapêutica.
          </p>
        </div>

        <div className="absolute top-20 right-10 opacity-10">
          <Brain className="w-64 h-64 text-[#6B8E23]" strokeWidth={0.5} />
        </div>
      </section>

      {/* O que é? */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white text-justify leading-relaxed">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Conceito
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <p
              className="text-[#445345] text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
                O reflexo é uma resposta involuntária a um estímulo sensorial. Quando um receptor sensorial é estimulado, ele envia impulsos nervosos aferentes ao sistema nervoso central (SNC), que processa a informação e envia impulsos eferentes para um órgão efetor, como um músculo ou tendão, gerando uma resposta.              <span className="text-[#6B8E23] font-medium">
                (CAMPBELL, 2013, p.860)
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona? */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA] text-justify leading-relaxed">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Como funciona?
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-sm space-y-6">
            <p
              className="text-[#445345] text-base sm:text-lg leading-relaxed whitespace-pre-line"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
            O receptor sensorial detecta o estímulo e envia o impulso pela via aferente até o SNC, onde ocorre sinapse com a via eferente. O impulso parte do fuso muscular que percebe o estiramento e ativa o motoneurônio alfa, gerando a contração das fibras musculares. Com a contração, a atividade do fuso diminui e o reflexo se encerra. O neurônio gama ajusta a sensibilidade do fuso. A resposta final chega ao músculo, e qualquer falha em partes do arco reflexo pode reduzir ou abolir o reflexo.            </p>
            <p
              className="text-[#6B8E23] text-sm font-medium"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              (RODRÍGUEZ-BEATO; DE JESUS, 2023).
            </p>
          </div>
        </div>
      </section>

      {/* Quais são os reflexos? */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white text-justify leading-relaxed">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Quais são os reflexos?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Profundos */}
            <div className="bg-gradient-to-br from-[#6B8E23]/5 to-transparent p-8 rounded-2xl border-2 border-[#6B8E23]/20">
              <h3
                className="text-1xl sm:text-2xl font-bold text-[#6B8E23] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Profundos
              </h3>

              <ul className="space-y-4">
                {reflexosProfundos.map((reflexo, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-[#6B8E23] group-hover:scale-125 transition-transform" />
                    <span
                      className="text-[#445345] text-lg font-medium"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {reflexo.nome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Superficiais */}
            <div className="bg-gradient-to-br from-[#D4AF37]/5 to-transparent p-8 rounded-2xl border-2 border-[#D4AF37]/20">
              <h3
                className="text-1xl sm:text-2xl font-bold text-[#D4AF37] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Superficiais
              </h3>

              <ul className="space-y-4">
                {reflexosSuperficiais.map((reflexo, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
                    <span
                      className="text-[#445345] text-lg font-medium"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {reflexo.nome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reflexos Profundos - Detalhamento */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-[#6B8E23]/5 to-white text-justify leading-relaxed">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Reflexos Profundos - Detalhamento
            </h2>
          </div>

          <div className="space-y-8">
            {reflexosProfundos.map((reflexo, index) => (
              <div
                key={index}
                className="bg-white p-8 sm:p-10 rounded-2xl shadow-md border-l-4 border-[#6B8E23] hover:shadow-lg transition-shadow"
              >
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#6B8E23] mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {reflexo.nome}
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4
                      className="text-sm font-semibold text-[#1f2923] uppercase tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      O que é:
                    </h4>
                    <p
                      className="text-[#445345] text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {reflexo.descricao}
                    </p>
                  </div>

                  {reflexo.comoEFeito && (
                    <div>
                      <h4
                        className="text-sm font-semibold text-[#1f2923] uppercase tracking-wide mb-2"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        Como é feito:
                      </h4>
                      <p
                        className="text-[#445345] text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {reflexo.comoEFeito}
                      </p>
                    </div>
                  )}

                  <div>
                    <h4
                      className="text-sm font-semibold text-[#1f2923] uppercase tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Resposta esperada:
                    </h4>
                    <p
                      className="text-[#445345] text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {reflexo.respostaEsperada}
                    </p>
                  </div>

                  <div className="bg-[#6B8E23]/5 p-4 rounded-lg border border-[#6B8E23]/10">
                    <h4
                      className="text-sm font-semibold text-[#6B8E23] uppercase tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      O que avalia:
                    </h4>
                    <p
                      className="text-[#445345] text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {reflexo.avalia}
                    </p>
                  </div>

                  {reflexo.referencia && (
                    <p
                      className="text-[#6B8E23] text-sm font-medium"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {reflexo.referencia}
                    </p>
                  )}

                  {/* Vídeo */}
                  {reflexo.video && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenVideoKey(
                            openVideoKey === `profundo-${index}`
                              ? null
                              : `profundo-${index}`
                          )
                        }
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6B8E23] text-white hover:brightness-110 transition-all mt-2"
                      >
                        <Play className="w-4 h-4" />
                        {openVideoKey === `profundo-${index}`
                          ? "Fechar vídeo"
                          : "Como avaliar (vídeo)"}
                      </button>

                      {openVideoKey === `profundo-${index}` && (
                        <div className="mt-4">
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow border border-[#6B8E23]/20">
                            <iframe
                              className="absolute inset-0 w-full h-full"
                              src={`https://www.youtube.com/embed/${getYoutubeId(
                                reflexo.video
                              )}`}
                              title={`Vídeo - ${reflexo.nome}`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflexos Superficiais - Detalhamento */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-[#D4AF37]/5 to-white text-justify leading-relaxed">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Reflexos Superficiais - Detalhamento
            </h2>
          </div>

          <div className="space-y-8">
            {reflexosSuperficiais.map((reflexo, index) => (
              <div
                key={index}
                className="bg-white p-8 sm:p-10 rounded-2xl shadow-md border-l-4 border-[#D4AF37] hover:shadow-lg transition-shadow"
              >
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {reflexo.nome}
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4
                      className="text-sm font-semibold text-[#1f2923] uppercase tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      O que é:
                    </h4>
                    <p
                      className="text-[#445345] text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {reflexo.descricao}
                    </p>
                  </div>

                  {reflexo.comoEFeito && (
                    <div>
                      <h4
                        className="text-sm font-semibold text-[#1f2923] uppercase tracking-wide mb-2"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        Como é feito:
                      </h4>
                      <p
                        className="text-[#445345] text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {reflexo.comoEFeito}
                      </p>
                    </div>
                  )}

                  {"estimulo" in reflexo && reflexo.estimulo && (
                    <div>
                      <h4
                        className="text-sm font-semibold text-[#1f2923] uppercase tracking-wide mb-2"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        Estímulo:
                      </h4>
                      <p
                        className="text-[#445345] text-base leading-relaxed mb-2"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {reflexo.estimulo}
                      </p>

                      {"niveis" in reflexo && reflexo.niveis && (
                        <ul className="space-y-2 ml-4">
                          {reflexo.niveis.map((nivel: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ChevronRight className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                              <span
                                className="text-[#445345] text-base"
                                style={{ fontFamily: "var(--font-poppins)" }}
                              >
                                {nivel}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {"respostaNormal" in reflexo && reflexo.respostaNormal && (
                    <div>
                      <h4
                        className="text-sm font-semibold text-[#1f2923] uppercase tracking-wide mb-2"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        Resposta normal (adultos):
                      </h4>
                      <p
                        className="text-[#445345] text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {reflexo.respostaNormal}
                      </p>
                    </div>
                  )}

                  {"respostaPatologica" in reflexo &&
                    reflexo.respostaPatologica && (
                      <div>
                        <h4
                          className="text-sm font-semibold text-[#1f2923] uppercase tracking-wide mb-2"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          Resposta patológica (adultos):
                        </h4>
                        <p
                          className="text-[#445345] text-base leading-relaxed"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          {reflexo.respostaPatologica}
                        </p>
                      </div>
                    )}
                  
                  {"obs" in reflexo && reflexo.obs && (
                    <div>
                      <h4
                        className="text-sm font-semibold text-[#1f2923] uppercase tracking-wide mb-2"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        OBS:
                      </h4>
                      <p
                        className="text-[#445345] text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {reflexo.obs}
                      </p>
                    </div>
                  )}

                  {reflexo.referencia && (
                    <p
                      className="text-[#D4AF37] text-sm font-medium"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {reflexo.referencia}
                    </p>
                  )}

                  

                  {/* Vídeo */}
                  {reflexo.video && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenVideoKey(
                            openVideoKey === `superficial-${index}`
                              ? null
                              : `superficial-${index}`
                          )
                        }
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4AF37] text-white hover:brightness-110 transition-all mt-2"
                      >
                        <Play className="w-4 h-4" />
                        {openVideoKey === `superficial-${index}`
                          ? "Fechar vídeo"
                          : "Como avaliar (vídeo)"}
                      </button>

                      {openVideoKey === `superficial-${index}` && (
                        <div className="mt-4">
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow border border-[#D4AF37]/20">
                            <iframe
                              className="absolute inset-0 w-full h-full"
                              src={`https://www.youtube.com/embed/${getYoutubeId(
                                reflexo.video
                              )}`}
                              title={`Vídeo - ${reflexo.nome}`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como avaliar? */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] text-justify leading-relaxed">
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

              {/* SEMIOTÉCNICA */}
              <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                <h3
                  className="text-xl sm:text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  SEMIOTÉCNICA
                </h3>

                <p
                  className="text-white text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Os pressupostos obrigatórios na avaliação dos reflexos clínicos estão listados adiante e devem ser obedecidos para cada reflexo pesquisado:
                </p>
              </div>

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
                    Instrumental adequado, ou seja, use um dos vários tipos de martelo de reflexos disponíveis no mercado
                    (Babinski, Taylor, McGill, Buck), com borracha macia, para não causar dor à percussão.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-evenly">
                    <img
                      src="/martelinho_1.jpg"
                      alt="Martelo de reflexos tipo Babinski"
                      className="rounded-lg shadow-md border border-white/20 w-[200px] h-[220px] object-fill"
                    />
                    <img
                      src="/martelinho_2.jpg"
                      alt="Martelo de reflexos tipo Taylor"
                      className="rounded-lg shadow-md border border-white/20 w-[200px] h-[220px] object-fill"
                    />
                    <img
                      src="/martelinho_3.jpg"
                      alt="Martelo de reflexos tipo Buck"
                      className="rounded-lg shadow-md border border-white/20 w-[200px] h-[220px] object-fill"
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
                  A região corporal que será examinada deve estar descoberta.
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
                  Observação da melhor posição de pesquisa para cada reflexo. Uma regra geral deve ser lembrada: a de
                  manter o efetor do R em leve estado de tensão, favorecedor da resposta reflexa. Exemplo: ligeira dorsiflexão passiva do pé facilita a resposta do R do tríceps sural ou aquileu.
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
                  Relaxamento adequado do paciente, pois a contratura excessiva bloqueia o reflexo. Para isso, conversar com o paciente durante o exame, pedir a ele que faça cálculos, desviar sua atenção, enfim, usar de circunstâncias que ajudem a relaxar.
                </p>
              </div>

              <p
                className="text-white/90 text-sm font-medium pt-2"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                (MARTINS et al., 2017)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como diagnosticar? */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA] text-justify leading-relaxed">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Como diagnosticar?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
              <span className="inline-flex px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wide mb-3">
                Normorreflexia
              </span>
              <p
                className="text-[#445345] text-base leading-relaxed"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                O sistema nervoso está respondendo aos estímulos de forma adequada e padrão.
              </p>
              <p
                className="text-[#6B8E23] text-sm font-medium mt-2"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                (SHAHROKHI; ASSUNÇÃO, 2023).
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
              <span className="inline-flex px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wide mb-3">
                Hiporreflexia
              </span>
              <p
                className="text-[#445345] text-base leading-relaxed"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                A hiporreflexia é a ausência ou diminuição da resposta ao estímulo. Geralmente indica uma doença que afeta um ou mais componentes do próprio arco reflexo de dois neurônios. A diminuição do reflexo tendinoso profundo geralmente sugere uma lesão do neurônio motor inferior.
              </p>
              <p
                className="text-[#6B8E23] text-sm font-medium mt-2"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                (SHAHROKHI; ASSUNÇÃO, 2023).
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
              <span className="inline-flex px-3 py-1 rounded-full bg-red-50 text-red-800 text-xs font-semibold uppercase tracking-wide mb-3">
                Hiperreflexia
              </span>
              <p
                className="text-[#445345] text-base leading-relaxed"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                A hiperreflexia refere-se a reflexos hiperativos ou repetitivos (clônicos). Geralmente, indicam uma interrupção das vias corticoespinhais e outras vias descendentes que influenciam o arco reflexo, devido a uma lesão acima do nível das vias reflexas espinais.O aumento do reflexo tendinoso profundo também sugere uma lesão do neurônio motor superior.
              </p>
              <p
                className="text-[#6B8E23] text-sm font-medium mt-2"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                (SHAHROKHI; ASSUNÇÃO, 2023).
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
              <span className="inline-flex px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wide mb-3">
                Arreflexia
              </span>
              <div className="space-y-3">
                <p
                  className="text-[#445345] text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                A arreflexia é a ausência dos reflexos tendinosos profundos e indica alteração no arco reflexo. Com perda sensorial, sugere lesão aferente; com paralisia, fasciculações e atrofia, indica lesão eferente. A causa mais comum é neuropatia periférica. A ausência bilateral do reflexo aquileu costuma indicar neuropatia, mas também pode ocorrer na síndrome da cauda equina. Lesões de nervos periféricos podem abolir reflexos específicos                </p>
                <p
                  className="text-[#6B8E23] text-sm font-medium mt-1"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  (RODRÍGUEZ-BEATO; DE JESUS, 2023).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como o corpo reage? */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white text-justify leading-relaxed">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Brain className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]"
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
