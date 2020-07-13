import React from 'react';
import '../styles/Button.css';

class Button extends React.Component {
  constructor(){
    super()
  }

  render() {
    return(
      <div id='button'>
        <h1>{this.props.name}</h1>
      </div>
    )};
}

export default Button;