import React from 'react';

const FriendForm = props => {
  return(
    <div>
      <h2>Add A Friend!</h2>

      <form>
        <input type='text' name='name' placeholder='Name' />
        <input type='text' name='age' placeholder='Age' />
        <input type='text' name='email' placeholder='Email' />
        <input type='submit' value='Add Friend!' />
      </form>
    </div>
  );
};

export default FriendForm;
