import { FETCH_USERS, SET_CURRENT_USERS } from 'redux/actions/types';

const initialState = {
  users: [],
  currentUser: null
};

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        users: payload,
      };
    case SET_CURRENT_USERS:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
