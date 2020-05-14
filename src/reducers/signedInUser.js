import { SET_SIGNEDINUSER } from '../types';

const authedUser = sessionStorage.getItem('signedInUser');

const signedInUser = (state = authedUser, action) => {
  switch (action.type) {
    case SET_SIGNEDINUSER:
      return action.id;
    default:
      return state;
  }
};
export default signedInUser;
