import Image from 'next/image'

export function VisionMission() {
  return (
    <section id="vision-e-mission" className="py-24 lg:py-32 bg-slate-50">
      <div className="wrap mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Vision e mission</h2>
            <p className="mb-6 text-lg text-slate-600 leading-relaxed">
              Innovazione del mercato energetico e transizione verso Industria 5.0. Crediamo che la
              sostenibilità non sia un costo, ma un vantaggio competitivo: meno emissioni, più efficienza,
              maggior valore per le imprese e per le comunità.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-[420px]">
            <Image
              src="https://eniminds.com/wp-content/uploads/2024/12/tabler_tree.svg"
              alt="Albero della sostenibilità"
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
