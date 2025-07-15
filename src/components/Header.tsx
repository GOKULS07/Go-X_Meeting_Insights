import React, { useState } from 'react';
import { Menu, X, Play, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Go</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Go-X</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">Solutions</a>
            <a href="#integrations" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#resources" className="text-gray-600 hover:text-gray-900 transition-colors">Resources</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">Sign In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Features</a>
            <a href="#solutions" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Solutions</a>
            <a href="#integrations" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Integrations</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#resources" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Resources</a>
            <div className="px-3 py-2 space-y-2">
              <button className="block w-full text-left text-gray-600 hover:text-gray-900">Sign In</button>
              <button className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;