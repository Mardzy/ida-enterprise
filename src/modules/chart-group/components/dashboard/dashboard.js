import React from "react";
import PT from "prop-types";
import IPT from "react-immutable-proptypes";
import { fromJS } from "immutable";

import MainWithSecondary from "../../../../ui/layout/main-with-secondary";
import SingleColumn from "../../../../ui/layout/single-column";
import DoubleColumn from "../../../../ui/layout/double-column";

/**
 * Section names
 * @memberOf module:Constants
 * @type {{main: string, left: string, right: string}}
 */
export const CHART_GROUP_SECTIONS = {
  main: "main",
  left: "left",
  right: "right"
};

/**
 * Dashboard page with main chart on top, supporting charts on bottom.
 * @type {ReactComponent}
 */
class Dashboard extends React.Component {

  /**
   * @memberOf Dashboard
   * @type {{fetchData: function, sections: Map, customerId: number, pageId: *}}
   */
  static propTypes = {
    /** fetch content */
    fetchData: PT.func,
    /** charts (id, config, etc.) to display in the layout */
    sections: IPT.map,
    /** customer id */
    customerId: PT.number,
    /** page id */
    pageId: PT.any,
    /** chart renderer */
    renderChart: PT.func
  };

  /**
   * @memberOf Dashboard
   * @type {{chartComponent: function(): null, fetchData: function(): null, sections: any}}
   */
  static defaultProps = {
    fetchData: () => null,
    renderChart: () => null,
    sections: fromJS({
      [CHART_GROUP_SECTIONS.main]: [],
      [CHART_GROUP_SECTIONS.left]: [],
      [CHART_GROUP_SECTIONS.right]: []
    })
  };

  /**
   * Render the main section of the layout
   * @memberOf Dashboard
   * @return {*}
   */
  renderMain () {
    return (
      <SingleColumn content={this.renderSection(CHART_GROUP_SECTIONS.main)}/>
    );
  }

  /**
   * Render the secondary section of the layout
   * @memberOf Dashboard
   * @return {*}
   */
  renderSecondary () {
    return (
      <DoubleColumn left={this.renderSection(CHART_GROUP_SECTIONS.left)} right={this.renderSection(CHART_GROUP_SECTIONS.right)}/>
    );
  }

  /**
   * Render a section
   * @memberOf Dashboard
   * @param key
   * @return {function()}
   */
  renderSection (key) {
    return () => this.props.sections.get(key).map(chart => this.props.renderChart(chart));
  }

  render () {
    return <MainWithSecondary main={this.renderMain.bind(this)} secondary={this.renderSecondary.bind(this)}/>;
  }

}

export default Dashboard;