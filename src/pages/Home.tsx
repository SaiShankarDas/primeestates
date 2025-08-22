import React from 'react';
import Hero from '../components/home/Hero';
import CityExplorer from '../components/home/CityExplorer';
import FeaturedProperties from '../components/home/FeaturedProperties';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CTABand from '../components/home/CTABand';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CityExplorer />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
      <CTABand />
    </div>
  );
};

export default Home;
