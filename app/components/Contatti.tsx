'use client'

import Link from 'next/link'

export function Contatti() {
  return (
    <section id="contatti" className="py-24 lg:py-32 bg-white">
      <div className="wrap mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Contattaci</h2>
            <p className="mb-8 text-lg text-slate-600 leading-relaxed">
              Chiedi informazioni sui nostri servizi. Compila il form e il nostro team ti contatterà al più
              presto per una consulenza personalizzata in base alle tue esigenze.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1 text-emerald-600">▸</span>
                <div>
                  <p className="font-medium text-slate-900">Sede legale</p>
                  <p className="text-sm text-slate-600">Via Emilia, San Lazzaro di Savena (BO)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1 text-emerald-600">▸</span>
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <p className="text-sm text-slate-600"><a href="mailto:info@eniminds.example" className="hover:text-emerald-600 underline underline-offset-4">info@eniminds.example</a></p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1 text-emerald-600">▸</span>
                <div>
                  <p className="font-medium text-slate-900">Privacy</p>
                  <p className="text-sm text-slate-600"><a href="https://www.iubenda.com/privacy-policy/15841804/legal" className="hover:text-emerald-600 underline underline-offset-4">Informativa privacy (iubenda)</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl text-white">
            <h3 className="mb-6 text-xl font-bold">Invia un messaggio</h3>
            <form className="space-y-4" action="#" method="POST">
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1">Nome e cognome</label>
                <input type="text" className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none transition-colors" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1">Telefono *</label>
                <input type="tel" className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none transition-colors" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1">Indirizzo e-mail</label>
                <input type="email" className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1">Messaggio</label>
                <textarea className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none transition-colors" rows={4} required></textarea>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="privacy" className="mt-0.5 text-emerald-500" required />
                <label htmlFor="privacy" className="text-xs text-slate-400 leading-relaxed">
                  Ho letto e compreso la <a href="https://www.iubenda.com/privacy-policy/15841804/legal" className="text-emerald-400 hover:underline">privacy policy</a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 active:scale-[0.98] transition-transform shadow hover:shadow-emerald-500/30"
              >
                Invia richiesta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
