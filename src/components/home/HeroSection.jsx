import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

// import Hero Section
import BlurText from '../animations/text/BlurText';
import MagicRings from '../animations/MagicRings';
import black4 from "../../assets/bg/black11.jpg";

// import choose ariss section

const HeroSection = () => {

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };


    return (

        <section className="bg-black 
        relative 
        min-h-screen 
        flex 
        items-center 
        justify-center 
        overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={black4}
                    alt="Smart Home Automation"
                    className="w-full h-full object-fill"
                />
            </div>

            {/* Content - Centered both vertically and horizontally */}
            <div className="relative 
            z-10 w-full 
            max-w-7xl 
            mx-auto 
            px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex 
                flex-col 
                items-center 
                justify-center 
                text-center">
                    {/* Welcome Text */}
                    <ScrollAnimation>
                        <div className="mb-5 md:mb-6">
                            <h1 className="inline-block 
                            text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl
                            font-medium
                            text-orange-600 
                            tracking-widest">
                                WELCOME
                            </h1>
                        </div>
                    </ScrollAnimation>

                    {/* Main Title */}
                    <ScrollAnimation>
                        <h2 className="font-light 
                        mb-4 md:mb-6">
                            <BlurText
                                text="Step into the World of Smart Living"
                                delay={150}
                                animateBy="letters"
                                direction="top"
                                onAnimationComplete={handleAnimationComplete}
                                className="justify-center 
                                text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white"
                            />
                        </h2>
                    </ScrollAnimation>

                    {/* Description with Gradient */}
                    <ScrollAnimation>
                        <h3 className="text-white/70 
                        font-light 
                        font-avenir 
                        max-w-4xl 
                        mx-auto 
                        mb-10 sm:mb-12 md:mb-16 lg:mb-16 xl:mb-16
                        px-5 sm:px-12 md:px-12 lg:px-12 xl:px-0 
                        text-center 
                        text-lg sm:text-lg md:text-lg lg:text-lg xl:text-xl">
                            Smart living made effortless powered by Tuya automation, Alexa voice control, and intelligent lighting.
                            Turn your home into a space that thinks, responds, and adapts to you.
                        </h3>
                    </ScrollAnimation>

                    {/* Buttons */}
                    <ScrollAnimation>
                        <div className="flex 
                        flex-col sm:flex-row 
                        gap-2 sm:gap-4 
                        justify-center 
                        items-center 
                        w-full">
                            <Link
                                to="/products"
                                className="relative overflow-hidden 
                                bg-orange-600 
                                text-white 
                                px-5 sm:px-8 md:px-8 lg:px-8 xl:px-8
                                py-3 sm:py-5 md:py-5 lg:py-5 xl:py-5
                                rounded-full 
                                font-medium 
                                transition-all duration-300 
                                transform 
                                hover:scale-105 shadow-lg hover:shadow-orange-600 group w-full sm:w-auto text-center"
                            >
                                {/* Glass overlay */}
                                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                {/* Shine effect */}
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
                                <span className="relative block">Explore Products</span>
                            </Link>

                            <Link
                                to="/about"
                                className="relative 
                                overflow-hidden 
                                backdrop-blur-md 
                                bg-white/10 
                                border-2 
                                border-orange-500/50
                                text-white 
                                px-5 sm:px-8 md:px-8 lg:px-8 xl:px-8
                                py-3 sm:py-5 md:py-5 lg:py-5 xl:py-5
                                rounded-full 
                                font-medium 
                                transition-all duration-300 transform 
                                hover:scale-105 hover:bg-gray-800 hover:border-orange-600 shadow-lg group w-full sm:w-auto text-center"
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

         
        </section>


    );
};

export default HeroSection;