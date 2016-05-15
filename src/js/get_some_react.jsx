var React = require('react');
var ReactDOM = require('react-dom');

var Stank = React.createClass({
  render: function() {
    return (
      <div>
        <h1>I am React.</h1>
      </div>
    )
  }
});

ReactDOM.render(<Stank />, document.getElementById('attachment'));
