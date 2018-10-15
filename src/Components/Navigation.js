import React from 'react';
import logo from './img/logo.png';
import Search from './Search/Search';
import './App.css';

const Navigation = () => {
  return (
    // Navbar 
    <nav className="navbar sticky-top bg-custom">
      <button className="logo-pinterest" type="button">
        <img className="icon-pinterest" src={logo} width="30" height="30" alt="icon-pinterest" />
      </button>
      {/* Search Input */} 
      <Search />
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


export default Navigation;