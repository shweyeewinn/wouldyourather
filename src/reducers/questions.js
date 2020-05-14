import { GET_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../types';

const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
};
export default questions;
