import React, { useState } from 'react';

export default function Newsletter(){
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">
            OUR TEAM
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E266D]">
            Subscribe Our Newsletter
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20">
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80">
              <img 
                src="mailbox.png" 
                alt="Newsletter Illustration" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>

            <form onSubmit={handleSubscribe} className="max-w-md space-y-4 sm:space-y-6 w-full">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your E-mail here..."
                  className="w-full px-4 sm:px-8 py-4 sm:py-5 rounded-full bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-gray-600 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6A00] hover:bg-[#e55f00] text-white font-bold py-4 sm:py-5 rounded-lg shadow-lg shadow-orange-200 transition-all active:scale-[0.98] text-sm sm:text-base min-h-12 sm:min-h-auto"
              >
                Subscribe Our Newsletter
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};