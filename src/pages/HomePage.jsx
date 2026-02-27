import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/catalog/ProductCard'
import { getFeaturedProducts, CATEGORIES } from '@/data/products'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&q=80'

export default function HomePage() {
  const featured = getFeaturedProducts()

  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-gray-900"
        aria-label="Hero banner"
      >
        <img
          src={HERO_IMAGE}
          alt="Colourful African food market"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          loading="eager"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
            Shop for<br />
            <span className="text-green-400">Health Food Products</span>
          </h1>
          <p className="mt-4 text-lg text-gray-100 drop-shadow max-w-xl mx-auto">
            Browse good natural foods to keep you strong and healthy —
            order by WhatsApp.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-green-500 hover:bg-green-600 text-white shadow-lg"
          >
            <Link to="/catalog">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
            <Link
              to="/catalog"
              className="flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700"
            >
              View all <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          {/* Horizontal scroll on mobile */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:overflow-visible">
            {featured.map((product) => (
              <div key={product.id} className="min-w-[220px] sm:min-w-0 flex-shrink-0 sm:flex-shrink">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/catalog?category=${cat.id}`}
                className="group flex flex-col items-center gap-3 rounded-xl border bg-white p-5 text-center shadow-sm hover:shadow-md hover:border-green-300 transition-all"
              >
                <span className="text-4xl" role="img" aria-label={cat.label}>
                  {cat.emoji}
                </span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition-colors">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-green-700">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Ready to order?
          </h2>
          <p className="text-green-100 mb-6">
            Browse our full catalog and place your order — we'll confirm via WhatsApp.
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
            <Link to="/catalog">Browse Catalog</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
