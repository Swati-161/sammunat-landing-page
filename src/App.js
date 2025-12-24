import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Benefits />
      <Projects />
      <Services />
      <WhyChooseUs />
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;