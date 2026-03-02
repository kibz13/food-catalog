import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronLeft, Minus, Plus, ShoppingCart } from 'lucide-react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ProductCard from '@/components/catalog/ProductCard'
import useCartStore from '@/store/cartStore'
import { getProductById, getProductsByCategory } from '@/data/products'
import { useLanguage } from '@/context/LanguageContext'

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { t } = useLanguage()

  const [qty, setQty] = useState(1)
  const [mainIdx, setMainIdx] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIdx, setLightboxIdx] = useState(0)

  const addItem = useCartStore((s) => s.addItem)

  if (!product) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-xl font-semibold text-gray-700">{t('product.notFound')}</p>
        <Button asChild className="mt-4">
          <Link to="/catalog">{t('product.backToCatalog')}</Link>
        </Button>
      </main>
    )
  }

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  function handleAddToCart() {
    addItem(product, qty)
    toast.success(`${product.name} × ${qty} — ${t('product.inStock')}`)
  }

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <nav className="mb-6" aria-label="Breadcrumb">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          {t('product.back')}
        </button>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div>
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 cursor-zoom-in"
            onClick={() => { setLightboxOpen(true); setLightboxIdx(mainIdx) }}
          >
            <img
              src={product.images[mainIdx]}
              alt={product.name}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="mt-3 flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainIdx(i)}
                  className={`relative h-16 w-16 overflow-hidden rounded-md border-2 transition-colors ${
                    i === mainIdx ? 'border-green-600' : 'border-transparent'
                  }`}
                  aria-label={t('product.viewImage', i + 1)}
                  aria-pressed={i === mainIdx}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            index={lightboxIdx}
            slides={product.images.map((src) => ({ src }))}
          />
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-2">
            <Badge variant={product.inStock ? 'success' : 'danger'}>
              {product.inStock ? t('product.inStock') : t('product.outOfStock')}
            </Badge>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-green-700">
              {product.currency} {product.price.toLocaleString()}
            </span>
            <span className="text-gray-500 text-sm">{product.unit}</span>
          </div>

          <div className="mt-5 prose prose-sm text-gray-700 max-w-none">
            {product.description.split('\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {product.attributes && Object.keys(product.attributes).length > 0 && (
            <div className="mt-5 rounded-lg border bg-gray-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
                {t('product.details')}
              </p>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {Object.entries(product.attributes).map(([key, val]) => (
                  <div key={key} className="contents">
                    <dt className="font-medium text-gray-600 capitalize">{key}</dt>
                    <dd className="text-gray-800">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Add to cart */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-md border">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-11 w-11 items-center justify-center hover:bg-gray-100 transition-colors rounded-l-md"
                  aria-label={t('cart.decrease')}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-14 text-center text-base font-semibold border-x focus:outline-none h-11"
                  aria-label={t('product.quantity') ?? 'Quantity'}
                />
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="flex h-11 w-11 items-center justify-center hover:bg-gray-100 transition-colors rounded-r-md"
                  aria-label={t('cart.increase')}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <span className="text-sm text-gray-500">
                {t('product.total')}: <strong>{product.currency} {(product.price * qty).toLocaleString()}</strong>
              </span>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.inStock ? t('product.addToCart') : t('product.outOfStock')}
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-5">{t('product.related')}</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:overflow-visible">
            {related.map((p) => (
              <div key={p.id} className="min-w-[220px] sm:min-w-0 flex-shrink-0 sm:flex-shrink">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
