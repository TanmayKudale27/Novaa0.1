import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Hero from "./pages/Hero";
import Section from "./pages/Section";
import Service from "./pages/OurServices";
import Blog from "./pages/Blog";
import CallAction from "./pages/CallAction";
import Features from "./pages/Features";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/services" element={<Section />} />
        <Route path="/features" element={<Features />} />
        <Route path="/callAction" element={<CallAction />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
