import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld text='Hello World, passed in as props to the HW component.'/>
        <HelloWorld text='Hello World, passed in as props to the HW component.'/>

        <p> App Component!</p>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));