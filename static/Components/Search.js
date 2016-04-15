import React, {PropTypes, Component} from 'react';
import Body from './Body.js';

class Search extends React.Component {
  render(){
    return (
        <div>
          <form>
            <input className="search" type="text" placeholder="Type in a movie here..."/>
          </form>
          <Body />
        </div>
    );
  }
}

export default Search;
