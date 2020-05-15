import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Actions
import { handleInitialData } from '../actions/shared';

//Components
import Header from './Header';
import PollTabs from './PollTabs';
import PollDetail from './PollDetail';
import NewPoll from './NewPoll';
import LeaderBoard from './LeaderBoard';
import SignIn from './SignIn';
import notFoundPage from './notFoundPage';
import PrivateRoute from './PrivateRoute';

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
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
              <div>
                <PrivateRoute path="/" exact component={PollTabs} />
                <PrivateRoute
                  path="/questions/:question_id"
                  exact
                  component={PollDetail}
                />
                <PrivateRoute path="/add" component={NewPoll} />
                <PrivateRoute path="/leaderboard" component={LeaderBoard} />
                <PrivateRoute path="/404" component={notFoundPage} />
                <Route path="/signin" component={SignIn} />
              </div>
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
