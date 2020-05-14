import { GET_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../types';

export const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

//ACTION CREATOR
export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

//ACTION CREATOR
export const saveQuestionAnswer = (questions) => {
  return {
    type: SAVE_QUESTION_ANSWER,
    questions,
  };
};
