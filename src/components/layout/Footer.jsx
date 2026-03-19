import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, MessageCircle, Leaf } from 'lucide-react'
import { BUSINESS_WHATSAPP } from '@/utils/whatsapp'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">KibaMarket</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">{t('footer.tagline')}</p>
            <a
              href={BUSINESS_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              {t('footer.whatsapp')}
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contactTitle')}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+255787516300" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 flex-shrink-0 text-green-500" />
                  +255 787 516 300
                </a>
              </li>
              <li>
                <a href="mailto:hello@kibamarket.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 flex-shrink-0 text-green-500" />
                  hello@kibamarket.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 text-green-500 mt-0.5" />
                <span>Dar es Salaam, Tanzania</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-500" />
                {t('footer.hoursTitle')}
              </span>
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { day: 'Mon – Fri', hours: '7:00 AM – 7:00 PM' },
                { day: 'Saturday', hours: '8:00 AM – 6:00 PM' },
                { day: 'Sunday', hours: '9:00 AM – 2:00 PM' },
              ].map(({ day, hours }) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="text-gray-400">{day}</span>
                  <span className="text-white">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>{t('footer.rights', new Date().getFullYear())}</p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link>
            <Link to="/catalog" className="hover:text-white transition-colors">{t('nav.catalog')}</Link>
            <Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
