//API
import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from '../utils/_DATA';

//ACTION CREATORS
import { getUser, addQuestionToUser, saveAnswerToUser } from './users';
import { getQuestions, addQuestion, saveQuestionAnswer } from './questions';
import signedInUser from './signedInUser';

function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUser(users));
      dispatch(getQuestions(questions));
    });
  };
};

export const handleSignedInUser = (userId) => {
  return (dispatch) => {
    dispatch(signedInUser(userId));
  };
};

//Asynchronous Action Creactor
export const handleAddQuestion = (optionOneText, optionTwoText) => {
  return (dispatch, getState) => {
    const { signedInUser, users } = getState();
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: signedInUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      users[signedInUser].questions.push(question.id);
      dispatch(addQuestionToUser(users));
    });
  };
};

//Asynchronous Action Creactor
export const handleSaveQuestionAnswer = (qid, selectedOption) => {
  return (dispatch, getState) => {
    const { signedInUser } = getState();
    return _saveQuestionAnswer({
      authedUser: signedInUser,
      qid,
      answer: selectedOption,
    }).then((result) => {
      dispatch(saveQuestionAnswer(result.questions));
      dispatch(saveAnswerToUser(result.users));
    });
  };
};
