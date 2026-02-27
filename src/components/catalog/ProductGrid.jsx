import { PackageSearch } from 'lucide-react'
import ProductCard from './ProductCard'
import { Button } from '@/components/ui/button'

export default function ProductGrid({ products, onResetFilters }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
        <PackageSearch className="h-16 w-16 text-gray-300" />
        <div>
          <p className="text-lg font-semibold text-gray-700">No products found</p>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filters.
          </p>
        </div>
        {onResetFilters && (
          <Button variant="outline" onClick={onResetFilters}>
            Reset Filters
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
