import React from 'react';

var imageListEntry = function(props) {
  return (
    <div>
      <div className='image-row'>
        <div className='image-title'>{props.image.title}</div>
      </div>
    </div> 
  )
};

export default imageListEntry;