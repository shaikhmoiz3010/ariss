import React, { useState } from 'react';
// import FeaturesGrid from './FeaturesGrid';
import ScrollAnimation from './ScrollAnimation';

import icon1 from '../../assets/Logos/icon1.png'
import icon2 from '../../assets/Logos/icon2.png'
import icon3 from '../../assets/Logos/icon3.png'
import icon4 from '../../assets/Logos/icon4.png'
import icon5 from '../../assets/Logos/icon5.png'

const ChooseArissSection = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => setExpanded(prev => !prev);

  return (
    <section className="py-24 md:py-24 lg:py-24 relative overflow-hidden">
      {/* Simple white background */}
      <div className="absolute inset-0 bg-white"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 z-10">
        <ScrollAnimation>
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 bg-clip-text text-transparent">
               WHY CHOOSE ARISS
              </span>
            </h2>

            <ScrollAnimation>
              {/* Enhanced Glowing Icons Grid */}
              <div className="relative flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-8 md:mt-10 lg:mt-12">
                {[icon1, icon2, icon3, icon4, icon5].map((icon, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 relative"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Main Glow Effect - Outer Pulse Ring */}
                    {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div> */}

                    {/* Secondary Glow - Inner Ring */}
                    {/* <div className="absolute inset-[-8px] rounded-full bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125"></div> */}

                    {/* Tertiary Glow - Soft Ambient Light */}
                    {/* <div className="absolute inset-[-15px] rounded-full bg-orange-900 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div> */}


                    {/* Icon Container */}
                    <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-125">
                      {/* Rotating Glow Effect on Hover */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-800 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md animate-spin-slow"></div>

                      {/* Icon Shadow Glow */}
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
            </ScrollAnimation>

            <div className="max-w-4xl mx-auto mt-4 md:mt-6">
              <div
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${expanded ? 'max-h-max' : 'max-h-24 sm:max-h-28 md:max-h-24 lg:max-h-28'}
                `}
              >
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto sm:px-0">
                  ARISS is a brand for Anyone interested in using high-quality smart home devices to enjoy a whole-house intelligent lifestyle. Our mission is to design and provide Comprehensive solutions to house devices for the enjoyment of our honoured customers.

                  {expanded && (
                    <span className="block mt-3 sm:mt-4">
                      ARISS offers a smart home solution that is easy to install, operate, and upgrade. With features like compatibility with Alexa, Google Home, and Siri, modular upgradeability, and OTA firmware updates, ARISS provides a convenient and user-friendly solution for enhancing your home's functionality. The products are also backed by a 5-year warranty, giving you added peace of mind. Whether you are looking to upgrade your home's lighting, security, or energy efficiency, ARISS has a solution to meet your needs. So choose ARISS and take your home to the next level of convenience and control.
                    </span>
                  )}
                </p>

                {!expanded && (
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-2 sm:px-0 mt-3">
                    ARISS offers a smart home solution that is easy to install, operate, and upgrade. With features like compatibility with Alexa, Google Home, and Siri, modular upgradeability, and OTA firmware updates, ARISS provides a convenient and user-friendly solution for enhancing your home's functionality...
                  </p>
                )}
              </div>

              <button
                onClick={toggleReadMore}
                className="inline-block mt-3 sm:mt-4 text-orange-600 font-medium text-sm sm:text-base border-b border-orange-200 hover:border-orange-600 transition-colors cursor-pointer focus:outline-none"
              >
                {expanded ? 'Read less ↑' : 'Read more →'}
              </button>
            </div>
          </div>
        </ScrollAnimation>


      </div>

    </section>
  );
};

export default ChooseArissSection;