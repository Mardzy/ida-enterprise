import _ from "lodash";

/**
 * @memberOf module:Constants
 * @type {{
 *   black: string, alto: string, white: string
 * }}
 */
export const GRAYSCALE_PALETTE = {
  black: "#000000",
  alto: "#D6D6D6",
  white: "#ffffff"
};

/**
 * @memberOf module:Constants
 * @type {{
 *   cinnabar: string, amaranth: string, seance: string, purpleHeart: string, sapphire: string,
 *   curiousBlue: string, cerulean: string, pacificBlue: string, apple: string, sushi: string, earlsGreen: string,
 *   brightSun: string, selectiveYellow: string, pizazz: string, pomegranate: string
 * }}
 */
export const GRAPH_PALETTE = {
  cinnabar: "#e53935",
  amaranth: "#D81B60",
  seance: "#8E24AA",
  purpleHeart: "#5E35B1",
  sapphire: "#3949AB",
  curiousBlue: "#1E88E5",
  cerulean: "#039BE5",
  pacificBlue: "#00ACC1",
  apple: "#43A047",
  sushi: "#7CB342",
  earlsGreen: "#C0CA33",
  brightSun: "#FDD835",
  selectiveYellow: "#FFB300",
  pizazz: "#FB8C00",
  pomegranate: "#F4511E"
};

/**
 * Color map
 * @memberOf module:Constants
 * @type {{}}
 */
export const COLOR_MAP = _.assign({}, GRAYSCALE_PALETTE, GRAPH_PALETTE);

/**
 * Get a hex color from the preset theme
 * @param {string} name
 * @return {string}
 */
export const hex = name => {
  const hex = COLOR_MAP[name];

  if (!hex) {
    throw new Error(`The given color (${name}) is not listed in ${_.keys(COLOR_MAP).join(", ")}.`);
  }

  return `${hex}`;
};

/**
 * Get a color property based on the given name in the theme
 * @param {string} name
 * @return {string}
 */
export const color = name => `color: ${hex(name)}`;

/**
 * Get a background color property based on the given name in the theme
 * @param {string} name
 * @return {string}
 */
export const bg = name => `background-color: ${hex(name)}`;
