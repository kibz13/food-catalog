import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CartItem from '@/components/cart/CartItem'
import CartSummary from '@/components/cart/CartSummary'
import useCartStore from '@/store/cartStore'

export default function CartPage() {
  const items = useCartStore((s) => s.items)

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <ShoppingBag className="mx-auto h-20 w-20 text-gray-200 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800">Your cart is empty</h1>
        <p className="mt-2 text-gray-500">Looks like you haven't added anything yet.</p>
        <Button asChild className="mt-6 bg-green-600 hover:bg-green-700" size="lg">
          <Link to="/catalog">Browse Products</Link>
        </Button>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Item list */}
        <div className="md:col-span-2">
          <div className="rounded-xl border bg-white divide-y px-4">
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="md:col-span-1">
          <div className="rounded-xl border bg-white p-5 sticky top-20">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <CartSummary />
          </div>
        </div>
      </div>
    </main>
  )
}
