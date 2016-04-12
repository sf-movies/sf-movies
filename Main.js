import React from 'react';
import ReactDOM from 'react-dom';
import Body from './Components/Body.js';
import Navbar from './Components/Navbar.js';

class Main extends React.Component{
  render() {
    return (
      <div>
        <Navbar />
        <Body />
      </div>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById("main"));
