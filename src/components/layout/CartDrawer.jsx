import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import CartItem from '@/components/cart/CartItem'
import CartSummary from '@/components/cart/CartSummary'
import useCartStore, { useCartItemCount } from '@/store/cartStore'

export default function CartDrawer() {
  const isOpen = useCartStore((s) => s.isOpen)
  const closeCart = useCartStore((s) => s.closeCart)
  const items = useCartStore((s) => s.items)
  const itemCount = useCartItemCount()

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md p-0">
        <SheetHeader className="px-6 py-4 border-b">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart
            {itemCount > 0 && (
              <span className="ml-1 rounded-full bg-green-600 px-2 py-0.5 text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-200" />
            <div>
              <p className="text-lg font-semibold text-gray-700">Your cart is empty</p>
              <p className="mt-1 text-sm text-gray-500">Add some fresh products to get started!</p>
            </div>
            <Button asChild variant="outline" onClick={closeCart}>
              <Link to="/catalog">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              <div className="divide-y">
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </div>

            <div className="border-t px-6 py-4">
              <CartSummary onCheckout={closeCart} />
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
