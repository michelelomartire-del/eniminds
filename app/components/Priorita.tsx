import Image from 'next/image'

export function Priorita() {
  return (
    <section id="priorita" className="py-24 lg:py-32 bg-white">
      <div className="wrap mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Le nostre priorità</h2>
            <p className="mb-6 text-lg text-slate-600 leading-relaxed">
              L’innovazione tecnologica al servizio di una maggiore sostenibilità. Guidiamo la transizione
              energetica con strumenti concreti: diagnosi, gestione dell’energia, carbon management e
              progetti di ricerca e sviluppo applicati al territorio.
            </p>
            <ul className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-emerald-600">▸</span>
                Sostenibilità ESG e reporting
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-emerald-600">▸</span>
                Innovazione e infrastrutture energetiche
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-emerald-600">▸</span>
                Gestione dell’energia per imprese e PA
              </li>
            </ul>
          </div>
          <div className="relative h-[420px]">
            <Image
              src="https://eniminds.com/wp-content/uploads/2024/12/streamline_industry-innovation-and-infrastructure.svg"
              alt="Innovazione tecnologica"
              fill
              className="object-contain p-8 rounded-xl bg-white shadow-lg hover:scale-[1.02] transition duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
