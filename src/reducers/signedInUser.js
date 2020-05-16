import { SET_SIGNEDINUSER, LOGOUT_USER } from '../types';

// const authedUser = sessionStorage.getItem('signedInUser');

const signedInUser = (state = null, action) => {
  switch (action.type) {
    case SET_SIGNEDINUSER:
      return action.id;
    case LOGOUT_USER:
      return action.id;
    default:
      return state;
  }
};
export default signedInUser;
