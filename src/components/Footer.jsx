import React from "react";


const Footer = () => {
  return (
    <footer className="w-full relative px-8 md:px-[10vw] pt-8 pb-8 bg-[#050505] border-t border-gold/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
        {/* BRAND COLUMN */}
        <div className="md:col-span-1">
          <a href="/" className="font-display text-2xl tracking-tighter text-cream mb-6 block">
            Aura & Grace
          </a>
          <p className="font-body text-[0.75rem] leading-relaxed text-textMuted max-w-[240px]">
            Crafting the heirlooms of tomorrow with the ethics of today. Rare
            gems, recycled gold, and timeless artistry.
          </p>
        </div>

        {/* LINKS: COLLECTION */}
        <div>
          <h4 className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-6 opacity-80">
            Collection
          </h4>
          <ul className="flex flex-col gap-4 font-body text-[0.7rem] tracking-wider text-textMuted">
            <li>
              <a href="/collections" className="hover:text-cream transition-colors">
                Engagement Rings
              </a>
            </li>
            <li>
              <a href="/collections" className="hover:text-cream transition-colors">
                Fine Jewelry
              </a>
            </li>
            <li>
              <a href="/collections" className="hover:text-cream transition-colors">
                Bespoke Service
              </a>
            </li>
            <li>
              <a href="/collections" className="hover:text-cream transition-colors">
                The Heritage Series
              </a>
            </li>
          </ul>
        </div>

        {/* LINKS: ASSISTANCE */}
        <div>
          <h4 className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-6 opacity-80">
            Assistance
          </h4>
          <ul className="flex flex-col gap-4 font-body text-[0.7rem] tracking-wider text-textMuted">
            <li>
              <a href="#" className="hover:text-cream transition-colors">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-cream transition-colors">
                Sizing Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cream transition-colors">
                Care Instructions
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-cream transition-colors">
                Private Concierge
              </a>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="md:col-span-1">
          <h4 className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-6 opacity-80">
            Newsletter
          </h4>
          <p className="font-body text-[0.7rem] text-textMuted mb-4">
            Join for exclusive access to new releases.
          </p>
          <div className="relative border-b border-gold/30 pb-2 flex items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-none text-[0.75rem] font-body text-cream focus:ring-0 w-full placeholder:text-textMuted/40 outline-none"
            />
            <button className="text-gold text-[0.6rem] tracking-widest uppercase ml-2 hover:text-cream transition-colors font-bold">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gold/5 gap-6">
        <div className="flex gap-8 font-body text-[0.6rem] tracking-[0.2em] uppercase text-textMuted/60">
          <a href="#" className="hover:text-gold transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            Pinterest
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            Journal
          </a>
        </div>

        <div className="font-body text-[0.55rem] text-textMuted/40 tracking-[0.25em] uppercase">
          &copy; 2026 Aura & Grace ·{" "}
          <a href="/about" className="hover:underline">
            Privacy Policy
          </a>{" "}
          ·{" "}
          <a href="/about" className="hover:underline">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
