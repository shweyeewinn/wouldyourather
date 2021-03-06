import React from 'react';
import { connect } from 'react-redux';

const userDetail = (user) => {
  const { name, avatarURL, score, answeredQuestions, createdQuestions } = user;

  return (
    <>
      <div className="user-avatar">
        <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar-img" />
      </div>
      <div className="user-info">
        <h3>{name}</h3>
        <div className="user-questions btm-border">
          <p>Answered questions</p>
          <p className="right-aligned-text">{answeredQuestions}</p>
        </div>
        <div className="user-questions">
          <p>Created questions</p>
          <p className="right-aligned-text">{createdQuestions}</p>
        </div>
      </div>
      <div className="user-score">
        <div className="score-title">
          <h3>Score</h3>
        </div>
        <div className="score">
          <div className="score-icon">
            <span>{score}</span>
          </div>
        </div>
      </div>
    </>
  );
};

const LeaderBoard = ({ sortedLeaderBoard }) => {
  return (
    <div className="leaderboard-wrapper">
      {sortedLeaderBoard.map((user) => (
        <div className="user-wrapper" key={user.id}>
          {userDetail(user)}
        </div>
      ))}
    </div>
  );
};

function mapStateToProps({ users }) {
  const leaderboard = [];
  Object.values(users).forEach((user) => {
    const { answers, avatarURL, id, name, questions } = user;
    const answeredQuestions = Object.keys(answers).length;
    const createdQuestions = questions.length;
    const score = answeredQuestions + createdQuestions;
    leaderboard.push({
      id,
      name,
      avatarURL,
      score,
      answeredQuestions,
      createdQuestions,
    });
  });
  const sortedLeaderBoard = leaderboard.sort((a, b) =>
    a.score < b.score ? 1 : -1
  );
  return {
    sortedLeaderBoard,
  };
}

export default connect(mapStateToProps, null)(LeaderBoard);
