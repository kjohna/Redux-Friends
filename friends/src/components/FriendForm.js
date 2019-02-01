import React from 'react';

const FriendForm = props => {
  return (
    <form
      onSubmit={e => props.addFriend(e)}
    >
      FriendForm:
      <input 
        type="text" 
        name="name" 
        id="name" 
        placeholder="Friend name"
        value={props.friendFormData.name}
        onChange={props.handleInput} 
      />
      <input 
        type="number"
        name="age"
        id="age"
        placeholder="Friend age"
        value={props.friendFormData.age}
        onChange={props.handleInput} 
      />
      <input 
        type="email"
        name="email"
        id="email"
        placeholder="Friend email"
        value={props.friendFormData.email}
        onChange={props.handleInput} 
      />
      <button type="submit">Add New Friend!</button>
    </form>
  );
}

export default FriendForm;