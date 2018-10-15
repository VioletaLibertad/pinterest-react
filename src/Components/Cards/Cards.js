import React from 'react';
import Masonry from 'react-mason';

const Cards = (props) => {
  return(
    <div>
      <Masonry>
        {props.pictures}
      </Masonry>
    </div>
  );
};

export default Cards;

/*
  <div key={pic.results}>
            <img src={pic.previewURL} alt={pic.tags} />
          </div>
*/