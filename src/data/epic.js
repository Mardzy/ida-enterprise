import { combineEpics } from "redux-observable";
import _ from "lodash";

import { authEpics } from "./auth/index";
import { farmEpics } from "./farms/index";
import { pageEpics } from "./pages/index";
import { chartEpics } from "./charts/index";

/**
 * Combines all the imported epics into one observable stream.
 * @memberOf module:Epics
 * @type {Epic}
 */
export const rootEpic = combineEpics(
  ..._.values(authEpics),
  ..._.values(farmEpics),
  ..._.values(pageEpics),
  ..._.values(chartEpics)
);