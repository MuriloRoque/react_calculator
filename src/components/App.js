import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/css/App.css';

const App = () => (
  <div id="parent-div">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
