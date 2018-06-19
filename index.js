import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Intro extends React.Component{
	render() {
    return (
      <h1 className="title">
        {this.props.value}
      </h1>
    );
  }
}

ReactDOM.render(
  <Intro name="Math Decision Tree" />
);