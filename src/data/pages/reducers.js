import _ from "lodash";
import { fromJS } from "immutable";

import { pageTypes } from "./index";
import { getChartReferencesOfPage, getChartReferencesOfSection } from "./utils";

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
const pages = (state = initialState, action) => {
  switch (action.type) {
    case pageTypes.FETCH_CHART_LIST.FULFILLED:
      const layout = _.isArray(action.payload.layout) ? getChartReferencesOfSection(action.payload.layout) :
        getChartReferencesOfPage(action.payload.layout);

      return state.set(action.payload.pageId, fromJS(layout));
    default:
      return state;
  }
};

export default pages;