import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './comp/FriendsList/FriendsList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => res.json())
      .then(data => this.setState({ friendsData: data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">My Friends</h1>

        <div class='list-box'>
          <FriendsList friendsData={this.state.friendsData} />
        </div>
      </div>
    );
  }
}

export default App;
