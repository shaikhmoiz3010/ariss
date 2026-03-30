import React, { useState } from 'react';
import { Mic, Smartphone, Maximize2, Minimize2, Lock, Unlock } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const ControlModesSection = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [videoWidth, setVideoWidth] = useState(1040);
    const [videoHeight, setVideoHeight] = useState(355);
    const [lockAspect, setLockAspect] = useState(false); // Set to false since 1040:355 is not 16:9
    const [showControls, setShowControls] = useState(true);
    
    const aspectRatio = videoWidth / videoHeight; // Current aspect ratio

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

    const presetSizes = [
        { name: 'Small', width: 600, height: 205 },
        { name: 'Medium', width: 800, height: 273 },
        { name: 'Large', width: 1040, height: 355 },
        { name: 'Full', width: 1200, height: 410 }
    ];

    return (
        <section id="control-modes" className="py-36 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
            {/* Gradient Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/10"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

                {/* Animated particles */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <ScrollAnimation>
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-4xl font-bold mb-4">
                            <span className="bg-orange-400 bg-clip-text text-transparent">
                                WITH ALL MODES OF CONTROL
                            </span>
                        </h2>
                        <div className="w-2/3 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Content Section - Middle */}
                    <div className="max-w-6xl mx-auto text-center mb-12">
                        <p className="text-white text-lg leading-relaxed">
                            The ARISS innovative modules are designed to work with all regular switches, including bell switches and toggle switches. The Smartlife APP is available for iPhones, and Android phones, tablets, iPads, and smartwatches. Additionally, the modules are compatible with Alexa, Google Home, and Siri Shortcuts for easy voice control.
                        </p>
                    </div>

                    {/* Video Section with Controls */}
                    <div className="mb-12">
                        {/* Video Container */}
                        <div className="relative group mx-auto" style={{ width: `${videoWidth}px`, maxWidth: '100%' }}>
                            {/* Gradient border animation */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur opacity-0 group-hover:opacity-75 transition-all duration-200"></div>

                            {/* Video Container */}
                            <div className="relative rounded-full overflow-hidden border-2 border-orange-500/30 shadow-full shadow-orange-500/20 bg-black">
                                <div className="relative">
                                    <video
                                        className="object-cover transition-all duration-300"
                                        style={{ 
                                            width: `${videoWidth}px`,
                                            height: `${videoHeight}px`
                                        }}
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
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default ControlModesSection;