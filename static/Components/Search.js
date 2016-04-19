var React = require('react');

var Search = React.createClass({

  render: function() {
    return (
        <div>
          <form>
            <input onChange={bind(this)}
            className="search" type="text"
            placeholder="Type in a movie here..."/>
          </form>
        </div>
    )
  }
});

export default Search;
