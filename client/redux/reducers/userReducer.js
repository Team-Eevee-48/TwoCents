import * as types from '../constants/actionTypes';

const initialState = {
  username: 'Team Eevee',
  first_name: '',
  last_name: '',
  email: '',
  failedAuthStatement: '',
  authStatus: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESSFUL_AUTH:
      const { username, first_name, last_name } = action.payload;
      return {
        ...state,
        username,
        first_name,
        last_name,
        authStatus: true,
        failedAuthStatement: ''
      }
    case types.UNSUCCESSFUL_AUTH:
      return { 
        ...state,
        failedAuthStatement: 'Authentication failed. Please try again.'
      }
    default:
      return state;
  }
}

export default usersReducer;