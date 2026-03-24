'use client';

import ProductList from '@/components/modules/ProductList';
import FilterSidebar from '@/components/modules/FilterSidebar';
import SortControls from '@/components/modules/SortControls';
import { useProducts } from '@/hooks/useProducts';

export default function HomeContent() {
  const {
    products,
    isLoading,
    error,
    selectedTypes,
    setSelectedTypes,
    priceRange,
    setPriceRange,
    selectedBranches,
    setSelectedBranches,
    sortBy,
    setSortBy,
  } = useProducts();

  return (
    <div className="flex gap-8">
      <FilterSidebar
        selectedTypes={selectedTypes}
        onTypeChange={setSelectedTypes}
        priceRange={priceRange}
        onPriceChange={setPriceRange}
        selectedBranches={selectedBranches}
        onBranchChange={setSelectedBranches}
      />
      <div className="flex-1">
        <SortControls sortBy={sortBy} onSortChange={setSortBy} />
        <ProductList products={products} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
}