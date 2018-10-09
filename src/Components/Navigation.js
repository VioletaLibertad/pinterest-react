import React from 'react';
import logo from './img/logo.png';
import './App.css';

const Navigation = () => {
  return (
    // Navbar 
    <nav className="navbar sticky-top bg-custom">
      <a href="/">
        <img className="icon-pinterest" src={logo} width="30" height="30" alt="icon-pinterest" />
      </a>
      {/* Search Input */} 
      <form href="javascript:void(0)" className="form-inline search-header my-2 my-lg-0 mx-3">
        <span id="search-btn" onclick="window.controller.getSearchInput()" className="search-icon-header px-3">
          <i className="fas fa-search" />
        </span>
        <input id="search-input" className="form-control searchBox mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
      {/* Navbar buttons */} 
      <a className="btn-header px-3" id="home-btn" href="/">Home</a>
      <a className="btn-header px-3" href="/">Following</a>
      <a className="btn-header px-3" href="/">Explore</a>
      <a className="btn-header px-3" href="/">
        <i className="far fa-user-circle icon-header pr-2" />
          Violeta
      </a>
      <a className="btn-header px-3" href="/"><i className="fas fa-comment-dots icon-header" /></a>
      <a className="btn-header px-3" href="/"><i className="fas fa-bell icon-header" /></a>
      <a className="btn-header px-3" href="/"><i className="fas fa-ellipsis-h icon-header" /></a>
    </nav>
  );
};

export default Navigation;