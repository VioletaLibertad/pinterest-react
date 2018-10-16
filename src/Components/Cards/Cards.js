import React, { Component } from 'react';
import Masonry from 'react-mason';

class Cards extends Component {
  render() {
    return(
      <div>
        <Masonry>
        {
          this.props.pictures.map(pic => 
            <div className="container">
              <div key={pic.results}>
               <img src={pic.webformatURL} alt={pic.tags} />
              </div>
            </div>)
        }
      </Masonry>
      </div>
    );
  }
};

export default Cards;