import React from 'react';

export default class Fields extends React.Component {
  render () {
    console.log('props in Fields component: ', this.props.addImage);
    var context = this;

    return (
      <div>
        <hr />
        <form onSubmit={function(event){event.preventDefault(); context.props.addImage(this.refs)}}>
          <input className='url-input' type='text' placeholder='Enter URL of new image' ref='url'/>
          <input className='url-input second-input' type='text' placeholder='Enter TITLE' ref='title'/>
          <input className='url-input second-input' type='text' placeholder='Enter RATING' ref='rating'/>
          <button type='submit' className='btn btn-primary sub-btn'> Submit</button>
        </form>
      </div>
    );
  }
};
