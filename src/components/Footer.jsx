import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import logo from '../assets/Logos/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5 pb-6">
      <div className="container-custom">
        <div className="grid 
        grid-cols-1 md:grid-cols-4 lg:grid-cols-4 
        gap-8 
        mb-8">
          {/* Company Info */}
          <div>
            <a href="/" className="relative group">
              <img className="mb-10 
              h-6 
              w-auto" src={logo} alt="Logo" />
            </a>
            <p className="text-gray-300 
            mb-12">
              Your one-stop smart home automation solution. Transform your home into an intelligent sanctuary.
            </p>
            <div className="flex space-x-5">
              <a href="https://www.facebook.com/people/Ariss-Automation/100089711793869"  className="hover:text-blue-500 transition"><Facebook size={30} /></a>
              <a href="https://www.youtube.com/@Ariss_Automation"                         className="hover:text-red-600 transition"><Youtube size={30} /></a>
              <a href="https://www.instagram.com/ariss_smart_home"                        className="hover:text-pink-600 transition"><Instagram size={30} /></a>
              <a href="https://www.linkedin.com/in/ariss-automation-a4b29325a"            className="hover:text-blue-600 transition"><Linkedin size={30} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg 
            font-medium 
            mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/"           className="text-white/70 hover:text-orange-600 transition">Home</a></li>
              <li><a href="/products"   className="text-white/70 hover:text-orange-600 transition">Products</a></li>
              <li><a href="/about"      className="text-white/70 hover:text-orange-600 transition">About Us</a></li>
              <li><a href="/contact"    className="text-white/70 hover:text-orange-600  transition">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg 
            font-medium 
            mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="/products?category=switches" className="text-white/70 hover:text-orange-600 transition">Switches</a></li>
              <li><a href="/products?category=lighting" className="text-white/70 hover:text-orange-600 transition">Lighting</a></li>
              <li><a href="/products?category=gateways" className="text-white/70 hover:text-orange-600 transition">Gateways</a></li>
              <li><a href="/products?category=security" className="text-white/70 hover:text-orange-600 transition">Security</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg 
            font-medium 
            mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Smart Street, Tech City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span className="text-gray-400">+91 88889 90086</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span className="text-gray-400">info@ariss.io</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-gray-400">
          <p>&copy; 2022 ARISS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;