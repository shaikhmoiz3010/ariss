import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const WarrantySection = () => {
  return (
    <section id="comp-lkgvo92u" className="bg-white relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <ScrollAnimation>
          <div
            data-mesh-id="comp-lkgvo92uinlineContent" 
            className="relative"
          >
            {/* Main content card with glass effect */}
            <div className="relative">
              
              {/* Grid layout - changes to column on mobile */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-1 place-items-center max-w-6xl mx-auto ">
                
                {/* Left Column - Image */}
                <div 
                  id="comp-lkifugx3" 
                  className="flex justify-center md:justify-end order-1"
                  data-motion-enter="done"
                >
                  <div className="relative">
                    {/* Glow effect behind image */}
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-3xl opacity-20"></div> */}
                    
                    {/* Image container with gradient border */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-xl opacity-30"></div>
                      <div className="relative w-full h-full rounded-full bg-black p-[3px]">
                        <div className="w-full h-full rounded-full bg-white overflow-hidden">
                          <img 
                            loading="lazy"
                            srcSet="
                              https://static.wixstatic.com/media/ea31d6_8449571543c04d15be31caa3a2a471ca~mv2.png/v1/fill/w_315,h_315,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Icons%20-%20Images%20(17).png 1x,
                              https://static.wixstatic.com/media/ea31d6_8449571543c04d15be31caa3a2a471ca~mv2.png/v1/fill/w_600,h_600,al_c,lg_1,q_85,enc_avif,quality_auto/Icons%20-%20Images%20(17).png 2x
                            "
                            src="https://static.wixstatic.com/media/ea31d6_8449571543c04d15be31caa3a2a471ca~mv2.png/v1/fill/w_315,h_315,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Icons%20-%20Images%20(17).png"
                            alt="5 Years Warranty of ARISS products"
                            className="w-full h-full object-contain"
                            width="340"
                            height="340"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Text Content */}
                <div className="order-2">
                  <div 
                    id="comp-lkgvppfg" 
                    className="mb-6 text-center md:text-left"
                    data-motion-enter="done"
                  >
                    <h1 className="text-4xl md:text-5xl font-bold">
                      <span className="bg-orange-400 bg-clip-text text-transparent">
                        5 YEARS OF WARRANTY
                      </span>
                    </h1>
                    
                    {/* Decorative line - centered on mobile, left on desktop */}
                    <div className="w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-4 mx-auto md:mx-0"></div>
                  </div>

                  <div 
                    id="comp-lkhum0wo"
                    data-motion-enter="done"
                  >
                    {/* Text container with glass effect */}
                        <p className="text-black text-lg text-justify leading-relaxed">
                          Enjoy peace of mind with our exclusive 5-year warranty. It demonstrates our confidence in the product's lasting performance. Rest easy knowing you're investing in a high-quality item that exceeds expectations and delivers worry-free ownership for years to come.
                        </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default WarrantySection;