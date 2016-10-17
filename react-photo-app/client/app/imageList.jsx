import React from 'react';
import ImageListEntry from './imageListEntry.jsx';


var imageList = function(props) {
  return (
    <div>
      <hr />
      <p className='photos-header'>Album</p>
      {props.list.map((image, i) => 
        <ImageListEntry image={image} changeImage={props.changeImage} key={i} /> 
      )}
    </div> 
  )
};

export default imageList;