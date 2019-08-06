import { ajax } from "rxjs/ajax";
import _ from "lodash";

import { buildURLWithQueryString } from "./utils";

/**
 * Genarate authorization header from token.
 * @param token
 * @return {{headers: {Authorization: string}}}
 */
function getAuthorizationHeader (token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
}

/**
 * Request defaults
 * @type {{crossDomain: boolean}}
 */
const requestDefaults = {
  crossDomain: true,
  headers: {
    "Content-Type": "application/json"
  }
};

/**
 * Data request wrapper
 * @type {{GET: Request.GET, POST: Request.POST}}
 */
export const Request = {

  /**
   * Auth token.
   * @type {string}
   */
  token: "",

  /**
   * Register the auth token
   * @param t
   */
  registerToken: function (t) {
    Request.token = t;
  },

  /**
   * Wrapper around an RxJs ajax GET request
   * @param url
   * @param options
   * @return {Observable<AjaxResponse>}
   */
  GET: function (url, options = {}) {
    /**
     * @type {{Authorization: string}}
     */
    const headerWithToken = getAuthorizationHeader(Request.token);

    /**
     * Add GET queries to URL.
     * @type {string}
     */
    const urlWithQuery = options.body ? buildURLWithQueryString(url, options.body) : url;

    return ajax(_.merge({}, requestDefaults, {
      method: "GET",
      url: urlWithQuery
    }, headerWithToken, _.omit(options, "body")));
  },

  /**
   * Wrapper around an RxJs ajax POST request
   * @param url
   * @param options
   * @return {Observable<AjaxResponse>}
   */
  POST: function (url, options) {
    /**
     * @type {{Authorization: string}}
     */
    const headerWithToken = getAuthorizationHeader(Request.token);

    return ajax(_.merge({}, requestDefaults, {
      method: "POST",
      url
    }, headerWithToken, options));
  }

};