import React from "react";
import { fromJS } from "immutable";
import PT from "prop-types";
import IPT from "react-immutable-proptypes";

import Segment from "../../../../ui/layout/segment";
import GraphLegend from "../../../../ui/charts/legend/graph-legend";
import { ColorPalette } from "../../../../ui/charts/palette";

/**
 * Chart wrapper. Takes care of the basic functionality.
 * @type {ReactComponent}
 */
class Graph extends React.Component {

  /**
   * @memberOf Graph
   * @type {{chartId: shim, chartConfig: *, data: shim, loading: shim}}
   */
  static propTypes = {
    /** chart id from the database */
    chartId: PT.number,
    /** chart config in immutable format */
    chartConfig: IPT.map,
    /** graph data */
    data: PT.any,
    /** graph legend */
    legend: IPT.list,
    /** loading spinner */
    loading: PT.bool,
    /** graph component to render */
    graphComponent: PT.oneOfType([PT.element, PT.func]),
    /** graph color palette */
    palette: PT.instanceOf(ColorPalette)
  };

  /**
   * @memberOf Graph
   * @type {{chartId: null, chartConfig: any, data: null, loading: boolean}}
   */
  static defaultProps = {
    chartId: null,
    chartConfig: fromJS({}),
    data: null,
    loading: false,
    graphComponent: () => null
  };

  render () {
    const { loading, data, legend, graphComponent: GraphComponent, palette } = this.props;

    return (
      <Segment attached loading={loading} minHeight={100}>
        <GraphComponent data={data} palette={palette}/>
        {legend && <GraphLegend items={legend} palette={palette}/>}
      </Segment>
    );
  }

}

export default Graph;