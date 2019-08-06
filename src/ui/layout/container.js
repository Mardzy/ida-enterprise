import React from "react";
import PT from "prop-types";
import styled from "styled-components";

import { spacing } from "../style/whitespace";

/**
 * Styled Semantic UI Container with margin.
 * @type {ReactComponent}
 */
let Container = styled(({ whitespaceAfter, ...rest }) => <section {...rest}/>)`
  margin-bottom: ${props => props.whitespaceAfter ? spacing(props.whitespaceAfter) : 0};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

/**
 * @memberOf Container
 * @type {{whitespaceAfter: number}}
 */
Container.propTypes = {
  /** number of whitespace units to use after the rendered element */
  whitespaceAfter: PT.number
};

export default Container;