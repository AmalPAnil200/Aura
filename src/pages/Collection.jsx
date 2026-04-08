import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const products = [
  { id: 1, name: "Aura Solitaire", price: "$4,200", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "Celestial Band", price: "$2,800", image: "https://i.pinimg.com/1200x/3f/00/47/3f0047648a0d6ac372e353bd8b0ca063.jpg" },
  { id: 3, name: "Legacy Halo", price: "$5,500", image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Ether Ring", price: "$3,100", image: "https://i.pinimg.com/1200x/3f/00/47/3f0047648a0d6ac372e353bd8b0ca063.jpg" },
  { id: 5, name: "Golden Bloom", price: "$4,600", image: "https://i.pinimg.com/736x/6d/57/ef/6d57efe9b0a4f7200191ebf44a2c30da.jpg" },
  { id: 6, name: "Vanguard Band", price: "$2,200", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600" },
];

const Collection = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20 bg-dark min-h-screen text-cream">
        {/* HEADER */}
        <div className="px-8 md:px-[10vw] mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-display text-[clamp(2.5rem,8vw,5rem)] leading-none mb-6">
              The <span className="italic text-gold">Collection</span>
            </h1>
            <p className="font-body text-textMuted text-sm tracking-widest uppercase max-w-[500px]">
              Discover our curated selection of fine jewelry, where each piece is a masterpiece of precision and grace.
            </p>
          </motion.div>
        </div>

        {/* GRID */}
        <div className="px-8 md:px-[10vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-dark-mid border border-white/5 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-full bg-white text-dark py-4 text-[0.6rem] uppercase tracking-widest font-bold hover:bg-gold group-hover:text-black transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-display text-xl mb-1">{item.name}</h3>
                  <p className="font-body text-[0.55rem] text-gold uppercase tracking-[0.3em]">
                    18k Solid Gold
                  </p>
                </div>
                <p className="font-display text-lg text-textMuted">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Collection;
