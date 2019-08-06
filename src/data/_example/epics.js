import actions from "./actions";
import types from "./types";

/**
 * Quack while swimming.
 * @type {Epic}
 * @memberOf module:Epics
 * @param action$
 * @returns {*|Observable|Observable<{type: string, payload: object}>}
 */
const swim = action$ => action$
  .filter(action => action.type === types.SWIM)
  .delay(1000)
  .mapTo(actions.quack());

export default {
  swim
};