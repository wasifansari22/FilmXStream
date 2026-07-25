import React from 'react';
import Hero from "../components/Hero";
import Features from '../components/Features';
import TrendingPreview from '../components/TrendingPreview';
import Layout from '../components/Layout';

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <TrendingPreview />
    </Layout>
  );
};  

export default Landing;