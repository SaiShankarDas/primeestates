import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';
import ChatbotLauncher from './components/chatbot/ChatbotLauncher';
import Chatbot from './components/chatbot/Chatbot';
import Loader from './components/common/Loader';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Properties = lazy(() => import('./pages/Properties'));
const PropertyDetails = lazy(() => import('./pages/PropertyDetails'));
const Cities = lazy(() => import('./pages/Cities'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Saved = lazy(() => import('./pages/Saved'));
const Compare = lazy(() => import('./pages/Compare'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Buy = lazy(() => import('./pages/Buy'));
const Rent = lazy(() => import('./pages/Rent'));
const Commercial = lazy(() => import('./pages/Commercial'));
const ListProperty = lazy(() => import('./pages/ListProperty'));

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20 lg:pt-24">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/rent" element={<Rent />} />
              <Route path="/commercial" element={<Commercial />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/list-property" element={<ListProperty />} />
              
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/:propertyId" element={<PropertyDetails />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/services" element={<Services />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/compare" element={<Compare />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
        <ChatbotLauncher onClick={() => setIsChatbotOpen(true)} />
        <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
