import React from 'react';
import '../styles/Display.css';

class Display extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div id='display'>
        <h1>{this.props.result}</h1>
      </div>
    )};
}

export default Display;