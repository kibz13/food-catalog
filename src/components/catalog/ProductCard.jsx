import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import useCartStore from '@/store/cartStore'
import { useLanguage } from '@/context/LanguageContext'

export default function ProductCard({ product }) {
  const addItem = useCartStore((s) => s.addItem)
  const { t } = useLanguage()

  function handleAddToCart(e) {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 1)
    toast.success(`${product.name} — ${t('product.inStock')}`, { duration: 2000 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block rounded-xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-800">
              {t('product.outOfStock')}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 flex-1">
            {product.name}
          </h3>
          <Badge
            variant={product.inStock ? 'success' : 'danger'}
            className="flex-shrink-0 text-[10px]"
          >
            {product.inStock ? t('product.inStock') : t('product.outOfStock')}
          </Badge>
        </div>

        <p className="text-xs text-gray-500 line-clamp-1 mb-3">{product.shortDescription}</p>

        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="text-base font-bold text-gray-900">
              {product.currency} {product.price.toLocaleString()}
            </span>
            <span className="ml-1 text-xs text-gray-500">{product.unit}</span>
          </div>

          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="h-9 bg-green-600 hover:bg-green-700 text-white flex-shrink-0"
            aria-label={t('product.addLabel', product.name)}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline ml-1">{t('product.add')}</span>
          </Button>
        </div>
      </div>
    </Link>
  )
}
