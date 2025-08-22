import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderFC: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Buy', href: '/buy' },
    { name: 'Rent', href: '/rent' },
    { name: 'Commercial', href: '/commercial' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <Link
      to={href}
      className={`font-medium text-[15px] px-4 py-2 rounded-lg transition-all duration-300 relative ${
        isActive(href)
          ? 'font-bold'
          : ''
      } ${
        isScrolled || isMenuOpen
          ? 'text-slate-800 hover:bg-hover-gray'
          : 'text-white hover:bg-white/20'
      }`}
      style={!isScrolled && !isMenuOpen ? { textShadow: '0 2px 8px rgba(0,0,0,0.7)' } : {}}
    >
      {children}
      {isActive(href) && (
        <motion.div
          layoutId="active-nav-underline"
          className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${isScrolled ? 'bg-royal' : 'bg-white'}`}
        />
      )}
    </Link>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="https://iili.io/K9MEhZX.png" alt="PrimeEstates Logo" className="w-10 h-10" />
            <span 
              className={`text-2xl font-heading font-bold transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}
              style={!isScrolled ? { textShadow: '0 2px 8px rgba(0,0,0,0.7)' } : {}}
            >
              Prime<span className="text-royal">Estates</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5">
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
            <motion.button
              onClick={() => navigate('/list-property')}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-royal to-cta-green text-white font-medium rounded-full shadow-lg"
            >
              List Your Property
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-slate-700 hover:text-royal'
                : 'text-white hover:text-royal'
            }`}
             style={!isScrolled ? { textShadow: '0 1px 4px rgba(0,0,0,0.5)' } : {}}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="px-6 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 text-lg font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-royal font-bold'
                      : 'text-slate-700 hover:text-royal'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => {
                    navigate('/list-property');
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-royal to-cta-green text-white font-medium rounded-full shadow-lg"
                >
                  List Your Property
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const Header = React.memo(HeaderFC);
export default Header;
