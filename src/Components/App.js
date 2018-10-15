import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Search from './Search/Search';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueToSearch: "",
      pictures: [],
    };

    this.fetchUserInput = this.fetchUserInput.bind(this);
  }

  render() {
    return (
      <div>
        <Navigation />
        <Search />
        <Cards picture="picture" />
        <Footer />
      </div>
    );
  }
};

export default App;
