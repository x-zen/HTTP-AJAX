import React from 'react';

const Friend = props => {
  return (
    <div class='item'>
      <h2>{props.friend.name}</h2>
      <h4>Age:{props.friend.age}</h4>
      <h4>E-Mail:{props.friend.email}</h4>
    </div>
  );
};

export default Friend;
