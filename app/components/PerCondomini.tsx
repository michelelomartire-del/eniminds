export function PerCondomini() {
  return (
    <section id="per-condomini" className="min-h-[900px] bg-slate-50 py-16">
      <div className="wrap mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-6">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Per i condomini — property management sostenibile</h2>
            <p className="mb-6 text-lg text-slate-600 leading-relaxed">
              Sustainability and property management: dalla gestione ordinaria degli immobili a quella
              sostenibile che ne aumenta il valore. Servizi per condomini "con" e "senza" amministratore,
              con un occhio all’efficienza energetica degli edifici residenziali.
            </p>
          </div>
          <div className="lg:col-span-6 relative">
            <img
              src="/images/tabler-tree.svg"
              alt="Condominio sostenibile"
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
