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

export type Category = 'STUDS' | 'GRIPPERS' | 'SHINS' | 'BALLS' | 'BIBS' | 'APPAREL' | 'SOCKS';

export interface Product {
  id: string;
  name: string;
  price: number;
  brand: string;
  category: Category;
  subCategory?: 'FG' | 'AG' | 'TF' | 'IC';
  image: string;
  sizes: (string | number)[];
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Nike Mercurial Vapor 15",
    price: 18500,
    brand: "Nike",
    category: 'STUDS',
    subCategory: 'FG',
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    description: "Built for speed. The Nike Mercurial Vapor 15 offers superior traction and ball control for the fastest players on the pitch."
  },
  {
    id: '2',
    name: "Adidas Predator Accuracy",
    price: 17200,
    brand: "Adidas",
    category: 'STUDS',
    subCategory: 'FG',
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    sizes: [40, 41, 42, 43, 44],
    description: "Master every shot. The Adidas Predator is designed for pinpoint accuracy and control in every game situation."
  },
  {
    id: '3',
    name: "Performance Gripper Socks",
    price: 1200,
    brand: "Pitch Ready",
    category: 'GRIPPERS',
    image: "https://m.media-amazon.com/images/I/71u9+YfEaIL._AC_SL1500_.jpg",
    sizes: ['M', 'L'],
    description: "Non-slip technology for maximum power transfer inside your boots. Anti-blister and moisture-wicking technology trusted by pros."
  },
  {
    id: '4',
    name: "Carbon Pro Shin Guards",
    price: 2500,
    brand: "Pitch Ready",
    category: 'SHINS',
    image: "https://m.media-amazon.com/images/I/71lM6XkLhPL._AC_SL1500_.jpg",
    sizes: ['S', 'M', 'L'],
    description: "Ultra-lightweight protection. Ergonomic fit with compression sleeves for zero movement during high-intensity play."
  },
  {
    id: '5',
    name: "FIFA Quality Pro Match Ball",
    price: 8500,
    brand: "Adidas",
    category: 'BALLS',
    image: "https://images.unsplash.com/photo-1614632537423-1e6c2e7a0aab?auto=format&fit=crop&q=80&w=800",
    sizes: [5],
    description: "Official match weight and balance. Thermally bonded seamless surface for more predictable trajectory and lower water uptake."
  },
  {
    id: '6',
    name: "Training Bibs Premium (Set of 10)",
    price: 4500,
    brand: "Pitch Ready",
    category: 'BIBS',
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=800",
    sizes: ['Free Size'],
    description: "Vibrant mesh training bibs for team drills. Breathable, durable, and quick-drying fabric."
  },
  {
    id: '7',
    name: "Pro-Fit Training Shorts",
    price: 2800,
    brand: "Pitch Ready",
    category: 'APPAREL',
    image: "https://m.media-amazon.com/images/I/61Q65D05NGL._AC_SL1500_.jpg",
    sizes: ['S', 'M', 'L', 'XL'],
    description: "Lightweight, moisture-wicking training shorts. Designed for maximum range of motion on the pitch."
  },
  {
    id: '8',
    name: "Full Team Kit (Custom)",
    price: 3500,
    brand: "Pitch Ready",
    category: 'APPAREL',
    image: "https://m.media-amazon.com/images/I/61m1Yp+8UPL._AC_SL1001_.jpg",
    sizes: ['S', 'M', 'L', 'XL'],
    description: "Customized team jerseys and shorts. High-quality sublimation printing available for local clubs."
  },
  {
    id: '9',
    name: "Compression Under-Boxers",
    price: 1500,
    brand: "Pitch Ready",
    category: 'APPAREL',
    image: "https://m.media-amazon.com/images/I/61d8Pq0kKkL._AC_SL1500_.jpg",
    sizes: ['M', 'L', 'XL'],
    description: "Athletic compression shorts for under your kit. Prevents chafing and provides muscle support."
  },
  {
    id: '10',
    name: "Elite Over-Calf Socks",
    price: 850,
    brand: "Nike",
    category: 'SOCKS',
    image: "https://images.unsplash.com/photo-1586350977982-b1b1cf3acc38?auto=format&fit=crop&q=80&w=800",
    sizes: [38, 40, 42, 44],
    description: "Standard match-day socks. High durability with reinforced heel and toe areas."
  },
  {
    id: '11',
    name: "Pro-Formance Shins + Sleeve Set",
    price: 3200,
    brand: "Pitch Ready",
    category: 'SHINS',
    image: "https://m.media-amazon.com/images/I/71R1Yk8nLpL._AC_SL1500_.jpg",
    sizes: ['M', 'L'],
    description: "Complete lower leg protection package including guards and stay-put sleeves."
  },
  {
    id: '12',
    name: "League Match Ball (Size 4/5)",
    price: 4200,
    brand: "Pitch Ready",
    category: 'BALLS',
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
    sizes: [4, 5],
    description: "Perfect for league play and intense practice. Highly durable hand-stitched construction."
  }
];
