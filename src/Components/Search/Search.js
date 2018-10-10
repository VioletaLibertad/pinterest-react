import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import '../App.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueToSearch: "",
      infoApi: [],
    };

    this.fetchUserInput = this.fetchUserInput.bind(this);
  }

  componentDidMount() {
    let apiUrl = `https://pixabay.com/api/?key=9789378-349f86fade8eace973fbe7eae&q=${this.valueToSearch}&image_type=photo`;

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
    console.log(this.valueToSearch);
    this.componentDidMount();
  }

  render() {
    return (
      <div>
        <form href="javascript:void(0)" className="form-inline search-header my-2 my-lg-0 mx-3">
          <span id="search-btn" className="search-icon-header px-3">
            <i className="fas fa-search" />
          </span>
          <input onChange={this.fetchUserInput} id="search-input" className="form-control search-box mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    );

  }

}

export default Search;

