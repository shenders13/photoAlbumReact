import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello.jsx';
import Fields from './fields.jsx';
import ImageInfo from './imageInfo.jsx';
import ImagePanel from './imagePanel.jsx';

if (typeof window !== 'undefined') {
    window.React = React;
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageList: window.data,
      currentImage: window.data[0]
    };
  }

  render() {
    return (
      <div className='container'>
        <div className='col-xs-12'>
          <Fields text='Fields Text'/>
        </div>
        <div className='col-xs-6'>
          <ImageInfo
            imageList={this.state.imageList} 
            currentImage={this.state.currentImage}
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