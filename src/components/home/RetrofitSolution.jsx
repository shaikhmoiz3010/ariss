import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const RetrofitSolution = () => {
  return (
    <section className="py-36 relative overflow-hidden bg-gradient-to-b from-black to-orange-400/20">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-orange-400"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative">

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-orange-400 bg-clip-text text-transparent">
                  RETROFIT SOLUTION
                </span>
              </h3>
              
              <div className="space-y-4 backdrop-blur-sm bg-black/30 p-6 rounded-2xl border border-white/10">
                <p className="text-gray-300 text-base">
                  Revolutionize your home without the complexities. Our products are designed for easy integration with your current switches, eliminating the need for extensive renovations. With our retrofit installation, you can enjoy the benefits of modern technology while maintaining the aesthetic and familiarity of your existing setup.
                </p>
                <p className="text-gray-300 text-base">
                  It's time to experience the next level of convenience and sophistication in your home.
                </p>
              </div>
            </div>

            {/* Right Content - Video and Image Grid */}
            <div className="relative">
              {/* Main Video Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-orange-500/30 shadow-2xl shadow-orange-500/20">
                <div className="relative aspect-video bg-black">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    poster="https://static.wixstatic.com/media/ea31d6_298e7b87422749409040fb1835782422f000.jpg"
                  >
                    <source 
                      src="https://video.wixstatic.com/video/ea31d6_298e7b87422749409040fb1835782422/720p/mp4/file.mp4" 
                      type="video/mp4" 
                    />
                  </video>
                  
                  {/* Video Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Audio Control Button */}
                </div>
              </div>

            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default RetrofitSolution;