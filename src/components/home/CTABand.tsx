import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar, Download, ArrowRight } from 'lucide-react';

const CTABand: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-royal via-emerald to-royal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/40 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Ready to Find Your
              <span className="block text-gold">Dream Home?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Book a free site visit today and explore premium properties with our expert guidance. 
              No hidden charges, no pressure – just honest advice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/918280565127?text=Hi%2C%20I%E2%80%99m%20interested.%20Please%20share%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-3 bg-white text-royal px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-100 transition-all duration-300 shadow-xl"
              >
                <Calendar size={24} />
                <span>Book Free Site Visit</span>
              </motion.a>

              <motion.a
                href="https://wa.me/918280565127?text=Hi%2C%20I%E2%80%99m%20interested.%20Please%20share%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/15713/15713434.png" alt="WhatsApp" className="w-6 h-6" />
                <span>WhatsApp Now</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Actions Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="glass-effect p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-royal transition-all duration-300">
                <Phone size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Instant Call Back</h3>
              <p className="text-white/80 mb-4">Get a call from our property expert within 30 seconds</p>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center space-x-2 text-gold hover:text-white transition-colors"
              >
                <span>Call +91-98765-43210</span>
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="glass-effect p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-royal transition-all duration-300">
                <Download size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Property Brochures</h3>
              <p className="text-white/80 mb-4">Download detailed brochures of premium projects</p>
              <button className="inline-flex items-center space-x-2 text-gold hover:text-white transition-colors">
                <span>Download Now</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="glass-effect p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-royal transition-all duration-300">
                 <img src="https://cdn-icons-png.flaticon.com/512/15713/15713434.png" alt="WhatsApp" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Consultation</h3>
              <p className="text-white/80 mb-4">Free consultation on investment & home loans</p>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center space-x-2 text-gold hover:text-white transition-colors"
              >
                <span>Get Consultation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald rounded-full"></div>
                <span>100% RERA Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>No Brokerage</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald rounded-full"></div>
                <span>Free Site Visits</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Expert Guidance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
