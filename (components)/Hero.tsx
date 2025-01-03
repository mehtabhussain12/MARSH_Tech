"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0077b6] to-[#06a8ff] text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 lg:space-y-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Ab wait kyu? <br /> Apne <span className="text-yellow-400">business</span> ko next level pe le jao​
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl">
            Upgrade your business with modern solutions tailored to your needs. 
            Start today and experience growth like never before!
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-white text-[#0077b6] font-semibold rounded-md hover:bg-[#06a8ff] hover:text-white focus:outline-none focus:ring-4 focus:ring-yellow-300">
              Get Started
            </button>
        
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          fill="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.1"
            d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,122.7C960,85,1056,43,1152,37.3C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
