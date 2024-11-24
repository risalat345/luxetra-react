import React, { useState, useEffect } from "react";
import { slides } from "./Data";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-change slide every 3 seconds
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="bg-black mt-20 mx-auto overflow-hidden w-full md:w-10/12 lg:w-8/12 max-w-3xl rounded-lg shadow-lg relative">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="w-full flex-shrink-0 relative" key={index}>
            <div className="flex flex-col md:flex-row">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg"
              />
              <div className="w-full md:w-1/2 md:absolute md:top-0 md:left-1/2 md:p-8 p-4 text-white">
                <p className="font-mono font-bold text-xl md:text-2xl">{slide.title}</p>
                <p className="text-sm my-2">{slide.description}</p>
                <button className="px-4 py-2 mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 hover:shadow-lg transition ease-in-out duration-200">
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
