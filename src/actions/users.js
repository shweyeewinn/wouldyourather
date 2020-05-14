import { GET_USERS, ADD_QUESTION_TO_USER, SAVE_ANSWER_TO_USER } from '../types';

export const getUser = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

export const addQuestionToUser = (users) => {
  return {
    type: ADD_QUESTION_TO_USER,
    users,
  };
};

export const saveAnswerToUser = (users) => {
  return {
    type: SAVE_ANSWER_TO_USER,
    users,
  };
};
