import React, { useState } from 'react';
import { Lock, Unlock } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const ControlModesSection = () => {
    // Manual dimension presets - change these values directly
    const DIMENSIONS = {
        // Option 1: Original size
        ORIGINAL: { width: 1040, height: 355 },
        
        // Option 2: Square
        SQUARE: { width: 600, height: 600 },
        
        // Option 3: Wide
        WIDE: { width: 1200, height: 450 },
        
        // Option 4: Portrait
        PORTRAIT: { width: 400, height: 600 },
        
        // Option 5: Custom - change these numbers to whatever you want
        CUSTOM: { width: 900, height: 380 }
    };
    
    // Choose which preset to use by uncommenting one of these lines
    const [videoWidth, setVideoWidth] = useState(DIMENSIONS.ORIGINAL.width);
    const [videoHeight, setVideoHeight] = useState(DIMENSIONS.ORIGINAL.height);
    
    // OR manually set dimensions here:
    // const [videoWidth, setVideoWidth] = useState(1040);
    // const [videoHeight, setVideoHeight] = useState(355);
    
    const [lockAspect, setLockAspect] = useState(false);
    const aspectRatio = 1040 / 355; // Original aspect ratio

    const handleWidthChange = (newWidth) => {
        setVideoWidth(newWidth);
        if (lockAspect) {
            setVideoHeight(Math.round(newWidth / aspectRatio));
        }
    };

    const handleHeightChange = (newHeight) => {
        setVideoHeight(newHeight);
        if (lockAspect) {
            setVideoWidth(Math.round(newHeight * aspectRatio));
        }
    };

    return (
        <section id="control-modes" className="bg-black min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-20">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                            <span className="bg-orange-600 bg-clip-text text-transparent">
                                WITH ALL MODES OF CONTROL
                            </span>
                        </h2>
                        <div className="w-24 sm:w-32 md:w-40 h-1 bg-orange-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-full sm:max-w-3xl lg:max-w-5xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0">
                        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                            The ARISS innovative modules are designed to work with all regular switches, including bell switches and toggle switches. The Smartlife APP is available for iPhones, and Android phones, tablets, iPads, and smartwatches. Additionally, the modules are compatible with Alexa, Google Home, and Siri Shortcuts for easy voice control.
                        </p>
                    </div>

                    {/* Video Section */}
                    <div className="mb-8 sm:mb-10 lg:mb-12 hover:scale-105 transition-transform duration-300">
                        <div className="relative group mx-auto" style={{ maxWidth: '100%' }}>
                            {/* Gradient border animation */}
                            {/* <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg sm:rounded-full blur opacity-0 group-hover:opacity-75 transition-all duration-200"></div> */}

                            {/* Video Container - Change dimensions here directly */}
                            <div 
                                className="relative rounded-full sm:rounded-full overflow-hidden border-2 border-orange-500/30 shadow-lg shadow-orange-500/20 bg-black mx-auto"
                                style={{
                                    width: `${videoWidth}px`,
                                    height: `${videoHeight}px`,
                                    maxWidth: '100%',
                                }}
                            >
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster="https://static.wixstatic.com/media/ea31d6_c6d5dc0d5de74aaaa1323d4673b5ec0ef000.jpg/v1/fill/w_969,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea31d6_c6d5dc0d5de74aaaa1323d4673b5ec0ef000.jpg"
                                >
                                    <source
                                        src="https://video.wixstatic.com/video/ea31d6_c6d5dc0d5de74aaaa1323d4673b5ec0e/1080p/mp4/file.mp4"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default ControlModesSection;