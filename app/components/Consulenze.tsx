import Link from 'next/link'
import { Activity, Leaf, Building2, BarChart3 } from 'lucide-react'

const services = [
  {
    title: 'Transizione energetica',
    icon: <Leaf className="h-5 w-5 text-emerald-600" />,
    text: 'Piani di efficienza, diagnosi energetiche e accompagnamento agli incentivi per il mercato libero e per le FER.',
  },
  {
    title: 'Sostenibilità ESG',
    icon: <Activity className="h-5 w-5 text-emerald-600" />,
    text: 'Strategie ESG, carbon management e supporto alla rendicontazione di sostenibilità per imprese e PA.',
  },
  {
    title: 'Gestione dell’energia',
    icon: <BarChart3 className="h-5 w-5 text-emerald-600" />,
    text: 'Energy management integrato, monitoraggio consumi e ottimizzazione dei contratti di fornitura.',
  },
  {
    title: 'Industria 4.0 / 5.0',
    icon: <Building2 className="h-5 w-5 text-emerald-600" />,
    text: 'Progetti di innovazione tecnologica, digitalizzazione e transizione verso l’Industria 5.0.',
  },
]

export function Consulenze() {
  return (
    <section id="consulenze" className="py-24 lg:py-32 bg-slate-50">
      <div className="wrap mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Le nostre consulenze</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Servizi specialistici per la transizione energetica e digitale del Paese, rivolti a imprese,
            associazioni di categoria e pubbliche amministrazioni.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              href="#contatti"
              className="group block p-8 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 p-3 rounded-lg bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                {s.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
