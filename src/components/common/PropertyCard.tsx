import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, GitCompare, MapPin, Home, Maximize, Shield, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'compact' | 'featured';
}

const PropertyCardFC: React.FC<PropertyCardProps> = ({ property, variant = 'default' }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/properties/${property.id}`);
  };

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const calculateEMI = () => {
    const principal = property.price_in_inr;
    const rate = property.emi_estimator.rate / 100 / 12;
    const time = property.emi_estimator.tenure_years * 12;
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    return Math.round(emi);
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`property-card group overflow-hidden flex flex-col h-full cursor-pointer ${
        variant === 'compact' ? 'max-w-sm' : variant === 'featured' ? 'max-w-md' : ''
      }`}
      onClick={handleNavigate}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden h-48 md:h-56">
        <img
          src={property.images[0]}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {property.badges.map((badge) => (
            <span
              key={badge}
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                badge === 'RERA Approved'
                  ? 'bg-emerald text-white'
                  : badge === 'New Launch'
                  ? 'bg-royal text-white'
                  : 'bg-gold text-white'
              }`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={(e) => e.stopPropagation()} className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-emerald hover:text-white transition-colors z-10 relative">
            <Heart size={16} />
          </button>
          <button onClick={(e) => e.stopPropagation()} className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-royal hover:text-white transition-colors z-10 relative">
            <GitCompare size={16} />
          </button>
        </div>

        {/* Possession Status */}
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1 text-sm font-medium rounded-full ${
            property.possession_status === 'Ready'
              ? 'bg-emerald/90 text-white'
              : 'bg-gold/90 text-white'
          }`}>
            {property.possession_status}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title & Location */}
        <div className="mb-4">
          <h3 className="text-lg font-heading font-semibold text-navy mb-2 line-clamp-2 group-hover:text-royal transition-colors">
            {property.title}
          </h3>
          
          <div className="flex items-center space-x-2 text-slate-600">
            <MapPin size={14} />
            <span className="text-sm">{property.locality}, {property.city}</span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-slate-50 rounded-lg">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Home size={16} className="text-royal" />
            </div>
            <div className="text-lg font-semibold text-navy">{property.bhk}</div>
            <div className="text-xs text-slate-500">BHK</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Maximize size={16} className="text-emerald" />
            </div>
            <div className="text-lg font-semibold text-navy">{property.carpet_area_sqft}</div>
            <div className="text-xs text-slate-500">sqft</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Shield size={16} className="text-gold" />
            </div>
            <div className="text-lg font-semibold text-navy">RERA</div>
            <div className="text-xs text-slate-500">Approved</div>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-2xl font-bold text-navy">
                {formatPrice(property.price_in_inr)}
              </div>
              <div className="text-sm text-slate-500">
                ₹{property.price_per_sqft.toLocaleString()}/sqft
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-slate-600">EMI starts from</div>
              <div className="text-lg font-semibold text-emerald">
                ₹{(calculateEMI()).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-grow"></div>

        {/* Action Buttons */}
        <div className="mt-auto grid grid-cols-2 gap-3">
          <a
            href={`tel:+919876543210`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center space-x-2 btn-secondary text-sm py-2"
          >
            <Phone size={16} />
            <span>Call</span>
          </a>
          
          <a
            href="https://wa.me/918280565127?text=Hi%2C%20I%E2%80%99m%20interested.%20Please%20share%20more%20information."
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center space-x-2 btn-primary text-sm py-2"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/15713/15713434.png" alt="WhatsApp" className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const PropertyCard = React.memo(PropertyCardFC);
export default PropertyCard;
