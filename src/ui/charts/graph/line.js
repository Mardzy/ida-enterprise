import React from "react";
import PT from "prop-types";
import IPT from "react-immutable-proptypes";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
import { Date as SugarDate } from "sugar-date";

import graphTheme from "./themes/material";
import { ColorPalette } from "../palette";

/**
 * Chart options
 * @type {{
 *   domainPadding: {y: number},
 *   padding: {top: number, bottom: number, left: number, right: number},
 * }}
 */
const graphContainerProps = {
  domainPadding: {
    y: 10
  },
  padding: {
    top: 10,
    bottom: 40,
    left: 40,
    right: 20
  },
  scale: {
    x: "time"
  },
  theme: graphTheme
};

/**
 * Timeline axis values
 * @type {{x: string, y: string}}
 */
const timelineAccessor = {
  x: "horizontal",
  y: "vertical"
};

/**
 * Line options
 * @type {{interpolation: string, x: string, y: string}}
 */
const lineProps = {
  interpolation: "monotoneX",
  ...timelineAccessor
};

/**
 * Line graph
 */
class LineGraph extends React.Component {

  /**
   * @memberOf LineGraph
   * @type {{data: *}}
   */
  static propTypes = {
    /** timeline data */
    data: IPT.list,
    /** graph color palette */
    palette: PT.instanceOf(ColorPalette).isRequired
  };

  /**
   * Get line style
   * @memberOf LineGraph
   * @param {Immutable.map.test.js} lineData
   * @return {Object}
   */
  getLineStyle (lineData) {
    return {
      data: {
        stroke: this.props.palette.pick(lineData.get("label"))
      }
    };
  }

  /**
   * Parse timeline dates before passing it on to Victory
   * @param timeline
   */
  parseTimeline (timeline) {
    return timeline.map(point => ({
      ...point,
      date: SugarDate(point[timelineAccessor.x]).beginningOfDay()
    }));
  }

  render () {
    const { data } = this.props;

    return data && (
      <VictoryChart {...graphContainerProps}>
        <VictoryAxis fixLabelOverlap/>
        <VictoryAxis dependentAxis/>
        {data.map(lineData => (
          <VictoryLine key={lineData.get("label")}
                       style={this.getLineStyle(lineData)}
                       data={this.parseTimeline(lineData.get("timeline").toJS())}
                       {...lineProps}/>
        ))}
      </VictoryChart>
    );
  }

}

export { timelineAccessor };
export default LineGraph;


