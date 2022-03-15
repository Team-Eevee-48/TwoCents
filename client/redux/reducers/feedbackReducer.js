//import * as types from '..constants/actionTypes';

const initialState = {
  title: '',
  description: '',
  votes: 0,
  tags: [], // 'Feature', 'Enhancement', 'Bug'
}

const feedbackReducer = (state = initialState, action) => {
  let title;
  let description;
  let votes;
  const tags = [...state.tags]

  switch (action.type) {
    case types.UP_VOTE: {
      votes = ++state.votes
      return {
        ...state,
        votes,
      };
    }

    default:
      return state;
  }
}

export default feedbackReducer;