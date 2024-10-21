import React, { useState } from 'react';
import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 relative">
      <div className="bg-gray-50 py-1 text-xs text-gray-500">
        <div className="container mx-auto flex justify-end space-x-6">
          <a href="/" className="hover:underline">Help</a>
          <a href="/" className="hover:underline">Orders and Returns</a>
          <a href="/" className="hover:underline">Sign Up</a>
          <a href="/" className="hover:underline">Log In</a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl font-bold uppercase tracking-wider text-gray-900 mr-10">Adidas</span> 
        </div>

        <div className="md:hidden flex items-center">
          <FaBars
            className="text-gray-600 text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>

        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-0 left-0 w-full h-screen bg-white z-50 md:static md:h-auto md:bg-transparent md:flex md:space-x-6 md:items-center text-sm font-semibold uppercase transition-all duration-300 ease-in-out`}
        >
          {menuOpen && (
            <div className="absolute top-4 right-4 cursor-pointer md:hidden" onClick={() => setMenuOpen(false)}>
              <FaTimes className="text-gray-600 text-2xl" />
            </div>
          )}
          <ul className="flex flex-col items-center space-y-6 mt-16 md:mt-0 md:flex-row md:space-y-0 md:space-x-6">
            <li><a href="/" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Men</a></li>
            <li><a href="/" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Women</a></li>
            <li><a href="/" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Kids</a></li>
            <li><a href="/" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Sports</a></li>
            <li><a href="/" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Lifestyle</a></li>
            <li><a href="/" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Outlet</a></li>
            <li><a href="/" className="text-red-600 font-bold" onClick={() => setMenuOpen(false)}>Festive Sale - Extra 20% Off</a></li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 outline-none text-sm text-gray-700"
            />
            <FaSearch className="text-gray-600" />
          </div>

          <FaUser className="text-gray-600 text-xl" />
          <FaHeart className="text-gray-600 text-xl" />
          <FaShoppingBag className="text-gray-600 text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
