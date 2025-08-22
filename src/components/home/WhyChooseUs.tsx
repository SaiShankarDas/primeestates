import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Clock, Search, Award, Users, HeadphonesIcon, MapPin } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: 'RERA Verified Listings',
      description: '100% verified properties with valid RERA registration numbers for complete transparency.',
      color: 'emerald'
    },
    {
      icon: 'whatsapp',
      title: 'Instant WhatsApp Support',
      description: 'Connect with our property experts instantly via WhatsApp for quick assistance.',
      color: 'royal'
    },
    {
      icon: Clock,
      title: '24/7 Customer Service',
      description: 'Round-the-clock support for all your property queries and site visit bookings.',
      color: 'gold'
    },
    {
      icon: Search,
      title: 'AI-Powered Search',
      description: 'Smart property discovery with advanced filters and personalized recommendations.',
      color: 'navy'
    },
    {
      icon: MapPin,
      title: 'Virtual Property Tours',
      description: 'Experience properties from home with 360° virtual tours and video walkthroughs.',
      color: 'emerald'
    },
    {
      icon: Users,
      title: '50,000+ Happy Customers',
      description: 'Join thousands of satisfied customers who found their dream homes with us.',
      color: 'royal'
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: 'Recognized as "Best Property Portal 2024" by Real Estate Excellence Awards.',
      color: 'gold'
    },
    {
      icon: HeadphonesIcon,
      title: 'Expert Consultation',
      description: 'Get professional guidance on property investment, home loans, and legal matters.',
      color: 'navy'
    }
  ];

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

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: 'text-emerald bg-emerald/10 group-hover:bg-emerald group-hover:text-white',
      royal: 'text-royal bg-royal/10 group-hover:bg-royal group-hover:text-white',
      gold: 'text-gold bg-gold/10 group-hover:bg-gold group-hover:text-white',
      navy: 'text-navy bg-navy/10 group-hover:bg-navy group-hover:text-white'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6"
          >
            Why Choose <span className="gradient-text">PrimeEstates</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Experience the difference with India's most trusted real estate platform. 
            We're committed to making your property journey seamless and successful.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(feature.color)}`}>
                {typeof feature.icon === 'string' ? (
                  <img src="https://cdn-icons-png.flaticon.com/512/15713/15713434.png" alt="WhatsApp" className="w-7 h-7" />
                ) : (
                  <feature.icon size={28} />
                )}
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-navy mb-3 group-hover:text-royal transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4">
            <a
              href="https://wa.me/918280565127?text=Hi%2C%20I%E2%80%99m%20interested.%20Please%20share%20more%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/15713/15713434.png" alt="WhatsApp" className="w-5 h-5" />
              <span>Get Instant Support</span>
            </a>
            
            <button
              onClick={() => navigate('/properties')}
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Search size={20} />
              <span>Browse Properties</span>
            </button>
          </div>
        </motion.div>

        {/* Bottom Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-slate-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald to-royal rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-navy mb-2">CREDAI Member</h4>
              <p className="text-sm text-slate-600">Certified real estate platform</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-royal to-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-navy mb-2">ISO Certified</h4>
              <p className="text-sm text-slate-600">Quality management system</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gold to-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-navy mb-2">50K+ Customers</h4>
              <p className="text-sm text-slate-600">Trusted by thousands</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald to-royal rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-navy mb-2">15+ Years</h4>
              <p className="text-sm text-slate-600">Industry experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
