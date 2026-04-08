import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, showFooter = true }) => {
  return (
    <div className="relative z-0 min-h-screen bg-dark text-cream font-body font-light overflow-x-hidden">
      {/* Grain overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none h-[50vh] opacity-[0.04] bg-grain min-h-screen w-full"
        aria-hidden="true"
        style={{ backgroundSize: "200px 200px" }}
      />

      <Navbar />

      <main className="relative z-0">{children}</main>

      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
