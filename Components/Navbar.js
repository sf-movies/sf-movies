import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h1 className="title">SF Movie Map</h1>
        <h2 style={{width: '100px'}}className="about">About</h2>
      </div>
    )
  }
};

export default Navbar;
