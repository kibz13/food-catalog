import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MessageCircle, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import useCartStore, { useCartSubtotal } from '@/store/cartStore'
import { buildWhatsAppUrl, generateOrderRef } from '@/utils/whatsapp'
import { CURRENCY } from '@/data/products'
import { useLanguage } from '@/context/LanguageContext'

const schema = z.object({
  customerName: z.string().min(2, 'Please enter your full name'),
  customerPhone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .regex(/^[+\d\s\-()]{7,20}$/, 'Invalid phone number format'),
  notes: z.string().optional(),
})

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items)
  const clearCart = useCartStore((s) => s.clearCart)
  const subtotal = useCartSubtotal()
  const navigate = useNavigate()
  const { t } = useLanguage()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) })

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <ShoppingBag className="mx-auto h-16 w-16 text-gray-200 mb-4" />
        <p className="text-xl font-semibold text-gray-700">{t('checkout.emptyCart')}</p>
        <Button asChild className="mt-4 bg-green-600 hover:bg-green-700">
          <Link to="/catalog">{t('cart.browse')}</Link>
        </Button>
      </main>
    )
  }

  function onSubmit(data) {
    const orderRef = generateOrderRef()
    const order = {
      ref: orderRef,
      ...data,
      items,
      subtotal,
      currency: CURRENCY,
      placedAt: new Date().toISOString(),
    }
    const whatsappUrl = buildWhatsAppUrl(order)
    sessionStorage.setItem('lastOrder', JSON.stringify(order))
    clearCart()
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    navigate('/order-confirmation')
  }

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('checkout.title')}</h1>
      <p className="text-gray-500 mb-8">{t('checkout.subtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-3 space-y-5" noValidate>
          <div className="rounded-xl border bg-white p-6 space-y-5">
            {/* Name */}
            <div>
              <Label htmlFor="customerName">{t('checkout.name')} *</Label>
              <Input
                id="customerName"
                {...register('customerName')}
                placeholder={t('checkout.namePlaceholder')}
                className={`mt-1.5 ${errors.customerName ? 'border-red-500' : ''}`}
                autoComplete="name"
              />
              {errors.customerName && (
                <p className="mt-1 text-xs text-red-600" role="alert">
                  {errors.customerName.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="customerPhone">{t('checkout.phone')} *</Label>
              <Input
                id="customerPhone"
                type="tel"
                {...register('customerPhone')}
                placeholder={t('checkout.phonePlaceholder')}
                className={`mt-1.5 ${errors.customerPhone ? 'border-red-500' : ''}`}
                autoComplete="tel"
              />
              <p className="mt-1 text-xs text-gray-500">{t('checkout.phoneHint')}</p>
              {errors.customerPhone && (
                <p className="mt-1 text-xs text-red-600" role="alert">
                  {errors.customerPhone.message}
                </p>
              )}
            </div>

            {/* Notes */}
            <div>
              <Label htmlFor="notes">
                {t('checkout.notes')}{' '}
                <span className="text-gray-400 font-normal">{t('checkout.notesOptional')}</span>
              </Label>
              <Textarea
                id="notes"
                {...register('notes')}
                placeholder={t('checkout.notesPlaceholder')}
                className="mt-1.5 min-h-[80px]"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full bg-[#25D366] hover:bg-[#1db954] text-white text-base font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            {isSubmitting ? t('checkout.sending') : t('checkout.send')}
          </Button>

          <p className="text-center text-xs text-gray-400">{t('checkout.hint')}</p>
        </form>

        {/* Order summary */}
        <aside className="md:col-span-2">
          <div className="rounded-xl border bg-white p-5 sticky top-20">
            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              {t('checkout.summary')}
            </h2>

            <div className="space-y-3 max-h-72 overflow-y-auto">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3 items-center">
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

            <Separator className="my-4" />

            <div className="flex justify-between font-bold text-base">
              <span>{t('cart.subtotal')}</span>
              <span>{CURRENCY} {subtotal.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1 text-right">{t('checkout.deliveryTbd')}</p>
          </div>
        </aside>
      </div>
    </main>
  )
}
