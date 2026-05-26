import React from 'react';
import { Link } from 'react-router';

export default function Footer(){
  return (
    <footer className="bg-white border-t border-gray-100 py-8 sm:py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8">
          <div className="text-lg sm:text-xl font-bold text-orange-500">epixelab</div>
          <p className="text-gray-400 text-xs">© 2020 Epixelab. All rights reserved.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-blue-900">
          <Link to="/portfolio" className="hover:text-orange-500 transition whitespace-nowrap">Portfolio</Link>
          <Link to="/how-it-works" className="hover:text-orange-500 transition whitespace-nowrap">How It Works</Link>
          <Link to="/pricing" className="hover:text-orange-500 transition whitespace-nowrap">Pricing</Link>
          <Link to="/about" className="hover:text-orange-500 transition whitespace-nowrap">About</Link>
          <Link to="/login" className="hover:text-orange-500 transition whitespace-nowrap">Login</Link>
        </div>
      </div>
      <div className="text-center mt-6 sm:mt-8">
         <p className="text-[10px] text-gray-300 leading-relaxed">
           Startup Framework contains components and complex blocks which can easily be integrated into almost any design.
         </p>
      </div>
    </footer>
  );
};