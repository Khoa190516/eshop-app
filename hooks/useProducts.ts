'use client';

import { useState, useEffect, useMemo } from 'react';
import { Product, ProductType } from '@/types';

export function useProducts() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTypes, setSelectedTypes] = useState<ProductType[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [selectedBranches, setSelectedBranches] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | ''>('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setAllProducts(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts;

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
  }, [allProducts, selectedTypes, priceRange, selectedBranches, sortBy]);

  return {
    products: filteredAndSortedProducts,
    isLoading: loading,
    error,
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