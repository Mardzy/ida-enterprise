/**
 * Connect keys between graph data and legend
 * @memberOf module:Constants
 * @type {{}}
 */
const DEFAULT_LOOKUP = {
  label: "label",
  value: "value"
};

/**
 * Legend lookup for type/view pair
 * @memberOf module:Constants
 * @type {{stats: {line: {}}}}
 */
export const LEGEND_LOOKUPS = {
  stats: {
    line: DEFAULT_LOOKUP
  }
};