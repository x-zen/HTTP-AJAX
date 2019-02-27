import React from 'react';
//import './friend.css';
import Friend from './Friend';

const FriendsList = props => {
  return(
    <div>
      {props.friends.map(friend => (
          <Friend friend={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default FriendsList;
