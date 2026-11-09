export function PerConsumatori() {
  return (
    <section id="per-consumatori" className="min-h-[900px] bg-white py-16">
      <div className="wrap mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-6">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Servizi consumatori</h2>
            <p className="mb-6 text-lg text-slate-600 leading-relaxed">
              Sostenibilità ESG, innovazione e gestione dell’energia per imprese, associazioni di categoria
              e pubbliche amministrazioni. Supporto concreto dalla scelta del fornitore alla gestione dei
              consumi, nel mercato tutelato e in quello libero.
            </p>
          </div>
          <div className="lg:col-span-6 relative">
            <img
              src="/images/tabler-fold-up.svg"
              alt="Consumo consapevole"
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
