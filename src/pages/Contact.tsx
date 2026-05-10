import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Instagram, MessageCircle, MapPin, Clock } from 'lucide-react';
import { STORE_DETAILS } from '../lib/utils';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-8xl font-black mb-6">Get In Touch</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
          "The pitch is waiting. We're here to help you get ready."
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-brand-gold">Contact Details</h2>
            
            <div className="space-y-6">
              <a href={STORE_DETAILS.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 group p-4 border border-white/5 rounded-2xl hover:border-brand-green/30 transition-all">
                <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="text-gray-500 font-display uppercase text-xs tracking-widest">WhatsApp Support</div>
                  <div className="text-xl font-bold">{STORE_DETAILS.phone}</div>
                </div>
              </a>

              <a href={`mailto:${STORE_DETAILS.email}`} className="flex items-center gap-4 group p-4 border border-white/5 rounded-2xl hover:border-brand-gold/30 transition-all">
                <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-gray-500 font-display uppercase text-xs tracking-widest">Email Address</div>
                  <div className="text-xl font-bold">{STORE_DETAILS.email}</div>
                </div>
              </a>

              <a href={STORE_DETAILS.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 group p-4 border border-white/5 rounded-2xl hover:border-brand-gold/30 transition-all">
                <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram size={24} />
                </div>
                <div>
                  <div className="text-gray-500 font-display uppercase text-xs tracking-widest">Instagram</div>
                  <div className="text-xl font-bold">{STORE_DETAILS.instagramHandle}</div>
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-4">
             <h3 className="font-display uppercase text-brand-gold tracking-widest">Service Information</h3>
             <div className="flex items-start gap-3 text-gray-400">
               <MapPin className="text-brand-gold shrink-0 mt-1" size={18} />
               <span>Delivering to Karachi, Lahore, Islamabad, Peshawar, Quetta, and all cities across Pakistan 🇵🇰</span>
             </div>
             <div className="flex items-start gap-3 text-gray-400">
               <Clock className="text-brand-gold shrink-0 mt-1" size={18} />
               <span>Support Hours: 9 AM – 10 PM (PKT), 7 Days a week</span>
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-9xl text-white/5 font-black uppercase pointer-events-none select-none">
            GOAL
          </div>
          <h2 className="text-3xl font-black mb-8">Send a Message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-display uppercase text-xs tracking-widest text-gray-500">Your Name</label>
                <input type="text" className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold" />
              </div>
              <div className="space-y-2">
                <label className="font-display uppercase text-xs tracking-widest text-gray-500">Phone / WhatsApp</label>
                <input type="text" className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-display uppercase text-xs tracking-widest text-gray-500">Email Address</label>
              <input type="email" className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold" />
            </div>
            <div className="space-y-2">
              <label className="font-display uppercase text-xs tracking-widest text-gray-500">Message</label>
              <textarea rows={4} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold" />
            </div>
            <button className="w-full bg-brand-gold text-brand-black py-4 rounded-lg font-display font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
              Submit Message
            </button>
          </form>
          
          <a
            href={STORE_DETAILS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex items-center justify-center gap-3 bg-brand-green text-brand-black py-4 rounded-lg font-display font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl glow-green"
          >
            <MessageCircle size={24} />
            Direct Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
