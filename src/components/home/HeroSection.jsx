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

            {/* ── Background Video ── */}
            <div className="absolute inset-0 z-0">
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-100"
                />
            </div>

            {/* ── Centered Content ── */}
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
                <ScrollAnimation>
                    <div className="flex flex-col mt-96 items-center justify-center text-center gap-8">

                        {/* Heading */}
                        <h2 className="font-light m-0 p-0">
                            <BlurText
                                text="Step into the World of Smart Living"
                                delay={150}
                                animateBy="letters"
                                direction="top"
                                onAnimationComplete={handleAnimationComplete}
                                className="uppercase text-sm sm:text-3xl md:text-4xl lg:text-5xl text-white justify-center"
                            />
                        </h2>

                    </div>
                </ScrollAnimation>
            </div>

            {/* ── Scroll Indicator ── outside ScrollAnimation, pinned to section ── */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
                <span className="text-[8px] tracking-[0.22em] uppercase text-white/25 font-light">
                    Scroll
                </span>
                <div className="relative w-px h-12 bg-white/[0.08] overflow-hidden">
                    <span className="absolute top-[-100%] left-0 w-full h-full
                        bg-gradient-to-b from-transparent to-orange-600
                        animate-[lineDrain_1.8s_ease-in-out_infinite]"
                    />
                </div>
            </div>

        </section>
    );
};

export default HeroSection;