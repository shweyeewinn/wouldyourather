import { SET_SIGNEDINUSER, LOGOUT_USER } from '../types';

export const signedInUser = (id) => {
  return {
    type: SET_SIGNEDINUSER,
    id,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
    id: null,
  };
};
