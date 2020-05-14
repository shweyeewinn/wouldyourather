import React from 'react';
import { useHistory } from 'react-router-dom';
import { formatDate } from '../utils/helper';

const Poll = ({ author, question, timestamp }) => {
  const history = useHistory();

  const routeChange = (e, questionId) => {
    let path = `/questions/${questionId}`;
    history.push(path);
  };

  return (
    <>
      <div className="question">
        <div className="question-author">
          <h3 className="author-name">{author.name} ask:</h3>
        </div>
        <div className="question-detail">
          <div className="author">
            <img
              src={author.avatarURL}
              alt={`Avatar of ${author.name}`}
              className="author-img"
            />
          </div>
          <div className="question-text">
            <h3>Would you rather</h3>
            <div>{formatDate(timestamp)}</div>
            <p>...{question.optionOne.text}...</p>
            <button
              className="btn btn-full"
              onClick={(e) => routeChange(e, question.id)}
            >
              View Poll
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Poll;
