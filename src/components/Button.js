import React from 'react';
import '../styles/Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={this.props.className}>{this.props.name}</button>
    );
  }
}

export default Button;
