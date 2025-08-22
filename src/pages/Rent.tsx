import React from 'react';
import { motion } from 'framer-motion';
import { KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const Rent: React.FC = () => {
  return (
    <div className="bg-slate-50 py-20 min-h-screen flex items-center justify-center">
      <div className="text-center p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <KeyRound size={64} className="mx-auto text-emerald mb-4" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy">Rent Properties</h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
          Find your perfect rental home. This page is currently under construction.
        </p>
         <Link to="/" className="mt-8 inline-block btn-primary">
            Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Rent;
