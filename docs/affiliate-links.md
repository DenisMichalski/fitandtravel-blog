# Affiliate-Link-Verwaltung

Stand: 24.10.2026

Diese Datei ist die zentrale Übersicht für Affiliate-Links und Tracking-Zuordnungen von Fit & Travel.

## Grundregel

Bevorzugter Funnel:

**Social Media → fitandtravelblog.de / Gear-Seite → Affiliate-Shop**

Direkte Affiliate-Links in Social Media nur dort einsetzen, wo sie strategisch sinnvoll und auf der jeweiligen Plattform sauber nutzbar sind.

## Amazon

| Einsatz | Tracking-ID | Verwendung |
|---|---|---|
| Gear-Seite | `fittravel-gear-21` | Alle Amazon-Produktlinks auf `/gear/` |
| Blog | `fittravel-blog-21` | Amazon-Links in Blogartikeln |
| YouTube | `fittravel-youtube-21` | Direkte Amazon-Links in geeigneten YouTube-Inhalten |

Hinweis: Produktlinks werden jeweils mit der passenden Tracking-ID erzeugt.

## DECATHLON über Awin

| Produkt | ClickRef | Affiliate-Link | Einsatz |
|---|---|---|---|
| Springseil / Speed Rope | `gear_springseil` | https://tidd.ly/4zr5xo1 | Gear-Seite / produktbezogener Content |
| Fitnessband | `gear_fitnessband` | https://tidd.ly/4e1LJP5 | Gear-Seite / produktbezogener Content |
| Reiserucksack | `gear_rucksack` | https://tidd.ly/3UmOT9F | Gear-Seite / produktbezogener Content |

## Tracking-Regeln

- Für neue Awin-Links immer den Link Builder verwenden.
- `ClickRef 1` eindeutig und verständlich benennen, z. B. `gear_produktname`.
- Nach Möglichkeit gekürzte `tidd.ly`-Links verwenden.
- Bei Amazon immer die Tracking-ID passend zum Einsatzort wählen.
- Änderungen an Affiliate-Links hier dokumentieren, bevor oder direkt nachdem sie live gehen.
- Social-Traffic weiterhin über UTM-Parameter zur Website führen; Details dazu stehen in `docs/marketing-tracking.md`.

## Nächste Ergänzung

AliExpress DE wird später ergänzt, sobald die ersten konkreten Produkte und Tracking-Links ausgewählt wurden.
