import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, ShoppingBag, Truck, ShieldCheck, ChevronLeft, Star, User, Send } from 'lucide-react';
import { PRODUCTS, STORE_DETAILS } from '../lib/utils';

interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

const MOCK_REVIEWS: Review[] = [
  { id: '1', user: 'Zubair K.', rating: 5, comment: "Best boots I've owned for the price. The grip on Karachi's artificial turf is exceptional.", date: '2 days ago' },
  { id: '2', user: 'Hamza A.', rating: 4, comment: "Ordered from Lahore, arrived in 2 days. Fit is slightly tight, so maybe go one size up.", date: '1 week ago' },
];

const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);
  const [newReview, setNewReview] = useState({ user: '', rating: 5, comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.user || !newReview.comment) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      const review: Review = {
        id: Date.now().toString(),
        user: newReview.user,
        rating: newReview.rating,
        comment: newReview.comment,
        date: 'Just now'
      };
      setReviews([review, ...reviews]);
      setNewReview({ user: '', rating: 5, comment: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="mt-24 space-y-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-white/10 pb-8">
        <div>
          <h2 className="text-3xl font-black mb-2 uppercase">Field Reports</h2>
          <p className="text-gray-400 font-display text-sm tracking-widest uppercase">Hear from the Pakistani Football Community</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-4xl font-black text-brand-gold">{averageRating}</div>
            <div className="flex gap-1 justify-end">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={i < Math.round(Number(averageRating)) ? "fill-brand-gold text-brand-gold" : "text-gray-600"} />
              ))}
            </div>
          </div>
          <div className="h-12 w-[1px] bg-white/10" />
          <div className="text-gray-400 font-display uppercase text-xs tracking-widest leading-tight">
            Based on<br />{reviews.length} Reviews
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Review List */}
        <div className="lg:col-span-2 space-y-8">
          {reviews.map((review) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={review.id}
              className="bg-white/5 border border-white/5 p-6 rounded-2xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold">
                    <User size={20} />
                  </div>
                  <div>
                    <div className="font-bold">{review.user}</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className={i < review.rating ? "fill-brand-gold text-brand-gold" : "text-gray-600"} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 font-display uppercase">{review.date}</div>
              </div>
              <p className="text-gray-300 italic leading-relaxed text-sm">"{review.comment}"</p>
            </motion.div>
          ))}
        </div>

        {/* Review Form */}
        <div className="bg-brand-gold/5 border border-brand-gold/10 p-8 rounded-2xl h-fit">
          <h3 className="font-display font-bold uppercase tracking-widest text-brand-gold mb-6">Leave a Review</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[10px] font-display uppercase tracking-widest text-gray-500">Your Name</label>
              <input
                type="text"
                required
                value={newReview.user}
                onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
                className="w-full bg-brand-black border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                placeholder="e.g. Asad R."
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-display uppercase tracking-widest text-gray-500">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className="hover:scale-110 transition-transform"
                  >
                    <Star size={20} className={star <= newReview.rating ? "fill-brand-gold text-brand-gold" : "text-gray-600"} />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-display uppercase tracking-widest text-gray-500">On-Pitch Experience</label>
              <textarea
                required
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                rows={3}
                className="w-full bg-brand-black border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                placeholder="How do they feel on the turf?"
              />
            </div>
            <button
              disabled={isSubmitting}
              className="w-full bg-brand-gold text-brand-black py-3 rounded font-display font-bold uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Send size={14} />
              {isSubmitting ? 'Posting...' : 'Post Report'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  if (!product) return (
    <div className="pt-40 text-center text-2xl font-display">Product not found.</div>
  );

  const whatsappMsg = `https://wa.me/923215486916?text=Hi%20Pitch%20Ready!%20I%20want%20to%20order%20${encodeURIComponent(product.name)}%2C%20Size%20${selectedSize || '[Select Size]'}.%20Please%20confirm%20availability%20and%20price.%20Thank%20you!`;

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
      <Link to="/shop" className="flex items-center gap-2 text-brand-gold font-display uppercase text-sm mb-8 hover:-translate-x-2 transition-transform">
        <ChevronLeft size={16} /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-900 rounded-2xl overflow-hidden border border-white/10 group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-900 rounded-lg overflow-hidden border border-white/10 opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
                <img src={product.image} className="w-full h-full object-cover" alt="thumbnail" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div>
            <div className="text-brand-gold font-display uppercase tracking-widest text-sm mb-2">{product.brand}</div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">{product.name}</h1>
            <div className="text-3xl font-display font-bold text-brand-gold">Rs. {product.price.toLocaleString()}</div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-display uppercase tracking-widest text-sm">Select Size (EU)</span>
              <button className="text-xs text-brand-gold underline uppercase">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center rounded border font-bold transition-all ${
                    selectedSize === size 
                      ? 'bg-brand-gold border-brand-gold text-brand-black' 
                      : 'border-white/10 hover:border-brand-gold text-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={whatsappMsg}
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-brand-green text-brand-black h-16 rounded-xl flex items-center justify-center gap-3 font-display font-bold text-lg uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl glow-green"
            >
              <MessageCircle size={24} />
              Order on WhatsApp
            </a>
            <button className="h-16 px-6 rounded-xl border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center text-brand-gold">
              <ShoppingBag size={24} />
            </button>
          </div>

          <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-4">
            <h3 className="font-display text-lg uppercase tracking-widest text-brand-gold border-b border-white/5 pb-2">Description</h3>
            <p className="text-gray-400 leading-relaxed">
              {product.description}
              <br /><br />
              Perfect for {product.category === 'FG' ? 'professional grass pitches' : product.category === 'TF' ? 'turf and artificial surfaces' : 'indoor and court play'}. Engineered for Pakistani conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="flex items-center gap-3 text-gray-400">
              <Truck size={20} className="text-brand-gold" />
              <span>Nationwide Fast Delivery 🇵🇰</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <ShieldCheck size={20} className="text-brand-gold" />
              <span>Genuine Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reviews */}
      <ReviewSection />
      
      {/* Related */}
      <div className="mt-32">
        <h2 className="text-3xl font-black mb-12">Related Boots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map(p => (
            <Link to={`/shop/${p.id}`} key={p.id} className="group overflow-hidden rounded-xl bg-gray-900/50 border border-white/5 p-4 hover:border-brand-gold/30 transition-all">
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="font-bold text-sm mb-1">{p.name}</h4>
                <p className="text-brand-gold font-display font-bold">Rs. {p.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

