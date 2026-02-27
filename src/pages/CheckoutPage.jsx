import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import useCartStore, { useCartSubtotal } from '@/store/cartStore'
import { generateOrderRef } from '@/utils/whatsapp'
import { CURRENCY } from '@/data/products'

const schema = z
  .object({
    fullName: z.string().min(2, 'Full name is required'),
    phone: z
      .string()
      .min(7, 'Enter a valid phone number')
      .regex(/^[+\d\s\-()]{7,20}$/, 'Invalid phone number format'),
    fulfillmentMethod: z.enum(['delivery', 'pickup']),
    area: z.string().optional(),
    streetLandmark: z.string().optional(),
    preferredDate: z.string().optional(),
    timeWindow: z.string().min(1, 'Select a time window'),
    notes: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.fulfillmentMethod === 'delivery') {
      if (!data.area || data.area.trim() === '') {
        ctx.addIssue({ code: 'custom', path: ['area'], message: 'Area/Town is required for delivery' })
      }
      if (!data.preferredDate) {
        ctx.addIssue({ code: 'custom', path: ['preferredDate'], message: 'Preferred date is required for delivery' })
      }
    }
  })

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items)
  const clearCart = useCartStore((s) => s.clearCart)
  const subtotal = useCartSubtotal()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { fulfillmentMethod: 'delivery', timeWindow: '' },
  })

  const fulfillmentMethod = watch('fulfillmentMethod')

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-xl font-semibold text-gray-700">Your cart is empty.</p>
        <Button asChild className="mt-4">
          <Link to="/catalog">Browse Products</Link>
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
    // Save to session storage for confirmation page
    sessionStorage.setItem('lastOrder', JSON.stringify(order))
    clearCart()
    navigate('/order-confirmation')
  }

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:col-span-3 space-y-6"
          noValidate
        >
          {/* Contact */}
          <fieldset className="rounded-xl border bg-white p-5 space-y-4">
            <legend className="text-base font-semibold px-1">Contact Details</legend>

            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                {...register('fullName')}
                placeholder="Jane Doe"
                className={`mt-1 ${errors.fullName ? 'border-red-500' : ''}`}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1 text-xs text-red-600" role="alert">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="+233 50 123 4567"
                className={`mt-1 ${errors.phone ? 'border-red-500' : ''}`}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-xs text-red-600" role="alert">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </fieldset>

          {/* Fulfillment */}
          <fieldset className="rounded-xl border bg-white p-5 space-y-4">
            <legend className="text-base font-semibold px-1">Fulfillment Method</legend>

            <RadioGroup
              value={fulfillmentMethod}
              onValueChange={(val) => setValue('fulfillmentMethod', val)}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { value: 'delivery', label: '🚚 Delivery', desc: 'We bring it to you' },
                { value: 'pickup', label: '🏪 Pickup', desc: 'Collect from our store' },
              ].map(({ value, label, desc }) => (
                <label
                  key={value}
                  className={`flex flex-col gap-1 rounded-lg border-2 p-4 cursor-pointer transition-colors ${
                    fulfillmentMethod === value
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value={value} id={`method-${value}`} />
                    <span className="font-medium text-sm">{label}</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-6">{desc}</span>
                </label>
              ))}
            </RadioGroup>

            {/* Delivery fields */}
            {fulfillmentMethod === 'delivery' && (
              <div className="space-y-4 border-t pt-4">
                <div>
                  <Label htmlFor="area">Area / Town *</Label>
                  <Input
                    id="area"
                    {...register('area')}
                    placeholder="e.g. East Legon, Kumasi"
                    className={`mt-1 ${errors.area ? 'border-red-500' : ''}`}
                  />
                  {errors.area && (
                    <p className="mt-1 text-xs text-red-600" role="alert">
                      {errors.area.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="streetLandmark">Street or Landmark (optional)</Label>
                  <Input
                    id="streetLandmark"
                    {...register('streetLandmark')}
                    placeholder="e.g. Near the blue mosque"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="preferredDate">Preferred Delivery Date *</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    {...register('preferredDate')}
                    min={new Date().toISOString().split('T')[0]}
                    className={`mt-1 ${errors.preferredDate ? 'border-red-500' : ''}`}
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-xs text-red-600" role="alert">
                      {errors.preferredDate.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Time window */}
            <div>
              <Label htmlFor="timeWindow">Preferred Time Window *</Label>
              <Select
                value={watch('timeWindow')}
                onValueChange={(val) => setValue('timeWindow', val, { shouldValidate: true })}
              >
                <SelectTrigger id="timeWindow" className={`mt-1 ${errors.timeWindow ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Select a time window" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Morning">Morning (7 AM – 12 PM)</SelectItem>
                  <SelectItem value="Afternoon">Afternoon (12 PM – 5 PM)</SelectItem>
                  <SelectItem value="Evening">Evening (5 PM – 8 PM)</SelectItem>
                </SelectContent>
              </Select>
              {errors.timeWindow && (
                <p className="mt-1 text-xs text-red-600" role="alert">
                  {errors.timeWindow.message}
                </p>
              )}
            </div>
          </fieldset>

          {/* Notes */}
          <fieldset className="rounded-xl border bg-white p-5">
            <legend className="text-base font-semibold px-1">Order Notes</legend>
            <Textarea
              id="notes"
              {...register('notes')}
              placeholder="Any special instructions? (optional)"
              className="mt-2 min-h-[80px]"
              aria-label="Order notes"
            />
          </fieldset>

          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full bg-green-600 hover:bg-green-700"
          >
            {isSubmitting ? 'Placing Order…' : 'Place Order'}
          </Button>
        </form>

        {/* Order Summary */}
        <aside className="md:col-span-2">
          <div className="rounded-xl border bg-white p-5 sticky top-20">
            <h2 className="text-base font-semibold mb-4">Order Summary</h2>
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
                    <p className="text-xs text-gray-500">×{quantity}</p>
                  </div>
                  <span className="text-sm font-semibold flex-shrink-0">
                    {CURRENCY} {(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{CURRENCY} {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500 text-xs">
                <span>Delivery fee</span>
                <span>TBD</span>
              </div>
            </div>
            <Separator className="my-3" />
            <div className="flex justify-between font-bold">
              <span>Total (excl. delivery)</span>
              <span>{CURRENCY} {subtotal.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
