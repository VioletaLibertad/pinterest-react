import React, { Component } from 'react';
import '../App.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      valueToSearch: '',
      infoApi: [],
    };
  }

  componentDidMount() {
    let apiUrl = `https://pixabay.com/api/?key=9789378-349f86fade8eace973fbe7eae&q=${this.valueToSearch}&image_type=photo`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(imgData => {
      console.log(imgData);
    })

  }
  
  fetchUserInput(event) {
    this.valueToSearch = event.target.value;
    console.log(this.valueToSearch);
  }

  render() {
    return (
      <form href="javascript:void(0)" className="form-inline search-header my-2 my-lg-0 mx-3">
        <span id="search-btn" className="search-icon-header px-3">
          <i className="fas fa-search" />
        </span>
        <input onChange={this.fetchUserInput.bind(this)} id="search-input" className="form-control search-box mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
    );
  }
};

export default Search;