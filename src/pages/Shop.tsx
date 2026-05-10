import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, Search, MessageCircle } from 'lucide-react';
import { PRODUCTS, STORE_DETAILS } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function Shop() {
  const [filter, setFilter] = useState<'ALL' | 'FG' | 'AG' | 'TF' | 'IC'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = filter === 'ALL' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-5xl md:text-7xl font-black mb-4">Football Gear</h1>
        <p className="text-gray-400">Home / Shop</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Filters */}
        <aside className="lg:col-span-1 space-y-10">
          <div>
            <h3 className="font-display text-xl mb-6 text-brand-gold">Search</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Product Name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl mb-6 text-brand-gold">Sole Type</h3>
            <div className="flex flex-col gap-3">
              {(['ALL', 'FG', 'AG', 'TF', 'IC'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-left font-display tracking-widest text-sm uppercase px-4 py-2 rounded transition-all ${
                    filter === cat ? 'bg-brand-gold text-brand-black font-bold' : 'text-gray-400 hover:bg-white/5'
                  }`}
                >
                  {cat === 'ALL' ? 'All Types' : 
                   cat === 'FG' ? 'Firm Ground (FG)' :
                   cat === 'AG' ? 'Artificial Grass (AG)' :
                   cat === 'TF' ? 'Turf Shoes (TF)' : 'Indoor Court (IC)'}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group relative bg-brand-black border border-brand-gold/10 rounded-xl overflow-hidden"
              >
                <Link to={`/shop/${product.id}`} className="block aspect-square overflow-hidden bg-gray-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-gold text-brand-black px-2 py-1 text-[10px] font-black uppercase rounded">
                      {product.category}
                    </span>
                  </div>
                </Link>
                <div className="p-5">
                  <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{product.brand}</div>
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <div className="text-xl font-display font-bold text-brand-gold mb-4">Rs. {product.price.toLocaleString()}</div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to={`/shop/${product.id}`}
                      className="bg-white/5 hover:bg-white/10 text-white rounded py-2 text-center text-xs font-bold transition-all"
                    >
                      Details
                    </Link>
                    <a
                      href={`${STORE_DETAILS.whatsapp}?text=Hi Pitch Ready! I want to order the ${product.name}.`}
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
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-2 py-24 text-center">
                <p className="text-gray-500 text-xl font-display">No gear found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
