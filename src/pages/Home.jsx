import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { motion } from "framer-motion";
import RingModel from "../components/RingModel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FadeInSection = ({ children, className = "", id }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full min-h-screen flex items-center relative px-8 md:px-[10vw] ${className}`}
    >
      {children}
    </motion.div>
  );
};

const HTMLContent = () => {
  return (
    <div className="w-full relative selection:bg-gold/30 selection:text-cream">
      {/* HERO SECTION */}
      <FadeInSection className="items-end pb-[15vh]">
        <div className="w-full max-w-[650px]">
          <div className="font-body text-[0.65rem] font-normal tracking-[0.4em] uppercase text-gold mb-8 flex items-center gap-4">
            <span className="w-8 h-px bg-gold" />
            New Collection 2026
          </div>
          <h1 className="font-poppins font-light leading-[0.85] mb-8 text-cream">
            <span className="block text-[clamp(4rem,15vw,9rem)] tracking-tighter ml-4 mb-2">
              Aura
            </span>
            <span className="block text-[clamp(4rem,15vw,9rem)] text-amber-300 tracking-tighter">
              & Grace
            </span>
          </h1>
          <p className="font-body text-[0.9rem] font-light leading-relaxed text-textMuted mb-12 max-w-[400px] border-l border-gold/20 pl-6">
            A symphony of light and metal. Discover the collection where
            heritage meets the avant-garde.
          </p>

          {/* FIXED BUTTON LOGIC */}
          <button className="group relative overflow-hidden bg-amber-500 px-10 py-5 text-dark font-body text-[0.7rem] tracking-[0.2em] uppercase font-bold transition-transform hover:-translate-y-1 cursor-pointer">
            <span className="relative z-10 transition-colors duration-500 text-black">
              Inquire Now
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>

        <div className="absolute right-10 bottom-10 hidden md:flex flex-col items-center gap-4">
          <div className="w-px h-24 bg-gradient-to-b from-gold/50 to-transparent" />
          <p className="text-[0.5rem] tracking-[0.4em] uppercase text-gold/50 [writing-mode:vertical-lr]">
            Explore
          </p>
        </div>
      </FadeInSection>

      {/* CRAFTSMANSHIP SECTION */}
      <FadeInSection id="collections">
        <div className="md:ml-auto md:text-right max-w-[500px]">
          <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] text-cream mb-8">
            The Art of <br />
            <span className="italic text-gold">Precision</span>
          </h2>
          <p className="font-body text-textMuted leading-loose text-[0.85rem] mb-10">
            Each diamond is hand-selected under 40x magnification, ensuring that
            only the top 0.1% of stones ever grace an Aura & Grace setting.
          </p>
          <div className="grid grid-cols-3 gap-4 border-t border-gold/10 pt-8">
            <div>
              <p className="text-gold font-display text-2xl">18k</p>
              <p className="text-[0.5rem] text-textMuted uppercase tracking-widest">
                Solid Gold
              </p>
            </div>
            <div>
              <p className="text-gold font-display text-2xl">VVS</p>
              <p className="text-[0.5rem] text-textMuted uppercase tracking-widest">
                Clarity Grade
              </p>
            </div>
            <div>
              <p className="text-gold font-display text-2xl">0.01</p>
              <p className="text-[0.5rem] text-textMuted uppercase tracking-widest">
                Tolerance
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ETHOS SECTION */}
      <FadeInSection id="about">
        <div className="max-w-[500px]">
          <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] text-cream mb-8">
            Conflict <br />
            <span className="italic text-gold">Free</span>
          </h2>
          <p className="font-body text-textMuted leading-loose text-[0.85rem] mb-10">
            Beauty shouldn't cost the earth. We use 100% recycled gold and
            ethically sourced stones tracked via blockchain for total
            transparency.
          </p>
          <a
            href="#"
            className="text-gold text-[0.65rem] tracking-[0.3em] uppercase border-b border-gold/40 pb-2 hover:border-gold transition-all"
          >
            Read Our Ethos
          </a>
        </div>
      </FadeInSection>

      {/* FINAL CTA SECTION */}
      <FadeInSection className="justify-center text-center" id="contact">
        <div className="max-w-[700px]">
          <h2 className="font-display text-[clamp(3rem,10vw,7rem)] leading-none text-cream mb-12">
            Begin Your <br />
            <em className="italic text-gold font-light">Legacy</em>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="w-full md:w-auto bg-transparent border border-gold/50 text-gold px-12 py-5 text-[0.7rem] tracking-widest uppercase hover:bg-gold hover:text-dark transition-all cursor-pointer">
              Private Showroom
            </button>
            <button className="w-full md:w-auto bg-gold text-dark px-12 py-5 text-[0.7rem] tracking-widest uppercase font-bold cursor-pointer">
              Shop Online
            </button>
          </div>
        </div>
      </FadeInSection>

      <Footer />
    </div>
  );
};

export default function Home() {
  const [pageConfig, setPageConfig] = useState(4.4);

  useEffect(() => {
    const handleResize = () => {
      // If window width is less than 768px (standard md breakpoint)
      setPageConfig(window.innerWidth < 768 ? 5.3 : 4.4);
    };

    handleResize(); // Set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-auto bg-[#050505]">
      <Navbar />
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <color attach="background" args={["#050505"]} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={500}
          color="#fff4d6"
        />
        <rectAreaLight
          width={10}
          height={10}
          intensity={5}
          position={[-10, 0, 5]}
          color="#c9a84c"
        />
        <ambientLight intensity={0.5} />

        <Suspense fallback={null}>
          {/* Key prop ensures the scroll container rebuilds when the page count changes */}
          <ScrollControls key={pageConfig} pages={pageConfig} damping={0.1}>
            <RingModel />
            <Scroll html style={{ width: "100%" }}>
              <HTMLContent />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
