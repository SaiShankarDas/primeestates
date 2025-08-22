import React from 'react';
import { motion } from 'framer-motion';
import { ChatMessage as ChatMessageType } from '../../types';
import { Bot } from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-royal to-emerald flex items-center justify-center text-white flex-shrink-0">
          <Bot size={20} />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl p-3 shadow-md ${
          isUser
            ? 'bg-gradient-to-br from-[#1A73E8] to-[#1669C1] text-white rounded-br-lg'
            : 'bg-slate-200 text-slate-800 rounded-bl-lg'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
