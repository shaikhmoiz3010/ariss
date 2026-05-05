import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

// import Hero Section
import BlurText from '../animations/text/BlurText';
import MagicRings from '../animations/MagicRings';
import black4 from "../../assets/bg/27230.jpg";

import video from "../../assets/bgvideo/ariss1.mp4"

// import choose ariss section

const Hero = () => {

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

            <div className="absolute inset-0 z-0">
                <img
                    src={black4}
                    alt="Background"
                    className="w-full 
                    h-full 
                    object-cover sm:object-cover md:object-contain lg:object-contain
                    opacity-100"
                />
                {/* <div className="absolute inset-0 bg-black/30" /> */}
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
                            text-5xl sm:text-4xl md:text-5xl lg:text-6xl
                            font-medium
                            text-orange-600 
                            ">
                                SMART HOME REVOLUTION
                            </h1>
                        </div>
                    </ScrollAnimation>


                    {/* Description with Gradient */}
                    <ScrollAnimation>
                        <h3 className="text-white
                        font-light 
                        font-avenir 
                        max-w-4xl 
                        mx-auto 
                        mb-10 sm:mb-12 md:mb-16 lg:mb-16 xl:mb-16
                        px-5 sm:px-12 md:px-12 lg:px-12 xl:px-0 
                        text-center 
                        text-lg sm:text-lg md:text-lg lg:text-lg xl:text-xl">
                            Discover the future of home living with ARISS. Experience the power of Tuya Smart Automation, Alexa voice control, and smart lighting, all seamlessly integrated for your convenience. Transform your home into an intelligent sanctuary, where comfort, security, and efficiency converge.
                        </h3>
                    </ScrollAnimation>


                </div>
            </div>


        </section>


    );
};

export default Hero;