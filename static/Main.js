import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Components/Search.js';
import Navbar from './Components/Navbar.js';

class Main extends React.Component{
  render() {
    return (
      <div>
        <Navbar />
        <Search />
      </div>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById("main"));
