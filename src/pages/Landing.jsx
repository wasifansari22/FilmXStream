import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Features from '../components/Features';
import TrendingPreview from '../components/TrendingPreview';

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <TrendingPreview />
      <Footer />
    </>
  )
}

export default Landing