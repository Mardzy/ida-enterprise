import _ from "lodash";
import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

import { authTypes } from "../../data/auth";
import { isFulfilled } from "../../data/async/utils";

/**
 * Route with authentication
 * @type {ReactComponent}
 * @param isAuthenticated
 * @param Component
 * @param fallbackPath
 * @param rest
 * @return {*}
 */
const RouteWithAuthentication = ({ isAuthenticated, component: Component, fallbackPath, ...rest }) => (
  <Route {...rest} render={(props) => {
    var { render } = { ...rest };

    if (isAuthenticated) {
      if (_.isFunction(render)) {
        return render(props);
      }

      return <Component {...props} />;
    }

    return <Redirect to={fallbackPath}/>;
  }}/>
);

/**
 * Connect to Redux store.
 */
const ProtectedRoute = connect(state => ({
  isAuthenticated: isFulfilled(state, authTypes.LOGIN)
}))(RouteWithAuthentication);

export default ProtectedRoute;