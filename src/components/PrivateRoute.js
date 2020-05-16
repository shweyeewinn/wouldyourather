import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) => {
          // console.log('this.props', this.props);
          return this.props.signedInUser ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/signin', state: { from: props.location } }}
            />
          );
        }}
      />
    );
  }
}

function mapStateToProps({ signedInUser }) {
  return {
    signedInUser,
  };
}

export default connect(mapStateToProps, null)(PrivateRoute);
