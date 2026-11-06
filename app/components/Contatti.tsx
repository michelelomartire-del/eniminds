'use client'

import Link from 'next/link'

export function Contatti() {
  return (
    <section id="contatti" className="min-h-[100svh] bg-white flex items-center">
      <div className="wrap mx-auto max-w-7xl pb-12">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="lg:pr-24">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Contattaci</h2>
            <p className="mb-8 text-lg text-slate-600 leading-relaxed">
              Chiedi informazioni sui nostri servizi. Compila il form e il nostro team ti contatterà al più
              presto per una consulenza personalizzata in base alle tue esigenze.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1 text-slate-900">▸</span>
                <div>
                  <p className="font-medium text-slate-900">Sede legale</p>
                  <p className="text-sm text-slate-600">Via Emilia, San Lazzaro di Savena (BO)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1 text-slate-900">▸</span>
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <p className="text-sm text-slate-600">
                    <Link href="mailto:info@eniminds.example" className="text-emerald-700 hover:underline underline-offset-4">
                      info@eniminds.example
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
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
