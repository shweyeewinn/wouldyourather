import React from 'react';
import Nav from './Navigation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Actions
import { handleLogoutUser } from '../actions/shared';

const Header = (props) => {
  const { signedInUserInfo, handleLogoutUser } = props;
  const signOut = (e) => {
    e.preventDefault();
    handleLogoutUser();
    // sessionStorage.removeItem('signedInUser');
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
  handleLogoutUser: () => dispatch(handleLogoutUser()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
