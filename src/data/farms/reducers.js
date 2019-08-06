import { fromJS } from "immutable";

import { farmTypes } from "./index";

/**
 * @type {Immutable.Map}
 */
const initialState = fromJS({});

/**
 * @type {Reducer}
 * @memberOf module:Reducers
 * @param state
 * @param action
 * @returns {Immutable.Map<string, *>}
 */
const farms = (state = initialState, action) => {
  switch (action.type) {
    case farmTypes.FETCH_FARM_LIST.FULFILLED:
      /**
       * @type {{}}
       */
      const map = action.payload.value.reduce(
        (result, farm) => {
          result[farm.FarmID] = farm;

          return result;
        }, { /* [FarmID]: farm */ }
      );

      return fromJS(map);
    default:
      return state;
  }
};

export default farms;