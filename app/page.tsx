"use client"
import { NavigationController } from "@/components/NavigationController"
import { Brain, Activity, Scale, Target, Footprints, Play, Heart, Baby, Bone } from "lucide-react"
import { useState } from "react"
import type React from "react"

const testes = [
  {
    icon: Brain,
    title: "Reflexo",
    description: "Breve explicação sobre a avaliação dos reflexos neurológicos.",
  },
  {
    icon: Activity,
    title: "Coordenação",
    description: "Breve explicação sobre os testes de coordenação motora fina e grossa.",
  },
  {
    icon: Scale,
    title: "Equilíbrio",
    description: "Breve explicação sobre os testes de equilíbrio estático e dinâmico.",
  },
  {
    icon: Target,
    title: "Reações de equilíbrio",
    description: "Breve explicação sobre a avaliação das respostas do corpo a perturbações.",
  },
  {
    icon: Footprints,
    title: "Marcha",
    description: "Breve explicação sobre a análise do padrão de caminhada.",
  },
]

const videos = [
  {
    title: "Terapia Manual",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWDQ9WwjT107IjVd5Vj1XIi_toiczM3PN-g3MMBaTV2zDDOLZ5LuYYmoaNo3ZxbetE8dyissDk2QjLoCIAeS7l21Ldf0-n-8IwiA6eHhjEMijPI01LU_2MoKQwTZd9zFhmXNkE9y7RbDGbfPU2e_diNJf73wdoppGIGxfM3Sb92xRcGTfISoFf_fRpzrVQiwywr1G-0lLcXf4jVVnvOCJFTVbWPIQvIURn8qqP2d2MiY7P84nGUbN2Fux9Zc4FwCIudE8GAHoklvMb",
  },
  {
    title: "Pilates Clínico",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRY_q-7mWRxU2A4kBYpHojmTTOEI2Vnn4Mwu_Vdly94n_uznae83jkkaMGb0jlkHjRxsQ9AKz-7i5xcPeKDXPIxZJHj0_elg3A1UX7kxIJHe34Y0oUhESLSFyNeDrzEu6kT21kViOJv9c3RjD8Q8NjG6f-VpJlyi1V3n5etbrDRY7Ky9RKOa2etbbGqMxvO3FrXs7B_FIfypYxYU3Ok7o7H6uBf7aiJlWPqyjGpr6EwE0CadRS7Dg2-OOfUhMb10_ngFmO88mk-4XT",
  },
  {
    title: "Nosso Espaço",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBsv_TWB_E5SsyEdNYRq2-jV50MTbWDBix1nIbt_gtVcKVlLsT5dC4GFfEQaJ1A94qRCeIcWj5QqYERl2eq8vN9ovRJe9WFzhfrJ-InhZ8g8KRI7uLFMDjtiSzBzVyU3B6bsJbZNyHe7jbidoCnxJG9asn4LOFmt7huiIZ31p2sDw6ymlhoJkbXUDq_GR8a-4OgryxIEwNBitd4SBiRyUCX-aVonXr0EFyCpWjbj_I-p26j0zvbjnwz1SzLyvbQSPVyMUEJwFN-P1Y",
  },
  {
    title: "Fortalecimento",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfkwCU_TmYWjI7E-TZGwgRab6eCvbU7iP0UQz26noLDhS6WWBjPjqNbBjiRxT1AqxNGQaQMlc4RTJoxuJ5O1y7_6ZMy21VvemC2h6ZZFWDVkzThbhcXhXaqwaStOE9z9Q83dY6giIDyVDszENmhPA-Uk10bQVsKfioNjSEegrsQj-YxhuDR1h_oRFwAjXf7WNh_ybKTFNlPwHrl8pbMWVjqyRAatEtFLZNAbank7Z_GKjr79FDWNMWEDLM_gUAA4fsfoWyJVCxKm-u",
  },
  {
    title: "Resultados",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYwPX_HY1WvoN2nGna_b659FM0VTQF-6UIzEpkStZ5BBIcLD30a93yTX1E8UMAwC91jXVSS-fZI7XQGEVwBp8BDvHUdOdBTCFyrPZTFh-oJVfEXwAYAZ4OxhO8TaWyEecmBSpXRJl-3jcdx8mVYyWRcpbwZp_vozeeGSg04wkZ42IBbs7ZicuJZre2a2_bSTFtjlxoVe7nYRNOX1NlibrylH3t_bIV0T8uRV2PyR0X_siFD7Zgm7gHXy5msZHFD2BIKUxwulvGszSg",
  },
  {
    title: "Bem-Estar",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKKUsqKks3t_hBpnBZfGHQFHxN7LXwsQ4nzAoGhDLViaWau0hhLV0r_Z_LCsjF81a5jGGSn-RiJSJYg9neEixRcxKvsGjIPZq1UMrJq5b4CgKuyeLdbIINpP8k0uBM7VNHwoCeZcuDaWKKACnPg_QMO8HiKUPt7lpnbXKGrHuwfZpgI1IN1m9Wkl6r04_LXpqSgTrYJ3mxypxw0A3m4QaNJn9v_jQKtXXVjXfpbrePJptFmOlAxskemgc_vAdbMZ6yzYFNdEEHwBVl",
  },
]

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

      <section id="home" className="relative min-h-screen flex items-center bg-[#E3F0E2] overflow-hidden">
        {/* Fundo do cérebro ocupando toda a tela */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('/688b3849-9449-4c97-8be2-0a28c28ef3f0.png')",
            backgroundPosition: "50% center",
          }}
        />

        {/* Gradiente leve pro contraste do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/40 to-transparent" />

        {/* Conteúdo à esquerda */}
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

      <section
        id="sobre"
        className="min-h-screen flex items-center bg-[#E8F4E7] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Centered heading with description */}
          <div className="flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#212529]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nossa Equipe
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-[#6C757D] mt-3 sm:mt-4 max-w-3xl px-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Somos três acadêmicas do 10º período do curso de Fisioterapia, conectadas pelo compromisso com o cuidado
              humanizado e pela busca constante de aprimoramento profissional.
            </p>
          </div>

          {/* Image section with better styling */}
          <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="w-full max-w-3xl">
              <div
                className="w-full bg-center bg-no-repeat bg-cover aspect-[16/9] rounded-2xl shadow-2xl"
                style={{
                  backgroundImage: "url('/sobre_nos.jpg')",
                }}
              />
            </div>
          </div>

          {/* Individual cards for each team member with icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#6B8E23]/10 rounded-full mb-4 sm:mb-6">
                <Baby className="w-7 h-7 sm:w-8 sm:h-8 text-[#6B8E23]" strokeWidth={1.5} />
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[#212529] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Ana Karla Barros
              </h3>
              <p
                className="text-sm sm:text-base text-[#D4AF37] font-semibold mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                22 anos | Neurofuncional
              </p>
              <p
                className="text-sm sm:text-base text-[#6C757D] leading-relaxed"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Dedica-se à área Neurofuncional, com foco na fisioterapia pediátrica, voltada ao desenvolvimento motor e
                à reabilitação infantil.
              </p>
            </div>

            <div className="flex flex-col bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#6B8E23]/10 rounded-full mb-4 sm:mb-6">
                <Bone className="w-7 h-7 sm:w-8 sm:h-8 text-[#6B8E23]" strokeWidth={1.5} />
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[#212529] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Brenda Muniky
              </h3>
              <p
                className="text-sm sm:text-base text-[#D4AF37] font-semibold mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                25 anos | Ortopedia
              </p>
              <p
                className="text-sm sm:text-base text-[#6C757D] leading-relaxed"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Tem afinidade com a Ortopedia, buscando aprimorar suas práticas em prevenção e recuperação de disfunções
                musculoesqueléticas.
              </p>
            </div>

            <div className="flex flex-col bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#6B8E23]/10 rounded-full mb-4 sm:mb-6">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#6B8E23]" strokeWidth={1.5} />
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[#212529] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Caroline Pessoa
              </h3>
              <p
                className="text-sm sm:text-base text-[#D4AF37] font-semibold mb-3 sm:mb-4"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                23 anos | Cardiorrespiratória
              </p>
              <p
                className="text-sm sm:text-base text-[#6C757D] leading-relaxed"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                É apaixonada pela área Cardiorrespiratória, com ênfase na saúde do idoso, priorizando a qualidade de
                vida e a funcionalidade na terceira idade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testes"
        className="min-h-screen flex items-center bg-[#F8F9FA] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#212529]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Avaliações e Testes
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-[#6C757D] mt-3 sm:mt-4 max-w-2xl px-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Conheça os principais testes aplicados na fisioterapia clínica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {testes.map((teste, index) => {
              const Icon = teste.icon
              return (
                <div
                  key={index}
                  className="flex flex-col text-center items-center gap-3 sm:gap-4 rounded-lg bg-white p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#D4AF37]" strokeWidth={1.5} />
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-lg sm:text-xl md:text-xl font-bold leading-tight text-[#212529]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {teste.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm leading-normal text-[#6C757D]"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {teste.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="videos"
        className="min-h-screen flex items-center bg-[#D3D3AF] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-center mb-8 sm:mb-10 md:mb-12 text-[#333333]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Conheça Nossos Tratamentos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <button
                      aria-label={`Play video ${video.title}`}
                      className="text-white transition-transform duration-300 group-hover:scale-110"
                    >
                      <Play className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" fill="white" />
                    </button>
                  </div>
                </div>
                <h3
                  className="text-base sm:text-lg md:text-xl mt-3 sm:mt-4 text-[#333333] font-semibold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="min-h-screen flex items-center bg-[#556B2F] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col items-center text-center px-4">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Entre em Contato
            </h2>
            <p
              className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-normal text-white max-w-2xl"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Fale conosco ou envie sua mensagem.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 space-y-6 sm:space-y-8 px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <label className="flex flex-col">
                <p
                  className="text-sm sm:text-base font-medium leading-normal pb-2 text-white"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Seu e-mail
                </p>
                <input
                  type="email"
                  name="seuEmail"
                  value={formData.seuEmail}
                  onChange={handleChange}
                  required
                  className="w-full h-12 sm:h-14 px-3 sm:px-4 bg-transparent border border-white/30 rounded-lg text-white placeholder:text-white/70 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm sm:text-base"
                  placeholder="seuemail@exemplo.com"
                  style={{ fontFamily: "var(--font-poppins)" }}
                />
              </label>

              <label className="flex flex-col">
                <p
                  className="text-sm sm:text-base font-medium leading-normal pb-2 text-white"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  E-mail da responsável
                </p>
                <input
                  type="email"
                  name="emailResponsavel"
                  value={formData.emailResponsavel}
                  onChange={handleChange}
                  required
                  className="w-full h-12 sm:h-14 px-3 sm:px-4 bg-transparent border border-white/30 rounded-lg text-white placeholder:text-white/70 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm sm:text-base"
                  placeholder="responsavel@exemplo.com"
                  style={{ fontFamily: "var(--font-poppins)" }}
                />
              </label>
            </div>

            <label className="flex flex-col">
              <p
                className="text-sm sm:text-base font-medium leading-normal pb-2 text-white"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Mensagem
              </p>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-transparent border border-white/30 rounded-lg text-white placeholder:text-white/70 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none text-sm sm:text-base"
                placeholder="Digite sua mensagem aqui..."
                style={{ fontFamily: "var(--font-poppins)" }}
              />
            </label>

            <div className="flex justify-center pt-2 sm:pt-3">
              <button
                type="submit"
                className="w-full sm:max-w-md md:max-w-lg h-12 sm:h-14 px-6 sm:px-8 bg-[#D4AF37] text-[#231d0f] rounded-lg text-base sm:text-lg font-bold leading-normal tracking-wide hover:brightness-110 transition-all duration-300 shadow-lg"
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
