import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueToSearch: "", 
    };
  }

  fetchUserInput(event) {
    this.setState({
      valueToSearch: event.target.value
    }); 
    console.log(this.state.valueToSearch);
  }

  submitHandler(evt) {
    evt.preventDefault();
    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
    this.props.handlerFromParent(this.state.valueToSearch);
    
    this.setState({
      valueToSearch: ''
    });
  }

  render() {
    return (
      // Navbar 
      <nav className="navbar sticky-top bg-custom">
        <button className="logo-pinterest" type="button">
          <img className="icon-pinterest" src={logo} width="30" height="30" alt="icon-pinterest" />
        </button>
        {/* Search Input */} 
        <div>
          <form onSubmit={evt => this.submitHandler(evt)} href="javascript:void(0)" className="form-inline search-header my-2 my-lg-0 mx-3">
            <span id="search-btn" className="search-icon-header px-3">
              <i className="fas fa-search" />
            </span>
            <input value={this.state.valueToSearch} onChange={event => this.fetchUserInput(event)} id="search-input" className="form-control search-box mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
        {/* Navbar buttons */} 
        <button className="btn-header px-3" id="home-btn" type="button">Home</button>
        <button className="btn-header px-3" type="button">Following</button>
        <button className="btn-header px-3" type="button">Explore</button>
        <button className="btn-header px-3" type="button">
          <i className="far fa-user-circle icon-header pr-2" />
            Violeta
        </button>
        <button className="btn-header px-3" type="button"><i className="fas fa-comment-dots icon-header" /></button>
        <button className="btn-header px-3" type="button"><i className="fas fa-bell icon-header" /></button>
        <button className="btn-header px-3" type="button"><i className="fas fa-ellipsis-h icon-header" /></button>
      </nav>
    );
  }
  
}


export default Navigation;