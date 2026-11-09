export function ChiSiamo() {
  return (
    <section id="chi-siamo" className="min-h-[900px] bg-white py-16">
      <div className="wrap mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-6">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Chi siamo — il team di consulenza energetica</h2>
            <p className="mb-6 text-lg text-slate-600 leading-relaxed">
              Innovatori esperti di energia e sostenibilità. Affianchiamo imprese, associazioni di categoria
              e pubbliche amministrazioni nel percorso verso un settore energetico più innovativo e più
              sostenibile, con un approccio basato su dati, norme e progetti realizzabili.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Operiamo con sede legale a San Lazzaro di Savena (BO), unendo competenza tecnica e conoscenza
              dei meccanismi di incentivo e mercato dell’energia italiana.
            </p>
          </div>
          <div className="lg:col-span-6 relative">
            <img
              src="/images/risorsa-1.svg"
              alt="Team Eniminds"
              width="640"
              height="480"
              className="w-full h-[500px] object-cover rounded-xl shadow-lg hover:scale-[1.02] transition duration-500"
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
