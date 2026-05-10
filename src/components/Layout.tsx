import React, { useState, useEffect } from 'react';
import { ShoppingCart, MessageCircle, Instagram, Mail, Phone, Menu, X, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn, STORE_DETAILS } from '../lib/utils';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-display font-bold text-brand-gold italic group-hover:scale-105 transition-transform">
            PITCH READY <span className="text-white">⚽</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-display uppercase tracking-wider text-sm transition-colors hover:text-brand-gold",
                location.pathname === link.path ? "text-brand-gold border-b-2 border-brand-gold" : "text-gray-400"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/shop" className="text-gray-400 hover:text-brand-gold transition-colors">
            <ShoppingCart size={20} />
          </Link>
          <a
            href={STORE_DETAILS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 bg-brand-green text-brand-black px-4 py-1.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-sm glow-green"
          >
            <MessageCircle size={16} />
            ORDER ON WHATSAPP
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-brand-gold"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-black border-b border-brand-gold/20 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display uppercase text-lg text-gray-400 hover:text-brand-gold"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={STORE_DETAILS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-green text-brand-black w-full py-3 rounded-lg font-bold"
              >
                <MessageCircle size={20} />
                ORDER ON WHATSAPP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-brand-gold/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-display font-bold text-brand-gold italic mb-4 block">
            PITCH READY <span className="text-white">⚽</span>
          </Link>
          <p className="text-gray-400 mb-6 max-w-md">
            Lace Up. Dominate the Pitch. Pakistan's #1 destination for premium football boots and gear. Delivered nationwide.
          </p>
          <div className="flex gap-4">
            <a href={STORE_DETAILS.instagram} target="_blank" rel="noreferrer" className="text-brand-gold hover:text-white transition-colors">
              <Instagram />
            </a>
            <a href={STORE_DETAILS.whatsapp} target="_blank" rel="noreferrer" className="text-brand-gold hover:text-white transition-colors">
              <MessageCircle />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-6 text-brand-gold">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-400 hover:text-brand-gold">Home</Link></li>
            <li><Link to="/shop" className="text-gray-400 hover:text-brand-gold">Shop</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-brand-gold">About Us</Link></li>
            <li><Link to="/faq" className="text-gray-400 hover:text-brand-gold">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-6 text-brand-gold">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-400">
              <Mail size={16} className="text-brand-gold" />
              <a href={`mailto:${STORE_DETAILS.email}`} className="hover:text-brand-gold">{STORE_DETAILS.email}</a>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Phone size={16} className="text-brand-gold" />
              <span>{STORE_DETAILS.phone}</span>
            </li>
            <li className="flex items-start gap-3 text-gray-400">
              <ChevronRight size={16} className="text-brand-gold mt-1 flex-shrink-0" />
              <span>Delivering all across Pakistan 🇵🇰</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-brand-gold/10 text-center text-sm text-gray-500">
        © 2025 Pitch Ready. Store — All Rights Reserved. Built for the Pakistani Football Community.
      </div>
    </footer>
  );
};

export const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group flex flex-col items-end gap-2">
      <div className="bg-brand-black border border-brand-gold/50 text-brand-gold px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Order on WhatsApp
      </div>
      <a
        href={STORE_DETAILS.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="w-16 h-16 bg-brand-green text-brand-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all glow-green animate-pulse"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export const TrustBadges = () => {
  const badges = [
    { icon: <CheckCircle className="text-brand-gold" />, title: "Genuine Products" },
    { icon: <ArrowRight className="text-brand-gold" />, title: "Fast PK Delivery" },
    { icon: <MessageCircle className="text-brand-gold" />, title: "WhatsApp Support" },
    { icon: <CheckCircle className="text-brand-gold" />, title: "Easy Returns" },
  ];

  return (
    <div className="bg-brand-gold/5 py-8 border-y border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center text-center gap-2">
            {badge.icon}
            <span className="font-display text-sm uppercase tracking-wider">{badge.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
