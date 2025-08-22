import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Building, KeyRound, Building2, UploadCloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { cities } from '../../data/mockData';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedCity) params.set('city', selectedCity);
    if (searchQuery) params.set('q', searchQuery);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(11, 26, 42, 0.7), rgba(11, 26, 42, 0.5)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop")'
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-royal/20 to-emerald/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-gold/20 to-royal/20 rounded-full blur-xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
            >
              Find Your Next
              <span className="block">
                <span className="gradient-text">Dream Home</span>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
            >
              Discover premium properties across Mumbai, Delhi, Bengaluru, Pune & more. 
              RERA verified listings with instant WhatsApp support.
            </motion.p>
          </div>

          {/* Quick Action Buttons */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button 
              onClick={() => navigate('/buy')} 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-slate-500/20 backdrop-blur-md border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300"
            >
              <Building size={20} />
              <span>Buy Property</span>
            </motion.button>
            <motion.button 
              onClick={() => navigate('/rent')} 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-slate-500/20 backdrop-blur-md border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300"
            >
              <KeyRound size={20} />
              <span>Rent Property</span>
            </motion.button>
             <motion.button 
              onClick={() => navigate('/commercial')} 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-slate-500/20 backdrop-blur-md border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300"
            >
              <Building2 size={20} />
              <span>Commercial</span>
            </motion.button>
            <motion.button 
              onClick={() => navigate('/list-property')} 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-cta-green text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-cta-green/90 transition-all duration-300"
            >
              <UploadCloud size={20} />
              <span>List Your Property</span>
            </motion.button>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSearch} className="glass-effect rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                {/* City Selection */}
                <div className="md:col-span-3">
                  <label className="block text-sm font-medium text-white mb-2 text-left">
                    Select City
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-slate-400" size={20} />
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent"
                    >
                      <option value="">All Cities</option>
                      {cities.map((city) => (
                        <option key={city.id} value={city.id} className="text-slate-900">
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Search Input */}
                <div className="md:col-span-7">
                  <label className="block text-sm font-medium text-white mb-2 text-left">
                    Search Properties
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 text-slate-400" size={20} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by locality, builder, project name..."
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full btn-primary h-12 flex items-center justify-center space-x-2"
                  >
                    <Search size={20} />
                    <span className="hidden md:inline">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center items-center gap-8 text-white/80"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald rounded-full"></div>
              <span>RERA Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald rounded-full"></div>
              <span>50,000+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
