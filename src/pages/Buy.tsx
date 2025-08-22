import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Buy: React.FC = () => {
  return (
    <div className="bg-slate-50 py-20 min-h-screen flex items-center justify-center">
      <div className="text-center p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <ShoppingCart size={64} className="mx-auto text-royal mb-4" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy">Buy Properties</h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
          Explore residential properties for sale. This page is currently under construction.
        </p>
        <Link to="/" className="mt-8 inline-block btn-primary">
            Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Buy;
