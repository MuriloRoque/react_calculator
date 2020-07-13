import React from 'react';
import '../styles/Display.css';

class Display extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div id='display'>
        <p>{this.props.result}</p>
      </div>
    )};
}

export default Display;