import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Home, Info, Phone, ChevronRight, Package,
  Zap, ChevronDown, Sparkles, ArrowRight, Circle,
  Grid3x3, ShoppingBag, Layers, Star, TrendingUp,
  Monitor, Cpu, Wifi, Shield, Lightbulb, DoorOpen
} from 'lucide-react';

// Enhanced product data structure with rich metadata
const productData = {
  categories: [
    {
      id: 'switches',
      name: 'Switches',
      icon: '🔌',
      iconComponent: Zap,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Smart control at your fingertips',
      featured: true,
      products: [
        { id: 'double-switch', name: 'Double Switch', sku: 'DS-200', price: '$49.99', tag: 'Popular', new: false },
        { id: '4-gang-switch', name: '4-Gang Switch', sku: '4GS-100', price: '$79.99', tag: '', new: false },
        { id: 'quad-switch', name: 'Quad Switch', sku: 'QS-400', price: '$89.99', tag: 'Best Value', new: false },
        { id: 'quad-pro-switch', name: 'Quad Pro Switch', sku: 'QPS-500', price: '$129.99', tag: 'Pro', new: true }
      ]
    },
    {
      id: 'lighting',
      name: 'Lighting',
      icon: '',
      iconComponent: Lightbulb,
      gradient: 'from-amber-500 to-yellow-500',
      description: 'Illuminate your world',
      featured: true,
      products: [
        { id: 'triac-dimmer', name: 'Triac Dimmer', sku: 'TD-100', price: '$39.99', tag: '', new: false },
        { id: 'smart-driver-cc', name: 'Smart Driver CC', sku: 'SD-CC-24', price: '$59.99', tag: '', new: true },
        { id: 'smart-driver-cv', name: 'Smart Driver CV', sku: 'SD-CV-12', price: '$59.99', tag: '', new: false }
      ]
    },
    {
      id: 'gateways',
      name: 'Gateways',
      icon: '🌐',
      iconComponent: Wifi,
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Connect everything',
      featured: false,
      products: [
        { id: 'lan-zigbee-gateway', name: 'LAN Zigbee Gateway', sku: 'LZG-100', price: '$89.99', tag: '', new: false },
        { id: 'ble-zigbee-gateway', name: 'BLE Zigbee Gateway', sku: 'BZG-200', price: '$99.99', tag: 'New', new: true }
      ]
    },
    {
      id: 'scene-control',
      name: 'Scene Control',
      icon: '🎛️',
      iconComponent: Layers,
      gradient: 'from-indigo-500 to-purple-500',
      description: 'Create perfect moments',
      featured: true,
      products: [
        { id: '4-button-scene-switch', name: '4-Button Scene Switch', sku: '4BSS-100', price: '$69.99', tag: '', new: false },
        { id: 'the-button', name: 'The Button', sku: 'TB-001', price: '$29.99', tag: 'Essential', new: false },
        { id: 'smart-knob', name: 'Smart Knob', sku: 'SK-360', price: '$79.99', tag: '', new: true }
      ]
    },
    {
      id: 'displays',
      name: 'Displays',
      icon: '📺',
      iconComponent: Monitor,
      gradient: 'from-emerald-500 to-teal-500',
      description: 'Visual intelligence',
      featured: false,
      products: [
        { id: 'home-master-mini', name: 'Home Master Mini', sku: 'HMM-100', price: '$199.99', tag: '', new: true },
        { id: 'home-master', name: 'Home Master', sku: 'HM-200', price: '$299.99', tag: 'Premium', new: false }
      ]
    },
    {
      id: 'security',
      name: 'Security',
      icon: '🔒',
      iconComponent: Shield,
      gradient: 'from-red-500 to-orange-500',
      description: 'Peace of mind',
      featured: false,
      products: [
        { id: 'digital-door-lock', name: 'Digital Door Lock', sku: 'DDL-9000', price: '$159.99', tag: '', new: false }
      ]
    },
    {
      id: 'appliances',
      name: 'Appliances',
      icon: '🧺',
      iconComponent: Cpu,
      gradient: 'from-slate-500 to-zinc-500',
      description: 'Smart home essentials',
      featured: false,
      products: [
        { id: 'smart-ir-blaster', name: 'Smart IR Blaster', sku: 'IRB-400', price: '$34.99', tag: '', new: false },
        { id: 'curtain-controller', name: 'Curtain Controller', sku: 'CC-100', price: '$54.99', tag: '', new: true }
      ]
    }
  ]
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(productData.categories[0].id);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(false); // Added missing state
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState(null);
  const menuTimeoutRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const productMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside for desktop menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productMenuRef.current && !productMenuRef.current.contains(event.target)) {
        setIsProductMenuOpen(false);
        setMenuAnimation(false);
      }
    };

    if (isProductMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProductMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleProductMenuEnter = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setIsProductMenuOpen(true);
    setMenuAnimation(true);
  };

  const handleProductMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setIsProductMenuOpen(false);
      setMenuAnimation(false);
    }, 200);
  };

  const handleMobileCategoryClick = (categoryId) => {
    setMobileActiveCategory(mobileActiveCategory === categoryId ? null : categoryId);
  };

  const navLinks = [
    { name: 'Home', href: '/', icon: Home, description: 'Dashboard' },
    { name: 'About', href: '/about', icon: Info, description: 'Our story' },
    { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in touch' },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 transition-all duration-700">
        <div className="">
          <div className={` px-6 py-2
            relative flex justify-between items-center
            bg-black backdrop-blur-2xl backdrop-saturate-200
            shadow-[0_8px_32px_rgba(0,0,0,0.4)]
            transition-all duration-500
            hover:shadow-[0_8px_32px_rgba(249,115,22,0.3)]
            hover:border-orange-500/50
          `}>

            {/* Left Side - Enhanced Products Menu */}
            <div className="hidden md:flex items-center">
              <div
                ref={productMenuRef}
                className="relative"
                onMouseEnter={handleProductMenuEnter}
                onMouseLeave={handleProductMenuLeave}
              >
                <button
                  className="group relative px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 overflow-hidden"
                  aria-expanded={isProductMenuOpen}
                  aria-haspopup="true"
                >
                  <div className="absolute inset-0 bg-gradient-to-l from-orange-600/60  to-orange-500/50 rounded-full group-hover:from-orange-600 group-hover:to-orange-600 transition-all duration-500"></div>

                  <span className="relative z-10 flex items-center gap-2 text-white font-semibold text-base tracking-wide">
                    <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent group-hover:text-white transition-all duration-300">
                      Products
                    </span>
                    <ChevronDown size={14} className={`transition-all duration-400 ${isProductMenuOpen ? 'rotate-180 text-orange-400' : 'group-hover:text-orange-400'}`} />
                  </span>
                </button>

                {/* Enhanced Mega Menu */}
                {isProductMenuOpen && (
                  <div className={`absolute left-0 top-full mt-3 w-[900px] transform transition-all duration-400 ${menuAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                    }`}>
                    <div className="bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-2xl border border-orange-500/40 rounded-2xl shadow-2xl shadow-orange-600/30 overflow-hidden">
                      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500"></div> */}

                      <div className="grid grid-cols-4 gap-0 p-3">
                        {/* Categories Column */}
                        <div className="col-span-1 border-r border-orange-500 pr-3">
                          <div className="flex items-center  mb-1 px-16">
                            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">Categories</span>
                          </div>
                          <div className="space-y-2">
                            {productData.categories.map((category) => {
                              const IconComp = category.iconComponent;
                              return (
                                <button
                                  key={category.id}
                                  onMouseEnter={() => setActiveCategory(category.id)}
                                  onClick={() => setActiveCategory(category.id)}
                                  className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${activeCategory === category.id
                                      ? 'bg-gradient-to-r from-orange-900 to-orange-600 text-white'
                                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                  <div className="flex items-center gap-3 relative z-10">
                                    <div className="font-light text-sm">{category.name}</div>
                                  </div>
                                  <ChevronRight size={12} className={`transition-all duration-300 ${activeCategory === category.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0'
                                    }`} />
                                </button>
                              );
                            })}
                          </div>
                        </div>



                        {/* Products Column */}
                        <div className="col-span-3 pl-3">
                          {(() => {
                            const selectedCat = productData.categories.find(c => c.id === activeCategory);
                            return (
                              <div className="animate-fadeOut">
                                <div className="flex items-center justify-between mb-5 pb-2 border-b border-orange-500">
                                  <div className="flex items-center gap-3">
                                    <div>
                                      <h3 className="text-white font-light text-lg">{selectedCat.name}</h3>
                                      <p className="text-gray-400 text-xs">{selectedCat.description}</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="grid grid-cols-3 gap-3 overflow-y-auto custom-scrollbar">
                                  {selectedCat.products.map((product, idx) => (
                                    <a
                                      key={product.id}
                                      href={`/product/${product.id}`}
                                      className="group/product relative p-3 bg-black/50 rounded-xl hover:bg-gradient-to-r hover:from-orange-600 hover:to-amber-600 border border-transparent hover:border-orange-500 transition-all duration-500"
                                      style={{ animationDelay: `${idx * 50}ms` }}
                                    >
                                      <div className="flex items-center justify-between">
                                        <div>
                                          <div className="text-white font-semibold text-sm group-hover/product:text-white transition-colors">
                                            {product.name}
                                          </div>
                                          <div className="text-xs text-white mt-0.5">{product.sku}</div>
                                        </div>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            );
                          })()}


                        </div>
                      </div>
                      <div className="border-t border-orange-600 p-3 bg-black">
                        <a href="/products" className="flex items-center justify-between text-orange-200 hover:text-white text-sm font-medium group">
                          <span>Browse All Products →</span>
                          {/* <span className="group-hover:translate-x-1 transition-transform">✨</span> */}
                        </a>
                      </div>
                    </div>

                  </div>

                )}
              </div>
            </div>


            {/* Center - Enhanced Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="/" className="relative group">
                <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-clip-text text-transparent animate-gradient-x">
                  ARISS
                </span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-[3px] bg-gradient-to-r from-transparent via-orange-500 to-transparent transition-all duration-500"></div>
              </a>
            </div>

            {/* Right Side - Enhanced Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative px-4 py-2 rounded-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-2 text-white/70 group-hover:text-white font-medium text-base">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-11 h-11 flex items-center justify-center text-white rounded-xl border border-orange-500/30 hover:border-orange-500/60 hover:bg-white/10 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600/20 to-amber-600/20 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
                {isOpen ? <X size={22} className="relative z-10" /> : <Menu size={22} className="relative z-10" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu - Fixed scrolling */}
          <div
            ref={mobileMenuRef}
            className={`
              md:hidden fixed inset-x-0 top-[57px] bottom-0 transition-all duration-500 ease-out
              ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
            `}
          >
            <div className="h-full bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-2xl border-t border-orange-500/30 p-5 overflow-y-auto custom-scrollbar">
              {/* Products Section with nested accordion */}
              <div className="mb-3">
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="flex items-center justify-between w-full px-4 py-3.5 text-white rounded-xl hover:bg-white/10 transition-all duration-300 group border border-orange-500/20 hover:border-orange-500/40"
                >
                  <div className="flex items-center gap-3">

                    <div className="text-left">
                      <span className="font-bold text-lg bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent block">Products</span>
                      <span className="text-xs text-gray-500">Smart home collection</span>
                    </div>
                  </div>
                  <ChevronDown size={20} className={`text-orange-400 transform transition-all duration-400 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileProductsOpen ? 'max-h-[2000px] mt-3' : 'max-h-0'}`}>
                  <div className="space-y-3 pl-2">
                    {productData.categories.map((category) => {
                      const IconComp = category.iconComponent;
                      return (
                        <div key={category.id} className="rounded-xl overflow-hidden">
                          <button
                            onClick={() => handleMobileCategoryClick(category.id)}
                            className="flex items-center justify-between w-full px-4 py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                          >
                            <div className="flex items-center gap-3">

                              <div>
                                <div className="text-white font-semibold">{category.name}</div>

                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {/* <span className="text-orange-400 text-xs bg-orange-500/20 px-2 py-0.5 rounded-full">{category.products.length}</span> */}
                              <ChevronRight size={16} className={`text-orange-400 transition-transform duration-300 ${mobileActiveCategory === category.id ? 'rotate-90' : ''}`} />
                            </div>
                          </button>

                          <div className={`overflow-hidden transition-all duration-300 ${mobileActiveCategory === category.id ? 'max-h-[500px] mt-2' : 'max-h-0'}`}>
                            <div className="ml-12 pl-3 border-l-2 border-orange-500/30 space-y-2 py-2">
                              {category.products.map((product) => (
                                <a
                                  key={product.id}
                                  href={`/product/${product.id}`}
                                  className="flex items-center justify-between p-3 bg-black/40 rounded-xl hover:bg-orange-500/10 transition-all group"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <div>
                                    <div className="text-sm text-white/90 group-hover:text-orange-300 font-medium">{product.name}</div>
                                    <div className="text-xs text-gray-500">{product.sku}</div>
                                    {/* <div className="text-orange-400 text-xs font-semibold mt-1">{product.price}</div> */}
                                  </div>
                                  {/* <Zap size={14} className="text-orange-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" /> */}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <a href="/products" className="flex items-center justify-between px-4 py-3 mt-2 text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors bg-orange-500/10 rounded-xl">
                      <span>Browse all products</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent my-4"></div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3.5 text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="p-2 rounded-lg bg-white/5">
                    <link.icon size={18} />
                  </div>
                  <div>
                    <div className="font-medium">{link.name}</div>
                    <div className="text-xs text-gray-500">{link.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>


    </>
  );
};

export default Navbar;