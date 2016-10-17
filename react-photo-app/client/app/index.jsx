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

  addImage(image){
    console.log('inside add image function: ', image);
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