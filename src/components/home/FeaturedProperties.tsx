import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { featuredProperties } from '../../data/mockData';
import PropertyCard from '../common/PropertyCard';

const FeaturedProperties: React.FC = () => {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-emerald/10 text-emerald px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <TrendingUp size={16} />
            <span>Hot Properties</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6"
          >
            Featured <span className="gradient-text">Properties</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Handpicked premium properties with verified RERA approval, 
            excellent connectivity, and world-class amenities.
          </motion.p>
        </div>

        {/* Properties Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {featuredProperties.map((property) => (
            <motion.div key={property.id} variants={item}>
              <PropertyCard property={property} variant="featured" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Properties CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate('/properties')}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Properties</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-slate-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-royal mb-2">1200+</div>
              <div className="text-slate-600">Properties Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald mb-2">100%</div>
              <div className="text-slate-600">RERA Verified</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">50K+</div>
              <div className="text-slate-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy mb-2">24/7</div>
              <div className="text-slate-600">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
