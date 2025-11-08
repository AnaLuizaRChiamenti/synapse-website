"use client"
import { NavigationController } from "@/components/NavigationController"
import { Brain, Activity, Scale, Target, Footprints, Lightbulb, Sparkles } from "lucide-react"
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

  return (
    <div className="min-h-screen">
      <NavigationController />

      {/* SEÇÃO PRINCIPAL */}
      <section id="home" className="relative min-h-screen flex items-center bg-[#E3F0E2] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('/688b3849-9449-4c97-8be2-0a28c28ef3f0.png')",
            backgroundPosition: "50% center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/40 to-transparent" />

        <div className="relative z-10 w-full py-32 pl-8 pr-8 md:pl-16 lg:pl-24 mt-40">
          <div className="max-w-xl text-left">
            <h1
              className="text-5xl md:text-6xl font-bold text-[#1f2923]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Neurofuncional
            </h1>

            <p className="text-2xl text-[#445345] font-medium mt-2" style={{ fontFamily: "var(--font-poppins)" }}>
              Avaliação simplificada e eficaz
            </p>

            <p
              className="text-lg text-[#445345]/90 leading-relaxed max-w-md mt-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Cuidamos do movimento e da função com base na neurociência. Nossa abordagem alia precisão técnica, empatia
              e resultados reais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#contato"
                className="px-8 py-4 bg-[#6B8E23] text-white rounded-lg font-semibold hover:brightness-110 transition-all duration-300 shadow-md text-center"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Agendar Avaliação
              </a>
              <a
                href="#sobre"
                className="px-8 py-4 border border-[#6B8E23] text-[#6B8E23] rounded-lg font-semibold hover:bg-[#6B8E23]/10 transition-all duration-300 text-center"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Conhecer a equipe
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO EQUIPE */}
      <section
        id="sobre"
        className="min-h-screen flex items-center bg-[#E8F4E7] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 py-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <h2
              className="text-5xl font-bold leading-tight text-[#212529]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nossa Equipe
            </h2>
            <p
              className="text-lg text-[#6C757D] mt-4 max-w-3xl px-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Somos três acadêmicas do 10º período do curso de Fisioterapia, conectadas pelo compromisso com o cuidado
              humanizado e pela busca constante de aprimoramento profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ana */}
            <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md mb-6">
                <img src="/ana_karla.jpg" alt="Ana Karla Barros" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-[#212529]" style={{ fontFamily: "var(--font-playfair)" }}>
                Ana Karla Barros
              </h3>
              <p className="text-[#D4AF37] font-semibold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                22 anos | Neurofuncional
              </p>
              <p className="text-[#6C757D] text-center" style={{ fontFamily: "var(--font-poppins)" }}>
                Dedica-se à área Neurofuncional, com foco na fisioterapia pediátrica e reabilitação infantil.
              </p>
            </div>

            {/* Brenda */}
            <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md mb-6">
                <img src="/brenda.jpg" alt="Brenda Muniky" className="w-full h-auto object-contain object-center" />
              </div>
              <h3 className="text-2xl font-bold text-[#212529]" style={{ fontFamily: "var(--font-playfair)" }}>
                Brenda Muniky
              </h3>
              <p className="text-[#D4AF37] font-semibold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                25 anos | Ortopedia
              </p>
              <p className="text-[#6C757D] text-center" style={{ fontFamily: "var(--font-poppins)" }}>
                Tem afinidade com a Ortopedia, buscando aprimorar práticas de prevenção e recuperação musculoesquelética.
              </p>
            </div>

            {/* Caroline */}
            <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md mb-6">
                <img src="/carol.jpg" alt="Caroline Pessoa" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-[#212529]" style={{ fontFamily: "var(--font-playfair)" }}>
                Caroline Pessoa
              </h3>
              <p className="text-[#D4AF37] font-semibold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                23 anos | Cardiorrespiratória
              </p>
              <p className="text-[#6C757D] text-center" style={{ fontFamily: "var(--font-poppins)" }}>
                Apaixonada pela área Cardiorrespiratória, com foco na saúde do idoso e qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* SEÇÃO DE IDEIA E DESENVOLVIMENTO */}
{/* SEÇÃO DE IDEIA E DESENVOLVIMENTO - Estilizada */}
      <section className="relative bg-gradient-to-b from-[#F6FBF5] to-[#E8F4E7] px-6 md:px-16 lg:px-32 xl:px-48 py-24 overflow-hidden">
        {/* Elemento decorativo de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6B8E23]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto space-y-16">
          {/* Card: De onde surgiu a ideia */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-8">
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2F3E2F]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                De onde surgiu a ideia?
              </h2>
            </div>

            <div
              className="space-y-5 text-lg leading-relaxed text-[#374151]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <p className="text-justify">
                A criação deste site surgiu durante o nosso estágio na área de Fisioterapia Neurofuncional, momento em
                que enfrentamos algumas dificuldades na realização de determinados testes de avaliação. A partir dessa
                experiência, percebemos a importância de reunir, em um único espaço, informações confiáveis e acessíveis
                sobre o tema.
              </p>
              <p className="text-justify">
                Nosso objetivo é facilitar o aprendizado e a prática dos futuros estagiários e estudantes das
                disciplinas de Neurofuncional, tanto adulto quanto infantil, oferecendo um recurso que auxilie na
                compreensão dos testes, reduza dúvidas e inseguranças, e contribua para o aprimoramento do conhecimento
                teórico e prático na área.
              </p>
            </div>
          </div>

          {/* Linha divisória decorativa */}
          <div className="flex justify-center">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full shadow-md" />
          </div>

          {/* Card: Como fizemos */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-8">
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2F3E2F]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Como fizemos?
              </h2>
            </div>

            <div
              className="space-y-5 text-lg leading-relaxed text-[#374151]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <p className="text-justify">
                Para o desenvolvimento deste site, realizamos uma seleção criteriosa de artigos científicos e livros
                voltados à semiologia neurológica, com o intuito de fundamentar a parte teórica de forma atualizada e
                confiável.
              </p>
              <p className="text-justify">
                Além disso, produzimos vídeos demonstrativos dos principais testes utilizados na avaliação
                neurofuncional, buscando tornar o aprendizado mais dinâmico e visual. Contamos também com o apoio de um
                profissional, responsável pelo desenvolvimento técnico e pela estruturação do site.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* SEÇÃO CONTATO */}
      <section
        id="contato"
        className="min-h-screen flex items-center bg-[#556B2F] px-6 md:px-16 lg:px-32 xl:px-48 py-20"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center">
            <h2
              className="text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Entre em Contato
            </h2>
            <p
              className="mt-4 text-lg text-white/90"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Fale conosco ou envie sua mensagem.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-8">
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

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-[#231d0f] rounded-lg font-bold hover:brightness-110 transition-all duration-300 shadow-lg"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
