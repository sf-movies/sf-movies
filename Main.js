import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Components/Search.js';
import Navbar from './Components/Navbar.js';
import Body from './Components/Body.js';

class Main extends React.Component{
  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <Body />
      </div>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById("main"));
