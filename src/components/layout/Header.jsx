import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react'
import { useState } from 'react'
import useCartStore, { useCartItemCount } from '@/store/cartStore'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const itemCount = useCartItemCount()
  const toggleCart = useCartStore((s) => s.toggleCart)
  const { t, lang, toggleLang } = useLanguage()

  const navLinks = [
    { to: '/catalog', label: t('nav.catalog') },
    { to: '/contact', label: t('nav.contact') },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 min-h-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">KibaMarket</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-green-600 ${
                    isActive ? 'text-green-600' : 'text-gray-600'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex h-9 items-center gap-1 rounded-full border border-gray-200 px-3 text-xs font-semibold text-gray-600 hover:border-green-400 hover:text-green-700 transition-colors"
              aria-label={lang === 'en' ? 'Switch to Swahili' : 'Badili kwa Kiingereza'}
            >
              <span className="text-sm">{lang === 'en' ? '🇹🇿' : '🇬🇧'}</span>
              {lang === 'en' ? 'SW' : 'EN'}
            </button>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className="relative flex h-11 w-11 items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label={t('nav.openCart', itemCount)}
            >
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              {itemCount > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white"
                >
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-gray-100 transition-colors md:hidden"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="border-t py-3 md:hidden">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-base font-medium transition-colors hover:text-green-600 ${
                    isActive ? 'text-green-600' : 'text-gray-700'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
