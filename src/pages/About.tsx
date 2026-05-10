import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Shield, Truck, Zap } from 'lucide-react';
import { STORE_DETAILS } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
      <div className="relative mb-24 rounded-3xl overflow-hidden aspect-[21/9]">
        <img
          src="https://images.unsplash.com/photo-1431324155629-1a6eda1fed2d?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover grayscale opacity-50"
          alt="Football pitch"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-5xl md:text-8xl font-black mb-4">Lace Up. <span className="text-brand-gold">Dominate.</span></h1>
          <p className="text-xl font-display text-gray-300">The Story of Pitch Ready Store</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-black">Born from a Love <br />of <span className="text-brand-gold">Football.</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Pitch Ready was born from the dusty streets of Karachi and the floodlit turfs of Lahore. We saw a gap in the Pakistani market: high-quality football boots were too hard to find, too expensive, or stuck behind slow international shipping.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            We believe every player — from street legends to club professionals — deserves world-class gear that feels like a second skin. We curate the best football footwear and deliver it fast, nationwide.
          </p>
          <div className="pt-8">
            <Link to="/shop" className="bg-brand-gold text-brand-black px-8 py-4 rounded font-display font-bold uppercase tracking-widest hover:scale-105 transition-all inline-block">
              Explore Our Gear
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-white/5">
            <Zap className="text-brand-gold mb-4" size={40} />
            <div className="font-display font-bold text-sm tracking-widest uppercase mb-1">Fast</div>
            <div className="text-xs text-gray-500 uppercase italic">Across Pakistan</div>
          </div>
          <div className="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-white/5">
            <Shield className="text-brand-gold mb-4" size={40} />
            <div className="font-display font-bold text-sm tracking-widest uppercase mb-1">Quality</div>
            <div className="text-xs text-gray-500 uppercase italic">Vetted Gear</div>
          </div>
          <div className="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-white/5">
            <Truck className="text-brand-gold mb-4" size={40} />
            <div className="font-display font-bold text-sm tracking-widest uppercase mb-1">PK Wide</div>
            <div className="text-xs text-gray-500 uppercase italic">Nationwide Delivery</div>
          </div>
          <div className="aspect-square bg-brand-gold/10 rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-brand-gold/20">
            <CheckCircle className="text-brand-gold mb-4" size={40} />
            <div className="font-display font-bold text-sm tracking-widest uppercase mb-1">500+</div>
            <div className="text-xs text-gray-500 uppercase italic">Happy Players</div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 rounded-3xl p-12 md:p-24 border border-white/10 text-center relative overflow-hidden">
        <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Our Mission</h2>
        <p className="text-2xl md:text-4xl font-display text-gray-400 max-w-4xl mx-auto leading-tight italic relative z-10">
          "To redefine football culture in Pakistan by providing professional-grade boots that inspire confidence on every pitch."
        </p>
        <div className="absolute bottom-0 right-0 p-8 text-[20vw] font-black text-white/[0.02] -mb-20 -mr-10 select-none">
          PITCH
        </div>
      </div>
    </div>
  );
}
