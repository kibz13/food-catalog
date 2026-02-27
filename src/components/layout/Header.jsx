import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import useCartStore, { useCartItemCount } from '@/store/cartStore'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const itemCount = useCartItemCount()
  const toggleCart = useCartStore((s) => s.toggleCart)

  const navLinks = [
    { to: '/catalog', label: 'Catalog' },
    { to: '/contact', label: 'Contact' },
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

          <div className="flex items-center gap-2">
            {/* Cart button */}
            <button
              onClick={toggleCart}
              className="relative flex h-11 w-11 items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label={`Open cart, ${itemCount} item${itemCount !== 1 ? 's' : ''}`}
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
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
