import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared';

class NewPoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOne: '',
      optionTwo: '',
    };
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({
      [key]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    //To Add Question to Store
    this.props.handleAddQuestion(optionOne, optionTwo);
    this.setState({
      optionOne: '',
      optionTwo: '',
    });
    this.props.history.push(`/`);
  };

  render() {
    const { optionOne, optionTwo } = this.state;
    return (
      <>
        <div className="new-question-container">
          <div className="question-form-wrapper">
            <div className="question-form-title">
              <h1>Create New Question</h1>
            </div>
            <div className="form-content">
              <p>
                <strong>Complete the question:</strong>
              </p>
              <h3>Would you rather ...</h3>
              <form onSubmit={this.handleSubmit}>
                <div className="form-input">
                  <input
                    type="text"
                    placeholder="Enter Option One Text Here"
                    name="optionOne"
                    value={optionOne}
                    onChange={this.handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="separator">
                  <h3>OR</h3>
                </div>
                <div className="form-input">
                  <input
                    type="text"
                    placeholder="Enter Option Two Text Here"
                    name="optionTwo"
                    value={optionTwo}
                    onChange={this.handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <button
                  className="btn btn-submit"
                  type="submit"
                  disabled={optionOne === '' && optionTwo === ''}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// NewPoll.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => ({
  handleAddQuestion: (optionOne, optionTwo) =>
    dispatch(handleAddQuestion(optionOne, optionTwo)),
});

export default connect(null, mapDispatchToProps)(NewPoll);
