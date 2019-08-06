import React from "react";
import PT from "prop-types";
import { Dot } from "react-animated-dots";
import _ from "lodash";

/**
 * Animated dots for loading inline content.
 * @type {ReactComponent}
 */
class InlineDots extends React.Component {
  /**
   * @memberOf InlineDots
   * @type {{amount: number}}
   */
  static propTypes = {
    /** the number of dots to display (buggy over 3 due to CSS of react-animated-dots) */
    amount: PT.number,
  };

  /**
   * @type {{amount: number}}
   */
  static defaultProps = {
    amount: 3
  };

  render () {
    return _.map(new Array(this.props.amount), (item, idx) => <Dot key={idx}>.</Dot>);
  }
}

export default InlineDots;