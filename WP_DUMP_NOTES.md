# Import contenuti WordPress (Punto 3)

## Stato

Il database WordPress di eniminds.com è stato esportato e sanificato.

### Dump MySQL sanificato

**File:** `C:\Users\miche\Downloads\eniminds-wpress\enimin_vnjear46_dump_sanitized.sql`  
**Dimensione:** 234,91 MB (246.321.799 byte)

Operazioni effettuate:
- Estratto dall'archivio `.wpress` di All-in-One WP Migration (376 MB) con Python puro
- Prefisso tabelle `SERVMASK_PREFIX_` → `wp_` (33.412 sostituzioni)
- Variabile `{$table_name}` → `wp_` (19 sostituzioni)
- **Sanitizzazione regola 9 della skill (dati anonimi):**
  - `https://eniminds.com` → `https://eniminds.staging.example` (5.729 sostituzioni)
  - `http://eniminds.com` → `https://eniminds.staging.example` (3 sostituzioni)
  - `m.lomartire@eniminds.com` → `info@eniminds.example` (114 sostituzioni)

### Contenuti estratti (riferimento)

**File:** `C:\Users\miche\Downloads\eniminds-wpress\wp_content_extracted.json`

| Tabella | Righe |
|---------|-------|
| `wp_options` | 276 |
| `wp_posts` | 533 |
| `wp_users` | 1 |

**Pagine pubblicate in WP:** `chi-siamo`, `consulenze`, `blog`, `sps-2026`

⚠️ Le pagine WP usano **Divi builder** con solo placeholder JSON, senza testo leggibile estraibile. Il copy già scritto nel progetto Next.js rimane come fonte principale.

### Import in DB locale

Non è stato possibile eseguire l'import in MySQL/MariaDB perché nessun server MySQL è installato in questo ambiente. Il file `.sql` sanificato è pronto per l'import quando un DB sarà disponibile.
