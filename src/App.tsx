/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer, WhatsAppFloat, MobileStickyBanner } from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SEO = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const titleMap: Record<string, string> = {
      '/': 'Pitch Ready Store | Pakistan\'s #1 Football Boots & Gear',
      '/shop': 'Shop Football Gear | Pitch Ready Store Pakistan',
      '/about': 'Our Story | Pitch Ready Store',
      '/contact': 'Contact Us | Pitch Ready Store',
      '/faq': 'Frequently Asked Questions | Pitch Ready Store',
    };
    
    document.title = titleMap[pathname] || 'Pitch Ready Store';
  }, [pathname]);
  
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEO />
      <div className="min-h-screen flex flex-col bg-brand-black selection:bg-brand-gold selection:text-brand-black">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
        <MobileStickyBanner />
      </div>
    </Router>
  );
}

