import Image from 'next/image'

export function PerConsumatori() {
  return (
    <section id="per-consumatori" className="py-24 lg:py-32 bg-white">
      <div className="wrap mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Per i consumatori</h2>
            <p className="mb-6 text-lg text-slate-600 leading-relaxed">
              Sostenibilità ESG, innovazione e gestione dell’energia per imprese, associazioni di categoria
              e pubbliche amministrazioni. Supporto concreto dalla scelta del fornitore alla gestione dei
              consumi, nel mercato tutelato e in quello libero.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-[420px]">
            <Image
              src="https://eniminds.com/wp-content/uploads/2024/12/tabler_fold-up.svg"
              alt="Consumo consapevole"
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
