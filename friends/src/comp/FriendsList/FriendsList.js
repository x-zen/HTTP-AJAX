import React from 'react';
import FriendForm from './FriendForm.js';
import Friend from './Friend';
import './friend.css';

const FriendsList = props => {
  return(
    <div class='list'>
      <div class='friend-form'>
        <FriendForm />
      </div>

      {props.friendsData.map(friend => (
          <Friend friend={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default FriendsList;
