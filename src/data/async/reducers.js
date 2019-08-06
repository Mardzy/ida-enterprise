import { fromJS } from "immutable";
import _ from "lodash";

import { ASYNC_TYPES } from "./constants";

const initialState = fromJS({});

/**
 * @type {Reducer}
 * @memberOf module:Reducers
 * @param state
 * @param action
 * @returns {Immutable.Map<string, *>}
 */
const async = (state = initialState, action = {}) => {
  const [name, variant] = action.type.split(".");

  if (_.values(ASYNC_TYPES).indexOf(variant) > -1) {
    if (action.type.unique) {
      const uniqueValue = action.payload[action.type.unique];

      if (uniqueValue) {
        return state.setIn([name, uniqueValue], _.lowerCase(variant));
      } else {
        throw new Error(`A unique key (${action.type.unique}) is mandatory in all payloads paired with ${action.type}`);
      }
    } else {
      return state.set(name, _.lowerCase(variant));
    }
  }

  return state;
};

export { async };