import React, { Component } from 'react';
import { connect } from 'react-redux';

//Action
import { handleSaveQuestionAnswer } from '../actions/shared';

//import PropTypes from 'prop-types';

class PollVote extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: 'optionOne' };
  }

  handleRadioChange = (e) => {
    const option = e.target.value;
    this.setState({
      selectedOption: option,
    });
  };

  handleSubmit = (e, questionId) => {
    e.preventDefault();
    const { selectedOption } = this.state;
    //todo: Add Answer to Question
    this.props.handleSaveQuestionAnswer(this.props.questionId, selectedOption);
  };

  render() {
    const { author, question } = this.props;
    const { selectedOption } = this.state;
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
              <h3>Would You Rather ...</h3>

              <form className="vote-form" onSubmit={this.handleSubmit}>
                <div className="form-check">
                  <input
                    id="radio-btn1"
                    type="radio"
                    value="optionOne"
                    name="optionOne"
                    checked={selectedOption === 'optionOne' ? true : false}
                    onChange={this.handleRadioChange}
                  />
                  <label htmlFor="radio-btn1">{question.optionOne.text}</label>
                </div>
                <div className="form-check">
                  <input
                    id="radio-btn2"
                    type="radio"
                    value="optionTwo"
                    name="optionTwo"
                    checked={selectedOption === 'optionTwo' ? true : false}
                    onChange={this.handleRadioChange}
                  />
                  <label htmlFor="radio-btn2">{question.optionTwo.text}</label>
                </div>
                <button className="btn btn-submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

//PollAnswer.propTypes = propTypes;
const mapDispatchToProps = (dispatch) => ({
  handleSaveQuestionAnswer: (qid, answer) =>
    dispatch(handleSaveQuestionAnswer(qid, answer)),
});
export default connect(null, mapDispatchToProps)(PollVote);
