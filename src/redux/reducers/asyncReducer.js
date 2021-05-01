import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR,
} from "redux/actions/types";

const initialState = {
  loading: false,
  error: null,
};

const asyncReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ASYNC_ACTION_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ASYNC_ACTION_FINISH:
      return {
        ...state,
        loading: false,
      };
    case ASYNC_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default asyncReducer;
