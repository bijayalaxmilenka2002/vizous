// Vizous Interio - Comprehensive Real Data Catalog
// Extracted and curated from https://vizous.in/

export const COMPANY_INFO = {
  name: "Vizous Interio Private Limited",
  brandName: "Vizous",
  tagline: "Exploring Frontiers",
  subTagline: "Kitchens | Wardrobes | Home Furnitures",
  pitch: "Designing Spaces, Defining Dreams.",
  description: "Vizous Interio is the leading home interior design company and modular furniture manufacturer in Bhubaneswar with 15+ years of craft excellence. We create custom modular kitchens, bespoke wardrobes, ergonomic office workstations, and luxury home interiors with an in-house 15,000+ sq.ft factory.",
  experienceYears: 15,
  happyHomes: "3,000+",
  warrantyYears: 10,
  deliveryDays: 45,
  phones: [
    { label: "Bhubaneswar Showroom", number: "+91 90400 87614", clean: "919040087614" },
    { label: "Customer Care", number: "+91 95892 77465", clean: "919589277465" },
    { label: "Raipur Branch", number: "+91 98932 18906", clean: "919893218906" }
  ],
  email: "info@vizous.in",
  locations: [
    {
      type: "Corporate Showroom & Experience Centre",
      city: "Bhubaneswar",
      address: "1st Floor, Laxmi Sagar Square, Plot 301/1516, Cuttack Rd, Near Sunshine Hospital, Budheswari Colony, Laxmisagar, Bhubaneswar, Odisha 751006",
      timings: "Mon - Sat: 10:00 AM – 8:00 PM (Only 3rd Sunday Closed)",
      mapQuery: "Vizous+Interio+Laxmi+Sagar+Bhubaneswar"
    },
    {
      type: "Modern Manufacturing Plant & Factory",
      city: "Bhubaneswar",
      address: "Plot #12, Bhagabanpur Industrial Estate, Patrapada, Bhubaneswar-751019, Odisha, India",
      timings: "Mon - Sat: 9:00 AM – 6:30 PM",
      mapQuery: "Bhagabanpur+Industrial+Estate+Patrapada+Bhubaneswar"
    },
    {
      type: "Branch Office & Studio",
      city: "Raipur",
      address: "Khasara # 801/8, Bhawna Nagar, Kachna Road, Near Durga Mandir, Raipur, Chhattisgarh, India 492007",
      timings: "Mon - Sat: 10:00 AM – 7:30 PM",
      mapQuery: "Bhawna+Nagar+Kachna+Road+Raipur"
    }
  ],
  socials: {
    facebook: "https://www.facebook.com/vizous",
    instagram: "https://www.instagram.com/vizousinteriopvtltd/",
    youtube: "https://www.youtube.com/@vizousinterio3422",
    linkedin: "https://www.linkedin.com/company/vizous-interio-private-limited/"
  }
};

export const VALUE_PROPOSITIONS = [
  {
    id: "warranty",
    icon: "shield-check",
    title: "10-Year Warranty",
    subtitle: "Active Service Support",
    desc: "Every modular kitchen and wardrobe is engineered with BWP marine-grade plywood and premium hardware, backed by our 10-year hassle-free warranty."
  },
  {
    id: "delivery",
    icon: "truck-fast",
    title: "45-Day Handover",
    subtitle: "Fastest in Industry",
    desc: "Streamlined precision manufacturing and dedicated project managers ensure guaranteed on-time installation with zero handover delays."
  },
  {
    id: "factory",
    icon: "factory",
    title: "In-House Manufacturing",
    subtitle: "Bhagabanpur Plant",
    desc: "Direct-from-factory pricing with German CNC precision machinery, eliminating middlemen markups and ensuring top-notch build quality."
  },
  {
    id: "customization",
    icon: "ruler-combined",
    title: "100% Bespoke Design",
    subtitle: "Tailored to Your Space",
    desc: "From compact modern apartments to sprawling villas, our certified architects design personalized 3D layouts tailored to your exact floor plan."
  },
  {
    id: "payment",
    icon: "credit-card",
    title: "Flexible Payment & EMI",
    subtitle: "Zero-Cost EMI Plans",
    desc: "Transform your home with low monthly payments, flexible milestone-based billing, and hassle-free instant interior loan assistance."
  },
  {
    id: "installation",
    icon: "users-gear",
    title: "In-House Specialists",
    subtitle: "Trained Craftsmen",
    desc: "Installed only by trained, full-time Vizous installation engineers with clean, dust-free vacuum assembly for pristine finishes."
  }
];

export const CATEGORIES = [
  {
    id: "modular-kitchen",
    name: "Modular Kitchen",
    slug: "modular-kitchen",
    tagline: "Ergonomic, Stain-Proof & Elegant Culinary Spaces",
    heroImage: "assets/images/modular_kitchen_1.jpg",
    badge: "Most Popular",
    count: 6
  },
  {
    id: "wardrobes",
    name: "Wardrobes",
    slug: "wardrobes",
    tagline: "Bespoke Storage Sanctuary for Master Bedrooms",
    heroImage: "assets/images/wardrobes_1.jpg",
    badge: "Custom Fit",
    count: 4
  },
  {
    id: "beds",
    name: "Luxury Beds",
    slug: "beds",
    tagline: "King & Queen Beds with Hydraulic Storage",
    heroImage: "assets/images/beds_1.jpg",
    badge: "Ergonomic",
    count: 6
  },
  {
    id: "office-furniture",
    name: "Office Furniture",
    slug: "office-furniture",
    tagline: "Executive Desks, Workstations & Boardrooms",
    heroImage: "assets/images/office_furniture_1.jpg",
    badge: "Commercial Grade",
    count: 6
  },
  {
    id: "modular-furniture",
    name: "Modular Furniture",
    slug: "modular-furniture",
    tagline: "TV Consoles, Crockery Cabinets & Mandir Units",
    heroImage: "assets/images/modular_furniture_1.jpg",
    badge: "Living Spaces",
    count: 6
  },
  {
    id: "home-decor",
    name: "Home Decor",
    slug: "home-decor",
    tagline: "Wall Panelling, False Ceilings & Wood Floors",
    heroImage: "assets/images/home_decor_1.jpg",
    badge: "Atmosphere",
    count: 3
  }
];

export const PRODUCTS = [
  // --- MODULAR KITCHENS ---
  {
    id: "mk-l-shaped",
    category: "modular-kitchen",
    title: "L-Shaped Modular Kitchen",
    priceRange: "₹1,45,000 - ₹3,80,000",
    estTime: "25-35 Days",
    rating: 4.9,
    reviewsCount: 142,
    badge: "Bestseller",
    image: "assets/images/modular_kitchen_1.jpg",
    gallery: [
      "assets/images/modular_kitchen_1.jpg",
      "assets/images/modular_kitchen_2.jpg",
      "assets/images/modular_kitchen_5.jpg"
    ],
    shortDesc: "Keeps everything within easy reach with ergonomic triangle workflow, smart corner carousels, and dual-tone acrylic finishes.",
    fullDesc: "Create a kitchen that keeps everything within easy reach. Our L-shape Modular Kitchen in Bhubaneswar blends ergonomic flow with smart corner carousel units and sleek finishes. Perfect for small to medium homes, maximizing corner space and providing ample countertop area.",
    features: [
      "Optimum golden work triangle (Sink, Hob, Refrigerator)",
      "BWP Grade 710 Marine Ply with boiling water resistance",
      "German Hettich soft-close tandem drawers",
      "Magic corner carousel for 100% blind corner utilization",
      "Heat & scratch resistant high-gloss acrylic shutters"
    ],
    finishes: ["High Gloss Acrylic", "German PU Matte", "Textured Laminate", "Fluted Glass"],
    specs: {
      "Base Material": "IS:710 Marine Grade BWP Plywood",
      "Hardware": "Hettich / Blum Soft Close",
      "Countertop Compat": "Quartz, Nano White, Granite",
      "Warranty": "10 Years Structural Warranty"
    }
  },
  {
    id: "mk-u-shaped",
    category: "modular-kitchen",
    title: "U-Shaped Modular Kitchen",
    priceRange: "₹2₹0,000 - ₹5,20,000",
    estTime: "30-40 Days",
    rating: 4.9,
    reviewsCount: 98,
    badge: "High Storage",
    image: "assets/images/modular_kitchen_2.jpg",
    gallery: [
      "assets/images/modular_kitchen_2.jpg",
      "assets/images/modular_kitchen_3.jpg",
      "assets/images/modular_kitchen_7.jpg"
    ],
    shortDesc: "Expansive three-wall configuration offering generous prep space, dual corner pull-outs, and dedicated pantry towers.",
    fullDesc: "A U-shape Modular Kitchen in Bhubaneswar offers generous workspace and storage on three sides, making it an ideal choice for passionate cooks and larger families. Keeps food preparation, cooking, and cleanup areas distinctly organized.",
    features: [
      "Continuous three-sided countertop workspace",
      "Built-in tall pantry unit with wire basket pull-outs",
      "Under-cabinet warm ambient LED profile lighting",
      "Integrated microwave and built-in oven microwave cabinets",
      "Double bowl granite composite sink space"
    ],
    finishes: ["Anti-Fingerprint PU Matte", "Lacquered Glass", "Synchronized Woodgrains"],
    specs: {
      "Base Material": "BWP Calibrated Marine Ply",
      "Drawer Slides": "Quadro Soft-Close Concealed",
      "Shutters": "18mm High-Pressure Laminate / Acrylic",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "mk-island",
    category: "modular-kitchen",
    title: "Island Luxury Kitchen",
    priceRange: "₹2,95,000 - ₹7,50,000",
    estTime: "35-45 Days",
    rating: 5.0,
    reviewsCount: 86,
    badge: "Luxury Villa",
    image: "assets/images/modular_kitchen_3.jpg",
    gallery: [
      "assets/images/modular_kitchen_3.jpg",
      "assets/images/modular_kitchen_4.jpg",
      "assets/images/modular_kitchen_8.jpg"
    ],
    shortDesc: "The centerpiece of open-concept homes featuring a multifunction island with breakfast bar counter and hanging chimney.",
    fullDesc: "Our Island Modular Kitchen design turns the cooking area into a social hub. Featuring a freestanding island with built-in hob, overhang breakfast counter, and integrated storage drawers for casual family dining and entertaining.",
    features: [
      "Freestanding central prep & breakfast bar counter",
      "Overhead designer ceiling chimney with spotlighting",
      "Wine rack & open display shelving integration",
      "Soft-closing touch-to-open servo-drive cabinets",
      "Seamless waterfall edge quartz stone finish"
    ],
    finishes: ["PU Satin Paint", "Ceramic Porcelain", "Natural Veneer Accents"],
    specs: {
      "Island Size": "Custom (6ft to 10ft)",
      "Hardware": "Blum Legrabox / Hettich InnoTech",
      "Warranty": "10 Years Full Warranty"
    }
  },
  {
    id: "mk-parallel",
    category: "modular-kitchen",
    title: "Parallel / Galley Modular Kitchen",
    priceRange: "₹1,65,000 - ₹3,90,000",
    estTime: "25-35 Days",
    rating: 4.8,
    reviewsCount: 64,
    badge: "Chef Choice",
    image: "assets/images/modular_kitchen_4.jpg",
    gallery: [
      "assets/images/modular_kitchen_4.jpg",
      "assets/images/modular_kitchen_9.jpg"
    ],
    shortDesc: "Dual parallel countertops separating wet and dry zones, offering maximum counter area and zero wasted corners.",
    fullDesc: "Parallel Modular Kitchens are favored by professional chefs for their hyper-efficient corridor layout. Separates wet prep tasks from high-heat cooking zones seamlessly with opposing countertops.",
    features: [
      "Clear separation of wet washing and dry cooking zones",
      "Zero wasted corner space, 100% accessible cabinetry",
      "Dual-side upper overhead storage with lift-up bi-fold shutters",
      "Easy maintenance and effortless cleaning clearance"
    ],
    finishes: ["High Gloss Acrylic", "Matte Laminate", "Fluted Glass"],
    specs: {
      "Base Material": "Marine Grade BWP Ply",
      "Lift-Up Fittings": "Blum Aventos HF Bi-fold",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "mk-straight",
    category: "modular-kitchen",
    title: "Straight Modular Kitchen",
    priceRange: "₹95,000 - ₹2,40,000",
    estTime: "20-30 Days",
    rating: 4.7,
    reviewsCount: 52,
    badge: "Compact Studio",
    image: "assets/images/modular_kitchen_5.jpg",
    gallery: [
      "assets/images/modular_kitchen_5.jpg",
      "assets/images/modular_kitchen_10.jpg"
    ],
    shortDesc: "Streamlined single-wall design built for compact modern apartments, holiday homes, and studio lofts.",
    fullDesc: "Simple, efficient, and space-saving, our Straight Modular Kitchen in Bhubaneswar keeps all culinary functions aligned against one wall without occupying precious living square footage.",
    features: [
      "Linear streamlined layout saving floor space",
      "Vertical ceiling-height overhead lofts for maximum storage",
      "Built-in cutlery, spice pull-out, and bottle racks",
      "Budget-friendly without sacrificing material durability"
    ],
    finishes: ["Textured Woodgrain", "Acrylic", "Matte UV"],
    specs: {
      "Base Material": "BWP Marine Ply",
      "Edge Banding": "Rehau 2mm Zero-Joint Edgeband",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "mk-peninsular",
    category: "modular-kitchen",
    title: "Peninsular Modular Kitchen",
    priceRange: "₹2,20,000 - ₹4,80,000",
    estTime: "30-40 Days",
    rating: 4.8,
    reviewsCount: 43,
    badge: "Open Living",
    image: "assets/images/modular_kitchen_6.jpeg",
    gallery: [
      "assets/images/modular_kitchen_6.jpeg",
      "assets/images/modular_kitchen_1.jpg"
    ],
    shortDesc: "Connected island extension that doubles as a stylish room divider and intimate 2-seater breakfast counter.",
    fullDesc: "The Peninsular layout gives you the luxury of an island even when room dimensions don't permit a freestanding central unit. Anchored to a wall, it gracefully demarcates the kitchen from the living lounge.",
    features: [
      "Attached breakfast bar serving as subtle room partition",
      "Generous under-counter crockery storage",
      "Corner carousel and rolling shutter appliance garage",
      "Seamless transition into dining room interiors"
    ],
    finishes: ["Super Matte Acrylic", "Warm Walnut Veneer"],
    specs: {
      "Base Material": "BWP Marine Plywood",
      "Warranty": "10 Years Warranty"
    }
  },

  // --- WARDROBES ---
  {
    id: "wd-sliding",
    category: "wardrobes",
    title: "Modern Sliding Door Wardrobe",
    priceRange: "₹85,000 - ₹2,90,000",
    estTime: "20-30 Days",
    rating: 4.9,
    reviewsCount: 168,
    badge: "Space Saver",
    image: "assets/images/wardrobes_1.jpg",
    gallery: [
      "assets/images/wardrobes_1.jpg",
      "assets/images/wardrobes_2.jpeg",
      "assets/images/wardrobes_5.jpg"
    ],
    shortDesc: "Smooth top-hung silent gliding doors with lacquered glass inserts, full-length mirror panels, and internal sensor lights.",
    fullDesc: "Our wardrobe design Bhubaneswar solutions feature sleek sliding doors that save space while adding a contemporary look to bedrooms of all sizes. Engineered with heavy-duty top-hung tracks that slide effortlessly with a finger touch.",
    features: [
      "Zero swing clearance needed—ideal for bedroom walking pathways",
      "Heavy-duty German smooth-slide rolling mechanisms",
      "Integrated full-length tinted dressing mirror",
      "Automatic motion-activated warm LED light profiles",
      "Modular internal organizers with jewelry trays & shoe drawers"
    ],
    finishes: ["Lacquered Glass", "Textured Laminate", "Smoked Mirror", "PU Matte"],
    specs: {
      "Track Mechanism": "Hafele / Hettich Top-Hung Silent Slider",
      "Carcass": "18mm Calibrated Plywood",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "wd-walkin",
    category: "wardrobes",
    title: "Luxury Walk-In Wardrobe Sanctuary",
    priceRange: "₹2,50,000 - ₹6,80,000",
    estTime: "30-45 Days",
    rating: 5.0,
    reviewsCount: 79,
    badge: "Master Suite",
    image: "assets/images/wardrobes_2.jpeg",
    gallery: [
      "assets/images/wardrobes_2.jpeg",
      "assets/images/wardrobes_3.jpg",
      "assets/images/wardrobes_6.jpg"
    ],
    shortDesc: "A dedicated dressing haven with central accessory island, fluted glass showcases, velvet drawers, and digital locker.",
    fullDesc: "Enjoy a dedicated space for clothing, accessories, and everyday essentials with walk-in wardrobes designed to elevate master bedrooms with organized luxury. Includes dedicated bag display niches, tie racks, and backlit shelves.",
    features: [
      "Central accessory island with glass top and velvet compartments",
      "Gold anodized aluminium profile shutters with fluted glass",
      "Built-in digital biometric safe locker compartment",
      "Hydraulic pull-down wardrobe lifters for high ceiling lofts",
      "Full vanity mirror with 3-tone touch light dimmer"
    ],
    finishes: ["Aluminium Rose Gold", "Fluted Smoked Glass", "Rich Leatherette Trims"],
    specs: {
      "Cabinetry": "Moisture-Resistant Marine Ply",
      "Lighting": "CRI 90+ Architectural LED Strips",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "wd-openable",
    category: "wardrobes",
    title: "Classic Hinged / Openable Wardrobe",
    priceRange: "₹65,000 - ₹2,20,000",
    estTime: "18-25 Days",
    rating: 4.8,
    reviewsCount: 112,
    badge: "Timeless Classic",
    image: "assets/images/wardrobes_3.jpg",
    gallery: [
      "assets/images/wardrobes_3.jpg",
      "assets/images/wardrobes_4.jpg",
      "assets/images/wardrobes_7.jpg"
    ],
    shortDesc: "Traditional 180° swing doors offering complete, unobstructed visibility into every section of your wardrobe.",
    fullDesc: "Classic openable wardrobes combine practical storage with elegant finishes, offering full visibility of your belongings with reliable durability. Allows you to mount accessories and mirrors on the inner door panels.",
    features: [
      "Wide 110° to 180° opening soft-close hinges",
      "Full view of wardrobe interior at a single glance",
      "External pull-out drawers for everyday quick access",
      "Overhead loft extensions for bulky luggage and seasonal blankets"
    ],
    finishes: ["PU Matte Finish", "High Gloss Laminate", "Veneer with Polish"],
    specs: {
      "Hinges": "Hettich Sensys Soft-Close with Integrated Dampener",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "wd-folding",
    category: "wardrobes",
    title: "Contemporary Folding Wardrobe",
    priceRange: "₹95,000 - ₹2,60,000",
    estTime: "22-30 Days",
    rating: 4.7,
    reviewsCount: 38,
    badge: "Panoramic Access",
    image: "assets/images/wardrobes_4.jpg",
    gallery: [
      "assets/images/wardrobes_4.jpg",
      "assets/images/wardrobes_8.jpg"
    ],
    shortDesc: "Bi-fold folding shutter doors that concertina open, combining the space savings of sliding doors with panoramic access.",
    fullDesc: "Bi-fold folding wardrobe systems provide the best of both worlds: compact opening radius without sacrificing wide interior visibility. Perfect for compact master bedrooms and modern guest rooms.",
    features: [
      "Concertina bi-fold mechanism with smooth magnetic latch",
      "Requires only half the swing clearance of standard hinged doors",
      "Contemporary slatted shutter and wooden textured finishes"
    ],
    finishes: ["Satin PU", "Matt Finish Woodgrain", "Lacquered Acrylic"],
    specs: {
      "Folding Mechanism": "Hafele WingLine Folding System",
      "Warranty": "10 Years Warranty"
    }
  },

  // --- LUXURY BEDS ---
  {
    id: "bed-king-storage",
    category: "beds",
    title: "King Size Bed With Hydraulic Storage",
    priceRange: "₹52,000 - ₹1,35,000",
    estTime: "15-22 Days",
    rating: 4.9,
    reviewsCount: 154,
    badge: "Bestseller",
    image: "assets/images/beds_1.jpg",
    gallery: [
      "assets/images/beds_1.jpg",
      "assets/images/beds_2.jpg",
      "assets/images/beds_7.jpg"
    ],
    shortDesc: "Effortless German gas-lift hydraulic storage, cushioned headboard, and solid termite-proof hardwood internal framing.",
    fullDesc: "Designed for spacious master bedrooms, our king-size beds feature integrated storage that provides ample room for extra bedding, pillows, and suitcases, keeping your sanctuary organized and restful.",
    features: [
      "Heavy-duty 120kg German gas-lift hydraulic pistons",
      "Plush padded velvet / faux-leather ergonomic headboard",
      "Full sealed under-bed storage box keeping linens dust-free",
      "Termite and borer resistant calibrated core plywood"
    ],
    finishes: ["Plush Fabric Upholstery", "Warm Teak Laminate", "Suede Grey"],
    specs: {
      "Mattress Size": "72\" x 78\" (King Standard)",
      "Hydraulic Piston": "Ebco / Hettich 1200N Capacity",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "bed-king-nostorage",
    category: "beds",
    title: "King Size Floating Platform Bed",
    priceRange: "₹38,000 - ₹95,000",
    estTime: "12-18 Days",
    rating: 4.8,
    reviewsCount: 88,
    badge: "Minimalist",
    image: "assets/images/beds_2.jpg",
    gallery: [
      "assets/images/beds_2.jpg",
      "assets/images/beds_8.jpg"
    ],
    shortDesc: "Sleek low-profile floating design with cantilevered side tables and ambient warm LED under-bed glow.",
    fullDesc: "Clean lines and airy aesthetics define our minimalist King Size Bed without storage. Creates a modern floating visual effect that makes the bedroom feel expansive, peaceful, and hotel-like.",
    features: [
      "Cantilevered floating base with recessed LED strip lighting",
      "Attached floating bedside nightstands with wireless charging",
      "Easy under-bed cleaning with robotic vacuum clearance"
    ],
    finishes: ["Oak Veneer", "Matte Charcoal", "Natural Walnut"],
    specs: {
      "Dimensions": "80\" x 84\" Outer Profile",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "bed-queen-storage",
    category: "beds",
    title: "Queen Size Bed With Dual Storage",
    priceRange: "₹42,000 - ₹1₹0,000",
    estTime: "14-20 Days",
    rating: 4.9,
    reviewsCount: 129,
    badge: "Great Value",
    image: "assets/images/beds_3.jpg",
    gallery: [
      "assets/images/beds_3.jpg",
      "assets/images/beds_4.jpg"
    ],
    shortDesc: "Combination of front hydraulic lift and side pull-out drawers for quick everyday access.",
    fullDesc: "Balancing comfort and space efficiency, our Queen Size Bed with storage is the top choice for modern apartments. Provides generous sleep comfort while offering massive internal storage capacity.",
    features: [
      "Dual storage system: side slide-out drawers + hydraulic lift",
      "Ergonomic reclining headboard with built-in reading lights",
      "Reinforced heavy-load cross bracing for zero mattress squeaks"
    ],
    finishes: ["Walnut & Champagne Gold", "Beige Linen Fabric"],
    specs: {
      "Mattress Size": "60\" x 78\" (Queen Standard)",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "bed-queen-nostorage",
    category: "beds",
    title: "Queen Size Contemporary Bed",
    priceRange: "₹32,000 - ₹78,000",
    estTime: "12-16 Days",
    rating: 4.7,
    reviewsCount: 63,
    badge: "Guest Suite",
    image: "assets/images/beds_4.jpg",
    gallery: [
      "assets/images/beds_4.jpg",
      "assets/images/beds_9.jpg"
    ],
    shortDesc: "Lightweight architectural frame with slatted headboard and tapered solid wood legs.",
    fullDesc: "Designed with subtle elegance, this bed fits beautifully into guest rooms and apartment bedrooms, delivering timeless restful appeal.",
    features: [
      "Slender Scandinavian-inspired silhouette",
      "Solid beechwood legs with protective floor glides",
      "High breathability slat base for mattress longevity"
    ],
    finishes: ["Teak Wood", "Scandinavian Ash", "Matte Grey"],
    specs: {
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "bed-single-storage",
    category: "beds",
    title: "Single Bed With Drawer Storage",
    priceRange: "₹24,000 - ₹55,000",
    estTime: "10-15 Days",
    rating: 4.8,
    reviewsCount: 47,
    badge: "Kids & Teens",
    image: "assets/images/beds_5.jpg",
    gallery: [
      "assets/images/beds_5.jpg",
      "assets/images/beds_10.jpg"
    ],
    shortDesc: "Compact single bed featuring deep smooth-rolling bottom drawers for toys, books, and extra linens.",
    fullDesc: "Smart comfort for children's rooms, bachelor studios, and elder living suites. Incorporates deep under-bed drawers on heavy-duty caster wheels.",
    features: [
      "Two deep smooth-pull sliding drawers",
      "Rounded child-safe corner chamfering",
      "Sturdy box frame supporting up to 250kg weight"
    ],
    finishes: ["Pastel Dual Tone", "Natural Oak", "White & Blue"],
    specs: {
      "Mattress Size": "36\" x 75\" (Single)",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "bed-bunk",
    category: "beds",
    title: "Architectural Bunk & Loft Bed",
    priceRange: "₹58,000 - ₹1,45,000",
    estTime: "18-25 Days",
    rating: 4.9,
    reviewsCount: 39,
    badge: "Multi-Functional",
    image: "assets/images/beds_6.jpg",
    gallery: [
      "assets/images/beds_6.jpg",
      "assets/images/beds_11.jpg"
    ],
    shortDesc: "Vertical space master featuring twin beds with integrated staircase drawers, study desk, and safety guard rails.",
    fullDesc: "A complete room in a single compact footprint. Features staircase steps engineered as storage pull-outs, study desk below, and twin bunk bed above with full perimeter safety railing.",
    features: [
      "Staircase steps double as heavy storage drawers",
      "Integrated study desk with LED task light nook",
      "Certified 300kg weight capacity per tier"
    ],
    finishes: ["Nordic Pine", "White & Sage Green", "Navy Slate"],
    specs: {
      "Material": "Heavy-Duty Marine Plywood + Metal Frame",
      "Warranty": "10 Years Warranty"
    }
  },

  // --- OFFICE FURNITURE ---
  {
    id: "of-workstation",
    category: "office-furniture",
    title: "Modular Corporate Workstations (Cluster of 4)",
    priceRange: "₹38,000 - ₹1,20,000",
    estTime: "15-25 Days",
    rating: 4.9,
    reviewsCount: 118,
    badge: "Top Seller",
    image: "assets/images/office_furniture_1.jpg",
    gallery: [
      "assets/images/office_furniture_1.jpg",
      "assets/images/office_furniture_3.jpg",
      "assets/images/office_furniture_5.jpg"
    ],
    shortDesc: "Ergonomic 4-person workstation pods with acoustic fabric privacy pinboards, dual wire-management raceways, and mobile pedestals.",
    fullDesc: "Enhance your workflow with Vizous Interio's custom workstations, crafted to suit your specific office floor layout in Bhubaneswar. Designed for productivity, team collaboration, and clean cable ergonomics.",
    features: [
      "Sound-dampening fabric pinboard dividers with marker boards",
      "Heavy-gauge steel legs with durable electrostatic powder coating",
      "In-desk flip-up cable management raceways and power modules",
      "Lockable 3-drawer mobile pedestals with master keying"
    ],
    finishes: ["Bavarian Beech & Anthracite", "Highland Pine & White"],
    specs: {
      "Structure": "CRCA Powder-Coated Steel Frame",
      "Top": "25mm Pre-Laminated Engineered Board with PVC Edging",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "of-table",
    category: "office-furniture",
    title: "Executive Director Desk Suite",
    priceRange: "₹45,000 - ₹1,80,000",
    estTime: "18-28 Days",
    rating: 5.0,
    reviewsCount: 74,
    badge: "Executive",
    image: "assets/images/office_furniture_2.jpg",
    gallery: [
      "assets/images/office_furniture_2.jpg",
      "assets/images/office_furniture_6.jpg"
    ],
    shortDesc: "Commanding L-shaped director desk with floating side credenza, modesty panel, and wireless phone charging dock.",
    fullDesc: "Our office furniture in Bhubaneswar includes executive and workstation tables designed to support commanding productivity and showcase corporate sophistication.",
    features: [
      "Grand 7ft to 9ft executive top with shark-nose chamfered edging",
      "Attached side credenza for CPU tower, printers, and lockable storage",
      "Integrated brush-strip wire grommets and wireless charging pad"
    ],
    finishes: ["Smoked Oak Veneer", "Italian Marble Laminate & Gunmetal"],
    specs: {
      "Top Thickness": "36mm Heavy Calibrated Core",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "of-conference",
    category: "office-furniture",
    title: "Boardroom Conference Table (12-16 Seater)",
    priceRange: "₹65,000 - ₹2,40,000",
    estTime: "20-30 Days",
    rating: 4.8,
    reviewsCount: 56,
    badge: "Boardroom",
    image: "assets/images/office_furniture_3.jpg",
    gallery: [
      "assets/images/office_furniture_3.jpg",
      "assets/images/office_furniture_7.jpg"
    ],
    shortDesc: "Architectural boat-shaped conference table equipped with motorized flip-up HDMI, LAN, and power connectivity cubbies.",
    fullDesc: "Engineered for high-stakes presentations and collaborative decision making. Designed to maintain line-of-sight for all attendees with seamless media integrations.",
    features: [
      "Boat-shape contour ensuring clear sightlines to presentation screens",
      "Central recessed brushed aluminium AV power troughs",
      "Concealed in-leg vertical cable risers"
    ],
    finishes: ["American Walnut", "Fluted Base & High-Gloss Laminate"],
    specs: {
      "Length": "12ft to 20ft Custom",
      "Capacity": "10 to 20 People",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "of-file-rack",
    category: "office-furniture",
    title: "Heavy-Duty Modular Filing & Storage Racks",
    priceRange: "₹22,000 - ₹75,000",
    estTime: "10-15 Days",
    rating: 4.7,
    reviewsCount: 42,
    badge: "Organized",
    image: "assets/images/office_furniture_4.jpg",
    gallery: [
      "assets/images/office_furniture_4.jpg",
      "assets/images/office_furniture_8.jpg"
    ],
    shortDesc: "Lockable tambour and glass shutter storage cabinets built for heavy ledger files, legal binders, and confidential records.",
    fullDesc: "Keep important files organized and easily accessible with durable storage solutions that complement your office layout while maintaining complete document security.",
    features: [
      "Smooth vertical or lateral sliding tambour shutters",
      "Adjustable shelf brackets accommodating box files and legal folders",
      "Central gang-locking system with security keys"
    ],
    finishes: ["Dual Grey", "Warm Maple", "Graphite Black"],
    specs: {
      "Load Per Shelf": "Up to 60kg Uniform Distributed Load",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "of-cafeteria",
    category: "office-furniture",
    title: "Corporate Cafeteria & Breakout Benches",
    priceRange: "₹18,000 - ₹62,000",
    estTime: "12-18 Days",
    rating: 4.8,
    reviewsCount: 37,
    badge: "Breakout",
    image: "assets/images/office_furniture_5.jpg",
    gallery: [
      "assets/images/office_furniture_5.jpg",
      "assets/images/office_furniture_9.jpg"
    ],
    shortDesc: "Stain-resistant high-pressure laminate tables paired with vibrant, stackable ergonomic cafeteria chairs.",
    fullDesc: "Create welcoming cafeteria spaces with furniture that encourages comfort, conversation, and revitalization during team lunch breaks and casual standups.",
    features: [
      "Hot-water and spill-resistant thermal laminate tops",
      "Heavy duty cast iron base plates preventing table tipping",
      "Easy-clean hygienic surfaces tested for high-traffic food courts"
    ],
    finishes: ["Bright White", "Canary Yellow & Slate", "Warm Woodgrain"],
    specs: {
      "Seating": "2-Seater, 4-Seater & 6-Seater Options",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "of-cabin",
    category: "office-furniture",
    title: "Manager Cabin Suite with Credenza",
    priceRange: "₹35,000 - ₹1₹5,000",
    estTime: "14-22 Days",
    rating: 4.9,
    reviewsCount: 61,
    badge: "Productivity",
    image: "assets/images/office_furniture_6.jpg",
    gallery: [
      "assets/images/office_furniture_6.jpg",
      "assets/images/office_furniture_10.jpg"
    ],
    shortDesc: "Complete mid-management workstation suite with desk, return credenza, and overhead trophy display shelves.",
    fullDesc: "Designed for team leaders and department managers, balancing personal storage with desk space for one-on-one review sessions.",
    features: [
      "Integrated side modesty board and CPU storage",
      "Built-in lockable drawer with pen organizer tray",
      "Overhead glass cabinet for books, awards, and stationery"
    ],
    finishes: ["Modern Oak", "Carbon Grey"],
    specs: {
      "Warranty": "10 Years Warranty"
    }
  },

  // --- MODULAR FURNITURE ---
  {
    id: "mf-tv-unit",
    category: "modular-furniture",
    title: "Floating Entertainment & TV Console Unit",
    priceRange: "₹35,000 - ₹1,40,000",
    estTime: "12-20 Days",
    rating: 5.0,
    reviewsCount: 175,
    badge: "Top Living Trend",
    image: "assets/images/modular_furniture_1.jpg",
    gallery: [
      "assets/images/modular_furniture_1.jpg",
      "assets/images/modular_furniture_2.jpg",
      "assets/images/modular_furniture_7.webp"
    ],
    shortDesc: "Fluted charcoal wall panelling with floating low console, acoustic soundbar cavity, and concealed wire chases.",
    fullDesc: "Bring style and organization together with TV units that keep entertainment spaces clutter-free while serving as a stunning focal point in living rooms. Supports TVs up to 85 inches with zero visible wires.",
    features: [
      "Wall-to-wall acoustic fluted louver panelling with ambient backlighting",
      "Concealed internal PVC conduits routing all HDMI & power cables",
      "Floating console drawers with soft-closing push-to-open slides",
      "Display niches with tempered bronze glass and warm LED spots"
    ],
    finishes: ["Fluted Charcoal & Teak", "Calacatta Gold Marble & Brass", "Matte Black & Walnut"],
    specs: {
      "Wall Backing": "Moisture-Resistant HDF with PVC Foils",
      "Console": "18mm Calibrated Plywood",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "mf-crockery",
    category: "modular-furniture",
    title: "Designer Dining Crockery Unit",
    priceRange: "₹45,000 - ₹1,65,000",
    estTime: "15-22 Days",
    rating: 4.9,
    reviewsCount: 83,
    badge: "Dining Luxury",
    image: "assets/images/modular_furniture_2.jpg",
    gallery: [
      "assets/images/modular_furniture_2.jpg",
      "assets/images/modular_furniture_3.jpg"
    ],
    shortDesc: "Illuminated glass display showcase with hanging stemware wine racks, cutlery velvet drawers, and marble serving ledge.",
    fullDesc: "Display fine dinnerware and decorative pieces with beautifully crafted crockery units that combine elegance, storage, and ambient dining lighting. Features illuminated fluted glass doors and integrated wine cellars.",
    features: [
      "Aluminium slim-profile framed fluted glass shutters",
      "Internal vertical micro-LED profile lighting with warm 3000K hue",
      "Mid-height stone serving ledge for hot buffet dishes during parties",
      "Velvet-lined drawers for silverware and fine cutlery"
    ],
    finishes: ["Smoked Glass & Rose Gold", "Deep Teak & Champagne"],
    specs: {
      "Shutters": "4mm Toughened Fluted Glass",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "mf-puja",
    category: "modular-furniture",
    title: "Sacred Puja Mandir & Prayer Unit",
    priceRange: "₹40,000 - ₹1,75,000",
    estTime: "15-25 Days",
    rating: 5.0,
    reviewsCount: 132,
    badge: "Spiritual Craft",
    image: "assets/images/modular_furniture_3.jpg",
    gallery: [
      "assets/images/modular_furniture_3.jpg",
      "assets/images/modular_furniture_4.jpg"
    ],
    shortDesc: "Vastu-compliant sacred mandir featuring precision CNC Om/Lotus jali backlighting, brass bell pull-outs, and diya trays.",
    fullDesc: "Create a peaceful prayer space with thoughtfully designed puja units that blend traditional sacred elements with modern craftsmanship. Designed according to Vastu Shastra principles for serenity and positive energy.",
    features: [
      "Custom CNC laser-engraved sacred jali with warm acrylic backlighting",
      "Pull-out stone-topped tray for incense, diyas, and offerings",
      "Storage drawers for holy books, prayer mats, and sacred cotton",
      "Vastu-aligned orientation with elevated deity platform"
    ],
    finishes: ["Pure Corian White", "Burma Teak Wood", "Brass Antique Inlays"],
    specs: {
      "Core Material": "Fire-Retardant Calibrated Core + Solid Teak",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "mf-study",
    category: "modular-furniture",
    title: "Ergonomic Home Office & Study Desk",
    priceRange: "₹28,000 - ₹95,000",
    estTime: "12-18 Days",
    rating: 4.8,
    reviewsCount: 76,
    badge: "Work From Home",
    image: "assets/images/modular_furniture_4.jpg",
    gallery: [
      "assets/images/modular_furniture_4.jpg",
      "assets/images/modular_furniture_5.jpg"
    ],
    shortDesc: "Dual-tier study station with wall book shelves, magnetic pin-board, LED task lighting, and cable tidy grommets.",
    fullDesc: "Stay focused with study units that provide organized storage, comfortable workspaces, and designs that encourage productivity for students and remote professionals alike.",
    features: [
      "Deep 28-inch work surface preventing wrist strain during typing",
      "Overhead open book cubbies and closed document cupboards",
      "Integrated magnetic soft fabric pinboard for notes and schedules"
    ],
    finishes: ["Dual Grey & Oak", "White Gloss & Pastel Green"],
    specs: {
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "mf-shoe-rack",
    category: "modular-furniture",
    title: "Ventilated Foyer Shoe Rack with Seating Bench",
    priceRange: "₹18,000 - ₹55,000",
    estTime: "10-15 Days",
    rating: 4.9,
    reviewsCount: 65,
    badge: "Foyer Essential",
    image: "assets/images/modular_furniture_5.jpg",
    gallery: [
      "assets/images/modular_furniture_5.jpg",
      "assets/images/modular_furniture_6.jpg"
    ],
    shortDesc: "Padded faux-leather bench with ventilated louvered shoe cabinets, sock drawers, and sanitizing drop-off bowl.",
    fullDesc: "Transform your entryway into a welcoming statement. Keeps footwear out of sight while offering a comfortable cushioned bench for putting on shoes.",
    features: [
      "Aesthetic ventilated louvered doors preventing odors",
      "High-density foam cushioned seat upholstered in wipeable leatherette",
      "Capacity for 24-36 pairs of shoes including boot cubbies"
    ],
    finishes: ["Louvered Teak", "Nordic Grey & White"],
    specs: {
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "mf-partition",
    category: "modular-furniture",
    title: "Architectural Room Divider & Partition",
    priceRange: "₹30,000 - ₹1₹0,000",
    estTime: "12-18 Days",
    rating: 4.8,
    reviewsCount: 44,
    badge: "Space Divider",
    image: "assets/images/modular_furniture_6.jpg",
    gallery: [
      "assets/images/modular_furniture_6.jpg"
    ],
    shortDesc: "Slatted vertical wooden battens and fluted glass frames defining living and dining zones with light passage.",
    fullDesc: "Separate functional areas without blocking natural daylight. Our bespoke room dividers create privacy and architectural grandeur between foyer, living, and dining rooms.",
    features: [
      "Floor-to-ceiling slatted wood fins with adjustable swivel rotation",
      "Integrated planter boxes and display niche boxes",
      "Zero structural masonry required—clean dry installation"
    ],
    finishes: ["Natural Teak Finish", "Black Metal & Fluted Glass"],
    specs: {
      "Warranty": "10 Years Warranty"
    }
  },

  // --- HOME DECOR ---
  {
    id: "hd-wall-panelling",
    category: "home-decor",
    title: "Architectural Custom Wall Panelling",
    priceRange: "₹180 - ₹450 / sq.ft",
    estTime: "7-12 Days",
    rating: 4.9,
    reviewsCount: 92,
    badge: "Trending Decor",
    image: "assets/images/home_decor_1.jpg",
    gallery: [
      "assets/images/home_decor_1.jpg",
      "assets/images/home_decor_2.jpg"
    ],
    shortDesc: "Acoustic charcoal louvers, fluted wood panels, and fabric headboard walls that instantly enrich room depth.",
    fullDesc: "Add texture, warmth, and character to your interiors with custom wall panelling designed by Vizous Interio. Replaces bland painted walls with bespoke hotel-grade tactile luxury.",
    features: [
      "Moisture-proof and termite-proof charcoal polystyrene panels",
      "Acoustic sound dampening improving TV and audio clarity",
      "Concealed hidden-door integration for private ensuite bathrooms"
    ],
    finishes: ["Charcoal Louvers", "Natural Fluted Walnut", "Fabric Acoustic Slats"],
    specs: {
      "Thickness": "12mm to 25mm Profile",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "hd-false-ceiling",
    category: "home-decor",
    title: "Ambient Designer False Ceiling",
    priceRange: "₹120 - ₹260 / sq.ft",
    estTime: "8-14 Days",
    rating: 4.8,
    reviewsCount: 81,
    badge: "Atmosphere",
    image: "assets/images/home_decor_2.jpg",
    gallery: [
      "assets/images/home_decor_2.jpg",
      "assets/images/home_decor_3.jpg"
    ],
    shortDesc: "Multi-tier gypsum ceilings with hidden cove lighting, magnetic track light slots, and wooden rafter accents.",
    fullDesc: "False ceilings add visual interest while improving lighting and overall ambience, making them a popular choice for modern living spaces. Keeps AC ducting and wiring completely invisible.",
    features: [
      "Saint-Gobain high-density gypsum boards with crack-free jointing",
      "Indirect shadow cove illumination creating soft glare-free moods",
      "Integrated low-voltage magnetic track lights and spotlight channels"
    ],
    finishes: ["Pristine White Gypsum", "Wooden Rafters with Polish"],
    specs: {
      "Board": "Saint-Gobain Gyproc / USG Boral",
      "Warranty": "10 Years Warranty"
    }
  },
  {
    id: "hd-wooden-flooring",
    category: "home-decor",
    title: "Premium AC4 Heavy-Duty Wooden Flooring",
    priceRange: "₹160 - ₹380 / sq.ft",
    estTime: "3-6 Days",
    rating: 4.9,
    reviewsCount: 67,
    badge: "Luxury Touch",
    image: "assets/images/home_decor_3.jpg",
    gallery: [
      "assets/images/home_decor_3.jpg"
    ],
    shortDesc: "German AC4 scratch-resistant laminate and engineered hardwood with click-lock waterproof jointing.",
    fullDesc: "Premium wooden flooring adds warmth, comfort, and timeless elegance to every space. Walk barefoot on cozy surfaces that stay temperate throughout winter and summer.",
    features: [
      "AC4 commercial abrasion resistance against pets, heels, and furniture wheels",
      "Uniclic patented glueless interlocking technology",
      "Wax-sealed edges providing spill and moisture resistance"
    ],
    finishes: ["Honey Oak", "Smoked Grey Ash", "Herringbone Walnut"],
    specs: {
      "Thickness": "8mm to 12mm High-Density Fibreboard (HDF)",
      "Warranty": "10 Years Warranty"
    }
  }
];

export const GOOGLE_REVIEWS = [
  {
    name: "Priyabrata Pattnaik",
    location: "Laxmisagar, Bhubaneswar",
    project: "Full Turnkey Modular Interior",
    rating: 5,
    date: "Google Verified Review",
    avatarImg: "/assets/images/reviews/review_priyabrata.jpg",
    avatar: "PP",
    text: "Feels like home!! I didn't know that they are manufacturers too, so the quality and price is quite reasonable, rather excellent, I must say. Wardrobes, kitchen, furniture, you name it, you get it, ALL CUSTOMIZED! Visited the Laxmisagar showroom and the view was so homely. Exceptional craftsmanship!"
  },
  {
    name: "Vikram Dugar",
    location: "Bhubaneswar",
    project: "3BHK Flat Turnkey Handover",
    rating: 5,
    date: "Google Verified Review",
    avatarImg: "/assets/images/reviews/review_vikram.jpg",
    avatar: "VD",
    text: "“VIZOUS” is the only one stop solution for all your interior needs in Odisha. There is a wide range of Modular Kitchen, Wardrobes & Furniture. The service & commitment towards their customers is awesome. Handed over my 3BHK flat exactly within 40 days as promised."
  },
  {
    name: "Sandipan Hui",
    location: "Cuttack / Bhubaneswar",
    project: "Custom Modular Kitchen & Island",
    rating: 5,
    date: "Google Verified Review",
    avatarImg: "/assets/images/reviews/review_sandipan.jpg",
    avatar: "SH",
    text: "I am thrilled visiting modular kitchen store 'VIZOUS'. The quality of the materials and the attention to detail are outstanding. The design fits perfectly to our space, and the functionality is fantastic. The staff was helpful and patient throughout. Highly recommend!"
  },
  {
    name: "Kapil Khandelwal",
    location: "Bhubaneswar",
    project: "Bespoke Factory-Built Kitchen",
    rating: 5,
    date: "Google Verified Review",
    avatarImg: "/assets/images/reviews/review_kapil.jpg",
    avatar: "KK",
    text: "Manufacturer of modular kitchen with amazing designs and excellent products, customized as per space. Having their own factory in Bhagabanpur ensures top notch finishing that ready-made stores simply cannot match."
  },
  {
    name: "Rajat Panigrahi",
    location: "Bhubaneswar",
    project: "Complete Home Interior",
    rating: 5,
    date: "Google Verified Review",
    avatarImg: "/assets/images/reviews/review_rajat.jpg",
    avatar: "RP",
    text: "The quality of the product is superb... The in-house design house they have is excellent in the way they utilize every square inch of space. Moreover, the service quality and time-bound assurance is applaudable. Thank you Vizous team for making my home a beautiful place!"
  },
  {
    name: "Jangyadev Mohapatra",
    location: "Laxmisagar, Bhubaneswar",
    project: "Architectural Interior Fit-Out",
    rating: 5,
    date: "Google Verified Review",
    avatarImg: "/assets/images/reviews/review_jangyadev.jpg",
    avatar: "JM",
    text: "Great Interior Design and good demo display at their experience center. Request everyone to visit their showroom near Laxmisagar Square to check the live finish quality and consult with their architects for your requirements."
  },
  {
    name: "Sanju Patra",
    location: "Bhubaneswar",
    project: "Modular Kitchen & Wardrobes",
    rating: 5,
    date: "Google Verified Review",
    avatarImg: "/assets/images/reviews/review_sanju.jpg",
    avatar: "SP",
    text: "Amazing design and quality of modular kitchen and wardrobes. One stop solution for beautiful home decor and furniture in Odisha. Completely seamless experience from 3D planning to handover."
  },
  {
    name: "PM DAS",
    location: "Bhubaneswar",
    project: "Modular Kitchen & Living Suite",
    rating: 5,
    date: "Google Verified Review",
    avatarImg: "/assets/images/reviews/review_pmdas.jpg",
    avatar: "PD",
    text: "Updated place for Modular kitchen and interiors. Precision factory cutting, edge banding, and durable hardware make them the best choice in town."
  }
];

export const TRUSTED_PARTNERS = [
  { name: "Hettich", type: "German Hardware & Soft Close", logo: "assets/images/jaguar-desktop-1646230644-KpiIX-1-150x76.jpg" },
  { name: "Hafele", type: "Architectural Hardware & Lighting", logo: "assets/images/001.gif" },
  { name: "Greenlam", type: "Premium Laminates & Veneers", logo: "assets/images/003.gif" },
  { name: "CenturyPly", type: "BWP Marine Grade Plywood", logo: "assets/images/004.gif" },
  { name: "Rehau", type: "German Zero-Joint Edgeband", logo: "assets/images/005.gif" },
  { name: "Merino", type: "High Gloss Acrylic Panels", logo: "assets/images/006.gif" }
];

export const FAQS = [
  {
    question: "What makes Vizous Interio’s modular furniture unique'",
    answer: "Unlike retail resellers who import standard sizes from third parties, Vizous operates its own 15,000+ sq.ft advanced manufacturing plant in Bhagabanpur Industrial Estate, Bhubaneswar. We build 100% custom-fit modular furniture with German CNC precision, BWP Marine Grade IS:710 plywood, and German hardware, delivering unmatched durability at direct-from-factory prices."
  },
  {
    question: "Do you offer free 3D design consultations and site visits'",
    answer: "Yes! We offer a completely complimentary in-home site measurement and 3D design consultation across Bhubaneswar, Cuttack, Puri, and surrounding regions. Our architects map your room dimensions, discuss your functional needs, and present photorealistic 3D renders with exact itemized estimates before you commit."
  },
  {
    question: "How long does a typical home interior or modular kitchen project take'",
    answer: "Because we manufacture in our own factory right here in Bhubaneswar, our average delivery timeline is just 30 to 45 days from 3D design finalization. This is significantly faster than the 90-120 days common among traditional carpenters and retail chains."
  },
  {
    question: "What does the 10-Year Warranty cover'",
    answer: "Our 10-Year Warranty covers the structural integrity of all BWP marine-grade carcasses against delamination, borer, and termite infestation, along with manufacturer warranties on hinges, drawer channels, and lifting mechanisms. We also provide ongoing post-installation service support."
  },
  {
    question: "Can you help design compact apartments and small rooms'",
    answer: "Definitely! Our architects specialize in smart compact ergonomics. From corner carousels and vertical lofts in modular kitchens to sliding wardrobes with dressing niches and hydraulic storage beds, we ensure every single inch is thoughtfully maximized."
  },
  {
    question: "What are your payment terms and do you offer EMI'",
    answer: "We offer transparent milestone-based payments (Booking, 3D Approval, Factory Dispatch, and Final Handover). Additionally, we provide Zero-Cost EMI options and flexible interior finance plans with leading banks to make your dream home stress-free."
  }
];

export const COST_ESTIMATOR_OPTIONS = {
  rooms: [
    { id: "kitchen", label: "Modular Kitchen", baseRate: 150000, multiplier: 1.0 },
    { id: "wardrobe", label: "Master Wardrobe", baseRate: 85000, multiplier: 0.8 },
    { id: "living", label: "Living Room (TV & Wall Panel)", baseRate: 75000, multiplier: 0.7 },
    { id: "full_2bhk", label: "Complete 2 BHK Home", baseRate: 480000, multiplier: 1.0 },
    { id: "full_3bhk", label: "Complete 3 BHK Home", baseRate: 720000, multiplier: 1.2 }
  ],
  layouts: [
    { id: "straight", label: "Straight / Linear", factor: 1.0 },
    { id: "l_shape", label: "L-Shaped", factor: 1.25 },
    { id: "u_shape", label: "U-Shaped / Walk-In", factor: 1.55 },
    { id: "island", label: "Island / Grand Suite", factor: 1.85 }
  ],
  finishes: [
    { id: "laminate", label: "Premium Textured Laminate", factor: 1.0, desc: "Durable, scratch-resistant & easy to maintain" },
    { id: "acrylic", label: "High-Gloss Ultra Acrylic", factor: 1.25, desc: "Mirror-sheen luxury with deep color vibrancy" },
    { id: "pu_matte", label: "German PU Matte Finish", factor: 1.45, desc: "Silky satin touch with zero fingerprint marks" },
    { id: "veneer", label: "Natural Wood Veneer + Fluted Glass", factor: 1.65, desc: "Timeless rich woodgrain with smoked accents" }
  ],
  sizes: [
    { id: "compact", label: "Compact (Up to 80 sq.ft)", factor: 0.85 },
    { id: "medium", label: "Standard (80 - 150 sq.ft)", factor: 1.0 },
    { id: "large", label: "Spacious (150 - 250 sq.ft)", factor: 1.35 },
    { id: "villa", label: "Grand Villa (250+ sq.ft)", factor: 1.7 }
  ]
};
