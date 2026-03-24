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