export function Priorita() {
  return (
    <section id="priorita" className="min-h-[100svh] bg-white flex items-center">
      <div className="wrap mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Le nostre priorità</h2>
            <p className="mb-6 text-lg text-slate-600 leading-relaxed">
              L’innovazione tecnologica al servizio di una maggiore sostenibilità. Guidiamo la transizione
              energetica con strumenti concreti: diagnosi, gestione dell’energia, carbon management e
              progetti di ricerca e sviluppo applicati al territorio.
            </p>
            <ul className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-emerald-700">▸</span>
                Sostenibilità ESG e reporting
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-emerald-700">▸</span>
                Innovazione e infrastrutture energetiche
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-emerald-700">▸</span>
                Gestione dell’energia per imprese e PA
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="/images/streamline.svg"
              alt="Innovazione tecnologica"
              width="640"
              height="480"
              className="w-full h-[500px] object-contain p-8 rounded-xl bg-white shadow-lg hover:scale-[1.02] transition duration-500"
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
