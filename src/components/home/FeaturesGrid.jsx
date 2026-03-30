import React, { useState } from 'react';
import { Shield, Mic, Wifi, Zap, Cpu, Smartphone } from 'lucide-react';

const FeaturesGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    { 
      icon: Shield, 
      title: '5 Years Warranty', 
      desc: 'Peace of mind with our exclusive warranty',
      gradient: 'from-orange-500 to-amber-200',
    },
    { 
      icon: Mic, 
      title: 'Voice & APP Control', 
      desc: 'Control with Alexa, Google Home & Siri',
      gradient: 'from-orange-600 to-amber-200',
    },
    { 
      icon: Wifi, 
      title: 'Wi-Fi IoT Solution', 
      desc: 'Connected smart home ecosystem',
      gradient: 'from-orange-600 to-amber-200',
    },
    { 
      icon: Zap, 
      title: 'Regular Switches', 
      desc: 'Works with your existing switches',
      gradient: 'from-orange-600 to-amber-200',
    },
    { 
      icon: Cpu, 
      title: 'No Special Wiring', 
      desc: 'Easy retrofit installation',
      gradient: 'from-orange-600 to-amber-200',
    },

  ];

  // Add spin animation keyframes
  const spinAnimation = `
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 8s linear infinite;
    }
    
    @keyframes ping-slow {
      75%, 100% { transform: scale(2); opacity: 0; }
    }
    .animate-ping-slow {
      animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
  `;

  return (
    <>
      <style>{spinAnimation}</style>
      <div className="m-10 gap-20 px-40 justify-center items-center grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          const isHovered = hoveredIndex === index;
          
          return (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Outer Orange Glow - Reduced opacity */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 group-hover:duration-200`}></div>
              
              {/* Gradient border with animation - Reduced opacity */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-all duration-500 group-hover:duration-200`}></div>
              
              {/* Black Card */}
              <div className="relative h-40 w-36 bg-black border border-gray-900 rounded-3xl p-2 transition-all duration-300 hover:scale-105 hover:border-orange-500 overflow-hidden">
                
                {/* Background Orange Glow on Hover - Reduced intensity */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient.replace('from-', 'from-').replace('to-', 'to-')}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Radial Orange Glow Effects - Reduced intensity */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Icon with gradient and animation */}
                <div className="mb-4 relative">
                  {/* Glow behind icon - Reduced intensity */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Icon container with spinning border */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto flex items-center justify-center">
                    {/* Spinning gradient border */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${feature.gradient} opacity-75 group-hover:opacity-100 animate-spin-slow`}></div>
                    
                    {/* Icon Background */}
                    <div className="absolute inset-[2px] bg-black rounded-full group-hover:bg-black transition-colors duration-300"></div>
                    
                    {/* Icon */}
                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent 
                        size={32} 
                        className={`transition-all duration-300 ${
                          isHovered ? 'text-orange-400' : 'text-orange-500'
                        }`}
                      />
                    </div>
                  </div>
                  
                  {/* Animated rings */}
                </div>

                {/* Title - Improved contrast */}
                <h3 className={`text-sm md:text-base font-bold mb-2 text-center transition-all duration-300 relative z-10 ${
                  isHovered ? 'text-white' : 'text-gray-200'
                }`}>
                  {feature.title}
                </h3>


                {/* Bottom gradient line */}
                <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-gradient-to-r ${feature.gradient} transition-all duration-300 rounded-full`}></div>
              </div>

            </div>
          );
        })}
      </div>
    </>
  );
};

export default FeaturesGrid;