import React from 'react';
import Body from './Body.js';
import axios from 'axios';

class Search extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    var title = e.target.value;

    axios.post('/movie', {
      movie: title
    })
    .then(function(response) {
      console.log("Success!");
    })
    .catch(function(response) {
      console.log("Looks like we have an error!")
    })
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
