import React from 'react';

const testimonials = [
  { name: "RAYHAM CURRAN", text: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper.", img: "./public/business4.jpg" },
  { name: "KAYLEY FRAME", text: "As a business targeting high net worth individuals, we were looking for a slick, cool design.", img: "./public/business3.jpg" },
  { name: "GENE WHITFIELD", text: "The most important part of the Startup Framework is the samples and ease of use.", img: "./public/business2.jpg" },
  { name: "ALLAN KIM", text: "I've built my website with Startup in one day, and it was ready-to-go immediately.", img: "./public/business1.jpg" },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-16">What Clients say about us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
        {testimonials.map((item, index) => (
          <div key={index} className="flex space-x-4">
            <img src={item.img} alt={item.name} className="w-25 h-25 rounded-[5px] object-cover" />
            <div>
              <p className="text-gray-600 text-sm mb-2 leading-relaxed">{item.text}</p>
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};