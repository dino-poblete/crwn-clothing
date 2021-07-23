import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { useLastLocation } from "react-router-last-location";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
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

export default withRouter(SignInAndSignUpPage);
