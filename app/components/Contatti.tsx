'use client'

import Link from 'next/link'

export function Contatti() {
  return (
    <section id="contatti" className="min-h-[1800px] bg-white py-24">
      <div className="wrap mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-6">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Contatti Enimismi</h2>
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

          <div className="lg:col-span-12 relative mt-12 lg:mt-0">
            <img
              src="/images/risorsa-1.svg"
              alt="Team Eniminds"
              width="640"
              height="480"
              className="w-full h-[350px] object-cover rounded-xl shadow-lg"
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-12 mt-8 lg:mt-0">
            <form className="max-w-[420px] space-y-4" action="#" method="POST">
              <h3 className="mb-6 text-xl font-bold text-slate-900">Invia un messaggio</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nome e cognome</label>
                  <input type="text" className="w-full px-4 py-2 rounded border border-slate-300 text-slate-900 focus:border-emerald-700 focus:outline-none transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Telefono *</label>
                  <input type="tel" className="w-full px-4 py-2 rounded border border-slate-300 text-slate-900 focus:border-emerald-700 focus:outline-none transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Indirizzo e-mail</label>
                  <input type="email" className="w-full px-4 py-2 rounded border border-slate-300 text-slate-900 focus:border-emerald-700 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Messaggio</label>
                  <textarea className="w-full px-4 py-2 rounded border border-slate-300 text-slate-900 focus:border-emerald-700 focus:outline-none transition-colors" rows={4} required></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-emerald-700 text-white font-semibold rounded-md hover:bg-emerald-800 active:scale-[0.98] transition-transform"
                >
                  Invia richiesta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
