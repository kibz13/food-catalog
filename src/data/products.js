export const CATEGORIES = [
  { id: 'grains', label: 'Grains & Rice', emoji: '🌾' },
  { id: 'beverages', label: 'Beverages', emoji: '🥤' },
  { id: 'snacks', label: 'Snacks', emoji: '🍿' },
  { id: 'produce', label: 'Fresh Produce', emoji: '🥦' },
  { id: 'oils', label: 'Oils & Condiments', emoji: '🫙' },
  { id: 'dairy', label: 'Dairy & Eggs', emoji: '🥛' },
]

export const CURRENCY = 'TZS'

export const products = [
  {
    id: 'p001',
    name: 'Premium Basmati Rice',
    description:
      'Long-grain aromatic Basmati rice imported from India. Perfect for pilau, biriani, and fried rice dishes. Each grain stays separate when cooked, giving your dishes a restaurant-quality texture.',
    shortDescription: 'Aromatic long-grain rice, perfect for pilau & biriani',
    price: 8500,
    currency: CURRENCY,
    unit: 'per 2kg bag',
    category: 'grains',
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80',
      'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=600&q=80',
    ],
    inStock: true,
    featured: true,
    attributes: { weight: '2kg', origin: 'India', brand: 'Royal Feast' },
  },
  {
    id: 'p002',
    name: 'Tanzania Local Rice',
    description:
      'Locally grown rice from the Kilombero Valley, Morogoro. Rich in nutrients with a distinct flavour that pairs beautifully with mchuzi wa nyama, maharage, and ndizi. Unpolished and naturally wholesome.',
    shortDescription: 'Kilombero Valley rice, earthy and nutritious',
    price: 6000,
    currency: CURRENCY,
    unit: 'per 2kg bag',
    category: 'grains',
    images: [
      'https://images.unsplash.com/photo-1568347877321-f8935c7dc5a0?w=600&q=80',
    ],
    inStock: true,
    featured: true,
    attributes: { weight: '2kg', origin: 'Kilombero, Tanzania', brand: 'Kilombero Harvest' },
  },
  {
    id: 'p003',
    name: 'Whole Grain Millet',
    description:
      'Sun-dried whole grain millet sourced from Dodoma, Tanzania. High in iron and fibre. Ideal for uji (porridge), fermented drinks, and traditional dishes. Store in a cool, dry place.',
    shortDescription: 'Nutritious Dodoma millet for uji & porridge',
    price: 3500,
    currency: CURRENCY,
    unit: 'per kg',
    category: 'grains',
    images: [
      'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    attributes: { weight: '1kg', origin: 'Dodoma, Tanzania' },
  },
  {
    id: 'p004',
    name: 'Malta Guinness (Pack of 6)',
    description:
      'The classic non-alcoholic malt beverage loved across East Africa. Rich in B vitamins and brewed for a full-bodied, refreshing taste. Great for all ages. Serve chilled for best experience.',
    shortDescription: 'Classic East African malt drink, pack of 6 cans',
    price: 12000,
    currency: CURRENCY,
    unit: 'per 6-pack',
    category: 'beverages',
    images: [
      'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80',
    ],
    inStock: true,
    featured: true,
    attributes: { brand: 'Malta Guinness', volume: '6 × 330ml' },
  },
  {
    id: 'p005',
    name: 'Hibiscus Drink (Kinywaji cha Uyoga) 1L',
    description:
      'Freshly made hibiscus drink infused with ginger, cloves, and cinnamon. Made with no artificial preservatives. A refreshing, antioxidant-rich beverage popular across Tanzania. Keep refrigerated after opening.',
    shortDescription: 'Fresh hibiscus & ginger drink, locally made',
    price: 4000,
    currency: CURRENCY,
    unit: 'per 1L bottle',
    category: 'beverages',
    images: [
      'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    attributes: { volume: '1L', brand: 'Bora Drinks' },
  },
  {
    id: 'p006',
    name: 'Africafe Instant Coffee (50g)',
    description:
      'Tanzania\'s own premium instant coffee made from 100% Tanzanian Arabica beans grown on the slopes of Mount Kilimanjaro. Rich, bold flavour with a smooth finish. A true taste of Tanzania in every cup.',
    shortDescription: 'Premium Tanzanian Arabica instant coffee',
    price: 7500,
    currency: CURRENCY,
    unit: 'per 50g jar',
    category: 'beverages',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    ],
    inStock: false,
    featured: false,
    attributes: { brand: 'Africafe', weight: '50g', origin: 'Kilimanjaro, Tanzania' },
  },
  {
    id: 'p007',
    name: 'Plantain Chips (Salted)',
    description:
      'Crispy thinly sliced plantain chips lightly seasoned with sea salt. Fried in sunflower oil. A classic snack made from locally sourced ripe plantains from the Kagera Region. Great for entertaining.',
    shortDescription: 'Crispy salted plantain chips, locally made',
    price: 3000,
    currency: CURRENCY,
    unit: 'per 200g pack',
    category: 'snacks',
    images: [
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=80',
    ],
    inStock: true,
    featured: true,
    attributes: { weight: '200g', brand: 'Bora Snacks' },
  },
  {
    id: 'p008',
    name: 'Groundnut (Karanga) Brittle',
    description:
      'Traditional peanut brittle made with roasted groundnuts and cane sugar. No artificial additives. A beloved Tanzanian snack (karanga brittle) enjoyed by all ages. Individually wrapped pieces.',
    shortDescription: 'Traditional Tanzanian peanut (karanga) brittle',
    price: 2000,
    currency: CURRENCY,
    unit: 'per pack (10 pieces)',
    category: 'snacks',
    images: [
      'https://images.unsplash.com/photo-1541532713592-79a0317b272b?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    attributes: { weight: '150g', brand: 'Mama\'s Kitchen' },
  },
  {
    id: 'p009',
    name: 'Fresh Tomatoes',
    description:
      'Ripe, juicy tomatoes freshly sourced from local farms in Arusha. Perfect for mchuzi, pilau, salads, and kachumbari. Delivered fresh within 24 hours of harvest.',
    shortDescription: 'Farm-fresh tomatoes from Arusha',
    price: 2500,
    currency: CURRENCY,
    unit: 'per kg',
    category: 'produce',
    images: [
      'https://images.unsplash.com/photo-1546470427-227c5f56e6f8?w=600&q=80',
      'https://images.unsplash.com/photo-1558818498-28c1e002b655?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    attributes: { origin: 'Arusha, Tanzania' },
  },
  {
    id: 'p010',
    name: 'Mchicha (Amaranth Leaves)',
    description:
      'Fresh mchicha (amaranth leaves) grown organically in Dar es Salaam. A staple green vegetable in Tanzanian cooking — essential for mchicha wa nazi (coconut amaranth) and stews. High in iron and vitamins.',
    shortDescription: 'Fresh organic amaranth leaves, a Tanzanian staple',
    price: 1500,
    currency: CURRENCY,
    unit: 'per bunch',
    category: 'produce',
    images: [
      'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    attributes: { origin: 'Dar es Salaam, Tanzania' },
  },
  {
    id: 'p011',
    name: 'Coconut Oil (Cold-Pressed)',
    description:
      'Pure cold-pressed coconut oil from the coastal Tanga Region of Tanzania. Rich in natural lauric acid and nutrients. Used in coastal Swahili cooking — perfect for maandazi, pilau, and wali wa nazi.',
    shortDescription: 'Pure cold-pressed coconut oil from Tanga coast',
    price: 6500,
    currency: CURRENCY,
    unit: 'per 500ml bottle',
    category: 'oils',
    images: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80',
    ],
    inStock: true,
    featured: true,
    attributes: { volume: '500ml', origin: 'Tanga, Tanzania' },
  },
  {
    id: 'p012',
    name: 'Pilipili Sauce (Hot Chilli Sauce)',
    description:
      'Homemade Tanzanian pilipili sauce made with fresh red chillis, garlic, and spices. The essential condiment for nyama choma, mishkaki, and chips. Medium-hot heat level. Made fresh in Dar es Salaam.',
    shortDescription: 'Authentic Tanzanian hot chilli (pilipili) sauce',
    price: 5500,
    currency: CURRENCY,
    unit: 'per 250ml jar',
    category: 'oils',
    images: [
      'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    attributes: { weight: '250ml', brand: 'Mama Nzuri' },
  },
  {
    id: 'p013',
    name: 'Fresh Farm Eggs (Crate)',
    description:
      'Fresh free-range eggs from local farms in Dar es Salaam. Collected daily for maximum freshness. Higher in omega-3 and vitamin D compared to cage-raised eggs. Great for all cooking.',
    shortDescription: 'Free-range farm-fresh eggs, collected daily',
    price: 12000,
    currency: CURRENCY,
    unit: 'per crate (30 eggs)',
    category: 'dairy',
    images: [
      'https://images.unsplash.com/photo-1518569656558-1f25e69d2b1d?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    attributes: { quantity: '30 eggs', origin: 'Dar es Salaam, Tanzania' },
  },
  {
    id: 'p014',
    name: 'Evaporated Milk (Carnation)',
    description:
      'Thick, creamy evaporated milk — a pantry staple for Tanzanian cooking. Use in uji, chai, tea, and desserts. Also great for enriching stews and sauces. Pack of 6 tins.',
    shortDescription: 'Creamy evaporated milk, pack of 6 tins',
    price: 18000,
    currency: CURRENCY,
    unit: 'per 6-tin pack',
    category: 'dairy',
    images: [
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    attributes: { brand: 'Carnation', volume: '6 × 410ml' },
  },
  {
    id: 'p015',
    name: 'Spiced Cassava Chips (Muhogo)',
    description:
      'Crunchy cassava (muhogo) chips seasoned with chilli and lime. Made from locally sourced cassava roots in Dar es Salaam, fried to a golden crisp. A satisfying Tanzanian street-food snack.',
    shortDescription: 'Chilli-lime cassava (muhogo) chips, locally made',
    price: 2500,
    currency: CURRENCY,
    unit: 'per 150g pack',
    category: 'snacks',
    images: [
      'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80',
    ],
    inStock: false,
    featured: false,
    attributes: { weight: '150g', brand: 'Dar Bites' },
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured)
}
