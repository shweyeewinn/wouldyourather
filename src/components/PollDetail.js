import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import PollResult from './PollResult';
import PollVote from './PollVote';

class PollDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { answers: [] };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.questions) {
      const answers = [];
      const questionId = nextProps.match.params.question_id;
      if (nextProps.questions[questionId]) {
        answers.push(
          nextProps.questions[questionId].optionOne,
          nextProps.questions[questionId].optionTwo
        );
      }
      return { answers };
    } else return null;
  }

  render() {
    const questionId = this.props.match.params.question_id;
    const { questions, users, signedInUser } = this.props;
    const { answers } = this.state;

    return (
      <>
        {users[signedInUser] && (
          <div className="poll-container">
            {Object.keys(users[signedInUser].answers).includes(questionId)
              ? questions[questionId] && (
                  <PollResult
                    signedInUser={signedInUser}
                    author={users[questions[questionId].author]}
                    answers={answers}
                  />
                )
              : questions[questionId] && (
                  <PollVote
                    questionId={questionId}
                    question={questions[questionId]}
                    author={users[questions[questionId].author]}
                  />
                )}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { questions, users, signedInUser } = state;
  return {
    questions,
    users,
    signedInUser,
  };
};

export default connect(mapStateToProps, null)(PollDetail);
