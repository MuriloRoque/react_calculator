import React from 'react';
import '../styles/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return(
      <div id='parent-div'>
        <Display result='0' />
        <ButtonPanel />
      </div>
    )};
}

export default App;
