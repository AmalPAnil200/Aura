import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const OurStory = () => {
  return (
    <Layout>
      <div className="bg-dark min-h-screen text-cream">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center px-8 md:px-[10vw]">
          <div className="relative z-10 max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h1 className="font-display text-[clamp(3.5rem,12vw,10rem)] leading-none mb-12">
                Our <span className="italic text-gold">Heritage</span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <p className="font-body text-sm leading-relaxed text-textMuted tracking-wider">
                  Established in 1994, Aura & Grace began as a small atelier dedicated to the art of hand-cut diamonds. Today, we continue that legacy with the same uncompromising commitment to precision.
                </p>
                <p className="font-body text-sm leading-relaxed text-textMuted tracking-wider italic border-l border-gold/30 pl-8">
                  "True luxury is not just what you see, but the story behind every facet of light."
                </p>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="w-full h-full bg-linear-to-l from-gold/30 to-transparent" />
          </div>
        </section>

        {/* CRAFTSMANSHIP DETAILS */}
        <section className="py-32 px-8 md:px-[10vw] border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-square bg-dark-mid border border-white/5 relative overflow-hidden"
            >
              <img 
                src="https://i.pinimg.com/736x/95/d8/8a/95d88a042150ebd41774a6c859a6b961.jpg" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
            </motion.div>
            <div>
              <h2 className="font-display text-4xl md:text-6xl mb-8">The Hand <br /><span className="text-gold italic">of the Maker</span></h2>
              <p className="font-body text-textMuted leading-loose text-sm mb-10">
                Every Aura & Grace piece passes through the hands of a master craftsman who has spent decades honing their skill. We reject the mass-produced for the sake of the meticulous.
              </p>
              <div className="flex gap-12">
                <div>
                  <p className="text-2xl font-display text-gold">28</p>
                  <p className="text-[0.5rem] uppercase tracking-widest text-textMuted">Years of Legacy</p>
                </div>
                <div>
                  <p className="text-2xl font-display text-gold">0.01mm</p>
                  <p className="text-[0.5rem] uppercase tracking-widest text-textMuted">Precision Cut</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ETHOS */}
        <section className="py-32 bg-dark-mid relative overflow-hidden">
          <div className="px-8 md:px-[10vw] relative z-10 text-center max-w-[900px] mx-auto">
            <h2 className="font-display text-5xl mb-12">Driven by <span className="text-gold italic">Purpose</span></h2>
            <p className="font-body text-lg text-cream/80 leading-relaxed mb-16">
              Sustainability is not a trend for us; it is our foundation. From 100% recycled gold to conflict-free stones tracked via blockchain, we bridge the gap between beauty and responsibility.
            </p>
            <button className="border border-gold text-gold px-12 py-5 text-[0.6rem] uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-white transition-all">
              Discover Our Ethos
            </button>
          </div>
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden">
            <div className="text-[20rem] font-display text-gold absolute -top-40 -left-20">A&G</div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default OurStory;
