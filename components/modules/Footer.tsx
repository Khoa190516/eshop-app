export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">eShop</h3>
            <p className="text-gray-400">
              Your trusted online store for quality products at great prices.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white" aria-label="Contact customer service">Contact Us</a></li>
              <li><a href="#" className="hover:text-white" aria-label="Shipping information">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white" aria-label="Returns policy">Returns</a></li>
              <li><a href="#" className="hover:text-white" aria-label="Frequently asked questions">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white" aria-label="Our company story">Our Story</a></li>
              <li><a href="#" className="hover:text-white" aria-label="Career opportunities">Careers</a></li>
              <li><a href="#" className="hover:text-white" aria-label="Press releases">Press</a></li>
              <li><a href="#" className="hover:text-white" aria-label="Company blog">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white" aria-label="Follow us on Facebook">Facebook</a></li>
              <li><a href="#" className="hover:text-white" aria-label="Follow us on Twitter">Twitter</a></li>
              <li><a href="#" className="hover:text-white" aria-label="Follow us on Instagram">Instagram</a></li>
              <li><a href="#" className="hover:text-white" aria-label="Connect on LinkedIn">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 eShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}