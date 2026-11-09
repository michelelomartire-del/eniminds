import Link from 'next/link'

export function Footer() {
  return (
    <footer className="footer closing bg-slate-900 text-slate-200 border-t border-slate-800 min-h-[900px] flex flex-col justify-center items-start">
      <div className="wrap mx-auto max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">ENIMINDS</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Consulenza per l’innovazione del settore energetico e per la transizione del Paese.
              Servizi specialistici per imprese, associazioni di categoria e pubbliche amministrazioni.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/consulenze" className="text-white hover:text-emerald-400 transition-colors">Transizione energetica</Link></li>
              <li><Link href="/consulenze" className="text-white hover:text-emerald-400 transition-colors">Sostenibilità ESG</Link></li>
              <li><Link href="/consulenze" className="text-white hover:text-emerald-400 transition-colors">Gestione dell’energia</Link></li>
              <li><Link href="/consulenze" className="text-white hover:text-emerald-400 transition-colors">Industria 4.0 / 5.0</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Pagine</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/chi-siamo" className="text-white hover:text-emerald-400 transition-colors">Chi siamo</Link></li>
              <li><Link href="/vision-e-mission" className="text-white hover:text-emerald-400 transition-colors">Vision e mission</Link></li>
              <li><Link href="/priorita" className="text-white hover:text-emerald-400 transition-colors">Priorità</Link></li>
              <li><Link href="/contatti" className="text-white hover:text-emerald-400 transition-colors">Contattaci</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="text-slate-300">Via Emilia, San Lazzaro di Savena (BO)</li>
              <li><Link href="mailto:info@eniminds.example" className="text-emerald-400 hover:text-emerald-300 transition-colors">info@eniminds.example</Link></li>
              <li className="text-[10px] uppercase tracking-wider text-slate-400 mt-4">Privacy — iubenda</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <span>ENIMINDS Srl — sede legale a San Lazzaro di Savena (BO)</span>
          <span>Immagini: Eniminds / iStock — credits in un’unica riga di fondo.</span>
          <span>Sito costruito su Next.js · Deploy su Vercel</span>
        </div>
      </div>
    </footer>
  )
}
