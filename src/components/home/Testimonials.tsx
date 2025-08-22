import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      location: 'Mumbai, Maharashtra',
      property: '3 BHK Apartment in Bandra West',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      text: 'PrimeEstates made my home buying journey incredibly smooth. The RERA verification gave me complete confidence, and the WhatsApp support was instant. Found my dream home in just 2 weeks!',
      purchaseAmount: '₹2.1 Cr'
    },
    {
      id: 2,
      name: 'Priya Patel',
      location: 'Bengaluru, Karnataka',
      property: '2 BHK Villa in Whitefield',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9f58bb3?w=150&h=150&fit=crop&crop=face',
      text: 'Exceptional service and genuine listings. The virtual tours saved me multiple site visits. The team helped with home loan processing too. Highly recommend for anyone looking in Bengaluru.',
      purchaseAmount: '₹1.8 Cr'
    },
    {
      id: 3,
      name: 'Amit Singh',
      location: 'Delhi NCR, Delhi',
      property: '4 BHK Penthouse in Gurgaon',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      text: 'Professional team with excellent market knowledge. They understood my requirements perfectly and showed me only relevant properties. The documentation support was outstanding.',
      purchaseAmount: '₹3.5 Cr'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      location: 'Hyderabad, Telangana',
      property: '3 BHK Apartment in Gachibowli',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      text: 'Found the perfect investment property through PrimeEstates. Their market insights and ROI analysis helped me make an informed decision. Great experience overall!',
      purchaseAmount: '₹1.2 Cr'
    },
    {
      id: 5,
      name: 'Vikram Mehta',
      location: 'Pune, Maharashtra',
      property: '2 BHK Apartment in Kharadi',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      text: 'As a first-time home buyer, I was nervous about the process. PrimeEstates guided me through every step, from property selection to loan approval. Fantastic support!',
      purchaseAmount: '₹95 L'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-gold fill-current' : 'text-slate-300'}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy via-slate-800 to-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            What Our <span className="gradient-text">Customers Say</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Join thousands of happy homeowners who found their perfect property with PrimeEstates. 
            Real stories from real customers across India.
          </motion.p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-emerald w-8'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative h-80 md:h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Testimonial Content */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-1 mb-4">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>

                      <div className="relative">
                        <Quote size={32} className="text-emerald/30 absolute -top-2 -left-2" />
                        <blockquote className="text-lg md:text-xl leading-relaxed pl-8 italic">
                          "{testimonials[currentIndex].text}"
                        </blockquote>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xl font-heading font-semibold">
                          {testimonials[currentIndex].name}
                        </h4>
                        
                        <div className="flex items-center space-x-2 text-slate-300">
                          <MapPin size={14} />
                          <span>{testimonials[currentIndex].location}</span>
                        </div>
                        
                        <div className="text-emerald font-medium">
                          Purchased: {testimonials[currentIndex].property}
                        </div>
                        
                        <div className="text-gold font-semibold">
                          Value: {testimonials[currentIndex].purchaseAmount}
                        </div>
                      </div>
                    </div>

                    {/* Customer Image */}
                    <div className="flex justify-center lg:justify-end">
                      <div className="relative">
                        <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl">
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-emerald to-royal rounded-full opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-gold to-emerald rounded-full opacity-30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-slate-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald mb-2">4.9★</div>
              <div className="text-slate-300">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-royal mb-2">50,000+</div>
              <div className="text-slate-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">₹5000+ Cr</div>
              <div className="text-slate-300">Properties Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald mb-2">15+ Years</div>
              <div className="text-slate-300">Industry Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
