import _ from "lodash";

/**
 * @memberOf module:Constants
 * @type {{data: string, auth: string, api: string}}
 */
export const IDA_SERVICE_NAMES = {
  data: "data",
  auth: "auth",
  api: "api"
};

/**
 * @memberOf module:Constants
 * @type {{api: string, charts: string}}
 */
export const PARTNER_SERVICE_NAMES = {
  api: "partner-api",
  charts: "charts"
};

/**
 * Staging prefix
 * @memberOf module:Constants
 * @type {string}
 */
export const STAGING_PREFIX = process.env.BUILD_ENV === "production" ? "" : "staging-";

/**
 * Connecterra's domain
 * @memberOf module:Constants
 * @type {string}
 */
export const CTERRA_DOMAIN = "connecterra.io";

/**
 * All the endpoints the app may use.
 * @memberOf module:Constants
 * @type {{base: string, data: string, auth: string, api: string}}
 */
export const IDA_ENDPOINTS = _.assign({
  base: "/"
}, _.mapValues(
  IDA_SERVICE_NAMES,
  value => `https://${STAGING_PREFIX}${value}.${CTERRA_DOMAIN}`
));

/**
 * Partner dashboard endpoints.
 * @memberOf module:Constants
 * @type {{api: string, charts: string}}
 */
export const PARTNER_ENDPOINTS = _.assign({
  base: "/"
}, _.mapValues(
  PARTNER_SERVICE_NAMES,
  value => `https://${STAGING_PREFIX}${value}.${CTERRA_DOMAIN}`
));