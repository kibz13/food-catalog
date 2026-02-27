import { Link } from 'react-router-dom'
import { Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCartSubtotal } from '@/store/cartStore'
import { CURRENCY } from '@/data/products'

export default function CartSummary({ onCheckout }) {
  const subtotal = useCartSubtotal()

  return (
    <div className="space-y-4">
      <Separator />

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">{CURRENCY} {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-700 text-xs bg-amber-50 rounded-md p-2.5">
          <Truck className="h-4 w-4 flex-shrink-0" />
          <span>Delivery fee will be confirmed upon order</span>
        </div>
      </div>

      <div className="flex justify-between font-semibold text-base border-t pt-3">
        <span>Total (excl. delivery)</span>
        <span>{CURRENCY} {subtotal.toLocaleString()}</span>
      </div>

      {onCheckout ? (
        <Button onClick={onCheckout} className="w-full bg-green-600 hover:bg-green-700" size="lg">
          Proceed to Checkout
        </Button>
      ) : (
        <Button asChild className="w-full bg-green-600 hover:bg-green-700" size="lg">
          <Link to="/checkout">Proceed to Checkout</Link>
        </Button>
      )}
    </div>
  )
}
