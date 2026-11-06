'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/vision-e-mission', label: 'Vision e mission' },
  { href: '/priorita', label: 'Priorità' },
  { href: '/consulenze', label: 'Consulenze' },
  { href: '/per-consumatori', label: 'Per i consumatori' },
  { href: '/per-condomini', label: 'Per i condomini' },
  { href: '/contatti', label: 'Contattaci' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="wrap mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/logo-enimind.svg"
              alt="ENIMINDS"
              width="120"
              height="28"
              className="block"
              decoding="async"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium whitespace-nowrap">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-slate-600 hover:text-emerald-700 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-slate-600 hover:text-emerald-700"
            onClick={() => setOpen(!open)}
            aria-label="Apri menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="wrap mx-auto max-w-7xl py-4 space-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-md transition-colors whitespace-nowrap"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contatti"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-white bg-emerald-700 rounded-md hover:bg-emerald-800 transition-colors text-center whitespace-nowrap"
            >
              Richiedi una consulenza
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
