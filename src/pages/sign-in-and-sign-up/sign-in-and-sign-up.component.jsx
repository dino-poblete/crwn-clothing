import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { useLastLocation } from "react-router-last-location";
import { createStructuredSelector } from "reselect";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import "./sign-in-and-sign-up.style.scss";

const SignInAndSignUpPage = ({ currentUser }) => {
  const lastLocation = useLastLocation();

  if (currentUser) {
    if (lastLocation && lastLocation.pathname) {
      return <Redirect to={lastLocation.pathname} />;
    } else {
      return <Redirect to="/" />;
    }
  } else {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(SignInAndSignUpPage));
