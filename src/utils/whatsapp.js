export const BUSINESS_PHONE = '255787516300'
export const BUSINESS_WHATSAPP = `https://wa.me/${BUSINESS_PHONE}`

export function buildWhatsAppUrl(order, businessPhone = BUSINESS_PHONE) {
  const { customerName, customerPhone, notes, items, subtotal, currency } = order

  const itemLines = items
    .map(
      ({ product, quantity }) =>
        `  • ${product.name} x${quantity} — ${currency} ${(product.price * quantity).toLocaleString()}`
    )
    .join('\n')

  const message = [
    `🛒 *New Order — KibaMarket*`,
    ``,
    `👤 Name: ${customerName}`,
    `📞 Phone: ${customerPhone}`,
    ``,
    `*Items:*`,
    itemLines,
    ``,
    `💰 Subtotal: ${currency} ${subtotal.toLocaleString()}`,
    notes ? `📝 Note: ${notes}` : null,
    ``,
    `_Please call back to confirm delivery._`,
  ]
    .filter((line) => line !== null)
    .join('\n')

  return `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`
}

export function generateOrderRef() {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `KMK-${timestamp}-${random}`
}
