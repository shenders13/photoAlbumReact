import React from 'react';

export default class Fields extends React.Component {
  render () {
    return (
      <div>
        <hr />
        <input className='url-input' type='text' placeholder='Enter URL of new image'/>
        <input className='url-input second-input' type='text' placeholder='Enter TITLE'/>
        <button type='submit' className='btn btn-primary sub-btn'> Submit</button>
      </div>
    );
  }
};
