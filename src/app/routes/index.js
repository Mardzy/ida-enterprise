import React from "react";
import { Switch, Route } from "react-router";

import ProtectedRoute from "../../ui/routes/protected-route";
import Wrapper from "../components/pages";
import Login from "../../modules/login";

/**
 * @type {{index: string, login: string}}
 */
const ROUTES = {
  index: "/",
  login: "/login"
};

/**
 * Top-level application routes. The rest should be found under the listed components.
 * @type {ReactComponent}
 */
export const routes = (
  <Switch>
    <Route path={ROUTES.login} exact render={() => <Login redirectsTo={ROUTES.index}/>}/>
    <ProtectedRoute fallbackPath={ROUTES.login} component={Wrapper}/>
  </Switch>
);