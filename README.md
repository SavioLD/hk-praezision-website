# HK‑Präzisionstechnik – Website (Designentwurf)

Neue Website für die **HK-Präzisionstechnik GmbH**, Oberndorf am Neckar
(Geschäftsführer Stefan Kruck).

**Grundlage (Stand 13.10.2026):** das **Miro-Board „Meilenstein 6“** von HK
(`20260202__Abgriff_Miro_Board.pdf`). Struktur, Menü und Texte sind 1:1 aus den
Wireframes übernommen. Dazu kommen die **Leitlinien Agentur-Briefing** (Anforderungen
an Technik und Qualität) und die Firmendaten aus der E-Mail-Signatur.

> **Status: klickbarer Designentwurf.** Laut Leitlinien wird die finale Seite in
> **WordPress** umgesetzt. Der Entwurf liefert Design, Struktur und alle Inhalte
> (DE + EN). Jeder Abschnittstyp entspricht später einem Block in WordPress.

## Ansehen

- **GitHub Pages:** `https://saviold.github.io/hk-praezision-website/`
- **Lokal:** im Ordner `python3 -m http.server` starten, dann `http://localhost:8000`

Der Entwurf steht auf **noindex** und zeigt oben die Leiste „Designentwurf – nicht öffentlich“.
Gelb gestrichelte Kästen markieren offene Punkte aus dem Board und sind nur im Entwurf sichtbar.

## Seiten und Menü (wie im Miro-Board)

Menü: **Lösungen ▾** (Werkstück-Spanntechnik · Thermoplast-Umluftöfen · Umluftöfen für
Spezialanwendungen · Diamantdrahtsägen) · **Über uns** · **Karriere** · Button **Kontakt**

| Seite | Deutsch | Englisch | Grundlage |
|-------|---------|----------|-----------|
| Startseite | `index.html` | `en/index.html` | Wireframe |
| Werkstück-Spanntechnik | `werkstueck-spanntechnik.html` | `en/workholding.html` | Wireframe |
| Thermoplast-Umluftöfen | `thermoplast-umluftoefen.html` | `en/thermoplastic-convection-ovens.html` | Wireframe |
| Umluftöfen für Spezialanwendungen | `umluftoefen-spezialanwendungen.html` | `en/convection-ovens-special-applications.html` | Wireframe |
| Diamantdrahtsägen | `diamantdrahtsaegen.html` | `en/diamond-wire-saws.html` | Wireframe |
| Schenk / Siebdruckmaschinen | `schenk-siebdruckmaschinen.html` | `en/schenk-screen-printing-machines.html` | Wireframe, **eigenes Menü, nicht im HK-Menü** |
| Über uns | `ueber-uns.html` | `en/about-us.html` | nur Klebezettel – aus Board-Texten zusammengestellt |
| Karriere | `karriere.html` | `en/careers.html` | nur Klebezettel – Board-Text + Video; Button zur [Karriere-Landingpage](https://saviold.github.io/hk-praezision-karriere/) |
| Kontakt | `kontakt.html` | `en/contact.html` | nur Klebezettel – Anfrage-Tool aus dem ersten Entwurf |
| Impressum, Datenschutz | `impressum.html`, `datenschutz.html` | `en/legal-notice.html`, `en/privacy.html` | nur Klebezettel – Signatur bzw. Gerüst |

**Texte:** Die Board-Texte sind wörtlich übernommen. Korrigiert wurden nur Tippfehler,
z. B. „komapt“ → „kompakt“, „Geschwindikeit“ → „Geschwindigkeit“,
„Wärmprozessen“ → „Wärmeprozessen“, „Schenck“ → „Schenk“, „Eigene Fertigung sorgen“ → „sorgt“.
Die **englische Fassung** ist ein Übersetzungsentwurf. HK will direkt übersetzen (DeepL).
Laut Leitlinien müssen die Fachbegriffe trotzdem von einem Menschen geprüft werden.

## Offene Punkte aus dem Miro-Board

| Was | Wo | Stand |
|-----|----|-------|
| Seiten ohne Wireframe | Über uns, Karriere, Kontakt, Impressum, Datenschutz | von uns zusammengestellt, von HK abzunehmen |
| Schenk / Siebdruckmaschinen | eigene Seite | Zugehörigkeit zum Auftrag, eigene Domain, Logo klären |
| Social Proof / Referenzprojekte, Kundenstimmen, Fallstudien („Stichpunkte von Stefan“) | Spanntechnik, Öfen | fehlen; ein Referenzfoto aus dem Board ist eingebaut |
| Markengeschichte HK | Spanntechnik, Öfen, Sägen, Über uns | Text fehlt |
| Testimonials | Diamantdrahtsägen | fehlen |
| Logo-Leiste („Fraunhofer-Institut etc.“) | Startseite, Spanntechnik, Öfen | Logos fehlen |
| Leitfaden „Die 10 größten Fehler …“ (PDF) | Spanntechnik | gibt es noch nicht |
| Materialübersicht Diamantdrahtsägen | Diamantdrahtsägen | fehlt (Google-Workspace-Dokument oder Liste zum Aufklappen) |
| Modellübersicht Sägen („Konsolidierte Auswahl + Sondermaschinenbau“) | Diamantdrahtsägen | fehlt |
| Schenk-Produktbroschüre (PDF) | Schenk | fehlt |
| Silikonverguss (Recherche Leitlinien S. 5–7) | Spezialanwendungen | „Verarbeitung von Silikon und Polyurethan“ steht in der Liste; eigener Abschnitt? |
| Schenk Beetle „bis zu 13 Farben“ vs. Spider „bis 12 Farben“ | Schenk | Angaben von HK prüfen lassen |

## Videos

Laut Board sind drei Videos vorgesehen. HK produziert sie selbst. Sobald sie fertig sind,
die YouTube-ID oder MP4-Datei in `_src/firma.mjs` (`VIDEOS`) eintragen:

| Schlüssel | Seite | Sprechertext im Board |
|-----------|-------|-----------------------|
| `unternehmen` | Startseite, Über uns | „Unsere Kunden bewegen sich in Märkten …“ |
| `spanntechnik` | Werkstück-Spanntechnik | „Wenn Sie dafür verantwortlich sind, ein Zerspanungs-Werkstück in Serie zu bringen …“ |
| `karriere` | Karriere | 90-Sekunden- bzw. 2–3-Minuten-Version |

YouTube-Videos laden erst nach Klick (`youtube-nocookie`), vorher besteht keine Verbindung.

## Abgleich mit den Leitlinien

| Anforderung | Im Entwurf |
|-------------|------------|
| Struktur aus Wireframes, Texte umsetzen | Miro-Board 1:1 umgesetzt |
| Mehrsprachigkeit | DE + EN, Sprachumschalter, `hreflang` |
| Responsiv | geprüft 360–1440 px, kein seitlicher Überlauf |
| **PageSpeed mobil ≥ 70** | Lighthouse mobil 99–100 |
| **Barrierefreiheit** | axe-core: 0 Verstöße (22 Seiten × Handy/Desktop), Lighthouse 100, ohne Overlay-Plugin |
| **SEO** | Title und Meta-Description je Seite, eine H1, saubere Überschriften, canonical, Sitemap, strukturierte Daten. Im Live-Modus SEO 100 (im Entwurf 69 wegen noindex) |
| DSGVO | Schriften lokal, Videos erst nach Klick, Google Maps nur als Link, keine Cookies |
| Tracking | Matomo ohne Cookies vorbereitet, Search Console vorbereitet (`_src/firma.mjs`) |
| Anfrage-Tool | 5 Schritte, Bereiche wie im Board, Deeplinks `kontakt.html?bereich=spanntechnik`, `rohteil`, `thermoplast`, `spezial`, `saegen`, `schenk` |
| Video-Tutorial, Schulung | WordPress-Phase; die Schulung richtet sich an Frau Zirner (HK) |

## Bildmaterial

Dateien mit genau diesem Namen in `bilder/` legen und neu bauen. Bis dahin steht ein
beschrifteter Platzhalter da. Empfehlung: ca. 1600 px breit, JPG/WebP, unter 300 KB.

**Schon eingebaut:** `referenz-verbrennungsmotoren.jpg` (aus dem Miro-Board) und das Logo
aus der Mail-Signatur (`hk-logo-aus-signatur.png`; Originaldatei als `hk-logo.svg` oder `hk-logo.png` ablegen).

| Datei | Motiv | Seite |
|-------|-------|-------|
| `hero-start.jpg` | Startseite | Startseite |
| `loesung-spanntechnik.jpg` · `loesung-thermoplast.jpg` · `loesung-spezial.jpg` · `loesung-saegen.jpg` | je ein Foto pro Lösung | Startseite |
| `karriere.jpg` | Team / Arbeitsplatz | Startseite, Karriere |
| `team.jpg` | Team | Spanntechnik, Über uns |
| `hero-spanntechnik.jpg` | Spannvorrichtung | Spanntechnik |
| `turnkey.jpg` | Fertigung / Montage | Spanntechnik |
| `funktionsintegration.jpg` | Vorrichtung mit Hydraulik | Spanntechnik |
| `rohteil.jpg` | Rohteil / Gussteil | Spanntechnik |
| `leitfaden-cover.jpg` | Titelbild Leitfaden (Hochformat) | Spanntechnik |
| `kundenbeispiel.jpg` | Aluminium-Gehäuseteil | Spanntechnik |
| `hero-thermoplast.jpg` · `thermoplast-bauteil.jpg` · `anwendung-thermoplast.jpg` | Ofen, Bauteil, Anwendung | Thermoplast |
| `infrarot-vs-umluft.jpg` | Grafik Infrarot vs. Umluft | Thermoplast |
| `passat.jpg` · `scirocco.jpg` | die beiden Ofensysteme | Thermoplast, Spezialanwendungen |
| `loeschanlage.jpg` · `gassensorik.jpg` · `frischluft.jpg` | Anlagenschutz | Thermoplast |
| `technikum.jpg` | Technikum / Anwendungstechnik | Thermoplast, Spezialanwendungen |
| `hero-spezial.jpg` · `temperaturfuehrung.jpg` · `anwendung-spezial.jpg` | Ofen, Steuerung, Anwendung | Spezialanwendungen |
| `hero-saegen.jpg` · `geraete.jpg` · `loop-line.jpg` · `versuchsschnitt.jpg` | Säge, Geräte, Loop-Line®, Versuchsschnitt | Diamantdrahtsägen |
| `werkstoff-silizium.jpg` · `-keramik` · `-kristalle` · `-edelsteine` · `-verbund` · `-metalle` · `-glas` · `-graphit` | Nahaufnahmen der Werkstoffe | Diamantdrahtsägen |
| `hero-schenk.jpg` · `schenk-beetle.jpg` · `schenk-spider.jpg` · `schenk-octopus.jpg` | Maschine und Modelle | Schenk |
| `schenk-textil.jpg` · `schenk-flock.jpg` · `schenk-zwischentrockner.jpg` · `schenk-tunneltrockner.jpg` | Druckbild, Veredelung, Trockner | Schenk |
| `schenk-service.jpg` · `schenk-beratung.jpg` · `schenk-historie.jpg` | Service, Beratung, Historie | Schenk |

## Bearbeiten und neu bauen

```bash
node _src/build.mjs
```

Keine Abhängigkeiten, nur Node ≥ 18. Der Build schreibt alle 22 Seiten, die `sitemap.xml`
und die `robots.txt` neu.

| Was | Wo |
|-----|----|
| Texte Deutsch / Englisch | `_src/inhalte/de.mjs`, `_src/inhalte/en.mjs` |
| Firmendaten, Videos, Tracking, Anfrage-Ziel, Entwurf an/aus | `_src/firma.mjs` |
| Farben, Schriften, Layout | `_src/style.css` (CI nur im `:root`-Block) |
| Navigation, Formular-Logik | `_src/app.js` |
| Seitengerüst, Abschnittstypen | `_src/build.mjs` |

**Livegang:** In `_src/firma.mjs` `entwurf: false` setzen. Damit verschwinden Entwurfsleiste
und Platzhalter-Kästen, und die Seiten werden indexierbar.

**CI:** Farben aus dem Logo der Mail-Signatur (Schiefergrün `#586860`, Steingrau `#d3cbc4`,
Salbeigrün `#8fb1a0`). hk-prt.de war aus der Arbeitsumgebung nicht erreichbar. Mit
Styleguide oder Screenshots nur den `:root`-Block anpassen.
Schrift: Barlow und Barlow Condensed (SIL Open Font License), lokal in `assets/fonts/`.
