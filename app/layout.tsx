import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'ENIMINDS — Consulenza per l\'innovazione del settore energetico',
  description:
    'Lavoriamo per l\'innovazione del settore energetico e per la transizione del Paese. Consulenze per imprese, associazioni di categoria e pubbliche amministrazioni.',
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
    <html lang="it" data-type="service" data-site-kind="other" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
