# Quick Start Guide

**Feature**: Products API Endpoint  
**Date**: March 24, 2026  
**Plan**: [specs/002-products-api-endpoint/plan.md](specs/002-products-api-endpoint/plan.md)

## Overview

This guide provides quick instructions for implementing and testing the Products API endpoint.

## Prerequisites

- Next.js application running
- Node.js 18+
- Access to terminal/command line

## Implementation Steps

### 1. Create API Route

Create the file `app/api/products/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import { products } from '@/lib/data/products';

export async function GET() {
  try {
    return NextResponse.json({ data: products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
```

### 2. Update UI Components

Update `hooks/useProducts.ts` to fetch from API:

```typescript
import { useState, useEffect } from 'react';
import { Product } from '@/types';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
```

### 3. Update Components

Remove hardcoded imports from components that use products data and ensure they use the `useProducts` hook.

## Testing

### Manual Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Test the API endpoint:
   ```bash
   curl http://localhost:3000/api/products
   ```

3. Expected response: JSON array of products

### Automated Testing

Create `app/api/products/route.test.ts`:

```typescript
import { GET } from './route';
import { NextRequest } from 'next/server';

describe('/api/products', () => {
  it('returns products data', async () => {
    const request = new NextRequest('http://localhost:3000/api/products');
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
    expect(data.data.length).toBeGreaterThan(0);
  });
});
```

Run tests:
```bash
npm test
```

## Verification Checklist

- [ ] API endpoint returns HTTP 200
- [ ] Response contains `data` array
- [ ] Each product has required fields
- [ ] UI loads without hardcoded data
- [ ] UI displays products from API
- [ ] Error handling works (simulate API failure)

## Troubleshooting

**API returns 404**: Ensure file is at `app/api/products/route.ts`

**UI shows no products**: Check network tab for API call failures

**TypeScript errors**: Verify Product type matches API response

**CORS issues**: API routes in Next.js handle CORS automatically