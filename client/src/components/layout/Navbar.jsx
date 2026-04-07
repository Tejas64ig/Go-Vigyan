import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-cream py-4 px-6 lg:px-12 flex justify-between items-center top-0 z-50 sticky border-b border-charcoal/10 glass-heavy">
      <Link to="/" className="flex items-center gap-2">
        <h1 className="font-playfair font-bold text-2xl text-forest">Go Vigyan</h1>
      </Link>
      
      <div className="hidden md:flex gap-8 items-center font-medium font-inter">
        <Link to="/" className="text-charcoal hover:text-forest transition-colors">Home</Link>
        <Link to="/shop" className="text-charcoal hover:text-forest transition-colors">Shop</Link>
        <Link to="/about" className="text-charcoal hover:text-forest transition-colors">About</Link>
        <Link to="/contact" className="text-charcoal hover:text-forest transition-colors">Contact</Link>
      </div>
      
      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative p-2 text-charcoal hover:text-forest transition-colors">
          <ShoppingCart size={24} />
          <span className="absolute top-0 right-0 bg-amber text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
        </Link>
        <Link to="/dashboard" className="hidden md:block px-4 py-2 bg-forest text-cream rounded-full font-medium hover:bg-forest/90 transition-colors">
          Dashboard
        </Link>
        <button className="md:hidden text-charcoal">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
