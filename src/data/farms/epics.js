import buildQuery from "odata-query";
import { mergeMap, map } from "rxjs/operators";
import { ofType } from "redux-observable";

import { farmTypes } from "./index";
import { Request } from "../api/ajax";
import { IDA_ENDPOINTS } from "../config/services";
import actions from "./actions";

/**
 * Build URL for fetching farms.
 * @param action
 * @return {string}
 */
const buildFetchFarmsURL = action => {
  /**
   * oData filter for farm query
   * @type {{CustomerID}}
   */
  let filter = {
    customerID: action.payload.customerId
  };

  return `${IDA_ENDPOINTS.api}/odata/Farms${buildQuery({ filter })}`;
};

/**
 * Get the list of farms for the given customer id.
 * @type {Epic}
 * @memberOf module:Epics
 * @param action$
 * @return {Observable<any>}
 */
const fetchFarms = action$ => action$.pipe(
  ofType(farmTypes.FETCH_FARM_LIST.PENDING),
  mergeMap(action =>
    Request.GET(buildFetchFarmsURL(action)).pipe(
      map(request => actions.fetchFarmList.fulfilled(request.response))
    )
  )
);

export default { fetchFarms };