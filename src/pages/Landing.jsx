import React from 'react';
// import Header from "../components/Header";
import Hero from "../components/Hero";
// import Footer from "../components/Footer";
import Features from '../components/Features';
import TrendingPreview from '../components/TrendingPreview';
import Layout from '../components/Layout';

const Landing = () => {
  return (
    <Layout>
      {/* <Header /> */}
      <Hero />
      <Features />
      <TrendingPreview />
      {/* <Footer /> */}
    </Layout>
  );
};  

export default Landing;