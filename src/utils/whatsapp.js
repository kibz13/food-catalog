export const BUSINESS_PHONE = '233501234567'
export const BUSINESS_WHATSAPP = `https://wa.me/${BUSINESS_PHONE}`

export function buildWhatsAppUrl(order, businessPhone = BUSINESS_PHONE) {
  const {
    customerName,
    customerPhone,
    fulfillmentMethod,
    area,
    streetLandmark,
    preferredDate,
    timeWindow,
    notes,
    items,
    subtotal,
    currency,
  } = order

  const deliveryInfo =
    fulfillmentMethod === 'delivery'
      ? `Yes — ${area}${streetLandmark ? `, ${streetLandmark}` : ''}`
      : 'No — Customer will pick up'

  const dateStr = preferredDate
    ? new Date(preferredDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : 'TBD'

  const itemLines = items
    .map(
      ({ product, quantity }) =>
        `- ${product.name} (${product.unit}) x${quantity} — ${currency} ${(
          product.price * quantity
        ).toFixed(2)}`
    )
    .join('\n')

  const message = `🛒 New Order\nName: ${customerName}\nPhone: ${customerPhone}\nDelivery: ${deliveryInfo}\nDate: ${dateStr}, ${timeWindow}\n\nItems:\n${itemLines}\n\nSubtotal: ${currency} ${subtotal.toFixed(2)}${notes ? `\nNote: ${notes}` : ''}`

  return `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`
}

export function generateOrderRef() {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `AMK-${timestamp}-${random}`
}
