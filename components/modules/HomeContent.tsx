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
    selectedCategories,
    setSelectedCategories,
    priceRange,
    setPriceRange,
    selectedBrands,
    setSelectedBrands,
    sortBy,
    setSortBy,
  } = useProducts();

  return (
    <div className="flex gap-8">
      <FilterSidebar
        selectedCategories={selectedCategories}
        onCategoryChange={setSelectedCategories}
        priceRange={priceRange}
        onPriceChange={setPriceRange}
        selectedBrands={selectedBrands}
        onBrandChange={setSelectedBrands}
      />
      <div className="flex-1">
        <SortControls sortBy={sortBy} onSortChange={setSortBy} />
        <ProductList products={products} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
}