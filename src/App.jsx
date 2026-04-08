import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import OurStory from './pages/OurStory';
import Contact from './pages/Contact';
import ScrollToTop from '../src/components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/about" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}