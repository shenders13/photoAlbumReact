import React from 'react';
import ImageListEntry from './imageListEntry.jsx';

var Favourites = function(props) {

  var generateList = function () {
    return props.list.map((image) => 
      (image.rating > 3) ? <ImageListEntry image={image} /> : ''
    )
  };
  return (
    <div>
      <hr />
      <p className='photos-header'>Favourites</p>
      {generateList()}
    </div> 
  )
};

export default Favourites;