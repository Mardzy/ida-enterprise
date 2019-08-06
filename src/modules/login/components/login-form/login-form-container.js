import { connect } from "react-redux";
import { reduxForm } from "redux-form/immutable";

import { authTypes, authActions } from "../../../../data/auth";
import { isPending } from "../../../../data/async/utils";

import LoginFormComponent from "./login-form";

/**
 * Connect LoginForm to Redux store.
 */
const ConnectedLoginForm = connect(state => ({
  error: state.getIn(["auth", "error"]),
  loading: isPending(state, authTypes.LOGIN)
}))(LoginFormComponent);

/**
 * Login form container.
 * @type {ReactComponent}
 */
const LoginFormContainer = reduxForm({
  form: "login-form",

  /**
   * Handle submit
   * @param values
   * @param dispatch
   * @param props
   * @return {*}
   */
  onSubmit: (values, dispatch) =>
    dispatch(authActions.login.start(values.get("username"), values.get("password")))
})(ConnectedLoginForm);

export default LoginFormContainer;