import React from 'react';

import Friend from './Friend';

const FriendsList = props => {
  const friendsList = props.friends.map(friend => 
    <Friend key={friend.id} friend={friend} />
  );

  return(
    <div>
      Friends List:
      {friendsList}
    </div>
  );
}

export default FriendsList;