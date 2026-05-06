import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';
import black4 from "../../assets/products-images/IslandSeries/main1.jpg";

const Hero = () => {
    return (
        <section className="bg-black relative min-h-screen flex items-center overflow-hidden">

            {/* ── Right-side product image (desktop only) ── */}
            <div className="
                hidden lg:block
                absolute right-0 top-0 bottom-0
                z-0
            ">
                <img
                    src={black4}
                    alt="ARISS Island Series"
                    className="object-cover"
                />
            </div>

            {/* ── Mobile background image (faded, full bleed) ── */}
            <div className="absolute inset-0 z-0">
                <img
                    src={black4}
                    alt="ARISS Island Series"
                    className="w-full h-full object-cover object-center opacity-100"
                />
                {/* <div className="absolute inset-0 bg-black/60" /> */}
            </div>

            {/* ── Content column ── */}
            <div className="relative 
            z-10 
            w-full 
            max-w-7xl 
            mx-auto 
            px-6 sm:px-8 lg:px-16 
            py-24 md:py-28">
                <div className="flex 
                flex-col 
                items-start 
                justify-center 
                text-left 
                max-w-md 
                lg:max-w-lg
                mb-28">

                    {/* Eyebrow label */}
                    <ScrollAnimation>
                        <p className="
                            text-orange-600
                            text-xs
                            font-normal
                            tracking-[0.25em]
                            uppercase
                            mb-5
                        ">
                            Minimal by Design
                        </p>
                    </ScrollAnimation>

                    {/* Main heading */}
                    <ScrollAnimation>
                        <h1 className="
                            text-white
                            text-4xl sm:text-5xl lg:text-5xl xl:text-6xl
                            font-bold
                            leading-[1.05]
                            tracking-tight
                            mb-6
                            uppercase
                        ">
                            Smart Home<br />Revolution
                        </h1>
                    </ScrollAnimation>

                    {/* Divider */}
                    <ScrollAnimation>
<div className="flex items-center gap-1 mb-7">
  <div className="h-px bg-orange-600 w-0
    animate-[lineLoop_2.4s_cubic-bezier(0.4,0,0.2,1)_infinite]" />
  <div className="w-[3px] h-[3px] rounded-full bg-orange-600 opacity-0 scale-0
    animate-[dotLoop_2.4s_ease_infinite]" />
  <div className="w-[3px] h-[3px] rounded-full bg-orange-600 opacity-0 scale-0
    animate-[dotLoop_2.4s_ease_0.12s_infinite]" />
  <div className="w-[3px] h-[3px] rounded-full bg-orange-600/35 opacity-0 scale-0
    animate-[dotLoop_2.4s_ease_0.24s_infinite]" />
</div>
                    </ScrollAnimation>

                    {/* Body copy */}
                    <ScrollAnimation>
                        <p className="
                        hidden sm:hidden md:block
                            text-white/55
                            font-light
                            text-base lg:text-lg
                            leading-relaxed
                            mb-12
                            max-w-sm
                        ">
                            Smart living made effortless — powered by Tuya automation,
                            Alexa voice control, and intelligent lighting. Turn your home
                            into a space that thinks, responds, and adapts to you.
                        </p>
                    </ScrollAnimation>

                    {/* CTA Buttons */}
                    <ScrollAnimation>
                        <div className="flex 
                        flex-col sm:flex-col md:flex-row
                        gap-4">

                            {/* Primary — orange pill */}
                            <Link
                                to="/products"
                                className="
                                    mt-24 sm:mt-16 md:mt-0 lg:mt-0
                                    relative overflow-hidden
                                    bg-orange-600
                                    text-white
                                    text-sm font-normal
                                    px-8
                                    py-4
                                    rounded-full
                                    transition-all duration-300
                                    hover:bg-orange-500
                                    hover:scale-[1.02]
                                    active:scale-[0.98]
                                    w-full sm:w-auto text-center
                                    group
                                "
                            >
                                <span className="
                                    absolute inset-0
                                    -translate-x-full group-hover:translate-x-full
                                    transition-transform duration-700
                                    bg-gradient-to-r from-transparent via-white/20 to-transparent
                                " />
                                <span className="relative">Explore Products</span>
                            </Link>

                            {/* Secondary — frosted pill */}
                            <Link
                                to="/about"
                                className="
                                    relative overflow-hidden
                                    bg-white/10
                                    backdrop-blur-md
                                    border border-white/15
                                    text-white/70
                                    text-sm font-normal
                                    px-12 py-4
                                    rounded-full
                                    transition-all duration-300
                                    hover:bg-white/15
                                    hover:text-white
                                    hover:border-white/25
                                    hover:scale-[1.02]
                                    active:scale-[0.98]
                                    w-full sm:w-auto text-center
                                    group
                                "
                            >
                                <span className="
                                    absolute inset-0
                                    -translate-x-full group-hover:translate-x-full
                                    transition-transform duration-700
                                    bg-gradient-to-r from-transparent via-white/10 to-transparent
                                " />
                                <span className="relative">Learn More</span>
                            </Link>

                        </div>
                    </ScrollAnimation>

                </div>
            </div>

            {/* Bottom rim line */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" /> */}

        </section>
    );
};

export default Hero;