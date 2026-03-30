import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

// import Hero Section
import BlurText from '../animations/text/BlurText';
import MagicRings from '../animations/MagicRings';

// import choose ariss section

const HeroSection = () => {

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    

    return (

        <section className="bg-black relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Silk Background - Full section background */}
            <div className="absolute inset-0 w-full max-h-full overflow-hidden">
                <MagicRings
                    color="#efa34e"
                    colorTwo="#e87121"
                    ringCount={9}
                    speed={1.1}
                    attenuation={20}
                    lineThickness={1.2}
                    baseRadius={0.39}
                    radiusStep={0.13}
                    scaleRate={0.2}
                    opacity={1.4}
                    blur={0}
                    noiseAmount={0}
                    rotation={0}
                    ringGap={1}
                    fadeIn={0.7}
                    fadeOut={0.5}
                    followMouse
                    mouseInfluence={0}
                    hoverScale={1}
                    parallax={0}
                    clickBurst={false}
                />
            </div>

            {/* Content - Centered both vertically and horizontally */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col items-center justify-center text-center">
                    {/* Welcome Text */}
                    <ScrollAnimation>
                        <div className="mb-4 md:mb-6">
                            <h1 className="inline-block text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-orange-600 tracking-wider">
                                WELCOME
                            </h1>
                        </div>
                    </ScrollAnimation>

                    {/* Main Title */}
                    <ScrollAnimation>
                        <h2 className=" max-w-5xl mx-auto mb-4 md:mb-6">
                            <BlurText
                                text="TO THE WORLD OF SMART HOME AUTOMATION SOLUTION"
                                delay={320}
                                animateBy="words"
                                direction="top"
                                onAnimationComplete={handleAnimationComplete}
                                className="justify-center text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl text-white"
                            />
                        </h2>
                    </ScrollAnimation>

                    {/* Description with Gradient */}
                    <ScrollAnimation>
                        <h3 className="text-white font-light font-avenir max-w-4xl mx-auto mb-8 md:mb-10 px-2 sm:px-4 text-center text-lg sm:text-lg md:text-lg lg:text-lg xl:text-xl">
                                Discover the future of home living with ARISS. Experience the power of Tuya Smart Automation,
                                Alexa voice control, and smart lighting, all seamlessly integrated for your convenience.
                                Transform your home into an intelligent sanctuary, where comfort, security, and efficiency converge.
                        </h3>
                    </ScrollAnimation>

                    {/* Buttons */}
                    <ScrollAnimation>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4">
                            <Link
                                to="/products"
                                className="relative overflow-hidden bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30 group w-full sm:w-auto text-center"
                            >
                                {/* Glass overlay */}
                                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                {/* Shine effect */}
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
                                <span className="relative block">Explore Products</span>
                            </Link>

                            <Link
                                to="/about"
                                className="relative overflow-hidden backdrop-blur-md bg-white/10 border-2 border-orange-500/50 text-white px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-orange-500/20 hover:border-orange-400 shadow-lg hover:shadow-orange-500/20 group w-full sm:w-auto text-center"
                            >
                                {/* Glass inner glow */}
                                <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                {/* Shimmer effect */}
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                                <span className="relative block">Learn More</span>
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Bottom gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        
    );
};

export default HeroSection;