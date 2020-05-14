import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import signedInUser from './signedInUser';

export default combineReducers({
  users,
  questions,
  signedInUser,
});
