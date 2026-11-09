import Link from 'next/link'

export function Hero() {
  return (
    <section id="hero" className="relative h-[900px] flex flex-col justify-start items-start overflow-hidden bg-white">
      <div className="relative z-10 wrap mx-auto max-w-7xl pt-20 pb-12">
        <div className="hero-text">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase text-slate-900 bg-slate-100 rounded-full">
            Consulenza energetica e sostenibilità
          </span>
          <h1 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            ENIMINDS — consulenza energetica, San Lazzaro di Savena (BO)
          </h1>
          <p className="mb-2 text-sm font-medium text-slate-600">
            Operativi dal 2024
          </p>
          <p className="mb-8 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Lavoriamo per l’innovazione del settore energetico e per la transizione del Paese.
            Servizi specialistici per imprese, associazioni di categoria e pubbliche amministrazioni.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <Link
              href="/contatti"
              className="px-6 py-3 bg-emerald-700 text-white text-sm font-semibold rounded-md shadow hover:bg-emerald-800 active:scale-95 transition-transform hover:shadow-lg"
            >
              Richiedi una consulenza
            </Link>
            <Link
              href="/consulenze"
              className="px-6 py-3 border border-emerald-700 text-emerald-700 text-sm font-semibold rounded-md hover:bg-emerald-700 hover:text-white active:scale-95 transition-transform"
            >
              Scopri i servizi
            </Link>
          </div>
        </div>

        <img
          src="/images/eniminds-hero.jpg"
          alt="Sede operativa Eniminds"
          className="mt-8 w-full h-[96px] object-cover object-bottom rounded-xl shadow-lg"
          decoding="async"
          loading="eager"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
