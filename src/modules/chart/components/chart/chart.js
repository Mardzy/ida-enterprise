import React from "react";
import { fromJS } from "immutable";
import PT from "prop-types";
import IPT from "react-immutable-proptypes";
import { Header } from "semantic-ui-react";

import Container from "../../../../ui/layout/container";

/**
 * Chart wrapper. Takes care of the basic functionality.
 * @type {ReactComponent}
 */
class Chart extends React.Component {

  /**
   * @memberOf Chart
   * @type {{id: shim, title: shim, config: *, renderGraph: shim}}
   */
  static propTypes = {
    /** chart id from the database */
    id: PT.number,
    /** chart title */
    title: PT.string,
    /** chart config in immutable format */
    config: IPT.map,
    /** graph renderer */
    renderGraph: PT.func
  };

  /**
   * @memberOf Chart
   * @type {{id: null, title: string, config: any, renderGraph: function(): null}}
   */
  static defaultProps = {
    id: null,
    title: "",
    config: fromJS({}),
    renderGraph: () => null
  };

  render () {
    const { title } = this.props;

    return (
      <Container className="chart" whitespaceAfter={2}>
        <Header as="h3" attached="top">{title}</Header>
        {this.props.renderGraph()}
      </Container>
    );
  }

}

export default Chart;