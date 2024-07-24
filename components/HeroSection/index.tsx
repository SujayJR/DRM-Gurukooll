"use client";
import React from "react";
import "./style.css"; // Make sure to include the CSS file

export const HeroSection = () => {
  return (
    <div className="hero-section bg-black flex flex-col items-center justify-center h-[70vh] text-white">
      <div className="text-container text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          <span className="highlighted-text-wrapper">
            <span className="highlighted-background">
              {/* Dark orange background */}
            </span>
            <div className="highlight">
     <span className="highlighted-text">2nd</span>
  </div>
          </span> Indian Summer <br /> School on <br /> Design Research.
        </h1>
        <p className="text-base md:text-base lg:text-lg mt-4">
          Shaping Tomorrow's Innovators: Mastering Design Innovation <br /> through Research and Methodology
        </p>
        <div className="button-container flex justify-center mt-8">
        <button className="mt-8 bg-orange hover:bg-orange text-black py-2 px-6 rounded-full text-sm md:text-lg lg:text-xl flex items-center">
          REGISTER HERE<span className="arrow-icon"> →</span> {/* Arrow icon here */}
        </button>
        </div>
      </div>
    </div>
  );
};
