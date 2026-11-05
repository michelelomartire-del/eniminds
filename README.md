# ENIMINDS — sito istituzionale su Vercel (Next.js)

Progetto ricostruito a partire dalla copia dell’hosting WordPress di `eniminds.com`.
Stack: **Next.js 15 + React 19 + Tailwind CSS**, deploy su **Vercel**.

## Struttura
```
eniminds-vercel/
├── app/               # App Router Next.js (layout, pagina home, componenti)
├── public/            # asset statici (logo, placeholder immagini)
├── copy.md            # copy scritto prima del design (regola skill design-taste-frontend)
├── package.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── vercel.json        # configurazione deploy Vercel
└── tsconfig.json
```

## Requisiti
- Node.js 20+ (consigliato 22+ per coerenza con la skill design-taste-frontend)
- npm o pnpm

## Avvio in sviluppo locale
```bash
cd eniminds-vercel
npm install
npm run dev
# sito disponibile su http://localhost:3000
```

## Build e deploy su Vercel
```bash
npm run build
```
Collegare la cartella `eniminds-vercel` a un progetto Vercel (`vercel` CLI o dashboard). Il file `vercel.json` dichiara i comandi di build/dev/install.

## Note di sicurezza (ereditate dall’analisi della copia WP)
- `wp-config.php` della copia originale conteneva credenziali DB in chiaro: **non inserirle in questo progetto**.
- Il database WordPress **non è incluso** nella copia: per importare i contenuti serve un dump da `enimin-vnjear46.db.tb-hosting.com`.
- Immagini referenziate da `eniminds.com/wp-content/uploads/**` (remotePatterns configurato in `next.config.js`).

## Design (skill design-taste-frontend)
- Tipo pagina: `service`, site-kind: `other`
- Una sezione per schermo, bordi uguali a sinistra/destra (`.wrap`)
- Hover layer: card lift 2px, foto zoom 1.02–1.03, bottoni step/press, underlines draw
- Nessuna didascalia sotto le immagini; i credits in un’unica riga di footer
- Contatti per regola 9: solo via e distretto, nessun civico/CAP/telefono reale/P.IVA, email su `.example`
