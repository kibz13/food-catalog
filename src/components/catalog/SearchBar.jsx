import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/context/LanguageContext'

export default function SearchBar({ value, onChange }) {
  const { t } = useLanguage()

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
      <Input
        type="search"
        placeholder={t('catalog.search')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9 pr-10"
        aria-label={t('catalog.search')}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full"
          aria-label={t('catalog.clearSearch')}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
