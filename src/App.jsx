import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
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

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <Partners />

      <div id="about">
        <About />
      </div>
      <Stats />

      <div id="services">
        <Services />
      </div>

      <div id="products">
        <ProductSupplies />
      </div>
      
      <WhyChooseUs />
      
      <div id="gallery">
        <Gallery />
      </div>
      
      <Calculator />
      <ReviewsTicker />
      
      <Team />
      
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
