import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { Mail, Phone, MapPin } from "lucide-react";

// Custom SVG Icons to avoid dependency issues
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
);

const Contact = () => {
  return (
    <Layout>
      <div className="bg-dark min-h-screen text-cream pt-32 pb-20">
        <div className="px-8 md:px-[10vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.8] mb-8">
              Let's <br /><span className="italic text-gold">Connect</span>
            </h1>
            <p className="font-body text-textMuted text-sm tracking-widest uppercase max-w-[500px]">
              Visit our private showroom in London or book a virtual consultation with our fine jewelry experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[0.6rem] uppercase tracking-widest text-gold font-bold">First Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-gold transition-colors font-body text-sm" placeholder="Alexander" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.6rem] uppercase tracking-widest text-gold font-bold">Last Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-gold transition-colors font-body text-sm" placeholder="Vance" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[0.6rem] uppercase tracking-widest text-gold font-bold">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-gold transition-colors font-body text-sm" placeholder="alexander@aura.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[0.6rem] uppercase tracking-widest text-gold font-bold">Subject</label>
                  <select className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-gold transition-colors font-body text-sm appearance-none">
                    <option className="bg-dark">Bespoke Commission</option>
                    <option className="bg-dark">Showroom Appointment</option>
                    <option className="bg-dark">Press Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[0.6rem] uppercase tracking-widest text-gold font-bold">Message</label>
                  <textarea rows="4" className="w-full bg-transparent border-b border-white/20 pb-4 outline-none focus:border-gold transition-colors font-body text-sm resize-none" placeholder="Tell us more about your inquiry..."></textarea>
                </div>
                <button className="bg-white text-dark w-full py-6 text-[0.7rem] uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-white transition-all transform hover:-translate-y-1">
                  Send Inquiry
                </button>
              </form>
            </motion.div>

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gold">
                    <Mail size={16} />
                    <span className="text-[0.6rem] uppercase tracking-widest font-bold">Email</span>
                  </div>
                  <p className="font-body text-lg">concierge@aura.com</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gold">
                    <Phone size={16} />
                    <span className="text-[0.6rem] uppercase tracking-widest font-bold">Phone</span>
                  </div>
                  <p className="font-body text-lg">+44 20 7946 0123</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gold">
                    <MapPin size={16} />
                    <span className="text-[0.6rem] uppercase tracking-widest font-bold">Showroom</span>
                  </div>
                  <p className="font-body text-lg leading-relaxed">
                    27 New Bond St, <br />
                    Mayfair, London W1S 2RH
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gold">
                    <InstagramIcon />
                    <span className="text-[0.6rem] uppercase tracking-widest font-bold">Follow</span>
                  </div>
                  <p className="font-body text-lg">@auraandgrace</p>
                </div>
              </div>

              {/* MOCK MAP / VISUAL */}
              <div className="aspect-video bg-dark-mid border border-white/5 relative overflow-hidden flex items-center justify-center">
                <div className="text-gold/20 font-display text-4xl italic">London Showroom</div>
                <div className="absolute inset-0 bg-linear-to-t from-dark to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
