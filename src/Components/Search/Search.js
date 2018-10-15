import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import '../App.css';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let apiUrl = `https://pixabay.com/api/?key=9789378-349f86fade8eace973fbe7eae&q=${this.state.valueToSearch}&image_type=photo`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(imgData => {
      let pictures = imgData.hits.map((pic) => {
        return(
          <div key={pic.results}>
            <img src={pic.previewURL} alt={pic.tags} />
          </div>
        )
      });
      this.setState({pictures: pictures});
      console.log("state", this.state.pictures);
    })

  }
  
  fetchUserInput(event) {
    this.valueToSearch = event.target.value;
    console.log(this.state.valueToSearch);
    this.componentDidMount();
  }

  render() {
    return (
      <div>Holo</div>
    );

  }

}

export default Search;

