import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import Home from './pages/Home';
import Careers from './pages/Careers';
import InternshipNotification from './components/InternshipNotification';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollIndicator />
        <Navbar />
        <InternshipNotification />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
