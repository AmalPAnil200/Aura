import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-linear-to-b from-dark/90 to-transparent backdrop-blur-[2px]">
      <Link to="/" className="flex items-center gap-[0.4rem] font-display text-[1.6rem] font-semibold text-gold hover:text-gold-light tracking-widest transition-colors">
        <span className="text-[0.7rem] text-gold-light -translate-y-px">◆</span>
        <span>Aura</span>
      </Link>
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10">
        <Link to="/collections" className="font-body text-[0.7rem] font-normal uppercase tracking-[0.2em] text-cream opacity-70 hover:opacity-100 hover:text-gold-light transition-all">Collections</Link>
        <Link to="/about" className="font-body text-[0.7rem] font-normal uppercase tracking-[0.2em] text-cream opacity-70 hover:opacity-100 hover:text-gold-light transition-all">Our Story</Link>
        <Link to="/contact" className="font-body text-[0.7rem] font-normal uppercase tracking-[0.2em] text-cream opacity-70 hover:opacity-100 hover:text-gold-light transition-all">Contact</Link>
      </div>
      <Link to="/collections" className="font-body text-[0.65rem] font-medium tracking-[0.25em] uppercase text-gold border border-gold/40 px-[1.4rem] py-2 hover:bg-gold/10 hover:border-gold hover:text-gold-light transition-all relative z-10">Shop</Link>
    </nav>
  );
};

export default Navbar;
