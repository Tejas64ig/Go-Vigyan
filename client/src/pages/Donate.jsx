import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import GlassButton from '../components/ui/GlassButton';
import { motion } from 'framer-motion';
import { HeartHandshake, Phone } from 'lucide-react';

const Donate = () => {
  const products = [
    { name: 'Pure Gir A2 Ghee', price: '₹1400', unit: 'per Litre', icon: '🍯', bgColor: 'bg-saffron/20' },
    { name: 'Organic Cow Dung Logs', price: '₹200', unit: 'per Box', icon: '🪵', bgColor: 'bg-amber-800/40' },
    { name: 'Jivamrit Fertilizer', price: '₹150', unit: 'per Litre', icon: '🌱', bgColor: 'bg-sacred-green/20' },
    { name: 'Gomutra Arka', price: '₹250', unit: 'per 500ml', icon: '💧', bgColor: 'bg-blue-400/20' },
  ];

  return (
    <div className="w-full font-inter pb-12">
      <div className="text-center mb-12 mt-4">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">Support The Mission</h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          Your support helps us maintain the sanctuary and produce 100% natural, chemical-free products. Place orders via WhatsApp or donate directly below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Products */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <GlassCard key={i} tier={2} className="flex flex-col border-white/10 group relative overflow-hidden">
              <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${p.bgColor} blur-2xl group-hover:blur-xl transition-all`}></div>
              
              <div className="text-5xl mb-4">{p.icon}</div>
              <h3 className="text-2xl font-exo2 text-white mb-1">{p.name}</h3>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-2xl font-bold text-saffron">{p.price}</span>
                <span className="text-sm text-white/50 mb-1">{p.unit}</span>
              </div>
              
              <div className="mt-auto">
                <GlassButton variant="secondary" className="w-full">
                  <HeartHandshake className="w-4 h-4 mr-2" /> Buy & Support
                </GlassButton>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Right Side: Donation Panel */}
        <div className="lg:col-span-4">
          <GlassCard tier={1} className="h-full flex flex-col items-center justify-center text-center p-8 border-saffron/30">
            <h3 className="text-2xl font-exo2 text-white mb-2">Direct Donation</h3>
            <p className="text-sm text-white/60 mb-8">Scan to donate via UPI</p>
            
            {/* Dummy QR placeholder */}
            <div className="w-48 h-48 bg-white p-2 rounded-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=dummy@upi&pn=GoVigyan" 
                alt="Donation QR Code" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <div className="text-lg font-inter text-saffron font-bold mb-1">dummy@upi</div>
            <div className="text-sm text-white/50">Go Vigyan Trust</div>
          </GlassCard>
        </div>

      </div>
    </div>
  );
};

export default Donate;
