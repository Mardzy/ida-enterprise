import React from "react";
import { Dimmer, Loader } from "semantic-ui-react"

/**
 * Spinner with white overlay.
 * @param props
 * @return {*}
 * @constructor
 */
const SpinnerWithOverlay = props => (
  <Dimmer active inverted>
    <Loader inverted {...props}>{props.children}</Loader>
  </Dimmer>
);

export default SpinnerWithOverlay;