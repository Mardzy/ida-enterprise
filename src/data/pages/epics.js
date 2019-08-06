import { mergeMap, map } from "rxjs/operators";
import { ofType } from "redux-observable";

import { Request } from "../api/ajax";
import actions from "./actions";
import { pageTypes } from "./index";

/**
 * Returns a page structure with a list of charts.
 * @type {string}
 */
const MOCKED_CHART_LIST = "http://iechartservice.azurewebsites.net/api/layout";

/**
 * Get the list of charts for the given customer id and page id.
 * @type {Epic}
 * @memberOf module:Epics
 * @param action$
 * @return {Observable<any>}
 */
const fetchCharts = action$ => action$.pipe(
  ofType(pageTypes.FETCH_CHART_LIST.PENDING),
  mergeMap(action =>
    Request.GET(MOCKED_CHART_LIST).pipe(
      map(request => actions.fetchChartList.fulfilled(action.payload.pageId, request.response))
    )
  )
);

export default { fetchCharts };