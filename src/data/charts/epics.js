import { Map } from "immutable";
import { mergeMap, map } from "rxjs/operators";
import { ofType } from "redux-observable";

import { Request } from "../api/ajax";
import actions from "./actions";
import { chartTypes } from "./index";
import { getChartEndpoint } from "./endpoints";

/**
 * Send the chart config to the server, then fulfill the given action.
 * @param action
 */
const sendRequest = action => {
  const { chartId, config } = action.payload;

  /**
   * @type {{config}}
   */
  const params = {
    params: JSON.stringify(config.get("params", Map()).toJS())
  };

  /**
   * Send request to chart endpoint.
   */
  const xhr = Request.GET(getChartEndpoint(config), {
    body: params
  });

  return xhr.pipe(
    map(request => actions.fetchChartData.fulfilled(chartId, request.response))
  );
};

/**
 * Fetch chart data from the server.
 * @type {Epic}
 * @memberOf module:Epics
 * @param action$
 * @return {Observable<any>}
 */
const fetchChartData = action$ => action$.pipe(
  ofType(chartTypes.FETCH_CHART_DATA.PENDING),
  mergeMap(sendRequest)
);

export default { fetchChartData };