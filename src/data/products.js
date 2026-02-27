export const CATEGORIES = [
  { id: 'grains', label: 'Grains & Rice', emoji: '🌾' },
  { id: 'beverages', label: 'Beverages', emoji: '🥤' },
  { id: 'snacks', label: 'Snacks', emoji: '🍿' },
  { id: 'produce', label: 'Fresh Produce', emoji: '🥦' },
  { id: 'oils', label: 'Oils & Condiments', emoji: '🫙' },
  { id: 'dairy', label: 'Dairy & Eggs', emoji: '🥛' },
]

export const CURRENCY = 'GHS'

export const products = [
  {
    id: 'p001',
    name: 'Premium Basmati Rice',
    description:
      'Long-grain aromatic Basmati rice imported from India. Perfect for jollof, fried rice, and pilaf dishes. Each grain stays separate when cooked, giving your dishes a restaurant-quality texture.',
    shortDescription: 'Aromatic long-grain rice, perfect for jollof & pilaf',
    price: 45.0,
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
    name: 'Ghana Ofada Rice',
    description:
      'Locally grown Ofada rice from the Volta Region. Rich in nutrients and has a distinct earthy flavour that pairs beautifully with palm nut soup and ayoyo. Unpolished and naturally wholesome.',
    shortDescription: 'Local Volta Region rice, earthy and nutritious',
    price: 30.0,
    currency: CURRENCY,
    unit: 'per 2kg bag',
    category: 'grains',
    images: [
      'https://images.unsplash.com/photo-1568347877321-f8935c7dc5a0?w=600&q=80',
    ],
    inStock: true,
    featured: true,
    attributes: { weight: '2kg', origin: 'Ghana', brand: 'Volta Harvest' },
  },
  {
    id: 'p003',
    name: 'Whole Grain Millet',
    description:
      'Sun-dried whole grain millet sourced from Northern Ghana. High in iron and fibre. Ideal for porridge (koko), fermented drinks, and traditional waakye. Store in a cool, dry place.',
    shortDescription: 'Nutritious Northern Ghana millet for porridge & koko',
    price: 18.0,
    currency: CURRENCY,
    unit: 'per kg',
    category: 'grains',
    images: [
      'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    attributes: { weight: '1kg', origin: 'Northern Ghana' },
  },
  {
    id: 'p004',
    name: 'Malta Guinness (Pack of 6)',
    description:
      'The classic non-alcoholic malt beverage loved across West Africa. Rich in B vitamins and brewed for a full-bodied, refreshing taste. Great for all ages. Serve chilled for best experience.',
    shortDescription: 'Classic West African malt drink, pack of 6 cans',
    price: 36.0,
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
    name: 'Sobolo (Hibiscus Drink) 1L',
    description:
      'Freshly made hibiscus drink (sobolo) infused with ginger, cloves, and cinnamon. Made with no artificial preservatives. A refreshing, antioxidant-rich beverage. Keep refrigerated after opening.',
    shortDescription: 'Fresh hibiscus & ginger drink, locally made',
    price: 15.0,
    currency: CURRENCY,
    unit: 'per 1L bottle',
    category: 'beverages',
    images: [
      'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    attributes: { volume: '1L', brand: 'HomeGrown Drinks' },
  },
  {
    id: 'p006',
    name: 'Freshpak Rooibos Tea (40 bags)',
    description:
      'South African rooibos herbal tea, naturally caffeine-free. Rich in antioxidants with a sweet, earthy flavour. Perfect for early mornings or winding down in the evening. No artificial flavours.',
    shortDescription: 'Caffeine-free South African rooibos herbal tea',
    price: 22.0,
    currency: CURRENCY,
    unit: 'per 40-bag box',
    category: 'beverages',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    ],
    inStock: false,
    featured: false,
    attributes: { brand: 'Freshpak', quantity: '40 bags' },
  },
  {
    id: 'p007',
    name: 'Plantain Chips (Salted)',
    description:
      'Crispy thinly sliced plantain chips lightly seasoned with sea salt. Fried in sunflower oil. A classic West African snack made from locally sourced ripe plantains. Great for entertaining.',
    shortDescription: 'Crispy salted plantain chips, locally made',
    price: 8.0,
    currency: CURRENCY,
    unit: 'per 200g pack',
    category: 'snacks',
    images: [
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=80',
    ],
    inStock: true,
    featured: true,
    attributes: { weight: '200g', brand: 'Crunchy Farms' },
  },
  {
    id: 'p008',
    name: 'Groundnut (Peanut) Brittle',
    description:
      'Traditional peanut brittle (nkate cake) made with roasted groundnuts and cane sugar. No artificial additives. A beloved Ghanaian snack enjoyed by all ages. Individually wrapped pieces.',
    shortDescription: 'Traditional Ghanaian peanut brittle (nkate cake)',
    price: 5.0,
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
      'Ripe, juicy tomatoes freshly sourced from local farms in the Brong-Ahafo Region. Perfect for soups, stews, jollof rice, and salads. Delivered fresh within 24 hours of harvest.',
    shortDescription: 'Farm-fresh tomatoes from Brong-Ahafo Region',
    price: 12.0,
    currency: CURRENCY,
    unit: 'per kg',
    category: 'produce',
    images: [
      'https://images.unsplash.com/photo-1546470427-227c5f56e6f8?w=600&q=80',
      'https://images.unsplash.com/photo-1558818498-28c1e002b655?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    attributes: { origin: 'Brong-Ahafo, Ghana' },
  },
  {
    id: 'p010',
    name: 'Garden Eggs (Eggplant)',
    description:
      'Small, round African garden eggs (white eggplant) grown organically without pesticides. A staple ingredient in Ghanaian and Nigerian cooking — essential for garden egg stew and garden egg sauce.',
    shortDescription: 'Organic white eggplant, essential for garden egg stew',
    price: 9.0,
    currency: CURRENCY,
    unit: 'per kg',
    category: 'produce',
    images: [
      'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    attributes: { origin: 'Eastern Region, Ghana' },
  },
  {
    id: 'p011',
    name: 'Unrefined Red Palm Oil',
    description:
      'Pure, unrefined red palm oil (zomi) from the Western Region of Ghana. Rich in beta-carotene and vitamin E. Used in traditional soups, stews, and rice dishes. No bleaching or deodorising.',
    shortDescription: 'Pure unrefined Ghanaian palm oil (zomi), vitamin-rich',
    price: 18.0,
    currency: CURRENCY,
    unit: 'per 1L bottle',
    category: 'oils',
    images: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80',
    ],
    inStock: true,
    featured: true,
    attributes: { volume: '1L', origin: 'Western Region, Ghana' },
  },
  {
    id: 'p012',
    name: 'Shito (Black Pepper Sauce)',
    description:
      'Hot, smoky Ghanaian shito made with dried fish, dried shrimps, ground pepper, and spices. The ultimate Ghanaian condiment — pairs perfectly with kenkey, banku, rice, and kelewele.',
    shortDescription: 'Authentic Ghanaian shito — hot black pepper sauce',
    price: 14.0,
    currency: CURRENCY,
    unit: 'per 250g jar',
    category: 'oils',
    images: [
      'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    attributes: { weight: '250g', brand: 'Grandma\'s Recipe' },
  },
  {
    id: 'p013',
    name: 'Fresh Farm Eggs (Crate)',
    description:
      'Fresh free-range eggs from local farms. Collected daily, so you always get the freshest eggs possible. Higher in omega-3 and vitamin D compared to cage-raised eggs. Great for all cooking.',
    shortDescription: 'Free-range farm-fresh eggs, collected daily',
    price: 40.0,
    currency: CURRENCY,
    unit: 'per crate (30 eggs)',
    category: 'dairy',
    images: [
      'https://images.unsplash.com/photo-1518569656558-1f25e69d2b1d?w=600&q=80',
    ],
    inStock: true,
    featured: false,
    attributes: { quantity: '30 eggs', origin: 'Accra, Ghana' },
  },
  {
    id: 'p014',
    name: 'Evaporated Milk (Carnation)',
    description:
      'Thick, creamy evaporated milk — a pantry staple for Ghanaian cooking. Use in porridge (koko), oats, tea, and desserts. Also great for enriching soups and sauces. Pack of 6 tins.',
    shortDescription: 'Creamy evaporated milk, pack of 6 tins',
    price: 48.0,
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
    name: 'Spiced Cassava Chips',
    description:
      'Crunchy cassava (yuca) chips seasoned with chili and lime. Made from locally sourced cassava roots, fried to a golden crisp. A satisfying snack with a West African twist.',
    shortDescription: 'Chili-lime cassava chips, locally sourced',
    price: 7.0,
    currency: CURRENCY,
    unit: 'per 150g pack',
    category: 'snacks',
    images: [
      'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80',
    ],
    inStock: false,
    featured: false,
    attributes: { weight: '150g', brand: 'Savanna Bites' },
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
