import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//Action
import { handleSignedInUser } from '../actions/shared';

// import PropTypes from 'prop-types';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userId = this.state.value;
    this.props.handleSignedInUser(userId);
    window.sessionStorage.setItem('signedInUser', userId);
    // console.log('session', sessionStorage.getItem('signedInUser'));
    this.props.history.push('/');
  };

  render() {
    const { users } = this.props;
    const { value } = this.state;

    return (
      <div className="new-question-container">
        <div className="question-form-wrapper">
          <div className="question-form-title">
            <h3>Welcome to the Would You Rather App!</h3>
            <p>Please sign in to continue</p>
          </div>
          <div className="form-content">
            <div className="form-logo">
              <img src="/logo192.png" alt="logo192" />
              <h3>Sign in</h3>
            </div>

            {users && (
              <form onSubmit={this.handleSubmit}>
                <div className="form-select">
                  <select
                    value={value}
                    onChange={this.handleChange}
                    className="form-control"
                  >
                    <option value="" disabled>
                      Select user
                    </option>
                    {Object.keys(users).map((key) => (
                      <option
                        key={users[key].id}
                        value={users[key].id}
                        style={{
                          backgroundImage: `url(${users[key].avatarURL})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        {users[key].name}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  className="btn btn-submit"
                  type="submit"
                  disabled={value === ''}
                >
                  Sign In
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

const mapDispatchToProps = (dispatch) => ({
  handleSignedInUser: (userId) => dispatch(handleSignedInUser(userId)),
});

//SignIn.propTypes = propTypes;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
