import _ from "lodash";

/**
 * Add default values to CSS function
 * @param defaultOptions
 * @return {function(*): function(*=): *}
 */
export const withDefaults = (defaultOptions = {}) => decorated => (options = {}) =>
  decorated(_.assign({}, defaultOptions, options));
