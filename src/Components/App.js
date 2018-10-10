import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        <Cards picture="picture" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
