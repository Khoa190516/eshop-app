import { z } from 'zod';
import { ProductType } from '@/types';

export const productSchema = z.object({
  title: z.string().min(1).max(100),
  type: z.enum(['phone', 'laptop', 'mouse', 'keyboard', 'headphone', 'others'] as const),
  branch: z.string().min(1).max(50),
  price: z.number().positive(),
  year: z.number().int().min(2000).max(new Date().getFullYear()),
  imageUrl: z.string().url(),
  description: z.string().min(0).max(1000),
});

export type ProductValidation = z.infer<typeof productSchema>;