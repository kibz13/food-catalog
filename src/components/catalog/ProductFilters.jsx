import { SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { CATEGORIES } from '@/data/products'

export default function ProductFilters({
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  maxPrice,
  inStockOnly,
  onInStockChange,
  onReset,
}) {
  const [collapsed, setCollapsed] = useState(false)

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    inStockOnly ||
    priceRange[0] > 0 ||
    priceRange[1] < maxPrice

  return (
    <div className="rounded-xl border bg-white overflow-hidden">
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b cursor-pointer select-none"
        onClick={() => setCollapsed((v) => !v)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setCollapsed((v) => !v)}
        aria-expanded={!collapsed}
        aria-controls="filter-panel"
      >
        <div className="flex items-center gap-2 font-semibold text-sm">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {hasActiveFilters && (
            <span className="rounded-full bg-green-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
              Active
            </span>
          )}
        </div>
        {collapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
      </div>

      {!collapsed && (
        <div id="filter-panel" className="p-4 space-y-6">
          {/* Category */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              Category
            </p>
            <div className="space-y-2.5">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="flex items-center gap-2.5">
                  <Checkbox
                    id={`cat-${cat.id}`}
                    checked={selectedCategories.includes(cat.id)}
                    onCheckedChange={(checked) => onCategoryChange(cat.id, checked)}
                  />
                  <Label htmlFor={`cat-${cat.id}`} className="cursor-pointer font-normal">
                    {cat.emoji} {cat.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              Price Range
            </p>
            <Slider
              min={0}
              max={maxPrice}
              step={1}
              value={priceRange}
              onValueChange={onPriceRangeChange}
              className="mb-2"
            />
            <div className="flex justify-between text-xs text-gray-600">
              <span>TZS {priceRange[0].toLocaleString()}</span>
              <span>TZS {priceRange[1].toLocaleString()}</span>
            </div>
          </div>

          {/* In Stock Only */}
          <div className="flex items-center gap-2.5">
            <Checkbox
              id="instock"
              checked={inStockOnly}
              onCheckedChange={onInStockChange}
            />
            <Label htmlFor="instock" className="cursor-pointer font-normal">
              In stock only
            </Label>
          </div>

          {/* Reset */}
          {hasActiveFilters && (
            <Button variant="outline" size="sm" onClick={onReset} className="w-full">
              Reset Filters
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
