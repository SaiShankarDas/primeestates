import React from 'react';
import { motion } from 'framer-motion';

const TypingIndicator: React.FC = () => {
  const dotVariants = {
    initial: { y: 0 },
    animate: {
      y: -5,
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
  };

  return (
    <div className="flex items-center space-x-1 p-3">
      <motion.div
        variants={dotVariants}
        initial="initial"
        animate="animate"
        className="w-2 h-2 bg-slate-400 rounded-full"
      />
      <motion.div
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
        className="w-2 h-2 bg-slate-400 rounded-full"
      />
      <motion.div
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.4 }}
        className="w-2 h-2 bg-slate-400 rounded-full"
      />
    </div>
  );
};

export default TypingIndicator;
