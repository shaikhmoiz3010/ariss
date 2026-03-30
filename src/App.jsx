import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';

// Import all product pages
import DoubleSwitch from './pages/products/DoubleSwitch';
import FourGangSwitch from './pages/products/FourGangSwitch';
import QuadSwitch from './pages/products/QuadSwitch';
import QuadProSwitch from './pages/products/QuadProSwitch';
import TriacDimmer from './pages/products/TriacDimmer';
import SmartDriverCC from './pages/products/SmartDriverCC';
// import SmartDriverCV from './pages/products/SmartDriverCV';
import LanZigbeeGateway from './pages/products/LanZigbeeGateway';
import BleZigbeeGateway from './pages/products/BleZigbeeGateway';
import FourButtonSceneSwitch from './pages/products/FourButtonSceneSwitch';
import TheButton from './pages/products/TheButton';
import SmartKnob from './pages/products/SmartKnob';
import HomeMasterMini from './pages/products/HomeMasterMini';
import HomeMaster from './pages/products/HomeMaster';
import DigitalDoorLock from './pages/products/DigitalDoorLock';
import SmartIrBlaster from './pages/products/SmartIrBlaster';
import CurtainController from './pages/products/CurtainController';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            
            {/* Switch routes */}
            <Route path="/product/double-switch" element={<DoubleSwitch />} />
            <Route path="/product/4-gang-switch" element={<FourGangSwitch />} />
            <Route path="/product/quad-switch" element={<QuadSwitch />} />
            <Route path="/product/quad-pro-switch" element={<QuadProSwitch />} />
            
            {/* Lighting routes */}
            <Route path="/product/triac-dimmer" element={<TriacDimmer />} />
            <Route path="/product/smart-driver-cc" element={<SmartDriverCC />} />
            {/* <Route path="/product/smart-driver-cv" element={<SmartDriverCV />} /> */}
            
            {/* Gateway routes */}
            <Route path="/product/lan-zigbee-gateway" element={<LanZigbeeGateway />} />
            <Route path="/product/ble-zigbee-gateway" element={<BleZigbeeGateway />} />
            
            {/* Scene Control routes */}
            <Route path="/product/4-button-scene-switch" element={<FourButtonSceneSwitch />} />
            <Route path="/product/the-button" element={<TheButton />} />
            <Route path="/product/smart-knob" element={<SmartKnob />} />
            
            {/* Display routes */}
            <Route path="/product/home-master-mini" element={<HomeMasterMini />} />
            <Route path="/product/home-master" element={<HomeMaster />} />
            
            {/* Security routes */}
            <Route path="/product/digital-door-lock" element={<DigitalDoorLock />} />
            
            {/* Appliance routes */}
            <Route path="/product/smart-ir-blaster" element={<SmartIrBlaster />} />
            <Route path="/product/curtain-controller" element={<CurtainController />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;