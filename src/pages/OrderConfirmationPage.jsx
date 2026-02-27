import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, MessageCircle, Phone, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { buildWhatsAppUrl } from '@/utils/whatsapp'
import { CURRENCY } from '@/data/products'

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const raw = sessionStorage.getItem('lastOrder')
    if (raw) {
      try {
        setOrder(JSON.parse(raw))
      } catch { /* ignore */ }
    }
  }, [])

  if (!order) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-xl font-semibold text-gray-700">No order found.</p>
        <Button asChild className="mt-4" variant="outline">
          <Link to="/">Go Home</Link>
        </Button>
      </main>
    )
  }

  const whatsappUrl = buildWhatsAppUrl(order)

  async function copyRef() {
    await navigator.clipboard.writeText(order.ref)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="mx-auto max-w-2xl px-4 sm:px-6 py-10">
      {/* Success header */}
      <div className="text-center mb-8">
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 mb-4" aria-hidden="true" />
        <h1 className="text-3xl font-extrabold text-gray-900">Order Placed!</h1>
        <p className="mt-2 text-gray-600">
          Thank you, <strong>{order.fullName}</strong>! We'll confirm your order shortly.
        </p>
      </div>

      {/* Order ref */}
      <div className="rounded-xl border-2 border-green-200 bg-green-50 p-5 text-center mb-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-700 mb-2">
          Order Reference
        </p>
        <div className="flex items-center justify-center gap-3">
          <span className="text-2xl font-extrabold tracking-wider text-green-800 font-mono">
            {order.ref}
          </span>
          <button
            onClick={copyRef}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-green-300 bg-white text-green-700 hover:bg-green-100 transition-colors"
            aria-label="Copy order reference"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
        <p className="mt-2 text-xs text-green-600">Screenshot this for your records</p>
      </div>

      {/* Order items */}
      <div className="rounded-xl border bg-white p-5 mb-5">
        <h2 className="font-semibold text-gray-900 mb-4">Items Ordered</h2>
        <div className="space-y-3">
          {order.items.map(({ product, quantity }) => (
            <div key={product.id} className="flex items-center gap-3">
              <img
                src={product.images[0]}
                alt={product.name}
                loading="lazy"
                className="h-12 w-12 rounded-md object-cover bg-gray-100 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium line-clamp-1">{product.name}</p>
                <p className="text-xs text-gray-500">{product.unit} × {quantity}</p>
              </div>
              <span className="text-sm font-semibold flex-shrink-0">
                {CURRENCY} {(product.price * quantity).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
        <Separator className="my-3" />
        <div className="flex justify-between font-bold">
          <span>Subtotal</span>
          <span>{CURRENCY} {order.subtotal.toLocaleString()}</span>
        </div>
      </div>

      {/* Contact confirmation */}
      <div className="rounded-xl border bg-amber-50 border-amber-200 p-4 mb-6 flex items-start gap-3">
        <Phone className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm font-semibold text-amber-800">We'll contact you at:</p>
          <p className="text-lg font-bold text-amber-900">{order.phone}</p>
          <p className="text-xs text-amber-700 mt-1">
            Our team will call or WhatsApp you to confirm and arrange {order.fulfillmentMethod}.
          </p>
        </div>
      </div>

      {/* WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-white font-semibold hover:bg-[#1db954] transition-colors mb-4"
      >
        <MessageCircle className="h-5 w-5" />
        Send Order via WhatsApp
      </a>

      <p className="text-center text-xs text-gray-500 mb-8">
        Tapping the button above will open WhatsApp with your order details pre-filled.
      </p>

      {/* Continue shopping */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild variant="outline" className="flex-1">
          <Link to="/">Go Home</Link>
        </Button>
        <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
          <Link to="/catalog">Continue Shopping</Link>
        </Button>
      </div>
    </main>
  )
}
