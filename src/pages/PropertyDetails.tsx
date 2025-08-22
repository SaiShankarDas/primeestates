import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/mockData';
import NotFound from './NotFound';
import { MapPin, Home, Maximize, Shield, Calendar, Phone, Star, Download, Heart, GitCompare } from 'lucide-react';
import { motion } from 'framer-motion';

const PropertyDetails: React.FC = () => {
  const { propertyId } = useParams<{ propertyId: string }>();
  const property = properties.find(p => p.id === propertyId);

  if (!property) {
    return <NotFound />;
  }

  const formatPrice = (price: number) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(1)} L`;
    return `₹${price.toLocaleString()}`;
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6 text-sm text-slate-500">
          <Link to="/" className="hover:text-royal">Home</Link> &gt; 
          <Link to="/properties" className="hover:text-royal"> Properties</Link> &gt; 
          <span className="text-slate-700"> {property.title}</span>
        </div>

        {/* Title and Actions */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-navy">{property.title}</h1>
            <div className="flex items-center space-x-2 text-slate-600 mt-2">
              <MapPin size={16} />
              <span>{property.locality}, {property.city}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <button className="p-3 bg-slate-100 rounded-lg hover:bg-emerald hover:text-white transition-colors"><Heart size={20} /></button>
            <button className="p-3 bg-slate-100 rounded-lg hover:bg-royal hover:text-white transition-colors"><GitCompare size={20} /></button>
            <button className="p-3 bg-slate-100 rounded-lg hover:bg-gold hover:text-white transition-colors"><Download size={20} /></button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-1 md:col-span-2 rounded-xl overflow-hidden">
            <img src={property.images[0]} alt={property.title} className="w-full h-auto object-cover" />
          </motion.div>
          {property.images.slice(1, 3).map((img, i) => (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay: 0.2 * (i+1)}} key={i} className="rounded-xl overflow-hidden">
              <img src={img} alt={`${property.title} view ${i+1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="space-y-8">
              {/* Key Details */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h2 className="text-2xl font-semibold text-navy mb-4">Key Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex items-center space-x-3">
                    <Home className="text-royal" size={24}/>
                    <div>
                      <div className="text-sm text-slate-500">Type</div>
                      <div className="font-semibold text-navy">{property.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Maximize className="text-emerald" size={24}/>
                    <div>
                      <div className="text-sm text-slate-500">Carpet Area</div>
                      <div className="font-semibold text-navy">{property.carpet_area_sqft} sqft</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="text-gold" size={24}/>
                    <div>
                      <div className="text-sm text-slate-500">RERA ID</div>
                      <div className="font-semibold text-navy">{property.rera_id}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-navy" size={24}/>
                    <div>
                      <div className="text-sm text-slate-500">Possession</div>
                      <div className="font-semibold text-navy">{property.possession_status}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">About this property</h2>
                <p className="text-slate-600 leading-relaxed">{property.description}</p>
              </div>
              
              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map(amenity => (
                    <div key={amenity} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald rounded-full"></div>
                      <span className="text-slate-600">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
                <div className="mb-4">
                  <div className="text-3xl font-bold text-navy">{formatPrice(property.price_in_inr)}</div>
                  <div className="text-slate-500">₹{property.price_per_sqft.toLocaleString()}/sqft</div>
                </div>
                
                <div className="space-y-3">
                  <a href={`tel:+919876543210`} className="w-full flex items-center justify-center space-x-2 btn-secondary">
                    <Phone size={18} />
                    <span>Call Now</span>
                  </a>
                  <a href="https://wa.me/918280565127?text=Hi%2C%20I%E2%80%99m%20interested.%20Please%20share%20more%20information." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center space-x-2 btn-primary">
                    <img src="https://cdn-icons-png.flaticon.com/512/15713/15713434.png" alt="WhatsApp" className="w-4 h-4" />
                    <span>Contact on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
                <h3 className="font-semibold text-navy mb-4">Developed by {property.developer}</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="text-sm text-slate-500">4.5 (23 Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
