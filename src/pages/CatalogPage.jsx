import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Fuse from 'fuse.js'
import { ArrowUpDown } from 'lucide-react'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import SearchBar from '@/components/catalog/SearchBar'
import ProductFilters from '@/components/catalog/ProductFilters'
import ProductGrid from '@/components/catalog/ProductGrid'
import { products } from '@/data/products'
import { useLanguage } from '@/context/LanguageContext'

const MAX_PRICE = Math.ceil(Math.max(...products.map((p) => p.price)) / 1000) * 1000

const fuse = new Fuse(products, {
  keys: ['name', 'shortDescription', 'description', 'category'],
  threshold: 0.35,
  includeScore: true,
})

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  )
  const [priceRange, setPriceRange] = useState([0, MAX_PRICE])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sort, setSort] = useState('default')
  const { t } = useLanguage()

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategories([cat])
  }, [])

  function handleCategoryChange(catId, checked) {
    setSelectedCategories((prev) =>
      checked ? [...prev, catId] : prev.filter((c) => c !== catId)
    )
  }

  function handleReset() {
    setQuery('')
    setSelectedCategories([])
    setPriceRange([0, MAX_PRICE])
    setInStockOnly(false)
    setSort('default')
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let result = query
      ? fuse.search(query).map((r) => r.item)
      : [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }
    if (inStockOnly) {
      result = result.filter((p) => p.inStock)
    }
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    switch (sort) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break
      case 'price-desc': result.sort((a, b) => b.price - a.price); break
      case 'name-asc': result.sort((a, b) => a.name.localeCompare(b.name)); break
      default: break
    }

    return result
  }, [query, selectedCategories, priceRange, inStockOnly, sort])

  const sortOptions = [
    { value: 'default', label: t('catalog.sortDefault') },
    { value: 'price-asc', label: t('catalog.sortPriceAsc') },
    { value: 'price-desc', label: t('catalog.sortPriceDesc') },
    { value: 'name-asc', label: t('catalog.sortNameAsc') },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('catalog.title')}</h1>

      <div className="mb-6">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="lg:w-64 flex-shrink-0">
          <ProductFilters
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            maxPrice={MAX_PRICE}
            inStockOnly={inStockOnly}
            onInStockChange={setInStockOnly}
            onReset={handleReset}
          />
        </aside>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">{t('catalog.found', filtered.length)}</span>
            </p>
            <div className="flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4 text-gray-400" />
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="h-9 w-48 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((o) => (
                    <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <ProductGrid products={filtered} onResetFilters={handleReset} />
        </div>
      </div>
    </main>
  )
}
