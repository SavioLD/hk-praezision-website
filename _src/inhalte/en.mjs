/* =====================================================================
   CONTENT ENGLISH – DRAFT TRANSLATION of the Miro board texts
   ---------------------------------------------------------------------
   Same structure as de.mjs. HK wants the English version straight away
   (DeepL/AI); per the agency guidelines a human review of technical
   terms is still needed before going live.
   ===================================================================== */

const CAREER_URL = 'https://saviold.github.io/hk-praezision-karriere/';
const MD = 'Stefan Kruck, Managing Director';

const LOGOS = (hinweis) => ({
  typ: 'logos',
  titel: 'Customers & partners',
  liste: ['Logo', 'Logo', 'Logo', 'Logo', 'Logo'],
  hinweis
});
const LOGOS_FRAUNHOFER = {
  typ: 'logos',
  titel: 'Partners & institutes',
  liste: ['Fraunhofer Institute', 'Logo', 'Logo', 'Logo', 'Logo'],
  hinweis: 'Per the Miro board: “Fraunhofer Institute etc.” – logos to be supplied by HK.'
};

const IR_CONVECTION = 'Infrared vs. convection: only convection heats the part completely evenly right through to the core – the basis for stable quality and fast cycle times.';

const PASSAT = {
  bild: { datei: 'passat.jpg', text: 'Photo: Passat', alt: 'Passat convection oven with lift system', format: '16/10' },
  tag: 'Development & small series',
  titel: 'Passat – the flexible lift system',
  absaetze: [
    'The Passat works on a vertical lift principle: a central basket moves the individual drawers to an ergonomic working height, where operators or robots can load and unload them comfortably. The system is ideal for lab trials, parameter studies, material tests and pre-series, as it is extremely flexible and quick to changeover.',
    'This makes the Passat particularly suitable for smaller quantities, variable processes and applications where precision and flexibility matter more than maximum throughput.'
  ]
};
const SCIROCCO = {
  bild: { datei: 'scirocco.jpg', text: 'Photo: Scirocco', alt: 'Scirocco convection oven with paternoster system', format: '16/10' },
  tag: 'Short cycle times & series production',
  titel: 'Scirocco – the paternoster system',
  absaetze: [
    'The Scirocco uses a continuous paternoster principle: the racks circulate so that parts are removed at the top and the rack is reloaded straight away at the bottom. This allows almost any number of levels to be integrated – ideal for industrial quantities and fast material changes.',
    'The system enables a constant material flow, short paths, minimal downtime and maximum productivity. For companies looking to scale their composite processes, the Scirocco is the optimal solution.'
  ]
};

const CONSULT_OVEN = (bereich) => ({
  typ: 'split',
  umgekehrt: true,
  kicker: 'Free consultation',
  h2: 'We take your application all the way.',
  absaetze: [
    'Whether you need a single oven for your existing line or want a complete turnkey project including automation – we help you bring your process safely into series production.',
    'Together with our application engineers we analyse your requirements and test your material directly in our in-house test centre.',
    'Using temperature curves accurate to the second, we optimise all relevant parameters for your production process. This gives you realistic results from real production conditions – before you invest.'
  ],
  schluss: ['<strong>Talk to one of our application engineers now.</strong>'],
  knoepfe: [{ text: 'Free consultation', seite: 'kontakt', extra: '?bereich=' + bereich }],
  bild: { datei: 'technikum.jpg', text: 'Photo: test centre / application engineering', alt: 'Application engineers in the HK-Präzisionstechnik test centre' }
});

const SOCIAL_PROOF = 'Still open per the Miro board: social proof / reference projects (customer quote, 2–3 case studies – “key points from Stefan”) and the HK brand story.';

const CTA_START = {
  typ: 'cta',
  kicker: 'German Precision in Chinese Speed',
  h2: 'Let’s talk about your application – and how we can get it into series production faster.',
  text: 'Enquiries go straight to the core team of design and application engineers, so you get a clear direction within a few days – not after endless rounds of coordination.',
  knoepfe: [{ text: 'Get advice now', seite: 'kontakt' }]
};

export default {
  lang: 'en',
  htmlLang: 'en',
  og: 'en_GB',
  name: 'English',
  kurz: 'EN',
  ordner: 'en/',

  slugs: {
    start: 'index.html',
    spanntechnik: 'workholding.html',
    thermoplast: 'thermoplastic-convection-ovens.html',
    spezial: 'convection-ovens-special-applications.html',
    saegen: 'diamond-wire-saws.html',
    ueberuns: 'about-us.html',
    karriere: 'careers.html',
    kontakt: 'contact.html',
    impressum: 'legal-notice.html',
    datenschutz: 'privacy.html',
    schenk: 'schenk-screen-printing-machines.html'
  },

  nav: [
    { text: 'Solutions', kinder: ['spanntechnik', 'thermoplast', 'spezial', 'saegen'] },
    { seite: 'ueberuns' },
    { seite: 'karriere' }
  ],

  ui: {
    zumInhalt: 'Skip to content',
    entwurf: 'Design draft HK‑Präzisionstechnik – not public',
    stand: 'Version',
    menue: 'Menu',
    hauptnavigation: 'Main navigation',
    sprache: 'Choose language',
    anfragen: 'Contact',
    startseite: 'Home',
    brotkrumen: 'Breadcrumb',
    videoFolgt: 'Video coming soon',
    videoAbspielen: 'Play video',
    videoYoutube: 'Playing the video connects to YouTube.',
    bildFolgt: 'Image material from HK',
    platzhalter: 'Placeholder · visible in draft only',
    vorteil: 'Advantage',
    nachteil: 'Drawback',
    ja: 'Yes',
    nein: 'No',
    serienstart: 'SOP',
    oderAnrufen: 'Or call us directly:',
    telefon: 'Phone',
    fax: 'Fax',
    email: 'Email',
    adresse: 'Address & directions',
    anfahrt: 'Sat nav: Aldi Süd, Neckarstraße 1. Before the Aldi car park, turn right under the bridge – Building 4.',
    route: 'Open route in Google Maps',
    neuesFenster: '(opens in a new window)',
    direkt: 'Direct contact',
    bereiche: 'Solutions',
    unternehmen: 'Company',
    kontakt: 'Contact',
    fussText: 'Workholding, thermoplastic convection ovens, convection ovens for special applications and diamond wire saws from Oberndorf am Neckar, Germany.',

    form: {
      schritt: 'Step {n} of {g}',
      weiter: 'Next',
      zurueck: 'Back',
      optional: 'optional',
      s1: 'What is it about?',
      s1hilfe: 'Choose the area you would like an assessment for.',
      bereiche: [
        { wert: 'spanntechnik', text: 'Workholding' },
        { wert: 'rohteil', text: 'Raw-part consultation' },
        { wert: 'thermoplast', text: 'Thermoplastic convection oven' },
        { wert: 'spezial', text: 'Convection oven for special applications' },
        { wert: 'saegen', text: 'Diamond wire saw' },
        { wert: 'schenk', text: 'Schenk screen printing machine' },
        { wert: 'service', text: 'Service for an existing system' },
        { wert: 'sonstiges', text: 'Something else' }
      ],
      s2: 'Where does your project stand?',
      s2hilfe: 'The earlier we get involved, the more we can do for your start of production.',
      stände: [
        { wert: 'anfang', text: 'At the start – part or process still in development', klein: 'Ideal for simultaneous engineering and trials in our test centre' },
        { wert: 'klar', text: 'Requirements are clear – we are looking for the right solution' },
        { wert: 'optimieren', text: 'The process is running and should become faster or more stable' },
        { wert: 'bestand', text: 'It concerns an existing system', klein: 'Service, maintenance, extension' }
      ],
      s3: 'When do you want to start?',
      s3hilfe: 'Your project has a deadline – tell us which one.',
      zeiten: [
        { wert: 'sofort', text: 'As soon as possible' },
        { wert: '3m', text: 'Within the next 3 months' },
        { wert: '12m', text: 'In 3 to 12 months' },
        { wert: 'offen', text: 'Not decided yet' }
      ],
      s4: 'Tell us briefly about your project.',
      s4hilfe: 'A few keywords are enough. We will clarify drawings and details in a conversation.',
      nachricht: 'Your project',
      nachrichtPlatzhalter: 'e.g. part, material, quantity, planned start of production …',
      s5: 'Where should we send your assessment?',
      s5hilfe: 'You will receive a clear direction from us within a few days.',
      firma: 'Company',
      vorname: 'First name',
      nachname: 'Last name',
      email: 'Email',
      telefon: 'Phone',
      datenschutz: 'I agree that my details will be processed to handle my enquiry. Details in the [privacy policy](seite:datenschutz).',
      senden: 'Send enquiry',
      dankeTitel: 'Thank you – we have received your enquiry.',
      dankeText: 'It goes straight to our core team of design and application engineers. You will get a clear direction within a few days – not after endless rounds of coordination.',
      ohneJs: 'The enquiry tool requires JavaScript. Simply email us at {MAIL} or call {TEL}.',
      js: {
        schritt: 'Step {n} of {g}',
        wahl: 'Please choose an option.',
        pflicht: 'Please fill in this field.',
        email: 'Please enter a valid email address.',
        datenschutz: 'Please agree to the processing of your details.',
        senden: 'Sorry, that didn’t work. Please try again or give us a call.',
        ja: 'Yes'
      }
    }
  },

  seiten: {
    /* ================================================================ HOME */
    start: {
      name: 'Home',
      title: 'HK Präzisionstechnik – German Precision in Chinese Speed',
      description: 'Workholding, thermoplastic convection ovens, convection ovens for special applications and diamond wire saws from Germany. Faster into series production. Safer in the process.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Faster into series. Safer in the process',
          h1: 'German Precision <em>in Chinese Speed.</em>',
          lead: 'We think your production through from the very start – from the first consultation well before the actual project start, through prototypes, to the series-ready solution. By bringing your production experts and our design engineers to the same table early on, your projects reach series production faster, more stably and more economically.',
          aufruf: 'Let’s talk about your application – and how we can get it into series production faster.',
          knoepfe: [{ text: 'Get advice now', seite: 'kontakt' }, { text: 'Our solutions', seite: 'start', extra: '#loesungen', stil: 'rahmen' }],
          bild: { datei: 'hero-start.jpg', text: 'Photo: home page', alt: 'HK-Präzisionstechnik in Oberndorf am Neckar' }
        },
        LOGOS('Logo strip per the Miro board – customer and partner logos to be supplied by HK.'),
        {
          typ: 'karten',
          anker: 'loesungen',
          spalten: 2,
          kicker: 'Our solutions',
          h2: 'From workholding to thermoplastic ovens – here’s what we can do for you.',
          liste: [
            { bild: { datei: 'loesung-spanntechnik.jpg', text: 'Photo: workholding', alt: 'Workholding fixture for machining centres', format: '16/10' }, titel: 'Workholding for machining centres', untertitel: 'Faster into series. Safer in the process.', text: 'From raw-part consultation and prototypes to the series fixture, we support your entire path into milling production. Our fixtures are designed for high volumes, automation and long product life cycles – so your part can be manufactured in a stable, process-reliable and economical way.', seite: 'spanntechnik', link: 'Explore workholding solutions' },
            { bild: { datei: 'loesung-thermoplast.jpg', text: 'Photo: thermoplastic convection oven', alt: 'Thermoplastic convection oven', format: '16/10' }, titel: 'Thermoplastic convection ovens', untertitel: 'Fast, precise and recyclable – the future of composite processing.', text: 'Our convection ovens are the solution for fibre-reinforced thermoplastics with material thicknesses from approx. 1.5 mm. They combine uniform heating, short cycle times and high energy efficiency – ideal for battery covers, heat-shield parts, structural components and more.', seite: 'thermoplast', link: 'Explore thermoplastic ovens' },
            { bild: { datei: 'loesung-spezial.jpg', text: 'Photo: convection oven for special applications', alt: 'Convection oven for special applications', format: '16/10' }, titel: 'Convection ovens for special applications', untertitel: 'Precise temperature control – when quality tolerates no fluctuation.', text: 'Our convection ovens are the solution for heat processes with narrow temperature windows. They combine homogeneous heating, reproducible results and high energy efficiency – ideal wherever stable part properties, low scrap rates and reliable cycle times are critical.', seite: 'spezial', link: 'Explore convection ovens' },
            { bild: { datei: 'loesung-saegen.jpg', text: 'Photo: diamond wire saw', alt: 'Diamond wire saw', format: '16/10' }, titel: 'Diamond wire saws', untertitel: 'Precise cuts for the most demanding materials.', text: 'With our diamond wire saws, customers cut silicon, ceramics, glass, composites and many other high-performance materials – gently, precisely and with minimal kerf loss. Ideal for research, development and series production of sensitive or brittle materials.', seite: 'saegen', link: 'Explore diamond wire saws' }
          ]
        },
        {
          typ: 'split',
          stein: true,
          umgekehrt: true,
          kicker: 'Careers',
          h2: 'Your career at HK Präzisionstechnik',
          absaetze: [
            'At HK Präzisionstechnik you work in a team that combines speed, precision and genuine engineering craftsmanship.',
            'We develop workholding, thermoplastic convection ovens and special machines that have been in use at leading companies for decades – and that only works because every employee takes responsibility, contributes ideas and works directly on solutions.',
            'Whether in design, production, project management or training: you can expect short decision paths, open doors, modern technologies and projects where you really see the difference you make.'
          ],
          schluss: ['<strong>If you want to bring things into series production faster, smarter and more sustainably, you’ve come to the right place.</strong>'],
          knoepfe: [{ text: 'Explore career opportunities', seite: 'karriere' }],
          bild: { datei: 'karriere.jpg', text: 'Photo: team / workplace', alt: 'Employees of HK-Präzisionstechnik' }
        },
        {
          typ: 'split',
          anker: 'video',
          kicker: 'Our standard',
          h2: 'HK Präzisionstechnik: German Precision in Chinese Speed',
          absaetze: [
            'At HK Präzisionstechnik we combine high speed with genuine German engineering precision – German Precision in Chinese Speed.',
            'We deliberately get involved in your projects early, develop fixtures, ovens or diamond wire saws in parallel with your part and so reduce risks such as change loops, rework and delayed production starts. Enquiries go straight to the core team of design and application engineers, so you get a clear direction within a few days – not after endless rounds of coordination.',
            'Many of our solutions have been in use for decades because we think your production through from the start and focus on longevity instead of compromises.'
          ],
          video: { id: 'unternehmen', titel: 'German Precision in Chinese Speed', unterzeile: MD }
        },
        { typ: 'hinweis', text: 'As in the Miro board, not in the menu: the separate page [Schenk / screen printing machines](seite:schenk). Whether it is part of the project is still to be clarified.' },
        CTA_START
      ]
    },

    /* ================================================================ WORKHOLDING */
    spanntechnik: {
      name: 'Workholding',
      navInfo: 'for machining centres',
      title: 'Workholding for Machining Centres | HK Präzisionstechnik',
      description: 'Workholding fixtures for machining centres – from raw-part consultation to the series fixture. Simultaneous engineering, turnkey and function integration: faster into series.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Workholding for machining centres',
          h1: 'Faster into series. Safer in the process.',
          lead: 'From raw-part consultation and prototype to the series fixture, we support the entire path of your products. Workholding from HK reduces non-productive time, ensures reproducible precision and accelerates the start of production. The result: more process reliability, less scrap, lower costs.',
          aufruf: 'Get free, no-obligation advice now.',
          knoepfe: [{ text: 'Request information', seite: 'kontakt', extra: '?bereich=spanntechnik' }, { text: 'Request raw-part consultation', seite: 'kontakt', extra: '?bereich=rohteil', stil: 'rahmen' }],
          bild: { datei: 'hero-spanntechnik.jpg', text: 'Photo: workholding fixture', alt: 'Workholding fixture by HK-Präzisionstechnik' }
        },
        LOGOS('Logo strip per the Miro board – customer and partner logos to be supplied by HK.'),
        {
          typ: 'videoblock',
          kicker: 'Simultaneous engineering',
          h2: 'German Precision in Chinese Speed.',
          intro: 'The typical main mistake – and our solution: part and workholding are developed in parallel instead of one after the other.',
          video: { id: 'spanntechnik', titel: 'Simultaneous engineering', unterzeile: MD }
        },
        {
          typ: 'split',
          kicker: 'Turnkey',
          h2: 'From raw part to running production',
          absaetze: [
            'At HK Präzisionstechnik we don’t see workholding as an isolated component but as a <strong>central element of a complete production solution</strong>.',
            'That’s why we don’t just support you up to the finished fixture – but <strong>through the entire process</strong>, from the raw part to stable series production.',
            'Our turnkey approach includes:'
          ],
          liste: [
            '<strong>Raw-part and clamping analysis</strong> in the early development phase',
            '<strong>Simultaneous engineering</strong> of part and fixture for maximum process stability',
            '<strong>Design, manufacturing, assembly and measurement</strong> in-house',
            '<strong>Pre-acceptance at our site</strong> and <strong>final acceptance on your machine</strong>',
            'and on request: <strong>support until your production runs stably</strong>'
          ],
          schluss: ['We identify dependencies early, avoid bottlenecks and make sure your entire machining process runs in a stable, fast and economical way.'],
          bild: { datei: 'turnkey.jpg', text: 'Photo: manufacturing / assembly', alt: 'Manufacturing and assembly of a fixture' }
        },
        {
          typ: 'split',
          stein: true,
          umgekehrt: true,
          kicker: 'Reference projects',
          h2: 'Workholding for complex milled parts',
          absaetze: ['<strong>Fixture for the assembly of combustion engines</strong>'],
          bild: { datei: 'referenz-verbrennungsmotoren.jpg', alt: 'HK-Präzisionstechnik fixtures for the assembly of combustion engines', format: '785/467', unterschrift: 'Fixture for the assembly of combustion engines' },
          hinweis: 'Per the Miro board a slider with several reference projects. Still missing per project: customer (anonymised if necessary), customer requirements, solution, result. Add further projects.'
        },
        {
          typ: 'split',
          kicker: 'Function integration',
          h2: 'Less complexity & shorter production times',
          absaetze: [
            'The fewer steps a part has to go through, the more stable, faster and cheaper your production process becomes.',
            'With our expertise in function integration we often combine several functional sequences in a single fixture. Hydraulic movements, sequences, centring or clamping sequences run automatically – without reclamping, without additional fixtures, without non-productive time.',
            'The result:'
          ],
          liste: [
            '<strong>Fewer fixtures:</strong> less complexity and lower costs',
            '<strong>Fewer reclamping operations:</strong> shorter cycle times per part',
            '<strong>Greater automation potential:</strong> the integrated sequences simplify automation and reduce its cost.'
          ],
          schluss: ['<strong>The best fixture is the one you don’t need – because its functions are already intelligently integrated.</strong>'],
          bild: { datei: 'funktionsintegration.jpg', text: 'Photo: fixture with hydraulics', alt: 'Fixture with integrated hydraulics' }
        },
        {
          typ: 'ablauf',
          stein: true,
          kicker: 'Simultaneous engineering',
          h2: 'From the first meeting to running series production',
          intro: 'Our process is designed to synchronise part and fixture as early as possible – for maximum speed, stability and precision during production ramp-up.',
          liste: [
            { titel: 'Initial project meeting', text: 'Together we clarify the known data on the part, production requirements and boundary conditions. Our design engineers analyse the starting situation and discuss the technical options with you.' },
            { titel: 'Simultaneous engineering (part + fixture)', text: 'As your part becomes more concrete, we develop the matching workholding in parallel. Changes to the part lead directly to adjustments to the fixture. This way we avoid later change loops and bring both components together optimally.' },
            { titel: 'Fixture design, manufacturing & assembly', text: 'Based on the final raw-part data we create the complete 3D/CAD design. All functional sequences, clamping points and machine interfaces are worked out in detail. The fixture is manufactured, assembled and fully tested in-house.' },
            { titel: 'Precision measurement & pre-acceptance', text: 'The fixture is fully measured and inspected on our ZEISS 3D coordinate measuring machine. This is followed by pre-acceptance at our site or remotely – including function runs and load tests.' },
            { titel: 'Final acceptance at your site', text: 'The fixture is run in on your machine and tested in the real production process. After successful final acceptance, series capability is fully ensured.' },
            { titel: 'Start of production & project completion', text: 'Joint closing meeting, documentation and handover of all documents. Optionally, we support the start of ongoing production to ensure a smooth ramp-up.' }
          ]
        },
        {
          typ: 'split',
          kicker: 'Longevity',
          h2: 'Fixtures that outlast product cycles.',
          absaetze: [
            'If a fixture is to run reliably for many years, it takes more than good design – it takes a team behind it.',
            'We have been in workholding since 1993. Today around 30 specialists work for us, many of them for more than 25 years. We train the next generation ourselves.',
            'In our competence centre for fixtures we rely on standardised components and a high level of vertical integration. This ensures fast, reliable spare-parts supply.',
            '<strong>In short: your fixture stays in use for a long time – and we stay by your side for a long time.</strong>'
          ],
          bild: { datei: 'team.jpg', text: 'Photo: team', alt: 'The HK-Präzisionstechnik team' }
        },
        {
          typ: 'split',
          stein: true,
          umgekehrt: true,
          anker: 'rohteilberatung',
          kicker: 'Free raw-part consultation',
          h2: 'An assessment from our specialists',
          absaetze: ['The greatest savings potential doesn’t arise in manufacturing – but in the raw part itself. Even before the part is finally designed, our engineers check:'],
          liste: [
            'whether the raw part is designed for clamping and manufacturing',
            'where small adjustments have a big impact',
            'how later tool changes can be avoided',
            'and which variant will allow the most stable clamping later on'
          ],
          schluss: [
            'This early consultation often saves weeks or months, because expensive changes to casting or forging dies never arise in the first place.',
            'Make use of our specialists’ expertise and request a free, no-obligation consultation on your project.'
          ],
          knoepfe: [{ text: 'Free consultation', seite: 'kontakt', extra: '?bereich=rohteil' }],
          bild: { datei: 'rohteil.jpg', text: 'Photo: raw part / casting', alt: 'Raw part before machining' }
        },
        {
          typ: 'split',
          kicker: 'Download',
          h2: 'The 10 biggest mistakes in new product launches on machining centres',
          absaetze: [
            'New product launches sound like a clearly structured process – but in reality the same costly mistakes happen again and again.',
            'We have summarised exactly these mistakes in our guide. Among other things, you will learn:'
          ],
          liste: [
            'why many projects are unnecessarily slowed down by sequential workflows',
            'how late raw-part changes destroy entire schedules',
            'why wrong assumptions in workholding lead to instabilities and rework',
            'and which points must be checked before every project start'
          ],
          schluss: ['The content is deliberately aimed not only at production managers, but also at buyers and technical project managers who want to make sure a new order is set up properly from the start.'],
          knoepfe: [{ text: 'Download the guide', seite: 'kontakt', extra: '?bereich=spanntechnik' }],
          bild: { datei: 'leitfaden-cover.jpg', text: 'Guide cover', alt: 'Guide: the 10 biggest mistakes in new product launches on machining centres', format: '3/4' },
          hinweis: 'The guide (PDF) does not exist yet – content or creation to be clarified with HK. Until then the button leads to the contact form.'
        },
        {
          typ: 'split',
          stein: true,
          umgekehrt: true,
          kicker: 'Customer examples',
          h2: 'Faster into series thanks to simultaneous engineering',
          absaetze: [
            'A defence-industry supplier wanted to manufacture a high-precision aluminium housing part and needed a suitable clamping solution.',
            'Already at the first draft we recognised that the part design would have caused strong vibrations when milling at the intended speed. The engineering teams of both companies then developed a minimal design adjustment that allowed vibration-free clamping.',
            'Thanks to the small changes, the part can be manufactured at full speed, without vibrations and with maximum precision. The workholding has been running successfully at the customer for years and ensures consistently high productivity.'
          ],
          bild: { datei: 'kundenbeispiel.jpg', text: 'Photo: aluminium housing part', alt: 'Aluminium housing part in the fixture' },
          hinweis: 'Still open per the Miro board: further case studies and the HK brand story.'
        },
        CTA_START
      ]
    },

    /* ================================================================ THERMOPLASTIC CONVECTION OVENS */
    thermoplast: {
      name: 'Thermoplastic convection ovens',
      navInfo: 'Composite processing',
      title: 'Thermoplastic Convection Ovens Passat & Scirocco | HK',
      description: 'Convection ovens for fibre-reinforced thermoplastics from 1.5 mm: uniform heating to the core, 20–25-second cycle times, 50–60 % of the energy of comparable infrared ovens.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Thermoplastic convection ovens',
          h1: 'Fast, precise and recyclable – the future of composite processing.',
          lead: 'HK Präzisionstechnik thermoplastic convection ovens are the optimal solution for material thicknesses from 1.5 mm. More and more producers value the high productivity and the precise through-heating – and by switching from thermosets to recyclable thermoplastics they make a clear statement for sustainability.',
          aufruf: 'Get free, no-obligation advice now.',
          knoepfe: [{ text: 'Request information', seite: 'kontakt', extra: '?bereich=thermoplast' }, { text: 'Discover the options', seite: 'thermoplast', extra: '#systeme', stil: 'rahmen' }],
          bild: { datei: 'hero-thermoplast.jpg', text: 'Photo: thermoplastic convection oven', alt: 'HK-Präzisionstechnik thermoplastic convection oven' }
        },
        LOGOS_FRAUNHOFER,
        {
          typ: 'split',
          kicker: 'Thermoplastics instead of thermosets',
          h2: 'Faster, more sustainable, more economical.',
          absaetze: [
            'OEM requirements, EU regulations and rising cycle-time demands make thermoplastics the clear favourite over thermosets today. Thermoplastics are <strong>fully recyclable</strong>, can easily be remelted and processed into new parts or sheets – instead of being disposed of as expensive hazardous waste.',
            'Thermoplastics also convince in production: while thermoset processes often take <strong>minutes to hours</strong>, thermoplastics enable <strong>cycle times of seconds</strong>, as in sheet-metal production. This significantly increases productivity and reduces process costs.',
            'All in all, thermoplastics are not only more sustainable, but also faster, often more economical and increasingly required by OEMs – a material that will define the future of composite processing.'
          ],
          bild: { datei: 'thermoplast-bauteil.jpg', text: 'Photo: thermoplastic part', alt: 'Part made of fibre-reinforced thermoplastic' }
        },
        {
          typ: 'split',
          stein: true,
          umgekehrt: true,
          kicker: 'Infrared vs. convection',
          h2: 'Which is the better choice for your application?',
          absaetze: [
            'Infrared only heats parts at the surface and works reliably only up to about <strong>1.5 mm material thickness</strong>. Thicker or more complex thermoplastics end up with uneven temperatures and quality risks.',
            'Convection, on the other hand, heats the part <strong>evenly right through to the core</strong> – even with greater thicknesses and demanding geometries. This makes <strong>20–25-second cycle times</strong> possible, with consistently stable quality.',
            'Convection also scores economically: energy consumption is only <strong>50–60 %</strong> of comparable infrared ovens.',
            '<strong>We’ll be happy to calculate your individual total-cost-of-ownership savings.</strong>'
          ],
          knoepfe: [{ text: 'Free consultation', seite: 'kontakt', extra: '?bereich=thermoplast' }],
          bild: { datei: 'infrarot-vs-umluft.jpg', text: 'Graphic: infrared vs. convection', alt: 'Comparison of heating: infrared and convection', unterschrift: IR_CONVECTION }
        },
        {
          typ: 'karten',
          anker: 'systeme',
          spalten: 2,
          kicker: 'Passat & Scirocco',
          h2: 'Two systems. One goal: maximum thermoplastic performance.',
          liste: [PASSAT, SCIROCCO]
        },
        {
          typ: 'split',
          stein: true,
          kicker: 'Applications',
          h2: 'Is a convection oven right for your application too?',
          absaetze: ['Thermoplastic convection ovens are used wherever fibre-reinforced thermoplastics need to be heated precisely and reliably – in particular:'],
          liste: [
            'Glass-fibre and carbon-fibre reinforced thermoplastics',
            '<strong>Battery lids</strong> and battery covers',
            'Heat-shield and shielding technology',
            'Structural components in automotive and aerospace',
            'as well as numerous other thermoplastic composite applications'
          ],
          schluss: ['These are just a few examples.', '<strong>Let’s talk about your specific application and test whether a convection oven could be an option for your production too.</strong>'],
          knoepfe: [{ text: 'Free consultation', seite: 'kontakt', extra: '?bereich=thermoplast' }],
          bild: { datei: 'anwendung-thermoplast.jpg', text: 'Photo: application', alt: 'Thermoplastic parts from the convection oven', unterschrift: IR_CONVECTION }
        },
        {
          typ: 'karten',
          spalten: 3,
          kicker: 'Safety',
          h2: 'Plant protection systems for maximum production safety',
          liste: [
            { bild: { datei: 'loeschanlage.jpg', text: 'Photo: extinguishing system', alt: 'Certified extinguishing system', format: '16/10' }, titel: 'Certified extinguishing systems', text: 'Our ovens process combustible materials – which is why all systems can be equipped on request with certified extinguishing systems that react immediately in the event of fire.' },
            { bild: { datei: 'gassensorik.jpg', text: 'Photo: gas sensors', alt: 'Gas sensors in the oven', format: '16/10' }, titel: 'Gas sensors', text: 'Our gas sensors detect the formation of explosive gases at an early stage and give an early warning before critical concentrations are even reached.' },
            { bild: { datei: 'frischluft.jpg', text: 'Photo: fresh-air measurement', alt: 'Fresh-air measurement sensor', format: '16/10' }, titel: 'Fresh-air measurement with emergency shutdown', text: 'A sensor continuously monitors the amount of fresh air. Before flammable levels are reached, the system shuts down automatically.' }
          ]
        },
        CONSULT_OVEN('thermoplast'),
        {
          typ: 'ablauf',
          stein: true,
          kicker: 'In three steps',
          h2: 'How we bring your thermoplastic production into series',
          intro: 'From the first material test to ongoing production, we support you with a clear, transparent process that eliminates uncertainty and creates planning security. Our goal: to get you into series production as quickly, precisely and reliably as possible.',
          liste: [
            { titel: 'Consultation & material analysis', text: 'It always starts with understanding your specific application. Together we clarify material data, part geometry, target cycle times and quality requirements.' },
            { titel: 'Measurements in the test centre & sample piloting', text: 'Now we simulate real production conditions. On request we pilot your sample parts at one of our partner institutes. This allows complete production scenarios to be tested before you invest.' },
            { titel: 'Commissioning & maintenance', text: 'Our experts make sure the system is optimally parameterised and your team can work productively right away. We’re happy to maintain your system or enable your staff to carry out maintenance themselves.' }
          ],
          hinweis: SOCIAL_PROOF
        },
        CTA_START
      ]
    },

    /* ================================================================ CONVECTION OVENS FOR SPECIAL APPLICATIONS */
    spezial: {
      name: 'Convection ovens for special applications',
      navInfo: 'Precise temperature control',
      title: 'Convection Ovens for Special Applications | HK Präzisionstechnik',
      description: 'Convection ovens for heat processes with narrow temperature windows: tempering, seal tempering, silicone and polyurethane, thermoset components such as hydrogen tanks.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Convection ovens for special applications',
          h1: 'When precise temperature control makes the difference.',
          lead: 'HK Präzisionstechnik convection ovens ensure a homogeneous, precisely controllable temperature distribution – wherever sensitive materials, parts or processes tolerate no fluctuation. This gives you reproducible results, stable quality and high plant availability in a wide range of applications.',
          aufruf: 'Get free, no-obligation advice now.',
          knoepfe: [{ text: 'Request information', seite: 'kontakt', extra: '?bereich=spezial' }, { text: 'Discover the options', seite: 'spezial', extra: '#systeme', stil: 'rahmen' }],
          bild: { datei: 'hero-spezial.jpg', text: 'Photo: convection oven', alt: 'Convection oven for special applications' }
        },
        LOGOS_FRAUNHOFER,
        {
          typ: 'split',
          kicker: 'Precise temperature control',
          h2: 'More stable, more reproducible, more economical.',
          absaetze: [
            'Rising quality requirements, tight tolerances and extensive documentation obligations make precisely controlled temperature management the decisive factor in many heat processes today. Our convection ovens ensure a homogeneous temperature distribution throughout the entire part volume – even with demanding geometries – and thus create the basis for reproducible results.',
            'In ongoing operation this means: defined heating and holding times, stable processes and constant cycle times instead of fluctuating temperatures and uncontrollable scatter. Scrap and rework go down, productivity goes up.',
            'This turns precise temperature control from a potential risk into a reliable control variable – and your heat process into a predictable, economical building block of production.'
          ],
          bild: { datei: 'temperaturfuehrung.jpg', text: 'Photo: temperature curve / control', alt: 'Convection oven control with temperature curve' }
        },
        {
          typ: 'karten',
          anker: 'systeme',
          stein: true,
          spalten: 2,
          kicker: 'Passat & Scirocco',
          h2: 'Two systems. One goal: maximum performance in heat processes.',
          liste: [PASSAT, SCIROCCO]
        },
        {
          typ: 'split',
          umgekehrt: true,
          kicker: 'Applications',
          h2: 'Is a convection oven right for your application too?',
          absaetze: ['Convection ovens are used wherever parts need to be heated precisely and reliably – in particular for:'],
          liste: [
            'thermoplastic parts',
            'thermoset components such as hydrogen tanks',
            'heating parts before overmoulding',
            'tempering processes',
            'seal tempering',
            'processing silicone and polyurethane'
          ],
          schluss: ['These are just a few examples.', '<strong>Let’s talk about your specific application and test whether a convection oven is the right solution for your production too.</strong>'],
          knoepfe: [{ text: 'Free consultation', seite: 'kontakt', extra: '?bereich=spezial' }],
          bild: { datei: 'anwendung-spezial.jpg', text: 'Photo: application', alt: 'Parts from the convection oven', unterschrift: IR_CONVECTION },
          hinweis: 'The oven research on silicone potting (guidelines pp. 5–7) belongs here – “processing silicone and polyurethane” is already on the list. Whether it gets its own section is to be discussed with HK.'
        },
        CONSULT_OVEN('spezial'),
        {
          typ: 'ablauf',
          stein: true,
          kicker: 'In three steps',
          h2: 'How we bring your heat process into production',
          intro: 'From the first material test to ongoing manufacturing, we support you with a clear, transparent process that eliminates uncertainty and creates predictability. Our goal: to lead you into stable series production as quickly, precisely and reliably as possible.',
          liste: [
            { titel: 'Consultation & material analysis', text: 'It starts with understanding your specific application. Together we clarify your requirements and so create the basis for an optimally designed heat process.' },
            { titel: 'Measurements in the test centre & sample piloting', text: 'Now we simulate real production conditions. On request we pilot your sample parts at one of our partner institutes. This allows complete production scenarios to be tested before you invest.' },
            { titel: 'Commissioning & maintenance', text: 'Our experts make sure the system is optimally parameterised and your team can work productively right away. We’re happy to maintain your system or enable your staff to carry out maintenance themselves.' }
          ],
          hinweis: SOCIAL_PROOF
        },
        CTA_START
      ]
    },

    /* ================================================================ DIAMOND WIRE SAWS */
    saegen: {
      name: 'Diamond wire saws',
      navInfo: 'Precision in the micrometre range',
      title: 'Diamond Wire Saws Made in Germany | HK Präzisionstechnik',
      description: 'Diamond wire saws from Europe’s only industrial supplier: minimal kerf, Loop-Line® technology, trial cuts in our own test centre. For silicon, ceramics, glass and more.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Diamond wire saws made in Germany',
          h1: 'Diamond wire saws for precision in the micrometre range.',
          lead: 'For materials where every cut counts: durable, efficient and developed for the most demanding industrial applications. From Europe’s only manufacturer for industry.',
          aufruf: 'Let’s talk about your application.',
          knoepfe: [{ text: 'Free consultation', seite: 'kontakt', extra: '?bereich=saegen' }, { text: 'Discover the machines', seite: 'saegen', extra: '#geraete', stil: 'rahmen' }],
          bild: { datei: 'hero-saegen.jpg', text: 'Photo: diamond wire saw', alt: 'HK-Präzisionstechnik diamond wire saw' }
        },
        {
          typ: 'karten',
          variante: 'vorteile',
          kicker: 'Advantages',
          h2: 'Diamond wire saws: because every micrometre of material counts',
          intro: 'Diamond wire saws show their strengths wherever materials are expensive, brittle or need to be machined with high precision. Compared with band or slurry saws, diamond wire offers clear technical and economic advantages.',
          liste: [
            { icon: 'weniger', titel: 'Minimal material loss', text: 'The extremely thin wire creates a minimal kerf – ideal for expensive or scarce materials such as silicon, crystals, ceramics and gemstones.' },
            { icon: 'thermo', titel: 'Low forces & little heat', text: 'Fragile, brittle or high-precision materials are separated gently – without cracks, stresses or thermal damage.' },
            { icon: 'ziel', titel: 'Precise, smooth cut surfaces', text: 'The fine diamond grit produces very clean surfaces and therefore fewer tolerance deviations and stable downstream processes.' },
            { icon: 'blitz', titel: 'High cutting speeds', text: 'Diamond wire enables fast cutting processes without compromising precision – ideal for labs, pilot lines and industrial series environments.' },
            { icon: 'saege', titel: 'Multiwire for high productivity', text: 'Several wires cut in parallel – significantly more output per machine with consistently high cut quality.' },
            { icon: 'tropfen', titel: 'Economical water process', text: 'Pure water instead of slurry: fewer consumables, lower energy demand, easier handling and a clean, environmentally friendly process.' }
          ]
        },
        {
          typ: 'karten',
          stein: true,
          spalten: 4,
          kicker: 'Materials',
          h2: 'These materials we cut safely and precisely',
          liste: [
            ['Silicon & semiconductor materials', 'silizium'], ['Technical ceramics & magnets', 'keramik'], ['Crystals & optical materials', 'kristalle'], ['Gemstones & precision stones', 'edelsteine'],
            ['Composites & hybrid materials', 'verbund'], ['Metals & hard metals', 'metalle'], ['Glass, glass ceramics & inorganic materials', 'glas'], ['Graphite', 'graphit']
          ].map(([t, d]) => ({ bild: { datei: 'werkstoff-' + d + '.jpg', text: 'Close-up', alt: t, format: '4/3' }, titel: t })),
          zusatz: 'You can find an extensive list of suitable materials here: material overview for diamond wire saws.',
          hinweis: 'The material overview is still missing – per the Miro board as a Google Workspace document or alternatively as an expandable list. Close-ups of the materials are planned for the tiles.'
        },
        {
          typ: 'split',
          anker: 'geraete',
          kicker: 'Machines',
          h2: 'Diamond wire saws from Europe’s only industrial supplier',
          absaetze: ['Standard solutions where possible – special machine building where necessary.'],
          bild: { datei: 'geraete.jpg', text: 'Photo: product range', alt: 'HK-Präzisionstechnik diamond wire saws', format: '16/10' },
          hinweis: 'Per the Miro board: “consolidated selection + special machine building”. Model overview with images and key data still missing.'
        },
        {
          typ: 'split',
          stein: true,
          umgekehrt: true,
          anker: 'loop-line',
          kicker: 'Loop-Line® technology',
          h2: 'Our endless loop makes the difference',
          absaetze: ['The <strong>Loop-Line® system</strong> works with an endless, circulating diamond wire that offers several advantages over conventional systems:'],
          liste: [
            '<strong>Constant, tension-stable wire run:</strong> fewer wire breaks, more even cuts.',
            '<strong>More efficient power transmission:</strong> the wire wears more slowly and works more evenly.',
            '<strong>Precise cutting motion:</strong> perfect for the micrometre range and demanding materials.',
            '<strong>Lower thermal impact:</strong> the circulating wire carries heat away faster – ideal for brittle and heat-sensitive materials.',
            '<strong>Clean process with water:</strong> no slurry contamination, less dirt, easier cleaning.'
          ],
          bild: { datei: 'loop-line.jpg', text: 'Photo: Loop-Line®', alt: 'Loop-Line® endless wire' }
        },
        {
          typ: 'split',
          kicker: 'Your application',
          h2: 'Are diamond wire saws right for your application too?',
          absaetze: [
            'Whether your materials, geometries or process requirements are suitable for diamond wire is best clarified in a direct conversation.',
            'In a personal consultation our experts check with you whether our diamond wire saws are suitable for your specific purpose.',
            'For a reliable basis for your decision we also offer trial cuts: we carry them out in our own test centre or put you in touch with research institutes that use our machines.'
          ],
          schluss: ['<strong>Let’s talk about your application.</strong>'],
          knoepfe: [{ text: 'Discuss your application', seite: 'kontakt', extra: '?bereich=saegen' }],
          bild: { datei: 'versuchsschnitt.jpg', text: 'Photo: trial cut', alt: 'Trial cut in the test centre' }
        },
        {
          typ: 'ablauf',
          stein: true,
          kicker: 'Our approach',
          h2: 'Engineering instead of selling machines',
          intro: 'With diamond wire, it’s not the machine alone that matters, but the interplay of material, wire, parameters and process environment. This is exactly where our work as an engineering partner begins, supporting you from the idea to the production-ready solution.',
          liste: [
            { titel: 'Consultation on material & process', text: 'Together we analyse the requirements of your material and what the optimal cutting process could look like.' },
            { titel: 'Trial cuts in the test centre & optimal wire parameters', text: 'We test real components to reliably assess cut quality, kerf, surface and stability. This allows us to define wire thickness, wire type, grit, speed, tension and cooling individually.' },
            { titel: 'Integration into existing production environments', text: 'From automation to media connection: we make sure the saw doesn’t just fit, but works. Including material handling, clamping concept, coolant, exhaust and cutting strategy.' }
          ]
        },
        {
          typ: 'karten',
          variante: 'vorteile',
          spalten: 4,
          kicker: 'Why HK',
          h2: 'Why diamond wire saws from HK Präzisionstechnik',
          liste: [
            { icon: 'check', titel: 'Only industrial manufacturer in Europe', text: 'Industrial-size diamond wire saws are only available from us in Europe.' },
            { icon: 'check', titel: 'Engineering expertise included', text: 'From process development to service – everything from a single source.' },
            { icon: 'check', titel: 'High vertical integration & direct service', text: 'Our own manufacturing ensures fast delivery times & support – for permanently stable operation.' },
            { icon: 'check', titel: 'Special machine building possible', text: 'Standard solutions where possible, special machine building where necessary.' }
          ],
          hinweis: 'Still open per the Miro board: testimonials and the HK brand story.'
        },
        CTA_START
      ]
    },

    /* ================================================================ ABOUT US */
    ueberuns: {
      name: 'About us',
      title: 'About us – HK Präzisionstechnik in Oberndorf am Neckar, Germany',
      description: 'In workholding since 1993, around 30 specialists, many on board for more than 25 years. German Precision in Chinese Speed as our daily working principle.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'About us',
          h1: 'We think your production through from the very start.',
          lead: 'Our customers operate in markets where speed has long been a basic requirement. At the same time they need absolute process reliability, durable fixtures and reproducible quality. This is exactly where we come in: with a standard that combines both – German Precision in Chinese Speed.',
          knoepfe: [{ text: 'Get advice now', seite: 'kontakt' }],
          video: { id: 'unternehmen', titel: 'German Precision in Chinese Speed', unterzeile: MD },
          hinweis: 'There is no wireframe for “About us” in the Miro board (only “About us page, if needed”). The page is compiled from texts on the board.'
        },
        {
          typ: 'fakten',
          liste: [
            { wert: 'Since 1993', text: 'in workholding' },
            { wert: 'Around 30', text: 'specialists in the team' },
            { wert: '25+ years', text: 'many colleagues have been with us' },
            { wert: 'Own training', text: 'we train the next generation ourselves' }
          ]
        },
        {
          typ: 'schritte',
          kicker: 'How we work',
          h2: 'Our speed is no accident.',
          liste: [
            { titel: 'Early in the project', text: 'Instead of waiting until every detail is defined, we deliberately get involved in your projects early and develop fixtures, ovens or diamond wire saws in parallel with your part or process.' },
            { titel: 'Straight to the core team', text: 'New enquiries don’t wander through departments for days – they go straight to a responsible core team of design and application engineers, so you get a reliable direction within a few days.' },
            { titel: 'Commitment means start', text: 'Once you commit, we get going. We don’t wait until every contract clause has been negotiated down to the last detail, but start development so that your project gains momentum.' }
          ]
        },
        {
          typ: 'zitat',
          sr: 'Stefan Kruck on long-standing customers',
          text: 'When someone asks about a fixture delivered 20 years ago, we can often say more precisely in which plant and on which line it is still running today than the current team on site.',
          name: 'Stefan Kruck',
          rolle: 'Managing Director, HK Präzisionstechnik',
          nachsatz: 'This familiarity doesn’t come from paperwork and processes, but from genuine collaboration and a deep understanding of our customers’ production.'
        },
        {
          typ: 'split',
          kicker: 'Our team',
          h2: 'Solutions that far outlast the product life cycle.',
          absaetze: [
            'We have been in workholding since 1993. Today around 30 specialists work for us, many of them for more than 25 years. We train the next generation ourselves.',
            'For us, German Precision in Chinese Speed means: we think your production through from the start, shorten your time-to-market and deliver solutions that far outlast the product life cycle.'
          ],
          bild: { datei: 'team.jpg', text: 'Photo: team', alt: 'The HK-Präzisionstechnik team' },
          hinweis: 'The HK brand story is planned several times on the board – the text is still missing.'
        },
        {
          typ: 'split',
          stein: true,
          kicker: 'Location',
          h2: 'Oberndorf am Neckar, Germany.',
          absaetze: ['This is where we develop, manufacture and measure – and from here we support our customers. Want to work with us? Everything about [careers at HK](seite:karriere).'],
          kanaele: true
        },
        CTA_START
      ]
    },

    /* ================================================================ CAREERS */
    karriere: {
      name: 'Careers',
      title: 'Careers at HK Präzisionstechnik | Jobs in Oberndorf am Neckar',
      description: 'Your career at HK Präzisionstechnik: design, production, project management or training – short decision paths, open doors, modern technologies.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Careers',
          h1: 'Your career at HK Präzisionstechnik',
          lead: 'At HK Präzisionstechnik you work in a team that combines speed, precision and genuine engineering craftsmanship.',
          knoepfe: [{ text: 'View open positions', href: CAREER_URL }],
          video: { id: 'karriere', titel: 'Stefan Kruck on working at HK', unterzeile: MD },
          hinweis: 'No wireframe on the board. Two scripts exist for the video (90 seconds and 2–3 minutes). The button leads to the separate career landing page.'
        },
        {
          typ: 'split',
          kicker: 'What to expect',
          h2: 'Projects where you see the difference you make.',
          absaetze: [
            'We develop workholding, thermoplastic convection ovens and special machines that have been in use at leading companies for decades – and that only works because every employee takes responsibility, contributes ideas and works directly on solutions.',
            'You can expect short decision paths, open doors, modern technologies and projects where you really see the difference you make. Whether in:'
          ],
          liste: ['Design', 'Production', 'Project management', 'Training'],
          schluss: ['<strong>If you want to bring things into series production faster, smarter and more sustainably, you’ve come to the right place.</strong>'],
          bild: { datei: 'karriere.jpg', text: 'Photo: team / workplace', alt: 'Employees of HK-Präzisionstechnik' }
        },
        {
          typ: 'zitat',
          sr: 'Stefan Kruck on the team',
          text: 'The key to this is our employees. They work cleanly from a technical point of view, take responsibility and make decisions even when I’m not in the building.',
          name: 'Stefan Kruck',
          rolle: 'Managing Director, HK Präzisionstechnik',
          nachsatz: 'Enquiries go straight to those who can make technical decisions – so concrete proposals come quickly, instead of customers waiting weeks for a first interim status.'
        },
        {
          typ: 'cta',
          h2: 'Does this match your quality standards and your attitude to work?',
          text: 'Then I look forward to your application for one of our advertised positions. Perhaps we’ll soon be welcoming you to our team.',
          signatur: MD,
          knoepfe: [{ text: 'View open positions', href: CAREER_URL }]
        }
      ]
    },

    /* ================================================================ CONTACT */
    kontakt: {
      name: 'Contact',
      title: 'Contact & Free Consultation | HK Präzisionstechnik',
      description: 'Let’s talk about your application: enquiries go straight to the core team of design and application engineers – you get a clear direction within a few days.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Contact',
          h1: 'Let’s talk about your application.',
          lead: 'Describe your project in a few steps. Enquiries go straight to the core team of design and application engineers, so you get a clear direction within a few days – not after endless rounds of coordination.'
        },
        { typ: 'anfrage' }
      ]
    },

    /* ================================================================ LEGAL NOTICE */
    impressum: {
      name: 'Legal notice',
      title: 'Legal Notice | HK Präzisionstechnik',
      description: 'Legal notice of HK-Präzisionstechnik GmbH, Neckarstraße 1, 78727 Oberndorf am Neckar, Germany.',
      abschnitte: [
        { typ: 'kopf', h1: 'Legal notice' },
        {
          typ: 'prosa',
          hinweis: 'Details taken from the email signature, which was cut off after “Managing director:”. Please have HK confirm the complete details.',
          html: `
<h2>Information pursuant to Section 5 DDG</h2>
<p>HK-Präzisionstechnik GmbH<br>Neckarstraße 1<br>78727 Oberndorf am Neckar<br>Germany</p>
<h2>Represented by</h2>
<p>Stefan Kruck, Managing Partner</p>
<h2>Contact</h2>
<p>Phone: {TEL}<br>Fax: {FAX}<br>Email: {MAIL}</p>
<h2>Commercial register</h2>
<p>Register court: Amtsgericht Stuttgart (Stuttgart Local Court)<br>Registration number: HRB 480751</p>
<h2>VAT ID</h2>
<p>VAT identification number pursuant to Section 27a of the German VAT Act: DE 811 567 679</p>`
        }
      ]
    },

    /* ================================================================ PRIVACY */
    datenschutz: {
      name: 'Privacy',
      title: 'Privacy Policy | HK Präzisionstechnik',
      description: 'Privacy policy of HK-Präzisionstechnik GmbH: which data this website processes and what rights you have.',
      abschnitte: [
        { typ: 'kopf', h1: 'Privacy policy' },
        {
          typ: 'prosa',
          hinweis: 'The legally binding text will be supplied by HK or its data protection officer. Below is what this website processes technically – exactly what the policy needs to cover.',
          html: `
<h2>Controller</h2>
<p>HK-Präzisionstechnik GmbH, Neckarstraße 1, 78727 Oberndorf am Neckar, Germany, phone {TEL}, email {MAIL}</p>
<h2>What this website processes</h2>
<ul>
<li><strong>Hosting / server log files:</strong> access data transmitted when the site is called up (IP address, time, browser).</li>
<li><strong>Enquiry tool:</strong> company, name, email, optional phone and project details – to handle your enquiry.</li>
<li><strong>Web analytics:</strong> Matomo without cookies (recommended) or Google Analytics (then with a consent banner).</li>
<li><strong>Videos:</strong> loaded only after a click; until then there is no connection to YouTube.</li>
<li><strong>Fonts:</strong> hosted locally – no connection to Google Fonts.</li>
<li><strong>Maps:</strong> Google Maps only as a link, not embedded.</li>
</ul>
<h2>Your rights</h2>
<p>Access, rectification, erasure, restriction of processing, data portability, objection, and the right to lodge a complaint with a supervisory authority.</p>`
        }
      ]
    },

    /* ================================================================ SCHENK / SCREEN PRINTING MACHINES */
    schenk: {
      name: 'Schenk screen printing machines',
      title: 'Schenk Screen Printing Machines Made in Germany – Beetle, Spider, Octopus',
      description: 'Screen printing machines from Schenk, the inventor of carousel screen printing: precision to 0.025 mm, up to 18 colours, 15–25 years in continuous operation. Get advice now.',
      eigenerKopf: {
        marke: 'Schenk',
        claim: 'Screen printing machines made in Germany',
        nav: [
          { text: 'Models', anker: 'modelle' },
          { text: 'Precision', anker: 'praezision' },
          { text: 'Why Schenk', anker: 'deshalb-schenk' },
          { text: 'About us', anker: 'ueber-schenk' }
        ],
        cta: { text: 'Free consultation', anker: 'beratung' }
      },
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Screen printing machines made in Germany',
          h1: 'Don’t just print – impress, with technology from Schenk.',
          lead: 'Your brand demands more than standard. That’s why high-end brands rely on proven Schenk quality. High productivity, a flexible range of applications and longevity ensure permanently low unit costs.',
          knoepfe: [{ text: 'Request information', seite: 'schenk', extra: '#beratung' }, { text: 'Discover the options', seite: 'schenk', extra: '#modelle', stil: 'rahmen' }],
          bild: { datei: 'hero-schenk.jpg', text: 'Photo: Schenk screen printing machine', alt: 'Schenk carousel screen printing machine' },
          hinweis: 'Separate page with its own menu – per the Miro board not in the HK menu. To be clarified: own domain/website? Schenk logo? Is the page part of the project?'
        },
        {
          typ: 'karten',
          variante: 'vorteile',
          spalten: 4,
          kicker: 'Why Schenk',
          h2: 'Uncompromising – for everyone who wants to set standards in screen printing.',
          liste: [
            { icon: 'check', titel: 'Visible precision', text: 'Less rework & fewer complaints.' },
            { icon: 'check', titel: 'Unit costs', text: 'Longevity, fast set-up & high output.' },
            { icon: 'check', titel: 'Easy operation', text: 'Touchscreen, clear programs, quick to learn.' },
            { icon: 'check', titel: 'Scalable & flexible', text: 'Up to 18 colours, double index, special sizes/shapes/materials.' }
          ]
        },
        {
          typ: 'karten',
          anker: 'modelle',
          stein: true,
          spalten: 3,
          kicker: 'Our models at a glance',
          h2: 'From precise and compact to fully scalable',
          intro: 'Three models – one promise: precision, longevity and efficiency for decades. Whether compact, scalable or for the highest volumes – with Schenk you always choose the benchmark in screen printing.',
          liste: [
            { bild: { datei: 'schenk-beetle.jpg', text: 'Photo: Schenk Beetle', alt: 'Schenk Beetle', format: '16/10' }, tag: 'The compact solution', titel: 'Schenk Beetle', absaetze: ['The Schenk Beetle is the ideal entry into the world of industrial screen printing. Compact, efficient and easy to operate, it is perfect for smaller batch sizes or production with frequent changeovers. Thanks to its slim design it fits easily into your production.', '<strong>Ideal for:</strong> small to medium production environments, textiles, promotional products<br><strong>Strengths:</strong> up to 13 colours, space-saving, easy to operate<br><strong>Special features:</strong> pneumatic lift, robust construction, special sizes possible', '➔ The compact solution for versatile jobs with limited space.'] },
            { bild: { datei: 'schenk-spider.jpg', text: 'Photo: Schenk Spider', alt: 'Schenk Spider', format: '16/10' }, tag: 'The all-rounder', titel: 'Schenk Spider', absaetze: ['The Spider is the high-performance model for companies that want to produce quickly, precisely and flexibly. Ideal for industrial production environments with the highest demands on cycle time, process reliability and future-proofing.', '<strong>Ideal for:</strong> T-shirts, bags, cut pieces, socks<br><strong>Strengths:</strong> compact design, up to 12 colours, easy handling<br><strong>Special features:</strong> double-index option for larger print areas', '➔ The high-performance solution for versatile jobs with limited space.'] },
            { bild: { datei: 'schenk-octopus.jpg', text: 'Photo: Schenk Octopus', alt: 'Schenk Octopus', format: '16/10' }, tag: 'The proven one', titel: 'Schenk Octopus', absaetze: ['For years the Octopus has been the backbone of numerous printing lines that want to combine maximum precision with the highest output. Ideal for large runs, large-format motifs and premium merchandise.', '<strong>Ideal for:</strong> series production, large-format prints, premium merchandise<br><strong>Strengths:</strong> up to 18 colours, up to 26 stations, maximum stability<br><strong>Special features:</strong> double index up to 1100 × 800 mm, expandable & scalable', '➔ The industry standard for leading brand, promotional and merchandise producers in Europe.'] }
          ]
        },
        {
          typ: 'split',
          kicker: 'Download',
          h2: 'Download the product brochure now',
          absaetze: ['All models, options and technical data at a glance.'],
          knoepfe: [{ text: 'Product brochure', seite: 'schenk', extra: '#beratung' }],
          hinweis: 'The brochure (PDF) is still missing – until then the button leads to the consultation section.'
        },
        {
          typ: 'split',
          anker: 'praezision',
          stein: true,
          kicker: 'Precision',
          h2: 'Precision that makes the difference in everyday practice.',
          absaetze: [
            'Schenk printing machines are known for working with a precision of 0.025 mm – a human hair is three times as thick.',
            'In practice this accuracy is even more impressive:'
          ],
          liste: [
            '<strong>A 12-colour motif is perfectly aligned in all positions</strong>, without visible offsets – even on stretch fabrics.',
            '<strong>Fine lines</strong> that fray on less accurate machines stay razor-sharp.',
            'Even after <strong>tens of thousands of print cycles</strong> the registration remains stable – without readjustment.'
          ],
          schluss: [
            '<strong>Schenk precision makes motifs look as if they came from an offset printing line – only on textiles.</strong>',
            'And exactly this effect is why premium brands in Europe still say today: <strong>“If it has to look really good, it’s printed on Schenk.”</strong>'
          ],
          bild: { datei: 'schenk-textil.jpg', text: 'Photo: close-up of printed textile', alt: 'Close-up of a printed textile', unterschrift: 'Close-up of printed textile' }
        },
        {
          typ: 'karten',
          spalten: 3,
          kicker: 'Complete solutions',
          h2: 'From printing to finishing: complete solutions from a single source',
          liste: [
            { bild: { datei: 'schenk-flock.jpg', text: 'Photo: flocking unit', alt: 'Schenk flocking unit', format: '16/10' }, titel: 'Flocking units: 3D feel & premium finishing', text: 'Schenk flocking units enable high-quality flock effects with an even pile. Perfect for adding a tactile upgrade to textiles – compatible, easy to integrate and designed for high volumes.' },
            { bild: { datei: 'schenk-zwischentrockner.jpg', text: 'Photo: flash dryer', alt: 'Infrared flash dryer', format: '16/10' }, titel: 'Flash dryers (IR) – fast, compact, energy-efficient', text: 'Infrared flash dryers shorten process time, stabilise every ink layer and ensure perfect further processing in multi-colour printing, especially for fine motifs.' },
            { bild: { datei: 'schenk-tunneltrockner.jpg', text: 'Photo: tunnel dryer', alt: 'Tunnel dryer', format: '16/10' }, titel: 'Tunnel dryers – maximum curing, minimum scrap', text: 'Infrared or convection: these dryer systems ensure even curing at high speeds. Temperature-stable, durable and designed for continuous industrial use.' }
          ]
        },
        {
          typ: 'karten',
          variante: 'vorteile',
          stein: true,
          kicker: 'Total unit costs',
          h2: 'Schenk: the smart choice for companies investing for the long term',
          intro: 'Schenk printing machines are unbeatable in terms of total unit costs. Because our machines are built to run precisely, quickly and stably for decades.',
          liste: [
            { icon: 'kalender', titel: 'Longevity', text: 'Many Schenk machines have already been running for 25 years in continuous industrial operation.' },
            { icon: 'stabil', titel: 'High reliability', text: 'The robust mechanics prevent unplanned downtime. The result: significantly higher productivity.' },
            { icon: 'ziel', titel: 'Precision = less scrap', text: 'Thanks to 0.025 mm registration accuracy, scrap is well below that of comparable systems.' },
            { icon: 'uhr', titel: 'Fast set-up', text: 'Quick-clamping systems and clear menus reduce set-up times by up to 40 %.' },
            { icon: 'umluft', titel: 'Energy-efficient dryers', text: 'Modern IR/convection systems consume significantly less energy than older systems.' },
            { icon: 'daten', titel: 'Value retention', text: 'Schenk machines are among the few systems that still have a relevant resale value after years.' }
          ],
          nachsatz: '<strong>Looking only at the purchase price saves in the wrong place – looking at unit costs leads to Schenk.</strong>'
        },
        {
          typ: 'split',
          umgekehrt: true,
          kicker: 'Service & support',
          h2: 'Directly from Germany',
          absaetze: ['With Schenk you don’t just get a machine, but a complete production system that runs permanently.'],
          liste: [
            '<strong>Spare parts quickly available</strong> – made in Germany',
            '<strong>Remote support</strong> – fast help with parameters, error patterns or maintenance',
            '<strong>Operator training</strong> – for fast onboarding and stable processes',
            '<strong>Acceptance & quality documents (compliance / CE)</strong> – for your internal standards',
            '<strong>Long-term support</strong> – many customers have worked with the same contact for more than 20 years'
          ],
          bild: { datei: 'schenk-service.jpg', text: 'Photo: service', alt: 'Schenk service technician at a screen printing machine' }
        },
        {
          typ: 'split',
          anker: 'beratung',
          stein: true,
          kicker: 'Get advice now',
          h2: 'Which machine is right for you?',
          absaetze: [
            'In a personal consultation we clarify your requirements, recommend the right machine and calculate both the investment and the long-term unit costs. So you can make a well-founded decision – technically and economically.',
            '<strong>The consultation includes:</strong>'
          ],
          liste: [
            '<strong>Analysis of your requirements</strong> (materials, colours, quantities)',
            '<strong>Recommendation of the right machine</strong> (Beetle, Spider or Octopus)',
            '<strong>Overview of investment costs</strong> incl. options',
            '<strong>TCO calculation:</strong> realistic unit costs over the service life'
          ],
          knoepfe: [{ text: 'Get advice now', seite: 'kontakt', extra: '?bereich=schenk' }],
          bild: { datei: 'schenk-beratung.jpg', text: 'Photo: consultation', alt: 'Consultation on Schenk screen printing machines' }
        },
        {
          typ: 'karten',
          anker: 'deshalb-schenk',
          variante: 'vorteile',
          spalten: 4,
          kicker: 'Why Schenk',
          h2: 'Why screen printing machines from Schenk',
          liste: [
            { icon: 'check', titel: 'From the inventor of carousel screen printing', text: 'By inventing carousel screen printing, Schenk made multi-colour textile printing possible in series.' },
            { icon: 'check', titel: 'Made in Germany', text: 'Development, mechanics, manufacturing and service directly from Germany. Robust, precise, durable.' },
            { icon: 'check', titel: 'Extreme service life', text: 'Many Schenk machines run for 15–25 years in continuous operation – with minimal maintenance intervals.' },
            { icon: 'check', titel: 'Precision to 0.025 mm', text: 'For the finest multi-colour motifs, the highest repeatability and permanently low scrap.' }
          ]
        },
        {
          typ: 'split',
          anker: 'ueber-schenk',
          stein: true,
          kicker: 'About us',
          h2: 'Schenk: where precision has its origin',
          absaetze: [
            'When Schenk developed the first carousel screen printing machine decades ago, textile printing changed worldwide.',
            'For the first time, brands could produce multi-colour motifs with high precision and in large quantities – reliably, repeatably and to industrial standards. This invention made Schenk the pioneer of modern textile screen printing.',
            'The same standard applies to this day: <strong>maximum precision. Maximum service life. Maximum design options.</strong>',
            'That’s why many leading European producers still rely on technology “made in Germany” – built by people who see precision as their craft.'
          ],
          bild: { datei: 'schenk-historie.jpg', text: 'Photo: history', alt: 'Historic Schenk carousel screen printing machine' }
        },
        {
          typ: 'cta',
          kicker: 'Schenk screen printing machines',
          h2: 'Get advice now – which machine is right for you?',
          text: 'We clarify your requirements, recommend the right machine and calculate investment and long-term unit costs.',
          knoepfe: [{ text: 'Get advice now', seite: 'kontakt', extra: '?bereich=schenk' }]
        }
      ]
    }
  }
};
