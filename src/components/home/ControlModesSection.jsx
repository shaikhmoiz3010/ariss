import React, { useState, useRef, useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';

const MODES = [
  {
    id: 'app',
    icon: '📱',
    title: 'Smartlife App',
    desc: 'iOS, Android, iPad & Apple Watch',
    badge: 'iOS · Android',
    detail: 'Full control from anywhere in the world. Schedule, automate, and monitor all devices from a single dashboard.',
  },
  {
    id: 'voice',
    icon: '🎙️',
    title: 'Voice Control',
    desc: 'Alexa, Google Home & Siri',
    badge: 'Hands-free',
    detail: 'Hands-free control with all major voice assistants. Just say the word — your home responds instantly.',
  },
  {
    id: 'switch',
    icon: '🔘',
    title: 'Physical Switch',
    desc: 'Bell, toggle & regular switches',
    badge: 'No rewiring',
    detail: 'Works seamlessly with your existing switches. No rewiring. No disruption. Smart and manual — together.',
  },
  {
    id: 'timer',
    icon: '⏱️',
    title: 'Schedules & Timers',
    desc: 'Routines, scenes & automation',
    badge: 'Automated',
    detail: 'Set it once and forget it. Create intelligent scenes that adapt to your lifestyle automatically.',
  },
];

const ControlModesSection = () => {
  const [activeMode, setActiveMode] = useState('voice');
  const videoRef = useRef(null);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVideoVisible(true); },
      { threshold: 0.2 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  const activeDetail = MODES.find(m => m.id === activeMode)?.detail;

  return (
    <section
      id="control-modes"
      className="bg-white relative min-h-screen flex flex-col justify-center overflow-hidden py-16 px-6 lg:px-12"
    >
      {/* ── Ambient ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(ellipse, rgba(234,88,12,0.05) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-10">

        {/* ── TOP ROW: left text + right 4-card row + detail ── */}
        <ScrollAnimation>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

            {/* LEFT — heading + body */}
            <div className="flex-shrink-0 lg:w-[36%] pt-1">
              <p className="text-[10px] tracking-[0.26em] uppercase text-orange-600 font-light mb-4">
                Total Flexibility · Every Preference
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-black leading-[1.05] tracking-tight mb-5">
                All Modes<br />of <span className='font-bold text-orange-600'>Control</span>
              </h2>



              <p className="text-gray-700 font-light text-sm lg:text-[15px] leading-relaxed max-w-xs">
                ARISS modules work with all regular switches —
                bell, toggle, and smart. Control your home from
                the Smartlife app, by voice, or right from the wall.
              </p>
            </div>

            {/* RIGHT — single row of 4 cards + detail strip */}
            <div className="flex-1 flex flex-col gap-3">

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {MODES.map((mode) => {
                  const isActive = activeMode === mode.id;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setActiveMode(mode.id)}
                      className={`
                        relative flex flex-col gap-3
                        p-4 rounded-[16px] border text-left
                        transition-all duration-300 cursor-pointer overflow-hidden
                        min-h-[160px]
                        ${isActive
                          ? 'border-orange-400 bg-orange-50 -translate-y-0.5'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-sm'}
                      `}
                    >
                      {/* Top orange indicator bar */}
                      <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-[16px] bg-orange-600 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                      {/* Icon */}


                      {/* Text */}
                      <div className="flex-1 flex flex-col gap-1">
                        <p className={`text-[13px] font-semibold leading-snug transition-colors duration-300 ${isActive ? 'text-orange-600' : 'text-gray-800'}`}>
                          {mode.title}
                        </p>
                        <p className="text-[11px] text-gray-600 font-light leading-relaxed">{mode.desc}</p>
                      </div>

                      {/* Badge */}
                      <span className={`inline-block text-[10px] px-2 py-0.5 rounded-md border font-light tracking-wide transition-colors duration-300 ${isActive ? 'bg-orange-100 text-orange-600 border-orange-200' : 'bg-gray-100 text-gray-400 border-gray-200'}`}>
                        {mode.badge}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Detail strip */}
              <div
                key={activeMode}
                className="px-4 py-3 rounded-xl border border-gray-100 bg-white text-[13px] text-gray-500 font-light leading-relaxed animate-[fadeInUp_0.35s_ease_forwards]"
              >
                {activeDetail}
              </div>
            </div>

          </div>
        </ScrollAnimation>

        {/* ── BOTTOM: full-width video ── */}
        <ScrollAnimation>
          <div
            ref={videoRef}
            className={`
              w-full transition-all duration-700
              ${videoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            <div
              className="relative rounded-full overflow-hidden group w-full"
              style={{
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 8px 48px rgba(0,0,0,0.5)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.07] to-transparent z-10" />
              <div className="absolute inset-0 bg-orange-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

              <video
                className="w-full h-auto object-cover block"
                autoPlay
                loop
                muted
                playsInline
                style={{ aspectRatio: '1040/355', maxHeight: '380px' }}
                poster="https://static.wixstatic.com/media/ea31d6_c6d5dc0d5de74aaaa1323d4673b5ec0ef000.jpg/v1/fill/w_969,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea31d6_c6d5dc0d5de74aaaa1323d4673b5ec0ef000.jpg"
              >
                <source
                  src="https://video.wixstatic.com/video/ea31d6_c6d5dc0d5de74aaaa1323d4673b5ec0e/1080p/mp4/file.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            {/* Compat strip */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-5 pt-5 border-t border-gray-100">
              {['Tuya', 'Alexa', 'Google Home', 'Siri', 'Smartlife'].map((brand) => (
                <span
                  key={brand}
                  className="text-[10px] tracking-[0.2em] uppercase text-gray-700 font-light hover:text-orange-600 transition-colors duration-300 cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </ScrollAnimation>

      </div>

      {/* Bottom rim */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default ControlModesSection;