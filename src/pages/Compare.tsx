import React from 'react';
import { motion } from 'framer-motion';
import { GitCompare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Compare: React.FC = () => {
  return (
    <div className="bg-slate-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <GitCompare size={64} className="mx-auto text-royal mb-4" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy">Compare Properties</h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
            This feature is coming soon! You will be able to compare properties side-by-side to make the best decision.
          </p>
          <Link to="/properties" className="mt-8 inline-block btn-primary">
            Back to Properties
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Compare;
