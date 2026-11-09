export function VisionMission() {
  return (
    <section id="vision-e-mission" className="min-h-[900px] bg-slate-50 py-16">
      <div className="wrap mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-6">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Vision e mission — sostenibilità energetica</h2>
            <p className="mb-6 text-lg text-slate-600 leading-relaxed">
              Innovazione del mercato energetico e transizione verso Industria 5.0. Crediamo che la
              sostenibilità non sia un costo, ma un vantaggio competitivo: meno emissioni, più efficienza,
              maggior valore per le imprese e per le comunità.
            </p>
          </div>
          <div className="lg:col-span-6 relative">
            <img
              src="/images/tabler-tree.svg"
              alt="Albero della sostenibilità"
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
