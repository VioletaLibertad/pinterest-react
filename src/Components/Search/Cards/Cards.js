import React, { Component } from 'react';
import Masonry from 'react-mason';

class Cards extends Component {
  render() {
    return(
      <div>
        <Masonry>
        {
          this.props.pictures.map(pic => 
            <div key={pic.results}>
              <img src={pic.previewURL} alt={pic.tags} />
            </div>)
        }
      </Masonry>
      </div>
    );
  }
};

export default Cards;

/*
  <div key={pic.results}>
            <img src={pic.previewURL} alt={pic.tags} />
          </div>

  <Masonry>
          {
            this.props.pictures.map(pic => {
              <div key={pic.results}>
                <img src={pic.previewURL} alt={pic.tags} />
              </div>
            })}
        </Masonry>
*/