import React from 'react';

const services = [
  { title: "Graphic Design", icon: "🎨" },
  { title: "Video Editing", icon: "🎬" },
  { title: "Digital Marketing", icon: "📊" },
];

export default function Services() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-gray-50 text-center">
      <p className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-xs px-4">Service</p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 px-4">Our Vision & Our Goal</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-3xl sm:text-4xl mb-4">{ service.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id.</p>
            <button className="w-full sm:w-auto cursor-pointer bg-orange-500 text-white px-6 py-2 sm:py-3 rounded-md hover:bg-orange-600 transition font-medium text-sm sm:text-base min-h-10 sm:min-h-auto">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};