import { GET_USERS, SAVE_ANSWER_TO_USER, ADD_QUESTION_TO_USER } from '../types';

const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_ANSWER_TO_USER:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
};
export default users;
