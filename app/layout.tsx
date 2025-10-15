import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Synapse",
  description: "Movimente melhor. Recupere confiança. Cuidados de fisioterapia com ciência e empatia.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
