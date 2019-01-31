import { FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE } from "../actions";

const initialState = {
  fetchingFriends: false,
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
    default:
      return state;
  }
}

export default rootReducer;