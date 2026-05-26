import React from 'react';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 px-4 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20 bg-white">

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
          We boost <br /> growth for your <br /> <span className="text-blue-900">statup business</span>
        </h1>
        <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base max-w-md mx-auto md:mx-0">
          Our goal is top at the heart of creativity services industry as a digital creator.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center">
          <button className="w-full sm:w-auto cursor-pointer bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition text-sm sm:text-base min-h-12 sm:min-h-auto">
            Get Started
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center sm:justify-start space-x-2 font-semibold hover:bg-[#e9ecef] rounded-md p-3 sm:p-5 text-sm sm:text-base">
            <span className="p-1 sm:p-2 border rounded-full text-xs sm:text-sm">▶</span> <span>Learn More</span>
          </button>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 relative flex justify-center mt-6 sm:mt-10 md:mt-0">
        <div className="rounded-full bg-blue-50 overflow-hidden w-60 h-60 sm:w-72 sm:h-72 lg:w-[450px] lg:h-[450px]">
          <img src="./public/photo.jpg" alt="Founder" className="w-full h-full object-cover" />
        </div>
        
        <div className="absolute top-4 left-4 sm:top-10 sm:left-10 bg-white p-2 sm:p-3 rounded-lg shadow-lg text-xs sm:text-sm font-semibold">100% Business Growth ⭐ 4.9</div>
        <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 bg-white p-2 sm:p-3 rounded-lg shadow-lg text-xs sm:text-sm font-semibold">1,000,000 Happy Clients ⭐ 4.9</div>
      </div>

    </section>
  );
};
