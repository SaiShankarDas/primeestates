import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, AlertTriangle } from 'lucide-react';
import { ChatMessage as ChatMessageType } from '../../types';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import { startChat } from '../../lib/gemini';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef(startChat([]));

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setError(null);
      // Reset chat session on open
      chatSessionRef.current = startChat([]);
      setTimeout(() => {
        setMessages([
          {
            id: Date.now(),
            sender: 'bot',
            text: "Greetings! I am the PrimeEstates AI Assistant. How may I assist you in your property search today? You can ask me things like 'Show me villas in Bengaluru' or 'Are there any 3 BHK apartments in Mumbai?'",
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
        setIsTyping(false);
      }, 1000);
    }
  }, [isOpen]);

  useEffect(() => {
    chatBodyRef.current?.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMessage: ChatMessageType = {
      id: Date.now(),
      sender: 'user',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setError(null);

    try {
      const stream = await chatSessionRef.current.sendMessageStream(inputValue);
      
      let botMessageText = '';
      const botMessageId = Date.now() + 1;
      
      setMessages(prev => [...prev, {
        id: botMessageId,
        sender: 'bot',
        text: '',
        timestamp: new Date().toLocaleTimeString()
      }]);

      for await (const chunk of stream.stream) {
        botMessageText += chunk.text();
        setMessages(prev => prev.map(msg => 
          msg.id === botMessageId ? { ...msg, text: botMessageText } : msg
        ));
      }

    } catch (err) {
      console.error("Gemini API error:", err);
      const errorMessage = "Sorry, I'm having trouble connecting right now. Please check your API key or try again later.";
      setError(errorMessage);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: errorMessage,
        timestamp: new Date().toLocaleTimeString()
      }]);
    } finally {
      setIsTyping(false);
      // The ChatSession object maintains its own history. No need to rebuild it manually.
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed bottom-24 left-6 z-50 w-[340px] h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col font-body"
          style={{boxShadow: '0 8px 24px rgba(0,0,0,0.25)'}}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#1A73E8] to-[#1669C1] text-white rounded-t-2xl">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <h3 className="font-bold">AI Real Estate Assistant</h3>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full">
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div ref={chatBodyRef} className="flex-1 p-3 space-y-4 overflow-y-auto bg-slate-100">
            {messages.map(msg => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isTyping && !error && <TypingIndicator />}
            {error && (
               <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-2 bg-red-100 text-red-700 rounded-lg text-xs"
              >
                <AlertTriangle size={24} />
                <span>{error}</span>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-200 rounded-b-2xl">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about properties..."
                disabled={isTyping}
                className="flex-1 px-3 py-2 bg-slate-100 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] transition disabled:opacity-50"
              />
              <button type="submit" disabled={isTyping} className="w-9 h-9 bg-[#1A73E8] text-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#1669C1] transition-colors disabled:bg-slate-400">
                <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;
