import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { ChiSiamo } from '@/components/ChiSiamo'
import { VisionMission } from '@/components/VisionMission'
import { Priorita } from '@/components/Priorita'
import { Consulenze } from '@/components/Consulenze'
import { PerConsumatori } from '@/components/PerConsumatori'
import { PerCondomini } from '@/components/PerCondomini'
import { Contatti } from '@/components/Contatti'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <ChiSiamo />
      <VisionMission />
      <Priorita />
      <Consulenze />
      <PerConsumatori />
      <PerCondomini />
      <Contatti />
      <Footer />
    </main>
  )
}
