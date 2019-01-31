import React from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../store/actions';

import FriendsList from '../components/FriendsList';
import FriendForm from '../components/FriendForm';

const emptyFriendFormData = {
  name: '',
  age: '',
  email: '' 
  // don't include id, this will prevent new id from being created when a friend is added
};

class FriendsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: null,
      error: '',
      friendFormData: emptyFriendFormData,
      isUpdating: false
    }
  };
 

  componentDidMount() {

  }

  handleInput = e => {
    e.persist();
    // console.log(this.state.friendFormData);
    this.setState( prevState => {
      return {
        friendFormData: {
          ...prevState.friendFormData,
          [e.target.name]: e.target.value
        }
      }
    });
  }

  addFriend = (e, friendData) => {
    e.preventDefault();
    console.log("Add Friend: ", friendData);
  }

  updateFriend = () => {
    console.log("Update Friend");
  }

  render() {
    return (
      <div>
        Friends View
        <FriendsList friends={this.props.friends} />
        <FriendForm 
          handleInput={this.handleInput} 
          friendFormData={this.state.friendFormData}
          addFriend={this.addFriend}
          updateFriend={this.updateFriend}
          isUpdating={this.state.isUpdating}
        />
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