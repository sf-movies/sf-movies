import React, {PropTypes, Component} from 'react';

class Search extends React.Component {
  render(){
    return (
        <div>
          <form>
            <input className="search" type="text" placeholder="Type in a movie here..."/>
          </form>
        </div>
    );
  }
}

export default Search;
