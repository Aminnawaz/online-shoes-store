import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const STORE_DETAILS = {
  name: "Pitch Ready Store",
  phone: "+92 321 5486916",
  whatsapp: "https://wa.me/923215486916",
  email: "Aminnawazoffical@gmail.com",
  instagram: "https://www.instagram.com/pitchready.store?igsh=ZmVpZGg1NWlsN2hm",
  instagramHandle: "@pitchready.store",
  delivery: "Nationwide across Pakistan 🇵🇰",
  domain: "pitchready.store"
};

export interface Product {
  id: string;
  name: string;
  price: number;
  brand: string;
  category: 'FG' | 'AG' | 'TF' | 'IC';
  image: string;
  sizes: number[];
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Nike Mercurial Vapor 15",
    price: 18500,
    brand: "Nike",
    category: 'FG',
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    description: "Built for speed. The Nike Mercurial Vapor 15 offers superior traction and ball control for the fastest players on the pitch."
  },
  {
    id: '2',
    name: "Adidas Predator Accuracy",
    price: 17200,
    brand: "Adidas",
    category: 'FG',
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    sizes: [40, 41, 42, 43, 44],
    description: "Master every shot. The Adidas Predator is designed for pinpoint accuracy and control in every game situation."
  },
  {
    id: '3',
    name: "Puma Future Ultimate",
    price: 16500,
    brand: "Puma",
    category: 'TF',
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
    sizes: [38, 39, 40, 41, 42],
    description: "Adaptive fit for creative players. The Puma Future features FUZIONFIT+ technology to wrap around your foot for ultimate lockdown."
  },
  {
    id: '4',
    name: "New Balance Furon V7",
    price: 15800,
    brand: "New Balance",
    category: 'FG',
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    sizes: [41, 42, 43, 44, 45],
    description: "Explosive acceleration. Lightweight construction meets high-performance traction in the Furon V7."
  },
  {
    id: '5',
    name: "Nike Phantom GX",
    price: 19200,
    brand: "Nike",
    category: 'AG',
    image: "https://images.unsplash.com/photo-1584735990210-4ed2103df3f0?auto=format&fit=crop&q=80&w=800",
    sizes: [40, 41, 42, 43, 44],
    description: "Unmatched touch. Gripknit technology offers better control in both wet and dry conditions."
  },
  {
    id: '6',
    name: "Mizuno Morelia Neo III",
    price: 21000,
    brand: "Mizuno",
    category: 'FG',
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800",
    sizes: [42, 43, 44, 45, 46],
    description: "Pure Japanese craftsmanship. Ultra-lightweight K-Leather for the ultimate barefoot feel."
  }
];
