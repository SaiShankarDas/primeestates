import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { properties } from '../data/mockData';
import PropertyCard from '../components/common/PropertyCard';
import { Link } from 'react-router-dom';

const Saved: React.FC = () => {
  // Mock saved properties - in a real app, this would come from user state/context
  const savedProperties = properties.slice(0, 3);

  return (
    <div className="bg-slate-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy">Saved Properties</h1>
          <p className="mt-4 text-lg text-slate-600">Your shortlisted properties, all in one place.</p>
        </motion.div>

        {savedProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedProperties.map((prop, index) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PropertyCard property={prop} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart size={48} className="mx-auto text-slate-300" />
            <h2 className="mt-4 text-2xl font-semibold text-slate-700">No Saved Properties Yet</h2>
            <p className="mt-2 text-slate-500">Start exploring and save your favorite properties.</p>
            <Link to="/properties" className="mt-6 inline-block btn-primary">
              Explore Properties
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Saved;
