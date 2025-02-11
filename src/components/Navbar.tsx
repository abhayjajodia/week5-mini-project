import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, GamepadIcon } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <GamepadIcon className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold text-white">GameHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games..."
                className="bg-gray-800 text-white px-4 py-2 rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <a href="#" className="text-gray-300 hover:text-white">Store</a>
            <a href="#" className="text-gray-300 hover:text-white">Library</a>
            <a href="#" className="text-gray-300 hover:text-white">Community</a>
            <div className="flex items-center space-x-4">
              <ShoppingCart className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <User className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search games..."
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <a href="#" className="block text-gray-300 hover:text-white py-2">Store</a>
              <a href="#" className="block text-gray-300 hover:text-white py-2">Library</a>
              <a href="#" className="block text-gray-300 hover:text-white py-2">Community</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}