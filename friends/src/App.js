import React, { Component } from 'react';
import './App.css';
import FriendsList from './comp/FriendsList/FriendsList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
      </div>
    );
  }
}

export default App;
