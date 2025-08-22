import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, MapPin } from 'lucide-react';
import { cities } from '../../data/mockData';

const CityExplorer: React.FC = () => {
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    } else if (price >= 1000) {
      return `₹${(price / 1000).toFixed(1)} K`;
    }
    return `₹${price}`;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6"
          >
            Explore <span className="gradient-text">Top Cities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Discover premium properties in India's fastest-growing metropolitan cities with 
            the best connectivity and lifestyle amenities.
          </motion.p>
        </div>

        {/* Cities Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => navigate(`/properties?city=${city.id}`)}
            >
              {/* Background Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-emerald" />
                      <span className="text-sm font-medium text-slate-200">{city.state}</span>
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold group-hover:text-emerald transition-colors">
                      {city.name}
                    </h3>
                    
                    <p className="text-slate-200 text-sm leading-relaxed line-clamp-2">
                      {city.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/20">
                      <div>
                        <div className="text-xs text-slate-300">Properties</div>
                        <div className="font-semibold">{city.propertyCount.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-300">Avg. Price/sqft</div>
                        <div className="font-semibold flex items-center space-x-1">
                          <span>{formatPrice(city.avgPricePerSqft)}</span>
                          <TrendingUp size={12} className="text-emerald" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </div>

                {/* Property Count Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-emerald/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                    {city.propertyCount}+ Properties
                  </div>
                </div>
              </div>

              {/* Popular Localities */}
              <div className="p-6 bg-white">
                <h4 className="font-medium text-slate-800 mb-3">Popular Localities</h4>
                <div className="flex flex-wrap gap-2">
                  {city.trendingLocalities.slice(0, 3).map((locality) => (
                    <span
                      key={locality}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-royal hover:text-white transition-colors cursor-pointer"
                    >
                      {locality}
                    </span>
                  ))}
                  {city.trendingLocalities.length > 3 && (
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                      +{city.trendingLocalities.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Cities CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate('/cities')}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Explore All Cities</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CityExplorer;
