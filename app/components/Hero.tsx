import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center items-center overflow-hidden bg-white">
      {/* Decorative flat band (skill: service = flat colour, no shader) */}
      <div className="absolute inset-0 z-0 bg-[#0078D7]/6" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#00D084]/10 pointer-events-none" />

      <div className="relative z-10 wrap mx-auto px-6 max-w-4xl text-center">
        <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase text-emerald-600 bg-emerald-50 rounded-full">
          Consulenza energetica e sostenibilità
        </span>
        <h1 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          ENIMINDS — consulenza per l’innovazione del settore energetico
        </h1>
        <p className="mb-10 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
          Lavoriamo per l’innovazione del settore energetico e per la transizione del Paese.
          Servizi specialistici per imprese, associazioni di categoria e pubbliche amministrazioni.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="#contatti"
            className="px-6 py-3 bg-emerald-600 text-white text-sm font-semibold rounded-md shadow hover:bg-emerald-700 active:scale-95 transition-transform hover:shadow-lg"
          >
            Richiedi una consulenza
          </Link>
          <Link
            href="#consulenze"
            className="px-6 py-3 bg-white text-slate-900 border border-slate-200 text-sm font-semibold rounded-md hover:bg-slate-50 active:scale-95 transition-transform"
          >
            Scopri i servizi
          </Link>
        </div>
      </div>

      {/* Photograph on the right side of hero (real photograph, no caption per skill rule 1) */}
      <div className="relative z-10 hidden lg:block w-full max-w-7xl mt-12">
        <Image
          src="https://eniminds.com/wp-content/uploads/2026/05/eniminds-hero.jpg"
          alt="Sede operativa Eniminds"
          fill
          className="object-cover h-[500px] rounded-lg shadow-xl transition hover:scale-[1.02] duration-500"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}
