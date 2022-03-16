import * as types from '../constants/actionTypes';
import axios from 'axios';

export const signUpActionCreator = (username, password, first_name, last_name, email) => dispatch => {
  if (!username || !password || !first_name || !last_name || !email) return dispatch({ type: types.UNSUCCESSFUL_AUTH })
  else {
    axios({
      method: 'POST',
      url: '/auth/signup',
      headers: {'Content-Type': 'application/JSON'},
      data: {
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        email: email
      }
    })
    .then((response) => {
      dispatch({
        type: types.SSUCCESSFUL_AUTH,
        payload: { username: res.data.username }
      })
      dispatch(changePage('feedback'));
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.UNSUCCESSFUL_AUTH }); 
    })
  }
}

export const loginActionCreator = (username, password, cookieAuth = false) => dispatch => {
  if (!username || !password) return dispatch({ type: types.UNSUCCESSFUL_AUTH});
  else { 
    axios({
    method: 'POST',
    url: '/auth/login',
    headers: {'Content-Type': 'application/JSON'},
    data: {
      username: username,
      password: password
      }
    })
    .then((response) => {
      if (!response.data.status) return dispatch({ type: types.UNSUCCESSFUL_AUTH })
      dispatch({
        type: types.SUCCESSFUL_AUTH,
        payload: { username: res.data.username },
      })
      dispatch(changePage('feedback'));
    })
    .catch((err) => {
      if (cookieAuth) return;
      else {
        console.log(err);
        dispatch({ type: types.UNSUCCESSFUL_AUTH });
      }
    })
  }
};

export const addFeedbackThunk = ({ username, title, description, votes, tags }) => {
  return async dispatch => {
    dispatch(addFeedbackActionCreator());

    await axios
      .post('/post', {
        username,
        title,
        description,
        votes,
        tags
      })
    .catch(() => console.log('Could not post new feedback.'))
  }
}

export const addFeedbackActionCreator = () => ({
  type: types.ADD_FEEDBACK,
});

export const getFeedbackActionCreator = (user_id) => (dispatch) => {
  axios({
    method: 'GET',
    url: '/feedback',
    headers: {'Content-Type': 'application/JSON'},
    data: {
      user_id: user_id,
    }
  })
  .then((response) => {
    dispatch({
      type: types.GET_FEEDBACK,
      payload: response.data
    });
  });
};

export const upVoteActionCreator = () => ({
  type: types.UP_VOTE,
});

export const addTagFilterActionCreator = () => ({
  type: types.ADD_TAG_FILTER,
});