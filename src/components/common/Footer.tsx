import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Award, Shield, Users, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const cities = [
    'Mumbai', 'Delhi-NCR', 'Bengaluru', 'Pune', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad'
  ];

  const localities = {
    Mumbai: ['Bandra West', 'Andheri East', 'Powai', 'Thane'],
    'Delhi-NCR': ['Gurgaon', 'Noida', 'Dwarka', 'Greater Noida'],
    Bengaluru: ['Whitefield', 'Electronic City', 'Sarjapur', 'Indiranagar'],
    Pune: ['Kharadi', 'Baner', 'Wakad', 'Hinjewadi'],
    Hyderabad: ['Gachibowli', 'HITEC City', 'Kondapur', 'Madhapur'],
    Kolkata: ['New Town', 'Salt Lake', 'Rajarhat', 'Ballygunge'],
  };

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-royal to-emerald rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-heading font-bold">
                Prime<span className="text-royal">Estates</span>
              </span>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              India's most trusted real estate platform with verified RERA listings, 
              instant support, and premium properties across major cities.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-emerald" />
                <span>+91-98765-43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-emerald" />
                <span>info@primeestates.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-emerald" />
                <span>Mumbai, Delhi, Bengaluru & 5 more cities</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-royal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-royal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-royal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-royal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Top Cities */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Top Cities</h3>
            <div className="space-y-3">
              {cities.map((city) => (
                <Link
                  key={city}
                  to={`/properties?city=${city.toLowerCase().replace('-ncr','')}`}
                  className="block text-slate-300 hover:text-emerald transition-colors"
                >
                  Properties in {city}
                </Link>
              ))}
            </div>
          </div>

          {/* Top Localities */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Top Localities</h3>
            <div className="space-y-4">
              {Object.entries(localities).map(([city, areas]) => (
                <div key={city}>
                  <h4 className="font-medium text-slate-200 mb-2">{city}</h4>
                  <div className="space-y-1">
                    {areas.map((area) => (
                      <Link
                        key={area}
                        to={`/properties?city=${city.toLowerCase().replace('-ncr','')}&locality=${area.toLowerCase()}`}
                        className="block text-sm text-slate-400 hover:text-emerald transition-colors"
                      >
                        {area}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-slate-300 hover:text-emerald transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-slate-300 hover:text-emerald transition-colors">
                Our Services
              </Link>
              <Link to="/blog" className="block text-slate-300 hover:text-emerald transition-colors">
                Market Insights
              </Link>
              <Link to="/contact" className="block text-slate-300 hover:text-emerald transition-colors">
                Contact Us
              </Link>
              <Link to="/rera-compliance" className="block text-slate-300 hover:text-emerald transition-colors">
                RERA Compliance
              </Link>
              <Link to="/privacy-policy" className="block text-slate-300 hover:text-emerald transition-colors">
                Privacy Policy
              </Link>
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-slate-200 mb-4">Connect on WhatsApp</h4>
              <a
                href="https://wa.me/918280565127?text=Hi%2C%20I%E2%80%99m%20interested.%20Please%20share%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald text-white px-4 py-2 rounded-lg hover:bg-emerald/90 transition-colors"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/15713/15713434.png" alt="WhatsApp" className="w-4 h-4" />
                <span>Chat Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Shield className="text-emerald" size={32} />
              </div>
              <h4 className="font-semibold mb-1">RERA Verified</h4>
              <p className="text-sm text-slate-400">100% Verified Listings</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="text-emerald" size={32} />
              </div>
              <h4 className="font-semibold mb-1">50,000+ Customers</h4>
              <p className="text-sm text-slate-400">Served Successfully</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Clock className="text-emerald" size={32} />
              </div>
              <h4 className="font-semibold mb-1">24/7 Support</h4>
              <p className="text-sm text-slate-400">Instant Assistance</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award className="text-emerald" size={32} />
              </div>
              <h4 className="font-semibold mb-1">Award Winning</h4>
              <p className="text-sm text-slate-400">Best Property Portal 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © {currentYear} PrimeEstates India. All rights reserved. | 
              <Link to="/privacy-policy" className="ml-1 hover:text-emerald transition-colors">
                Privacy Policy
              </Link> | 
              <Link to="/terms" className="ml-1 hover:text-emerald transition-colors">
                Terms of Use
              </Link>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>CREDAI Member</span>
              <span>NAR India Certified</span>
              <span>ISO 27001:2013</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-700 text-xs text-slate-500">
            <p>
              <strong>RERA Disclaimer:</strong> All projects displayed are RERA registered. 
              RERA registration numbers are provided for each project. 
              Prices may vary and are subject to change without notice. 
              Please verify all details with our sales team before making any investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
