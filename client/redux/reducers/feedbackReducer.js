import * as types from '../constants/actionTypes';

const initialState = {
  feedbackItems: [],
  category: ['feature', 'enhancement', 'bug'],
  tagFilters: [],
}

const feedbackReducer = (state = initialState, action) => {
  let title;
  let description;
  const category = [...state.category];
  const tagFilters = [...state.tagFilters];
  const feedbackItems = [...state.feedbackItems];

  switch (action.type) {
    case types.GET_FEEDBACK: 
      return {
        ...state,
        feedbackItems: action.payload.data,
      }

    case types.SUBMISSION_SUCCESS:
      return {
        ...state,
        submissionStatus: 'true',
      }

    case types.SUBMISSION_ERROR:
      console.log('FAILED TO SUBMIT FEEDBACK');
      return {
        ...state,
        submissionStatus: 'false'
      }

    case types.UP_VOTE: {
      const { votes, _id } = action.payload
      console.log('feedback:', feedbackItems);
      console.log('upvote reducer called!!', votes, _id);
      const cb = (el) => {
        if(el._id === _id){
          el.votes = votes
        }
        return el
      };
      return {
        ...state,
        feedbackItems: feedbackItems.map(cb),
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