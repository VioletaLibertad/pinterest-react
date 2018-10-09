import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        <h1>Hola mundo</h1>
      </div>
      <Footer />
    </div>
  );
};

export default App;
