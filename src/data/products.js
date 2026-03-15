export const CATEGORIES = [
  { id: 'superfoods', label: 'Superfoods', emoji: '🌱' },
  { id: 'spices', label: 'Spices & Powders', emoji: '🫚' },
  { id: 'beverages', label: 'Juices & Drinks', emoji: '🥤' },
  { id: 'grains', label: 'Grains & Snacks', emoji: '🌾' },
]

export const CURRENCY = 'TZS'

export const products = [
  // ── Current products ──────────────────────────────────────────────
  {
    id: 'p001',
    name: 'Organic Chia Seeds',
    description:
      'Premium organic chia seeds — one of nature\'s most nutrient-dense superfoods. Packed with omega-3 fatty acids, fibre, protein, calcium, and antioxidants. Add to smoothies, yoghurt, juices, or soak overnight for chia pudding. Tasteless and odourless, easy to add to any meal or drink.',
    shortDescription: 'Nutrient-dense organic chia seeds — omega-3, fibre & protein',
    price: 9500,
    currency: CURRENCY,
    unit: 'per 250g pack',
    category: 'superfoods',
    images: [
      'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=600&q=80',
      'https://images.unsplash.com/photo-1585559604959-cb0bd50a6a1f?w=600&q=80',
    ],
    inStock: true,
    featured: true,
    comingSoon: false,
    attributes: { weight: '250g', origin: 'Imported', brand: 'PureSeed' },
  },
  {
    id: 'p002',
    name: 'Star Anise Powder',
    description:
      'Finely ground star anise powder made from whole dried star anise pods. A warming, liquorice-flavoured spice used in teas, curries, marinades, and traditional remedies. Rich in antioxidants and known for its antimicrobial properties. A little goes a long way.',
    shortDescription: 'Finely ground star anise — warming spice with health benefits',
    price: 5000,
    currency: CURRENCY,
    unit: 'per 50g pack',
    category: 'spices',
    images: [
      'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&q=80',
      'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&q=80',
    ],
    inStock: true,
    featured: true,
    comingSoon: false,
    attributes: { weight: '50g', origin: 'Imported', brand: 'KibaSpice' },
  },
  {
    id: 'p003',
    name: 'Turmeric Powder',
    description:
      'Pure ground turmeric root powder with a naturally vibrant golden colour. High in curcumin — a powerful anti-inflammatory and antioxidant compound. Use in golden milk, teas, rice, soups, and curries. One of the most researched health spices in the world.',
    shortDescription: 'Pure golden turmeric — anti-inflammatory & antioxidant rich',
    price: 4500,
    currency: CURRENCY,
    unit: 'per 100g pack',
    category: 'spices',
    images: [
      'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80',
      'https://images.unsplash.com/photo-1542444459-81d0022bf0a6?w=600&q=80',
    ],
    inStock: true,
    featured: true,
    comingSoon: false,
    attributes: { weight: '100g', origin: 'Imported', brand: 'KibaSpice' },
  },
  {
    id: 'p004',
    name: 'Banana Beer',
    description:
      'Traditional East African banana beer (mbege) brewed from ripe Tanzanian bananas. Naturally fermented, lightly alcoholic, and full of earthy, fruity flavour. A cultural staple across the Kilimanjaro and Kagera regions. Served chilled.',
    shortDescription: 'Traditional Tanzanian fermented banana beer (mbege)',
    price: 6000,
    currency: CURRENCY,
    unit: 'per 500ml bottle',
    category: 'beverages',
    images: [
      'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80',
    ],
    inStock: true,
    featured: true,
    comingSoon: false,
    attributes: { volume: '500ml', origin: 'Tanzania', brand: 'Kiba Brew' },
  },
  {
    id: 'p005',
    name: 'Banana Wine',
    description:
      'Smooth, lightly sweet banana wine crafted from locally grown Tanzanian bananas. Naturally fermented and carefully bottled for a clean, fruity finish. Lower in alcohol than grape wine with a distinct tropical character. Best served chilled.',
    shortDescription: 'Smooth Tanzanian banana wine — light, fruity & natural',
    price: 12000,
    currency: CURRENCY,
    unit: 'per 750ml bottle',
    category: 'beverages',
    images: [
      'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    comingSoon: false,
    attributes: { volume: '750ml', origin: 'Tanzania', brand: 'Kiba Brew' },
  },

  // ── Coming Soon ───────────────────────────────────────────────────
  {
    id: 'p006',
    name: 'Beetroot Powder',
    description:
      'Cold-pressed beetroot powder made from whole dried beetroots. Rich in nitrates, iron, and folate — known to support blood pressure, stamina, and energy levels. Mix into smoothies, juices, or baked goods for a vibrant natural colour and a nutrition boost.',
    shortDescription: 'Cold-pressed beetroot powder — iron, nitrates & natural energy',
    price: 7500,
    currency: CURRENCY,
    unit: 'per 100g pack',
    category: 'superfoods',
    images: [
      'https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?w=600&q=80',
    ],
    inStock: false,
    featured: false,
    comingSoon: true,
    attributes: { weight: '100g', origin: 'Imported', brand: 'PureSeed' },
  },
  {
    id: 'p007',
    name: 'Popped Rice',
    description:
      'Light, airy popped rice made from locally sourced Tanzanian rice grains. A crunchy, low-calorie snack that is naturally gluten-free and easy to digest. Eat on its own, mix with honey and nuts, or use as a topping for yoghurt and smoothie bowls.',
    shortDescription: 'Light crunchy popped rice — gluten-free, locally sourced',
    price: 3500,
    currency: CURRENCY,
    unit: 'per 150g bag',
    category: 'grains',
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80',
    ],
    inStock: false,
    featured: false,
    comingSoon: true,
    attributes: { weight: '150g', origin: 'Tanzania' },
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured && !p.comingSoon)
}
