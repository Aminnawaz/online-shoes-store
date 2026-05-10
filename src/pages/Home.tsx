import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, STORE_DETAILS } from '../lib/utils';
import { TrustBadges } from '../components/Layout';

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30 grayscale" />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent z-0" />
    
    <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <span className="text-brand-gold font-display text-sm md:text-base tracking-[0.3em] uppercase mb-4 block">
          Elite Performance Gear
        </span>
        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9]">
          Pakistan's #1 <br />
          <span className="text-brand-gold">Football Boots</span> <br />
          Store
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl">
          Quality cleats, fast nationwide delivery. Professional gear sourced for the Pakistani pitch. Lace up and dominate.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/shop"
            className="bg-brand-gold text-brand-black px-8 py-4 rounded font-display font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <ShoppingCart size={20} />
            Shop Now
          </Link>
          <a
            href={STORE_DETAILS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="border-2 border-brand-green text-brand-green px-8 py-4 rounded font-display font-bold uppercase tracking-widest hover:bg-brand-green hover:text-brand-black transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            WhatsApp Order
          </a>
        </div>
      </motion.div>
    </div>
    
    <div className="absolute bottom-10 right-10 hidden lg:block">
       <motion.div
         animate={{ y: [0, -20, 0] }}
         transition={{ repeat: Infinity, duration: 4 }}
       >
         <span className="text-brand-gold text-9xl opacity-20 transform rotate-12 inline-block">⚽</span>
       </motion.div>
    </div>
  </section>
);

const ProductCard = ({ product }: { product: typeof PRODUCTS[0] }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group relative bg-brand-black border border-brand-gold/10 rounded-xl overflow-hidden hover:border-brand-gold/40 transition-colors glow-gold/0 hover:glow-gold/10"
  >
    <Link to={`/shop/${product.id}`} className="block aspect-square overflow-hidden bg-gray-900">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 left-4 flex gap-1">
        <span className="bg-brand-gold text-brand-black px-2 py-1 text-[10px] font-black uppercase rounded">
          {product.category}
        </span>
      </div>
    </Link>
    
    <div className="p-5">
      <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{product.brand}</div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-brand-gold transition-colors line-clamp-1">{product.name}</h3>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xl font-display font-bold text-brand-gold">Rs. {product.price.toLocaleString()}</span>
        <span className="text-[10px] text-gray-500 font-bold uppercase italic">
          {product.sizes.length > 0 && typeof product.sizes[0] === 'number' 
            ? `Sizes: ${Math.min(...product.sizes as number[])}-${Math.max(...product.sizes as number[])}`
            : `Size: ${product.sizes[0] || 'N/A'}`}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <Link
          to={`/shop/${product.id}`}
          className="bg-white/5 hover:bg-white/10 text-white rounded py-2 text-center text-xs font-bold transition-all"
        >
          Details
        </Link>
        <a
          href={`${STORE_DETAILS.whatsapp}?text=Hi Pitch Ready! I'm interested in the ${product.name}.`}
          target="_blank"
          rel="noreferrer"
          className="bg-brand-green/20 hover:bg-brand-green text-brand-green hover:text-brand-black rounded py-2 text-center text-xs font-bold transition-all flex items-center justify-center gap-1"
        >
          <MessageCircle size={14} />
          Order
        </a>
      </div>
    </div>
  </motion.div>
);

const InstagramFeed = () => (
  <section className="py-24 bg-brand-black">
    <div className="max-w-7xl mx-auto px-4 text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-black mb-4">Follow Our Community</h2>
      <a
        href={STORE_DETAILS.instagram}
        target="_blank"
        rel="noreferrer"
        className="text-brand-gold font-display text-xl hover:underline"
      >
        {STORE_DETAILS.instagramHandle}
      </a>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="aspect-square bg-gray-900 overflow-hidden relative group">
          <img
            src={`https://images.unsplash.com/photo-15${50000000000 + i * 1234567}?auto=format&fit=crop&q=80&w=400`}
            alt="Instagram feed"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-brand-gold/20 transition-opacity">
            <Instagram className="text-white" size={32} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

import { Instagram, Shield, Truck, Zap, Globe, MapPin } from 'lucide-react';

const CategorySection = () => {
  const categories = [
    { title: 'Studs & Cleats', desc: 'Elite Performance', icon: '⚽' },
    { title: 'Gripper Socks', desc: 'Maximum Control', icon: '🧦' },
    { title: 'Shin Guards', desc: 'Pro Protection', icon: '🛡️' },
    { title: 'Match Balls', desc: 'FIFA Quality', icon: '⚽' },
    { title: 'Training Bibs', desc: 'Team Drills', icon: '🎽' },
    { title: 'Apparel', desc: 'Shorts & Kits', icon: '👕' },
  ];

  return (
    <section className="py-24 bg-brand-black border-y border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black">Professional Armory</h2>
          <p className="text-brand-gold font-display uppercase tracking-widest mt-2 font-black">Elite gear for Every Position</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to="/shop"
              className="group bg-white/5 border border-white/5 p-6 rounded-2xl text-center hover:border-brand-gold/40 transition-all hover:bg-brand-gold/5"
            >
              <div className="text-3xl mb-4 group-hover:scale-125 transition-transform">{cat.icon}</div>
              <h3 className="font-display text-sm mb-1 leading-tight">{cat.title}</h3>
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { icon: <Shield size={32} className="text-brand-gold" />, title: "Quality Guaranteed", desc: "Every boot is vetted for performance on Pakistani pitches." },
    { icon: <Truck size={32} className="text-brand-gold" />, title: "Fast PK Delivery", desc: "Nationwide shipping directly to your doorstep in 2-4 days." },
    { icon: <Globe size={32} className="text-brand-gold" />, title: "WhatsApp Support", desc: "Direct communication for sizing and real-time order tracking." },
  ];

  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center">
              {f.icon}
            </div>
            <h3 className="text-2xl font-black uppercase italic">{f.title}</h3>
            <p className="text-gray-400 text-sm max-w-xs">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustBadges />
      
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-brand-gold font-display text-sm tracking-widest uppercase mb-2 block">Weekly Drop</span>
            <h2 className="text-4xl md:text-6xl font-black">Top Picks This Week</h2>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-brand-gold font-display uppercase tracking-widest hover:gap-4 transition-all">
            See All Gear <ArrowRight size={20} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 6).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <CategorySection />
      
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-brand-gold text-5xl font-black mb-2">500+</div>
            <div className="text-gray-400 font-display uppercase tracking-widest text-sm">Happy Players</div>
          </div>
          <div>
            <div className="text-brand-gold text-5xl font-black mb-2">50+</div>
            <div className="text-gray-400 font-display uppercase tracking-widest text-sm">Boot Models</div>
          </div>
          <div>
            <div className="text-brand-gold text-5xl font-black mb-2">24h</div>
            <div className="text-gray-400 font-display uppercase tracking-widest text-sm">WhatsApp Support</div>
          </div>
          <div>
            <div className="text-brand-gold text-5xl font-black mb-2">PK</div>
            <div className="text-gray-400 font-display uppercase tracking-widest text-sm">Nationwide Delivery</div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      
      <InstagramFeed />
    </div>
  );
}
