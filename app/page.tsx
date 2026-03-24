import Navigation from '@/components/modules/Navigation';
import Footer from '@/components/modules/Footer';
import HomeContent from '@/components/modules/HomeContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | eShop',
  description: 'Browse our collection of phones, laptops, accessories and more at eShop.',
  openGraph: {
    title: 'eShop - Quality Products at Great Prices',
    description: 'Discover amazing products from top brands.',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to eShop</h1>
          <p className="text-gray-600">Discover amazing products at great prices</p>
        </div>
        <HomeContent />
      </main>
      <Footer />
    </div>
  );
}
