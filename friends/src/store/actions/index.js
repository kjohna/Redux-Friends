import API from '../../api';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';
export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  API
  .get("")
  .then(res => {
    console.log("actions: fetch friends success ", res.data);
    dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data});
  })
  .catch(err => {
    console.log("actions: fetch friends failure ", err.response);
    dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err.response});
  });
}

export const addFriend = friendData => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  console.log("friendData: ",friendData);
  API
  .post("", friendData)
  .then(res => {
    console.log("actions: add friend success ", res.data);
    dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data});
  })
  .catch(err => {
    console.log("actions: add friend failure ", err.response);
    dispatch({ type: ADD_FRIEND_FAILURE, payload: err.response});
  });
}