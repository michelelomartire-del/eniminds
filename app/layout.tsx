import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.css'

const hanken = Hanken_Grotesk({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'ENIMINDS — Consulenza per l\'innovazione del settore energetico',
  description:
    'Lavoriamo per l’innovazione del settore energetico e per la transizione del Paese. Consulenze specialistiche per imprese, associazioni di categoria e pubbliche amministrazioni.',
  metadataBase: new URL('https://eniminds.com'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" data-type="service" data-site-kind="other" className={hanken.variable} suppressHydrationWarning>
      <body className={`${hanken.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
