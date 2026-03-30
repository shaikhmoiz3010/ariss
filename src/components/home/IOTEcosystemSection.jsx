import React, { useState } from 'react';
import { Sun, Home as HomeIcon, Activity, Music, Dog, Shield, Battery, Heart, Car } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

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
    <section className="py-40 relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-orange-400 bg-clip-text text-transparent">
                LARGEST IOT ECOSYSTEM
              </span>
            </h2>
            <p className="text-black max-w-3xl mx-auto">
              As the world's largest IoT ecosystem, our network of interconnected devices and systems allows us to provide a diverse range of automation solutions to meet the needs of our customers
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          {/* Desktop View - Original Flex Layout */}
          <div className="hidden md:flex relative flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-1">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-125">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-800 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md animate-spin-slow"></div>
                  <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={icon}
                    alt={`ARISS Smart Home Feature ${index + 1}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.7)]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - L-Shaped Grid */}
          {/* Mobile View - L-Shaped Grid with CSS Grid */}
          <div className="md:hidden">
            <div className="grid grid-cols-5 gap-3 max-w-md mx-auto">
              {/* Top Row - 5 Icons (Row 1, Col 1-5) */}
              {topRowIcons.map((icon, index) => (
                <div
                  key={`top-${index}`}
                  className="col-span-1 flex justify-center"
                  style={{ gridRow: 1, gridColumn: index + 1 }}
                >
                  <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-125">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-800 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md animate-spin-slow"></div>
                    <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <img
                      src={icon}
                      alt={`ARISS Smart Home Feature ${index + 1}`}
                      className="w-24 h-24 sm:w-24 sm:h-24 object-contain relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.7)]"
                    />
                  </div>
                </div>
              ))}

              {/* Left Column - 4 Icons (Rows 2-5, Col 1) */}
              {leftColumnIcons.map((icon, index) => (
                <div
                  key={`left-${index}`}
                  className="flex justify-center"
                  style={{ gridRow: index + 2, gridColumn: 1 }}
                >
                  <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-125">
                    {/* <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-800 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md animate-spin-slow"></div> */}
                    <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={icon}
                      alt={`ARISS Smart Home Feature ${index + 6}`}
                      className="w-24 h-24 sm:w-24 sm:h-24 object-contain relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.7)]"
                    />
                  </div>
                </div>
              ))}

              {/* Bottom Right Icon (Row 5, Col 5) */}
              <div  className="flex justify-end items-end">

              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

    </section>
  );
};

export default IOTEcosystemSection;