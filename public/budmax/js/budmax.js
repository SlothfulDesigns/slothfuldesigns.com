var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({

  render: function() {
    return React.createElement("h1", null, "Hello World!");
  },

});

ReactDOM.render(React.createElement("h1", null, "Hello World!"),
  document.getElementById('main')
);
