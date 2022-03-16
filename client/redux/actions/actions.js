import * as types from './actionTypes';
import axios from 'axios';

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