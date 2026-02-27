import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCartSubtotal } from '@/store/cartStore'
import { CURRENCY } from '@/data/products'

export default function CartSummary({ onCheckout }) {
  const subtotal = useCartSubtotal()

  return (
    <div className="space-y-4">
      <Separator />

      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-semibold">{CURRENCY} {subtotal.toLocaleString()}</span>
      </div>

      {onCheckout ? (
        <Button
          onClick={onCheckout}
          asChild
          className="w-full bg-[#25D366] hover:bg-[#1db954] text-white font-semibold"
          size="lg"
        >
          <Link to="/checkout" onClick={onCheckout}>
            <MessageCircle className="mr-2 h-5 w-5" />
            Send Order via WhatsApp
          </Link>
        </Button>
      ) : (
        <Button asChild className="w-full bg-[#25D366] hover:bg-[#1db954] text-white font-semibold" size="lg">
          <Link to="/checkout">
            <MessageCircle className="mr-2 h-5 w-5" />
            Send Order via WhatsApp
          </Link>
        </Button>
      )}

      <p className="text-center text-xs text-gray-400">
        We'll call you back to confirm &amp; arrange delivery
      </p>
    </div>
  )
}
