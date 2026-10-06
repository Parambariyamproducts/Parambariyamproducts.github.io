/* ==========================================================================
   PARAMBARIYAM: CATALOGUE DATA
   This is the only file you need to edit to change products, sizes or prices.

   price: a number in rupees (e.g. 180) shows the price and enables totals.
          null shows "Price on WhatsApp" and the order still works.
   ========================================================================== */

window.SITE = {
  name: "Parambariyam",
  tagline: "Back to our Roots",
  whatsapp: "919841639877",            // primary order line, country code + number, no "+"
  contacts: [
    { name: "Saraunya", phone: "+91 98416 39877", wa: "919841639877" },
    { name: "Sharanya", phone: "+91 98844 55203", wa: "919884455203" }
  ],
  email: "",                           // optional, e.g. "hello@parambariyam.in"
  instagram: "",                       // optional, full URL
  currency: "₹"
};

window.CATEGORIES = [
  { id: "bath", name: "Bath & Skin", ta: "நலங்கு", blurb: "Nalangu maavu and kasthuri manjal, the way paati made them.", img: "assets/img/bath-silver.jpg" },
  { id: "hair", name: "Hair Rituals", ta: "கூந்தல்", blurb: "Shikakai wash and a slow-infused chekku oil.", img: "assets/img/shikakai.jpg" },
  { id: "wellness", name: "Kitchen Wellness", ta: "ஆரோக்கியம்", blurb: "Roasted, pounded, time-tested.", img: "assets/img/digestive.jpg" },
  { id: "heritage", name: "Heritage Vessels", ta: "பாத்திரம்", blurb: "Brass filters and hand-hammered eeyachombu.", img: "assets/img/eeyachombu.jpg" }
];

window.CONCERNS = [
  { id: "glow", name: "Clear, even skin" },
  { id: "acne", name: "Acne-prone skin" },
  { id: "baby", name: "Baby care" },
  { id: "men", name: "For men" },
  { id: "hairfall", name: "Hair fall" },
  { id: "scalp", name: "Gentle cleansing" },
  { id: "digestion", name: "Digestion" },
  { id: "kitchen", name: "Traditional cooking" },
  { id: "gifting", name: "Gifting" }
];

window.INGREDIENTS = {
  "kasthuri-manjal": { ta: "Kasthuri Manjal", en: "Wild turmeric (Curcuma aromatica)", note: "The non-staining, fragrant turmeric of South Indian bathing rituals. Valued for its antiseptic, clarifying nature.", group: "bath", color: "turmeric" },
  "vetiver": { ta: "Vetiver", en: "Khus / ramacham root", note: "A cooling, earthy root that calms the skin and leaves a clean, lingering fragrance.", group: "bath", color: "leaf" },
  "poolan-kizhangu": { ta: "Poolan Kizhangu", en: "White turmeric root", note: "Aromatic root traditionally used for soft, fragrant skin and to keep body odour away.", group: "bath", color: "turmeric" },
  "rose": { ta: "Roja Poo", en: "Rose petals", note: "Sun-dried petals for gentle toning and a soft floral note.", group: "bath", color: "rose" },
  "green-gram": { ta: "Pacha Payaru", en: "Green gram (moong)", note: "The original soap. A mild, protein-rich cleanser that lifts dirt without stripping oils.", group: "bath", color: "leaf" },
  "kadalai-paruppu": { ta: "Kadalai Paruppu", en: "Bengal gram / chana dal", note: "A fine, gentle exfoliant that polishes and brightens.", group: "bath", color: "turmeric" },
  "avarampoo": { ta: "Avarampoo", en: "Tanner's cassia flowers", note: "Golden flowers prized in Tamil homes for cooling the body and evening out skin tone.", group: "bath", color: "turmeric" },
  "badam": { ta: "Badam", en: "Almond", note: "Rich and nourishing, softens delicate baby skin.", group: "bath", color: "rose" },
  "shikakai": { ta: "Seeyakkai", en: "Shikakai pods", note: "The traditional hair cleanser: lathers lightly, cleans without stripping.", group: "hair", color: "leaf" },
  "fenugreek": { ta: "Vendhayam", en: "Fenugreek / methi", note: "Conditions hair, cools the scalp and supports digestion when consumed.", group: "hair", color: "turmeric" },
  "curry-leaves": { ta: "Karuveppilai", en: "Curry leaves", note: "Rich in beta-carotene and protein, a South Indian staple for strong, dark hair.", group: "hair", color: "leaf" },
  "reetha": { ta: "Poochi Kottai", en: "Reetha / soap nuts", note: "Natural saponins that create a soft lather.", group: "hair", color: "turmeric" },
  "hibiscus": { ta: "Chembarathi", en: "Hibiscus flowers and leaves", note: "Mucilage-rich, adds slip and softness, traditionally used against hair fall.", group: "hair", color: "rose" },
  "neem": { ta: "Veppilai", en: "Neem leaves", note: "Keeps the scalp clean and calm.", group: "hair", color: "leaf" },
  "chekku-coconut": { ta: "Chekku Thengai Ennai", en: "Wood-pressed coconut oil", note: "Cold-pressed in a wooden chekku, so nothing is lost to heat.", group: "hair", color: "leaf" },
  "onion": { ta: "Vengayam", en: "Small onion", note: "Sulphur-rich, traditionally used to support hair growth.", group: "hair", color: "rose" },
  "amla": { ta: "Nellikkai", en: "Indian gooseberry", note: "Vitamin C rich, for lustre and strength.", group: "hair", color: "leaf" },
  "kalonji": { ta: "Karunjeeragam", en: "Kalonji / nigella seeds", note: "Black seed, a classic in both hair oils and digestive mixes.", group: "wellness", color: "ink" },
  "castor": { ta: "Vilakkennai", en: "Castor oil", note: "Thick, sealing oil that reduces breakage.", group: "hair", color: "turmeric" },
  "ajwain": { ta: "Omam", en: "Ajwain / carom seeds", note: "The grandmother remedy for a heavy stomach.", group: "wellness", color: "leaf" }
};

window.PRODUCTS = [
  {
    id: "nalangu-maavu",
    name: "Nalangu Maavu",
    ta: "நலங்கு மாவு",
    subtitle: "Herbal bath powder for women & kids",
    category: "bath",
    concerns: ["glow", "acne", "gifting"],
    tags: ["Bestseller", "Zero chemicals"],
    featured: 1,
    images: ["assets/img/bath-jar.jpg", "assets/img/bath-tin.jpg", "assets/img/bath-silver.jpg"],
    short: "Our signature kuliyal podi. Seven hand-picked herbs, sun-dried and finely ground in a home kitchen. Use it in place of soap, as a scrub, or as a face pack.",
    variants: [
      { label: "250 g", note: "Minimum order", price: null },
      { label: "500 g", note: "", price: null }
    ],
    ingredients: ["kasthuri-manjal", "vetiver", "poolan-kizhangu", "rose", "green-gram", "kadalai-paruppu", "avarampoo"],
    benefits: [
      "A soap-free daily cleanser for face and body",
      "Gently exfoliates and leaves skin soft and fragrant",
      "Kasthuri manjal and vetiver keep skin clear and cool",
      "Doubles as a weekly face pack"
    ],
    howTo: [
      "Take a spoonful of powder and mix with water, milk, curd or rose water into a smooth paste.",
      "Apply on damp skin, massage gently in circular motions.",
      "As a face pack, leave on for 10 minutes until semi-dry, then rinse with lukewarm water."
    ],
    care: "Store in an airtight container in a dry place. Always use a dry spoon.",
    caution: "Patch test recommended for sensitive skin."
  },
  {
    id: "baby-bath-powder",
    name: "Baby Bath Powder",
    ta: "குழந்தை குளியல் பொடி",
    subtitle: "For newborns up to 1 year",
    category: "bath",
    concerns: ["baby", "gifting"],
    tags: ["Gentle", "3 ingredients"],
    featured: 3,
    images: ["assets/img/bath-silver.jpg", "assets/img/bath-tin.jpg"],
    short: "Just three things a newborn's skin needs: almond, green gram and chana dal. Nothing else. A soft, soap-free bath for your little one's first year.",
    variants: [
      { label: "250 g", note: "Minimum order", price: null },
      { label: "500 g", note: "", price: null }
    ],
    ingredients: ["badam", "green-gram", "kadalai-paruppu"],
    benefits: [
      "Soap-free and mild on delicate skin",
      "Almond nourishes while the grams gently cleanse",
      "No turmeric, no fragrance, no additives"
    ],
    howTo: [
      "Mix a small quantity with lukewarm water or milk into a thin, smooth paste.",
      "Apply gently all over after the oil massage.",
      "Rinse with lukewarm water and pat dry."
    ],
    care: "Store in an airtight container in a dry place. Always use a dry spoon.",
    caution: "Patch test on a small area first. Avoid contact with eyes."
  },
  {
    id: "mens-bath-powder",
    name: "Bath Powder for Men",
    ta: "ஆண்கள் குளியல் பொடி",
    subtitle: "Curated without kasthuri manjal",
    category: "bath",
    concerns: ["men", "acne"],
    tags: ["For him"],
    featured: 6,
    images: ["assets/img/bath-tin.jpg", "assets/img/bath-jar.jpg"],
    short: "The same sun-dried herbal blend, made without kasthuri manjal for men. A clean, earthy, soap-free bath that cools the body and cuts through grime.",
    variants: [
      { label: "250 g", note: "Minimum order", price: null },
      { label: "500 g", note: "", price: null }
    ],
    ingredients: ["vetiver", "poolan-kizhangu", "rose", "green-gram", "kadalai-paruppu", "avarampoo"],
    benefits: [
      "Replaces soap and face wash",
      "Vetiver keeps the body cool and fresh",
      "Gram flours lift oil and sweat without dryness"
    ],
    howTo: [
      "Mix with water into a paste.",
      "Scrub face and body in circular motions.",
      "Rinse thoroughly."
    ],
    care: "Store in an airtight container in a dry place. Always use a dry spoon.",
    caution: "Patch test recommended."
  },
  {
    id: "kasthuri-manjal",
    name: "Kasthuri Manjal",
    ta: "கஸ்தூரி மஞ்சள்",
    subtitle: "Pure wild turmeric powder",
    category: "bath",
    concerns: ["glow", "acne"],
    tags: ["Single ingredient"],
    featured: 4,
    images: ["assets/img/kasthuri.jpg"],
    short: "Whole kasthuri manjal pieces, sun-dried and pounded to a fine powder. The fragrant, non-staining turmeric South Indian women have bathed with for generations.",
    variants: [
      { label: "Standard pack", note: "", price: null }
    ],
    ingredients: ["kasthuri-manjal"],
    benefits: [
      "Strong antibacterial and antiseptic properties, traditionally used for acne",
      "Regular use is traditionally believed to brighten skin and reduce dark circles",
      "Used over time to reduce fine facial and unwanted body hair"
    ],
    howTo: [
      "Mix with rose water, curd or fresh cream (malai).",
      "Apply as a thin layer on face and body, leave for 10 to 15 minutes.",
      "Rinse with water. Use regularly for best results."
    ],
    care: "Store airtight, away from moisture and sunlight.",
    caution: "Patch test recommended."
  },
  {
    id: "shika-podi",
    name: "Shika Podi",
    ta: "சீயக்காய் பொடி",
    subtitle: "Herbal hair wash powder",
    category: "hair",
    concerns: ["scalp", "hairfall"],
    tags: ["Bestseller", "11 herbs"],
    featured: 2,
    images: ["assets/img/shikakai.jpg"],
    short: "Eleven herbs, one ritual. Shikakai, hibiscus, curry leaves, reetha and more, ground together for a shampoo-free wash that leaves hair clean, soft and strong.",
    variants: [
      { label: "Standard pack", note: "", price: null }
    ],
    ingredients: ["shikakai", "fenugreek", "green-gram", "curry-leaves", "reetha", "hibiscus", "rose", "poolan-kizhangu", "vetiver", "neem"],
    benefits: [
      "Cleanses without stripping natural oils",
      "Hibiscus and fenugreek condition as they clean",
      "Neem and vetiver keep the scalp calm and cool",
      "A chemical-free alternative to shampoo"
    ],
    howTo: [
      "Take the required quantity and mix with water until it becomes a thick paste.",
      "Let it soak for 10 to 20 minutes.",
      "Wet your hair, scrub the paste in well and rinse with water."
    ],
    care: "Keep in a dry place. Never take powder from the pack with wet hands.",
    caution: ""
  },
  {
    id: "hair-oil",
    name: "Onion, Curry Leaf & Amla Hair Oil",
    ta: "மூலிகை கூந்தல் எண்ணெய்",
    subtitle: "In wood-pressed coconut oil",
    category: "hair",
    concerns: ["hairfall"],
    tags: ["Bestseller", "Cold-pressed base"],
    featured: 1.5,
    images: ["assets/img/hair-oil.jpg", "assets/img/range.jpg"],
    short: "Chekku coconut oil slow-infused with small onion, amla, curry leaves, kalonji and methi, finished with almond and castor oil. Made for hair fall and breakage.",
    variants: [
      { label: "Standard bottle", note: "", price: null }
    ],
    ingredients: ["chekku-coconut", "onion", "amla", "curry-leaves", "kalonji", "fenugreek", "badam", "castor"],
    benefits: [
      "Helps reduce hair fall",
      "Supports healthy hair growth",
      "Nourishes the scalp and lengths",
      "Minimises breakage"
    ],
    howTo: [
      "Warm a little oil (never boil).",
      "Massage into the scalp with fingertips and work through the lengths.",
      "Leave for at least an hour, or overnight, and wash with Shika Podi."
    ],
    care: "Store away from direct sunlight. Coconut oil may solidify in winter; stand the bottle in warm water.",
    caution: "Patch test recommended."
  },
  {
    id: "digestive-podi",
    name: "Vendhayam, Omam & Karunjeeragam Podi",
    ta: "வெந்தயம் ஓமம் கருஞ்சீரகம் பொடி",
    subtitle: "Methi, ajwain & kalonji for digestion",
    category: "wellness",
    concerns: ["digestion"],
    tags: ["Dry-roasted"],
    featured: 5,
    images: ["assets/img/digestive.jpg", "assets/img/digestive-pack.jpg"],
    short: "The three seeds every Tamil kitchen keeps for a heavy stomach, dry-roasted in the right ratio and pounded fine. Quarter teaspoon after dinner, warm water to follow.",
    variants: [
      { label: "Standard pack", note: "", price: null }
    ],
    ingredients: ["fenugreek", "ajwain", "kalonji"],
    benefits: [
      "Traditionally taken to aid digestion and relieve constipation",
      "Used in home remedies to help the body flush out toxins",
      "Traditionally believed to support healthy blood sugar and blood pressure",
      "Supports overall immunity"
    ],
    howTo: [
      "Take a quarter teaspoon of the powder and consume directly.",
      "Follow with a glass of warm water.",
      "Best taken after dinner. Use regularly for best results."
    ],
    care: "Store airtight in a cool, dry place.",
    caution: "Not advisable for pregnant or breastfeeding women, or women trying to conceive. If you are on medication for diabetes or blood pressure, check with your doctor first."
  },
  {
    id: "brass-filter-davara",
    name: "Brass Coffee Filter & Davara Tumbler",
    ta: "பித்தளை காபி பில்டர்",
    subtitle: "Authentic South Indian filter coffee set",
    category: "heritage",
    concerns: ["kitchen", "gifting"],
    tags: ["Gift favourite"],
    featured: 2.5,
    images: ["assets/img/filter-set.jpg", "assets/img/filter-pair.jpg"],
    short: "A proper brass filter for a proper decoction, with a matching davara tumbler set. The way filter coffee was meant to be made, poured and cooled.",
    variants: [
      { label: "Small filter", note: "", price: null },
      { label: "Large filter", note: "", price: null }
    ],
    ingredients: [],
    benefits: [
      "Solid brass that holds heat for a richer decoction",
      "Classic davara and tumbler for the pour and froth",
      "Ages beautifully, a lifetime piece and a thoughtful gift"
    ],
    howTo: [
      "Add coffee powder to the upper chamber and press lightly with the plunger.",
      "Pour hot water just off the boil, cover and let it drip for 15 to 20 minutes.",
      "Mix decoction with hot milk and sugar, then pour between davara and tumbler to froth."
    ],
    care: "Wash with tamarind or a mild lemon wash to restore shine. Dry fully before storing.",
    caution: ""
  },
  {
    id: "eeyachombu",
    name: "Eeyachombu",
    ta: "ஈயச்சொம்பு",
    subtitle: "Hand-crafted tin rasam pot from Kumbakonam",
    category: "heritage",
    concerns: ["kitchen", "gifting"],
    tags: ["Artisan made", "Lead-free"],
    featured: 3.5,
    images: ["assets/img/eeyachombu.jpg"],
    short: "Hand-hammered by artisans of Kumbakonam in pure vellieeyam (tin). Ask any paati: rasam simply tastes better in an eeyachombu.",
    variants: [
      { label: "500 g", note: "≈ 700 ml", price: null },
      { label: "600 g", note: "≈ 1000 ml", price: null },
      { label: "700 g", note: "≈ 1200 ml", price: null },
      { label: "800 g", note: "≈ 1450 ml", price: null }
    ],
    ingredients: [],
    benefits: [
      "Pure tin (vellieeyam), a metal by itself, contains no lead",
      "Heavy because it is solid metal, hand-crafted and hand-hammered",
      "Available in various shapes on request"
    ],
    howTo: [
      "Always fill with water or puli thanni (tamarind water) before switching on the stove. Never heat it empty, it can melt immediately.",
      "Cook only on low to medium heat.",
      "Lift only with a thick kitchen cloth. Do not use tongs or idukki."
    ],
    care: "Wash gently and dry immediately. Never place on a flame without liquid.",
    caution: "Tin has a low melting point. Never heat empty and never use on high flame."
  }
];
