import React, {Component} from 'react';
import {Report} from './components/screens';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="sideMenu">
          <Report />
        </div>
        <div className="mainScreen" />
      </div>
    );
  }
}

export default App;
