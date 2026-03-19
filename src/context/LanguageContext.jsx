import { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    'nav.about': 'About Us',
    'nav.catalog': 'Catalog',
    'nav.contact': 'Contact',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.openCart': (n) => `Open cart, ${n} item${n !== 1 ? 's' : ''}`,

    'hero.line1': 'Shop for',
    'hero.line2': 'Health Food Products',
    'hero.subtitle': 'Browse good natural foods to keep you strong and healthy — order by WhatsApp.',
    'hero.cta': 'Shop Now',

    'home.featured': 'Featured Products',
    'home.viewAll': 'View all',
    'home.categories': 'Shop by Category',
    'home.cta.title': 'Ready to order?',
    'home.cta.subtitle': "Browse our full catalog and place your order — we'll confirm via WhatsApp.",
    'home.cta.btn': 'Browse Catalog',

    'product.inStock': 'In Stock',
    'product.outOfStock': 'Out of Stock',
    'product.add': 'Add',
    'product.addToCart': 'Add to Cart',
    'product.addLabel': (name) => `Add ${name} to cart`,
    'product.details': 'Product Details',
    'product.related': 'More from this Category',
    'product.total': 'Total',
    'product.notFound': 'Product not found.',
    'product.backToCatalog': 'Back to Catalog',
    'product.back': 'Back',
    'product.viewImage': (n) => `View image ${n}`,

    'catalog.title': 'Product Catalog',
    'catalog.search': 'Search products…',
    'catalog.clearSearch': 'Clear search',
    'catalog.found': (n) => `${n} product${n !== 1 ? 's' : ''} found`,
    'catalog.filters': 'Filters',
    'catalog.filtersActive': 'Active',
    'catalog.category': 'Category',
    'catalog.priceRange': 'Price Range',
    'catalog.inStockOnly': 'In stock only',
    'catalog.reset': 'Reset Filters',
    'catalog.sortDefault': 'Default',
    'catalog.sortPriceAsc': 'Price: Low to High',
    'catalog.sortPriceDesc': 'Price: High to Low',
    'catalog.sortNameAsc': 'Name: A–Z',
    'catalog.noResults': 'No products found',
    'catalog.noResultsDesc': 'Try adjusting your search or filters.',

    'cart.title': 'Your Cart',
    'cart.empty': 'Your cart is empty',
    'cart.emptyDesc': 'Add some fresh products to get started!',
    'cart.browse': 'Browse Products',
    'cart.subtotal': 'Subtotal',
    'cart.deliveryTbd': 'Delivery TBD on callback',
    'cart.send': 'Send Order via WhatsApp',
    'cart.callbackNote': "We'll call you back to confirm & arrange delivery",
    'cart.removeLabel': (name) => `Remove ${name} from cart`,
    'cart.decrease': 'Decrease quantity',
    'cart.increase': 'Increase quantity',
    'cart.pageTitle': 'Your Cart',

    'checkout.title': 'Send Your Order',
    'checkout.subtitle': "Enter your name and number — we'll send the order to WhatsApp and call you back to confirm.",
    'checkout.name': 'Your Name',
    'checkout.namePlaceholder': 'e.g. Amina Hassan',
    'checkout.phone': 'Phone Number',
    'checkout.phonePlaceholder': '+255 7XX XXX XXX',
    'checkout.phoneHint': "We'll call you at this number to confirm your order.",
    'checkout.notes': 'Notes',
    'checkout.notesOptional': '(optional)',
    'checkout.notesPlaceholder': 'Any special requests or delivery instructions…',
    'checkout.send': 'Send Order via WhatsApp',
    'checkout.sending': 'Sending…',
    'checkout.hint': "Tapping the button above will open WhatsApp with your order details. We'll call you back to confirm.",
    'checkout.summary': 'Order Summary',
    'checkout.deliveryTbd': 'Delivery TBD on callback',
    'checkout.emptyCart': 'Your cart is empty.',

    'confirm.title': 'Order Sent!',
    'confirm.subtitle': (name) => `Thanks, ${name}! Your order has been sent to KibaMarket via WhatsApp.`,
    'confirm.callbackTitle': "We'll call you back!",
    'confirm.callbackExpect': 'Expect a call from us at',
    'confirm.callbackNote': "We'll confirm your order and arrange delivery on the call.",
    'confirm.ref': 'Order Reference',
    'confirm.copyRef': 'Copy order reference',
    'confirm.screenshot': 'Screenshot this for your records',
    'confirm.items': 'Items Ordered',
    'confirm.subtotal': 'Subtotal',
    'confirm.note': 'Note',
    'confirm.resend': 'Resend Order on WhatsApp',
    'confirm.home': 'Home',
    'confirm.keepShopping': 'Keep Shopping',
    'confirm.noOrder': 'No order found.',
    'confirm.goHome': 'Go Home',

    'footer.tagline': 'Your trusted source for fresh food products in Dar es Salaam. Quality ingredients delivered to your door.',
    'footer.whatsapp': 'Chat on WhatsApp',
    'footer.contactTitle': 'Contact Us',
    'footer.hoursTitle': 'Operating Hours',
    'footer.rights': (y) => `© ${y} KibaMarket. All rights reserved.`,

    'contact.title': 'Contact & About',
    'contact.desc': "KibaMarket is your neighbourhood food store in Dar es Salaam, offering fresh produce, pantry staples, and quality ingredients. Browse online and order via WhatsApp — we'll take care of the rest.",
    'contact.getInTouch': 'Get In Touch',
    'contact.phoneTap': 'Phone (tap to call)',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.directions': 'Get Directions',
    'contact.hoursTitle': 'Operating Hours',
    'contact.mapTitle': 'KibaMarket location map',
    'contact.ctaTitle': 'Ready to order?',
    'contact.ctaDesc': 'Place your order online and confirm via WhatsApp. Fast, simple, no account needed.',
    'contact.ctaBtn': 'Chat with Us on WhatsApp',
  },

  sw: {
    'nav.about': 'Kuhusu Sisi',
    'nav.catalog': 'Katalogi',
    'nav.contact': 'Mawasiliano',
    'nav.openMenu': 'Fungua menyu',
    'nav.closeMenu': 'Funga menyu',
    'nav.openCart': (n) => `Fungua mkoba, bidhaa ${n}`,

    'hero.line1': 'Nunua',
    'hero.line2': 'Bidhaa za Chakula cha Afya',
    'hero.subtitle': 'Tazama vyakula vya asili vizuri kukufanya uwe na nguvu na afya — agiza kwa WhatsApp.',
    'hero.cta': 'Nunua Sasa',

    'home.featured': 'Bidhaa Maarufu',
    'home.viewAll': 'Tazama zote',
    'home.categories': 'Nunua kwa Aina',
    'home.cta.title': 'Uko tayari kuagiza?',
    'home.cta.subtitle': 'Tazama katalogi yetu yote na uweke agizo lako — tutakubaliana kwa WhatsApp.',
    'home.cta.btn': 'Tazama Katalogi',

    'product.inStock': 'Ipo',
    'product.outOfStock': 'Haipatikani',
    'product.add': 'Ongeza',
    'product.addToCart': 'Ongeza kwenye Mkoba',
    'product.addLabel': (name) => `Ongeza ${name} kwenye mkoba`,
    'product.details': 'Maelezo ya Bidhaa',
    'product.related': 'Zaidi kutoka Aina Hii',
    'product.total': 'Jumla',
    'product.notFound': 'Bidhaa haikupatikana.',
    'product.backToCatalog': 'Rudi kwenye Katalogi',
    'product.back': 'Rudi',
    'product.viewImage': (n) => `Tazama picha ${n}`,

    'catalog.title': 'Katalogi ya Bidhaa',
    'catalog.search': 'Tafuta bidhaa…',
    'catalog.clearSearch': 'Futa utafutaji',
    'catalog.found': (n) => `Bidhaa ${n} zimepatikana`,
    'catalog.filters': 'Vichujio',
    'catalog.filtersActive': 'Amilifu',
    'catalog.category': 'Aina',
    'catalog.priceRange': 'Kiwango cha Bei',
    'catalog.inStockOnly': 'Zinazopatikana tu',
    'catalog.reset': 'Futa Vichujio',
    'catalog.sortDefault': 'Kawaida',
    'catalog.sortPriceAsc': 'Bei: Chini kwenda Juu',
    'catalog.sortPriceDesc': 'Bei: Juu kwenda Chini',
    'catalog.sortNameAsc': 'Jina: A–Z',
    'catalog.noResults': 'Hakuna bidhaa zilizopatikana',
    'catalog.noResultsDesc': 'Jaribu kubadilisha utafutaji au vichujio vyako.',

    'cart.title': 'Mkoba Wako',
    'cart.empty': 'Mkoba wako uko tupu',
    'cart.emptyDesc': 'Ongeza bidhaa mpya kuanza!',
    'cart.browse': 'Tazama Bidhaa',
    'cart.subtotal': 'Jumla Ndogo',
    'cart.deliveryTbd': 'Utoaji utakubalianwa kwa simu',
    'cart.send': 'Tuma Agizo kwa WhatsApp',
    'cart.callbackNote': 'Tutakupigia simu kukubaliana na kupanga utoaji',
    'cart.removeLabel': (name) => `Ondoa ${name} kutoka mkobani`,
    'cart.decrease': 'Punguza idadi',
    'cart.increase': 'Ongeza idadi',
    'cart.pageTitle': 'Mkoba Wako',

    'checkout.title': 'Tuma Agizo Lako',
    'checkout.subtitle': 'Weka jina na nambari yako — tutatuma agizo kwa WhatsApp na kukupigia simu kukubaliana.',
    'checkout.name': 'Jina Lako',
    'checkout.namePlaceholder': 'mfano: Amina Hassan',
    'checkout.phone': 'Nambari ya Simu',
    'checkout.phonePlaceholder': '+255 7XX XXX XXX',
    'checkout.phoneHint': 'Tutakupigia simu kwa nambari hii kukubaliana agizo lako.',
    'checkout.notes': 'Maelezo',
    'checkout.notesOptional': '(si lazima)',
    'checkout.notesPlaceholder': 'Maombi maalum au maelekezo ya utoaji…',
    'checkout.send': 'Tuma Agizo kwa WhatsApp',
    'checkout.sending': 'Inatuma…',
    'checkout.hint': 'Kubonyeza kitufe hapo juu kutafungua WhatsApp na maelezo ya agizo lako. Tutakupigia simu kukubaliana.',
    'checkout.summary': 'Muhtasari wa Agizo',
    'checkout.deliveryTbd': 'Utoaji utakubalianwa kwa simu',
    'checkout.emptyCart': 'Mkoba wako uko tupu.',

    'confirm.title': 'Agizo Limetumwa!',
    'confirm.subtitle': (name) => `Asante, ${name}! Agizo lako limetumwa kwa KibaMarket kwa WhatsApp.`,
    'confirm.callbackTitle': 'Tutakupigia simu!',
    'confirm.callbackExpect': 'Tarajia simu kutoka kwetu kwa',
    'confirm.callbackNote': 'Tutakubaliana agizo lako na kupanga utoaji kwa simu.',
    'confirm.ref': 'Nambari ya Agizo',
    'confirm.copyRef': 'Nakili nambari ya agizo',
    'confirm.screenshot': 'Piga picha kwa kumbukumbu yako',
    'confirm.items': 'Bidhaa Zilizoagizwa',
    'confirm.subtotal': 'Jumla Ndogo',
    'confirm.note': 'Maelezo',
    'confirm.resend': 'Tuma Tena kwa WhatsApp',
    'confirm.home': 'Nyumbani',
    'confirm.keepShopping': 'Endelea Kununua',
    'confirm.noOrder': 'Hakuna agizo lililopatikana.',
    'confirm.goHome': 'Nenda Nyumbani',

    'footer.tagline': 'Chanzo chako cha kuaminika cha bidhaa za chakula huko Dar es Salaam. Viungo vya ubora vilivyoletwa mlangoni mwako.',
    'footer.whatsapp': 'Ongea kwa WhatsApp',
    'footer.contactTitle': 'Wasiliana Nasi',
    'footer.hoursTitle': 'Masaa ya Kufungua',
    'footer.rights': (y) => `© ${y} KibaMarket. Haki zote zimehifadhiwa.`,

    'contact.title': 'Mawasiliano & Kuhusu',
    'contact.desc': 'KibaMarket ni duka lako la karibu la chakula huko Dar es Salaam, linalotengeneza mazao mapya, bidhaa za ghala, na viungo vya ubora. Angalia mtandaoni na uagize kwa WhatsApp — tutashughulikia mengine.',
    'contact.getInTouch': 'Wasiliana Nasi',
    'contact.phoneTap': 'Simu (gusa kupiga)',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Barua pepe',
    'contact.address': 'Anwani',
    'contact.directions': 'Pata Maelekezo',
    'contact.hoursTitle': 'Masaa ya Kufungua',
    'contact.mapTitle': 'Ramani ya KibaMarket',
    'contact.ctaTitle': 'Uko tayari kuagiza?',
    'contact.ctaDesc': 'Weka agizo lako mtandaoni na ukubaliane kwa WhatsApp. Haraka, rahisi, bila akaunti.',
    'contact.ctaBtn': 'Ongea Nasi kwa WhatsApp',
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem('kiba-lang') || 'en'
  )

  function toggleLang() {
    const next = lang === 'en' ? 'sw' : 'en'
    setLang(next)
    localStorage.setItem('kiba-lang', next)
  }

  function t(key, ...args) {
    const val = translations[lang]?.[key] ?? translations.en[key] ?? key
    return typeof val === 'function' ? val(...args) : val
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
