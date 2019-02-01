import { 
  FETCH_FRIENDS_START, 
  FETCH_FRIENDS_SUCCESS, 
  FETCH_FRIENDS_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
} from "../actions";

const initialState = {
  fetchingFriends: false,
  addingFriend: true,
  addingFriendSuccess: false,
  friends: [],
  error: null
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        fetchingFriends: true,
        error: null
      }
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload
      }
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      }
    case ADD_FRIEND_START:
      return {
        ...state,
        addingFriend: true,
        error: null,
        addingFriendSuccess: false
      }
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        addingFriend: false,
        friends: action.payload,
        error: null,
        addingFriendSuccess: true
      }
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        addingFriend: false,
        error: action.payload,
        addingFriendSuccess: false
      }
    default:
      return state;
  }
}

export default rootReducer;