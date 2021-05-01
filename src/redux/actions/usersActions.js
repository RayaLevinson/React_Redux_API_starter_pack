import { asyncActionStart, asyncActionFinish, asyncActionError } from 'redux/actions/asyncActions';
import { FETCH_USERS, SET_CURRENT_USERS } from 'redux/actions/types';

export const retrieveUsers = () => async (dispatch) => {
  dispatch(asyncActionStart());
  try {
    // const url = 'https://jsonplaceholder.typicode.com/users';
    const url = process.env.REACT_APP_ROOT_URL_OF_API;

    const res = await fetch(url);
    const data = await res.json();

    if (res.status === 200) {
      dispatch({ type: FETCH_USERS, payload: data });
      dispatch(asyncActionFinish());
    } else {
      dispatch(asyncActionError('Error ...'));
    }
  } catch (error) {
    dispatch(asyncActionError(error)); // or error.message
  }
};

export const setCurrentUser = (user) => {
  return { type: SET_CURRENT_USERS, payload: user };
};
