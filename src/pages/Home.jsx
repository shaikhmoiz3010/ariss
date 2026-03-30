import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ChooseArissSection from '../components/home/ChooseArissSection';
import IOTEcosystemSection from '../components/home/IOTEcosystemSection';
import RetrofitSolution from '../components/home/RetrofitSolution';
import ControlModesSection from '../components/home/ControlModesSection';
import WarrantySection from '../components/home/WarrantySection';
import CompatibleBrands from '../components/home/CompatibleBrands';


const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <ChooseArissSection />
      <RetrofitSolution />
      <IOTEcosystemSection />
      <ControlModesSection />
      <WarrantySection />
      <CompatibleBrands />


      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Home;