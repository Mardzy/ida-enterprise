import _ from "lodash";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeMap, mapTo, map, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";

import { IDA_ENDPOINTS } from "../config/services";
import types from "./types";
import actions from "./actions";
import { Request } from "../api/ajax";

/**
 * Handle errors during login.
 * @param error
 * @return {Observable}
 */
const handleLoginError = error => of(actions.login.rejected(error));

/**
 * Register the token for further data requests, then pass on to the successful login handler.
 * @param request
 * @return {{type: string, payload: {response: Object}}}
 */
const handleLoginSuccess = request => {
  Request.registerToken(request.response.access_token);

  return actions.login.fulfilled(request.response);
};

/**
 * Login request config
 * @type {{method: string, url: string, crossDomain: boolean, headers: {}}}
 */
const loginRequestConfig = {
  method: "POST",
  url: `${IDA_ENDPOINTS.auth}/token`,
  crossDomain: true,
  headers: {
    "content-type": "application/x-www-form-urlencoded"
  }
};

/**
 * Log the user in, then pass the appropriate answer back to Redux.
 * @type {Epic}
 * @memberOf module:Epics
 * @param action$
 */
const login = action$ => action$.pipe(
  ofType(types.LOGIN.PENDING),
  mergeMap(action =>
    ajax(
      _.assign({}, loginRequestConfig, {
        body: _.assign({ grant_type: "password" }, action.payload)
      })
    ).pipe(
      map(handleLoginSuccess),
      catchError(handleLoginError)
    )
  )
);

/**
 * Logs the user out.
 * @type {Epic}
 * @memberOf module:Epics
 * @param action$
 * @return {Observable<{type: string}>}
 */
const logout = action$ => action$.pipe(
  ofType(types.LOGOUT.PENDING),
  mapTo({
    type: types.LOGOUT.FULFILLED
  })
);

/**
 * Handle errors during requesting user information.
 * @param error
 * @return {Observable}
 */
const handleUserRequestError = error => of(actions.requestUser.rejected(error));

/**
 * Store user information after successful request.
 * @param request
 * @return {{type: string, payload: {response: Object}}}
 */
const handleUserRequestSuccess = request => actions.requestUser.fulfilled(request.response);

/**
 * Request a user.
 * @type {Epic}
 * @memberOf module:Epics
 * @param action$
 * @return {Observable<AjaxResponse>}
 */
const requestUser = action$ => action$.pipe(
  ofType(types.REQUEST_USER.PENDING),
  mergeMap(action =>
    Request.GET(
      `${IDA_ENDPOINTS.auth}/Users/Find/EmailSimple/${encodeURIComponent(action.payload.email)}`
    ).pipe(
      map(handleUserRequestSuccess),
      catchError(handleUserRequestError)
    )
  )
);

export default {
  login,
  logout,
  requestUser
};