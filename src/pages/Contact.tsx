import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-navy">Get In Touch</h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            We're here to help you with all your real estate needs. Contact us today for expert advice and support.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-slate-50 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" id="name" className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-royal focus:border-royal" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-royal focus:border-royal" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-royal focus:border-royal"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-emerald/10 rounded-xl">
                <Phone className="text-emerald" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy">Phone</h3>
                <p className="text-slate-600">+91-98765-43210</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-royal/10 rounded-xl">
                <Mail className="text-royal" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy">Email</h3>
                <p className="text-slate-600">info@primeestates.in</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-gold/10 rounded-xl">
                <MapPin className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy">Head Office</h3>
                <p className="text-slate-600">Prime Tower, Bandra Kurla Complex, Mumbai, Maharashtra</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
