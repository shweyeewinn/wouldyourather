import React from 'react';
import Nav from './Navigation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Actions
import { handleSignedInUser } from '../actions/shared';

const Header = (props) => {
  const { signedInUserInfo, handleSignedInUser } = props;
  const signOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('signedInUser');
    // sessionStorage.clear();
    handleSignedInUser(null);
    props.history.push('/signin');
  };

  return (
    <>
      <div className="Nav-bar">
        <Nav />
        {signedInUserInfo && (
          <div className="right-side-nav">
            <div className="signedin-user">
              <p>Hello, {signedInUserInfo.name}</p>{' '}
            </div>
            <div className="avatar">
              <img
                src={signedInUserInfo.avatarURL}
                alt={`Avatar of ${signedInUserInfo.name}`}
                className="avatar-img"
              />
            </div>
            <div className="lg-btn">
              <button className="btn btn-primary" onClick={signOut} type="link">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

function mapStateToProps({ users, signedInUser }) {
  const found = Object.keys(users).find((element) => element === signedInUser);
  const signedInUserInfo = users[found];
  return {
    signedInUserInfo,
  };
}

const mapDispatchToProps = (dispatch) => ({
  handleSignedInUser: (userId) => dispatch(handleSignedInUser(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
