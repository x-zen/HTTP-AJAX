import React from 'react';

const Friend = props => {
  return (
    <div class='item'>
      <h2>{props.friend.name}</h2>
      <h4>{props.friend.age}</h4>
      <a>{props.friend.email}</a>
    </div>
  );
};

export default Friend;
