import { Product } from '@/types';

export const products: Product[] = [
  {
    title: 'iPhone 15 Pro',
    type: 'phone',
    branch: 'Apple',
    price: 999,
    year: 2023,
    imageUrl: '/images/iphone15.jpg',
    description: 'Latest iPhone with advanced camera system and A17 Pro chip.'
  },
  {
    title: 'MacBook Pro 16"',
    type: 'laptop',
    branch: 'Apple',
    price: 2499,
    year: 2023,
    imageUrl: '/images/macbook.jpg',
    description: 'Powerful laptop for professionals with M3 chip.'
  },
  {
    title: 'Logitech MX Master 3S',
    type: 'mouse',
    branch: 'Logitech',
    price: 99,
    year: 2023,
    imageUrl: '/images/mxmaster.jpg',
    description: 'Advanced wireless mouse with customizable buttons.'
  },
  {
    title: 'Keychron K8',
    type: 'keyboard',
    branch: 'Keychron',
    price: 89,
    year: 2022,
    imageUrl: '/images/k8.jpg',
    description: 'Wireless mechanical keyboard with hot-swappable switches.'
  },
  {
    title: 'Sony WH-1000XM5',
    type: 'headphone',
    branch: 'Sony',
    price: 349,
    year: 2023,
    imageUrl: '/images/wh1000.jpg',
    description: 'Industry-leading noise canceling wireless headphones.'
  },
  {
    title: 'Samsung Galaxy S24',
    type: 'phone',
    branch: 'Samsung',
    price: 799,
    year: 2024,
    imageUrl: '/images/s24.jpg',
    description: 'Flagship Android phone with AI features.'
  },
  {
    title: 'Dell XPS 13',
    type: 'laptop',
    branch: 'Dell',
    price: 1299,
    year: 2023,
    imageUrl: '/images/xps13.jpg',
    description: 'Ultra-portable laptop with stunning display.'
  },
  {
    title: 'Razer DeathAdder V3',
    type: 'mouse',
    branch: 'Razer',
    price: 69,
    year: 2023,
    imageUrl: '/images/deathadder.jpg',
    description: 'Gaming mouse with optical switches.'
  }
];