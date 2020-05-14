import React from 'react';

const votesCalculation = (answers, signedInUser) => {
  const total = answers[0].votes.length + answers[1].votes.length;
  return answers.map((answer, i) => {
    const noOfvotes = answer.votes.length;
    const percent = ((noOfvotes / total) * 100).toFixed(0);

    const yourVote = checkYourVote(answer, signedInUser);

    return (
      <div
        className={
          yourVote ? 'option-container voted-option' : 'option-container'
        }
        key={i}
      >
        {yourVote ? (
          <div className="vote-icon">
            <span>Your Vote</span>
          </div>
        ) : null}

        <h4>Would you rather {answer.text}?</h4>

        <div className="percent-voting">
          <p
            style={{
              width: `${percent}%`,
              background: percent !== '0' ? '#33bda8' : '#dcdbdc',
            }}
          >
            {percent}%
          </p>
        </div>
        <div className="number-voting">
          <p>
            {noOfvotes} out of {total} votes
          </p>
        </div>
      </div>
    );
  });
};

const checkYourVote = (answer, signedInUser) => {
  return answer.votes.includes(signedInUser) ? true : false;
};

const PollResult = ({ signedInUser, author, answers }) => {
  return (
    <>
      <div className="question">
        <div className="question-author">
          <h3 className="author-name">Asked by {author.name}</h3>
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
            <h2>Results:</h2>
            {votesCalculation(answers, signedInUser)}
          </div>
        </div>
      </div>
    </>
  );
};

export default PollResult;
