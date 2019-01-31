import React from 'react';
import { connect } from 'react-redux';

import FriendsList from '../components/FriendsList';
import FriendForm from '../components/FriendForm';

const FriendsView = props => {

  return (
    <div>
      Friends View
      <FriendsList friends={props.friends} />
      <FriendForm />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    error: state.error
  }
}

export default connect (
  mapStateToProps,
  null // put action creators here
)(FriendsView);