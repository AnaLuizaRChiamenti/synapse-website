"use client"

import { NavigationController } from "@/components/NavigationController"
import { Brain, Activity, Scale, Target, Footprints, Lightbulb, Sparkles, ChevronRight, Play } from "lucide-react"
import { useState } from "react"
import type React from "react"

export default function HomePage() {
  const [formData, setFormData] = useState({
    seuEmail: "",
    emailResponsavel: "",
    mensagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const features = [
    {
      title: "Reflexos",
      href: "/reflexo",
      icon: Activity,
      desc: "Entenda classificação, fisiologia e semiotécnica.",
      accent: "#6B8E23",
    },
    {
      title: "Equilíbrio",
      href: "/equilibrio",
      icon: Scale,
      desc: "Mecanismos de estabilidade e testes clínicos.",
      accent: "#4F6C19",
    },
    {
      title: "Review",
      href: "/escalas_extras",
      icon: Target,
      desc: "Quiz, fluxos diagnósticos e escalas (EVA, Berg, Borg, MRC).",
      accent: "#D4AF37",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <NavigationController />

    {/* HERO */}
    <section className="relative bg-gradient-to-br from-[#E3F0E2] via-[#F0F5EF] to-white pt-32 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-4xl mx-4 sm:mx-6 md:mx-8 lg:mx-32 relative mt-5 z-10 sm:mt-8 md:mt-12 lg:mt-60">

        <div className="flex items-center gap-2 text-[#6B8E23] mb-4">
          <Sparkles className="w-5 h-5" />
          <span
            className="text-sm font-medium tracking-wide uppercase"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Fisioterapia Neurofuncional
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2923] leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Neurofuncional
        </h1>

        <h2
          className="text-lg sm:text-xl md:text-2xl text-[#1f2923]/80 mt-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Avaliação simplificada e eficaz
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
{/*           <a
            href="/#contato"
            className="px-8 py-4 bg-[#6B8E23] text-white rounded-lg font-semibold hover:brightness-110 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Agendar Avaliação <ChevronRight className="w-5 h-5" />
          </a> */}

          <a
            href="/#sobre"
            className="px-8 py-4 border border-[#6B8E23] text-[#6B8E23] rounded-lg font-semibold hover:bg-[#6B8E23]/10 transition-all duration-300 inline-flex items-center gap-2"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Conhecer a equipe <Brain className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Decorative Background */}
      <div
        className="
          absolute inset-0 
          bg-[url('/688b3849-9449-4c97-8be2-0a28c28ef3f0.png')] 
          bg-center 
          bg-no-repeat 
          opacity-10 
          mix-blend-multiply 
          pointer-events-none
          bg-cover
          lg:bg-[length:100%]
        "
        style={{ filter: "brightness(0.8) contrast(1.1)" }}
      />
    </section>

      {/* DESTAQUES / NAVEGAÇÃO PRINCIPAL */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]" style={{ fontFamily: "var(--font-playfair)" }}>
              Comece por aqui
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((f, i) => (
              <a
                key={i}
                href={f.href}
                className="group relative bg-gradient-to-br from-[#6B8E23]/5 to-transparent p-8 rounded-2xl border-2 border-[#6B8E23]/20 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-1xl sm:text-2xl font-bold" style={{ color: f.accent, fontFamily: "var(--font-playfair)" }}>
                    {f.title}
                  </h3>
                  <f.icon className="w-6 h-6" style={{ color: f.accent }} />
                </div>
                <p className="text-[#445345] text-base sm:text-lg leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
                  {f.desc}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[#1f2923] font-medium" style={{ fontFamily: "var(--font-poppins)" }}>
                  Acessar <ChevronRight className="w-4 h-4" />
                </div>
                <div className="absolute -inset-[2px] rounded-2xl border border-transparent group-hover:border-[#6B8E23]/30 pointer-events-none" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE / EQUIPE */}
      <section id="sobre" className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F8F9FA] text-justify leading-relaxed">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#6B8E23]/10 flex items-center justify-center">
              <Footprints className="w-6 h-6 text-[#6B8E23]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2923]" style={{ fontFamily: "var(--font-playfair)" }}>
              Nossa equipe
            </h2>
          </div>

          <p className="text-[#445345] max-w-5xl leading-relaxed mb-10" style={{ fontFamily: "var(--font-poppins)" }}>
            Somos três acadêmicas do 10º período do curso de Fisioterapia, conectadas pelo compromisso com o cuidado humanizado e pela busca constante de aprimoramento profissional. Nosso propósito é promover saúde, compartilhar conhecimento e valorizar a fisioterapia como ciência e prática transformadora.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ana */}
            <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow mb-6">
                <img src="/ana_karla.jpg" alt="Ana Karla Barros" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-[#212529]" style={{ fontFamily: "var(--font-playfair)" }}>Ana Karla Barros</h3>
              <p className="text-[#D4AF37] font-semibold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>22 anos</p>
              <p
                className="text-[#6C757D] mt-3 text-sm sm:text-base leading-relaxed 
                          max-w-[32ch] text-justify break-words hyphens-auto"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
              Possui afinidade pela área neurofuncional, especialmente pelos processos de desenvolvimento motor e pelas estratégias de reabilitação infantil, mantendo interesse em aprofundar conhecimentos.              </p>
            </div>
            {/* Brenda */}
            <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow mb-6">
                <img src="/brenda.jpg" alt="Brenda Muniky" className="w-full h-auto object-contain object-center" />
              </div>
              <h3 className="text-2xl font-bold text-[#212529]" style={{ fontFamily: "var(--font-playfair)" }}>Brenda Muniky</h3>
              <p className="text-[#D4AF37] font-semibold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>25 anos</p>
              <p
                className="text-[#6C757D] mt-3 text-sm sm:text-base leading-relaxed 
                          max-w-[32ch] text-justify break-words hyphens-auto"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
              Interesse pela área ortopédica, buscando aprimorar práticas relacionadas à prevenção, avaliação e reabilitação de disfunções musculoesqueléticas em diferentes níveis de complexidade.              </p>
            </div>
            {/* Caroline */}
            <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow mb-6">
                <img src="/carol.jpg" alt="Caroline Pessoa" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-[#212529]" style={{ fontFamily: "var(--font-playfair)" }}>Caroline Pessoa</h3>
              <p className="text-[#D4AF37] font-semibold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>23 anos</p>
              <p
                className="text-[#6C757D] mt-3 text-sm sm:text-base leading-relaxed 
                          max-w-[32ch] text-justify break-words hyphens-auto"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
              Apreço pela fisioterapia cardiorrespiratória, com foco na saúde do idoso, promovendo qualidade de vida, funcionalidade e melhor desempenho nas atividades do dia a dia.              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IDEIA & DESENVOLVIMENTO */}
      <section className="relative bg-gradient-to-b from-[#F6FBF5] to-[#E8F4E7] px-4 sm:px-6 md:px-8 lg:px-12 py-24 overflow-hidden text-justify leading-relaxed">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6B8E23]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto space-y-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3E2F] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              De onde surgiu a ideia?
            </h2>
            <p className="text-[#374151] leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
              A criação deste site surgiu durante o nosso estágio na área de Fisioterapia Neurofuncional, momento em que enfrentamos algumas dificuldades na realização de determinados testes de avaliação. A partir dessa experiência, percebemos a importância de reunir, em um único espaço, informações confiáveis e acessíveis sobre o tema.
              Nosso objetivo é facilitar o aprendizado e a prática dos futuros estagiários e estudantes das disciplinas de Neurofuncional, tanto adulto quanto infantil, oferecendo um recurso que auxilie na compreensão dos testes, reduza dúvidas e inseguranças, e contribua para o aprimoramento do conhecimento teórico e prático na área.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3E2F] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Como fizemos?
            </h2>
            <p className="text-[#374151] leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
              Para o desenvolvimento deste site, realizamos uma seleção criteriosa de artigos científicos e livros voltados à semiologia neurológica, com o intuito de fundamentar a parte teórica de forma atualizada e confiável.
              Além disso, produzimos vídeos demonstrativos dos principais testes utilizados na avaliação neurofuncional, buscando tornar o aprendizado mais dinâmico e visual. Contamos também com o apoio de um profissional, responsável pelo desenvolvimento técnico e pela estruturação do site.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / CONTATO */}
      <section id="contato" className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-[#6B8E23] to-[#556B2F]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              Fale com a gente
            </h2>
          </div>

          <p className="text-white/90 max-w-2xl mb-8" style={{ fontFamily: "var(--font-poppins)" }}>
            Dúvidas, sugestões ou parcerias? Envie sua mensagem.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  Seu e-mail
                </span>
                <input
                  type="email"
                  name="seuEmail"
                  value={formData.seuEmail}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 bg-transparent border border-white/30 rounded-lg text-white placeholder:text-white/70 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  placeholder="seuemail@exemplo.com"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  E-mail da responsável
                </span>
                <input
                  type="email"
                  name="emailResponsavel"
                  value={formData.emailResponsavel}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 bg-transparent border border-white/30 rounded-lg text-white placeholder:text-white/70 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  placeholder="responsavel@exemplo.com"
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                Mensagem
              </span>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder:text-white/70 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37] outline-none resize-none"
                placeholder="Digite sua mensagem aqui..."
              />
            </label>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <button
                type="submit"
                className="px-8 py-4 bg-[#D4AF37] text-[#231d0f] rounded-lg font-bold hover:brightness-110 transition-all duration-300 shadow-lg"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="px-4 sm:px-6 md:px-8 lg:px-12 py-10 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#445345] text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
            © {new Date().getFullYear()} Neurofuncional — Todos os direitos reservados.
          </p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="/reflexos" className="hover:underline">Reflexos</a>
            <a href="/equilibrio" className="hover:underline">Equilíbrio</a>
            <a href="/review" className="hover:underline">Review</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
