import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full h-[80vh] bg-forest/10 flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-forest mb-6">
            Nurturing Cows, Naturallly.
          </h2>
          <p className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-8 font-inter">
            Premium, science-backed Ayurvedic products for the health and wellbeing of your Desi cows.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/shop" className="bg-forest text-cream px-8 py-3 rounded-full font-medium hover:bg-forest/90 transition-all font-inter">
              Shop Now
            </Link>
            <Link to="/about" className="border-2 border-forest text-forest px-8 py-3 rounded-full font-medium hover:bg-forest/10 transition-all font-inter">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Placeholder for other sections */}
    </div>
  );
};

export default Home;
