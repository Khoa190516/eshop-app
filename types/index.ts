// Product types and interfaces

export type ProductType = 'phone' | 'laptop' | 'mouse' | 'keyboard' | 'headphone' | 'others';

export interface Product {
  title: string;
  type: ProductType;
  branch: string;
  price: number;
  year: number;
  imageUrl: string;
  description: string;
}