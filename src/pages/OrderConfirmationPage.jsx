import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Phone, Copy, Check, MessageCircle } from 'lucide-react'
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
      try { setOrder(JSON.parse(raw)) } catch { /* ignore */ }
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
    <main className="mx-auto max-w-lg px-4 sm:px-6 py-10">
      {/* Success */}
      <div className="text-center mb-8">
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 mb-4" aria-hidden="true" />
        <h1 className="text-3xl font-extrabold text-gray-900">Order Sent!</h1>
        <p className="mt-2 text-gray-600">
          Thanks, <strong>{order.customerName}</strong>! Your order has been sent to KibaMarket via WhatsApp.
        </p>
      </div>

      {/* Callback notice — most prominent card */}
      <div className="rounded-xl border-2 border-green-200 bg-green-50 p-5 mb-6 flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-600">
          <Phone className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="font-bold text-green-900 text-lg">We'll call you back!</p>
          <p className="text-sm text-green-800 mt-0.5">
            Expect a call from us at
          </p>
          <p className="text-2xl font-extrabold text-green-700 mt-1 tracking-wide">
            {order.customerPhone}
          </p>
          <p className="text-xs text-green-600 mt-1.5">
            We'll confirm your order and arrange delivery on the call.
          </p>
        </div>
      </div>

      {/* Order ref */}
      <div className="rounded-xl border bg-gray-50 p-4 mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Order Reference</p>
          <p className="text-lg font-bold font-mono text-gray-800 mt-0.5">{order.ref}</p>
        </div>
        <button
          onClick={copyRef}
          className="flex h-9 w-9 items-center justify-center rounded-md border bg-white text-gray-500 hover:text-gray-800 transition-colors flex-shrink-0"
          aria-label="Copy order reference"
        >
          {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>

      {/* Order items */}
      <div className="rounded-xl border bg-white p-5 mb-6">
        <h2 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Items Ordered</h2>
        <div className="space-y-3">
          {order.items.map(({ product, quantity }) => (
            <div key={product.id} className="flex items-center gap-3">
              <img
                src={product.images[0]}
                alt={product.name}
                loading="lazy"
                className="h-11 w-11 rounded-md object-cover bg-gray-100 flex-shrink-0"
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
        {order.notes && (
          <p className="mt-2 text-xs text-gray-500 italic">Note: {order.notes}</p>
        )}
      </div>

      {/* Resend WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-white font-semibold hover:bg-[#1db954] transition-colors mb-3"
      >
        <MessageCircle className="h-5 w-5" />
        Resend Order on WhatsApp
      </a>

      <div className="flex gap-3">
        <Button asChild variant="outline" className="flex-1">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
          <Link to="/catalog">Keep Shopping</Link>
        </Button>
      </div>
    </main>
  )
}
