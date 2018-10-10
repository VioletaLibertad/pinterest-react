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