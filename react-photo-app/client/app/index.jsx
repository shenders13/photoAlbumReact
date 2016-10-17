import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello.jsx';
import Fields from './fields.jsx';
import ImageInfo from './imageInfo.jsx';
import ImagePanel from './imagePanel.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageList: window.data,
      currentImage: window.data[0]
    };
  }

  changeImage(image) {
    this.setState({
      currentImage: image
    });
  }

  addImage(imageObj){
    console.log('inside add image function: ', imageObj);
    console.log('this.state.imageList inside of addImage: ', this.state.imageList);
    var prevId = window.data.imageList[imageList.length-1].id
    var newImg = {
        id: prevId + 1, 
        url: imageObj.url,
        title: imageObj.title,
        rating: imageObj.rating
    }
    this.state.imageList.push(newImg);
    window.data = this.state.imageList;
    console.log('this.state.imageList after adding: ', this.state.imageList);
    // this.setState(imageObj)({
    //   imageList: window.data.push({
    //     id:5, 
    //     url:imageObj.url,
    //     title: imageObj.title,
    //     rating: imageObj.rating
    //   })
    // });
  }

  render() {
    return (
      <div className='container'>
        <div className='col-xs-12'>
          <Fields addImage={this.addImage.bind(this)}/>
        </div>
        <div className='col-xs-6'>
          <ImageInfo
            imageList={this.state.imageList} 
            currentImage={this.state.currentImage}
            changeImage={this.changeImage.bind(this)}
          />
        </div>
        <div className='col-xs-6'>
          <ImagePanel 
            currentImage={this.state.currentImage}
          />
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));