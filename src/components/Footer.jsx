import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ARISS</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop smart home automation solution. Transform your home into an intelligent sanctuary.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-primary transition">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-primary transition">Products</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-primary transition">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="/products?category=switches" className="text-gray-300 hover:text-primary transition">Switches</a></li>
              <li><a href="/products?category=lighting" className="text-gray-300 hover:text-primary transition">Lighting</a></li>
              <li><a href="/products?category=gateways" className="text-gray-300 hover:text-primary transition">Gateways</a></li>
              <li><a href="/products?category=security" className="text-gray-300 hover:text-primary transition">Security</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Smart Street, Tech City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span className="text-gray-300">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span className="text-gray-300">info@ariss.io</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ARISS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;