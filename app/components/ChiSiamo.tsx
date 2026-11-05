import Image from 'next/image'

export function ChiSiamo() {
  return (
    <section id="chi-siamo" className="py-24 lg:py-32 bg-white">
      <div className="wrap mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Chi siamo</h2>
            <p className="mb-6 text-lg text-slate-600 leading-relaxed">
              Innovatori esperti di energia e sostenibilità. Affianchiamo imprese, associazioni di categoria
              e pubbliche amministrazioni nel percorso verso un settore energetico più innovativo e più
              sostenibile, con un approccio basato su dati, norme e progetti realizzabili.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Operiamo dal 2024 con sede legale a San Lazzaro di Savena (BO), unendo competenza tecnica
              e conoscenza dei meccanismi di incentivo e mercato dell’energia italiana.
            </p>
          </div>
          <div className="relative h-[420px]">
            <Image
              src="https://eniminds.com/wp-content/uploads/2024/12/Risorsa-1.svg"
              alt="Team Eniminds"
              fill
              className="object-cover rounded-xl shadow-lg hover:scale-[1.02] transition duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
