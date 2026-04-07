import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-12 px-6 lg:px-12 mt-12 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-playfair text-2xl font-bold mb-4">Go Vigyan</h2>
          <p className="text-cream/80 text-sm">
            Rooted in Science. Inspired by Nature. Dedicated to the Cow.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4 text-amber">Quick Links</h3>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link to="/" className="hover:text-amber transition-colors">Home</Link></li>
            <li><Link to="/shop" className="hover:text-amber transition-colors">Shop</Link></li>
            <li><Link to="/about" className="hover:text-amber transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-amber transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4 text-amber">Categories</h3>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link to="/shop?category=medicine" className="hover:text-amber transition-colors">Cow Medicine</Link></li>
            <li><Link to="/shop?category=food" className="hover:text-amber transition-colors">Cow Food</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4 text-amber">Contact</h3>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>contact@govigyan.com</li>
            <li>+91 98765 43210</li>
            <li>Vigyan Bhawan, New Delhi</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-cream/20 text-center text-sm text-cream/60">
        &copy; {new Date().getFullYear()} Go Vigyan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
