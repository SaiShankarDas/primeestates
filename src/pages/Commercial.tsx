import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Commercial: React.FC = () => {
  return (
    <div className="bg-slate-50 py-20 min-h-screen flex items-center justify-center">
      <div className="text-center p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <Building2 size={64} className="mx-auto text-gold mb-4" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy">Commercial Properties</h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
          Discover office spaces, retail shops, and more. This page is currently under construction.
        </p>
         <Link to="/" className="mt-8 inline-block btn-primary">
            Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Commercial;
