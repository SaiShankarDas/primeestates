import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

interface ChatbotLauncherProps {
  onClick: () => void;
}

const ChatbotLauncher: React.FC<ChatbotLauncherProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 left-6 z-40 w-[55px] h-[55px] bg-gradient-to-br from-[#1A73E8] to-[#1669C1] rounded-full flex items-center justify-center text-white shadow-lg"
      style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, rotate: [0, -15, 15, -15, 15, 0] }}
      transition={{ delay: 1.2, duration: 0.8, type: 'spring' }}
      whileHover={{ scale: 1.1, rotate: -10, boxShadow: '0 12px 30px rgba(0,0,0,0.3)' }}
      whileTap={{ scale: 0.9 }}
    >
      <Bot size={28} />
    </motion.button>
  );
};

export default ChatbotLauncher;
