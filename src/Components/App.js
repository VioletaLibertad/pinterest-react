import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueToSearch: "", 
      pictures: [],
    };
  }

  componentDidMount() {
    let apiUrl = `https://pixabay.com/api/?key=9789378-349f86fade8eace973fbe7eae&q=${this.state.valueToSearch}&image_type=photo`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(imgData => {
      let pictures = imgData.hits;
      this.setState({pictures: pictures});
      console.log("state", this.state.pictures);
    })

  }

  handleData(data) {
    this.setState({
      valueToSearch: data
    });
  }

  render() {
    return (
      <div>
        <Navigation handlerFromParent={data => this.handleData(data)} />
        <Cards pictures={(this.state.pictures)} />
        <Footer />
      </div>
    );
  }
  
};

export default App;
