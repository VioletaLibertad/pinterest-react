import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Search from './Search/Search';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div>
      <Navigation />
      <Search />
      <Footer />
    </div>
  );
};

export default App;
