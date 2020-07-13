import React from 'react';
import '../styles/ButtonPanel.css';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(){
    super()
  }

  render() {
    return(
      <div id='button-panel'>
        <Button name='1' />
        <Button name='2' />
        <Button name='3' />
        <Button name='4' />
        <Button name='5' />
        <Button name='6' />
        <Button name='7' />
        <Button name='8' />
        <Button name='9' />
      </div>
    )};
}

export default ButtonPanel;