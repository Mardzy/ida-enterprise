/**
 * Default font size of the body.
 * @memberOf module:Constants
 * @type {number}
 */
const DEFAULT_FONT_SIZE = 14;

/**
 * This is where whitespace starts.
 * @memberOf module:Constants
 * @type {number}
 */
const DEFAULT_SPACING = 1;

/**
 * We use REMs.
 * @memberOf module:Constants
 * @type {string}
 */
const DEFAULT_UNIT = "rem";

/**
 * Get a spacing CSS value.
 * @param {number} units
 * @return {string}
 */
const spacing = units => `${units * DEFAULT_SPACING}${DEFAULT_UNIT}`;

/**
 * Convert a pixel value into REMs.
 * @param {number} pixelValue
 * @return {string}
 */
const rem = pixelValue => `${pixelValue / DEFAULT_FONT_SIZE}${DEFAULT_UNIT}`;

export {
  spacing,
  rem
};