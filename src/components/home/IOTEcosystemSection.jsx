import React, { useState } from 'react';
import { Sun, Home as HomeIcon, Activity, Music, Dog, Shield, Battery, Heart, Car } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

import bghome from "../../assets/bg/home-automation.jpg"

import icon1 from '../../assets/Logos/icon1.png'
import icon2 from '../../assets/Logos/icon2.png'
import icon3 from '../../assets/Logos/icon3.png'
import icon4 from '../../assets/Logos/icon4.png'
import icon5 from '../../assets/Logos/icon5.png'
import icon6 from '../../assets/Logos/icon6.png'
import icon7 from '../../assets/Logos/icon7.png'
import icon8 from '../../assets/Logos/icon8.png'
import icon9 from '../../assets/Logos/icon9.png'
import icon10 from '../../assets/Logos/icon10.png'

const IOTEcosystemSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10];

  // Split icons for L-shaped layout
  const topRowIcons = icons.slice(0, 5); // First 5 icons in top row
  const leftColumnIcons = icons.slice(5, 9); // Next 4 icons in left column
  const bottomRightIcon = icons[9]; // Last icon at bottom right

  return (
    <section className="bg-white relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="my-10 text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-12">
              <span className="bg-orange-600 bg-clip-text text-transparent">
                LARGEST IOT ECOSYSTEM
              </span>
            </h2>
            <p className="text-black max-w-xl sm:px-3 mx-auto">
              As the world's largest IoT ecosystem, our network of interconnected devices and systems allows us to provide a diverse range of automation solutions to meet the needs of our customers
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          {/* Desktop View - Original Flex Layout */}
          <div className="hidden md:flex relative flex-row justify-center items-center gap-10 sm:gap-8 md:gap-3 lg:gap-3">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-125">
                  <img
                    src={icon}
                    alt={`ARISS Smart Home Feature ${index + 1}`}
                    className="md:w-16 md:h-16 lg:w-24 lg:h-24 relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.7)]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - L-Shaped Grid with Image covering remaining space */}
          <div className="md:hidden grid grid-cols-5 grid-rows-5 gap-1 m-10 my-9 px-2 py-2 ">
            {/* Top Row - Row 1 (5 icons) */}
            {topRowIcons.map((icon, index) => (
              <div
                key={`top-${index}`}
                className="flex justify-center items-center"
              >
                <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-125">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-800 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md animate-spin-slow"></div>
                  <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={icon}
                    alt={`ARISS Smart Home Feature ${index + 1}`}
                    className="w-16 h-16 relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.7)]"
                  />
                </div>
              </div>
            ))}

            {/* Left Column Icons (Rows 2-5, Column 1) */}
            {leftColumnIcons.map((icon, index) => (
              <div
                key={`left-${index}`}
                className="flex justify-center items-center"
                style={{ gridRow: index + 2, gridColumn: 1 }}
              >
                <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-125">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-800 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md animate-spin-slow"></div>
                  <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={icon}
                    alt={`ARISS Smart Home Feature ${index + 1}`}
                    className="w-16 h-16 relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.7)]"
                  />
                </div>
              </div>
            ))}

            {/* Image covering remaining space - Rows 2-5, Columns 2-5 */}
            <div 
              className="relative h-[260px] m-6 overflow-hidden rounded-md shadow-xl hover:scale-110 transition-transform duration-500"
              style={{ 
                gridRow: '2 / 6', 
                gridColumn: '2 / 6',
              }}
            >
              <img
                src={bghome}
                alt="Smart Home Ecosystem"
                className="w-full h-full object-cover transition-transform duration-700 "
              />
              {/* Optional overlay for better text visibility if needed */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-orange-500/20"></div> */}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default IOTEcosystemSection;