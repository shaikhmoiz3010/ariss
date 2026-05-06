import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const WarrantySection = () => {
  return (
    <section
      id="comp-lkgvo92u"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >


      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* ── LEFT: Warranty badge ── */}
            <div className="flex justify-center items-center order-first">
              <div
                className="relative"
                style={{ width: 320, height: 320, animation: 'float 6s ease-in-out infinite' }}
              >
                {/* dashed orbit ring */}
                <div
                  className="absolute rounded-full "
                  style={{
                    inset: -12,
                    border: '1.5px dashed rgba(255,100,0)',
                    animation: 'spin 20s linear infinite',
                  }}
                />

                {/* main circle */}
                <div
                  className="relative w-full h-full rounded-full border-2 border-orange-600 flex items-center justify-center overflow-hidden"
                >
                  <img
                    loading="lazy"
                    src="https://static.wixstatic.com/media/ea31d6_8449571543c04d15be31caa3a2a471ca~mv2.png/v1/fill/w_315,h_315,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Icons%20-%20Images%20(17).png"
                    srcSet="
                      https://static.wixstatic.com/media/ea31d6_8449571543c04d15be31caa3a2a471ca~mv2.png/v1/fill/w_315,h_315,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Icons%20-%20Images%20(17).png 1x,
                      https://static.wixstatic.com/media/ea31d6_8449571543c04d15be31caa3a2a471ca~mv2.png/v1/fill/w_600,h_600,al_c,lg_1,q_85,enc_avif,quality_auto/Icons%20-%20Images%20(17).png 2x
                    "
                    alt="5 Years Warranty"
                    className="relative z-10 w-96 h-96 object-contain"
                    width={340}
                    height={340}
                  />
                </div>
              </div>
            </div>

            {/* ── RIGHT: Text ── */}
            <div className="flex flex-col">

              {/* eyebrow */}
              <div
                className="inline-flex items-center gap-2 mb-5 self-start px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.18em] uppercase"
                style={{
                  color: 'rgba(255,100,0,0.85)',
                  background: 'rgba(255,80,0,0.06)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-orange-600"
                  style={{ boxShadow: '0 0 8px rgba(255,100,0)', animation: 'pulse 2s ease-in-out infinite' }}
                />
                Certified Protection
              </div>

              {/* headline */}
              <h1
                className="font-black leading-none mb-6 tracking-tight"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(52px, 7vw, 88px)' }}
              >
                <span className="text-white block">5 YEARS</span>
                <span
                  className="text-orange-600"
                  style={{
                   
                    backgroundSize: '200%',
                    animation: 'shimmer 3s linear infinite',
                  }}
                >
                  WARRANTY
                </span>
              </h1>

              {/* body */}
              <p
                className="text-base leading-relaxed mb-10 max-w-[460px]"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Enjoy peace of mind with our exclusive 5-year warranty — a demonstration of our absolute confidence in lasting performance, engineered to exceed expectations and deliver worry-free ownership for years to come.
              </p>


            </div>

          </div>
        </ScrollAnimation>
      </div>

      {/* ── Keyframe styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </section>
  );
};

export default WarrantySection;