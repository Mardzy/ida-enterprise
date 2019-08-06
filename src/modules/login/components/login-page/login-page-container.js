import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { authTypes } from "../../../../data/auth";
import { isFulfilled } from "../../../../data/async/utils";

import LoginPage from "./login-page";
import LoginForm from "../login-form";

/**
 * Login page with redirect.
 * @param props
 * @type {ReactComponent}
 */
const LoginWithRedirect = ({ isLoggedIn, redirectsTo }) => {
  return isLoggedIn ? <Redirect to={redirectsTo}/> : <LoginPage renderForm={() => <LoginForm/>}/>;
};

/**
 * Connect Login to Redux.
 * @type {ReactComponent}
 */
const LoginPageContainer = connect(state => ({
  isLoggedIn: isFulfilled(state, authTypes.LOGIN)
}))(LoginWithRedirect);

export default LoginPageContainer;