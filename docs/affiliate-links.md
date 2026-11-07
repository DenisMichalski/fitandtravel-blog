# Affiliate-Link-Verwaltung

Stand: 07.11.2026

Diese Datei ist die zentrale Übersicht für Affiliate-Links und Tracking-Zuordnungen von Fit & Travel.

## Grundregel

Bevorzugter Funnel:

**Social Media → fitandtravelblog.de / Gear-Seite → Affiliate-Shop**

Direkte Affiliate-Links in Social Media nur dort einsetzen, wo sie strategisch sinnvoll und auf der jeweiligen Plattform sauber nutzbar sind.

## Amazon

| Einsatz | Tracking-ID | Verwendung |
|---|---|---|
| Gesamte Website | `fittravelrepe-21` | Aktuelle Amazon-Partner-ID für Gear-Seite und Blogartikel |

Hinweis: Nach der Neuanmeldung am 07.11.2026 verwenden alle Amazon-Links auf der Website die neue Partner-ID `fittravelrepe-21`.

## DECATHLON über Awin

| Produkt | ClickRef | Affiliate-Link | Einsatz |
|---|---|---|---|
| Springseil / Speed Rope | `gear_springseil` | https://tidd.ly/4zr5xo1 | Gear-Seite / produktbezogener Content |
| Fitnessband | `gear_fitnessband` | https://tidd.ly/4e1LJP5 | Gear-Seite / produktbezogener Content |
| Reiserucksack | `gear_rucksack` | https://tidd.ly/3UmOT9F | Gear-Seite / produktbezogener Content |

## GoWithGuide über Awin

| Einsatz | ClickRef | Affiliate-Link | Verwendung |
|---|---|---|---|
| Phuket: Phang Nga / James Bond Island | bestehender Deeplink | https://tidd.ly/4h1jgcX | Phuket-Artikel |
| Phuket: private Touren mit lokalen Guides | bestehender Deeplink | https://tidd.ly/4y8Kaac | Phuket-Artikel / Reiseziele-Seite |
| Private Flughafentransfers | `blog_airporttransfer` | https://tidd.ly/4ik4fVy | Artikel „Fit auf langen Reisen“ |


## EVASIM über Awin

| Produkt / Zielseite | ClickRef | Affiliate-Link | Einsatz | Hinweis |
|---|---|---|---|---|
| Thailand eSIM (englische Produktseite) | `gear_esim_thailand` | https://tidd.ly/48xp75P | Gear-Seite / Thailand-Content | Zielseite: https://evasim.com/en/products/tailandia-esim |

## Tracking-Regeln

- Für neue Awin-Links immer den Link Builder verwenden.
- `ClickRef 1` eindeutig und verständlich benennen, z. B. `gear_produktname`.
- Nach Möglichkeit gekürzte `tidd.ly`-Links verwenden.
- Bei Amazon derzeit ausschließlich die aktuelle Partner-ID `fittravelrepe-21` verwenden.
- Änderungen an Affiliate-Links hier dokumentieren, bevor oder direkt nachdem sie live gehen.
- Social-Traffic weiterhin über UTM-Parameter zur Website führen; Details dazu stehen in `docs/marketing-tracking.md`.

## AliExpress DE über Awin

| Produkt | ClickRef | Affiliate-Link | Einsatz | Hinweis |
|---|---|---|---|---|
| Kompressions-Packing-Cubes | `gear_packingcubes` | https://tidd.ly/4z7YwIr | Gear-Seite / Packing-Content | Empfehlung: 6er-Variante wählen; zuletzt ca. 19,89 €. Die Produktseite öffnet standardmäßig nicht zuverlässig direkt die 6er-Variante. |
| Kabel-/Technik-Organizer | `gear_kabelorganizer` | https://tidd.ly/3UGbn5A | Gear-Seite / Travel-Organisation | Double-Layer-Variante bevorzugt; zuletzt ca. 8,09 €. |
| Travel-Organizer für Nass-/Trockensachen | `gear_kulturbeutel` | https://tidd.ly/4esuQgK | Gear-Seite / Travel-Organisation | Für Reise, Fitness, Strand und Schwimmen; zuletzt ca. 6,39 €. |

## Hinweise zu AliExpress

- AliExpress-Links immer über den Awin Link Builder erzeugen.
- Für konkrete Produktvarianten prüfen, ob die Auswahl in der URL erhalten bleibt.
- Wenn die Variante nicht zuverlässig vorausgewählt wird, auf der Gear-Seite klar angeben, welche Variante empfohlen wird.
- Preise können sich ändern; Preisangaben daher nur als ungefähr bzw. zuletzt gesehen kennzeichnen.
