import { rem } from "./whitespace";
import { withDefaults } from "./utils";
import { hex } from "./colors";

/**
 * Create a border ruleset from the given parameters
 * @type {function(*=): *}
 */
export const border = withDefaults({ width: rem(1), style: "solid", radius: rem(0), color: "black" })(options => {
  const { width, style, radius, color } = options;

  return `
    border-width: ${width};
    border-style: ${style};
    border-radius: ${radius};
    border-color: ${hex(color)};
  `;
});
