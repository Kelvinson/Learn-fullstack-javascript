import React from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';


// use of ReactDOM.create(): the first parameter is what element
// to render and the second parameter is where to render the
// element to.

//usage for React.createElement: html element tag, tag attributes, children for the tag
// const color = Math.random() > 0.5 ? 'green' : 'red';
const App = (props) => {
  return (
    <h2 className="text-center">
      {props.headerMessage}
    </h2>
  );
};

// ReactDOM.render(
//   React.createElement('h2',null,'hello react'),
//   document.getElementById('root')
// );
//

App.PropTypes = {
  headerMessage: React.PropTypes.string
};


ReactDOM.render(
  <App headerMessage={4} />,
  document.getElementById('root')
);
