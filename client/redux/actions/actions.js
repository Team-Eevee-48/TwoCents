import * as types from './actionTypes';
import axios from 'axios';

export const addFeedback = ({ title, description }) => {
  return dispatch(addFeedbackActionCreator());

  axios.post('/post', {
    title,
    description
  })
  .then(res => {})
}
export const addFeedbackActionCreator = () => ({
  type: types.ADD_FEEDBACK,
});

export const upVoteActionCreator = () => ({
  type: types.UP_VOTE,
});