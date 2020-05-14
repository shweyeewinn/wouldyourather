import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Actions
import { handleInitialData } from '../actions/shared';

//Components
import Header from './Header';
import Home from './Home';
import PollDetail from './PollDetail';
import NewPoll from './NewPoll';
import LeaderBoard from './LeaderBoard';
import SignIn from './SignIn';
import notFoundPage from './notFoundPage';

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { signedInUser } = this.props;

    return (
      <Router>
        <Fragment>
          <div className="container-fluid">
            <div className="logo">
              <Link to="/">
                <h4>WouldYouRatherApp</h4>
              </Link>
            </div>
          </div>
          <div className="container">
            <Header />
            <div className="main-content">
              {signedInUser !== null ? (
                <div>
                  <Route path="/" exact component={Home} />
                  <Route
                    path="/questions/:question_id"
                    exact
                    component={PollDetail}
                  />
                  <Route path="/add" component={NewPoll} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route path="/404" component={notFoundPage} />
                </div>
              ) : (
                <SignIn />
              )}
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({ signedInUser }) {
  return {
    signedInUser,
  };
}

const mapDispatchToProps = (dispatch) => ({
  handleInitialData: () => dispatch(handleInitialData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
