"use client"

import { NavigationController } from "@/components/NavigationController"

export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF7] relative overflow-hidden text-[#1f2923]">
      <NavigationController />

      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E9F4E6] via-[#F3F9F2] to-[#FFFFFF]" />
      <div className="absolute top-[-5rem] right-[-10rem] w-[40rem] h-[40rem] bg-[#A4C78D]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-5rem] left-[-10rem] w-[35rem] h-[35rem] bg-[#D4AF37]/10 rounded-full blur-3xl" />

      {/* Conteúdo contínuo */}
      <section className="relative z-10 px-6 md:px-16 lg:px-32 xl:px-48 py-24 space-y-16">
         {/* Cabeçalho */}
        <header
          className="flex flex-col mb-20"
          style={{ marginTop: "10rem" }}
        >
          <h1
            className="text-6xl font-bold text-[#2c402c] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Review
          </h1>
          <p
            className="text-lg text-[#445345]/90 max-w-3xl leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Exercícios de revisão, fluxograma de diagnóstico p escalas essenciais para avaliação clínica.
          </p>
        </header>

        {/* Corpo contínuo */}
        <article
          className="text-justify leading-relaxed text-[#263226]/90 space-y-10"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          <h2 className="text-3xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            Exercícios de revisão
          </h2>
          <p>Exercícios de revisão (20 perguntas)</p>

          <h2 className="text-3xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            Fluxograma de diagnóstico
          </h2>
          <p>Fluxograma de diagnóstico</p>

          <h2 className="text-3xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            Escalas
          </h2>
          <p>Escalas (Eva, Berg, Borg, MRC)</p>

          <h3 className="text-2xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            EVA
          </h3>
          <p>EVA</p>

          <h3 className="text-2xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            BERG
          </h3>
          <p>BERG</p>

          <h3 className="text-2xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            BORG
          </h3>
          <p>BORG</p>

          <h3 className="text-2xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            MRC
          </h3>
          <p>
            O Medical Research Council (MRC)-sumscore avalia a força muscular global. A força manual de seis grupos musculares (abdução do ombro,
            flexão do cotovelo, extensão do punho, flexão do quadril, extensão do joelho e dorsiflexão do tornozelo) é avaliada em ambos os lados usando a escala MRC.
            A soma das pontuações fornece o MRC-sumscore, variando de 0 a 60.(Turan et al., 2020)
          </p>
        </article>
      </section>
    </main>
  )
}
