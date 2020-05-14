import { SET_SIGNEDINUSER } from '../types';

const signedInUser = (id) => {
  return {
    type: SET_SIGNEDINUSER,
    id,
  };
};
export default signedInUser;
