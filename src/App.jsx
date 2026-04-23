import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PMSuryaGhar from './components/PMSuryaGhar';
import Services from './components/Services';
import ProductSupplies from './components/ProductSupplies';
import Stats from './components/Stats';
import Calculator from './components/Calculator';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Partners from './components/Partners';
import ReviewsTicker from './components/ReviewsTicker';
import Team from './components/Team';
import Footer from './components/Footer';

import ScrollIndicator from './components/ScrollIndicator';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollIndicator />
      <Navbar />
      
      <div id="hero">
        <Hero />
      </div>
      
      <div id="partners">
        <Partners />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="pmsuryaghar">
        <PMSuryaGhar />
      </div>

      <div id="stats">
        <Stats />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="products">
        <ProductSupplies />
      </div>
      
      <div id="whychooseus">
        <WhyChooseUs />
      </div>
      
      <div id="gallery">
        <Gallery />
      </div>
      
      <div id="calculator">
        <Calculator />
      </div>

      <ReviewsTicker />
      
      <div id="team">
        <Team />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
