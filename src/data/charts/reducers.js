import { fromJS } from "immutable";

import { chartTypes } from "./index";
import { pageTypes } from "../pages";
import { getChartsOfPage } from "../pages/utils";

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
const charts = (state = initialState, action) => {
  switch (action.type) {
    case pageTypes.FETCH_CHART_LIST.FULFILLED:
      const charts = getChartsOfPage(action.payload.layout);

      return state.merge(fromJS(charts));
    case chartTypes.FETCH_CHART_DATA.FULFILLED:
      return state.setIn([action.payload.chartId.toString(), "data"], fromJS(action.payload.data));
    default:
      return state;
  }
};

export default charts;