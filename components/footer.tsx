import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light tracking-wider mb-4">SYNAPSE</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Avaliação neurológica e cognitiva de excelência
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/testes" className="text-sm text-muted-foreground hover:text-white transition-colors">
                   Semiologia Neurológica
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">Contato</h4>
            <p className="text-sm text-muted-foreground">contato@sinapse.com.br</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sinapse. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
