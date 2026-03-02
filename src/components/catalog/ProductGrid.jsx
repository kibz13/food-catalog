import { PackageSearch } from 'lucide-react'
import ProductCard from './ProductCard'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/context/LanguageContext'

export default function ProductGrid({ products, onResetFilters }) {
  const { t } = useLanguage()

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
        <PackageSearch className="h-16 w-16 text-gray-300" />
        <div>
          <p className="text-lg font-semibold text-gray-700">{t('catalog.noResults')}</p>
          <p className="mt-1 text-sm text-gray-500">{t('catalog.noResultsDesc')}</p>
        </div>
        {onResetFilters && (
          <Button variant="outline" onClick={onResetFilters}>
            {t('catalog.reset')}
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
