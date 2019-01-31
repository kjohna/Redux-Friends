import API from '../../api';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  API
  .get("")
  .then(res => {
    console.log("actions: fetch friends success ", res.data);
    dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data})
    // // console.log(res.data);
    // this.setState({ 
    //   friendsList: res.data,
    //   error: ''
    // });
  })
  .catch(err => {
    console.log("actions: fetch friends failure ", err.response);
    dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err.response})
    // console.log("error: ", err.response);
    // this.setState({error: err.response});
  });
}