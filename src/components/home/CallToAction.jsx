import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const CallToAction = () => {
  return (
    <section className="py-20 bg-[#395B64] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of satisfied customers who have already made the switch to smart living with ARISS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/products" 
              className="bg-[#ff914d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Browse Products
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#395B64] transition"
            >
              Contact Us
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CallToAction;