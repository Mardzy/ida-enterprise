import types from "./types";
import { createAsyncActions } from "../async/utils";

/**
 * Create action creators from types.FETCH_FARM_LIST
 * @type {{start: Action, fulfilled: Action, rejected: Action}}
 */
const fetchFarmList = createAsyncActions(
  types.FETCH_FARM_LIST,
  customerId => ({ customerId }),
  response => response
);

export default {
  fetchFarmList
};