import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Building } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-navy">
            About <span className="gradient-text">PrimeEstates</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Your trusted partner in navigating the Indian real estate market. We are committed to transparency, quality, and customer satisfaction.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop" alt="Our Team" className="rounded-2xl shadow-2xl"/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-navy">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To simplify property transactions in India by providing a reliable, transparent, and user-friendly platform. We connect homebuyers with top-tier, RERA-verified properties, ensuring every investment is secure and every dream home is a reality.
            </p>
            <h2 className="text-3xl font-bold text-navy">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be India's most respected real estate advisory firm, recognized for our ethical practices, deep market expertise, and unwavering commitment to our clients' success.
            </p>
          </motion.div>
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-slate-50 rounded-xl">
              <Award className="mx-auto text-emerald" size={40}/>
              <h3 className="text-2xl font-bold text-navy mt-4">15+ Years</h3>
              <p className="text-slate-500">of Experience</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <Shield className="mx-auto text-royal" size={40}/>
              <h3 className="text-2xl font-bold text-navy mt-4">100%</h3>
              <p className="text-slate-500">RERA Verified</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <Users className="mx-auto text-gold" size={40}/>
              <h3 className="text-2xl font-bold text-navy mt-4">50,000+</h3>
              <p className="text-slate-500">Happy Customers</p>
            </div>
             <div className="p-6 bg-slate-50 rounded-xl">
              <Building className="mx-auto text-navy" size={40}/>
              <h3 className="text-2xl font-bold text-navy mt-4">8 Cities</h3>
              <p className="text-slate-500">Across India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
