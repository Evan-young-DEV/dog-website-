import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dogs from './components/Dogs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Dogs />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
