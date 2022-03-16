import * as types from '../constants/actionTypes';
import axios from 'axios';


export const signUpActionCreator = (first_name, last_name, email, username, password) => dispatch => {

  if (!username || !password || !first_name || !last_name || !email) return dispatch({ type: types.UNSUCCESSFUL_AUTH })
  else {
    axios({
      method: 'POST',
      url: '/auth/signup',
      headers: {'Content-Type': 'application/json'},
      data: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        username: username,
        password: password
      }
    })
    .then((response) => {
      dispatch({
        type: types.SUCCESSFUL_AUTH,
        payload: { username: response.username }
      })
      // dispatch(changePageActionCreator('feedback'));
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.UNSUCCESSFUL_AUTH }); 
    })
  }
}

export const loginActionCreator = (username, password) => dispatch => {
  if (!username || !password) return dispatch({ type: types.UNSUCCESSFUL_AUTH});
  else { 
    axios({
    method: 'POST',
    url: '/auth/login',
    headers: {'Content-Type': 'application/json'},
    data: {
      username: username,
      password: password
      }
    })
    .then((response) => {
      if (response.status === false) return dispatch({ type: types.UNSUCCESSFUL_AUTH })
      dispatch({
        type: types.SUCCESSFUL_AUTH,
        payload: { username: response.username },
      })
      location.push('/feedback');
    })
    .catch((err) => {
      if (response.accessToken) return;
      else {
        console.log(err);
        dispatch({ type: types.UNSUCCESSFUL_AUTH });
      }
    })
  }
};

export const changePageActionCreator = (newPage) => ({
  type: types.CHANGE_PAGE,
  payload: newPage
});

export const addFeedbackThunk = ({ username, title, description, votes, tags }) => {
  return async dispatch => {
    dispatch(addFeedbackActionCreator());

    await axios
      .post('/api/feedback/post', {
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
    headers: {'Content-Type': 'application/json'},
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