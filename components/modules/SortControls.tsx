'use client';

interface SortControlsProps {
  sortBy: 'price-asc' | 'price-desc' | '';
  onSortChange: (sort: 'price-asc' | 'price-desc' | '') => void;
}

export default function SortControls({ sortBy, onSortChange }: SortControlsProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-sm font-medium text-gray-900">Sort by:</span>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as 'price-asc' | 'price-desc' | '')}
        className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        aria-label="Sort products by price"
      >
        <option value="">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
}