import { Minus, Plus, Trash2 } from 'lucide-react'
import useCartStore from '@/store/cartStore'

export default function CartItem({ item }) {
  const { product, quantity } = item
  const updateQuantity = useCartStore((s) => s.updateQuantity)
  const removeItem = useCartStore((s) => s.removeItem)

  return (
    <div className="flex gap-3 py-4">
      {/* Thumbnail */}
      <img
        src={product.images[0]}
        alt={product.name}
        loading="lazy"
        className="h-16 w-16 flex-shrink-0 rounded-md object-cover bg-gray-100"
      />

      {/* Details */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 line-clamp-2">{product.name}</p>
        <p className="text-xs text-gray-500 mt-0.5">{product.unit}</p>

        <div className="mt-2 flex items-center justify-between gap-2">
          {/* Qty controls */}
          <div className="flex items-center gap-1 rounded-md border">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="flex h-8 w-8 items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l-md transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-8 text-center text-sm font-medium">{quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="flex h-8 w-8 items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r-md transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>

          {/* Line total */}
          <span className="text-sm font-semibold text-gray-900">
            {product.currency} {(product.price * quantity).toLocaleString()}
          </span>
        </div>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeItem(product.id)}
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
        aria-label={`Remove ${product.name} from cart`}
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  )
}
