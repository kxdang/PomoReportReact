import React, { Component } from 'react';

import './App.css';
import PomodoroForm from './PomodoroForm';

class App extends Component {

  render() {
    return (<div className="App" >
      <h1>Pomodoro Report Generator</h1>
      <PomodoroForm />
    </div>)
  }


}

export default App;
