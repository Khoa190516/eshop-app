'use client';

import { useState, useMemo } from 'react';
import { Product, ProductType } from '@/types';

export function useProducts(initialProducts: Product[]) {
  const [selectedTypes, setSelectedTypes] = useState<ProductType[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [selectedBranches, setSelectedBranches] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | ''>('');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = initialProducts;

    // Filter by type
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(product => selectedTypes.includes(product.type));
    }

    // Filter by price
    filtered = filtered.filter(product =>
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Filter by branch
    if (selectedBranches.length > 0) {
      filtered = filtered.filter(product => selectedBranches.includes(product.branch));
    }

    // Sort
    if (sortBy === 'price-asc') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [initialProducts, selectedTypes, priceRange, selectedBranches, sortBy]);

  return {
    products: filteredAndSortedProducts,
    isLoading: false,
    error: null,
    selectedTypes,
    setSelectedTypes,
    priceRange,
    setPriceRange,
    selectedBranches,
    setSelectedBranches,
    sortBy,
    setSortBy,
  };
}