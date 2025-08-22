import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/918280565127?text=Hi%2C%20I%E2%80%99m%20interested.%20Please%20share%20more%20information."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative group">
        <div className="w-[55px] h-[55px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg"
             style={{boxShadow: '0 6px 16px rgba(0,0,0,0.2)'}}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/15713/15713434.png"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </div>
        <div className="absolute inset-0 border-2 border-white rounded-full"></div>
        <div className="absolute -inset-1 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-30 group-hover:scale-125 transition-all duration-300 blur-md"></div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
