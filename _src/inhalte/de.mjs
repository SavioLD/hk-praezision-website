/* =====================================================================
   INHALTE DEUTSCH – Grundlage: Miro-Board „Meilenstein 6“ (02.02.2026)
   ---------------------------------------------------------------------
   Seiten mit Wireframe (Texte 1:1 aus dem Board, nur Tippfehler
   korrigiert): Startseite, Werkstück-Spanntechnik, Thermoplast-
   Umluftöfen, Umluftöfen für Spezialanwendungen, Diamantdrahtsägen,
   Schenk / Siebdruckmaschinen.
   Seiten ohne Wireframe (im Board nur als Klebezettel): Über uns,
   Karriere, Kontakt, Impressum, Datenschutz – aus Board-Texten
   zusammengestellt.

   Jede Seite = Liste von Abschnitten. Typen: kopf, logos, karten, split,
   videoblock, ablauf, fakten, zitat, schritte, cta, hinweis, prosa,
   anfrage. Links im Text: [Text](seite:kontakt?bereich=spanntechnik)
   ===================================================================== */

const KARRIERE_URL = 'https://saviold.github.io/hk-praezision-karriere/';
const GF = 'Stefan Kruck, Geschäftsführer';

const LOGOS = (hinweis) => ({
  typ: 'logos',
  titel: 'Kunden & Partner',
  liste: ['Logo', 'Logo', 'Logo', 'Logo', 'Logo'],
  hinweis
});
const LOGOS_FRAUNHOFER = {
  typ: 'logos',
  titel: 'Partner & Institute',
  liste: ['Fraunhofer-Institut', 'Logo', 'Logo', 'Logo', 'Logo'],
  hinweis: 'Laut Miro-Board „Fraunhofer-Institut etc.“ – die Logos liefert HK.'
};

const IR_UMLUFT = 'Infrarot vs. Umluft: Nur Umluft sorgt für eine vollständig gleichmäßige Durchwärmung des Bauteils bis in den Kern – die Grundlage für stabile Qualität und schnelle Taktzeiten.';

const PASSAT = {
  bild: { datei: 'passat.jpg', text: 'Foto: Passat', alt: 'Umluftofen Passat mit Lift-System', format: '16/10' },
  tag: 'Entwicklung & Kleinserie',
  titel: 'Passat – das flexible Lift-System',
  absaetze: [
    'Der Passat arbeitet mit einem vertikalen Lift-Prinzip: Ein zentraler Korb fährt die einzelnen Schubladen auf eine ergonomische Arbeitshöhe, auf der Bediener oder Roboter komfortabel be- und entladen können. Das System ist ideal für Laborversuche, Parameterstudien, Materialtests und Vorserien, da es äußerst flexibel ist und sich schnell umrüsten lässt.',
    'Damit eignet sich der Passat besonders für kleinere Stückzahlen, variable Prozesse und Anwendungen, bei denen Präzision und Flexibilität wichtiger sind als maximale Durchsatzleistung.'
  ]
};
const SCIROCCO = {
  bild: { datei: 'scirocco.jpg', text: 'Foto: Scirocco', alt: 'Umluftofen Scirocco mit Paternoster-System', format: '16/10' },
  tag: 'Kurze Taktzeiten & Serienproduktion',
  titel: 'Scirocco – das Paternoster-System',
  absaetze: [
    'Der Scirocco nutzt ein kontinuierliches Paternoster-Prinzip: Die Roste laufen im Umlauf, sodass oben entnommen und unten direkt neu bestückt wird. Dadurch lassen sich nahezu beliebig viele Ebenen integrieren – ideal für industrielle Stückzahlen und schnelle Materialwechsel.',
    'Das System ermöglicht einen konstanten Materialfluss, kurze Wege, geringe Stillstandszeiten und höchste Produktivität. Für Unternehmen, die ihre Composite-Prozesse skalieren wollen, ist der Scirocco die optimale Lösung.'
  ]
};

const BERATUNG_OFEN = (bereich) => ({
  typ: 'split',
  umgekehrt: true,
  kicker: 'Unverbindliche Beratung',
  h2: 'Wir bringen Ihre Anwendung ins Ziel.',
  absaetze: [
    'Ob Sie einen einzelnen Ofen für Ihre bestehende Linie benötigen oder ein komplettes Turnkey-Projekt inklusive Automation umsetzen lassen möchten – wir begleiten Sie darin, Ihren Prozess sicher in Serie zu bringen.',
    'Gemeinsam mit unseren Anwendungstechnikern analysieren wir Ihre Anforderungen und testen Ihr Material direkt in unserem Technikum im Haus.',
    'Anhand der sekundengenauen Temperaturkurven optimieren wir alle relevanten Parameter für Ihren Produktionsprozess. So erhalten Sie realitätsnahe Ergebnisse aus echten Produktionsbedingungen – noch bevor Sie investieren.'
  ],
  schluss: ['<strong>Jetzt mit einem unserer Anwendungstechniker sprechen.</strong>'],
  knoepfe: [{ text: 'Unverbindliche Beratung', seite: 'kontakt', extra: '?bereich=' + bereich }],
  bild: { datei: 'technikum.jpg', text: 'Foto: Technikum / Anwendungstechnik', alt: 'Anwendungstechniker im Technikum von HK-Präzisionstechnik' }
});

const SOCIAL_PROOF = 'Laut Miro-Board noch offen: Social Proof / Referenzprojekte (Kundenstimme, 2–3 Fallstudien – „Stichpunkte von Stefan“) und Markengeschichte HK.';

const CTA_START = {
  typ: 'cta',
  kicker: 'German Precision in Chinese Speed',
  h2: 'Sprechen wir über Ihre Anwendung – und wie wir sie schneller in Serie bringen.',
  text: 'Anfragen landen direkt im Kernteam aus Konstruktion und Anwendungstechnik, sodass Sie in wenigen Tagen eine klare Richtung erhalten – nicht erst nach endlosen Abstimmungen.',
  knoepfe: [{ text: 'Jetzt beraten lassen', seite: 'kontakt' }]
};

export default {
  lang: 'de',
  htmlLang: 'de-DE',
  og: 'de_DE',
  name: 'Deutsch',
  kurz: 'DE',
  ordner: '',

  slugs: {
    start: 'index.html',
    spanntechnik: 'werkstueck-spanntechnik.html',
    thermoplast: 'thermoplast-umluftoefen.html',
    spezial: 'umluftoefen-spezialanwendungen.html',
    saegen: 'diamantdrahtsaegen.html',
    ueberuns: 'ueber-uns.html',
    karriere: 'karriere.html',
    kontakt: 'kontakt.html',
    impressum: 'impressum.html',
    datenschutz: 'datenschutz.html',
    schenk: 'schenk-siebdruckmaschinen.html'
  },

  /* Menü laut Miro-Board: Lösungen (Dropdown) · Über uns · Karriere · Button Kontakt */
  nav: [
    { text: 'Lösungen', kinder: ['spanntechnik', 'thermoplast', 'spezial', 'saegen'] },
    { seite: 'ueberuns' },
    { seite: 'karriere' }
  ],

  ui: {
    zumInhalt: 'Zum Inhalt springen',
    entwurf: 'Designentwurf HK‑Präzisionstechnik – nicht öffentlich',
    stand: 'Stand',
    menue: 'Menü',
    hauptnavigation: 'Hauptnavigation',
    sprache: 'Sprache wählen',
    anfragen: 'Kontakt',
    startseite: 'Startseite',
    brotkrumen: 'Brotkrumen-Navigation',
    videoFolgt: 'Video folgt',
    videoAbspielen: 'Video abspielen',
    videoYoutube: 'Beim Abspielen wird eine Verbindung zu YouTube hergestellt.',
    bildFolgt: 'Bildmaterial von HK',
    platzhalter: 'Platzhalter · nur im Entwurf sichtbar',
    vorteil: 'Vorteil',
    nachteil: 'Nachteil',
    ja: 'Ja',
    nein: 'Nein',
    serienstart: 'Serienstart',
    oderAnrufen: 'Oder direkt anrufen:',
    telefon: 'Telefon',
    fax: 'Fax',
    email: 'E-Mail',
    adresse: 'Adresse & Anfahrt',
    anfahrt: 'Navi: Aldi Süd, Neckarstraße 1. Vor dem Aldi-Parkplatz rechts unter der Brücke durch – Gebäude 4.',
    route: 'Route in Google Maps öffnen',
    neuesFenster: '(öffnet neues Fenster)',
    direkt: 'Direkter Kontakt',
    bereiche: 'Lösungen',
    unternehmen: 'Unternehmen',
    kontakt: 'Kontakt',
    fussText: 'Werkstück-Spanntechnik, Thermoplast-Umluftöfen, Umluftöfen für Spezialanwendungen und Diamantdrahtsägen aus Oberndorf am Neckar.',

    form: {
      schritt: 'Schritt {n} von {g}',
      weiter: 'Weiter',
      zurueck: 'Zurück',
      optional: 'optional',
      s1: 'Worum geht es?',
      s1hilfe: 'Wählen Sie den Bereich, zu dem Sie eine Einschätzung möchten.',
      bereiche: [
        { wert: 'spanntechnik', text: 'Werkstück-Spanntechnik' },
        { wert: 'rohteil', text: 'Rohteil-Beratung' },
        { wert: 'thermoplast', text: 'Thermoplast-Umluftofen' },
        { wert: 'spezial', text: 'Umluftofen für Spezialanwendungen' },
        { wert: 'saegen', text: 'Diamantdrahtsäge' },
        { wert: 'schenk', text: 'Schenk Siebdruckmaschine' },
        { wert: 'service', text: 'Service für eine bestehende Anlage' },
        { wert: 'sonstiges', text: 'Etwas anderes' }
      ],
      s2: 'Wo steht Ihr Projekt?',
      s2hilfe: 'Je früher wir einsteigen, desto mehr können wir für Ihren Serienstart tun.',
      stände: [
        { wert: 'anfang', text: 'Am Anfang – Bauteil oder Prozess noch in Entwicklung', klein: 'Ideal für Simultanes Engineering und Versuche im Technikum' },
        { wert: 'klar', text: 'Anforderungen sind klar – wir suchen die passende Lösung' },
        { wert: 'optimieren', text: 'Der Prozess läuft und soll schneller oder stabiler werden' },
        { wert: 'bestand', text: 'Es geht um eine bestehende Anlage', klein: 'Service, Wartung, Erweiterung' }
      ],
      s3: 'Wann soll es losgehen?',
      s3hilfe: 'Ihr Projekt hat einen Termin – sagen Sie uns, welchen.',
      zeiten: [
        { wert: 'sofort', text: 'So schnell wie möglich' },
        { wert: '3m', text: 'In den nächsten 3 Monaten' },
        { wert: '12m', text: 'In 3 bis 12 Monaten' },
        { wert: 'offen', text: 'Noch offen' }
      ],
      s4: 'Erzählen Sie uns kurz von Ihrem Projekt.',
      s4hilfe: 'Ein paar Stichworte reichen. Zeichnungen und Details klären wir im Gespräch.',
      nachricht: 'Ihr Projekt',
      nachrichtPlatzhalter: 'z. B. Bauteil, Werkstoff, Stückzahl, geplanter Serienstart …',
      s5: 'Wohin dürfen wir Ihre Einschätzung schicken?',
      s5hilfe: 'Sie erhalten in wenigen Tagen eine klare Richtung von uns.',
      firma: 'Firma',
      vorname: 'Vorname',
      nachname: 'Nachname',
      email: 'E-Mail',
      telefon: 'Telefon',
      datenschutz: 'Ich bin einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden. Details in der [Datenschutzerklärung](seite:datenschutz).',
      senden: 'Anfrage senden',
      dankeTitel: 'Danke – Ihre Anfrage ist da.',
      dankeText: 'Sie landet direkt im Kernteam aus Konstruktion und Anwendungstechnik. In wenigen Tagen erhalten Sie eine klare Richtung – nicht erst nach endlosen Abstimmungen.',
      ohneJs: 'Das Anfrage-Tool braucht JavaScript. Schreiben Sie uns einfach an {MAIL} oder rufen Sie an: {TEL}.',
      js: {
        schritt: 'Schritt {n} von {g}',
        wahl: 'Bitte wählen Sie eine Option.',
        pflicht: 'Bitte füllen Sie dieses Feld aus.',
        email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        datenschutz: 'Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu.',
        senden: 'Das hat leider nicht geklappt. Bitte versuchen Sie es noch einmal oder rufen Sie uns an.',
        ja: 'Ja'
      }
    }
  },

  seiten: {
    /* ================================================================ STARTSEITE (Board) */
    start: {
      name: 'Startseite',
      title: 'HK Präzisionstechnik – German Precision in Chinese Speed',
      description: 'Werkstück-Spanntechnik, Thermoplast-Umluftöfen, Umluftöfen für Spezialanwendungen und Diamantdrahtsägen aus Oberndorf. Schneller in Serie. Sicherer im Prozess.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Schneller in Serie. Sicherer im Prozess',
          h1: 'German Precision <em>in Chinese Speed.</em>',
          lead: 'Wir denken Ihre Produktion von Anfang an mit – von der ersten Beratung weit vor dem eigentlichen Projektstart über Prototypen bis zur serienreifen Lösung. Indem Ihre Produktionsexperten und unsere Konstruktionsingenieure früh an einem Tisch sitzen, kommen Ihre Projekte schneller, stabiler und wirtschaftlicher in Serie.',
          aufruf: 'Sprechen wir über Ihre Anwendung – und wie wir sie schneller in Serie bringen.',
          knoepfe: [{ text: 'Jetzt beraten lassen', seite: 'kontakt' }, { text: 'Zu unseren Lösungen', seite: 'start', extra: '#loesungen', stil: 'rahmen' }],
          bild: { datei: 'hero-start.jpg', text: 'Foto: Startseite', alt: 'HK-Präzisionstechnik in Oberndorf am Neckar' }
        },
        LOGOS('Logo-Leiste laut Miro-Board – Kunden- bzw. Partnerlogos liefert HK.'),
        {
          typ: 'karten',
          anker: 'loesungen',
          spalten: 2,
          kicker: 'Unsere Lösungen',
          h2: 'Von Spanntechnik bis Thermoplastofen – das können wir für Sie tun.',
          liste: [
            { bild: { datei: 'loesung-spanntechnik.jpg', text: 'Foto: Werkstück-Spanntechnik', alt: 'Spannvorrichtung für Fräszentren', format: '16/10' }, titel: 'Werkstück-Spanntechnik für Fräszentren', untertitel: 'Schneller in Serie. Sicherer im Prozess.', text: 'Von der Rohteilberatung über Prototypen bis zur Serienvorrichtung begleiten wir Ihren kompletten Weg in die Fräsproduktion. Unsere Spannvorrichtungen sind auf hohe Stückzahlen, Automation und lange Produktlebenszyklen ausgelegt – damit Ihr Bauteil stabil, prozesssicher und wirtschaftlich gefertigt werden kann.', seite: 'spanntechnik', link: 'Spanntechnik-Lösungen entdecken' },
            { bild: { datei: 'loesung-thermoplast.jpg', text: 'Foto: Thermoplast-Umluftofen', alt: 'Thermoplast-Umluftofen', format: '16/10' }, titel: 'Thermoplast-Umluftöfen', untertitel: 'Schnell, präzise und recycelbar – die Zukunft der Composite-Verarbeitung.', text: 'Unsere Umluftöfen sind die Lösung für faserverstärkte Thermoplaste mit Materialdicken ab ca. 1,5 mm. Sie kombinieren gleichmäßige Durchwärmung, kurze Taktzeiten und hohe Energieeffizienz – ideal für Akkuabdeckungen, Hitzeschutzteile, Strukturbauteile und mehr.', seite: 'thermoplast', link: 'Thermoplast-Umluftöfen entdecken' },
            { bild: { datei: 'loesung-spezial.jpg', text: 'Foto: Umluftofen für Spezialanwendungen', alt: 'Umluftofen für Spezialanwendungen', format: '16/10' }, titel: 'Umluftöfen für Spezialanwendungen', untertitel: 'Präzise Temperaturführung – wenn Qualität keine Schwankungen verzeiht.', text: 'Unsere Umluftöfen sind die Lösung für Wärmeprozesse mit engen Temperaturfenstern. Sie kombinieren homogene Durchwärmung, reproduzierbare Ergebnisse und hohe Energieeffizienz – ideal, wo stabile Bauteileigenschaften, geringe Ausschussquoten und verlässliche Taktzeiten entscheidend sind.', seite: 'spezial', link: 'Umluftöfen entdecken' },
            { bild: { datei: 'loesung-saegen.jpg', text: 'Foto: Diamantdrahtsäge', alt: 'Diamantdrahtsäge', format: '16/10' }, titel: 'Diamantdrahtsägen', untertitel: 'Präzise Schnitte für anspruchsvollste Werkstoffe.', text: 'Mit unseren Diamantdrahtsägen schneiden Kunden Silizium, Keramik, Glas, Verbundwerkstoffe und viele weitere Hochleistungswerkstoffe – schonend, präzise und mit minimalen Schnittverlusten. Ideal für Forschung, Entwicklung und Serienfertigung empfindlicher oder spröder Materialien.', seite: 'saegen', link: 'Diamantdrahtsägen entdecken' }
          ]
        },
        {
          typ: 'split',
          stein: true,
          umgekehrt: true,
          kicker: 'Karriere',
          h2: 'Ihre Karriere bei HK Präzisionstechnik',
          absaetze: [
            'Bei HK Präzisionstechnik arbeiten Sie in einem Team, das Geschwindigkeit, Präzision und echtes Ingenieurhandwerk miteinander verbindet.',
            'Wir entwickeln Spanntechnik, Thermoplast-Umluftöfen und Sondermaschinen, die bei führenden Unternehmen seit Jahrzehnten im Einsatz sind – und das gelingt nur, weil bei uns jeder Mitarbeiter Verantwortung übernimmt, Ideen einbringt und direkt an Lösungen mitarbeitet.',
            'Ob Konstruktion, Fertigung, Projektmanagement oder Ausbildung: Bei uns erwarten Sie kurze Entscheidungswege, offene Türen, moderne Technologien und Projekte, bei denen Sie wirklich sehen, was Sie bewegen.'
          ],
          schluss: ['<strong>Wer Dinge schneller, smarter und nachhaltiger in Serie bringen möchte, ist bei uns genau richtig.</strong>'],
          knoepfe: [{ text: 'Karriere-Möglichkeiten entdecken', seite: 'karriere' }],
          bild: { datei: 'karriere.jpg', text: 'Foto: Team / Arbeitsplatz', alt: 'Mitarbeiter von HK-Präzisionstechnik' }
        },
        {
          typ: 'split',
          anker: 'video',
          kicker: 'Unser Anspruch',
          h2: 'HK Präzisionstechnik: German Precision in Chinese Speed',
          absaetze: [
            'Bei HK Präzisionstechnik verbinden wir hohe Geschwindigkeit mit echter deutscher Ingenieurspräzision – German Precision in Chinese Speed.',
            'Wir steigen bewusst früh in Ihre Projekte ein, entwickeln Spannvorrichtungen, Öfen oder Diamantdrahtsägen parallel zu Ihrem Bauteil und reduzieren so Risiken wie Änderungsschleifen, Nacharbeit und verzögerte Serienstarts. Anfragen landen direkt im Kernteam aus Konstruktion und Anwendungstechnik, sodass Sie in wenigen Tagen eine klare Richtung erhalten – nicht erst nach endlosen Abstimmungen.',
            'Viele unserer Lösungen sind seit Jahrzehnten im Einsatz, weil wir Ihre Produktion von Anfang an mitdenken und auf Langlebigkeit statt Kompromisse setzen.'
          ],
          video: { id: 'unternehmen', titel: 'German Precision in Chinese Speed', unterzeile: GF }
        },
        { typ: 'hinweis', text: 'Wie im Miro-Board nicht im Menü: die eigene Seite [Schenk / Siebdruckmaschinen](seite:schenk). Ob sie zum Auftrag gehört, ist noch zu klären.' },
        CTA_START
      ]
    },

    /* ================================================================ WERKSTÜCK-SPANNTECHNIK (Board) */
    spanntechnik: {
      name: 'Werkstück-Spanntechnik',
      navInfo: 'für Fräszentren',
      title: 'Werkstück-Spanntechnik für Fräszentren | HK Präzisionstechnik',
      description: 'Spannvorrichtungen für Fräszentren – von der Rohteilberatung bis zur Serienvorrichtung. Simultanes Engineering, Turnkey und Funktionsintegration: schneller in Serie.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Werkstück-Spanntechnik für Fräszentren',
          h1: 'Schneller in Serie. Sicherer im Prozess.',
          lead: 'Von der Rohteilberatung über den Prototyp bis zur Serienvorrichtung begleiten wir den gesamten Weg Ihrer Produkte. Spanntechnik von HK reduziert Nebenzeiten, sorgt für reproduzierbare Präzision und beschleunigt den Serienstart. Das Ergebnis: mehr Prozesssicherheit, weniger Ausschuss, niedrigere Kosten.',
          aufruf: 'Jetzt unverbindlich beraten lassen.',
          knoepfe: [{ text: 'Infos anfordern', seite: 'kontakt', extra: '?bereich=spanntechnik' }, { text: 'Rohteil-Beratung anfordern', seite: 'kontakt', extra: '?bereich=rohteil', stil: 'rahmen' }],
          bild: { datei: 'hero-spanntechnik.jpg', text: 'Foto: Spannvorrichtung', alt: 'Spannvorrichtung von HK-Präzisionstechnik' }
        },
        LOGOS('Logo-Leiste laut Miro-Board – Kunden- bzw. Partnerlogos liefert HK.'),
        {
          typ: 'videoblock',
          kicker: 'Simultanes Engineering',
          h2: 'German Precision in Chinese Speed.',
          intro: 'Der typische Hauptfehler – und unsere Lösung: Werkstück und Spanntechnik entstehen parallel statt nacheinander.',
          video: { id: 'spanntechnik', titel: 'Simultanes Engineering', unterzeile: GF }
        },
        {
          typ: 'split',
          kicker: 'Turnkey',
          h2: 'Vom Rohteil bis zur laufenden Produktion',
          absaetze: [
            'Bei HK Präzisionstechnik verstehen wir Spanntechnik nicht als isolierte Komponente, sondern als <strong>zentrales Element einer kompletten Produktionslösung</strong>.',
            'Deshalb begleiten wir Sie nicht nur bis zur fertigen Vorrichtung – sondern <strong>durch den gesamten Prozess</strong>, vom Rohteil bis zur stabil laufenden Serie.',
            'Unser Turnkey-Ansatz umfasst:'
          ],
          liste: [
            '<strong>Rohteil- und Spannanalyse</strong> bereits in der frühen Entwicklungsphase',
            '<strong>Simultanes Engineering</strong> von Werkstück und Vorrichtung für maximale Prozessstabilität',
            '<strong>Konstruktion, Fertigung, Montage und Vermessung</strong> im eigenen Haus',
            '<strong>Vorabnahme bei uns</strong> und <strong>Endabnahme auf Ihrer Maschine</strong>',
            'und auf Wunsch: <strong>Begleitung, bis Ihre Produktion stabil läuft</strong>'
          ],
          schluss: ['Wir erkennen Abhängigkeiten früh, vermeiden Engpässe und sorgen dafür, dass Ihr gesamter Bearbeitungsprozess stabil, schnell und wirtschaftlich funktioniert.'],
          bild: { datei: 'turnkey.jpg', text: 'Foto: Fertigung / Montage', alt: 'Fertigung und Montage einer Spannvorrichtung' }
        },
        {
          typ: 'split',
          stein: true,
          umgekehrt: true,
          kicker: 'Referenzprojekte',
          h2: 'Spanntechnik für komplexe Fräsbauteile',
          absaetze: ['<strong>Spannvorrichtung für die Montage von Verbrennungsmotoren</strong>'],
          bild: { datei: 'referenz-verbrennungsmotoren.jpg', alt: 'Spannvorrichtungen von HK-Präzisionstechnik für die Montage von Verbrennungsmotoren', format: '785/467', unterschrift: 'Spannvorrichtung für die Montage von Verbrennungsmotoren' },
          hinweis: 'Laut Miro-Board ein Slider mit mehreren Referenzprojekten. Je Projekt fehlen noch: Kunde (ggf. anonymisiert), Kunden-Anforderungen, Lösung, Ergebnis. Weitere Projekte ergänzen.'
        },
        {
          typ: 'split',
          kicker: 'Funktionsintegration',
          h2: 'Weniger Komplexität & kürzere Produktionszeiten',
          absaetze: [
            'Je weniger Schritte ein Bauteil durchlaufen muss, desto stabiler, schneller und günstiger wird Ihr Produktionsprozess.',
            'Mit unserer Expertise in Sachen Funktionsintegration integrieren wir häufig mehrere Funktionsabläufe in eine einzige Vorrichtung. Hydraulische Bewegungen, Abläufe, Zentrierungen oder Spannsequenzen laufen automatisch mit – ohne Umspannen, ohne zusätzliche Vorrichtungen, ohne Nebenzeiten.',
            'Das Ergebnis:'
          ],
          liste: [
            '<strong>Weniger Vorrichtungen:</strong> weniger Komplexität und geringere Kosten',
            '<strong>Weniger Umspannvorgänge:</strong> kürzere Taktzeiten pro Werkstück',
            '<strong>Höhere Automatisierbarkeit:</strong> Die integrierten Abläufe vereinfachen Automatisierung und senken deren Kosten.'
          ],
          schluss: ['<strong>Die beste Spannvorrichtung ist die, die Sie nicht brauchen – weil ihre Funktionen bereits intelligent integriert sind.</strong>'],
          bild: { datei: 'funktionsintegration.jpg', text: 'Foto: Vorrichtung mit Hydraulik', alt: 'Spannvorrichtung mit integrierter Hydraulik' }
        },
        {
          typ: 'ablauf',
          stein: true,
          kicker: 'Simultanes Engineering',
          h2: 'Vom ersten Gespräch bis zur laufenden Serie',
          intro: 'Unser Prozess ist darauf ausgelegt, Werkstück und Spannvorrichtung so früh wie möglich zu synchronisieren – für maximale Geschwindigkeit, Stabilität und Präzision im Serienanlauf.',
          liste: [
            { titel: 'Erste Projektbesprechung', text: 'Gemeinsam klären wir die bereits bekannten Daten zu Werkstück, Produktionsanforderungen und gegebenen Rahmenbedingungen. Unsere Konstrukteure analysieren die Ausgangssituation und besprechen mit Ihnen die technischen Möglichkeiten.' },
            { titel: 'Simultanes Engineering (Werkstück + Spannvorrichtung)', text: 'Während Ihr Werkstück immer konkreter wird, entwickeln wir die passende Spanntechnik simultan dazu. Änderungen am Werkstück führen unmittelbar zu Anpassungen an der Spannvorrichtung. So vermeiden wir spätere Änderungsschleifen und bringen beide Komponenten optimal zusammen.' },
            { titel: 'Konstruktion der Spannvorrichtung, Fertigung & Montage', text: 'Auf Basis der finalen Rohteildaten erstellen wir die vollständige 3D-/CAD-Konstruktion. Alle Funktionsabläufe, Spannstellen und Schnittstellen zur Maschine werden detailliert ausgearbeitet. Die Vorrichtung wird in unserem Haus gefertigt, montiert und komplett getestet.' },
            { titel: 'Präzisionsvermessung & Vorabnahme', text: 'Auf unserer ZEISS 3D-Messmaschine wird die Vorrichtung vollvermessen und geprüft. Im Anschluss erfolgt die Vorabnahme bei uns vor Ort oder remote – inklusive Funktionsdurchläufen und Belastungstests.' },
            { titel: 'Endabnahme bei Ihnen', text: 'Die Vorrichtung wird auf Ihrer Maschine eingefahren und im realen Produktionsprozess geprüft. Nach erfolgreicher Endabnahme ist die Serienfähigkeit vollständig sichergestellt.' },
            { titel: 'Produktionsstart & Projektabschluss', text: 'Gemeinsames Abschlussmeeting, Dokumentation und Übergabe aller Unterlagen. Optional begleiten wir den Start der laufenden Produktion, um einen reibungslosen Serienanlauf sicherzustellen.' }
          ]
        },
        {
          typ: 'split',
          kicker: 'Langlebigkeit',
          h2: 'Spannvorrichtungen, die länger halten als Produktzyklen.',
          absaetze: [
            'Wenn eine Spannvorrichtung viele Jahre zuverlässig laufen soll, braucht es mehr als gute Konstruktion – es braucht ein Team, das dahintersteht.',
            'Wir sind seit 1993 in der Spanntechnik tätig. Heute arbeiten bei uns rund 30 Spezialisten, viele davon seit über 25 Jahren im Unternehmen. Die nächste Generation bilden wir selbst aus.',
            'In unserem Kompetenzzentrum für Spannvorrichtungen setzen wir auf standardisierte Bauteile und eine hohe Fertigungstiefe. Das sorgt für eine schnelle, zuverlässige Ersatzteilversorgung.',
            '<strong>Kurz gesagt: Ihre Vorrichtung bleibt lange im Einsatz – und wir bleiben lange an Ihrer Seite.</strong>'
          ],
          bild: { datei: 'team.jpg', text: 'Foto: Team', alt: 'Das Team von HK-Präzisionstechnik' }
        },
        {
          typ: 'split',
          stein: true,
          umgekehrt: true,
          anker: 'rohteilberatung',
          kicker: 'Unverbindliche Rohteilberatung',
          h2: 'Einschätzung von unseren Spezialisten',
          absaetze: ['Die größten Einsparpotenziale entstehen nicht erst in der Fertigung – sondern beim Rohteil selbst. Noch bevor das Bauteil final konstruiert ist, prüfen unsere Techniker:'],
          liste: [
            'ob das Rohteil spann- und fertigungsgerecht ausgelegt ist',
            'wo kleine Anpassungen große Wirkung haben',
            'wie spätere Werkzeugänderungen vermieden werden können',
            'und welche Variante später die stabilste Spannung ermöglicht'
          ],
          schluss: [
            'Diese frühe Beratung spart oft Wochen bis Monate, weil teure Guss- oder Schmiedeform-Änderungen gar nicht erst entstehen.',
            'Nutzen Sie jetzt die Expertise unserer Experten und fordern Sie eine unverbindliche und für Sie kostenfreie Beratung zu Ihrem Projekt an.'
          ],
          knoepfe: [{ text: 'Unverbindliche Beratung', seite: 'kontakt', extra: '?bereich=rohteil' }],
          bild: { datei: 'rohteil.jpg', text: 'Foto: Rohteil / Gussteil', alt: 'Rohteil vor der Bearbeitung' }
        },
        {
          typ: 'split',
          kicker: 'Download',
          h2: 'Die 10 größten Fehler bei Neuproduktanläufen auf Fräszentren',
          absaetze: [
            'Neuproduktanläufe klingen nach einem klar strukturierten Prozess – doch in der Realität passieren immer wieder dieselben kostspieligen Fehler.',
            'Genau diese Fehler haben wir in unserem Leitfaden transparent zusammengefasst. Sie erfahren unter anderem:'
          ],
          liste: [
            'warum viele Projekte durch sequentielle Abläufe unnötig ausgebremst werden',
            'wie späte Rohteiländerungen ganze Zeitpläne zerstören',
            'weshalb falsche Annahmen bei der Spanntechnik zu Instabilitäten und Nacharbeiten führen',
            'und welche Punkte vor jedem Projektstart zwingend geprüft werden sollten'
          ],
          schluss: ['Der Inhalt richtet sich bewusst nicht nur an Fertigungsleiter, sondern auch an Einkäufer und technische Projektleiter, die sicherstellen möchten, dass ein neuer Auftrag vom Start weg sauber aufgesetzt wird.'],
          knoepfe: [{ text: 'Leitfaden herunterladen', seite: 'kontakt', extra: '?bereich=spanntechnik' }],
          bild: { datei: 'leitfaden-cover.jpg', text: 'Titelbild Leitfaden', alt: 'Leitfaden: Die 10 größten Fehler bei Neuproduktanläufen auf Fräszentren', format: '3/4' },
          hinweis: 'Den Leitfaden (PDF) gibt es noch nicht – Inhalt bzw. Erstellung mit HK klären. Bis dahin führt der Button zum Kontaktformular.'
        },
        {
          typ: 'split',
          stein: true,
          umgekehrt: true,
          kicker: 'Kundenbeispiele',
          h2: 'Schneller in Serie dank Simultanem Engineering',
          absaetze: [
            'Ein Zulieferer der Wehrtechnik wollte ein hochpräzises Aluminium-Gehäuseteil fertigen und benötigte dafür eine passende Spannlösung.',
            'Schon beim ersten Entwurf erkannten wir, dass die Bauteilauslegung beim Fräsen in der angestrebten Geschwindigkeit zu starken Vibrationen geführt hätte. Die Engineering-Teams beider Unternehmen entwickelten daraufhin eine minimale konstruktive Anpassung, die eine vibrationsfreie Spannung ermöglichte.',
            'Dank der kleinen Änderungen kann das Bauteil in voller Geschwindigkeit, ohne Vibrationen und mit maximaler Präzision gefertigt werden. Die Spanntechnik läuft seit Jahren erfolgreich beim Kunden und sichert eine konstant hohe Produktivität.'
          ],
          bild: { datei: 'kundenbeispiel.jpg', text: 'Foto: Aluminium-Gehäuseteil', alt: 'Aluminium-Gehäuseteil in der Spannvorrichtung' },
          hinweis: 'Laut Miro-Board offen: weitere Fallstudien und Markengeschichte HK.'
        },
        CTA_START
      ]
    },

    /* ================================================================ THERMOPLAST-UMLUFTÖFEN (Board) */
    thermoplast: {
      name: 'Thermoplast-Umluftöfen',
      navInfo: 'Composite-Verarbeitung',
      title: 'Thermoplast-Umluftöfen Passat & Scirocco | HK Präzisionstechnik',
      description: 'Umluftöfen für faserverstärkte Thermoplaste ab 1,5 mm: gleichmäßige Durchwärmung bis in den Kern, 20–25-Sekunden-Taktzeiten, 50–60 % Energiebedarf vergleichbarer Infrarotöfen.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Thermoplast-Umluftöfen',
          h1: 'Schnell, präzise und recycelbar – die Zukunft der Composite-Verarbeitung.',
          lead: 'Die Thermoplast-Umluftöfen von HK Präzisionstechnik sind die optimale Lösung für Materialdicken ab 1,5 mm. Immer mehr Produzenten schätzen die hohe Produktivität, die präzise Durcherwärmung und setzen mit der Umstellung von Duroplasten auf recycelbare Thermoplaste ein Zeichen für gelebte Nachhaltigkeit.',
          aufruf: 'Jetzt unverbindlich beraten lassen.',
          knoepfe: [{ text: 'Infos anfordern', seite: 'kontakt', extra: '?bereich=thermoplast' }, { text: 'Möglichkeiten entdecken', seite: 'thermoplast', extra: '#systeme', stil: 'rahmen' }],
          bild: { datei: 'hero-thermoplast.jpg', text: 'Foto: Thermoplast-Umluftofen', alt: 'Thermoplast-Umluftofen von HK-Präzisionstechnik' }
        },
        LOGOS_FRAUNHOFER,
        {
          typ: 'split',
          kicker: 'Thermoplast statt Duroplast',
          h2: 'Schneller, nachhaltiger, günstiger.',
          absaetze: [
            'OEM-Vorgaben, EU-Regulierungen und steigende Taktanforderungen machen Thermoplast heute zum klaren Favoriten gegenüber Duroplast. Thermoplaste sind <strong>voll recycelbar</strong>, lassen sich einfach wieder aufschmelzen und zu neuen Bauteilen oder Platten verarbeiten – statt als teurer Sondermüll entsorgt zu werden.',
            'Auch in der Produktion überzeugt Thermoplast: Während Duroplastprozesse oft <strong>Minuten bis Stunden</strong> dauern, ermöglichen Thermoplaste <strong>Sekunden-Taktzeiten</strong> wie in der Blechfertigung. Das steigert die Produktivität deutlich und reduziert Prozesskosten.',
            'In Summe ist Thermoplast nicht nur nachhaltiger, sondern auch schneller, häufig wirtschaftlicher und zunehmend von OEMs gefordert – ein Werkstoff, der die Zukunft der Composite-Verarbeitung bestimmt.'
          ],
          bild: { datei: 'thermoplast-bauteil.jpg', text: 'Foto: Thermoplast-Bauteil', alt: 'Bauteil aus faserverstärktem Thermoplast' }
        },
        {
          typ: 'split',
          stein: true,
          umgekehrt: true,
          kicker: 'Infrarot vs. Umluft',
          h2: 'Was ist die bessere Wahl für Ihre Anwendung?',
          absaetze: [
            'Infrarot erwärmt Bauteile nur an der Oberfläche und funktioniert zuverlässig nur bis etwa <strong>1,5 mm Materialstärke</strong>. Für dickere oder komplexere Thermoplaste entstehen ungleichmäßige Temperaturen und Qualitätsrisiken.',
            'Umluft dagegen durchwärmt das Bauteil <strong>gleichmäßig bis in den Kern</strong> – selbst bei größeren Dicken und anspruchsvollen Geometrien. Dadurch sind <strong>20–25-Sekunden-Taktzeiten</strong> möglich, bei gleichzeitig stabiler Qualität.',
            'Auch wirtschaftlich punktet Umluft deutlich: Der Energieverbrauch liegt bei nur <strong>50–60 %</strong> vergleichbarer Infrarotöfen.',
            '<strong>Gerne berechnen wir Ihre individuelle Total-Cost-of-Ownership-Ersparnis.</strong>'
          ],
          knoepfe: [{ text: 'Unverbindliche Beratung', seite: 'kontakt', extra: '?bereich=thermoplast' }],
          bild: { datei: 'infrarot-vs-umluft.jpg', text: 'Grafik: Infrarot vs. Umluft', alt: 'Vergleich der Durchwärmung: Infrarot und Umluft', unterschrift: IR_UMLUFT }
        },
        {
          typ: 'karten',
          anker: 'systeme',
          spalten: 2,
          kicker: 'Passat & Scirocco',
          h2: 'Zwei Systeme. Ein Ziel: maximale Thermoplast-Performance.',
          liste: [PASSAT, SCIROCCO]
        },
        {
          typ: 'split',
          stein: true,
          kicker: 'Anwendungen',
          h2: 'Passt ein Umluftofen auch zu Ihrer Anwendung?',
          absaetze: ['Thermoplast-Umluftöfen kommen überall dort zum Einsatz, wo faserverstärkte Thermoplaste präzise und zuverlässig durchwärmt werden müssen – insbesondere:'],
          liste: [
            'Glasfaser- und Kohlefaser-verstärkte Thermoplaste',
            '<strong>Akkudeckel</strong> und Batterieabdeckungen',
            'Hitzeschutz- und Abschirmtechnik',
            'Strukturbauteile im Automotive- und Aerospace-Bereich',
            'sowie zahlreiche weitere thermoplastische Composite-Anwendungen'
          ],
          schluss: ['Das sind jedoch nur einige Beispiele.', '<strong>Lassen Sie uns über Ihren konkreten Anwendungsfall sprechen und testen, ob ein Umluftofen für Ihre Produktion ebenfalls eine Option ist.</strong>'],
          knoepfe: [{ text: 'Unverbindliche Beratung', seite: 'kontakt', extra: '?bereich=thermoplast' }],
          bild: { datei: 'anwendung-thermoplast.jpg', text: 'Foto: Anwendung', alt: 'Thermoplast-Bauteile aus dem Umluftofen', unterschrift: IR_UMLUFT }
        },
        {
          typ: 'karten',
          spalten: 3,
          kicker: 'Sicherheit',
          h2: 'Anlagenschutz-Systeme für höchste Produktionssicherheit',
          liste: [
            { bild: { datei: 'loeschanlage.jpg', text: 'Foto: Löschanlage', alt: 'Geprüfte Löschanlage', format: '16/10' }, titel: 'Geprüfte Löschanlagen', text: 'Unsere Öfen verarbeiten brennbare Werkstoffe – deshalb sind alle Systeme auf Wunsch mit geprüften Löschanlagen ausgestattet, die im Brandfall sofort reagieren.' },
            { bild: { datei: 'gassensorik.jpg', text: 'Foto: Gassensorik', alt: 'Gassensorik im Ofen', format: '16/10' }, titel: 'Gassensorik', text: 'Unsere Gassensorik erkennt bereits die Entstehung explosiver Gase und warnt frühzeitig, bevor kritische Konzentrationen überhaupt erreicht werden.' },
            { bild: { datei: 'frischluft.jpg', text: 'Foto: Frischluft-Messung', alt: 'Sensor zur Frischluft-Messung', format: '16/10' }, titel: 'Frischluft-Messung mit Notabschaltung', text: 'Ein Sensor überwacht kontinuierlich die Frischluftmenge. Bevor entzündliche Werte erreicht werden, schaltet das System automatisch ab.' }
          ]
        },
        BERATUNG_OFEN('thermoplast'),
        {
          typ: 'ablauf',
          stein: true,
          kicker: 'In drei Schritten',
          h2: 'So bringen wir Ihre Thermoplast-Produktion in Serie',
          intro: 'Vom ersten Materialtest bis zur laufenden Produktion begleiten wir Sie mit einem klaren, transparenten Prozess, der Unsicherheiten eliminiert und Planungssicherheit schafft. Unser Ziel: Sie so schnell, präzise und zuverlässig wie möglich in die Serienfertigung zu bringen.',
          liste: [
            { titel: 'Beratung & Materialanalyse', text: 'Am Anfang steht immer das Verständnis für Ihren konkreten Anwendungsfall. Gemeinsam klären wir Materialdaten, Bauteilgeometrie, Ziel-Taktzeiten und Qualitätsanforderungen.' },
            { titel: 'Messungen im Technikum & Pilotierung der Muster', text: 'Nun simulieren wir reale Produktionsbedingungen. Auf Wunsch führen wir die Pilotierung Ihrer Musterteile in einem unserer Partnerinstitute durch. So können komplette Produktionsszenarien getestet werden, bevor Sie investieren.' },
            { titel: 'Inbetriebnahme & Wartung', text: 'Unsere Experten stellen sicher, dass die Anlage optimal parametriert ist und Ihr Team sofort produktiv arbeiten kann. Gerne warten wir Ihr Gerät oder befähigen Ihre Mitarbeiter, die Wartung eigenständig durchzuführen.' }
          ],
          hinweis: SOCIAL_PROOF
        },
        CTA_START
      ]
    },

    /* ================================================================ UMLUFTÖFEN FÜR SPEZIALANWENDUNGEN (Board) */
    spezial: {
      name: 'Umluftöfen für Spezialanwendungen',
      navInfo: 'Präzise Temperaturführung',
      title: 'Umluftöfen für Spezialanwendungen | HK Präzisionstechnik',
      description: 'Umluftöfen für Wärmeprozesse mit engen Temperaturfenstern: Tempern, Dichtungstempern, Silikon und Polyurethan, Duroplast-Komponenten wie Wasserstoff-Tanks.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Umluftöfen für Spezialanwendungen',
          h1: 'Wenn präzise Temperaturführung den Unterschied macht.',
          lead: 'Die Umluftöfen von HK Präzisionstechnik sichern eine homogene, exakt steuerbare Temperaturverteilung – überall dort, wo sensible Materialien, Bauteile oder Prozesse keine Schwankungen verzeihen. So erreichen Sie reproduzierbare Ergebnisse, stabile Qualität und hohe Anlagenverfügbarkeit in verschiedensten Anwendungen.',
          aufruf: 'Jetzt unverbindlich beraten lassen.',
          knoepfe: [{ text: 'Infos anfordern', seite: 'kontakt', extra: '?bereich=spezial' }, { text: 'Möglichkeiten entdecken', seite: 'spezial', extra: '#systeme', stil: 'rahmen' }],
          bild: { datei: 'hero-spezial.jpg', text: 'Foto: Umluftofen', alt: 'Umluftofen für Spezialanwendungen' }
        },
        LOGOS_FRAUNHOFER,
        {
          typ: 'split',
          kicker: 'Präzise Temperaturführung',
          h2: 'Stabiler, reproduzierbarer, wirtschaftlicher.',
          absaetze: [
            'Steigende Qualitätsanforderungen, enge Toleranzen und umfassende Dokumentationspflichten machen eine exakt gesteuerte Temperaturführung heute zum entscheidenden Faktor in vielen Wärmeprozessen. Unsere Umluftöfen sorgen für eine homogene Temperaturverteilung im gesamten Bauteilvolumen – selbst bei anspruchsvollen Geometrien – und schaffen damit die Grundlage für reproduzierbare Ergebnisse.',
            'Im laufenden Betrieb bedeutet das: definierte Aufheiz- und Haltezeiten, stabile Prozesse und konstante Taktzeiten statt schwankender Temperaturen und unkontrollierbarer Streuung. Ausschuss und Nacharbeit sinken, die Produktivität steigt.',
            'So wird präzise Temperaturführung vom potenziellen Risiko zur verlässlichen Stellgröße – und Ihr Wärmeprozess zu einem planbaren, wirtschaftlichen Baustein in der Produktion.'
          ],
          bild: { datei: 'temperaturfuehrung.jpg', text: 'Foto: Temperaturkurve / Steuerung', alt: 'Steuerung eines Umluftofens mit Temperaturkurve' }
        },
        {
          typ: 'karten',
          anker: 'systeme',
          stein: true,
          spalten: 2,
          kicker: 'Passat & Scirocco',
          h2: 'Zwei Systeme. Ein Ziel: maximale Performance bei Wärmeprozessen.',
          liste: [PASSAT, SCIROCCO]
        },
        {
          typ: 'split',
          umgekehrt: true,
          kicker: 'Anwendungen',
          h2: 'Passt ein Umluftofen auch zu Ihrer Anwendung?',
          absaetze: ['Umluftöfen kommen überall dort zum Einsatz, wo Bauteile präzise und zuverlässig durchwärmt werden müssen – insbesondere bei:'],
          liste: [
            'Thermoplast-Bauteilen',
            'Duroplast-Komponenten wie Wasserstoff-Tanks',
            'Bauteil-Erwärmung vor dem Umspritzen',
            'Temper-Prozessen',
            'Dichtungstempern',
            'der Verarbeitung von Silikon und Polyurethan'
          ],
          schluss: ['Das sind jedoch nur einige Beispiele.', '<strong>Lassen Sie uns über Ihren konkreten Anwendungsfall sprechen und testen, ob ein Umluftofen für Ihre Produktion ebenfalls die passende Lösung ist.</strong>'],
          knoepfe: [{ text: 'Unverbindliche Beratung', seite: 'kontakt', extra: '?bereich=spezial' }],
          bild: { datei: 'anwendung-spezial.jpg', text: 'Foto: Anwendung', alt: 'Bauteile aus dem Umluftofen', unterschrift: IR_UMLUFT },
          hinweis: 'Die Ofen-Recherche zum Silikonverguss (Leitlinien S. 5–7) gehört hierher – „Verarbeitung von Silikon und Polyurethan“ steht schon in der Liste. Ob dafür ein eigener Abschnitt kommt, wird mit HK besprochen.'
        },
        BERATUNG_OFEN('spezial'),
        {
          typ: 'ablauf',
          stein: true,
          kicker: 'In drei Schritten',
          h2: 'So bringen wir Ihren Wärmeprozess in die Produktion',
          intro: 'Vom ersten Materialtest bis zur laufenden Fertigung begleiten wir Sie mit einem klaren, transparenten Prozess, der Unsicherheiten eliminiert und Planbarkeit schafft. Unser Ziel: Sie so schnell, präzise und zuverlässig wie möglich in eine stabile Serienproduktion zu führen.',
          liste: [
            { titel: 'Beratung & Materialanalyse', text: 'Am Anfang steht das Verständnis für Ihren konkreten Anwendungsfall. Gemeinsam klären wir Ihre Anforderungen und schaffen damit die Basis für einen optimal ausgelegten Wärmeprozess.' },
            { titel: 'Messungen im Technikum & Pilotierung der Muster', text: 'Nun simulieren wir reale Produktionsbedingungen. Auf Wunsch führen wir die Pilotierung Ihrer Musterteile in einem unserer Partnerinstitute durch. So können komplette Produktionsszenarien getestet werden, bevor Sie investieren.' },
            { titel: 'Inbetriebnahme & Wartung', text: 'Unsere Experten stellen sicher, dass die Anlage optimal parametriert ist und Ihr Team sofort produktiv arbeiten kann. Gerne warten wir Ihr Gerät oder befähigen Ihre Mitarbeiter, die Wartung eigenständig durchzuführen.' }
          ],
          hinweis: SOCIAL_PROOF
        },
        CTA_START
      ]
    },

    /* ================================================================ DIAMANTDRAHTSÄGEN (Board) */
    saegen: {
      name: 'Diamantdrahtsägen',
      navInfo: 'Präzision im Mikrometerbereich',
      title: 'Diamantdrahtsägen Made in Germany | HK Präzisionstechnik',
      description: 'Diamantdrahtsägen von Europas einzigem Industrieanbieter: minimaler Kerf, Loop-Line®-Technologie, Versuchsschnitte im eigenen Technikum. Für Silizium, Keramik, Glas und mehr.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Diamantdrahtsägen Made in Germany',
          h1: 'Diamantdrahtsägen für Präzision im Mikrometerbereich.',
          lead: 'Für Materialien, bei denen jeder Schnitt zählt: langlebig, effizient und entwickelt für anspruchsvollste industrielle Anwendungen. Von Europas einzigem Hersteller für die Industrie.',
          aufruf: 'Lassen Sie uns über Ihren Anwendungsfall sprechen.',
          knoepfe: [{ text: 'Unverbindliche Beratung', seite: 'kontakt', extra: '?bereich=saegen' }, { text: 'Geräte entdecken', seite: 'saegen', extra: '#geraete', stil: 'rahmen' }],
          bild: { datei: 'hero-saegen.jpg', text: 'Foto: Diamantdrahtsäge', alt: 'Diamantdrahtsäge von HK-Präzisionstechnik' }
        },
        {
          typ: 'karten',
          variante: 'vorteile',
          kicker: 'Vorteile',
          h2: 'Diamantdrahtsägen: Weil jeder Mikrometer Material zählt',
          intro: 'Diamantdrahtsägen entfalten ihre Stärken überall dort, wo Materialien teuer, spröde oder hochpräzise zu bearbeiten sind. Im Vergleich zu Band- oder Slurry-Sägen bietet Diamantdraht klare technische und wirtschaftliche Vorteile.',
          liste: [
            { icon: 'weniger', titel: 'Minimaler Materialverlust', text: 'Der extrem dünne Draht erzeugt einen minimalen Kerf – ideal für teure oder begrenzt verfügbare Materialien wie Silizium, Kristalle, Keramiken und Edelsteine.' },
            { icon: 'thermo', titel: 'Geringe Kräfte & wenig Wärme', text: 'Fragile, spröde oder hochpräzise Werkstoffe werden materialschonend getrennt – ohne Risse, Spannungen oder thermische Schädigungen.' },
            { icon: 'ziel', titel: 'Präzise, glatte Schnittflächen', text: 'Die feine Diamantkörnung erzeugt sehr saubere Oberflächen und damit weniger Toleranzabweichungen und stabile Folgeprozesse.' },
            { icon: 'blitz', titel: 'Hohe Schnittgeschwindigkeiten', text: 'Diamantdraht ermöglicht schnelle Trennprozesse, ohne die Präzision zu beeinträchtigen – ideal für Labor, Pilotlinien und industrielle Serienumgebungen.' },
            { icon: 'saege', titel: 'Multiwire für hohe Produktivität', text: 'Mehrere Drähte schneiden parallel – deutlich mehr Ausbringung pro Maschine bei gleichbleibend hoher Schnittqualität.' },
            { icon: 'tropfen', titel: 'Wirtschaftlicher Wasserprozess', text: 'Reines Wasser statt Slurry: weniger Verbrauchsmaterial, geringerer Energiebedarf, einfachere Handhabung und ein sauberer, umweltfreundlicher Prozess.' }
          ]
        },
        {
          typ: 'karten',
          stein: true,
          spalten: 4,
          kicker: 'Werkstoffe',
          h2: 'Diese Werkstoffe schneiden wir sicher und präzise',
          liste: [
            ['Silizium & Halbleiterwerkstoffe', 'silizium'], ['Technische Keramiken & Magnete', 'keramik'], ['Kristalle & optische Materialien', 'kristalle'], ['Edelsteine & Präzisionssteine', 'edelsteine'],
            ['Verbundwerkstoffe & Hybridmaterialien', 'verbund'], ['Metalle & Hartmetalle', 'metalle'], ['Glas, Glaskeramik & anorganische Materialien', 'glas'], ['Graphit', 'graphit']
          ].map(([t, d]) => ({ bild: { datei: 'werkstoff-' + d + '.jpg', text: 'Nahaufnahme', alt: t, format: '4/3' }, titel: t })),
          zusatz: 'Eine umfangreiche Liste einer Vielzahl geeigneter Materialien finden Sie hier: Materialübersicht für Diamantdrahtsägen.',
          hinweis: 'Die Materialübersicht fehlt noch – laut Miro-Board als Google-Workspace-Dokument oder alternativ als Liste zum Aufklappen. Für die Kacheln sind Nahaufnahmen der Materialien vorgesehen.'
        },
        {
          typ: 'split',
          anker: 'geraete',
          kicker: 'Geräte',
          h2: 'Diamantdrahtsägen von Europas einzigem Industrieanbieter',
          absaetze: ['Standardlösungen, wo möglich – Sondermaschinenbau, wo nötig.'],
          bild: { datei: 'geraete.jpg', text: 'Foto: Gerätepalette', alt: 'Diamantdrahtsägen von HK-Präzisionstechnik', format: '16/10' },
          hinweis: 'Laut Miro-Board: „Konsolidierte Auswahl + Sondermaschinenbau“. Modellübersicht mit Bildern und Kerndaten fehlt noch.'
        },
        {
          typ: 'split',
          stein: true,
          umgekehrt: true,
          anker: 'loop-line',
          kicker: 'Loop-Line® Technologie',
          h2: 'Unsere Endlosschlaufe macht den Unterschied',
          absaetze: ['Das <strong>Loop-Line® System</strong> arbeitet mit einem endlosen, umlaufenden Diamantdraht, der gegenüber herkömmlichen Systemen mehrere Vorteile bietet:'],
          liste: [
            '<strong>Konstant spannungsstabiler Drahtlauf:</strong> weniger Drahtbrüche, gleichmäßiger Schnitt.',
            '<strong>Effizientere Kraftübertragung:</strong> Der Draht verschleißt langsamer und arbeitet gleichmäßiger.',
            '<strong>Präzise Schnittbewegung:</strong> perfekt für Mikrometer-Bereiche und anspruchsvolle Materialien.',
            '<strong>Geringerer thermischer Einfluss:</strong> Der umlaufende Draht transportiert Wärme schneller ab – ideal für spröde und wärmeempfindliche Werkstoffe.',
            '<strong>Sauberer Prozess mit Wasser:</strong> keine Slurry-Kontamination, weniger Verschmutzung, einfachere Reinigung.'
          ],
          bild: { datei: 'loop-line.jpg', text: 'Foto: Loop-Line®', alt: 'Loop-Line® Endlosdraht' }
        },
        {
          typ: 'split',
          kicker: 'Ihre Anwendung',
          h2: 'Eignen sich Diamantdrahtsägen auch für Ihre Anwendung?',
          absaetze: [
            'Ob Ihre Werkstoffe, Geometrien oder Prozessanforderungen für den Einsatz von Diamantdraht in Frage kommen, lässt sich am zuverlässigsten im direkten Austausch klären.',
            'In einer persönlichen Beratung prüfen unsere Experten gemeinsam mit Ihnen, ob unsere Diamantdrahtsägen für Ihren konkreten Einsatzzweck geeignet sind.',
            'Für eine verlässliche Entscheidungsgrundlage bieten wir zudem Versuchsschnitte an: Diese führen wir in unserem eigenen Technikum durch oder vermitteln den Kontakt zu Forschungsinstituten, welche unsere Geräte im Einsatz haben.'
          ],
          schluss: ['<strong>Lassen Sie uns über Ihren Anwendungsfall sprechen.</strong>'],
          knoepfe: [{ text: 'Anwendungsfall besprechen', seite: 'kontakt', extra: '?bereich=saegen' }],
          bild: { datei: 'versuchsschnitt.jpg', text: 'Foto: Versuchsschnitt', alt: 'Versuchsschnitt im Technikum' }
        },
        {
          typ: 'ablauf',
          stein: true,
          kicker: 'Unser Ansatz',
          h2: 'Engineering statt Maschinenverkauf',
          intro: 'Bei Diamantdraht ist nicht die Maschine allein entscheidend, sondern das Zusammenspiel aus Material, Draht, Parametern und Prozessumgebung. Genau hier beginnt unsere Arbeit als Engineering-Partner, der Sie von der Idee bis zur produktionsreifen Lösung begleitet.',
          liste: [
            { titel: 'Beratung zu Material & Prozess', text: 'Wir analysieren gemeinsam, welche Anforderungen Ihr Werkstoff stellt und wie der optimale Trennprozess aussehen kann.' },
            { titel: 'Versuchsschnitte im Technikum & Ermittlung der optimalen Drahtparameter', text: 'Wir testen reale Komponenten, um Schnittqualität, Kerf, Oberfläche und Stabilität belastbar zu bewerten. Damit können wir Drahtstärke, Drahtart, Korn, Geschwindigkeit, Zugkraft und Kühlung individuell festlegen.' },
            { titel: 'Integration in bestehende Produktionsumgebungen', text: 'Von der Automatisierung bis zur Medienanbindung: Wir sorgen dafür, dass die Säge nicht nur passt, sondern funktioniert. Inklusive Materialhandling, Spannkonzept, Kühlmedium, Abluftführung und Schnittstrategie.' }
          ]
        },
        {
          typ: 'karten',
          variante: 'vorteile',
          spalten: 4,
          kicker: 'Deshalb HK',
          h2: 'Deshalb Diamantdrahtsägen von HK Präzisionstechnik',
          liste: [
            { icon: 'check', titel: 'Einziger Industrie-Hersteller in Europa', text: 'Diamantdrahtsägen in Industriegröße gibt es in Europa nur von uns.' },
            { icon: 'check', titel: 'Engineering-Kompetenz inklusive', text: 'Von der Prozessentwicklung bis zum Service – alles aus einer Hand.' },
            { icon: 'check', titel: 'Hohe Fertigungstiefe & direkter Service', text: 'Eigene Fertigung sorgt für schnelle Lieferzeiten & Support – für einen dauerhaft stabilen Betrieb.' },
            { icon: 'check', titel: 'Sondermaschinenbau möglich', text: 'Standardlösungen, wo möglich, Sondermaschinenbau, wo nötig.' }
          ],
          hinweis: 'Laut Miro-Board offen: Testimonials und Markengeschichte HK.'
        },
        CTA_START
      ]
    },

    /* ================================================================ ÜBER UNS (kein Wireframe – aus Board-Texten) */
    ueberuns: {
      name: 'Über uns',
      title: 'Über uns – HK Präzisionstechnik in Oberndorf am Neckar',
      description: 'Seit 1993 in der Spanntechnik, rund 30 Spezialisten, viele seit über 25 Jahren an Bord. German Precision in Chinese Speed als tägliches Arbeitsprinzip.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Über uns',
          h1: 'Wir denken Ihre Produktion von Anfang an mit.',
          lead: 'Unsere Kunden bewegen sich in Märkten, in denen Geschwindigkeit längst Grundvoraussetzung geworden ist. Gleichzeitig brauchen sie absolute Prozesssicherheit, langlebige Vorrichtungen und reproduzierbare Qualität. Genau hier setzen wir an: mit einem Anspruch, der beides verbindet – German Precision in Chinese Speed.',
          knoepfe: [{ text: 'Jetzt beraten lassen', seite: 'kontakt' }],
          video: { id: 'unternehmen', titel: 'German Precision in Chinese Speed', unterzeile: GF },
          hinweis: 'Für „Über uns“ gibt es im Miro-Board kein Wireframe (nur „ggf. Über uns Seite“). Die Seite ist aus Texten des Boards zusammengestellt.'
        },
        {
          typ: 'fakten',
          liste: [
            { wert: 'Seit 1993', text: 'in der Spanntechnik tätig' },
            { wert: 'Rund 30', text: 'Spezialisten im Team' },
            { wert: '25+ Jahre', text: 'sind viele Kollegen schon bei uns' },
            { wert: 'Eigene Ausbildung', text: 'Die nächste Generation bilden wir selbst aus' }
          ]
        },
        {
          typ: 'schritte',
          kicker: 'So arbeiten wir',
          h2: 'Dass wir schnell sind, hat System.',
          liste: [
            { titel: 'Früh im Projekt', text: 'Statt zu warten, bis jedes Detail fertig definiert ist, steigen wir bewusst früh in Ihre Projekte ein und entwickeln Spannwerkzeuge, Öfen oder Diamantdrahtsägen parallel zu Ihrem Bauteil oder Prozess.' },
            { titel: 'Direkt beim Kernteam', text: 'Neue Anfragen wandern bei uns nicht tagelang durch Abteilungen, sondern landen direkt bei einem verantwortlichen Kernteam aus Konstruktion und Anwendungstechnik – so erhalten Sie innerhalb weniger Tage eine belastbare Richtung.' },
            { titel: 'Zusage heißt Start', text: 'Wenn Sie uns den Auftrag zusagen, legen wir los. Wir warten nicht darauf, dass jede Vertragsklausel bis ins letzte Detail ausverhandelt ist, sondern starten mit der Entwicklung, damit Ihr Projekt Fahrt aufnimmt.' }
          ]
        },
        {
          typ: 'zitat',
          sr: 'Stefan Kruck über langjährige Kunden',
          text: 'Wenn jemand nach einer Vorrichtung fragt, die vor 20 Jahren geliefert wurde, können wir oft genauer sagen, in welchem Werk und in welcher Linie sie heute noch läuft, als die aktuelle Mannschaft vor Ort.',
          name: 'Stefan Kruck',
          rolle: 'Geschäftsführer, HK Präzisionstechnik',
          nachsatz: 'Diese Vertrautheit entsteht nicht durch Papier und Prozesse, sondern durch echte Zusammenarbeit und ein tiefes Verständnis für die Produktion unserer Kunden.'
        },
        {
          typ: 'split',
          kicker: 'Unser Team',
          h2: 'Lösungen, die den Produktlebenszyklus weit überdauern.',
          absaetze: [
            'Wir sind seit 1993 in der Spanntechnik tätig. Heute arbeiten bei uns rund 30 Spezialisten, viele davon seit über 25 Jahren im Unternehmen. Die nächste Generation bilden wir selbst aus.',
            'German Precision in Chinese Speed bedeutet für uns: Wir denken Ihre Produktion von Anfang an mit, verkürzen Ihre Time-to-Market und liefern Lösungen, die den Produktlebenszyklus weit überdauern.'
          ],
          bild: { datei: 'team.jpg', text: 'Foto: Team', alt: 'Das Team von HK-Präzisionstechnik' },
          hinweis: 'Markengeschichte HK ist im Board mehrfach vorgesehen – der Text dazu fehlt noch.'
        },
        {
          typ: 'split',
          stein: true,
          kicker: 'Standort',
          h2: 'Oberndorf am Neckar.',
          absaetze: ['Hier entwickeln, fertigen und vermessen wir – und von hier aus betreuen wir unsere Kunden. Arbeiten Sie mit uns? Alles zur [Karriere bei HK](seite:karriere).'],
          kanaele: true
        },
        CTA_START
      ]
    },

    /* ================================================================ KARRIERE (kein Wireframe – Board-Text + Video-Skript) */
    karriere: {
      name: 'Karriere',
      title: 'Karriere bei HK Präzisionstechnik | Jobs in Oberndorf am Neckar',
      description: 'Ihre Karriere bei HK Präzisionstechnik: Konstruktion, Fertigung, Projektmanagement oder Ausbildung – kurze Entscheidungswege, offene Türen, moderne Technologien.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Karriere',
          h1: 'Ihre Karriere bei HK Präzisionstechnik',
          lead: 'Bei HK Präzisionstechnik arbeiten Sie in einem Team, das Geschwindigkeit, Präzision und echtes Ingenieurhandwerk miteinander verbindet.',
          knoepfe: [{ text: 'Zu den offenen Stellen', href: KARRIERE_URL }],
          video: { id: 'karriere', titel: 'Stefan Kruck über die Arbeit bei HK', unterzeile: GF },
          hinweis: 'Kein Wireframe im Board. Für das Video liegen zwei Sprechertexte vor (90 Sekunden und 2–3 Minuten). Der Button führt zur separaten Karriere-Landingpage.'
        },
        {
          typ: 'split',
          kicker: 'Was Sie erwartet',
          h2: 'Projekte, bei denen Sie sehen, was Sie bewegen.',
          absaetze: [
            'Wir entwickeln Spanntechnik, Thermoplast-Umluftöfen und Sondermaschinen, die bei führenden Unternehmen seit Jahrzehnten im Einsatz sind – und das gelingt nur, weil bei uns jeder Mitarbeiter Verantwortung übernimmt, Ideen einbringt und direkt an Lösungen mitarbeitet.',
            'Bei uns erwarten Sie kurze Entscheidungswege, offene Türen, moderne Technologien und Projekte, bei denen Sie wirklich sehen, was Sie bewegen. Ob in der:'
          ],
          liste: ['Konstruktion', 'Fertigung', 'Projektmanagement', 'Ausbildung'],
          schluss: ['<strong>Wer Dinge schneller, smarter und nachhaltiger in Serie bringen möchte, ist bei uns genau richtig.</strong>'],
          bild: { datei: 'karriere.jpg', text: 'Foto: Team / Arbeitsplatz', alt: 'Mitarbeiter von HK-Präzisionstechnik' }
        },
        {
          typ: 'zitat',
          sr: 'Stefan Kruck über die Mitarbeiter',
          text: 'Der Schlüssel dazu sind unsere Mitarbeiter. Sie arbeiten technisch sauber, übernehmen Verantwortung und treffen Entscheidungen auch dann, wenn ich nicht im Haus bin.',
          name: 'Stefan Kruck',
          rolle: 'Geschäftsführer, HK Präzisionstechnik',
          nachsatz: 'Anfragen landen direkt bei denjenigen, die fachlich entscheiden können – so entstehen schnell konkrete Vorschläge, statt dass Kunden wochenlang auf einen ersten Zwischenstand warten.'
        },
        {
          typ: 'cta',
          h2: 'Passt das zu Ihrem Qualitätsanspruch und Ihrer Arbeitshaltung?',
          text: 'Dann freue ich mich, wenn Sie sich auf eine unserer ausgeschriebenen Stellen bewerben. Vielleicht dürfen wir Sie schon bald in unserem Team begrüßen.',
          signatur: GF,
          knoepfe: [{ text: 'Zu den offenen Stellen', href: KARRIERE_URL }]
        }
      ]
    },

    /* ================================================================ KONTAKT / ANFRAGE-TOOL */
    kontakt: {
      name: 'Kontakt',
      title: 'Kontakt & unverbindliche Beratung | HK Präzisionstechnik',
      description: 'Sprechen wir über Ihre Anwendung: Anfragen landen direkt im Kernteam aus Konstruktion und Anwendungstechnik – in wenigen Tagen erhalten Sie eine klare Richtung.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Kontakt',
          h1: 'Sprechen wir über Ihre Anwendung.',
          lead: 'Schildern Sie uns Ihr Projekt in wenigen Schritten. Anfragen landen direkt im Kernteam aus Konstruktion und Anwendungstechnik, sodass Sie in wenigen Tagen eine klare Richtung erhalten – nicht erst nach endlosen Abstimmungen.'
        },
        { typ: 'anfrage' }
      ]
    },

    /* ================================================================ IMPRESSUM */
    impressum: {
      name: 'Impressum',
      title: 'Impressum | HK Präzisionstechnik',
      description: 'Impressum der HK-Präzisionstechnik GmbH, Neckarstraße 1, 78727 Oberndorf am Neckar.',
      abschnitte: [
        { typ: 'kopf', h1: 'Impressum' },
        {
          typ: 'prosa',
          hinweis: 'Angaben aus der E-Mail-Signatur übernommen – die Signatur war nach „Geschäftsführer:“ abgeschnitten. Bitte vollständige Angaben von HK bestätigen lassen.',
          html: `
<h2>Angaben gemäß § 5 DDG</h2>
<p>HK-Präzisionstechnik GmbH<br>Neckarstraße 1<br>78727 Oberndorf am Neckar</p>
<h2>Vertreten durch</h2>
<p>Stefan Kruck, Geschäftsführender Gesellschafter</p>
<h2>Kontakt</h2>
<p>Telefon: {TEL}<br>Fax: {FAX}<br>E-Mail: {MAIL}</p>
<h2>Registereintrag</h2>
<p>Registergericht: Amtsgericht Stuttgart<br>Registernummer: HRB 480751</p>
<h2>Umsatzsteuer-ID</h2>
<p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE 811 567 679</p>`
        }
      ]
    },

    /* ================================================================ DATENSCHUTZ */
    datenschutz: {
      name: 'Datenschutz',
      title: 'Datenschutzerklärung | HK Präzisionstechnik',
      description: 'Datenschutzerklärung der HK-Präzisionstechnik GmbH: welche Daten diese Website verarbeitet und welche Rechte Sie haben.',
      abschnitte: [
        { typ: 'kopf', h1: 'Datenschutzerklärung' },
        {
          typ: 'prosa',
          hinweis: 'Der rechtsverbindliche Text kommt von HK bzw. dem Datenschutzbeauftragten. Unten steht, was diese Website technisch verarbeitet – genau das muss die Erklärung abdecken.',
          html: `
<h2>Verantwortlicher</h2>
<p>HK-Präzisionstechnik GmbH, Neckarstraße 1, 78727 Oberndorf am Neckar, Telefon {TEL}, E-Mail {MAIL}</p>
<h2>Was diese Website verarbeitet</h2>
<ul>
<li><strong>Hosting / Server-Logfiles:</strong> beim Aufruf übermittelte Zugriffsdaten (IP-Adresse, Zeitpunkt, Browser).</li>
<li><strong>Anfrage-Tool:</strong> Firma, Name, E-Mail, optional Telefon und Projektangaben – zur Bearbeitung Ihrer Anfrage.</li>
<li><strong>Webanalyse:</strong> Matomo ohne Cookies (empfohlen) oder Google Analytics (dann mit Einwilligungsbanner).</li>
<li><strong>Videos:</strong> werden erst nach Klick geladen; vorher besteht keine Verbindung zu YouTube.</li>
<li><strong>Schriften:</strong> lokal gehostet – keine Verbindung zu Google Fonts.</li>
<li><strong>Karten:</strong> Google Maps nur als Link, nicht eingebettet.</li>
</ul>
<h2>Ihre Rechte</h2>
<p>Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch sowie Beschwerde bei einer Aufsichtsbehörde.</p>`
        }
      ]
    },

    /* ================================================================ SCHENK / SIEBDRUCKMASCHINEN (Board – eigene Seite, nicht im HK-Menü) */
    schenk: {
      name: 'Schenk Siebdruckmaschinen',
      title: 'Schenk Siebdruckmaschinen Made in Germany – Beetle, Spider, Octopus',
      description: 'Siebdruckmaschinen von Schenk, dem Erfinder des Karussell-Siebdrucks: Präzision bis 0,025 mm, bis 18 Farben, 15–25 Jahre im Dauereinsatz. Jetzt beraten lassen.',
      eigenerKopf: {
        marke: 'Schenk',
        claim: 'Siebdruckmaschinen Made in Germany',
        nav: [
          { text: 'Modelle', anker: 'modelle' },
          { text: 'Präzision', anker: 'praezision' },
          { text: 'Deshalb Schenk', anker: 'deshalb-schenk' },
          { text: 'Über uns', anker: 'ueber-schenk' }
        ],
        cta: { text: 'Unverbindliche Beratung', anker: 'beratung' }
      },
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Siebdruckmaschinen Made in Germany',
          h1: 'Nicht nur drucken, sondern beeindrucken – mit Technologie von Schenk.',
          lead: 'Ihre Marke verlangt mehr als Standard. Darum setzen High-End-Marken auf bewährte Schenk-Qualität. Die hohe Produktivität, flexible Anwendungsbreite und Langlebigkeit sorgen für dauerhaft niedrige Stückkosten.',
          knoepfe: [{ text: 'Infos anfordern', seite: 'schenk', extra: '#beratung' }, { text: 'Möglichkeiten entdecken', seite: 'schenk', extra: '#modelle', stil: 'rahmen' }],
          bild: { datei: 'hero-schenk.jpg', text: 'Foto: Schenk Siebdruckmaschine', alt: 'Schenk Karussell-Siebdruckmaschine' },
          hinweis: 'Eigene Seite mit eigenem Menü – laut Miro-Board nicht im HK-Menü. Zu klären: eigene Domain/Website? Schenk-Logo? Gehört die Seite zum Auftrag?'
        },
        {
          typ: 'karten',
          variante: 'vorteile',
          spalten: 4,
          kicker: 'Deshalb Schenk',
          h2: 'Kompromisslos für alle, die im Siebdruck Maßstäbe setzen wollen.',
          liste: [
            { icon: 'check', titel: 'Sichtbare Präzision', text: 'Weniger Nacharbeit & Reklamationen.' },
            { icon: 'check', titel: 'Stückkosten', text: 'Langlebigkeit, schnelles Rüsten & hoher Output.' },
            { icon: 'check', titel: 'Einfache Bedienung', text: 'Touchscreen, klare Programme, schnell erlernbar.' },
            { icon: 'check', titel: 'Skalierbar & flexibel', text: 'Bis 18 Farben, Doppelindex, Sondergrößen/-formen/-materialien.' }
          ]
        },
        {
          typ: 'karten',
          anker: 'modelle',
          stein: true,
          spalten: 3,
          kicker: 'Unsere Modelle im Überblick',
          h2: 'Von präzise-kompakt bis voll skalierbar',
          intro: 'Drei Modelle – ein Versprechen: Präzision, Langlebigkeit und Effizienz über Jahrzehnte. Ob kompakt, skalierbar oder für höchste Volumen – mit Schenk wählen Sie immer den Maßstab im Siebdruck.',
          liste: [
            { bild: { datei: 'schenk-beetle.jpg', text: 'Foto: Schenk Beetle', alt: 'Schenk Beetle', format: '16/10' }, tag: 'Die kompakte Lösung', titel: 'Schenk Beetle', absaetze: ['Die Schenk Beetle bietet den idealen Einstieg in die Welt des industriellen Siebdrucks. Kompakt, effizient und einfach zu bedienen, ist sie perfekt für kleinere Losgrößen oder Produktionen mit häufiger Umrüstung geeignet. Durch ihre schlanke Bauweise fügt sie sich leicht in Ihre Produktion ein.', '<strong>Ideal für:</strong> kleinere bis mittlere Produktionsumgebungen, Textilien, Werbemittel<br><strong>Stärken:</strong> bis zu 13 Farben, platzsparend, leicht zu bedienen<br><strong>Besonderheiten:</strong> pneumatischer Hub, robuste Bauweise, Sondergrößen möglich', '➔ Die kompakte Lösung für vielseitige Aufträge mit begrenztem Platzbedarf.'] },
            { bild: { datei: 'schenk-spider.jpg', text: 'Foto: Schenk Spider', alt: 'Schenk Spider', format: '16/10' }, tag: 'Die runde Sache', titel: 'Schenk Spider', absaetze: ['Die Spider ist das Hochleistungsmodell für Unternehmen, die zügig, präzise und gleichzeitig flexibel produzieren möchten. Ideal für industrielle Fertigungsumgebungen mit höchsten Ansprüchen an Taktzeit, Prozesssicherheit und Zukunftstauglichkeit.', '<strong>Ideal für:</strong> T-Shirts, Taschen, Zuschnitte, Socken<br><strong>Stärken:</strong> kompakte Bauweise, bis 12 Farben, einfache Handhabung<br><strong>Besonderheiten:</strong> Doppelindex-Option für größere Druckflächen', '➔ Die leistungsstarke Lösung für vielseitige Aufträge bei begrenztem Platzbedarf.'] },
            { bild: { datei: 'schenk-octopus.jpg', text: 'Foto: Schenk Octopus', alt: 'Schenk Octopus', format: '16/10' }, tag: 'Die Bewährte', titel: 'Schenk Octopus', absaetze: ['Die Octopus ist seit Jahren das Rückgrat zahlreicher Drucklinien, die maximale Präzision mit höchster Stückleistung verbinden wollen. Ideal für hohe Auflagen, großflächige Motive und Premium-Merchandise.', '<strong>Ideal für:</strong> Serienproduktion, großformatige Drucke, Premium-Merchandise<br><strong>Stärken:</strong> bis zu 18 Farben, bis zu 26 Stationen, maximale Stabilität<br><strong>Besonderheiten:</strong> Doppelindex bis 1100 × 800 mm, erweiterbar & skalierbar', '➔ Der Industrie-Standard führender Marken-, Werbemittel- und Merchandise-Produzenten in Europa.'] }
          ]
        },
        {
          typ: 'split',
          kicker: 'Download',
          h2: 'Jetzt Produktbroschüre herunterladen',
          absaetze: ['Alle Modelle, Optionen und technischen Daten auf einen Blick.'],
          knoepfe: [{ text: 'Produkt-Broschüre', seite: 'schenk', extra: '#beratung' }],
          hinweis: 'Die Broschüre (PDF) fehlt noch – bis dahin führt der Button zur Beratung.'
        },
        {
          typ: 'split',
          anker: 'praezision',
          stein: true,
          kicker: 'Präzision',
          h2: 'Präzision, die in der täglichen Praxis den Unterschied ausmacht.',
          absaetze: [
            'Schenk-Druckmaschinen sind bekannt dafür, mit einer Präzision von 0,025 mm zu arbeiten – ein menschliches Haar ist dreimal so dick.',
            'In der Praxis zeigt sich diese Genauigkeit noch eindrucksvoller:'
          ],
          liste: [
            '<strong>Ein 12-farbiges Motiv wird in allen Positionen deckungsgleich</strong>, ohne sichtbare Versätze – selbst bei elastischen Stoffen.',
            '<strong>Feine Linien</strong>, die bei weniger genauen Maschinen ausfransen, bleiben messerscharf.',
            'Selbst nach <strong>zehntausenden Druckzyklen</strong> bleibt die Registrierung stabil – ohne Nachjustieren.'
          ],
          schluss: [
            '<strong>Die Schenk-Präzision sorgt dafür, dass Motive aussehen, als kämen sie aus einer Offset-Druckstraße – nur eben auf Textil.</strong>',
            'Und genau dieser Effekt ist der Grund, weshalb Premium-Marken in Europa bis heute sagen: <strong>„Wenn es richtig gut aussehen muss, wird auf Schenk gedruckt.“</strong>'
          ],
          bild: { datei: 'schenk-textil.jpg', text: 'Foto: Nahaufnahme gedrucktes Textil', alt: 'Nahaufnahme eines bedruckten Textils', unterschrift: 'Nahaufnahme gedrucktes Textil' }
        },
        {
          typ: 'karten',
          spalten: 3,
          kicker: 'Komplettlösungen',
          h2: 'Vom Druck bis zur Veredelung: Komplettlösungen aus einer Hand',
          liste: [
            { bild: { datei: 'schenk-flock.jpg', text: 'Foto: Flockgerät', alt: 'Schenk Flockgerät', format: '16/10' }, titel: 'Flockgeräte: 3D-Haptik & Premium-Veredelung', text: 'Schenk-Flockgeräte ermöglichen hochwertige Flockeffekte mit gleichmäßigem Florbild. Perfekt, um Textilien fühlbar aufzuwerten – kompatibel, einfach integrierbar und für hohe Stückzahlen ausgelegt.' },
            { bild: { datei: 'schenk-zwischentrockner.jpg', text: 'Foto: Zwischentrockner', alt: 'Infrarot-Zwischentrockner', format: '16/10' }, titel: 'Zwischentrockner (IR) – schnell, kompakt, energieeffizient', text: 'Infrarot-Zwischentrockner verkürzen die Prozesszeit, stabilisieren jede Farbschicht und sorgen für perfekte Weiterverarbeitung im Mehrfarbdruck, gerade bei feinen Motiven.' },
            { bild: { datei: 'schenk-tunneltrockner.jpg', text: 'Foto: Tunneldurchlauftrockner', alt: 'Tunneldurchlauftrockner', format: '16/10' }, titel: 'Tunneldurchlauftrockner – maximale Aushärtung, minimaler Ausschuss', text: 'Ob Infrarot oder Umluft: Diese Trocknersysteme sorgen für gleichmäßige Aushärtung bei hohen Geschwindigkeiten. Temperaturstabil, langlebig und auf industrielle Dauereinsätze ausgelegt.' }
          ]
        },
        {
          typ: 'karten',
          variante: 'vorteile',
          stein: true,
          kicker: 'Gesamt-Stückkosten',
          h2: 'Schenk: Die clevere Wahl für langfristig investierende Unternehmen',
          intro: 'Schenk-Druckmaschinen sind bezüglich der Gesamt-Stückkosten unschlagbar. Denn unsere Maschinen sind so konstruiert, dass sie über Jahrzehnte präzise, schnell und stabil laufen.',
          liste: [
            { icon: 'kalender', titel: 'Langlebigkeit', text: 'Viele Schenk-Maschinen laufen bereits 25 Jahre im industriellen Dauereinsatz.' },
            { icon: 'stabil', titel: 'Hohe Zuverlässigkeit', text: 'Die robuste Mechanik verhindert ungeplante Stillstände. Ergebnis: eine deutlich höhere Produktivität.' },
            { icon: 'ziel', titel: 'Präzision = weniger Ausschuss', text: 'Dank 0,025 mm Registergenauigkeit liegt der Ausschuss deutlich unter vergleichbaren Anlagen.' },
            { icon: 'uhr', titel: 'Schnelles Rüsten', text: 'Schnellspannsysteme und klare Menüs reduzieren Rüstzeiten um bis zu 40 %.' },
            { icon: 'umluft', titel: 'Energieeffiziente Trockner', text: 'Moderne IR-/Umluft-Systeme haben einen deutlich niedrigeren Energieverbrauch als Altanlagen.' },
            { icon: 'daten', titel: 'Wertstabilität', text: 'Schenk-Maschinen zählen zu den wenigen Anlagen, die auch nach Jahren einen relevanten Wiederverkaufswert haben.' }
          ],
          nachsatz: '<strong>Wer nur auf den Kaufpreis schaut, spart am falschen Ende – wer auf Stückkosten schaut, landet bei Schenk.</strong>'
        },
        {
          typ: 'split',
          umgekehrt: true,
          kicker: 'Service & Support',
          h2: 'Direkt aus Deutschland',
          absaetze: ['Mit Schenk erhalten Sie nicht nur eine Maschine, sondern ein komplettes Produktionssystem, das dauerhaft läuft.'],
          liste: [
            '<strong>Ersatzteile schnell verfügbar</strong> – aus deutscher Fertigung',
            '<strong>Remote-Support</strong> – schnelle Hilfe bei Parametern, Fehlerbildern oder Wartung',
            '<strong>Operator-Schulungen</strong> – für schnelle Anlernung und stabile Prozesse',
            '<strong>Abnahme & Qualitätsdokumente (Compliance / CE)</strong> – für Ihre internen Standards',
            '<strong>Langfristige Betreuung</strong> – viele Kunden arbeiten seit mehr als 20 Jahren mit demselben Ansprechpartner'
          ],
          bild: { datei: 'schenk-service.jpg', text: 'Foto: Service', alt: 'Schenk-Servicetechniker an einer Siebdruckmaschine' }
        },
        {
          typ: 'split',
          anker: 'beratung',
          stein: true,
          kicker: 'Jetzt beraten lassen',
          h2: 'Welche Maschine passt zu Ihnen?',
          absaetze: [
            'In der individuellen Beratung klären wir Ihre Anforderungen, empfehlen die passende Maschine und berechnen sowohl die Investition als auch die langfristigen Stückkosten. So treffen Sie eine fundierte Entscheidung – technisch wie wirtschaftlich.',
            '<strong>In der Beratung enthalten:</strong>'
          ],
          liste: [
            '<strong>Analyse Ihrer Anforderungen</strong> (Materialien, Farben, Stückzahlen)',
            '<strong>Empfehlung der passenden Maschine</strong> (Beetle, Spider oder Octopus)',
            '<strong>Übersicht der Investitionskosten</strong> inkl. Optionen',
            '<strong>TCO-Berechnung:</strong> realistische Stückkosten über die Laufzeit'
          ],
          knoepfe: [{ text: 'Jetzt beraten lassen', seite: 'kontakt', extra: '?bereich=schenk' }],
          bild: { datei: 'schenk-beratung.jpg', text: 'Foto: Beratung', alt: 'Beratung zu Schenk Siebdruckmaschinen' }
        },
        {
          typ: 'karten',
          anker: 'deshalb-schenk',
          variante: 'vorteile',
          spalten: 4,
          kicker: 'Deshalb Schenk',
          h2: 'Deshalb Siebdruckmaschinen von Schenk',
          liste: [
            { icon: 'check', titel: 'Vom Erfinder des Karussell-Siebdrucks', text: 'Schenk hat durch die Erfindung des Karussell-Siebdrucks den mehrfarbigen Textildruck in Serie ermöglicht.' },
            { icon: 'check', titel: 'Made in Germany', text: 'Entwicklung, Mechanik, Fertigung und Service direkt aus Deutschland. Robust, präzise, langlebig.' },
            { icon: 'check', titel: 'Extreme Lebensdauer', text: 'Viele Schenk-Maschinen laufen 15–25 Jahre im Dauereinsatz – mit minimalen Wartungsintervallen.' },
            { icon: 'check', titel: 'Präzision bis 0,025 mm', text: 'Für feinste mehrfarbige Motive, höchste Wiederholgenauigkeit und dauerhaft niedrigen Ausschuss.' }
          ]
        },
        {
          typ: 'split',
          anker: 'ueber-schenk',
          stein: true,
          kicker: 'Über uns',
          h2: 'Schenk: Wo Präzision ihren Ursprung hat',
          absaetze: [
            'Als Schenk vor Jahrzehnten die erste Karussell-Siebdruckmaschine entwickelte, veränderte sich der Textildruck weltweit.',
            'Erstmals konnten Marken mehrfarbige Motive in hoher Präzision und großer Stückzahl produzieren – zuverlässig, wiederholgenau und industrietauglich. Diese Erfindung machte Schenk zum Pionier des modernen Textilsiebdrucks.',
            'Bis heute gilt derselbe Anspruch: <strong>Maximale Präzision. Maximale Lebensdauer. Maximale Gestaltungsmöglichkeiten.</strong>',
            'Deshalb setzen viele führende europäische Produzenten bis heute auf Technik „Made in Germany“ – gebaut von Menschen, die Präzision als ihr Handwerk verstehen.'
          ],
          bild: { datei: 'schenk-historie.jpg', text: 'Foto: Historie', alt: 'Historische Schenk Karussell-Siebdruckmaschine' }
        },
        {
          typ: 'cta',
          kicker: 'Schenk Siebdruckmaschinen',
          h2: 'Jetzt beraten lassen – welche Maschine passt zu Ihnen?',
          text: 'Wir klären Ihre Anforderungen, empfehlen die passende Maschine und berechnen Investition und langfristige Stückkosten.',
          knoepfe: [{ text: 'Jetzt beraten lassen', seite: 'kontakt', extra: '?bereich=schenk' }]
        }
      ]
    }
  }
};
