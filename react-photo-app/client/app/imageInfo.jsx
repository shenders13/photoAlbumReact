import React from 'react';
import ImageList from './imageList.jsx'
import Favourites from './favourites.jsx'


var imageInfo = function(props) {
  return (
    <div>
      <ImageList list={props.imageList} changeImage={props.changeImage} />
      <Favourites list={props.imageList} changeImage={props.changeImage}/>
      <br />
    </div>
  )
};

export default imageInfo;