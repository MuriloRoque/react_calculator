import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/css/App.css';
import calculations from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    const calculator = calculations.calculate({ total, next, operation }, buttonName);
    this.setState(calculator);
  }

  render() {
    return (
      <div id="parent-div">
        <Display result={this.result} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
