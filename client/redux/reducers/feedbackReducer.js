import * as types from '../constants/actionTypes';

const initialState = {
  feedbackItems: [{
    id: 1,
    title: 'Add dark mode',
    description: 'Easier on the eyes at night time',
    votes: 0,
    alreadyVoted: false,
    tags: ['Feature']
  }],
  // title: '',
  // description: '',
  votes: 0,
  tags: ['Feature', 'Enhancement', 'Bug'], // 'Feature', 'Enhancement', 'Bug'
  tagFilters: [],
}

const feedbackReducer = (state = initialState, action) => {
  let title;
  let description;
  let votes;
  const tags = [...state.tags];
  const tagFilters = [...state.tagFilters];
  const feedbackItems = [...state.feedbackItems]

  switch (action.type) {
    case types.GET_FEEDBACK: 
      return {
        ...state,
        feedbackItems: action.payload,
      }
    case types.UP_VOTE: {
      votes = ++state.votes;
      return {
        ...state,
        votes,
      };
    }
    case types.ADD_TAG_FILTER: {
      tagFilters.push(action.payload);
      return {
        ...state,
        tagFilters
      }
    }
    case types.REMOVE_TAG_FILTER: {
      if (!state.tagFilters.includes(action.payload)) tagFilters.filter(tag => !action.payload);
      return {
        ...state,
        tagFilters
      }
    }

    default:
      return state;
  }
}

export default feedbackReducer;