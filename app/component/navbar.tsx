import React, { useState } from 'react';
import { Link } from 'react-router';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 sm:py-5 bg-white shadow-sm sticky top-0 z-50">
      <div className="text-lg sm:text-2xl font-bold text-orange-500">EpixeLab</div>
      
      {/* Mobile menu button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-2xl"
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6 lg:space-x-8 font-medium text-sm lg:text-base">
        <Link to="/" className="hover:text-orange-500 transition">Home</Link>
        <Link to="/about" className="hover:text-orange-500 transition">About Us</Link>
        <Link to="/app" className="hover:text-orange-500 transition">Our App</Link>
        <Link to="/contacts" className="hover:text-orange-500 transition">Contacts</Link>
      </div>

      {/* Desktop auth links */}
      <div className="hidden md:flex items-center space-x-3 lg:space-x-4 text-sm lg:text-base">
        <Link to="/login" className="font-medium hover:text-orange-500 transition">Log in</Link>
        <Link to="/signup" className="bg-orange-500 text-white px-4 lg:px-6 py-2 rounded-lg hover:bg-orange-600 transition font-medium whitespace-nowrap">Sign up</Link>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 md:hidden">
          <div className="flex flex-col space-y-3 px-4 py-4 font-medium text-sm">
            <Link to="/" className="hover:text-orange-500 transition py-2">Home</Link>
            <Link to="/about" className="hover:text-orange-500 transition py-2">About Us</Link>
            <Link to="/app" className="hover:text-orange-500 transition py-2">Our App</Link>
            <Link to="/contacts" className="hover:text-orange-500 transition py-2">Contacts</Link>
            <hr className="my-2" />
            <Link to="/login" className="hover:text-orange-500 transition py-2">Log in</Link>
            <Link to="/signup" className="bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition font-medium text-center w-full">Sign up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};
