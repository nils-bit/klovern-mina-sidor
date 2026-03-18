// Klövern Mina Sidor - All Mock Data
const MOCK_DATA = {
  user: {
    name: "Anna Lindström",
    email: "anna.lindstrom@email.se",
    apartment: "Lgh 1204",
    project: "Kv. Solsidan",
    address: "Solsidansvägen 12, Lgh 1204",
    postalCode: "131 52 Nacka",
    moveInDate: "2026-06-01",
    daysUntilMoveIn: 75,
    purchasePrice: "4 250 000 kr",
    rooms: "3 rum och kök",
    size: "78 m²",
    floor: "Våning 4",
    brf: "BRF Solsidan",
    monthlyFee: "3 850 kr/mån"
  },

  timeline: [
    { label: "Kontraktsskrivning", status: "done", date: "2025-09-15" },
    { label: "Tillval", status: "done", date: "2025-11-30" },
    { label: "Byggnation", status: "active", progress: 68 },
    { label: "Slutbesiktning", status: "upcoming", date: "2026-05-15" },
    { label: "Inflyttning", status: "upcoming", date: "2026-06-01" }
  ],

  stats: {
    daysLeft: 75,
    openCases: 1,
    documents: 12,
    newOffers: 3
  },

  recentActivity: [
    { text: "Nytt dokument: Slutbesiktningsprotokoll", time: "2 dagar sedan", icon: "file-text", link: "min-bostad.html" },
    { text: "Ärende uppdaterat: Fläkt i badrum", time: "3 dagar sedan", icon: "wrench", link: "min-portvakt.html" },
    { text: "Ny artikel: 5 tips för din nya balkong", time: "5 dagar sedan", icon: "lightbulb", link: "min-kompis.html" },
    { text: "Erbjudande: 15% rabatt hos IKEA", time: "1 vecka sedan", icon: "tag", link: "mina-erbjudanden.html" },
    { text: "Bygguppdatering: Fasaden klar", time: "2 veckor sedan", icon: "building", link: "min-kompis.html" }
  ],

  upcomingEvents: [
    { title: "Nyckelutlämning", date: "1 juni 2026", time: "10:00", location: "Klövern Nacka kontor" },
    { title: "Inflyttningsdag", date: "1 juni 2026", time: "12:00-18:00", location: "Kv. Solsidan" },
    { title: "BRF Årsstämma", date: "15 april 2026", time: "18:30", location: "Festlokalen" }
  ],

  documents: [
    { name: "Köpeavtal", type: "Avtal", date: "2025-09-15", format: "PDF" },
    { name: "Planritning Lgh 1204", type: "Ritning", date: "2025-09-15", format: "PDF" },
    { name: "Slutbesiktningsprotokoll", type: "Protokoll", date: "2026-03-10", format: "PDF" },
    { name: "Energideklaration", type: "Deklaration", date: "2026-02-28", format: "PDF" },
    { name: "Garantibevis vitvaror", type: "Garanti", date: "2026-03-01", format: "PDF" },
    { name: "Stadgar BRF Solsidan", type: "BRF", date: "2025-06-01", format: "PDF" },
    { name: "Årsredovisning 2025", type: "BRF", date: "2026-02-15", format: "PDF" },
    { name: "Underhållsplan", type: "BRF", date: "2025-12-01", format: "PDF" },
    { name: "Brandskyddsinformation", type: "Information", date: "2025-10-01", format: "PDF" },
    { name: "Ordningsregler", type: "Information", date: "2025-06-01", format: "PDF" },
    { name: "Tvättstugeregler", type: "Information", date: "2025-06-01", format: "PDF" },
    { name: "Sopsorteringsguide", type: "Information", date: "2025-06-01", format: "PDF" }
  ],

  tillval: [
    { name: "Ekparkett premium", price: "12 500 kr", status: "confirmed", category: "Golv" },
    { name: "Kakel Carrara marmor", price: "8 200 kr", status: "confirmed", category: "Badrum" },
    { name: "Extra eluttag kök", price: "2 400 kr", status: "confirmed", category: "El" },
    { name: "Spotlights hall", price: "3 800 kr", status: "confirmed", category: "El" },
    { name: "Uppgraderad köksblandare", price: "1 950 kr", status: "confirmed", category: "Kök" }
  ],

  brfBoard: [
    { name: "Maria Eriksson", role: "Ordförande" },
    { name: "Johan Andersson", role: "Kassör" },
    { name: "Sofia Bergström", role: "Sekreterare" },
    { name: "Peter Nilsson", role: "Ledamot" }
  ],

  bookableSpaces: [
    { name: "Festlokal", status: "available", info: "Max 30 personer, kök ingår" },
    { name: "Gästlägenhet", status: "booked", info: "Bokad 15-17 maj", bookedBy: "Lgh 0803" },
    { name: "Bastu", status: "available", info: "Max 6 personer, boka 2h-pass" },
    { name: "Tvättstuga 1", status: "available", info: "Maskin 1-3, torktumlare" },
    { name: "Cykelverkstad", status: "available", info: "Verktyg och pump finns" }
  ],

  articles: [
    { title: "5 tips för att inreda ett litet vardagsrum", category: "Inredning", excerpt: "Maximera känslan av rymd med smarta möbelval och ljussättning som gör underverk i kompakta utrymmen.", image: "article-1.jpg", date: "2026-03-15" },
    { title: "Hållbart boende – så minskar du ditt avtryck", category: "Hållbarhet", excerpt: "Enkla vardagsvanor som gör stor skillnad för miljön utan att tumma på bekvämligheten.", image: "article-2.jpg", date: "2026-03-10" },
    { title: "Smarta förvaringslösningar för hallen", category: "Smarta lösningar", excerpt: "Från dolda krokar till multifunktionella möbler – så skapar du en välkomnande och organiserad hall.", image: "article-3.jpg", date: "2026-03-05" },
    { title: "Bygget vecka 12: Fasaden tar form", category: "Bygget", excerpt: "Fasadarbetet på Kv. Solsidan fortskrider enligt plan. Här är de senaste bilderna från byggplatsen.", image: "article-4.jpg", date: "2026-03-01" },
    { title: "Välj rätt belysning för varje rum", category: "Inredning", excerpt: "En guide till hur du skapar rätt stämning med belysning – från funktionellt köksljus till mysig hörna.", image: "article-5.jpg", date: "2026-02-25" },
    { title: "Balkongen som extra rum – så gör du", category: "Inredning", excerpt: "Förvandla balkongen till ditt favoritrum med rätt växter, möbler och textilier.", image: "article-6.jpg", date: "2026-02-20" }
  ],

  checklist: {
    beforeMove: [
      { text: "Säg upp nuvarande bostad", done: true },
      { text: "Teckna hemförsäkring", done: true },
      { text: "Anmäl adressändring", done: true },
      { text: "Beställ flyttkartonger", done: true },
      { text: "Boka flyttfirma", done: false },
      { text: "Packa rum för rum", done: false },
      { text: "Anmäl el och bredband", done: true },
      { text: "Ordna parkering för flyttbil", done: true }
    ],
    moveDay: [
      { text: "Hämta nycklar (kl 10:00, Klövern kontor)", done: false },
      { text: "Dokumentera lägenheten vid inflyttning", done: false },
      { text: "Kontrollera vitvaror", done: false },
      { text: "Testa vatten och el", done: false },
      { text: "Fotografera mätarställningar", done: false }
    ],
    afterMove: [
      { text: "Uppackning av nödlåda", done: false },
      { text: "Grannhälsning", done: false },
      { text: "Registrera dig i BRF-portalen", done: false },
      { text: "Boka tid för garagepass", done: false },
      { text: "Slutbesiktning uppföljning", done: false }
    ]
  },

  keyInfo: {
    keyPickup: { date: "1 juni 2026", time: "10:00", location: "Klövern Nacka kontor", address: "Stationsvägen 5, Nacka" },
    moveSlots: [
      { time: "09:00–12:00", available: true },
      { time: "12:00–15:00", available: true, selected: true },
      { time: "15:00–18:00", available: false }
    ],
    elevator: { date: "1 juni", time: "08:00–18:00", status: "Bekräftad" },
    parking: { spot: "Plats P4", status: "Bekräftad" }
  },

  offers: [
    { title: "15% rabatt hos IKEA", partner: "IKEA", code: "KLOVERN15", expiry: "2026-08-31", category: "Inredning", description: "Gäller hela sortimentet i butik och online." },
    { title: "10% på inredning hos Ellos Home", partner: "Ellos Home", code: "SOLSIDAN10", expiry: "2026-07-31", category: "Inredning", description: "Gäller möbler, textilier och belysning." },
    { title: "Gratis hemstädning vid inflyttning", partner: "Hemfrid", code: null, expiry: "2026-06-30", category: "Hemtjänster", description: "En kostnadsfri hemstädning vid inflyttning i din nya bostad." },
    { title: "20% på första leveransen", partner: "MatHem", code: "KLOVERN20", expiry: "2026-09-30", category: "Lokalt", description: "Beställ matkasse med hemleverans till rabattpris." },
    { title: "2-för-1 på fika", partner: "Café Solsidan", code: null, expiry: "2026-12-31", category: "Lokalt", description: "Visa upp din Klövern-boende QR-kod vid kassan." },
    { title: "Flyttstädning från 1 990 kr", partner: "Städarna", code: null, expiry: "2026-06-30", category: "Hemtjänster", description: "Professionell flyttstädning med nöjd-kund-garanti." }
  ],

  shopProducts: [
    { id: 1, name: "Klövern Presentkort", price: 500, description: "Digitalt presentkort att ge bort till en granne.", image: "product-1.jpg" },
    { id: 2, name: "Välkomstpaket Hemmakväll", price: 349, description: "Ljus, snacks och en filt – perfekt första kvällen.", image: "product-2.jpg" },
    { id: 3, name: "Balkongmöbelset", price: 2495, description: "Bord och två stolar i akacia, perfekt för balkongen.", image: "product-3.jpg" },
    { id: 4, name: "Smarthempaket Basic", price: 1295, description: "Smarta lampor, kontakter och hub för ditt nya hem.", image: "product-4.jpg" },
    { id: 5, name: "Dörrskylt Personlig", price: 249, description: "Graverad dörrskylt i borstad aluminium.", image: "product-5.jpg" },
    { id: 6, name: "Blomsterlåda Balkong", price: 179, description: "Självbevattande blomsterlåda i antracitgrå.", image: "product-6.jpg" }
  ],

  cases: [
    { id: "2026-0038", title: "Fläkt i badrum bullrar", status: "in_progress", statusText: "Under behandling", category: "VVS", created: "2026-03-10", contact: "Erik Svensson", lastUpdate: "Tekniker bokad 2026-03-20" },
    { id: "2026-0031", title: "Repa i parkettgolv", status: "resolved", statusText: "Åtgärdad", category: "Ytskikt", created: "2026-02-15", contact: "Erik Svensson", resolved: "2026-02-28" }
  ],

  warranties: [
    { product: "Diskmaskin Bosch", supplier: "Bosch", period: "5 år", expires: "2031-06-01" },
    { product: "Kyl/Frys Samsung", supplier: "Samsung", period: "3 år", expires: "2029-06-01" },
    { product: "Tvättmaskin Electrolux", supplier: "Electrolux", period: "5 år", expires: "2031-06-01" },
    { product: "Parkettgolv Kährs", supplier: "Kährs", period: "25 år", expires: "2051-06-01" },
    { product: "Köksblandare Mora", supplier: "Mora Armatur", period: "10 år", expires: "2036-06-01" }
  ],

  energy: {
    class: "B",
    monthly: [
      { month: "Jan", kwh: 310 },
      { month: "Feb", kwh: 275 },
      { month: "Mar", kwh: 245 }
    ],
    average: 290,
    co2: 12
  },

  contactPerson: {
    name: "Erik Svensson",
    title: "Fastighetsförvaltare",
    email: "erik.svensson@klovern.se",
    phone: "08-123 45 67"
  },

  bulletinPosts: [
    { title: "Gemensam grillkväll 20 juni", author: "Styrelsen", time: "2 dagar sedan", category: "Aktiviteter", content: "Välkomna till sommarens första grillkväll på innergården! Ta med något att grilla, dryck finns." },
    { title: "Söker barnvakt fredagar", author: "Familjen i Lgh 0803", time: "4 dagar sedan", category: "Övrigt", content: "Vi söker barnvakt till våra två barn (3 och 6 år) varannan fredag kväll." },
    { title: "Skänkes: Bokhylla IKEA Billy", author: "Lgh 1102", time: "1 vecka sedan", category: "Säljes/Skänkes", content: "Vit Billy-bokhylla i gott skick. Hämtas i källaren. Kontakta mig via appen." },
    { title: "Yoga på innergården – onsdagar kl 18", author: "Anna K, Lgh 0501", time: "1 vecka sedan", category: "Aktiviteter", content: "Jag håller yogapass varje onsdag. Alla nivåer välkomna! Ta med egen matta." },
    { title: "OBS: Hissunderhåll 25 mars", author: "Förvaltningen", time: "2 veckor sedan", category: "Information", content: "Hissen kommer vara ur drift mellan 08:00-12:00 den 25 mars pga planerat underhåll." },
    { title: "Loppis i gården 5 april", author: "Styrelsen", time: "3 veckor sedan", category: "Aktiviteter", content: "Anmäl er till loppisen via anslagstavlan i entrén. Max ett bord per lägenhet." }
  ],

  localGuide: [
    { name: "ICA Kvantum Nacka", type: "Mataffär", distance: "350m", note: null },
    { name: "Café Solsidan", type: "Café", distance: "150m", note: "10% rabatt för Klövern-boende" },
    { name: "Nacka Gymnasium", type: "Skola", distance: "600m", note: null },
    { name: "Vårdcentral Nacka", type: "Vård", distance: "800m", note: "Drop-in mån-fre 08-10" },
    { name: "Buss 401 (hållplats)", type: "Kollektivtrafik", distance: "200m", note: "Till Slussen, var 10 min" },
    { name: "Nacka Forum", type: "Shopping", distance: "1,2 km", note: "Butiker, restauranger, bio" }
  ],

  communityEvents: [
    { title: "BRF Årsstämma", date: "15 april 2026", time: "18:30", location: "Festlokalen" },
    { title: "Gemensam städdag", date: "3 maj 2026", time: "10:00", location: "Innergården" },
    { title: "Grillkväll", date: "20 juni 2026", time: "17:00", location: "Innergården" },
    { title: "Sommarfest", date: "21 juni 2026", time: "15:00", location: "Innergården" }
  ]
};
