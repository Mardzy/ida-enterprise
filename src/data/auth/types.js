import { createAsyncTypes } from "../async/utils";

/**
 * Type namespace
 * @type {string}
 */
const ns = "app/auth";

/**
 * @memberOf module:Constants
 * @type {{meta: {name: string}, PENDING: string, FULFILLED: string, REJECTED: string}}
 */
const LOGIN = createAsyncTypes(ns, "LOGIN");

/**
 * @memberOf module:Constants
 * @type {{meta: {name: string}, PENDING: string, FULFILLED: string, REJECTED: string}}
 */
const LOGOUT = createAsyncTypes(ns, "LOGOUT");

/**
 * @memberOf module:Constants
 * @type {{meta: {name: string}, PENDING: string, FULFILLED: string, REJECTED: string}}
 */
const REQUEST_USER = createAsyncTypes(ns, "REQUEST_USER");

export default {
  LOGIN,
  LOGOUT,
  REQUEST_USER
};