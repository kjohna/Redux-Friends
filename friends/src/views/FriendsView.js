import React from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../store/actions';

import FriendsList from '../components/FriendsList';
import FriendForm from '../components/FriendForm';

class FriendsView extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        Friends View
        <FriendsList friends={this.props.friends} />
        <FriendForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    error: state.error
  }
}

export default connect (
  mapStateToProps,
  getFriends
)(FriendsView);