import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react'
import { BUSINESS_WHATSAPP } from '@/utils/whatsapp'
import { useLanguage } from '@/context/LanguageContext'

const HOURS = [
  { day: 'Monday – Friday', hours: '7:00 AM – 7:00 PM' },
  { day: 'Saturday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Sunday', hours: '9:00 AM – 2:00 PM' },
  { day: 'Public Holidays', hours: 'Closed' },
]

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('contact.title')}</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">{t('contact.desc')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-5">
          <div className="rounded-xl border bg-white p-6">
            <h2 className="font-semibold text-gray-900 mb-4">{t('contact.getInTouch')}</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+255787516300"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition-colors group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                    <Phone className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{t('contact.phoneTap')}</p>
                    <p className="font-semibold">+255 787 516 300</p>
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
                    <p className="text-xs text-gray-500">{t('contact.whatsapp')}</p>
                    <p className="font-semibold">+255 787 516 300</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="mailto:hello@kibamarket.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition-colors group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                    <Mail className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{t('contact.email')}</p>
                    <p className="font-semibold">hello@kibamarket.com</p>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-3 text-gray-700">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{t('contact.address')}</p>
                  <p className="font-semibold">Dar es Salaam</p>
                  <p className="text-sm text-gray-600">Dar es Salaam, Tanzania</p>
                  <a
                    href="https://maps.google.com/?q=Dar+es+Salaam,+Tanzania"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-xs text-green-600 hover:underline"
                  >
                    <Navigation className="h-3 w-3" />
                    {t('contact.directions')}
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
              {t('contact.hoursTitle')}
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

          <div className="rounded-xl overflow-hidden border">
            <iframe
              title={t('contact.mapTitle')}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253556.08097321153!2d39.0786506!3d-6.8160837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bae169bd6f1%3A0x940f6b26a086a1dd!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2stz!4v1700000000000"
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
        <h2 className="text-xl font-bold text-white mb-2">{t('contact.ctaTitle')}</h2>
        <p className="text-green-100 mb-5">{t('contact.ctaDesc')}</p>
        <a
          href={BUSINESS_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-50 transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          {t('contact.ctaBtn')}
        </a>
      </div>
    </main>
  )
}
