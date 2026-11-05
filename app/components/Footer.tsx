export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="wrap mx-auto px-6 py-12 md:py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">ENIMINDS</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Consulenza per l’innovazione del settore energetico e per la transizione del Paese.
              Servizi specialistici per imprese, associazioni di categoria e pubbliche amministrazioni.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#consulenze" className="hover:text-emerald-400 transition-colors">Transizione energetica</a></li>
              <li><a href="#consulenze" className="hover:text-emerald-400 transition-colors">Sostenibilità ESG</a></li>
              <li><a href="#consulenze" className="hover:text-emerald-400 transition-colors">Gestione dell’energia</a></li>
              <li><a href="#consulenze" className="hover:text-emerald-400 transition-colors">Industria 4.0 / 5.0</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Pagine</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#chi-siamo" className="hover:text-emerald-400 transition-colors">Chi siamo</a></li>
              <li><a href="#vision-e-mission" className="hover:text-emerald-400 transition-colors">Vision e mission</a></li>
              <li><a href="#priorita" className="hover:text-emerald-400 transition-colors">Priorità</a></li>
              <li><a href="#contatti" className="hover:text-emerald-400 transition-colors">Contattaci</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Via Emilia, San Lazzaro di Savena (BO)</li>
              <li><a href="mailto:info@eniminds.example" className="hover:text-emerald-400 transition-colors">info@eniminds.example</a></li>
              <li className="text-[10px] uppercase tracking-wider text-slate-500 mt-4">Privacy — iubenda</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <span>ENIMINDS Srl — sede legale a San Lazzaro di Savena (BO)</span>
          <span>Immagini: Eniminds / iStock — credits in un’unica riga di fondo.</span>
          <span>Sito costruito su Next.js · Deploy su Vercel</span>
        </div>
      </div>
    </footer>
  )
}
