'use client';

import { ProductType } from '@/types';

interface FilterSidebarProps {
  selectedTypes: ProductType[];
  onTypeChange: (types: ProductType[]) => void;
  priceRange: { min: number; max: number };
  onPriceChange: (range: { min: number; max: number }) => void;
  selectedBranches: string[];
  onBranchChange: (branches: string[]) => void;
}

export default function FilterSidebar({
  selectedTypes,
  onTypeChange,
  priceRange,
  onPriceChange,
  selectedBranches,
  onBranchChange,
}: FilterSidebarProps) {
  const productTypes: ProductType[] = ['phone', 'laptop', 'mouse', 'keyboard', 'headphone', 'others'];
  const branches = ['Apple', 'Samsung', 'Logitech', 'Keychron', 'Sony', 'Dell', 'Razer'];

  const handleTypeChange = (type: ProductType, checked: boolean) => {
    if (checked) {
      onTypeChange([...selectedTypes, type]);
    } else {
      onTypeChange(selectedTypes.filter(t => t !== type));
    }
  };

  const handleBranchChange = (branch: string, checked: boolean) => {
    if (checked) {
      onBranchChange([...selectedBranches, branch]);
    } else {
      onBranchChange(selectedBranches.filter(b => b !== branch));
    }
  };

  return (
    <aside className="w-64 bg-white p-6 rounded-lg shadow-sm" role="region" aria-labelledby="filters-heading">
      <h3 id="filters-heading" className="text-lg font-semibold mb-4">Filters</h3>

      {/* Type Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Product Type</h4>
        <div className="space-y-2" role="group" aria-labelledby="type-filter-heading">
          <span id="type-filter-heading" className="sr-only">Select product types to filter by</span>
          {productTypes.map(type => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={(e) => handleTypeChange(type, e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-describedby={`type-${type}-description`}
              />
              <span className="ml-2 text-sm capitalize" id={`type-${type}-description`}>{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Price Range</h4>
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
            <span id="min-price-description" className="sr-only">Minimum price in VND</span>
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
            <span id="max-price-description" className="sr-only">Maximum price in VND</span>
          </div>
        </div>
      </div>

      {/* Branch Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Brand</h4>
        <div className="space-y-2" role="group" aria-labelledby="brand-filter-heading">
          <span id="brand-filter-heading" className="sr-only">Select brands to filter by</span>
          {branches.map(branch => (
            <label key={branch} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedBranches.includes(branch)}
                onChange={(e) => handleBranchChange(branch, e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-describedby={`brand-${branch}-description`}
              />
              <span className="ml-2 text-sm" id={`brand-${branch}-description`}>{branch}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}