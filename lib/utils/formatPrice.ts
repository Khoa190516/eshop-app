/**
 * Formats a price number to VND currency format
 * @param price - The price in number format
 * @returns Formatted price string in VND
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
}