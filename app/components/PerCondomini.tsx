import Image from 'next/image'

export function PerCondomini() {
  return (
    <section id="per-condomini" className="py-24 lg:py-32 bg-slate-50">
      <div className="wrap mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Per i condomini</h2>
            <p className="mb-6 text-lg text-slate-600 leading-relaxed">
              Sustainability and property management: dalla gestione ordinaria degli immobili a quella
              sostenibile che ne aumenta il valore. Servizi per condomini "con" e "senza" amministratore,
              con un occhio all’efficienza energetica degli edifici residenziali.
            </p>
          </div>
          <div className="relative h-[420px]">
            <Image
              src="https://eniminds.com/wp-content/uploads/2024/12/tabler_tree.svg"
              alt="Condominio sostenibile"
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
