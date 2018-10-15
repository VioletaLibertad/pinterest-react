import React, { Component } from 'react';
import Cards from './Cards/Cards';
import '../App.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueToSearch: "", 
      pictures: []
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

  fetchUserInput(event) {
    this.setState({
      valueToSearch: event.target.value
    }); 
    console.log(this.state.valueToSearch);
    this.componentDidMount();
  }

  render() {
    return (
      <div>
        <form href="javascript:void(0)" className="form-inline search-header my-2 my-lg-0 mx-3">
          <span id="search-btn" className="search-icon-header px-3">
            <i className="fas fa-search" />
          </span>
          <input value={this.state.valueToSearch} onChange={event => this.fetchUserInput(event)} id="search-input" className="form-control search-box mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
        <Cards pictures={(this.state.pictures)} />
      </div>
    );
  }
}

export default Search;

