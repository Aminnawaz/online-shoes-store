import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MessageCircle } from 'lucide-react';
import { PRODUCTS, STORE_DETAILS, Category } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function Shop() {
  const [filter, setFilter] = useState<Category | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = filter === 'ALL' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories: { id: Category | 'ALL'; label: string }[] = [
    { id: 'ALL', label: 'All Gear' },
    { id: 'STUDS', label: 'Football Studs' },
    { id: 'GRIPPERS', label: 'Gripper Socks' },
    { id: 'SOCKS', label: 'Football Socks' },
    { id: 'SHINS', label: 'Shin Guards' },
    { id: 'BALLS', label: 'Footballs' },
    { id: 'BIBS', label: 'Training Bibs' },
    { id: 'APPAREL', label: 'Apparel & Shorts' },
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase italic">The Armory</h1>
        <p className="text-gray-400 font-display tracking-widest uppercase text-sm">Professional Gear / {filter === 'ALL' ? 'All Products' : filter}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Filters */}
        <aside className="lg:col-span-1 space-y-10">
          <div>
            <h3 className="font-display text-xl mb-6 text-brand-gold uppercase italic">Search Gear</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Find your gear..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl mb-6 text-brand-gold uppercase italic">Categories</h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`text-left font-display tracking-widest text-xs uppercase px-4 py-3 rounded transition-all flex items-center justify-between border ${
                    filter === cat.id 
                      ? 'bg-brand-gold border-brand-gold text-brand-black font-black' 
                      : 'text-gray-400 border-white/5 hover:bg-white/5 hover:border-white/10'
                  }`}
                >
                  {cat.label}
                  {filter === cat.id && <span className="w-1.5 h-1.5 bg-brand-black rounded-full" />}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-brand-gold/5 border border-brand-gold/10 rounded-2xl">
            <h4 className="font-display text-sm mb-4 text-brand-gold">Can't find something?</h4>
            <p className="text-xs text-gray-500 mb-4 italic">Message us for custom team orders or specific models.</p>
            <a
              href={STORE_DETAILS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-green/20 text-brand-green py-2 rounded text-[10px] font-black uppercase tracking-widest hover:bg-brand-green hover:text-brand-black transition-all"
            >
              <MessageCircle size={14} />
              Ask on WhatsApp
            </a>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group bg-brand-black border border-white/5 rounded-2xl overflow-hidden hover:border-brand-gold/30 transition-all glow-gold/0 hover:glow-gold/5"
              >
                <Link to={`/shop/${product.id}`} className="block aspect-square overflow-hidden bg-gray-900 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-brand-gold text-brand-black px-2 py-1 text-[9px] font-black uppercase rounded">
                      {product.category}
                    </span>
                    {product.subCategory && (
                      <span className="bg-white/10 backdrop-blur-sm text-white px-2 py-1 text-[9px] font-black uppercase rounded">
                        {product.subCategory}
                      </span>
                    )}
                  </div>
                </Link>
                <div className="p-6">
                  <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{product.brand}</div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-brand-gold transition-colors line-clamp-1">{product.name}</h3>
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-2xl font-display font-black text-brand-gold">Rs. {product.price.toLocaleString()}</div>
                    <div className="text-[10px] text-gray-500 font-bold">In Stock</div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={`/shop/${product.id}`}
                      className="flex-1 bg-white/5 hover:bg-white/10 text-white rounded-lg py-3 text-center text-[10px] font-black uppercase tracking-widest transition-all"
                    >
                      Gear Specs
                    </Link>
                    <a
                      href={`${STORE_DETAILS.whatsapp}?text=Hi Pitch Ready! I'm interested in ${product.name}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 bg-brand-green/10 hover:bg-brand-green text-brand-green hover:text-brand-black rounded-lg py-3 flex items-center justify-center transition-all"
                    >
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="py-32 text-center">
              <div className="text-6xl mb-4">⚽</div>
              <p className="text-gray-500 text-xl font-display uppercase italic">No equipment found matching your request.</p>
              <button 
                onClick={() => {setFilter('ALL'); setSearchQuery('');}}
                className="mt-6 text-brand-gold underline font-display uppercase tracking-widest text-sm"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
