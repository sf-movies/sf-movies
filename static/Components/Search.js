import React from 'react';
import Body from './Body.js';

class Search extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  render() {
    return (
        <div>
          <form>
            <input onChange={this.handleSubmit}
            className="search" type="text"
            placeholder="Type in a movie here..."/>
          </form>
          <Body />
        </div>

    )
  }
};

export default Search;
