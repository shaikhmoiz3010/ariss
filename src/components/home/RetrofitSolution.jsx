import React, { useState, useRef, useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';

const RetrofitSolution = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // Handle video loading state
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setIsVideoLoaded(true));
      return () => video.removeEventListener('loadeddata', () => setIsVideoLoaded(true));
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-black 
    relative min-h-screen 
    py-16 md:py-20 lg:py-24 
    flex items-center 
    justify-center 
    overflow-hidden">
      {/* Gradient Background */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-orange-400/20"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      </div> */}

      <div className="relative 
      max-w-7xl 
      mx-auto 
      px-12 sm:px-16 md:px-20 lg:px-16
      z-10 
      w-full">
        <ScrollAnimation>
          <div className="
          grid lg:grid-cols-2
          gap-2 sm:gap-2 md:gap-2 lg:gap-24
          items-center
          ">
            
            {/* Left Content */}
            <div className="order-1 lg:order-1">
              <div className="
              text-center 
              lg:text-left 
              mb-8 lg:mb-0
              ">
                <h3 className="
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                font-bold 
                mb-4 md:mb-6
                ">
                  <span className="
                  bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
                    RETROFIT SOLUTION
                  </span>
                </h3>
                
                <div className="
                space-y-3 md:space-y-4 
                backdrop-blur-sm 
                bg-black/30 
                p-5 md:p-6 lg:p-8 

                transition-all 
                duration-300">
                  <p className="
                  text-white
                  text-sm sm:text-base md:text-lg 
                  font-light
                  leading-relaxed">
                    Revolutionize your home without the complexities. Our products are designed for easy integration with your current switches, eliminating the need for extensive renovations. With our retrofit installation, you can enjoy the benefits of modern technology while maintaining the aesthetic and familiarity of your existing setup.
                  </p>
                  <p className="text-white
                  font-light
                  text-sm sm:text-base md:text-lg 
                  leading-relaxed">
                    It's time to experience the next level of convenience and sophistication in your home.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Video */}
            <div className="
            order-1 lg:order-2 
            mb-8 lg:mb-0
            ">
              <div className="relative group">
                {/* Video Container */}
                <div className="relative 
                rounded-full
                overflow-hidden 
                transition-all 
                duration-500 
                hover:scale-[1.02]">
                  <div className="relative aspect-video bg-black/50">
                    {/* Loading Skeleton */}
                    {!isVideoLoaded && (
                      <div className="absolute 
                      inset-0 
                      bg-gradient-to-r 
                      from-gray-900 to-black 
                      animate-pulse 
                      flex 
                      items-center 
                      justify-center">
                        <div className="
                        w-12 
                        h-12 

                        rounded-full 
                        animate-spin"></div>
                      </div>
                    )}
                    
                    <video 
                      ref={videoRef}
                      className={`
                        w-full 
                        h-full 
                        object-cover 
                        transition-opacity 
                        duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      poster="https://static.wixstatic.com/media/ea31d6_298e7b87422749409040fb1835782422f000.jpg"
                      onLoadedData={() => setIsVideoLoaded(true)}
                    >
                      <source 
                        src="https://video.wixstatic.com/video/ea31d6_298e7b87422749409040fb1835782422/720p/mp4/file.mp4" 
                        type="video/mp4" 
                      />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Video Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                  </div>
                </div>
                
                {/* Decorative Elements */}
                {/* <div className="absolute -top-3 -left-3 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-orange-500/30 rounded-tl-2xl pointer-events-none"></div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-orange-500/30 rounded-br-2xl pointer-events-none"></div> */}
              </div>
              
              {/* Video Caption */}
              <p className="text-center 
              text-gray-400 
              text-xs sm:text-sm mt-4">
                Experience the future of smart home technology
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      
      {/* Responsive Spacing Adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .min-h-screen {
            min-height: 100vh;
          }
        }
        
        @media (min-width: 1024px) {
          .min-h-screen {
            min-height: 100vh;
          }
        }
      `}</style>
    </section>
  );
};

export default RetrofitSolution;