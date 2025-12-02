import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Science from './components/Science';
import Specs from './components/Specs';
import Dogs from './components/Dogs';
import Reviews from './components/Reviews';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Pricing />
      <Science />
      <Specs />
      <Dogs />
      <Reviews />
      <Guarantee />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
