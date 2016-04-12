import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar.js';

class Main extends React.Component{
  render() {
    return (
      <div>
        <Navbar />
      </div>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById("main"));
