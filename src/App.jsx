import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
      
      <div className="App">
        <div className="shape shape--red"></div>
        <div className="shape shape--red"></div>
    </div>
      <div className="App">
        <div className="shape shape--blue"></div>
        <div className="shape shape--blue"></div>
      </div>

      <div className="App">
        <div className="shape shape--green"></div>
        <div className="shape shape--green"></div>
      </div>
      </>
    );
  }
}

export default App;
