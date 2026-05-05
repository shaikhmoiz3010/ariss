import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';
import BlurText from '../animations/text/BlurText';
import video from "../../assets/bgvideo/ariss1.mp4";

const HeroSection = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-100"
                />
                {/* <div className="absolute inset-0 bg-black/30" /> */}
            </div>

            {/* Centered Content */}
            <div className="relative z-10 w-full 
            max-w-4xl 
            mx-auto 
            px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="flex flex-col items-center justify-center text-center gap-8">

                        {/* Heading */}
                        <h2 className="font-light m-0 p-0">
                            <BlurText
                                text="Step into the World of Smart Living"
                                delay={150}
                                animateBy="letters"
                                direction="top"
                                onAnimationComplete={handleAnimationComplete}
                                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white justify-center"
                            />
                        </h2>

                        {/* Buttons */}
                        <div className="
                        mt-48 md:mt-6
                        flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center">

                            <Link
                                to="/products"
                                className="relative overflow-hidden 
                                bg-orange-600 text-white
                                px-10 sm:px-8 md:px-8 lg:px-8
                                py-3 sm:py-4 md:py-4 lg:py-4
                                rounded-full 
                                font-light
                                transition-all duration-300 hover:scale-105
                                shadow-lg
                                border-2 border-orange-500/50 hover:border-orange-600 
                                hover:shadow-orange-600/50
                                group w-full sm:w-auto text-center"
                            >
                                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
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
                                px-10 sm:px-12 md:px-12 lg:px-12
                                py-3 sm:py-4 md:py-4 lg:py-4
                                rounded-full 
                                font-light
                                transition-all duration-300 
                                hover:scale-105
                                hover:bg-gray-800 hover:border-orange-600
                                shadow-lg group w-full sm:w-auto text-center"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                <span className="relative block">Learn More</span>
                            </Link>

                        </div>
                    </div>
                </ScrollAnimation>
            </div>

        </section>
    );
};

export default HeroSection;