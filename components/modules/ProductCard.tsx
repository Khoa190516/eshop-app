import Image from 'next/image';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils/formatPrice';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" aria-labelledby={`product-${product.title.replace(/\s+/g, '-').toLowerCase()}-title`}>
      <div className="relative h-48 bg-gray-200">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 id={`product-${product.title.replace(/\s+/g, '-').toLowerCase()}-title`} className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2" aria-label={`Brand: ${product.branch}`}>{product.branch}</p>
        <p className="text-lg font-bold text-blue-600 mb-2" aria-label={`Price: ${formatPrice(product.price)}`}>
          {formatPrice(product.price)}
        </p>
        <p className="text-sm text-gray-500 line-clamp-3" aria-label="Product description">
          {product.description}
        </p>
      </div>
    </article>
  );
}