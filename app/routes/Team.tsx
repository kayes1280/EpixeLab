import React from 'react';
import { Link } from 'react-router';

const teamMembers = [
  { name: "Vanessa Laird", role: "UI DESIGNER", img: "/business2.jpg" },
  { name: "Mason Campbell", role: "UI DESIGNER", img: "/business3.jpg" },
  { name: "Irea Evans", role: "CLIENT MANAGER", img: "/business4.jpg" },
];

export default function Team() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-gray-50 text-center">
      <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2 px-4">Our Team</p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 px-4">Meet The Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300">
            <div className="p-6 sm:p-8">
              <img src={member.img} alt={member.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 sm:mb-6 object-cover" />
              <h3 className="text-base sm:text-lg font-bold text-blue-900">{member.name}</h3>
              <p className="text-gray-400 text-xs font-semibold mt-1 tracking-wider">{member.role}</p>
            </div>
            <div className="flex border-t border-gray-100">
              <Link to="/" className="w-1/3 py-3 sm:py-4 hover:bg-gray-50 border-r border-gray-100 text-gray-400 transition text-lg sm:text-xl"><i className="fa-brands fa-twitter"></i></Link>
              <Link to="/" className="w-1/3 py-3 sm:py-4 hover:bg-gray-50 border-r border-gray-100 text-gray-400 transition text-lg sm:text-xl"><i className="fa-brands fa-facebook-f"></i></Link>
              <Link to="/" className="w-1/3 py-3 sm:py-4 hover:bg-gray-50 text-gray-400 transition text-lg sm:text-xl"><i className="fa-brands fa-internet-explorer"></i></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};