import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react'
import { BUSINESS_WHATSAPP } from '@/utils/whatsapp'

const HOURS = [
  { day: 'Monday – Friday', hours: '7:00 AM – 7:00 PM' },
  { day: 'Saturday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Sunday', hours: '9:00 AM – 2:00 PM' },
  { day: 'Public Holidays', hours: 'Closed' },
]

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact & About</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        AfriMarket is your neighbourhood African food store, offering fresh produce,
        pantry staples, and authentic West African ingredients. Browse online and order
        via WhatsApp — we'll take care of the rest.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-5">
          <div className="rounded-xl border bg-white p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Get In Touch</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+233501234567"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition-colors group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                    <Phone className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone (tap to call)</p>
                    <p className="font-semibold">+233 50 123 4567</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={BUSINESS_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition-colors group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                    <MessageCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp</p>
                    <p className="font-semibold">+233 50 123 4567</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="mailto:hello@afrimarket.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition-colors group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                    <Mail className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-semibold">hello@afrimarket.com</p>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-3 text-gray-700">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Address</p>
                  <p className="font-semibold">14 Market Street</p>
                  <p className="text-sm text-gray-600">East Legon, Accra, Ghana</p>
                  <a
                    href="https://maps.google.com/?q=East+Legon,+Accra,+Ghana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-xs text-green-600 hover:underline"
                  >
                    <Navigation className="h-3 w-3" />
                    Get Directions
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Hours & Map */}
        <div className="space-y-5">
          <div className="rounded-xl border bg-white p-6">
            <h2 className="flex items-center gap-2 font-semibold text-gray-900 mb-4">
              <Clock className="h-4 w-4 text-green-600" />
              Operating Hours
            </h2>
            <table className="w-full text-sm">
              <tbody className="divide-y">
                {HOURS.map(({ day, hours }) => (
                  <tr key={day}>
                    <td className="py-2.5 text-gray-600 pr-4">{day}</td>
                    <td className="py-2.5 font-medium text-gray-900 text-right">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border">
            <iframe
              title="AfriMarket location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5073046226!2d-0.15!3d5.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzgnMjQuMCJOIDDCsDknMDAuMCJX!5e0!3m2!1sen!2sgh!4v1000000000000"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="mt-10 rounded-xl bg-green-700 p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Ready to order?</h2>
        <p className="text-green-100 mb-5">
          Place your order online and confirm via WhatsApp. Fast, simple, no account needed.
        </p>
        <a
          href={BUSINESS_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-50 transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          Chat with Us on WhatsApp
        </a>
      </div>
    </main>
  )
}
