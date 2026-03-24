'use client';

interface FilterSidebarProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  priceRange: { min: number; max: number };
  onPriceChange: (range: { min: number; max: number }) => void;
  selectedBrands: string[];
  onBrandChange: (brands: string[]) => void;
}

export default function FilterSidebar({
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange,
  selectedBrands,
  onBrandChange,
}: FilterSidebarProps) {
  const categories = ['beauty', 'fragrances', 'furniture', 'groceries'];
  const brands = ['Essence', 'Glamour Beauty', 'Velvet Touch', 'Calvin Klein', 'Chanel', 'Dior'];

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      onCategoryChange([...selectedCategories, category]);
    } else {
      onCategoryChange(selectedCategories.filter(c => c !== category));
    }
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      onBrandChange([...selectedBrands, brand]);
    } else {
      onBrandChange(selectedBrands.filter(b => b !== brand));
    }
  };

  return (
    <aside className="w-64 bg-white p-6 rounded-lg shadow-sm" role="region" aria-labelledby="filters-heading">
      <h3 id="filters-heading" className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-2">Product Category</h4>
        <div className="space-y-2" role="group" aria-labelledby="category-filter-heading">
          <span id="category-filter-heading" className="sr-only">Select product categories to filter by</span>
          {categories.map(category => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={(e) => handleCategoryChange(category, e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-describedby={`category-${category}-description`}
              />
              <span className="ml-2 text-sm capitalize text-gray-700" id={`category-${category}-description`}>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-2">Price Range</h4>
        <div className="space-y-2" role="group" aria-labelledby="price-filter-heading">
          <span id="price-filter-heading" className="sr-only">Set price range to filter products</span>
          <div>
            <label htmlFor="min-price" className="block text-sm">Min Price</label>
            <input
              id="min-price"
              type="number"
              value={priceRange.min}
              onChange={(e) => onPriceChange({ ...priceRange, min: Number(e.target.value) })}
              className="w-full px-3 py-1 border border-gray-300 rounded text-sm"
              placeholder="0"
              aria-describedby="min-price-description"
            />
            <span id="min-price-description" className="sr-only">Minimum price in USD</span>
          </div>
          <div>
            <label htmlFor="max-price" className="block text-sm">Max Price</label>
            <input
              id="max-price"
              type="number"
              value={priceRange.max}
              onChange={(e) => onPriceChange({ ...priceRange, max: Number(e.target.value) })}
              className="w-full px-3 py-1 border border-gray-300 rounded text-sm"
              placeholder="5000"
              aria-describedby="max-price-description"
            />
            <span id="max-price-description" className="sr-only">Maximum price in USD</span>
          </div>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-2">Brand</h4>
        <div className="space-y-2" role="group" aria-labelledby="brand-filter-heading">
          <span id="brand-filter-heading" className="sr-only">Select brands to filter by</span>
          {brands.map(brand => (
            <label key={brand} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={(e) => handleBrandChange(brand, e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-describedby={`brand-${brand}-description`}
              />
              <span className="ml-2 text-sm text-gray-700" id={`brand-${brand}-description`}>{brand}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}