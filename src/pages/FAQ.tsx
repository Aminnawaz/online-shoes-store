import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-brand-gold transition-colors"
      >
        <span className="font-display text-xl uppercase tracking-wider">{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-gold' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-400 leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "We offer a direct WhatsApp ordering experience. Simply find your favorite boots, select your size, and click 'Order via WhatsApp'. This will connect you directly with our team to confirm availability and payment details."
    },
    {
      question: "What sizes are available?",
      answer: "We generally carry EU sizes 38 to 47. Each product page lists the specific sizes currently in stock. If your size isn't visible, feel free to message us on WhatsApp and we can check if a special order is possible."
    },
    {
      question: "How long does delivery take across Pakistan?",
      answer: "We offer nationwide delivery. Major cities like Karachi, Lahore, and Islamabad usually receive their orders within 2-4 business days. For other cities, it may take 4-6 business days."
    },
    {
      question: "Do you offer Cash on Delivery (COD)?",
      answer: "Yes! We offer Cash on Delivery across most major cities in Pakistan. For some far-reaching areas, we might request a small advance or full payment via Bank Transfer / EasyPaisa / JazzCash."
    },
    {
      question: "Can I return or exchange boots?",
      answer: "Yes, we offer size exchanges within 3 days of delivery, provided the boots are unworn and in their original packaging. Please note that delivery charges for exchanges are covered by the customer."
    },
    {
      question: "How do I know which sole type to pick (FG/AG/TF/IC)?",
      answer: "FG (Firm Ground) is for natural grass. AG (Artificial Grass) is for modern synthetic grass pitches. TF (Turf) is for short-pile artificial grass or gravel. IC (Indoor) is for indoor courts and gyms."
    },
    {
      question: "Are the products original/genuine?",
      answer: "We source high-quality premium football gear. We carry both top-tier master replicas (perfect for competitive local play) and professional-grade boots. Each product description clarifies the grade and quality."
    }
  ];

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-8xl font-black mb-6">FAQ</h1>
        <p className="text-brand-gold font-display uppercase tracking-widest">Your questions, answered.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem key={i} {...faq} />
        ))}
      </div>
    </div>
  );
}
