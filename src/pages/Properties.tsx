import React from 'react';
import { motion } from 'framer-motion';
import { properties } from '../data/mockData';
import PropertyCard from '../components/common/PropertyCard';
import { Filter, SlidersHorizontal, Search } from 'lucide-react';

const Properties: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy">
            Explore All Properties
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Find your perfect home from our curated list of RERA-approved properties across India.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4 xl:w-1/5">
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-navy">Filters</h2>
                  <button className="text-sm text-royal hover:underline">Clear All</button>
                </div>
                
                {/* Search */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-slate-700 block mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
                    <input type="text" placeholder="Locality, Project..." className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-royal focus:border-royal transition"/>
                  </div>
                </div>

                {/* Property Type */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-slate-700 block mb-3">Property Type</h3>
                  <div className="space-y-2">
                    {['Apartment', 'Villa', 'Plot', 'Commercial'].map(type => (
                      <label key={type} className="flex items-center space-x-3">
                        <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-royal focus:ring-royal"/>
                        <span className="text-slate-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* BHK */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-slate-700 block mb-3">BHK</h3>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, '5+'].map(bhk => (
                      <button key={bhk} className="px-3 py-1 border border-slate-300 rounded-full text-slate-600 hover:bg-royal hover:text-white hover:border-royal transition text-sm">
                        {bhk} BHK
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="text-sm font-medium text-slate-700 block mb-3">Price Range</h3>
                  <input type="range" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal" />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>₹10L</span>
                    <span>₹10Cr+</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Properties Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-slate-800">
                Showing <span className="font-bold text-royal">{properties.length}</span> results
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-600">Sort by:</span>
                <select className="border border-slate-300 rounded-lg py-1 px-2 focus:ring-royal focus:border-royal transition">
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {properties.map((property) => (
                <motion.div key={property.id} variants={item}>
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Properties;
