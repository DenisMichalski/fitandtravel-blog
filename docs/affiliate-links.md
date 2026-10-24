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

## AliExpress DE über Awin

| Produkt | ClickRef | Affiliate-Link | Einsatz | Hinweis |
|---|---|---|---|---|
| Kompressions-Packing-Cubes | `gear_packingcubes` | https://tidd.ly/4z7YwIr | Gear-Seite / Packing-Content | Empfehlung: 6er-Variante wählen; zuletzt ca. 19,89 €. Die Produktseite öffnet standardmäßig nicht zuverlässig direkt die 6er-Variante. |
| Kabel-/Technik-Organizer | `gear_kabelorganizer` | https://tidd.ly/3UGbn5A | Gear-Seite / Travel-Organisation | Double-Layer-Variante bevorzugt; zuletzt ca. 8,09 €. |

## Hinweise zu AliExpress

- AliExpress-Links immer über den Awin Link Builder erzeugen.
- Für konkrete Produktvarianten prüfen, ob die Auswahl in der URL erhalten bleibt.
- Wenn die Variante nicht zuverlässig vorausgewählt wird, auf der Gear-Seite klar angeben, welche Variante empfohlen wird.
- Preise können sich ändern; Preisangaben daher nur als ungefähr bzw. zuletzt gesehen kennzeichnen.
