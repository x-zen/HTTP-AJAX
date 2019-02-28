import React from 'react';

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  postMessage = e => {
    e.preventDefault();

  };

  render() {
    return(
      <div>
        <h2>Add A Friend!</h2>

        <form onSubmit={this.postMessage}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            onChange={this.handleChange}
            value={this.state.newFriend.name}
          />
          <input
            type='text'
            name='age'
            placeholder='Age'
            onChange={this.handleChange}
            value={this.state.newFriend.age}
          />
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={this.handleChange}
            value={this.state.newFriend.email}
          />
          <button className="submit-btn" type="submit">
            POST
          </button>
        </form>
      </div>
    );
  };
}

export default FriendForm;
