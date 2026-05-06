import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

import icon1 from '../../assets/Logos/icon1.png'
import icon2 from '../../assets/Logos/icon2.png'
import icon3 from '../../assets/Logos/icon3.png'
import icon4 from '../../assets/Logos/icon4.png'
import icon5 from '../../assets/Logos/icon5.png'
import icon6 from '../../assets/Logos/icon6.png'
import icon7 from '../../assets/Logos/icon7.png'
import icon8 from '../../assets/Logos/icon8.png'
import icon9 from '../../assets/Logos/icon9.png'
import icon10 from '../../assets/Logos/icon10.png'

import bghome from "../../assets/bg/home-automation.jpg"
import black4 from "../../assets/bg/black12.jpg"

const ICONS = [
  { src: icon1, label: 'Lighting' },
  { src: icon2, label: 'Climate' },
  { src: icon3, label: 'Security' },
  { src: icon4, label: 'Energy' },
  { src: icon5, label: 'Music' },
  { src: icon6, label: 'Sensors' },
  { src: icon7, label: 'Curtains' },
  { src: icon8, label: 'Camera' },
  { src: icon9, label: 'Door Lock' },
  { src: icon10, label: 'EV Charge' },
];

// ── Icon tile ──────────────────────────────────────────────────────────────────
const IconTile = ({ src, label, index, hovered, onHover, onLeave, size = 'md' }) => {
  const active = hovered === index;
  const box = size === 'sm'
    ? 'w-14 h-14'
    : 'w-16 h-16 md:w-[72px] md:h-[72px]';
  const img = size === 'sm' ? 'w-16 h-16' : 'w-16 h-16 md:w-20 md:h-20';

  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
    >
      <div
        className={`
          relative flex items-center justify-center
          ${box} border
          transition-all duration-500
          ${active
            ? 'border-orange-600 bg-orange-600 scale-110'
            : 'border-black bg-white/[0.04] hover:border-white/20'}
        `}
      >
        <div
          className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
          style={{ boxShadow: '0 0 24px 4px rgba(234,88,12,0.25)' }}
        />
        <img
          src={src}
          alt={label}
          className={`
            ${img} relative z-10 object-contain transition-all duration-500
            ${active
              ? 'brightness-110 drop-shadow-[0_0_10px_rgba(249,115,22,0.7)]'
              : 'brightness-[0.65]'}
          `}
        />
      </div>
      <span className={`
        text-[8px] tracking-[0.14em] uppercase font-light
        transition-colors duration-300 text-center leading-tight
        ${active ? 'text-orange-600' : 'text-white/22'}
      `}>
      </span>
    </div>
  );
};

// ── Section ────────────────────────────────────────────────────────────────────
const IOTEcosystemSection = () => {
  const [hovered, setHovered] = useState(null);
  const topRow = ICONS.slice(0, 5);

  return (
    <section className="bg-black relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4">

      {/* ── BG image — full bleed ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={black4}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-100"
        />
      </div>

      {/* ── Ambient overlays ── */}


      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">

        {/* ── Heading ── */}
        <ScrollAnimation>
          <div className="text-center mb-14 lg:mb-20">
            <p className="text-[10px] tracking-[0.28em] uppercase text-orange-600 font-light mb-5">
              Tuya Powered · 700M+ Devices
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight tracking-tight mb-6">
              Largest IoT<br />
              <span className="text-orange-600">Ecosystem</span>
            </h2>

            {/* Animated dot-trail divider */}
            <div className="flex items-center justify-center gap-1 mb-8">
              <div className="w-[3px] h-[3px] rounded-full bg-orange-600/35 opacity-0 animate-[dotLoop_2.4s_ease_0.24s_infinite]" />
              <div className="w-[3px] h-[3px] rounded-full bg-orange-600 opacity-0 animate-[dotLoop_2.4s_ease_0.12s_infinite]" />
              <div className="w-[3px] h-[3px] rounded-full bg-orange-600 opacity-0 animate-[dotLoop_2.4s_ease_infinite]" />

              <div className="h-px bg-orange-600 w-0 animate-[lineLoop_2.4s_cubic-bezier(0.4,0,0.2,1)_infinite]" />

              <div className="w-[3px] h-[3px] rounded-full bg-orange-600 opacity-0 animate-[dotLoop_2.4s_ease_infinite]" />
              <div className="w-[3px] h-[3px] rounded-full bg-orange-600 opacity-0 animate-[dotLoop_2.4s_ease_0.12s_infinite]" />
              <div className="w-[3px] h-[3px] rounded-full bg-orange-600/35 opacity-0 animate-[dotLoop_2.4s_ease_0.24s_infinite]" />
            </div>

            <p className="text-white/40 font-light max-w-2xl mx-auto text-sm lg:text-base leading-relaxed">
              Our network of interconnected devices delivers diverse automation
              solutions — seamlessly adapting to every room, routine, and preference.
            </p>
          </div>
        </ScrollAnimation>

        {/* ── DESKTOP: Single row of all 10 icons ── */}
        <ScrollAnimation>
          <div className="hidden md:flex justify-center items-start gap-3 lg:gap-5 w-full flex-wrap">
            {ICONS.map((icon, i) => (
              <IconTile
                key={i}
                {...icon}
                index={i}
                hovered={hovered}
                onHover={setHovered}
                onLeave={() => setHovered(null)}
              />
            ))}
          </div>
        </ScrollAnimation>

        {/* ── MOBILE: L-shape + home image ── */}
        <ScrollAnimation>
          <div className="md:hidden w-full">

            {/* Top row — 5 icons */}
            <div className="grid grid-cols-5 gap-2 mb-2">
              {topRow.map((icon, i) => (
                <IconTile
                  key={i}
                  {...icon}
                  index={i}
                  hovered={hovered}
                  onHover={setHovered}
                  onLeave={() => setHovered(null)}
                  size="sm"
                />
              ))}
            </div>

            {/* Bottom: left column of 4 icons + image */}
            <div className="grid grid-cols-5 gap-2">
              <div className="col-span-1 flex flex-col gap-2">
                {ICONS.slice(5, 9).map((icon, i) => (
                  <IconTile
                    key={i + 5}
                    {...icon}
                    index={i + 5}
                    hovered={hovered}
                    onHover={setHovered}
                    onLeave={() => setHovered(null)}
                    size="sm"
                  />
                ))}
              </div>

              {/* bghome image */}
              <div className="col-span-4 relative rounded-lg overflow-hidden" style={{ minHeight: '240px' }}>
                <img
                  src={bghome}
                  alt="Smart Home Ecosystem"
                  className="w-full h-full object-fit"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-orange-900/20" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[8px] tracking-[0.2em] uppercase text-white/50 font-light">
                    Smart Living · Automated
                  </span>
                </div>
              </div>
            </div>


          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
};

export default IOTEcosystemSection;