import React from 'react';

var imageDisplay = function(props) {
  return (
    <div>
      <hr/>
      <p className='photos-header'>Photo</p>
      <img src={props.currentImage.url} className='image-display'/>
    </div> 
  )
};

export default imageDisplay;