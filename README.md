# Fit & Travel Blog

**Fit & Travel** ist ein deutschsprachiger Blog rund um Fitness unterwegs, Hotel-Workouts, Travel Essentials und praktische Reise-Empfehlungen.

Live: https://fitandtravelblog.de

## Tech Stack

- **Astro 7**
- **Tailwind CSS 4**
- **Astro Content Collections** für Blogartikel
- **@astrojs/sitemap** für XML-Sitemaps
- **Cloudflare Pages** für Hosting und Deployments
- **Google Analytics 4** mit Consent-gesteuertem Laden
- **Formspree** für das Kontaktformular

## Features

- Statisch generierte Seiten für schnelle Ladezeiten und saubere SEO-URLs
- Blogartikel aus Markdown-Content
- Canonical URLs, Open Graph und Twitter Meta Tags
- Sitemap und robots.txt
- Responsive Dark Mode
- Cookie-/Analytics-Consent
- Affiliate-fähige Gear-Seite mit Outbound-Tracking
- 301-Weiterleitung von `www.fitandtravelblog.de` auf die Hauptdomain
- Rechtliche Seiten mit geschützten Adressdaten über Environment Variables

## Projektstruktur

```text
/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   ├── pages/
│   │   └── blog/
│   └── styles/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Lokale Entwicklung

Voraussetzung: **Node.js >= 22.12**

```bash
npm install
npm run dev
```

Die lokale Entwicklungsumgebung läuft standardmäßig unter:

```text
http://localhost:4321
```

## Environment Variables

Für die rechtlichen Seiten werden folgende Variablen benötigt:

```env
LEGAL_STREET=
LEGAL_CITY=
```

Die Werte werden **nicht im Repository gespeichert**. Für lokale Entwicklung können sie in einer ignorierten `.env`-Datei gesetzt werden. In Cloudflare Pages sind sie als Environment Variables hinterlegt.

## Build

```bash
npm run build
```

Der Produktions-Build wird nach:

```text
dist/
```

geschrieben.

Optional lokal prüfen:

```bash
npm run preview
```

## Deployment

Das Projekt wird über **Cloudflare Pages** deployt.

- Production Branch: `main`
- Build Command: `npm run build`
- Build Output: `dist`
- Custom Domain: `fitandtravelblog.de`

Pushes auf `main` können automatisch einen neuen Production-Deploy auslösen.

## SEO

Die Website verwendet unter anderem:

- statisch gerenderte HTML-Seiten
- individuelle Title- und Meta-Descriptions
- Canonical URLs
- Open Graph / Twitter Cards
- `robots.txt`
- `sitemap-index.xml`
- Google Search Console

## Affiliate & Tracking

Ein Teil der Gear-Empfehlungen kann Affiliate-Links enthalten. Affiliate-Links werden entsprechend gekennzeichnet.

Eigene Klick-Events werden nur bei erteilter Analytics-Einwilligung an Google Analytics 4 gesendet.

## Autor

**Denis Michalski**

Projekt: https://fitandtravelblog.de
