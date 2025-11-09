"use client"

import { NavigationController } from "@/components/NavigationController"

export default function EquilibrioPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF7] relative overflow-hidden text-[#1f2923]">
      <NavigationController />

      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E9F4E6] via-[#F3F9F2] to-[#FFFFFF]" />
      <div className="absolute top-[-5rem] right-[-10rem] w-[40rem] h-[40rem] bg-[#A4C78D]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-5rem] left-[-10rem] w-[35rem] h-[35rem] bg-[#D4AF37]/10 rounded-full blur-3xl" />

      {/* Conteúdo */}
      <section className="relative z-10 px-6 mt-20  md:px-16 lg:px-32 xl:px-48 py-24 space-y-16">
         {/* Cabeçalho */}
        <header
          className="flex flex-col mb-20"
          style={{ marginTop: "10rem" }}
        >
          <h1
            className="text-6xl font-bold text-[#2c402c] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Equilíbrio
          </h1>
          <p
            className="text-lg text-[#445345]/90 max-w-3xl leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Entenda o conceito físico e fisiológico do equilíbrio, seus mecanismos, estabilidade e principais testes usados para avaliá-lo.
          </p>
        </header>

        {/* Corpo */}
        <article
          className="text-justify leading-relaxed text-[#263226]/90 space-y-10"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          <h2 className="text-3xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            O que é?
          </h2>
          <p>
            O equilíbrio, segundo a mecânica (1ª Lei de Newton), ocorre quando as forças e momentos que atuam sobre um objeto são zero. 
            A capacidade de manter o equilíbrio depende da posição do centro de massa e da área da base de apoio. 
            O objeto permanece estável quando sua linha de gravidade se mantém dentro da base de apoio; se sair dessa área, 
            ocorre o desequilíbrio e o objeto tende a cair.
          </p>

          <h2 className="text-3xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            Estabilidade
          </h2>
          <p>
            A estabilidade de um objeto aumenta quanto maior for o deslocamento da linha de gravidade que ele suporta antes de perder o equilíbrio 
            ou quanto maior a força externa necessária para desequilibrá-lo. Assim, a estabilidade é maior quando a linha de gravidade permanece 
            dentro da base de sustentação, e aumenta com uma base de sustentação maior, um centro de gravidade mais baixo e mais centralizado.
          </p>

          <h2 className="text-3xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            Equilíbrio humano
          </h2>
          <p>
            Os princípios da mecânica de Newton sobre estabilidade, base de suporte (BoS), linha de gravidade e centro de gravidade (CoG) 
            se aplicam tanto a objetos quanto a seres humanos. 
            No corpo humano em posição ereta, o CoG é alto e a BoS é pequena, tornando a estabilidade mais difícil de manter. 
            Em objetos inanimados, quando a linha de gravidade sai da BoS, a gravidade provoca a queda. 
            Já nos humanos, quando isso ocorre, o corpo consegue perceber o risco de desequilíbrio e ativar músculos para compensar a ação da gravidade, evitando a queda. 
            Portanto, o ser humano possui controle postural, enquanto objetos não. 
            Esse controle é essencial para manter diferentes posturas e realizar atividades do dia a dia, 
            e está relacionado a três grandes categorias de ações humanas.
          </p>

          {/* Teste de Romberg */}
          <h2 className="text-3xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            Teste de Romberg (Equilíbrio)
          </h2>
          <p>
            O teste de Romberg deve ser explicado antes da aplicação. O avaliado fica de pé, descalço, em superfície plana, com os pés juntos e os braços cruzados ou ao lado do corpo. 
            Primeiro, mantém os olhos abertos por cerca de 30 segundos e depois os fecha por 30 segundos a 1 minuto, enquanto o avaliador observa possíveis desequilíbrios, 
            permanecendo próximo para garantir segurança. 
            O teste é considerado positivo quando há perda de equilíbrio ao fechar os olhos, com oscilação, movimentação dos pés ou queda, indicando alteração na propriocepção 
            ou no sistema vestibular. Já o negativo ocorre quando o avaliado mantém o equilíbrio, com pouca ou nenhuma oscilação, sugerindo ausência de ataxia e bom funcionamento dos sistemas visual e proprioceptivo. (SILVEIRA et al., 2024)
          </p>
          <p><strong>Como avaliar (vídeo)</strong></p>
          <p><strong>Equipamento:</strong></p>

          {/* Teste de Fukuda */}
          <h2 className="text-3xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            Teste de Fukuda (Equilíbrio)
          </h2>
          <p>
            O teste de Fukuda avalia alterações no equilíbrio e no sistema vestibular. 
            O paciente deve ficar com os olhos fechados e os braços estendidos à frente, marchando no mesmo lugar enquanto o examinador conta até 50. 
            O teste é considerado positivo quando o paciente gira o corpo mais de 45° para um dos lados ou se desloca mais de 1 metro para frente. 
            Caso ele gire a cabeça em direção ao lado afetado, pode apresentar tendência a cair para frente. (MARTINS et al., 2017)
          </p>
          <p><strong>Como avaliar? (vídeo)</strong></p>
          <p><strong>Equipamento:</strong></p>

          {/* Teste de Tandem */}
          <h2 className="text-3xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            Teste de Tandem (Equilíbrio)
          </h2>
          <p>
            O teste de Tandem avalia o equilíbrio e a marcha do idoso: ele mantém os pés juntos por 10 s, depois semi-tandem e tandem (cada posição por 10 segundos; 
            se não conseguir 3 segundos o teste é encerrado). 
            Na marcha tandem o idoso anda em linha reta por 10 m colocando um pé à frente do outro; o tempo é cronometrado, o teste é repetido três vezes e usa-se o melhor tempo 
            (dispositivos de auxílio e tipo de calçado devem ser anotados). (SILVEIRA et al., 2024)
          </p>
          <p><strong>Como avaliar? (vídeo)</strong></p>
          <p><strong>Equipamento:</strong> É necessário um cronômetro para registrar o tempo que o indivíduo vai necessitar tanto para o teste estático 
          como para a caminhada tandem dentro de espaço com distância delimitada em metros.</p>

          {/* Teste de TUG */}
          <h2 className="text-3xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            Teste de TUG (Equilíbrio)
          </h2>
          <p>
            O teste TUG (Timed Up and Go) é usado para avaliar a mobilidade, equilíbrio e risco de quedas. 
            Ele é realizado com o idoso sentado em uma cadeira com apoio de braços, em um local plano. 
            Ao comando do avaliador, o idoso deve levantar-se sem usar os apoios, caminhar 3 metros, virar-se a 180°, retornar até a cadeira e sentar-se novamente. 
            O tempo total gasto nessa sequência é cronometrado e, geralmente, varia entre 20 e 30 segundos. 
            O desempenho permite observar a coordenação, a estabilidade e a segurança do idoso durante o movimento. (SILVEIRA et al., 2024)
          </p>
          <p><strong>Como avaliar? (vídeo)</strong></p>
          <p><strong>Equipamento:</strong> cadeira com braços, de pés fixos ao chão (sem rodinhas), cronômetro; fita adesiva; trena ou fita com 3m (para demarcação da distância de 3m).</p>

          {/* Reação de equilíbrio */}
          <h2 className="text-3xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            Reação de Equilíbrio
          </h2>
          <p><strong>Quais são os testes?</strong> sentado na maca, não sei o nome ksks</p>
          <p><strong>Como funciona?</strong></p>
          <p><strong>Como avaliar? (vídeo)</strong></p>

          {/* Referências */}
          <h2 className="text-3xl font-semibold text-[#4f6c19]" style={{ fontFamily: "var(--font-playfair)" }}>
            Referências
          </h2>
          <p>(SILVEIRA et al., 2024; MARTINS et al., 2017)</p>
        </article>
      </section>
    </main>
  )
}
