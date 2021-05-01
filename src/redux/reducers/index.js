import { combineReducers } from "redux";
import usersReducer from 'redux/reducers/usersReducer';
import asyncReducer from "redux/reducers/asyncReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  async: asyncReducer,
});

export default rootReducer;
