import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import GlassButton from '../components/ui/GlassButton';
import { Leaf, Heart, Users, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  const [gitaVerse, setGitaVerse] = useState({
    sanskrit: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥",
    english: "When a person dwells longingly on sense objects, an inclination towards them is generated. This inclination develops into desire, and desire gives rise to anger."
  });

  // Optional: fetch real verse from API
  // useEffect(() => {
  //   axios.get('https://bhagavadgitaapi.in/slok/2/62')
  //     .then(res => setGitaVerse({ sanskrit: res.data.slok, english: res.data.tej.ht }))
  //     .catch(err => console.log('Gita API error', err));
  // }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="w-full font-inter pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Banner */}
      <motion.div variants={itemVariants} className="w-full relative py-16 md:py-24 flex flex-col items-center justify-center text-center">
        {/* Amber hero orb specific to this page */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-2xl h-80 bg-saffron/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <motion.div 
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-6 w-24 h-24 rounded-full bg-saffron/10 border border-saffron/30 flex items-center justify-center shadow-[0_0_30px_rgba(255,140,0,0.3)]"
        >
          <img src="/cow-silhouette.svg" alt="Sacred Cow" className="w-12 h-12" onError={(e) => e.target.style.display='none'} />
          {/* Fallback if no svg */}
          <span className="text-4xl">🐄</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-saffron drop-shadow-[0_0_15px_rgba(255,140,0,0.6)] mb-4">
          GO VIGYAN
        </h1>
        <h2 className="text-xl md:text-2xl font-devanagari text-white/90 mb-2 font-medium">
          गौ विज्ञान — जहाँ प्राचीन ज्ञान आधुनिक विज्ञान से मिलता है
        </h2>
        <p className="text-base md:text-lg text-white/60 italic font-inter mb-8">
          Where ancient wisdom meets modern science
        </p>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-48 h-[1px] bg-gradient-to-r from-transparent via-saffron to-transparent mb-8 origin-center"
        />

        <div className="max-w-2xl text-white/70 leading-relaxed font-inter px-4 glass-light p-6 rounded-2xl group cursor-default">
           <h3 className="text-sm text-saffron uppercase tracking-widest mb-3 font-semibold">Today's Wisdom</h3>
           <p className="font-devanagari text-lg mb-3 text-white">{gitaVerse.sanskrit}</p>
           <p className="text-sm italic">"{gitaVerse.english}"</p>
        </div>
      </motion.div>

      {/* Mission Pillars */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <GlassCard className="flex flex-col items-center text-center">
          <Heart size={40} className="text-saffron mb-4 drop-shadow-[0_0_10px_rgba(255,140,0,0.4)]" />
          <h3 className="text-xl font-exo2 text-white mb-2">Gau Seva</h3>
          <p className="text-sm text-white/60">Every cow is treated as family. We provide loving care, natural feed, and open spaces following sacred traditions.</p>
        </GlassCard>
        
        <GlassCard className="flex flex-col items-center text-center border-sacred-green/20" style={{ borderTopColor: 'rgba(0,200,83,0.4)' }}>
          <Leaf size={40} className="text-sacred-green mb-4 drop-shadow-[0_0_10px_rgba(0,200,83,0.4)]" />
          <h3 className="text-xl font-exo2 text-white mb-2">100% Natural</h3>
          <p className="text-sm text-white/60">Our products are free from chemicals. From milk to compost, everything is derived naturally from our healthy cows.</p>
        </GlassCard>

        <GlassCard className="flex flex-col items-center text-center">
          <Users size={40} className="text-blue-400 mb-4 drop-shadow-[0_0_10px_rgba(96,165,250,0.4)]" />
          <h3 className="text-xl font-exo2 text-white mb-2">Community</h3>
          <p className="text-sm text-white/60">We support local farmers and provide affordable Ayurvedic solutions to the community, spreading the benefits of cow ecology.</p>
        </GlassCard>
      </motion.div>

      {/* Photo Gallery Placeholder */}
      <motion.div variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-exo2 text-white mb-8 text-center text-shadow-glow">Farm Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-square glass-light rounded-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm font-inter group-hover:text-white/60 transition-colors">
                Photo {i} Next Update
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact Strip */}
      <motion.div variants={itemVariants} className="w-full glass-medium rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-around items-center gap-8">
        <div className="flex flex-col items-center text-center gap-2">
           <MapPin className="text-saffron" size={28} />
           <h4 className="text-white font-medium">Headquarters</h4>
           <p className="text-white/60 text-sm">Sacred Fields, Rural District<br/>Gujarat, India 380001</p>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
           <Phone className="text-saffron" size={28} />
           <h4 className="text-white font-medium">Call Us</h4>
           <p className="text-white/60 text-sm">+91 00000 00000<br/>Mon-Sat, 9am to 6pm</p>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
           <Mail className="text-saffron" size={28} />
           <h4 className="text-white font-medium">Email Address</h4>
           <p className="text-white/60 text-sm">namaste@govigyan.dummy<br/>Donation inquiries</p>
        </div>
      </motion.div>
      
    </motion.div>
  );
};

export default About;
