import React from "react";
import PT from "prop-types";
import styled from "styled-components";
import { Segment as DefaultSegment } from "semantic-ui-react";

import { rem } from "../style/whitespace";

/**
 * Give the rem value of the passed parameter or fall back to "auto".
 * @param value
 * @return {string}
 */
const fallbackToAuto = value => value ? rem(value) : "auto";

/**
 * Styled Semantic UI Segment for a wider login area.
 * @type {ReactComponent}
 */
let Segment = styled(({ minHeight, minWidth, ...rest }) => <DefaultSegment {...rest}/>)`
  min-height: ${props => fallbackToAuto(props.minHeight)};
  min-width: ${props => fallbackToAuto(props.minWidth)};
`;

/**
 * @memberOf Segment
 * @type {{minHeight: number, minWidth: number}}
 */
Segment.propTypes = {
  /** minimum height of segment */
  minHeight: PT.number,
  /** minimum width of segment */
  minWidth: PT.number
};

export default Segment;