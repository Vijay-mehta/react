import React from 'react';
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa'; // Icons

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top section with Help, Orders, Sign Up, Log In */}
      <div className="bg-gray-50 py-1 text-xs text-gray-500">
        <div className="container mx-auto flex justify-end space-x-6">
          <a href="/" className="hover:underline">Help</a>
          <a href="/" className="hover:underline">Orders and Returns</a>
          <a href="/" className="hover:underline">Sign Up</a>
          <a href="/" className="hover:underline">Log In</a>
        </div>
      </div>

      {/* Main header with logo, navigation, and icons */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/path-to-adidas-logo/adidas-logo.png"
            alt="Adidas Logo"
            className="h-8 w-auto mr-8"
          />
        </div>

        <nav>
          <ul className="flex space-x-6 text-sm font-semibold tracking-wide uppercase">
            <li><a href="/" className="hover:text-gray-600">Men</a></li>
            <li><a href="/" className="hover:text-gray-600">Women</a></li>
            <li><a href="/" className="hover:text-gray-600">Kids</a></li>
            <li><a href="/" className="hover:text-gray-600">Sports</a></li>
            <li><a href="/" className="hover:text-gray-600">Lifestyle</a></li>
            <li><a href="/" className="hover:text-gray-600">Outlet</a></li>
            <li><a href="/" className="text-red-600 font-bold">Festive Sale - Extra 20% Off</a></li>
          </ul>
        </nav>

        <div className="flex items-center space-x-6">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 outline-none text-sm text-gray-700"
            />
            <FaSearch className="text-gray-600" />
          </div>

          <div className="relative">
            <FaUser className="text-gray-600 text-xl" />
            <span className="absolute top-0 right-0 bg-yellow-500 text-white text-xs rounded-full px-1">1</span>
          </div>

          <FaHeart className="text-gray-600 text-xl" />

          <FaShoppingBag className="text-gray-600 text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
