'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight } from 'lucide-react'

const links = [
  { href: '#chi-siamo', label: 'Chi siamo' },
  { href: '#vision-e-mission', label: 'Vision e mission' },
  { href: '#priorita', label: 'Priorità' },
  { href: '#consulenze', label: 'Consulenze' },
  { href: '#per-consumatori', label: 'Per i consumatori' },
  { href: '#per-condomini', label: 'Per i condomini' },
  { href: '#contatti', label: 'Contattaci' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="wrap mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[1.125rem] font-bold tracking-tight text-slate-900">ENIMINDS</span>
            <span className="text-xs font-medium text-emerald-600 uppercase tracking-wider">energy</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-600 hover:text-emerald-600 transition-colors underline-offset-4 hover:underline">
                {l.label}
              </Link>
            ))}
            <Link href="#contatti" className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-emerald-600 transition-colors">
              Richiedi una consulenza
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate-600 hover:text-emerald-600"
            onClick={() => setOpen(!open)}
            aria-label="Apri menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="wrap mx-auto px-6 py-4 space-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-md transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contatti"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors text-center"
            >
              Richiedi una consulenza
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
