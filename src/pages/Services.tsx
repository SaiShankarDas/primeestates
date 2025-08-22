import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Home, FileText, Banknote } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { icon: Home, title: "Property Search & Site Visits", description: "Access to thousands of verified listings and free, guided site visits to properties that match your criteria." },
    { icon: Handshake, title: "Negotiation Assistance", description: "Our expert negotiators work on your behalf to secure the best possible price and terms for your property." },
    { icon: FileText, title: "Legal & Documentation Support", description: "Seamless handling of all legal paperwork, from agreement to sale deed, ensuring a hassle-free transaction." },
    { icon: Banknote, title: "Home Loan Assistance", description: "We partner with leading banks to help you get pre-approved for home loans with competitive interest rates." }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-navy">Our Services</h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            End-to-end solutions to make your property buying experience smooth, transparent, and rewarding.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-slate-50 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="inline-block p-4 bg-royal/10 text-royal rounded-xl mb-6">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
