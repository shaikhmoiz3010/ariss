import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, ShieldCheck, Thermometer, Tv, Zap, Cpu, X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

import bgblack from '../../assets/bg/black1.png';


// Import the main hero image
import HeroSectionpic from '../../assets/products images/Quad Pro/image.png';

// Import background and feature images
import bgImage from '../../assets/products images/Quad Pro/Image-3.png';

// Import the new image for the features section
import Image4 from '../../assets/products images/Quad Pro/image-4.png';

// Import the new image for the hardware structure section
import Image6 from '../../assets/products images/Quad Pro/Image-61.png';

// Import your gallery images here
import gallery1 from '../../assets/products images/Quad Pro/Image-5.1.jpeg';
import gallery2 from '../../assets/products images/Quad Pro/Image-5.2.jpeg';
import gallery3 from '../../assets/products images/Quad Pro/Image-5.3.png';
import gallery4 from '../../assets/products images/Quad Pro/Image-5.4.png';
import gallery5 from '../../assets/products images/Quad Pro/Image-5.5.jpg';
import gallery6 from '../../assets/products images/Quad Pro/Image-5.6.png';

// Import images for last section
import Image7 from '../../assets/products images/Quad Pro/Image-7.1.png';
import Image8 from '../../assets/products images/Quad Pro/Image-7.2.png';
import Image9 from '../../assets/products images/Quad Pro/Image-7.3.png';


const QuadProSwitch = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideInterval, setSlideInterval] = useState(3000);
  const autoPlayRef = useRef(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Gallery Images Array
  const galleryImages = [
    { id: 1, src: gallery1, title: "Front View", description: "Elegant design with tactile buttons and vivid display" },
    { id: 2, src: gallery2, title: "Side Profile", description: "Sleek and modern aesthetics with premium finish" },
    { id: 3, src: gallery3, title: "Back Panel", description: "Easy installation with standard mounting points" },


  ];

  // Auto-slide effect with control
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
      }, slideInterval);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, slideInterval, galleryImages.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    // Reset auto-play timer when manually navigating
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      if (isAutoPlaying) {
        autoPlayRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
        }, slideInterval);
      }
    }
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    // Reset auto-play timer when manually navigating
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      if (isAutoPlaying) {
        autoPlayRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
        }, slideInterval);
      }
    }
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
    // Reset auto-play timer when manually navigating
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      if (isAutoPlaying) {
        autoPlayRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
        }, slideInterval);
      }
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const changeSlideSpeed = (speed) => {
    setSlideInterval(speed);
    if (isAutoPlaying) {
      // Restart interval with new speed
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
        }, speed);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">


      {/* Main Hero Section - Combined both sections */}
      <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgblack}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay to improve text readability */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-6xl mx-auto w-full z-20">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left order-2 lg:order-1 px-4 sm:px-6 lg:px-0"
            >
              <h1 className="bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 leading-tight">
                QUAD PRO SWITCH<br className="hidden sm:block" />
              </h1>
              <h2 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-3 md:mb-4">
                Where Intelligence Meets Elegance
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
                A revolutionary smart switch with real tactile buttons, a vivid display, and multi-functional control.
                ARISS Quad Pro is the future of home automation.
              </p>
            </motion.div>

            {/* Right Column - Product Image with Enhanced Hover Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center items-center order-1 lg:order-2 mb-6 lg:mb-0"
            >
              <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px]">
                {/* Main Image Container with Hover Effects */}
                <div className="relative group cursor-pointer">
                  {/* Glow Effect - Outer Ring */}
                  {/* <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-orange-500/30 via-orange-400/40 to-orange-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div> */}

                  {/* Glow Effect - Inner Ring */}
                  {/* <div className="absolute -inset-1 sm:-inset-2 bg-gray-100 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500"></div> */}

                  {/* Image with Hover Transformations */}
                  <div className=" relative transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                    <img
                      src={HeroSectionpic}
                      alt="Quad Pro Switch"
                      className="max-w-1xl h-auto object-contain rounded-1xl transition-all duration-500 group-hover:shadow-2xl px-8"
                    />


                  </div>

                </div>

                {/* Subtle Shadow Below Image */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Device Preview Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt="Quad Pro Switch Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Optional: Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        {/* Content Container - Text positioned at top */}
        <div className="relative z-20 flex items-start min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 w-full">
            <motion.div {...fadeIn} className="text-center md:text-left lg:text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight">
                Where Style Meets <span className="text-orange-500 font-bold">Smart Control</span>
              </h3>
              <p className="max-w-7xl mx-auto md:mx-0 lg:mx-auto mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Engineers reconstructed the bottom layer of the system and used a more streamlined instruction set, which brings faster system response and smoother control experience. The Device is more stable and reliable, adding luster to the user's smart life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgblack}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 sm:mb-4 md:mb-6"
            >
              One Switch, <span className="text-orange-500 font-bold relative inline-block">
                Many Possibilities
                {/* Underline Glow Effect */}
                {/* <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span> */}
              </span>
            </motion.h3>

            {/* Image Container with Premium Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative mb-8 sm:mb-10 md:mb-12 lg:mb-16"
            >
              <div className="relative z-10 group cursor-pointer">
                {/* Multi-layer Glow Effects */}
                {/* <div className="absolute -inset-3 sm:-inset-4 md:-inset-5 bg-gradient-to-r from-orange-500/40 via-orange-400/50 to-orange-500/40 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"></div> */}
                {/* <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-orange-400/30 to-orange-600/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div> */}

                {/* Image with Hover Transformations */}
                <div className="relative transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1">
                  <img
                    src={Image4}
                    alt="Quad Pro Switch Features"
                    className="w-full max-w-4xl mx-auto h-auto object-contain rounded-2xl shadow-2xl transition-all duration-500"
                  />

                </div>

              </div>

              {/* Ambient Background Glow */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 rounded-2xl blur-3xl -z-10 animate-pulse"></div> */}

              {/* Shadow Below Image */}
              {/* <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-2/3 h-6 bg-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2 sm:px-4"
            >
              Why install three separate devices when one Quad Pro does it all? With built-in relay control,
              scene switching, dimming, curtain control, and AC integration. It replaces multiple devices
              in a single elegant unit.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* GALLERY SECTION - With Full Control Carousel */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-600 to-gray-500">
        <div className="max-w-6xl mx-auto">

          {/* 3-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-full">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-3 sm:gap-2">
              {/* Card 1 - Bluetooth 5.0 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-900/50 transition-all duration-300 rounded-xl p-3 sm:p-4 cursor-pointer group"
              >
                <div className="flex items-end gap-3 sm:gap-3">
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-xs sm:text-sm">Bluetooth 5.0 Networking</h4>
                    <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5 sm:mt-1">Faster and more stable connections</p>
                  </div>
                </div>
              </motion.div>

              {/* Image 1 - Tall Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden cursor-pointer group relative h-[280px] sm:h-[320px] md:h-[360px]"
              >
                <img
                  src={gallery5}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

              </motion.div>

              {/* Card 2 - 4 Channel Relay */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 rounded-xl p-3 sm:p-4 cursor-pointer group"
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-xs sm:text-sm">4 Channel Relay</h4>
                    <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5 sm:mt-1">Total load of 2000W</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* MIDDLE COLUMN - FULL CONTROL CAROUSEL */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative rounded-xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] group">
                {/* Carousel Images */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => setSelectedImage(galleryImages[currentIndex])}
                  >
                    <img
                      src={galleryImages[currentIndex].src}
                      alt={galleryImages[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div> */}


                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      {/* <h4 className="text-white font-bold text-sm sm:text-base">{galleryImages[currentIndex].title}</h4>
                      <p className="text-gray-300 text-[10px] sm:text-xs mt-1 hidden sm:block">
                        {galleryImages[currentIndex].description}
                      </p> */}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-orange-500 rounded-full p-2 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-orange-500 rounded-full p-2 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>



                {/* Dots Indicator */}
                <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-1.5">
                  {galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToImage(idx);
                      }}
                      className={`transition-all duration-300 rounded-full ${currentIndex === idx
                        ? 'w-6 h-1.5 bg-gray-900'
                        : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                        }`}
                    />
                  ))}
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Dual Microphone Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 rounded-xl p-3 sm:p-4 cursor-pointer group"
              >
                <div className="flex items-start gap-2 sm:gap-3">

                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-xs sm:text-sm">Dual Microphone Array</h4>
                    <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5 sm:mt-1">Crystal clear voice control</p>
                  </div>
                </div>
              </motion.div>

              {/* Image 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden cursor-pointer group h-[200px] sm:h-[280px]"
              >
                <img
                  src={gallery4}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>

              {/* Image 3 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden cursor-pointer group h-[140px] sm:h-[150px]"
              >
                <img
                  src={gallery6}
                  // alt={galleryImages[1].title}
                  className="w-full h-full object-fill transform group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIdx = galleryImages.findIndex(img => img.id === selectedImage.id);
                  const prevIdx = (currentIdx - 1 + galleryImages.length) % galleryImages.length;
                  setSelectedImage(galleryImages[prevIdx]);
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-orange-500 rounded-full p-3 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIdx = galleryImages.findIndex(img => img.id === selectedImage.id);
                  const nextIdx = (currentIdx + 1) % galleryImages.length;
                  setSelectedImage(galleryImages[nextIdx]);
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-orange-500 rounded-full p-3 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-orange-500 rounded-full p-2 transition-all duration-300"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-gray-300 mt-2">{selectedImage.description}</p>
              </div>

              <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(img);
                    }}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${selectedImage.id === img.id ? 'ring-2 ring-orange-500 scale-110' : 'opacity-60 hover:opacity-100'
                      }`}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quad Pro hardware structure */}
      <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black py-1 sm:py-16` lg:py-2">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="bg-gradient-to-r from-orange-600 via-orange-300 to-orange-600 bg-clip-text text-transparent sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight justify-normal text-center">
            Engineered to Perform, Built to last<br className="hidden sm:block" />
          </h2>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >

              <h2 className="text-white sm:text-xl md:text-2xl font-light mb-4">
                CNC Machined Finish
              </h2>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                Aircraft-grade craftedsmanship with a smooth, luxurious finish. Carefully engineered for 250gf ctuation pressure
              </p>
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-light mb-4">
                Backlit Tactile Buttons
              </h2>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                Real tactile buttons with customizable backlighting. Designed for a satisfying click and easy navigation, even in the dark.
              </p>
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-light mb-4">
                100,000+ Press Test Reliability
              </h2>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                Passe multiple rigorous tests Max. single-channel load of 300W, ensuring long-lasting performance and reliability for all your smart home needs.
              </p>
            </motion.div>

            {/* Right Column - Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full">
                <img
                  src={Image6}
                  alt="Quad Pro Switch"
                  className="m-auto w-96 h-auto object-contain rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent rounded-2xl blur-2xl -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* last Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-800 to-gray-600 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
              3 Solutions, <span className="text-orange-500 font-bold">4 Buttons and 12 Scenes</span>
            </h3>

            <p className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Let you exprience the charm of super smart control
            </p>

            <div className="relative mb-12">
              <div className="relative z-10 flex flex-row gap-16 justify-center p-8  ">
                <img
                  src={Image7}
                  alt="Quad Pro Switch Features"
                  className="w-full max-w-[300px] mx-auto h-auto object-contain rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <img
                  src={Image8}
                  alt="Quad Pro Switch Features"
                  className="w-full max-w-[300px] mx-auto h-auto object-contain rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <img
                  src={Image9}
                  alt="Quad Pro Switch Features"
                  className="w-full max-w-[300px] mx-auto h-auto object-contain rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 rounded-2xl blur-3xl -z-10"></div>
            </div>


          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default QuadProSwitch;