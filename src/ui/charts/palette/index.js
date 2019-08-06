import _ from "lodash";
import hash from "object-hash";

/**
 * Create a finite set of any given array and return rendom values from it one-by-one
 * @param set
 * @param options
 * @return {function()}
 */
const asFiniteSet = (set = [], options = { randomized: true }) => {
  /**
   * Local copy of the given set
   * @type {*[]}
   */
  const local = [].concat(set);

  return () => {
    if (local.length) {
      /**
       * @type {number}
       */
      const idx = options.randomized ? Math.floor(Math.random() * local.length) : 0;

      return local.splice(idx, 1);
    } else {
      throw new Error(`There are no items left of ${JSON.stringify(set)}.`);
    }
  };
};

/**
 * Chart color utilities
 */
export class ColorPalette {

  constructor (initialSet = [], options = { randomized: true }) {
    /**
     * @memberOf ColorPalette
     * @type {{}}
     */
    this.cache = {};

    /**
     * @memberOf ColorPalette
     * @type {function(): *[]}
     */
    this.getRandomColor = asFiniteSet(initialSet, options);
  }

  /**
   * Pick a random color
   * @param id
   * @return {*}
   */
  pick (id) {
    let result;

    if (id) {
      const h = hash({ id });

      if (!this.cache[h]) {
        this.cache[h] = _.first(this.getRandomColor());
      }

      result = this.cache[h];
    }

    return result;
  }
}

